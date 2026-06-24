### [codegraph](https://github.com/colbymchenry/codegraph) ![GitHub Repo stars](https://img.shields.io/github/stars/colbymchenry/codegraph?style=social)

CodeGraph 是一个面向 AI 编码代理（Claude Code、Cursor、Codex CLI、opencode、Hermes Agent）的本地语义代码知识图谱工具。它通过预先索引代码库中的符号关系、调用链和结构信息，让代理直接查询知识图谱而不是反复 grep/读文件，从而显著降低成本、Token 消耗、耗时和工具调用次数。

项目核心能力包括：语义上下文构建、符号搜索、调用方/被调用方追踪、变更影响分析、跨符号源码聚合探索、文件结构查询与索引状态检查；支持调用路径追踪（含动态分发场景）和基于依赖的受影响测试文件分析（`affected`）。

技术实现上，CodeGraph 使用 tree-sitter 解析多语言代码并抽取 AST 语义关系，存入本地 SQLite（含 FTS5 全文检索），并通过原生文件系统事件自动增量同步，保持索引实时更新。全程 100% 本地运行，无需外部服务和 API Key。

它提供零配置安装与初始化流程（含交互式代理配置、MCP 接入、项目级索引管理），支持 Windows/macOS/Linux（x64/arm64），并支持 19+ 语言及多种 Web 框架路由识别，可将 URL 路由自动关联到处理函数/控制器。