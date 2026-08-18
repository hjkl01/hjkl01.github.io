import asyncio
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))
from scripts.api_ai import auto_category, api_github_readme, api_openai_generate, extract_github_info
from scripts.github_trending_scraper import main as github_trending_scraper
from scripts.config import logger
from scripts.prompts import MARKDOWN_PROMPT


GITHUB_URL_PATTERN = re.compile(r"https?://github\.com/([^/]+)/([^/?#]+)(?:[/?#].*)?")
MAX_PROJECTS_PER_FILE = 30
TEMP_CATEGORY = "00"
DOCS_PATH = Path("notes/github")

# 同一个分类的多个项目可能同时完成，写入时必须串行，否则可能覆盖彼此的内容。
write_lock = asyncio.Lock()


def normalize_github_url(url: str) -> str:
    """统一 GitHub 仓库 URL，避免 / 和 .git 导致重复。"""
    match = GITHUB_URL_PATTERN.search(url.strip())
    if not match:
        return url.strip().rstrip("/")
    username, repository = match.groups()
    repository = repository.removesuffix(".git")
    return f"https://github.com/{username}/{repository}"


def project_exists(url: str) -> bool:
    """使用 rg 检查项目是否已经存在于现有 Markdown 中。"""
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


def build_project_markdown(username: str, repository: str, description: str) -> str:
    """生成单个项目的 Markdown 片段。"""
    url = f"https://github.com/{username}/{repository}"
    title = (
        f"### [{repository}]({url}) "
        f"![GitHub Repo stars](https://img.shields.io/github/stars/{username}/{repository}?style=social)"
    )
    return f"{title}\n\n{description.strip()}\n\n"


async def process_single_url(project_line: str, md_files: set) -> str | None:
    """处理单个 GitHub URL，生成临时项目文件，后续由 cate 聚合。"""
    del md_files  # 保留旧函数签名，避免外部调用方受到影响。

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
            logger.info(f"项目已存在，跳过: {url}")
            return None
    except Exception as e:
        logger.error(f"检查项目是否存在失败 {url}: {e}")
        return None

    logger.info(project_line)
    try:
        readme_content = await api_github_readme(username, repository)
        if readme_content is None:
            return None

        prompt = MARKDOWN_PROMPT.replace("readme_content", readme_content)
        ai_resp = await api_openai_generate(prompt)
        if isinstance(ai_resp, dict):
            ai_resp = ai_resp.get("text", "")
        description = str(ai_resp).strip()
        if not description:
            logger.warning(f"项目简介为空，跳过: {url}")
            return None

        # 保持旧流程：先放到 00 临时目录，再由 cate 完成分类和聚合。
        temp_path = DOCS_PATH / TEMP_CATEGORY
        temp_path.mkdir(parents=True, exist_ok=True)
        filename = f"{repository}_{username}.md"
        (temp_path / filename).write_text(
            build_project_markdown(username, repository, description),
            encoding="utf-8",
        )
        return f"Created: {filename}"

    except Exception as e:
        logger.error(f"处理项目 {url} 时出错：{e}")
        return None


async def append_project_to_category(category: str, project_content: str) -> Path:
    """将项目追加到分类 Markdown，并按项目数量自动分片。"""
    category_path = DOCS_PATH / category
    category_path.mkdir(parents=True, exist_ok=True)

    async with write_lock:
        # 再次使用 rg 检查，防止并发任务或手工修改导致重复写入。
        match = GITHUB_URL_PATTERN.search(project_content)
        if match and project_exists(normalize_github_url(match.group(0))):
            raise ValueError(f"项目已存在，拒绝重复写入: {normalize_github_url(match.group(0))}")

        files = sorted(
            [p for p in category_path.glob("*.md") if p.stem.isdigit()],
            key=lambda p: int(p.stem),
        )
        target = files[-1] if files else category_path / "01.md"

        if target.exists():
            content = target.read_text(encoding="utf-8")
            project_count = len(re.findall(r"^### ", content, flags=re.MULTILINE))
            if project_count >= MAX_PROJECTS_PER_FILE:
                target = category_path / f"{int(target.stem) + 1:02d}.md"

        if not target.exists():
            target.write_text(f"# {category}\n\n", encoding="utf-8")

        with target.open("a", encoding="utf-8") as f:
            f.write(project_content)

        return target


