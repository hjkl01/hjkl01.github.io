import asyncio
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))
from scripts.config import logger
from scripts.prompts import MARKDOWN_PROMPT
from scripts.api_ai import auto_category, api_openai_generate, api_github_readme, extract_github_info, extract_llm_text
from scripts.github_trending_scraper import main as github_trending_scraper
from scripts.github_projects import connect_db, migrate_legacy


# 预编译正则表达式
GITHUB_URL_PATTERN = re.compile(r"https?://github\.com/([^/]+)/([^/?#]+)(?:[/?#].*)?")
MD_URL_PATTERN = re.compile(r"https://github\.com/([a-zA-Z0-9_.-]+)/([a-zA-Z0-9_.-]+)")
# 日期目录（如 2026-10-09）和 00 目录表示尚未分类，不作为 urls.txt 的分类字段
UNCATEGORIZED_FOLDER_PATTERN = re.compile(r"^(\d{4}-\d{2}-\d{2}|00)$")
DOCS_PATH = Path("notes/github")


def normalize_github_url(url: str) -> str:
    """统一 GitHub 仓库 URL，避免尾部 / 或 .git 导致重复。"""
    match = GITHUB_URL_PATTERN.search(url.strip())
    if not match:
        return url.strip().rstrip("/")

    username, repository = match.groups()
    repository = repository.removesuffix(".git")
    return f"https://github.com/{username}/{repository}"


def get_db():
    """打开项目数据库；首次运行时兼容从旧 Markdown 初始化。"""
    conn = connect_db()
    if conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0] == 0:
        migrate_legacy(conn)
    return conn


def project_exists(url: str) -> bool:
    """通过 SQLite 判断项目是否已收录。"""
    normalized = normalize_github_url(url)
    repo = normalized.removeprefix("https://github.com/").lower()
    conn = get_db()
    try:
        return conn.execute(
            "SELECT 1 FROM projects WHERE lower(full_name) = ?",
            (repo,),
        ).fetchone() is not None
    finally:
        conn.close()

def list_files(dirname="notes/github"):
    """列出目录下的所有文件（生成器）。"""
    return (str(p) for p in Path(dirname).rglob("*") if p.is_file())


