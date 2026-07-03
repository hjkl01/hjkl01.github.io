### [go-micro](https://github.com/micro/go-micro) ![GitHub Repo stars](https://img.shields.io/github/stars/micro/go-micro?style=social)

Go Micro 是一个面向 Go 语言的智能体（Agent）运行时框架和服务开发平台。其核心功能包括：

1. **服务与智能体统一开发**：将传统微服务与 AI 智能体结合，服务端点自动转化为 AI 可调用的工具，智能体可作为独立服务进行注册、发现和负载均衡。
2. **智能体增强能力**：内置计划生成（Plan）、任务委派（Delegate）、持久化记忆存储、执行护栏（Guardrails）及自定义工具支持。
3. **多协议互通**：原生支持 MCP（模型上下文协议）和 A2A（Agent-to-Agent 协议），实现跨框架的智能体互操作；支持 x402 标准实现工具调用的自动支付。
4. **工作流编排**：提供事件驱动且具备持久化执行能力的业务流程编排（Durable Flows）。
5. **全栈基础设施**：集成服务发现、RPC 通信、消息队列、键值存储及数据模型层，所有组件均支持插件化替换。
6. **开发者体验**：提供 CLI 工具，支持通过自然语言提示词自动生成服务代码、热重载、交互式控制台以及一键部署功能。