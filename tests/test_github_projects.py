"""针对 GitHub 项目 SQLite 迁移和 Markdown 生成的隔离测试。"""

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
            f"# [{repo}](https://github.com/{owner}/{repo})\\n\\n"
            f"{description}\\n",
            encoding="utf-8",
        )
        return path

    def connect(self):
        return projects.connect_db()

    def test_migration_generation_and_schema(self):
        self.write_project("AI 工具", "alpha.md", "acme/alpha", "Alpha project description.")
        conn = self.connect()
        try:
            self.assertEqual(projects.migrate_legacy(conn), 1)
            self.assertEqual(projects.generate_markdown(conn), 1)
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

        markdown = self.output_file.read_text(encoding="utf-8")
        self.assertIn("## AI 工具", markdown)
        self.assertIn("Alpha project description.", markdown)
        self.assertIn("https://img.shields.io/github/stars/acme/alpha?style=social", markdown)

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

        markdown = self.output_file.read_text(encoding="utf-8")
        self.assertIn("## Hand picked", markdown)
        self.assertIn("Manually maintained description.", markdown)

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
