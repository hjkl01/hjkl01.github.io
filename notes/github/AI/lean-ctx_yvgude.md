### [lean-ctx](https://github.com/yvgude/lean-ctx) ![GitHub Repo stars](https://img.shields.io/github/stars/yvgude/lean-ctx?style=social)

LeanCTX（Lean Cortex）是一个面向 AI 编码代理的轻量级本地上下文层工具（单二进制、零配置），用于在开发工作流中对“代码与 AI 之间的上下文 token”进行压缩、记忆、路由与复用，从而减少 token 浪费、降低 API 成本并提升长会话稳定性。

核心功能包括三层：
1. **压缩层**：自动压缩文件读取与命令行输出（如 git/npm/docker/kubectl 等），支持多种读取模式与缓存重读，显著减少 token 消耗。  
2. **记忆层**：提供跨聊天持久化会话记忆、知识图谱与代码属性图，支持任务/事实/决策恢复、影响分析与更精准检索。  
3. **治理与可观测层**：提供实时上下文仪表盘、预算与策略控制、上下文校验能力，帮助团队可视化并管理上下文窗口使用。

项目以 MCP 服务器方式工作，兼容 Cursor、Claude Code、Copilot、Codex、Gemini、Windsurf 等 20+ 代理/IDE；支持 Hybrid（MCP+Shell Hook）与纯 MCP 两种集成模式。另提供重构、多代理协作、PR 上下文打包、基准测试、实时节省统计等能力。整体定位是：在不改变现有开发环境的前提下，让 AI 编码更省 token、更少上下文丢失、更可控。