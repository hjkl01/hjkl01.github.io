### [code-review-graph](https://github.com/tirth8205/code-review-graph) ![GitHub Repo stars](https://img.shields.io/github/stars/tirth8205/code-review-graph?style=social)

`code-review-graph` 是一个旨在优化 AI 编程工具代码审查效率的项目。它通过 Tree-sitter 解析代码构建结构化语法图，并利用 MCP 协议为 AI 助手提供精准的上下文，从而大幅降低 Token 消耗（中位数减少约 82 倍）。核心功能包括：变更影响范围分析、增量更新（2秒）、支持 30 余种编程语言及自定义扩展、自动配置主流 AI 编辑器（如 Cursor、Claude Code、Copilot 等）、本地优先的 SQLite 存储与多维度代码分析（社区发现、架构概览、语义搜索、风险评分等），以及支持 CI 流程的自动化 PR 审查。该项目专为大型项目与单体仓库设计，确保 AI 仅读取必要代码，显著提升审查精准度与开发效率。