async def process_single_url(project_line: str) -> str | None:
    """处理单个 GitHub URL，并将项目直接写入 SQLite。"""
    project_line = project_line.strip()
    if not project_line:
        return None

    parts = project_line.split()
    url = normalize_github_url(parts[0])
    if len(parts) > 2:
        logger.warning(f"无法解析：{parts}")
        return None

    username, repository = extract_github_info(url)
    if not username or not repository:
        logger.warning(f"无法解析 GitHub URL: {url}")
        return None

    try:
        if project_exists(url):
            return None

        readme_content = await api_github_readme(username, repository)
        if readme_content is None:
            return None

        prompt = MARKDOWN_PROMPT.replace("readme_content", readme_content)
        ai_resp = await api_openai_generate(prompt)
        description = extract_llm_text(ai_resp)
        if not description:
            logger.warning(f"项目简介为空，跳过: {url}")
            return None

        category = parts[1] if len(parts) == 2 else "未分类"
        if UNCATEGORIZED_FOLDER_PATTERN.match(category):
            category = "未分类"

        conn = get_db()
        try:
            display_order = conn.execute(
                "SELECT COALESCE(MAX(display_order), -1) + 1 FROM projects WHERE category = ?",
                (category,),
            ).fetchone()[0]
            cursor = conn.execute(
                """
                INSERT OR IGNORE INTO projects
                    (full_name, name, url, description, category, display_order)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (
                    f"{username}/{repository}",
                    repository,
                    url,
                    description,
                    category,
                    display_order,
                ),
            )
            conn.commit()
            if cursor.rowcount == 0:
                return None
        finally:
            conn.close()

        return f"SQLite: {username}/{repository} [{category}]"
    except Exception as e:
        logger.error(f"处理项目 {url} 时出错：{e}")
        return None

async def category_md_files(dirname: str | None = None) -> None:
    """对 SQLite 中尚未分类的项目进行分类，并直接更新项目表。"""
    conn = get_db()
    try:
        rows = conn.execute(
            "SELECT id, full_name, url, description, category FROM projects ORDER BY id"
        ).fetchall()
        categories = [
            row[0] for row in conn.execute(
                "SELECT DISTINCT category FROM projects WHERE category <> '未分类' ORDER BY category COLLATE NOCASE"
            ).fetchall()
            if row[0] and not UNCATEGORIZED_FOLDER_PATTERN.match(row[0])
        ]

        pending = [
            row for row in rows
            if not row["category"]
            or row["category"] == "未分类"
            or UNCATEGORIZED_FOLDER_PATTERN.match(row["category"])
        ]
        if not pending:
            logger.info("SQLite 中没有待分类项目")
            return

        for row in pending:
            try:
                content = f"{row['full_name']}\n{row['url']}\n{row['description']}"
                category = await auto_category(content, categories)
                if not category:
                    logger.warning(f"分类结果为空，跳过: {row['full_name']}")
                    continue
                category = category.strip()
                conn.execute(
                    "UPDATE projects SET category = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
                    (category, row["id"]),
                )
                if category not in categories:
                    categories.append(category)
                logger.info(f"{row['full_name']} -> {category}")
            except Exception as e:
                logger.error(f"项目分类失败 {row['full_name']}: {e}")

        conn.commit()
    finally:
        conn.close()

def collect_md_urls() -> dict[str, str]:
    """从 SQLite 收集项目 URL 和分类，返回 {规范化 URL: 分类}。"""
    conn = get_db()
    try:
        rows = conn.execute("SELECT url, category FROM projects ORDER BY id").fetchall()
        return {
            normalize_github_url(row["url"]): (
                "" if not row["category"] or row["category"] == "未分类"
                or UNCATEGORIZED_FOLDER_PATTERN.match(row["category"])
                else row["category"]
            )
            for row in rows
        }
    finally:
        conn.close()

def export_urls(output: str = "urls.txt") -> None:
    """把文档中的 GitHub URL 及分类（`<URL> <分类>`）合并写回 urls.txt。

    先读旧文件并按规范化 URL 去重：文档里已有的以文档分类为准，
    尚未生成文档的待处理行原样保留，可重复执行。
    """
    url_cates = collect_md_urls()
    out_path = Path(output)
    lines: dict[str, str] = {}

    if out_path.exists():
        for line in out_path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line:
                lines.setdefault(normalize_github_url(line.split()[0]), line)
    kept_urls = set(lines)

    for url, category in sorted(url_cates.items()):
        if not category and len(lines.get(url, "").split()) > 1:
            continue  # 该 URL 已有分类，保留原行
        lines[url] = f"{url} {category}".strip()

    out_lines = [lines[url] for url in sorted(lines, key=str.lower)]
    out_path.write_text("\n".join(out_lines) + ("\n" if out_lines else ""), encoding="utf-8")
    logger.info(
        f"{output} 共 {len(out_lines)} 条：来自文档 {len(url_cates)}，待处理 {len(kept_urls - set(url_cates))}"
    )


async def main(args: str | None = None) -> None:
    """主函数"""
    if args == "cate":
        await category_md_files()
        return

    # 读取 URL 列表
    urls_path = Path("urls.txt")
    if not urls_path.exists():
        logger.error("urls.txt 文件不存在")
        return

    urls = urls_path.read_text(encoding="utf-8").splitlines()

    # 本次抓取的多个语言分类可能包含相同项目，先按规范化 URL 去重。
    unique_urls = {}
    for line in urls:
        if line.strip():
            normalized = normalize_github_url(line.split()[0])
            unique_urls[normalized] = line

    # 串行处理，避免并发调用 LLM
    total = len(unique_urls)
    created = 0
    for index, line in enumerate(unique_urls.values(), start=1):
        result = await process_single_url(line)
        if result:
            created += 1
        logger.info(f"[{index}/{total}] {line.strip()} -> {result or '跳过'}")

    logger.info(f"处理完成: {created} 成功, {total - created} 跳过/失败")


if __name__ == "__main__":
    command = sys.argv[1] if len(sys.argv) > 1 else "gene"
    if command == "cate":
        asyncio.run(main("cate"))
    elif command == "crawl":
        github_trending_scraper()
    elif command == "gene":
        asyncio.run(main())
    elif command == "export":
        export_urls()
    else:
        logger.error(f"未知命令: {command}（可用: crawl cate gene export）")
