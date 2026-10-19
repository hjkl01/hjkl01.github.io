import asyncio
import os
import re
import unicodedata

from crawlee.crawlers._beautifulsoup import BeautifulSoupCrawler

# 导入 scripts.config 以加载 .env（TRENDING_PERIOD / TRENDING_PRINT_LIMIT）并统一日志配置。
import scripts.config  # noqa: F401
from scripts.github_projects import connect_db, migrate_legacy


TRENDING_PERIOD = os.getenv("TRENDING_PERIOD", "weekly")
TRENDING_URLS = [
    f"https://github.com/trending?since={TRENDING_PERIOD}",
    f"https://github.com/trending/python?since={TRENDING_PERIOD}",
    f"https://github.com/trending/go?since={TRENDING_PERIOD}",
    f"https://github.com/trending/rust?since={TRENDING_PERIOD}",
]

STARS_THIS_PERIOD_RE = re.compile(r"([\d,]+)\s+stars?\s+this\s+(\w+)", re.IGNORECASE)
NUMBER_RE = re.compile(r"[\d,]+")
# 打印条数上限；0 或负数表示全部打印（make run 默认打印全部抓取结果）。
PRINT_LIMIT_DEFAULT = 0


def _clean(text: str | None) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def _parse_int(text: str | None) -> int | None:
    match = NUMBER_RE.search(_clean(text))
    return int(match.group().replace(",", "")) if match else None


def _truncate(text: str, width: int) -> str:
    if len(text) <= width:
        return text
    return f"{text[: max(width - 1, 1)]}…"


def _display_width(text: str) -> int:
    """中文等全角字符按两列宽计算，保证对齐。"""
    return sum(2 if unicodedata.east_asian_width(char) in "WF" else 1 for char in text)


def _pad(text: str, width: int) -> str:
    return _truncate(text, width) + " " * max(width - _display_width(_truncate(text, width)), 0)


def _rpad(text: str, width: int) -> str:
    return " " * max(width - _display_width(_truncate(text, width)), 0) + _truncate(text, width)


def _parse_article(article, source: str) -> dict | None:
    """从 Trending 页面的单个 article 解析项目信息。"""
    h2_elem = article.find("h2", class_="h3")
    repo_link = h2_elem.find("a") if h2_elem else None
    href = repo_link.get("href") if repo_link else None
    if not href or not str(href).strip("/"):
        return None

    href_str = str(href).strip("/")
    owner, repo = href_str.split("/", 1)

    language_elem = article.find("span", attrs={"itemprop": "programmingLanguage"})
    language = _clean(language_elem.get_text() if language_elem else None)

    stars_elem = article.find("a", href=re.compile(r"/stargazers(\?|$)"))
    forks_elem = article.find("a", href=re.compile(r"/forks(\?|$)"))
    stars = _parse_int(stars_elem.get_text() if stars_elem else None)
    forks = _parse_int(forks_elem.get_text() if forks_elem else None)

    period_match = STARS_THIS_PERIOD_RE.search(article.get_text())
    stars_in_period = _parse_int(period_match.group(1)) if period_match else None

    desc_elem = article.find("p")
    trending_desc = _clean(desc_elem.get_text() if desc_elem else None)

    return {
        "full_name": f"{owner}/{repo}",
        "name": repo,
        "url": f"https://github.com/{owner}/{repo}",
        "source": source,
        "language": language,
        "stars": stars,
        "forks": forks,
        "stars_in_period": stars_in_period,
        "trending_description": trending_desc,
    }


async def scrape_github_trending() -> tuple[list[dict], dict[str, int]]:
    """爬取每周 GitHub Trending 仓库，返回去重后的项目信息和每页条数。"""
    repos: list[dict] = []
    seen: set[str] = set()
    per_page: dict[str, int] = {}

    async def handler(context):
        source = context.request.url
        soup = context.soup
        count = 0
        for article in soup.find_all("article", class_="Box-row"):
            try:
                item = _parse_article(article, source)
                if not item:
                    continue
                count += 1
                key = item["full_name"].casefold()
                if key in seen:
                    continue
                seen.add(key)
                repos.append(item)
            except Exception as exc:
                print(f"解析仓库失败: {exc}")
        per_page[source] = count

    crawler = BeautifulSoupCrawler()
    crawler.router.default_handler(handler)
    await crawler.add_requests(TRENDING_URLS)
    await crawler.run()
    return repos, per_page


