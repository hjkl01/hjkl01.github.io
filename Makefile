.PHONY: install run crawl cate gene recategorize export pending review summary unify info build deploy help

help:
	@echo "📋 可用命令:"
	@echo ""
	@echo "  make install      安装开发依赖"
	@echo "  make crawl        抓取 GitHub Trending，打印抓取到的项目信息并写入 SQLite"
	@echo "  make cate         对 SQLite 中尚未分类的项目分类"
	@echo "  make pending      列出待人工审核的项目分类"
	@echo "  make recategorize 重新计算自动分类建议（不覆盖人工分类）"
	@echo "  make review       启动本地 Web 页面管理所有项目分类"
	@echo "                    可通过 GITHUB_REVIEW_PORT 指定端口（默认 8765）"
	@echo "  make gene         生成尚未生成简介的项目简介"
	@echo "  make summary      打印项目库总览（抓取入库、分类、简介情况）"
	@echo "  make unify        合并只差大小写/空格的分类（如 ai 归入 AI）；加 dry=1 只报告"
	@echo "  make info         等同 make summary"
	@echo "  make build        生成 GitHub 分类项目页并构建站点"
	@echo "  make deploy       部署到 GitHub Pages"
	@echo "  make run          执行 crawl + gene + cate + build + summary"
	@echo "  make export       将旧 Markdown 项目迁移到 SQLite（数据库非空时保留现有数据）"
	@echo ""

install:
	@echo "📦 安装开发依赖..."
	uv sync
	@echo "✅ 依赖安装完成"

crawl: install
	@echo "🚀 抓取 Trending 并保存到 SQLite，打印抓取到的项目信息..."
	uv run scripts/main.py crawl

cate:
	@echo "🚀 对 SQLite 项目分类..."
	uv run scripts/main.py cate

pending:
	@echo "📋 列出待审核分类..."
	uv run scripts/github_projects.py pending

recategorize:
	@echo "🔄 重新计算自动分类建议（跳过人工分类）..."
	uv run scripts/main.py recategorize

review:
	@echo "🌐 启动本地 GitHub 项目管理页面..."
	uv run python scripts/review_server.py

gene:
	@echo "🚀 生成待处理项目简介..."
	uv run scripts/main.py gene

summary:
	@echo "📊 打印抓取的 GitHub 项目信息..."
	uv run scripts/github_projects.py summary

info: summary

ifeq ($(dry),1)
UNIFY_ARGS := --dry-run
else
UNIFY_ARGS :=
endif

unify:
	@echo "🧹 合并大小写重复的分类..."
	uv run scripts/github_projects.py unify $(UNIFY_ARGS)

run: crawl gene cate build summary
	@echo "✅ crawl + gene + cate + build + summary 完成"

export:
	@echo "📦 将旧 Markdown 项目迁移到 SQLite（仅数据库为空时导入）..."
	python3 scripts/github_projects.py migrate

build:
	@echo "🏗️ 构建站点..."
	NODE_OPTIONS="--max-old-space-size=4096" pnpm build

deploy: build
	@echo "🚀 部署到 GitHub Pages..."
	pnpm run deploy
