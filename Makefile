PYTHON := python3.12

.PHONY: install run crawl cate gene export build help

help:
	@echo "📋 可用命令:"
	@echo ""
	@echo "  make install      安装开发依赖"
	@echo "  make crawl        抓取 GitHub Trending"
	@echo "  make cate         对文档分类"
	@echo "  make gene         启动文章解析"
	@echo "  make build        构建 Docusaurus 站点"
	@echo "  make run          执行 crawl + gene"
	@echo "  make export       从 md 文件导出 URL 到 urls.txt"
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

run: crawl gene
	@echo "🚀 启动服务run\crawl..."

export:
	@echo "📤 导出 URL..."
	uv run scripts/main.py export

build:
	@echo "🏗️ 构建站点..."
	pnpm build
