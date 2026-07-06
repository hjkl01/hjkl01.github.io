### [workmux](https://github.com/raine/workmux) ![GitHub Repo stars](https://img.shields.io/github/stars/raine/workmux?style=social)

Workmux 是一个用于并行开发的命令行工具，旨在将 Git 工作树（worktrees）与终端复用器（如 tmux、WezTerm、Kitty 或 Zellij）深度集成，为每个开发任务创建隔离的环境。

其核心功能包括：

1.  **并行开发工作流**：允许同时处理多个特性或修复，每个任务拥有独立的终端窗口、编辑器会话、开发服务器和 AI 代理，无需频繁切换分支或 stash 代码。
2.  **自动化环境搭建**：在创建工作树时自动复制配置文件（如 `.env`）、符号链接依赖（如 `node_modules`）并执行初始化命令，解决 Git 工作树默认不包含忽略文件的痛点。
3.  **一键清理与合并**：通过单一命令完成代码合并、删除工作树、关闭终端窗口及清理本地分支的全生命周期管理。
4.  **AI 代理集成**：专为并行运行多个 AI 编码代理设计，支持自动注入提示词、监控代理状态，并提供仪表盘（Dashboard）和侧边栏（Sidebar）以集中监控和管理多个代理任务。
5.  **高度可配置**：支持自定义终端窗格布局、生命周期钩子、文件操作以及多种 AI 代理的后端支持。