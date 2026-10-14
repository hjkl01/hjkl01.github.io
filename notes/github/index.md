---
sidebar_position: 0
sidebar_label: GitHub 项目
---

# GitHub 项目集

GitHub 项目由 SQLite 统一管理，构建时从数据库生成分类聚合页。

- `make crawl`：抓取 GitHub Trending，并将新仓库直接写入 `data/github-projects.db`
- `make gene`：为数据库中尚无简介的项目生成简介
- `make cate`：对数据库中尚未分类的项目进行分类
- `make export`：将旧的 `notes/github/**/*.md` 数据迁移到 SQLite；数据库非空时不会覆盖已有数据
- `make build`：从 SQLite 生成项目聚合页并构建网站
- 项目简介、分类和显示顺序保存在 SQLite；Star 数由浏览器加载 Shields.io 动态显示

## 分类目录

| 目录 | 主题 |
| --- | --- |
| `AI` / `ai_agent` / `ai_mcp` / `ai_media` / `ai_rag` | AI、智能体、MCP、多媒体与 RAG |
| `api` / `crawling` / `download` / `ocr` / `translation` | 接口、抓取、下载与文本处理 |
| `backup` / `database` / `data` / `monitoring` | 备份、存储与可观测性 |
| `chat` / `network` / `nginx` / `web` / `email` | 通信、网络与 Web 服务 |
| `deploy` / `docker` / `kubernetes` / `openwrt` | 部署、容器与网络设备 |
| `git` / `github` / `team` / `docs` / `markdown` | Git 协作与文档工具 |
| `go` / `rust` / `python` / `nodejs` / `shell` / `neovim` | 语言生态与编辑器 |
| `android` / `desktop` / `input` / `macos` / `windows` / `linux` | 各平台工具 |
| `games` / `emulators` / `media` / `music` / `office` / `tools` | 娱乐与日常效率 |
| `interview` / `testing` / `cryptography` | 面试、测试与密码学 |

> 左侧目录树可展开查看全部项目。
