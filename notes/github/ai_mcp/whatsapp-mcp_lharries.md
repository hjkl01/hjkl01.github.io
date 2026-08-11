### [whatsapp-mcp](https://github.com/lharries/whatsapp-mcp) ![GitHub Repo stars](https://img.shields.io/github/stars/lharries/whatsapp-mcp?style=social)

这是一个用于 WhatsApp 的 MCP（Model Context Protocol）服务器，可让 Claude/Cursor 等智能体直接连接你的**个人 WhatsApp 账号**，实现消息与联系人管理及多媒体收发。

项目核心功能：
- 搜索联系人、会话与消息，获取聊天上下文和最近互动。
- 向个人或群组发送文本消息。
- 发送图片、视频、文档、音频；支持将音频作为 WhatsApp 语音消息发送（可配合 FFmpeg 自动转码为 `.ogg` Opus）。
- 下载消息中的媒体文件到本地路径供后续处理。

架构与数据方式：
- **Go Bridge**：通过 WhatsApp Web 多设备 API（whatsmeow）连接账号、扫码登录、同步消息。
- **Python MCP Server**：向 Claude 提供标准化 MCP 工具调用接口。
- 消息历史本地存储在 SQLite（含聊天与消息索引）；媒体默认存元数据，按需下载。
- 数据仅在工具被调用时才提供给 LLM，用户可控。

使用特点：
- 首次运行需扫码认证，后续可自动重连（可能周期性需重新认证）。
- 支持 Claude Desktop 与 Cursor 集成配置。
- Windows 需启用 CGO 并安装 C 编译器以支持 go-sqlite3。

安全提示：
- 存在 MCP 场景下的提示注入/数据外泄风险（lethal trifecta），需谨慎授权与使用。