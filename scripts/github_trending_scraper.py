import asyncio

from crawlee.crawlers._beautifulsoup import BeautifulSoupCrawler

from scripts.github_projects import connect_db, migrate_legacy


TRENDING_PERIOD = "weekly"
TRENDING_URLS = [
    f"https://github.com/trending?since={TRENDING_PERIOD}",
    f"https://github.com/trending/python?since={TRENDING_PERIOD}",
    f"https://github.com/trending/go?since={TRENDING_PERIOD}",
    f"https://github.com/trending/rust?since={TRENDING_PERIOD}",
]


async def scrape_github_trending() -> list[dict]:
    """爬取每周 GitHub Trending 仓库。"""
    repos = []

    async def handler(context):
        soup = context.soup
        repo_articles = soup.find_all("article", class_="Box-row")

        for article in repo_articles:
            try:
                h2_elem = article.find("h2", class_="h3")
                repo_link = h2_elem.find("a") if h2_elem else None
                href = repo_link.get("href") if repo_link else None
                if not href or not str(href).strip("/"):
                    continue

                href_str = str(href).strip("/")
                owner, repo = href_str.split("/", 1)
                repo_url = f"https://github.com/{owner}/{repo}"

                desc_elem = article.find("p", class_="col-9")
                description = desc_elem.get_text(" ", strip=True) if desc_elem else ""

                repos.append({
                    "full_name": f"{owner}/{repo}",
                    "name": repo,
                    "url": repo_url,
                    "trending_description": description,
                })
            except Exception as exc:
                print(f"解析仓库失败: {exc}")

    crawler = BeautifulSoupCrawler()
    crawler.router.default_handler(handler)
    await crawler.add_requests(TRENDING_URLS)
    await crawler.run()
    return repos


def save_repositories(repositories: list[dict]) -> int:
    """将 Trending 仓库登记到 SQLite，不覆盖已有简介和分类。"""
    conn = connect_db()
    try:
        if conn.execute("SELECT COUNT(*) FROM projects").fetchone()[0] == 0:
            migrate_legacy(conn)

        inserted = 0
        for item in repositories:
            cursor = conn.execute(
                """
                INSERT OR IGNORE INTO projects
                    (full_name, name, url, description, category, display_order)
                VALUES (?, ?, ?, '', '未分类',
                    COALESCE((SELECT MAX(display_order) + 1 FROM projects WHERE category = '未分类'), 0))
                """,
                (item["full_name"], item["name"], item["url"]),
            )
            inserted += max(cursor.rowcount, 0)
        conn.commit()
        return inserted
    finally:
        conn.close()


def main() -> None:
    """爬取 Trending 并直接写入 SQLite。"""
    repositories = asyncio.run(scrape_github_trending())
    inserted = save_repositories(repositories)
    print(f"Trending 抓取 {len(repositories)} 条，新增写入 SQLite {inserted} 个项目")


if __name__ == "__main__":
    main()
