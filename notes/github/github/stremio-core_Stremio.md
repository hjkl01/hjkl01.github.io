### [stremio-core](https://github.com/Stremio/stremio-core) ![GitHub Repo stars](https://img.shields.io/github/stars/Stremio/stremio-core?style=social)

Stremio 是一个新一代媒体中心，用于整理与串流播放视频、电影和电视剧，支持新剧集/新电影通知，并通过 Discover 发现新内容。它可通过插件系统实现电影、剧集与频道的即时播放。

`stremio-core` 是 Stremio 的 Rust 核心库，负责沉淀各版本可复用的通用逻辑。其核心目标是：高灵活性（可跨技术栈集成、可复用类型、可接入现有认证体系、可用 Context 统一管理用户认证与插件）、强调正确性、避免历史包袱。

主要模块包括：
- `types`
- `addon_transport`：处理与插件通信，并实现旧协议适配
- `state_types`：用于描述应用状态（受 Elm 架构启发），包含  
  - Effects / Update trait  
  - `runtime`：自动处理 effects，便于在应用中接入  
  - `environment`：定义运行环境能力（如 fetch、storage）  
  - `msg`：消息体系（动作、事件）  
  - `models`：状态模型（如 `Context`、`Library`、`CatalogFiltered` 等）

此外，项目提供代码规范检查（`cargo clippy`、`cargo fmt`），并支持通过 twiggy 分析与优化 WASM 产物体积；新增动作及其触发的中间件请求定义在 `src/state_types/msg/actions`。