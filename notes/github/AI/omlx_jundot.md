### [omlx](https://github.com/jundot/omlx) ![GitHub Repo stars](https://img.shields.io/github/stars/jundot/omlx?style=social)

oMLX 是一个面向 Apple Silicon Mac 的本地大模型推理服务，主打“高性能 + 易管理”。它支持在同一服务中运行 LLM、VLM、OCR、Embedding 和 Reranker 模型，并提供 OpenAI/Anthropic 兼容 API、Web 管理后台和 macOS 菜单栏应用。

项目核心功能包括：连续批处理（提升并发吞吐）、冷热分层 KV 缓存（内存 + SSD，支持前缀复用与重启后缓存恢复）、多模型统一调度（LRU 淘汰、模型常驻、TTL 自动卸载、手动加载/卸载）、按模型独立参数配置（别名、采样、模板参数、类型覆盖等）以及内置聊天、模型下载、性能基准测试和一键集成常见 AI 客户端。

它可通过 macOS App、Homebrew 或源码安装，支持后台服务运行与自动重启，配置可通过 CLI 或 `/admin` 面板统一管理，适合在 Mac 上进行本地 AI 开发与生产级推理服务部署。