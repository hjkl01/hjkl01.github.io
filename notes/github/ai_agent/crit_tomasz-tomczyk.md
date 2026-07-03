### [crit](https://github.com/tomasz-tomczyk/crit) ![GitHub Repo stars](https://img.shields.io/github/stars/tomasz-tomczyk/crit?style=social)

Crit 是一款本地运行的代码与计划审查工具，旨在提升人类对 AI 代理生成内容的审核效率。其核心功能包括：

1. **自适应界面**：针对不同类型的输出（如 Markdown 计划、Git 代码差异、前端应用、静态 HTML）提供专门的审查 UI。
2. **实时交互**：支持行级和范围评论，可一键将反馈发送给 AI 代理，代理修改后自动更新视图，形成闭环工作流。
3. **协作与同步**：支持通过链接异步分享审查结果，并能双向同步评论至 GitHub Pull Request。
4. **多平台集成**：兼容 Claude Code、Cursor、Copilot 等多种 AI 代理，支持多种安装方式（Homebrew, Go, Nix, Docker 等）。
5. **隐私优先**：默认本地运行，不收集用户数据或遥测信息。