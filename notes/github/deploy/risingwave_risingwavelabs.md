### [risingwave](https://github.com/risingwavelabs/risingwave) ![GitHub Repo stars](https://img.shields.io/github/stars/risingwavelabs/risingwave?style=social)

# RisingWave 项目功能总结

RisingWave 是一个面向 Agentic AI 的事件流式处理平台，旨在用单一系统替代传统的 Debezium + Kafka + Flink + 服务数据库技术栈。

**核心功能：**
- 从数据库、事件流、webhooks 等多种数据源持续摄取数据
- 增量处理数据，端到端新鲜度低于 100ms
- 提供低延迟查询服务（10-20ms p99 延迟）
- 支持 Apache Iceberg 用于长期存储和分析查询

**主要特性：**
- 统一 SQL 接口，流表和表可自由关联
- 物化视图实时更新，无需全量重算
- 支持 PostgreSQL 协议，兼容主流数据库工具
- 为 AI agents 提供 MCP 服务器、CLI 和 Skills
- 使用对象存储降低成本，支持弹性扩缩容

**典型应用场景：**
- 实时监控和告警
- 特征存储
- 实时仪表板
- 数据实时增强
- 流式数据湖仓

**部署方式：**
- RisingWave Cloud（托管服务）
- Docker Compose
- Kubernetes（Helm 或 Operator）

**许可证：** Apache License 2.0