def save_repositories(repositories: list[dict]) -> dict:
    """将 Trending 仓库登记到 SQLite，不覆盖已有简介和分类。

    同时为每条记录标记 status（新增/已收录），供调用方打印。
    """
    stats = {"inserted": 0, "existing": 0, "total": 0}
    conn = connect_db()
    try:
        if conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0] == 0:
            migrate_legacy(conn)

        for item in repositories:
            cursor = conn.execute(
                """
                INSERT OR IGNORE INTO projects
                    (full_name, name, url, description, category, display_order, category_source, category_status)
                VALUES (?, ?, ?, '', '未分类',
                    COALESCE((SELECT MAX(display_order) + 1 FROM projects WHERE category = '未分类'), 0),
                    'auto', 'pending')
                """,
                (item["full_name"], item["name"], item["url"]),
            )
            added = max(cursor.rowcount, 0)
            item["status"] = "新增" if added else "已收录"
            stats["inserted"] += added
            stats["existing"] += 1 - added
        conn.commit()
        stats["total"] = conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0]
        return stats
    finally:
        conn.close()


def print_scraped_projects(repositories: list[dict], stats: dict, per_page: dict[str, int]) -> None:
    """打印本次抓取的 GitHub 项目信息，便于在 make run 时直接查看。"""
    print(f"\n📊 GitHub Trending（{TRENDING_PERIOD}）抓取结果")
    print(f"  抓取页面 {len(per_page)} 个，条目 {sum(per_page.values())} 条，去重后 {len(repositories)} 个项目")
    for source, count in per_page.items():
        print(f"    {count:>3} 条  {source}")
    print(
        f"  写入 SQLite：新增 {stats['inserted']} 个，已收录 {stats['existing']} 个，"
        f"数据库总计 {stats['total']} 个项目"
    )

    try:
        limit = int(os.getenv("TRENDING_PRINT_LIMIT", PRINT_LIMIT_DEFAULT))
    except ValueError:
        limit = PRINT_LIMIT_DEFAULT
    shown = repositories if limit <= 0 else repositories[:limit]

    print(f"\n{'#':>3}  {_pad('状态', 8)}  {_pad('项目', 38)}  {_pad('语言', 12)}  "
          f"{_rpad('Stars', 8)}  {_rpad('本期', 7)}  {_rpad('Forks', 7)}  简介")
    print("─" * 120)
    for index, item in enumerate(shown, start=1):
        stars = f"{item['stars']:,}" if item.get("stars") is not None else "—"
        forks = f"{item['forks']:,}" if item.get("forks") is not None else "—"
        period = f"+{item['stars_in_period']:,}" if item.get("stars_in_period") is not None else "—"
        description = _truncate(item.get("trending_description") or "", 60)
        print(f"{index:>3}  {_pad(item.get('status', '未入库'), 8)}  "
              f"{_pad(item['full_name'], 38)}  {_pad(item.get('language') or '—', 12)}  {stars:>8}  "
              f"{period:>7}  {forks:>7}  {description}")

    if len(shown) < len(repositories):
        print(f"  … 其余 {len(repositories) - len(shown)} 个项目未打印（TRENDING_PRINT_LIMIT={limit}）")


def main() -> None:
    """爬取 Trending、直接写入 SQLite，并打印抓取的 GitHub 项目信息。"""
    repositories, per_page = asyncio.run(scrape_github_trending())
    stats = save_repositories(repositories)
    print_scraped_projects(repositories, stats, per_page)
    print(f"\nTrending 抓取 {len(repositories)} 条，新增写入 SQLite {stats['inserted']} 个项目")


if __name__ == "__main__":
    main()
