### [jaeger](https://github.com/jaegertracing/jaeger) ![GitHub Repo stars](https://img.shields.io/github/stars/jaegertracing/jaeger?style=social)

Jaeger 是一个开源的分布式追踪系统（现已发布 v2），用于采集、存储、查询和可视化链路追踪数据，帮助排查与分析分布式系统问题。项目提供一体化运行方式（含 UI、Collector、Query 和内存存储），可通过 Docker 快速启动；支持通过 OTLP（gRPC/HTTP）接收追踪数据。其核心架构基于 OpenTelemetry SDK 接入，数据经 Jaeger Collector 写入存储（或存储插件），由 Query 服务查询并在 Jaeger UI 展示。  
此外，Jaeger 是 CNCF 毕业项目，具备完善的文档、社区协作机制与版本兼容策略（含配置弃用过渡期和 Go 版本支持策略），并提供安全审计、路线图及多组件生态（如独立 UI 与数据模型仓库）。