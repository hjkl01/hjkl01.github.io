### [OpenWA](https://github.com/rmyndharis/OpenWA) ![GitHub Repo stars](https://img.shields.io/github/stars/rmyndharis/OpenWA?style=social)

OpenWA 是一个免费、开源的 WhatsApp API 网关，面向需要自主管理消息基础设施的开发者，避免厂商绑定和隐藏费用。项目基于可插拔架构，可通过配置灵活切换数据库（SQLite/PostgreSQL）、存储（本地/S3/MinIO）和缓存（内存/Redis），无需改动业务代码。  

其核心功能包括：提供完整 REST API、多会话并发管理、Webhook（支持 HMAC 签名）、API Key 鉴权、Swagger 文档和可视化 Dashboard。消息能力覆盖文本、图片/视频/文档/音频、消息表情反应、群发、送达与已读状态跟踪；并支持群组 API、频道/Newsletter、标签管理、会话级代理、限流、CIDR 白名单和审计日志。  

在部署与运维方面，OpenWA 原生支持 Docker，一键启动开发环境，生产环境可按 profile 组合 PostgreSQL、Redis、MinIO、Dashboard、Traefik 等服务；同时提供健康检查、数据迁移（导出/导入）能力，适合从本地开发到生产落地的完整场景。