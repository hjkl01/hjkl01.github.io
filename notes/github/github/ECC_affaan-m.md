### [ECC](https://github.com/affaan-m/ECC) ![GitHub Repo stars](https://img.shields.io/github/stars/affaan-m/ECC?style=social)

ECC 是一个面向智能体开发的“跨平台操作系统/性能系统”，核心目标是把 AI 编程助手从“配置集合”升级为可生产使用的完整工作流体系。它提供：

- **跨工具统一能力**：可在 Claude Code、Codex、Cursor、OpenCode、Zed、GitHub Copilot、Gemini 等多种 AI 开发环境中复用。
- **完整组件栈**：包含大量可直接使用的 **agents（子代理）**、**skills（技能工作流）**、**rules（规则）**、**hooks（自动化钩子）**、**commands（命令兼容层）** 与 **MCP 配置**。
- **工程化工作流能力**：覆盖规划、架构、TDD、代码审查、构建修复、安全扫描、文档更新、E2E 测试、会话管理、验证闭环、并行协作、多代理编排等。
- **持续学习与记忆机制**：支持会话上下文持久化、模式自动提取、instinct/skill 演化，提升长期协作效率。
- **安全与治理能力**：集成 AgentShield，可做配置与提示注入风险审计、权限审计、密钥检测、MCP 风险分析，并支持 CI 闸门化输出。
- **安装与运维能力**：支持插件安装与手动按需安装、选择性组件安装、状态检测/修复/卸载、跨平台脚本与包管理器自动识别。
- **性能与成本优化**：提供模型路由、上下文压缩、Hook 运行时开关、Token 消耗控制与多 MCP 负载管理建议。
- **可视化入口**：提供桌面 Dashboard（Tkinter）用于浏览 agents/skills/commands/rules 与设置管理。