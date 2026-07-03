### [cocoindex-code](https://github.com/cocoindex-io/cocoindex-code) ![GitHub Repo stars](https://img.shields.io/github/stars/cocoindex-io/cocoindex-code?style=social)

cocoindex-code 是一款基于 AST 的轻量级语义代码搜索工具，旨在帮助开发者通过自然语言快速定位和理解代码库中的相关片段。它内置后台守护进程，支持增量索引更新，仅需一分钟即可零配置启动，并能显著节省 Token 使用量。

主要特点包括：
1. **多端集成**：支持作为 CLI 命令直接使用，也可通过 Skill 或 MCP 协议无缝集成到 Claude、Codex、Cursor 等编程代理中，实现自动化的代码语义搜索。
2. **高性能底层**：基于 Rust 构建的 CocoIndex 引擎，确保极速的索引构建和搜索响应。
3. **灵活的嵌入模型**：支持本地部署（如 SentenceTransformers，无需 API Key）及云端提供商（通过 LiteLLM 支持 100+ 种模型）。
4. **结构化和语义搜索**：除了语义搜索外，还提供 `ccc grep` 进行基于语法树的结构化代码匹配。
5. **广泛的语言支持**：兼容 Python、JavaScript、Rust、Go、Java 等多种主流编程语言。
6. **容器化部署**：提供 Docker 镜像，方便团队在隔离环境中使用，保持环境一致性。