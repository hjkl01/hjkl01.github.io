### [react-doctor](https://github.com/millionco/react-doctor) ![GitHub Repo stars](https://img.shields.io/github/stars/millionco/react-doctor?style=social)

React Doctor 是一个用于 React 项目的代码审计工具，可确定性扫描代码库并发现多类问题，包括状态与副作用、性能、架构、安全性和可访问性。它支持几乎所有 React 生态框架与库（如 Next.js、Vite、TanStack、React Native、Expo 等）。

项目主要功能包括：
- **快速审计**：在项目根目录运行 `npx react-doctor@latest`，即可生成代码审计结果。
- **为 AI 编码代理安装能力**：运行 `npx react-doctor@latest install`，让代理学习并在后续修复类似问题（支持 Claude Code、Cursor、Codex、OpenCode 等）。
- **团队 CI 集成**：通过 GitHub Actions 在每次 PR 中自动扫描，提供行内注释并将问题直接展示在评审流程中。