async def category_md_files(dirname: str = "notes/github/00") -> None:
    """将临时项目分类，并聚合到分类 Markdown。"""
    temp_path = Path(dirname)
    if not temp_path.exists():
        logger.warning(f"目录不存在: {dirname}")
        return

    docs_path = DOCS_PATH
    category_dirs = [
        str(child.relative_to(docs_path))
        for child in docs_path.iterdir()
        if child.is_dir() and child.name != TEMP_CATEGORY
    ]

    md_files = sorted(temp_path.glob("*.md"))
    if not md_files:
        return

    for md_file in md_files:
        try:
            content = md_file.read_text(encoding="utf-8")
            category = await auto_category(content, category_dirs)
            category = str(category).strip()
            if category not in category_dirs:
                category = "github"

            target = await append_project_to_category(category, content)
            md_file.unlink()
            logger.info(f"{md_file.name} -> {target}")
        except Exception as e:
            logger.error(f"处理文件 {md_file} 失败: {e}")

    if temp_path.exists() and not any(temp_path.iterdir()):
        temp_path.rmdir()


def export_urls() -> None:
    """导出所有 md 文件中的 GitHub URL。"""
    md_files = list(DOCS_PATH.rglob("*.md")) + list(DOCS_PATH.rglob("*.mdx"))
    url_folders: dict[str, set[str]] = {}

    for md_file in md_files:
        try:
            content = md_file.read_text(encoding="utf-8")
            matches = GITHUB_URL_PATTERN.findall(content)
            rel_path = md_file.relative_to(DOCS_PATH)
            folder = rel_path.parts[0] if len(rel_path.parts) > 1 else ""

            for username, repo in matches:
                url = normalize_github_url(f"https://github.com/{username}/{repo}")
                url_folders.setdefault(url, set()).add(folder)
        except Exception as e:
            logger.warning(f"读取文件失败 {md_file}: {e}")

    with open("bak.txt", "a", encoding="utf-8") as f:
        for url, folders in sorted(url_folders.items()):
            folder_str = " ".join(sorted(folders)) if folders else ""
            f.write(f"{url} {folder_str}\n".strip() + "\n")

    logger.info(f"导出完成: 共 {len(url_folders)} 个 URL")


async def main(args: str | None = None) -> None:
    """主函数。"""
    if args == "cate":
        await category_md_files()
        return

    urls_path = Path("urls.txt")
    if not urls_path.exists():
        logger.error("urls.txt 文件不存在")
        return

    urls = urls_path.read_text(encoding="utf-8").splitlines()
    # Trending 的不同语言页面可能返回同一个项目，先在本次任务内去重。
    unique_urls = {}
    for line in urls:
        if line.strip():
            normalized = normalize_github_url(line.split()[0])
            unique_urls[normalized] = line

    tasks = [process_single_url(line, set()) for line in unique_urls.values()]
    results = await asyncio.gather(*tasks, return_exceptions=True)

    success = [r for r in results if isinstance(r, str)]
    errors = [r for r in results if isinstance(r, Exception)]
    logger.info(f"处理完成: {len(success)} 成功, {len(errors)} 失败")


if __name__ == "__main__":
    argv = sys.argv
    if len(argv) > 1:
        if argv[1] == "cate":
            asyncio.run(main("cate"))
        elif argv[1] == "crawl":
            github_trending_scraper()
        elif argv[1] == "export":
            export_urls()
        else:
            asyncio.run(main())
    else:
        asyncio.run(main())
