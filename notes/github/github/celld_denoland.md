### [celld](https://github.com/denoland/celld) ![GitHub Repo stars](https://img.shields.io/github/stars/denoland/celld?style=social)

celld 是一个开源的自托管分布式 Durable Objects 运行时，允许在自有服务器上运行 Cloudflare Workers 和 Durable Objects。

核心特点：
- **去中心化协调**：节点通过共享的对象存储（S3 兼容或 Google Cloud Storage）进行通信，无需控制平面、故障检测器或共识服务
- **对象隔离**：每个 Durable Object 对应独立的 SQLite 数据库，天然实现应用分片，避免单库的争用和故障扩散
- **自动迁移**：未激活的单元格几乎不消耗资源；当单元格被移动或激活时，新节点从存储桶恢复数据库并继续执行
- **部署简单**：通过 `celld deploy` 部署 Wrangler 项目，支持 esbuild 打包和静态资产部署
- **内存管理**：支持内存压力释放机制，自动卸载空闲单元格以保护节点稳定

适用于需要在自有基础设施上运行 Durable Objects 的开发者和团队。