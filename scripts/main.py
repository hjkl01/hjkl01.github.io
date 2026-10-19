import asyncio
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from scripts.api_ai import (
    api_github_readme,
    api_openai_generate,
    auto_category,
    extract_llm_text,
)
from scripts.config import logger
from scripts.github_projects import canonical_category, connect_db, migrate_legacy
from scripts.github_trending_scraper import main as github_trending_scraper
from scripts.prompts import MARKDOWN_PROMPT


UNCATEGORIZED_FOLDER_PATTERN = re.compile(r"^(\d{4}-\d{2}-\d{2}|00)$")


def get_db():
    """打开项目数据库；首次运行时兼容从旧 Markdown 初始化。"""
    conn = connect_db()
    if conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0] == 0:
        migrate_legacy(conn)
    return conn


async def process_project(full_name: str, url: str) -> str | None:
    """为 SQLite 中尚无简介的项目生成简介并更新原记录。"""
    try:
        owner, repository = full_name.split("/", 1)
        readme_content = await api_github_readme(owner, repository)
        if not readme_content:
            logger.warning(f"未获取到 README，稍后可重试: {full_name}")
            return None

        prompt = MARKDOWN_PROMPT.replace("readme_content", readme_content)
        ai_resp = await api_openai_generate(prompt)
        description = extract_llm_text(ai_resp)
        if not description:
            logger.warning(f"项目简介为空，稍后可重试: {full_name}")
            return None

        conn = get_db()
        try:
            conn.execute(
                """
                UPDATE projects
                SET description = ?, updated_at = CURRENT_TIMESTAMP
                WHERE lower(full_name) = lower(?) AND (description IS NULL OR trim(description) = '')
                """,
                (description, full_name),
            )
            conn.commit()
        finally:
            conn.close()
        return f"SQLite: {full_name}"
    except Exception as exc:
        logger.error(f"处理项目 {full_name} ({url}) 时出错：{exc}")
        return None


async def category_projects(recategorize: bool = False) -> None:
    """生成分类建议；常规模式只处理未分类项目，全量模式跳过人工分类。"""
    conn = get_db()
    try:
        rows = conn.execute(
            "SELECT id, full_name, url, description, category, category_source FROM projects ORDER BY id"
        ).fetchall()
        categories = [
            row["category"]
            for row in conn.execute(
                "SELECT category, COUNT(*) AS cnt FROM projects "
                "WHERE category <> '未分类' GROUP BY category COLLATE NOCASE "
                "ORDER BY cnt DESC, category COLLATE NOCASE"
            ).fetchall()
            if row["category"] and not UNCATEGORIZED_FOLDER_PATTERN.match(row["category"])
        ]
        pending = [
            row for row in rows
            if row["category_source"] != "manual"
            and (
                recategorize
                or not row["category"]
                or row["category"] == "未分类"
                or UNCATEGORIZED_FOLDER_PATTERN.match(row["category"])
            )
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
                if not category or UNCATEGORIZED_FOLDER_PATTERN.match(category):
                    logger.warning(f"分类结果无效，跳过: {row['full_name']}")
                    continue
                # 模型可能返回大小写不同的写法（ai / AI）；统一沿用已有分类名。
                category = canonical_category(category, categories)
                conn.execute(
                    """
                    UPDATE projects
                    SET category = CASE
                            WHEN category IS NULL OR trim(category) = '' OR category = '未分类'
                                 OR category GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]'
                            THEN ? ELSE category END,
                        auto_category = ?,
                        category_source = 'auto',
                        category_status = 'pending',
                        updated_at = CURRENT_TIMESTAMP
                    WHERE id = ? AND category_source <> 'manual'
                    """,
                    (category, category, row["id"]),
                )
                if category.casefold() not in {item.casefold() for item in categories}:
                    categories.append(category)
                logger.info(f"{row['full_name']} -> {category}")
            except Exception as exc:
                logger.error(f"项目分类失败 {row['full_name']}: {exc}")
        conn.commit()
    finally:
        conn.close()


async def generate_pending_descriptions() -> None:
    """处理 SQLite 中简介为空的项目；不再依赖 urls.txt。"""
    conn = get_db()
    try:
        pending = conn.execute(
            """
            SELECT full_name, url FROM projects
            WHERE description IS NULL OR trim(description) = ''
            ORDER BY id
            """
        ).fetchall()
    finally:
        conn.close()

    total = len(pending)
    created = 0
    for index, row in enumerate(pending, start=1):
        result = await process_project(row["full_name"], row["url"])
        if result:
            created += 1
        logger.info(f"[{index}/{total}] {row['full_name']} -> {result or '跳过/稍后重试'}")
    logger.info(f"简介生成完成: {created} 成功, {total - created} 跳过/失败")


async def main(command: str = "gene") -> None:
    if command == "cate":
        await category_projects()
    elif command == "recategorize":
        await category_projects(recategorize=True)
    else:
        await generate_pending_descriptions()


if __name__ == "__main__":
    command = sys.argv[1] if len(sys.argv) > 1 else "gene"
    if command == "crawl":
        github_trending_scraper()
    elif command == "cate":
        asyncio.run(main("cate"))
    elif command == "gene":
        asyncio.run(main("gene"))
    elif command == "recategorize":
        asyncio.run(main("recategorize"))
    else:
        logger.error(f"未知命令: {command}（可用: crawl cate gene recategorize）")
