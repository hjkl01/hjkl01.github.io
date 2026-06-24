### [cli](https://github.com/entireio/cli) ![GitHub Repo stars](https://img.shields.io/github/stars/entireio/cli?style=social)

Entire CLI 是一个与 Git 深度集成的命令行工具，用于在开发过程中自动记录 AI 代理（如 Claude Code、Codex、Gemini、Cursor、Copilot CLI、Pi 等）的会话数据，并将其与代码提交关联，形成可检索、可追溯的开发记录。

核心功能包括：
- 自动捕获 AI 会话内容：提示词、回复、改动文件、工具调用、token 使用等；
- 基于提交创建检查点（checkpoint），可随时回退到历史状态并继续工作；
- 会话与元数据独立存储在 `entire/checkpoints/v1` 分支，不污染当前业务分支提交历史；
- 支持恢复历史会话、并行会话跟踪、git worktree 场景；
- 支持多代理 Hook 管理、项目/本地配置、遥测开关、日志级别与策略配置；
- 可将检查点分支推送到独立远程仓库，并支持专用 token（`ENTIRE_CHECKPOINT_TOKEN`）；
- 可选自动生成提交时的 AI 会话摘要（当前依赖 Claude CLI）；
- 提供完整运维命令（enable/disable/status/session/checkpoint/doctor/clean 等）用于启用、排障、清理与维护；
- 提供基础安全机制（敏感信息自动脱敏，尽力而为）与隐私提示（公开仓库中的会话数据可见）。