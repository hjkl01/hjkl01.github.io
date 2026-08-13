### [actors](https://github.com/rivet-dev/actors) ![GitHub Repo stars](https://img.shields.io/github/stars/rivet-dev/actors?style=social)

# Rivet 项目功能总结

**Rivet** 是一个面向 AI 代理、协作应用和持久化执行的可状态工作负载平台。其核心是 **Rivet Actors**——长运行、轻量级的进程，内存状态自动持久化，可为每个代理、会话或用户单独创建。

## 核心特性

- **状态管理**：内存中运行，自动持久化至 SQLite 或自定义数据库，读取延迟约 0ms
- **高性能**：冷启动约 20ms，单实例内存占用约 0.6KB，空闲成本为 0
- **弹性伸缩**：支持无限水平扩展和缩至零，适合突发流量
- **全球边缘网络**：支持就近部署和特定司法管辖区合规
- **内置通信**：原生 WebSocket 实时双向流式传输
- **工作流引擎**：多步骤操作、自动重试、持久状态
- **消息队列**：持久化队列支持可靠异步处理
- **定时任务**：Actor 内置定时器和 cron 任务

## 内置可观测性

- SQLite 数据库实时查看
- 工作流进度与重试检查
- 事件监控
- 交互式 REPL

## 部署方式

1. **仅库模式**：本地开发使用，无需服务器
2. **自托管**：单个 Rust 二进制或 Docker 容器
3. **Rivet Cloud**：全托管服务，支持 Vercel、Railway、AWS 等现有基础设施

## 技术栈支持

- 语言：TypeScript、Rust（实验性）、Python（实验性）
- 框架：React、Next.js、Hono、Express、Elysia、tRPC
- 运行时：Node.js、Bun、Deno
- 工具：Vitest、Pino、AI SDK、OpenAPI、AsyncAPI

## 开源协议

Apache 2.0