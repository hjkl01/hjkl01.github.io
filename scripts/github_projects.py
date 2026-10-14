#!/usr/bin/env python3
"""将 notes/github 中的旧项目 Markdown 迁移到 SQLite，并生成聚合项目页。

SQLite 只有一张 projects 表；category 是项目字段，不单独维护分类表。
数据库一旦存在，就以数据库为准，不会在构建时覆盖人工维护的简介和分类。
"""

from __future__ import annotations

import argparse
import re
import sqlite3
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
LEGACY_DIR = ROOT / "notes" / "github"
DB_PATH = ROOT / "data" / "github-projects.db"
OUTPUT_DIR = ROOT / "generated" / "github"
OUTPUT_FILE = OUTPUT_DIR / "index.md"

REPO_LINK_RE = re.compile(r"\[[^\]]+\]\((https?://github\.com/[^/)]+/[^/)#?]+)(?:/[^)]*)?\)")
STARS_RE = re.compile(r"img\.shields\.io/github/stars/([^/]+)/([^?/)]+)")
UNCATEGORIZED_RE = re.compile(r"^(\d{4}-\d{2}-\d{2}|00)$")


def normalize_repo_url(url: str) -> str | None:
    parsed = urlparse(url.strip())
    if parsed.netloc.lower() not in {"github.com", "www.github.com"}:
        return None
    parts = [part for part in parsed.path.strip("/").split("/") if part]
    if len(parts) < 2:
        return None
    owner, repo = parts[0], parts[1].removesuffix(".git")
    if owner.lower() in {"features", "topics", "collections", "settings"}:
        return None
    return f"https://github.com/{owner}/{repo}"


def parse_markdown(path: Path) -> dict | None:
    try:
        content = path.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError) as exc:
        print(f"跳过无法读取的文件 {path.relative_to(ROOT)}: {exc}")
        return None

    url_match = REPO_LINK_RE.search(content)
    if not url_match:
        # 兼容标题链接不是第一个 Markdown 元素的旧文档。
        url_match = re.search(r"https?://github\.com/([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+)", content)
        if not url_match:
            return None
        url = f"https://github.com/{url_match.group(1)}/{url_match.group(2)}"
    else:
        url = url_match.group(1)

    url = normalize_repo_url(url)
    if not url:
        return None

    repo_path = Path(path).relative_to(LEGACY_DIR)
    category = repo_path.parts[0] if len(repo_path.parts) > 1 else "未分类"
    if UNCATEGORIZED_RE.match(category):
        category = "未分类"

    # 从标题中提取展示名，优先使用 Markdown 链接文字。
    title_match = re.search(r"^\s*#{1,6}\s+\[([^\]]+)\]\(", content, re.MULTILINE)
    name = title_match.group(1).strip() if title_match else url.rstrip("/").split("/")[-1]

    description_lines = []
    started = False
    for line in content.splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("---") or stripped.startswith("<!--"):
            if started and not stripped:
                break
            continue
        if stripped.startswith("#"):
            continue
        if "img.shields.io/github/stars/" in stripped:
            continue
        if stripped.startswith("![") or stripped.startswith("[!["):
            continue
        started = True
        description_lines.append(stripped)
        if len(description_lines) >= 2:
            break
    description = " ".join(description_lines).strip()
    description = re.sub(r"\s+", " ", description)

    owner_repo = url.removeprefix("https://github.com/")
    return {
        "full_name": owner_repo,
        "name": name,
        "url": url,
        "description": description,
        "category": category,
    }


