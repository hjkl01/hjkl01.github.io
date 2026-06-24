### [flue](https://github.com/withastro/flue) ![GitHub Repo stars](https://img.shields.io/github/stars/withastro/flue?style=social)

Flue 是一个实验中的 TypeScript 智能体框架（Agent Harness Framework），核心目标是以“无界面、可编程、可部署到多运行时”的方式构建自治智能体。它提供内置的 agent harness（含会话、工具、沙箱、技能管理），使用体验类似 Claude Code，但不依赖人工操作或 GUI/TUI。

项目核心功能包括：

- **智能体开发与编排**：通过 `agents/<name>.ts` 定义智能体，使用 `init()` 创建 harness，`session.prompt()`/`session.skill()` 执行任务，并支持结构化结果校验。
- **多层状态模型**：支持“实例（instance）-harness-session”分层持久化；可通过 URL `<id>` 复用会话上下文，支持多线程会话与任务隔离。
- **任务拆分与子代理**：支持 `session.task()` 启动一次性子任务，和主会话共享文件系统但独立消息历史，便于并行研究与委派。
- **角色系统（Roles）**：可在 harness、session、单次调用三个层级注入角色指令，支持灵活的子代理行为控制。
- **沙箱能力**：默认使用高性能虚拟沙箱（just-bash）；也支持 Node 本地沙箱（`local()`）、Cloudflare Shell Workspace、以及 Daytona 等远程容器沙箱。
- **MCP 工具接入**：可连接远程 MCP Server 并将其工具注入智能体运行时，支持 HTTP 流式与 SSE（需显式指定）。
- **跨平台部署**：运行时无关，可部署到 Node.js、Cloudflare Workers、GitHub Actions、GitLab CI/CD 等环境。
- **Provider 级配置**：支持在应用入口统一配置模型提供商参数（网关、代理、自定义 endpoint、凭证等）。
- **连接器机制（Connectors）**：通过 `flue add` 获取并由编码代理生成第三方服务适配器（如沙箱提供商），写入项目本地 TypeScript 适配文件。
- **CLI 工具链**：
  - `flue dev`：本地热更新开发（Node/Cloudflare）
  - `flue run`：本地一次性触发智能体（适合 CI）
  - `flue build`：构建可部署产物（Node 或 Cloudflare）