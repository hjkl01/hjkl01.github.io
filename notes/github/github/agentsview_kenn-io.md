### [agentsview](https://github.com/kenn-io/agentsview) ![GitHub Repo stars](https://img.shields.io/github/stars/kenn-io/agentsview?style=social)

agentsview 是一款本地 AI 编码助手使用追踪工具，支持浏览、搜索和统计 Claude Code、Codex、Cursor、Forge 等 30+ 种 AI 编程代理的 token 消耗与成本。

核心功能：
- 单二进制运行，无需账户，数据完全本地存储
- 自动发现各代理的会话目录，同步至 SQLite 数据库
- Web UI：仪表板展示每日成本、按模型/代理分项统计、活动热力图、全文搜索
- CLI 命令：`agentsview serve` 启动 Web 服务；`agentsview usage daily` 输出每日成本摘要；`agentsview stats` 输出会话分析
- 支持 PostgreSQL 推送到共享数据库实现团队协作
- 支持 DuckDB 镜像文件及 Quack 远程访问协议
- 定时任务自动同步：后台 pg push 守护进程

部署方式：独立二进制、桌面应用（macOS/Windows）或 Docker 容器。