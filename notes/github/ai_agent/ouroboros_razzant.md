### [ouroboros](https://github.com/razzant/ouroboros) ![GitHub Repo stars](https://img.shields.io/github/stars/razzant/ouroboros?style=social)

Ouroboros 是一款开源通用 AI Agent，具备跨任务与重启的持久身份、记忆和历史。核心功能包括：

- **自我修改与进化**：可修改自身的代码、架构、提示词、工具和依赖，并通过演化合流将改进纳入 Git 历史，同时支持反思改变自我认知。
- **持续运行与后台意识**：跨重启保持连续性，支持非直接请求时的后台反思、主动规划与准备。
- **多代理协同**：协调专家子代理群体并行执行任务、共享发现并整合结果。
- **外部项目协作**：可在独立 Git 工作区处理外部项目，同时保持自身仓库边界清晰。
- **多端运行**：提供原生桌面应用与 CLI/Headless 模式，支持远程 API 和本地 GGUF 模型。
- **可审查扩展**：通过技能、工具桥接、MCP 等模块扩展能力，所有变更均可追溯和审查。
- **基准测试表现**：在 Terminal-Bench、OSWorld、CL-Bench 等评测中达到 SOTA 或与主流竞品持平。
- **跨平台与集成**：支持 macOS、Linux、Windows 及 Docker 部署，可通过 CLI/API 被其他 Agent、脚本或 CI 调用。