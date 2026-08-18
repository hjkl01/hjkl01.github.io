### [ai-memory](https://github.com/akitaonrails/ai-memory) ![GitHub Repo stars](https://img.shields.io/github/stars/akitaonrails/ai-memory?style=social)

# ai-memory 项目功能总结

ai-memory 是为 AI 编程代理（如 Claude Code、Codex 等）提供**长期持久化记忆**的工具。

## 核心功能

- **跨会话记忆延续**：在任一 AI 编程代理中中断任务后，切换到其他代理可继续之前的工作，自动注入"上次做到哪里"的交接信息，无需重新解释架构、失败方案或未解决问题。

- **生命周期钩子自动捕获**：通过钩子自动捕获提示词、工具调用、紧凑检查点和会话边界，数据以清理后的形式写入本地服务器。

- **Markdown Wiki 存储**：记忆以纯 Markdown 文件存储在 Git 仓库中，支持 grep 搜索、Obsidian 打开，无向量数据库维护负担。

- **跨代理无缝切换**：支持 Claude Code、Codex、Command Code、Devin、OpenCode、Cursor、Gemini CLI、Grok Build CLI、Kimi Code、Kiro CLI 等多个代理间的记忆交接。

- **托管工作流**：通过 `ai-memory run` 命令实现跨不同代理的透明连续性，保留原生会话状态和可移植的历史记录。

- **智能检索**：支持 FTS5 全文搜索、实体匹配、图邻居 RRF 检索，可选向量相似度检索；具备优先级感知（区分规则页与事件页）。

- **LLM 辅助摘要**：可选接入 LLM 提供商（Anthropic、OpenAI、Gemini 等），在会话结束时自动生成精炼摘要页；也支持零 LLM 模式（仅规则摘要+搜索）。

- **全局偏好与项目隔离**：支持全局偏好设置（技术选型、代码风格等），每个项目独立隔离，互不干扰。

- **内置 Web UI**：提供只读 HTML 界面浏览 Wiki、搜索、查看深色模式。

- **多用户与多机部署**：支持本机回环或远程服务器部署，可选 Bearer Token 认证、OIDC 设备令牌、用户归属和会话隔离。

- **自动化维护**：支持自动改进调度（审查会话学习并生成 Wiki 编辑建议）、定期清理过期页面、重复标题检测等。