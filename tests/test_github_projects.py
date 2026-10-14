"""针对 GitHub 项目 SQLite 迁移和分类页面生成的隔离测试。"""

import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from scripts import github_projects as projects
from scripts import github_trending_scraper as scraper


class GitHubProjectsTests(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp_dir.cleanup)
        self.root = Path(self.temp_dir.name)
        self.legacy_dir = self.root / "notes" / "github"
        self.legacy_dir.mkdir(parents=True)
        self.db_path = self.root / "data" / "github-projects.db"
        self.output_dir = self.root / "generated" / "github"
        self.output_file = self.output_dir / "index.md"
        self.patches = [
            patch.object(projects, "ROOT", self.root),
            patch.object(projects, "LEGACY_DIR", self.legacy_dir),
            patch.object(projects, "DB_PATH", self.db_path),
            patch.object(projects, "OUTPUT_DIR", self.output_dir),
            patch.object(projects, "OUTPUT_FILE", self.output_file),
        ]
        for item in self.patches:
            item.start()
            self.addCleanup(item.stop)

    def write_project(self, category, filename, full_name, description):
        path = self.legacy_dir / category / filename
        path.parent.mkdir(parents=True, exist_ok=True)
        owner, repo = full_name.split("/", 1)
        path.write_text(
            f"# [{repo}](https://github.com/{owner}/{repo})\n\n"
            f"{description}\n",
            encoding="utf-8",
        )
        return path

    def connect(self):
        return projects.connect_db()

    def test_migration_generates_one_markdown_file_per_category(self):
        self.write_project("AI 工具", "alpha.md", "acme/alpha", "Alpha project description.")
        self.write_project("DevOps", "beta.md", "acme/beta", "Beta project description.")
        conn = self.connect()
        try:
            self.assertEqual(projects.migrate_legacy(conn), 2)
            self.assertEqual(projects.generate_markdown(conn), 2)
            columns = {row["name"] for row in conn.execute("PRAGMA table_info(projects)")}
            self.assertTrue({"full_name", "description", "category"} <= columns)
            self.assertTrue({"language", "stars", "topics"}.isdisjoint(columns))
            tables = {
                row["name"]
                for row in conn.execute(
                    "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
                )
            }
            self.assertEqual(tables, {"projects"})
        finally:
            conn.close()

        index = self.output_file.read_text(encoding="utf-8")
        ai_page = (self.output_dir / "AI-工具.md").read_text(encoding="utf-8")
        devops_page = (self.output_dir / "DevOps.md").read_text(encoding="utf-8")
        self.assertIn("[AI 工具](./AI-工具)", index)
        self.assertIn("[DevOps](./DevOps)", index)
        self.assertIn("Alpha project description.", ai_page)
        self.assertIn("Beta project description.", devops_page)
        self.assertIn("https://img.shields.io/github/stars/acme/alpha?style=social", ai_page)
        self.assertEqual(
            {p.name for p in self.output_dir.glob("*.md")},
            {"index.md", "AI-工具.md", "DevOps.md"},
        )

    def test_existing_database_data_is_not_overwritten_by_migration(self):
        self.write_project("Original", "alpha.md", "acme/alpha", "Original description.")
        conn = self.connect()
        try:
            self.assertEqual(projects.migrate_legacy(conn), 1)
            conn.execute(
                "UPDATE projects SET description = ?, category = ? WHERE full_name = ?",
                ("Manually maintained description.", "Hand picked", "acme/alpha"),
            )
            conn.commit()
            self.assertEqual(projects.migrate_legacy(conn), 0)
            row = conn.execute(
                "SELECT description, category FROM projects WHERE full_name = ?",
                ("acme/alpha",),
            ).fetchone()
            self.assertEqual(row["description"], "Manually maintained description.")
            self.assertEqual(row["category"], "Hand picked")
            projects.generate_markdown(conn)
        finally:
            conn.close()

        index = self.output_file.read_text(encoding="utf-8")
        category_page = (self.output_dir / "Hand-picked.md").read_text(encoding="utf-8")
        self.assertIn("[Hand picked](./Hand-picked)", index)
        self.assertIn("Manually maintained description.", category_page)

    def test_removed_category_pages_are_cleaned_up(self):
        conn = self.connect()
        try:
            conn.executemany(
                """
                INSERT INTO projects (full_name, name, url, description, category)
                VALUES (?, ?, ?, ?, ?)
                """,
                [
                    ("acme/alpha", "alpha", "https://github.com/acme/alpha", "Alpha", "Old"),
                    ("acme/beta", "beta", "https://github.com/acme/beta", "Beta", "Current"),
                ],
            )
            conn.commit()
            projects.generate_markdown(conn)
            conn.execute("DELETE FROM projects WHERE category = 'Old'")
            conn.commit()
            projects.generate_markdown(conn)
            self.assertFalse((self.output_dir / "Old.md").exists())
            self.assertTrue((self.output_dir / "Current.md").exists())
        finally:
            conn.close()

    def test_duplicate_repository_is_imported_once(self):
        self.write_project("Category A", "one.md", "acme/alpha", "First copy.")
        self.write_project("Category B", "two.md", "acme/alpha", "Second copy.")
        conn = self.connect()
        try:
            self.assertEqual(projects.migrate_legacy(conn), 1)
            self.assertEqual(conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0], 1)
        finally:
            conn.close()

    def test_trending_projects_are_saved_to_sqlite_without_overwriting_existing_data(self):
        repositories = [
            {"full_name": "acme/alpha", "name": "alpha", "url": "https://github.com/acme/alpha"},
            {"full_name": "acme/beta", "name": "beta", "url": "https://github.com/acme/beta"},
        ]
        self.assertEqual(scraper.save_repositories(repositories), 2)
        self.assertEqual(scraper.save_repositories(repositories), 0)

        conn = self.connect()
        try:
            conn.execute(
                "UPDATE projects SET description = ?, category = ? WHERE full_name = ?",
                ("Preserved description", "Manual category", "acme/alpha"),
            )
            conn.commit()
        finally:
            conn.close()

        self.assertEqual(scraper.save_repositories(repositories), 0)
        conn = self.connect()
        try:
            row = conn.execute(
                "SELECT description, category FROM projects WHERE full_name = ?",
                ("acme/alpha",),
            ).fetchone()
            self.assertEqual(row["description"], "Preserved description")
            self.assertEqual(row["category"], "Manual category")
            self.assertEqual(conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0], 2)
        finally:
            conn.close()


if __name__ == "__main__":
    unittest.main()
