#!/usr/bin/env python3
"""将旧项目 Markdown 迁移到 SQLite，并按分类生成 Docusaurus Markdown 页面。

SQLite 只有一张 projects 表；category 是项目字段，不单独维护分类表。
数据库是唯一数据源，构建时为每个分类生成一个 Markdown 文件。
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
OUTPUT_DIR = LEGACY_DIR
OUTPUT_FILE = OUTPUT_DIR / "index.md"
# index.md 是 docs 目录的 index 页面，其路由就是 routeBasePath（不带 /index）。
# 因此分类页返回链接必须指向该路由，写成 ./index 会产生坏链。
INDEX_ROUTE = "/notes/github"

REPO_LINK_RE = re.compile(r"\[[^\]]+\]\((https?://github\.com/[^/)]+/[^/)#?]+)(?:/[^)]*)?\)")
UNCATEGORIZED_RE = re.compile(r"^(\d{4}-\d{2}-\d{2}|00)$")


def normalize_category_name(category: object) -> str:
    """去除分类名首尾与中间多余空白；大小写变体在 casefold 层面归一。"""
    return re.sub(r"\s+", " ", str(category or "")).strip()


def load_category_map(conn: sqlite3.Connection) -> dict[str, str]:
    """返回 casefold 键 -> 规范分类名（同一含义里项目数最多的写法）。"""
    rows = conn.execute("SELECT category, COUNT(*) AS count FROM projects WHERE category IS NOT NULL AND trim(category) <> '' GROUP BY category").fetchall()
    best: dict[str, tuple[int, str]] = {}
    for row in rows:
        name = normalize_category_name(row["category"])
        if not name:
            continue
        key = name.casefold()
        current = best.get(key)
        if current is None or row["count"] > current[0] or (row["count"] == current[0] and name < current[1]):
            best[key] = (row["count"], name)
    return {key: value[1] for key, value in best.items()}


def canonical_category(category: object, known: dict[str, str] | list[str] | tuple[str, ...] | None = None) -> str:
    """把分类名归一到已有写法；known 可以是 load_category_map 的映射，也可以是分类名列表。"""
    name = normalize_category_name(category)
    if not name:
        return ""
    if isinstance(known, dict):
        return known.get(name.casefold(), name)
    for candidate in known or ():
        if normalize_category_name(candidate).casefold() == name.casefold():
            return candidate
    return name


def unify_categories(conn: sqlite3.Connection, dry_run: bool = False) -> int:
    """合并只差大小写/空格的分类（例如 ai 归入 AI），返回被修正的项目数。

    规范写法取项目数最多的变体；category 和 auto_category 一起修正，
    避免自动建议下次又产生新的大小写变体。
    """
    mapping = load_category_map(conn)
    rows = conn.execute("SELECT id, category, auto_category FROM projects").fetchall()
    changed = 0
    updates: list[tuple[str, str, int]] = []
    for row in rows:
        category = canonical_category(row["category"], mapping)
        auto_category = canonical_category(row["auto_category"], mapping)
        if category != normalize_category_name(row["category"]) or auto_category != normalize_category_name(row["auto_category"]):
            updates.append((category, auto_category, row["id"]))
            changed += 1
    if not dry_run and updates:
        conn.executemany(
            "UPDATE projects SET category = ?, auto_category = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
            updates,
        )
        conn.commit()
    if changed:
        print(f"{'待合并' if dry_run else '已合并'}大小写重复分类：{changed} 个项目（归一为 {len(mapping)} 个分类）")
    return changed


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

    # 生成文件也位于 notes/github；避免数据库为空时将生成结果再次当作旧数据导入。
    if "<!-- 此页面由 scripts/github_projects.py 从 SQLite 自动生成" in content:
        return None

    url_match = REPO_LINK_RE.search(content)
    if not url_match:
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
    description = re.sub(r"\s+", " ", " ".join(description_lines).strip())

    return {
        "full_name": url.removeprefix("https://github.com/"),
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
    # 兼容已有数据库：只增加列，不重建表或丢失现有项目。
    columns = {row["name"] for row in conn.execute("PRAGMA table_info(projects)")}
    migrations = {
        "auto_category": "TEXT NOT NULL DEFAULT ''",
        "category_source": "TEXT NOT NULL DEFAULT 'auto'",
        "category_status": "TEXT NOT NULL DEFAULT 'confirmed'",
    }
    for name, definition in migrations.items():
        if name not in columns:
            conn.execute(f"ALTER TABLE projects ADD COLUMN {name} {definition}")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_projects_category_order ON projects(category, display_order, name)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_projects_category_status ON projects(category_status, category)")
    conn.commit()
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
            INSERT INTO projects
                (full_name, name, url, description, category, display_order, category_source, category_status)
            VALUES (?, ?, ?, ?, ?, ?, 'auto', 'pending')
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
    # 旧目录里可能同时存在 ai/ 和 AI/ 等大小写变体，入库时归一。
    unify_categories(conn)
    print(f"迁移完成：导入 {imported} 个项目到 {DB_PATH.relative_to(ROOT)}")
    return imported


def category_filename(category: str) -> str:
    """将分类转换为安全、稳定的 Markdown 文件名，保留中文字符。"""
    slug = "".join(char if char.isalnum() or char in "-_ " else "-" for char in category)
    slug = re.sub(r"[\s-]+", "-", slug).strip("-_")
    slug = slug or "uncategorized"
    # index.md reserved for the category directory page.
    if slug.casefold() == "index":
        return "category-index"
    return slug


def markdown_cell(value: str) -> str:
    """将文本转换为可安全放入 Markdown 表格单元格的内容。"""
    return re.sub(r"\s+", " ", str(value or "")).replace("|", r"\|").strip()


def render_project(row: sqlite3.Row) -> str:
    owner, repo = row["full_name"].split("/", 1)
    badge = f"![Stars](https://img.shields.io/github/stars/{owner}/{repo}?style=social)"
    name = markdown_cell(row["name"])
    description = markdown_cell(row["description"]) or "—"
    return f"| [{name}]({row['url']}) | {badge} | {description} |"


def group_rows_by_category(rows: list[sqlite3.Row]) -> dict[str, list[sqlite3.Row]]:
    """按大小写无关归并分类；规范名取项目数最多的写法（例如 ai 归入 AI）。"""
    counts: dict[str, dict[str, int]] = {}
    for row in rows:
        name = normalize_category_name(row["category"]) or "未分类"
        bucket = counts.setdefault(name.casefold(), {})
        bucket[name] = bucket.get(name, 0) + 1
    canonical = {key: max(items, key=lambda name: (items[name], [-ord(c) for c in name])) for key, items in counts.items()}

    groups: dict[str, list[sqlite3.Row]] = {}
    for row in rows:
        name = normalize_category_name(row["category"]) or "未分类"
        groups.setdefault(canonical[name.casefold()], []).append(row)
    return groups


def write_output(target: Path, text: str) -> None:
    """写入文件；在大小写不敏感的文件系统上先删除同名不同写法的旧文件。

    APFS/macOS 大小写不敏感：如果磁盘上存在 ai.md，直接写 AI.md 会沿用旧名字，
    导致分类页文件名与链接不一致。
    """
    for stale in target.parent.iterdir():
        if stale.name.casefold() == target.name.casefold() and stale.name != target.name:
            stale.unlink()
    target.write_text(text, encoding="utf-8")


def generate_markdown(conn: sqlite3.Connection) -> int:
    rows = conn.execute(
        """
        SELECT full_name, name, url, description, category, display_order
        FROM projects
        ORDER BY category COLLATE NOCASE, display_order, name COLLATE NOCASE
        """
    ).fetchall()
    if not rows:
        raise RuntimeError("SQLite 中没有项目；请先运行 make export 迁移旧 Markdown。")

    groups: dict[str, list[sqlite3.Row]] = group_rows_by_category(rows)

    # 防止不同分类经文件名清理后发生冲突。
    filenames: dict[str, str] = {}
    used_names: set[str] = set()
    for category in groups:
        filename = category_filename(category)
        if filename.casefold() in used_names:
            suffix = 2
            while f"{filename}-{suffix}".casefold() in used_names:
                suffix += 1
            filename = f"{filename}-{suffix}"
        used_names.add(filename.casefold())
        filenames[category] = filename

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    index_lines = [
        "---",
        "sidebar_position: 0",
        "sidebar_label: GitHub 项目",
        "---",
        "",
        "<!-- 此页面由 scripts/github_projects.py 从 SQLite 自动生成，请勿手动编辑。 -->",
        "",
        "# GitHub 项目集",
        "",
        f"共收录 **{len(rows)}** 个项目，分为 **{len(groups)}** 个分类。Star 数通过 Shields.io 动态加载。",
        "",
        "| 分类 | 项目数量 |",
        "| --- | ---: |",
    ]

    for category, category_projects in groups.items():
        filename = filenames[category]
        index_lines.append(f"| [{markdown_cell(category)}]({INDEX_ROUTE}/{filename}) | {len(category_projects)} |")

        category_lines = [
            "---",
            f"title: {category}",
            f"sidebar_label: {category}",
            "---",
            "",
            "<!-- 此页面由 scripts/github_projects.py 从 SQLite 自动生成，请勿手动编辑。 -->",
            "",
            f"# {category}",
            "",
            f"本分类共 **{len(category_projects)}** 个项目。",
            "",
            f"[返回 GitHub 项目分类目录]({INDEX_ROUTE})",
            "",
            "| 项目 | Stars | 简介 |",
            "| --- | --- | --- |",
        ]
        category_lines.extend(render_project(row) for row in category_projects)

        write_output(OUTPUT_DIR / f"{filename}.md", "\n".join(category_lines).rstrip() + "\n")

    index_lines.append("")
    write_output(OUTPUT_FILE, "\n".join(index_lines).rstrip() + "\n")

    # notes/github 由 SQLite 全量生成；清理旧结构中的 Markdown 文件和过期分类页。
    # 大小写不敏感的文件系统上需要忽略文件名大小写判断“仍需要”。
    expected_files = {name.casefold() for name in (OUTPUT_FILE.name, *(f"{filename}.md" for filename in filenames.values()))}
    for path in OUTPUT_DIR.rglob("*.md"):
        if path.parent == OUTPUT_DIR and path.name.casefold() in expected_files:
            continue
        path.unlink()

    # 清理已经没有内容的旧分类目录。
    for path in sorted(OUTPUT_DIR.rglob("*"), key=lambda item: len(item.parts), reverse=True):
        if path.is_dir():
            try:
                path.rmdir()
            except OSError:
                pass

    print(f"已直接更新 {OUTPUT_DIR.relative_to(ROOT)}：{len(groups)} 个分类文件，{len(rows)} 个项目")
    return len(rows)


def show_pending(conn: sqlite3.Connection) -> int:
    rows = conn.execute(
        """
        SELECT id, full_name, category, auto_category, category_source
        FROM projects
        WHERE category_status <> 'confirmed'
        ORDER BY category COLLATE NOCASE, full_name COLLATE NOCASE
        """
    ).fetchall()
    if not rows:
        print("没有待审核的项目。")
        return 0
    print(f"待审核项目：{len(rows)} 个")
    for row in rows:
        suggestion = row["auto_category"] or "（无自动建议）"
        print(f"{row['id']:>5}  {row['full_name']}  当前：{row['category']}  自动建议：{suggestion}")
    return len(rows)


def show_summary(conn: sqlite3.Connection, recent: int = 15, max_categories: int = 20) -> int:
    """打印项目库总览：抓取入库量、简介/分类完成度、分类分布和最近入库项目。"""
    totals = conn.execute(
        """
        SELECT COUNT(*) AS total,
               SUM(CASE WHEN description IS NULL OR trim(description) = '' THEN 1 ELSE 0 END) AS no_description,
               SUM(CASE WHEN category IS NULL OR trim(category) = '' OR category = '未分类' THEN 1 ELSE 0 END) AS uncategorized,
               SUM(CASE WHEN category_status <> 'confirmed' THEN 1 ELSE 0 END) AS pending_review,
               SUM(CASE WHEN date(created_at) = date('now') THEN 1 ELSE 0 END) AS added_today
        FROM projects
        """
    ).fetchone()
    category_rows = conn.execute(
        """
        SELECT category, COUNT(*) AS count,
               SUM(CASE WHEN category_status <> 'confirmed' THEN 1 ELSE 0 END) AS pending
        FROM projects
        GROUP BY category
        """
    ).fetchall()
    # 按大小写无关归并分类（ai 计入 AI），并取项目数最多的写法作为显示名。
    canonical_names = load_category_map(conn)
    merged: dict[str, dict[str, int]] = {}
    for row in category_rows:
        name = canonical_names.get(normalize_category_name(row["category"]).casefold(), row["category"])
        bucket = merged.setdefault(name, {"count": 0, "pending": 0})
        bucket["count"] += row["count"]
        bucket["pending"] += row["pending"]
    category_rows = [
        {"category": name, "count": values["count"], "pending": values["pending"]}
        for name, values in sorted(merged.items(), key=lambda item: (-item[1]["count"], item[0].casefold()))
    ]

    print(f"📚 GitHub 项目库总览（{DB_PATH.relative_to(ROOT)}）")
    print(f"  项目总数：{totals['total']}  分类数：{len(category_rows)}  今日新增：{totals['added_today'] or 0}")
    print(f"  缺简介：{totals['no_description'] or 0}  未分类：{totals['uncategorized'] or 0}  待审核分类：{totals['pending_review'] or 0}")

    if category_rows:
        shown = category_rows if max_categories <= 0 else category_rows[:max_categories]
        print(f"  分类分布（共 {len(category_rows)} 个分类）：")
        width = max(len(str(row["category"])) for row in shown)
        for row in shown:
            pending = f"（待审核 {row['pending']}）" if row["pending"] else ""
            print(f"    {str(row['category']):<{width}}  {row['count']:>4} 个{pending}")
        rest = category_rows[len(shown) :]
        if rest:
            other = sum(row["count"] for row in rest)
            print(f"    {'其他':<{width}}  {other:>4} 个（{len(rest)} 个小分类）")

    recent_rows = conn.execute(
        """
        SELECT id, full_name, url, category, description, created_at
        FROM projects
        ORDER BY id DESC
        LIMIT ?
        """,
        (recent,),
    ).fetchall()
    if recent_rows:
        print(f"  最近入库 {len(recent_rows)} 个项目：")
        for row in recent_rows:
            summary = re.sub(r"\s+", " ", row["description"] or "（暂无简介）")
            print(f"    {row['id']:>5}  {row['full_name']:<40}  [{row['category']}]  {summary[:60]}")
            print(f"           {row['url']}")
    return totals["total"]


def review_categories(conn: sqlite3.Connection) -> None:
    skipped: set[int] = set()
    categories = [
        row["category"]
        for row in conn.execute(
            "SELECT category FROM projects WHERE category IS NOT NULL AND trim(category) <> '' "
            "AND category <> '未分类' GROUP BY category COLLATE NOCASE "
            "ORDER BY COUNT(*) DESC, category COLLATE NOCASE"
        )
    ]
    categories.sort(key=str.casefold)
    while True:
        placeholders = ",".join("?" for _ in skipped) or "-1"
        row = conn.execute(
            f"""
            SELECT id, full_name, name, description, category, auto_category
            FROM projects
            WHERE category_status <> 'confirmed' AND id NOT IN ({placeholders})
            ORDER BY category COLLATE NOCASE, full_name COLLATE NOCASE
            LIMIT 1
            """,
            tuple(skipped),
        ).fetchone()
        if row is None:
            print("所有待审核项目均已处理。")
            return

        print("\n" + "=" * 72)
        print(f"项目：{row['full_name']}")
        print(f"简介：{row['description'] or '（暂无简介）'}")
        print(f"当前分类：{row['category']}")
        print(f"自动建议：{row['auto_category'] or '（无）'}")
        print("选择分类编号，或输入 n 创建分类；a 接受自动建议；s 跳过；q 退出。")
        for index, category in enumerate(categories, start=1):
            print(f"  {index}. {category}")
        choice = input("> ").strip()
        if choice.lower() == "q":
            print("已退出审核。")
            return
        if choice.lower() == "s":
            skipped.add(row["id"])
            continue
        if choice.lower() == "a":
            if not row["auto_category"]:
                print("该项目没有自动分类建议，请选择已有分类或输入 n 创建分类。")
                continue
            category = row["auto_category"]
        elif choice.lower() == "n":
            category = input("输入新分类名称：").strip()
            if not category:
                print("分类名称不能为空。")
                continue
            # 已有 AI 时输入 ai 归入 AI，不重建大小写变体。
            category = canonical_category(category, categories)
            if category.casefold() not in {item.casefold() for item in categories}:
                categories.append(category)
                categories.sort(key=str.casefold)
        elif choice.isdigit() and 1 <= int(choice) <= len(categories):
            category = categories[int(choice) - 1]
        else:
            print("无效选择，请重试。")
            continue

        conn.execute(
            """
            UPDATE projects
            SET category = ?,
                category_source = 'manual', category_status = 'confirmed',
                updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
            """,
            (category, row["id"]),
        )
        conn.commit()
        print(f"已确认：{row['full_name']} -> {category}")


def main() -> None:
    parser = argparse.ArgumentParser(description="管理 GitHub 项目 SQLite 数据并按分类生成 Markdown 页面")
    parser.add_argument(
        "command",
        choices=("build", "migrate", "generate", "pending", "review", "summary", "unify"),
    )
    parser.add_argument("--force", action="store_true", help="重新从旧 Markdown 导入并覆盖相同仓库的数据")
    parser.add_argument("--dry-run", action="store_true", help="unify 只报告将合并的大小写重复分类，不写库")
    parser.add_argument("--recent", type=int, default=15, help="summary 打印最近入库的项目数量")
    parser.add_argument("--categories", type=int, default=20, help="summary 打印的分类数量上限，0 表示全部")
    args = parser.parse_args()

    conn = connect_db()
    try:
        if args.command == "migrate":
            migrate_legacy(conn, force=args.force)
        elif args.command == "unify":
            unify_categories(conn, dry_run=args.dry_run)
        elif args.command == "pending":
            show_pending(conn)
        elif args.command == "summary":
            if conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0] == 0:
                migrate_legacy(conn)
            show_summary(conn, recent=args.recent, max_categories=args.categories)
        elif args.command == "review":
            review_categories(conn)
        else:
            if conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0] == 0:
                migrate_legacy(conn)
            else:
                # 历史数据可能已有 ai/AI 这类大小写变体；生成页面前先归一。
                unify_categories(conn)
            generate_markdown(conn)
    finally:
        conn.close()


if __name__ == "__main__":
    main()
