import asyncio
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))
from scripts.config import logger
from scripts.prompts import MARKDOWN_PROMPT
from scripts.api_ai import auto_category, api_openai_generate, api_github_readme, extract_github_info, extract_llm_text
from scripts.github_trending_scraper import main as github_trending_scraper


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


def project_exists(url: str) -> bool:
    """使用 rg 检查 GitHub 项目是否已经存在于 Markdown 文档中。"""
    normalized_url = normalize_github_url(url)
    result = subprocess.run(
        [
            "rg",
            "--fixed-strings",
            "--files-with-matches",
            "--glob",
            "*.md",
            normalized_url,
            str(DOCS_PATH),
        ],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode == 2:
        raise RuntimeError(f"执行 rg 失败: {result.stderr.strip()}")
    return result.returncode == 0


def list_files(dirname="notes/github"):
    """列出目录下的所有文件（生成器）。"""
    return (str(p) for p in Path(dirname).rglob("*") if p.is_file())


async def process_single_url(project_line: str) -> str | None:
    """处理单个 GitHub URL。"""
    project_line = project_line.strip()
    if not project_line:
        return None

    temp = project_line.split()
    url = normalize_github_url(temp[0])

    username, repository = extract_github_info(url)
    if not username or not repository:
        logger.warning(f"无法解析 GitHub URL: {url}")
        return None

    try:
        if project_exists(url):
            return None
    except Exception as e:
        logger.error(f"检查项目是否存在失败 {url}: {e}")
        return None

    try:
        # 获取 README
        readme_content = await api_github_readme(username, repository)
        if readme_content is None:
            return None

        # 生成 30～50 字中文简介（api_openai_generate 内部已重试，耗尽后返回 None）
        prompt = MARKDOWN_PROMPT.replace("readme_content", readme_content)
        ai_resp = await api_openai_generate(prompt)
        description = extract_llm_text(ai_resp)
        if not description:
            logger.warning(f"项目简介为空，跳过: {url}")
            return None

        # 解析分类
        if len(temp) == 1:
            category_dir = date.today().strftime("%Y-%m-%d")
        elif len(temp) == 2:
            category_dir = temp[1]
        else:
            logger.warning(f"无法解析：{temp}")
            return None

        # 生成文件内容
        title = (
            f"### [{repository}]({url}) "
            f"![GitHub Repo stars](https://img.shields.io/github/stars/"
            f"{username}/{repository}?style=social)\n\n"
        )
        text = title + description

        # 写入文件
        category_path = DOCS_PATH / category_dir
        category_path.mkdir(parents=True, exist_ok=True)
        filename = f"{repository}_{username}.md"
        (category_path / filename).write_text(text, encoding="utf-8")

        return f"Created: {filename}"

    except Exception as e:
        logger.error(f"处理项目 {url} 时出错：{e}")
        return None


async def category_md_files(dirname: str = "notes/github/00") -> None:
    """将文件分类到对应目录"""
    if not Path(dirname).exists():
        logger.warning(f"目录不存在: {dirname}")
        return

    docs_path = DOCS_PATH
    category_dirs = [str(child.relative_to(docs_path)) for child in docs_path.iterdir() if child.is_dir()]

    md_files = list(Path(dirname).glob("*.md"))
    if not md_files:
        return

    # 批量处理
    for md_file in md_files:
        try:
            content = md_file.read_text(encoding="utf-8")
            category = await auto_category(content, category_dirs)
            if not category:
                logger.warning(f"分类结果为空，跳过: {md_file.name}")
                continue
            logger.info(f"{md_file.name}, {category}")

            if category in category_dirs:
                target = docs_path / category / md_file.name
                target.parent.mkdir(parents=True, exist_ok=True)
                md_file.rename(target)
        except Exception as e:
            logger.error(f"处理文件 {md_file} 失败: {e}")

    # 清理空目录
    if Path(dirname).exists():
        import shutil

        shutil.rmtree(dirname)


def collect_md_urls() -> dict[str, str]:
    """收集 notes/github 下文档里的 GitHub URL，返回 {规范化 URL: 分类目录}。"""
    if not DOCS_PATH.exists():
        logger.error(f"目录不存在: {DOCS_PATH}")
        return {}

    url_cates: dict[str, str] = {}
    md_files = sorted(DOCS_PATH.rglob("*.md")) + sorted(DOCS_PATH.rglob("*.mdx"))

    for md_file in md_files:
        try:
            content = md_file.read_text(encoding="utf-8")
        except Exception as e:
            logger.warning(f"读取文件失败 {md_file}: {e}")
            continue

        rel_parts = md_file.relative_to(DOCS_PATH).parts
        category = rel_parts[0] if len(rel_parts) > 1 else ""
        if UNCATEGORIZED_FOLDER_PATTERN.match(category):
            category = ""

        for username, repo in MD_URL_PATTERN.findall(content):
            url = normalize_github_url(f"https://github.com/{username}/{repo}")
            known = url_cates.get(url)
            # 同一个 URL 出现在多个分类时，保留第一个非空分类
            if known is None or (not known and category):
                url_cates[url] = category

    return url_cates


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
