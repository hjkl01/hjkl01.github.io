### [rivet](https://github.com/rivet-dev/rivet) ![GitHub Repo stars](https://img.shields.io/github/stars/rivet-dev/rivet?style=social)

Rivet 是一个基于 Actor 模型的有状态工作负载平台，专为 AI Agent、协作应用和持久化执行场景设计。

**核心能力：**
- Actor 作为轻量级长期进程，状态驻留内存并自动持久化
- 每个 Actor 可独立运行，支持 WebSocket 实时通信、工作流、消息队列和定时调度
- 冷启动约 20ms，空闲时自动休眠，支持无限水平扩展和零成本缩容
- 内置全球边缘网络，支持多区域部署

**适用场景：**
- AI Agent（每个 Agent 独立 Actor，持久化上下文和记忆）
- 协作应用（如实时协作文档、聊天室）
- 多步骤工作流（带重试和持久化状态）
- 沙箱编排和按租户隔离的数据库

**部署灵活：**
- 可作为纯库本地运行
- 支持自托管（Rust 二进制或 Docker）
- 提供 Rivet Cloud 全托管服务

项目采用 Apache 2.0 开源协议，支持 Node.js、Bun、Deno 等运行时及 React、Next.js 等主流框架。