def connect_db() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY,
            full_name TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL,
            url TEXT NOT NULL,
            description TEXT NOT NULL DEFAULT '',
            category TEXT NOT NULL DEFAULT '未分类',
            display_order INTEGER NOT NULL DEFAULT 0,
            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
        """
    )
    conn.execute("CREATE INDEX IF NOT EXISTS idx_projects_category_order ON projects(category, display_order, name)")
    return conn


def migrate_legacy(conn: sqlite3.Connection, force: bool = False) -> int:
    existing = conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0]
    if existing and not force:
        print(f"SQLite 已有 {existing} 个项目，保留现有数据；如需重新导入旧 Markdown，请使用 --force。")
        return 0

    if not LEGACY_DIR.exists():
        raise FileNotFoundError(f"旧项目目录不存在：{LEGACY_DIR}")

    imported = 0
    seen = set()
    files = sorted(LEGACY_DIR.rglob("*.md"))
    for path in files:
        if path.name.lower() == "index.md":
            continue
        item = parse_markdown(path)
        if not item or item["full_name"].lower() in seen:
            continue
        seen.add(item["full_name"].lower())
        conn.execute(
            """
            INSERT INTO projects (full_name, name, url, description, category, display_order)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(full_name) DO UPDATE SET
                name=excluded.name,
                url=excluded.url,
                description=excluded.description,
                category=excluded.category,
                display_order=excluded.display_order,
                updated_at=CURRENT_TIMESTAMP
            """,
            (
                item["full_name"],
                item["name"],
                item["url"],
                item["description"],
                item["category"],
                imported,
            ),
        )
        imported += 1

    conn.commit()
    print(f"迁移完成：导入 {imported} 个项目到 {DB_PATH.relative_to(ROOT)}")
    return imported


def generate_markdown(conn: sqlite3.Connection) -> int:
    rows = conn.execute(
        """
        SELECT full_name, name, url, description, category, display_order
        FROM projects
        ORDER BY category COLLATE NOCASE, display_order, name COLLATE NOCASE
        """
    ).fetchall()
    if not rows:
        raise RuntimeError("SQLite 中没有项目；请先运行 pnpm run github:db:migrate。")

    groups: dict[str, list[sqlite3.Row]] = {}
    for row in rows:
        groups.setdefault(row["category"] or "未分类", []).append(row)

    lines = [
        "---",
        "sidebar_position: 0",
        "sidebar_label: GitHub 项目",
        "---",
        "",
        "<!-- 此页面由 scripts/github_projects.py 从 SQLite 自动生成，请勿手动编辑。 -->",
        "",
        "# GitHub 项目集",
        "",
        f"共收录 **{len(rows)}** 个项目，按分类整理。Star 数通过 Shields.io 在浏览器端动态加载。",
        "",
    ]

    for category, projects in groups.items():
        lines.extend([f"## {category}", ""])
        for row in projects:
            owner, repo = row["full_name"].split("/", 1)
            # Shields.io 作为图片在浏览器端请求实时 Star 数，不把数量存入 SQLite。
            badge = f"![GitHub Stars](https://img.shields.io/github/stars/{owner}/{repo}?style=social)"
            lines.append(f"### [{row['name']}]({row['url']}) {badge}")
            lines.append("")
            if row["description"]:
                lines.append(row["description"])
                lines.append("")
        lines.append("")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    print(f"已生成 {OUTPUT_FILE.relative_to(ROOT)}：{len(groups)} 个分类，{len(rows)} 个项目")
    return len(rows)


def main() -> None:
    parser = argparse.ArgumentParser(description="管理 GitHub 项目 SQLite 数据和聚合 Markdown 页面")
    parser.add_argument("command", choices=("build", "migrate", "generate"))
    parser.add_argument("--force", action="store_true", help="重新从旧 Markdown 导入并覆盖相同仓库的数据")
    args = parser.parse_args()

    conn = connect_db()
    try:
        if args.command == "migrate":
            migrate_legacy(conn, force=args.force)
        elif args.command == "generate":
            if conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0] == 0:
                migrate_legacy(conn)
            generate_markdown(conn)
        else:
            if conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0] == 0:
                migrate_legacy(conn)
            generate_markdown(conn)
    finally:
        conn.close()


if __name__ == "__main__":
    main()
