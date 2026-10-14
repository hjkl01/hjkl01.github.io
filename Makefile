PYTHON := python3.12

.PHONY: install run crawl cate gene export build deploy help

help:
	@echo "📋 可用命令:"
	@echo ""
	@echo "  make install      安装开发依赖"
	@echo "  make crawl        抓取 GitHub Trending"
	@echo "  make cate         对文档分类"
	@echo "  make gene         启动文章解析"
	@echo "  make build        生成 GitHub 分类项目页并构建站点"
	@echo "  make deploy       部署到 GitHub Pages"
	@echo "  make run          执行 crawl + gene + cate + build"
	@echo "  make export       初始化 SQLite（如有需要）并导出 URL+分类 到 urls.txt"
	@echo ""

install:
	@echo "📦 安装开发依赖..."
	uv sync
	@echo "✅ 依赖安装完成"

crawl: install
	@echo "🚀 抓取trending..."
	uv run scripts/main.py crawl

cate:
	@echo "🚀 分类..."
	uv run scripts/main.py cate

gene:
	@echo "🚀 启动解析..."
	uv run scripts/main.py

run: crawl gene cate build
	@echo "🚀 启动服务run\crawl..."

export:
	@echo "📦 从旧 Markdown 初始化 SQLite（仅数据库为空时导入）..."
	python3 scripts/github_projects.py migrate
	@echo "📤 从 SQLite 导出 URL+分类 到 urls.txt..."
	uv run scripts/main.py export

build:
	@echo "🏗️ 构建站点..."
	NODE_OPTIONS="--max-old-space-size=4096" pnpm build

deploy: build
	@echo "🚀 部署到 GitHub Pages..."
	pnpm run deploy
