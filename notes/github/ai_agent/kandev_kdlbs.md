### [kandev](https://github.com/kdlbs/kandev) ![GitHub Repo stars](https://img.shields.io/github/stars/kdlbs/kandev?style=social)

**Kandev 功能总结**

Kandev 是一款开源的 AI 代理协作平台，支持并行执行多任务、编排智能工作流、审查代码变更。

**核心功能：**
- **多代理支持**：兼容 Claude Code、Codex、Copilot、Gemini CLI、Cursor、Devin 等 20+ AI 代理，支持同一任务混合使用不同代理
- **并行任务执行**：同时启动和管理多个来自不同源的任务，配合 Git worktree 隔离避免冲突
- **集成工作台**：内置终端、代码编辑器、Git 变更面板、浏览器预览，统一查看和审查代理输出
- **看板任务管理**：拖拽式看板界面，支持工作流自动化
- **可编排工作流**：创建多步骤流水线，灵活组合不同代理完成规划、实现、审查等环节
- **子任务系统**：代理可创建子任务并从父任务会话恢复执行
- **多仓库任务**：单任务跨越多个仓库执行，自动管理分支和 PR

**运行时选项：**
- 本地进程、Docker 容器、SSH 远程服务器、Sprites 云环境
- 支持通过 Tailscale 或 VPN 远程访问

**其他特性：**
- 工作流导出/导入（YAML 格式）
- 会话恢复和任务快照分享
- 生产者优先的审查流程设计
- 与 Jira、Linear、GitHub、GitLab、Sentry、Slack 等工具集成
- 无遥测、自托管、开源（AGPL-3.0）

**适用场景**：需要深度控制 AI 代理工作流、批量并行执行任务、集中审查代码变更的开发者和团队。