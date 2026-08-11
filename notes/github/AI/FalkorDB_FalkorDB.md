### [FalkorDB](https://github.com/FalkorDB/FalkorDB) ![GitHub Repo stars](https://img.shields.io/github/stars/FalkorDB/FalkorDB?style=social)

# FalkorDB 功能总结

**FalkorDB** 是一款超高性能的多租户图数据库，专为大语言模型（LLM）设计，主打极低延迟和高效信息检索。

**核心技术：**
- 业界首个采用稀疏矩阵表示图邻接矩阵的图数据库
- 利用线性代数加速图查询计算
- 基于 Rust 实现，作为 Redis 模块运行

**主要特性：**
- 属性图模型支持（节点和关系均可携带属性）
- 完全兼容 OpenCypher 查询语言，支持专有扩展
- 提供 Python、Java、Go、Rust、Node.js、C# 等多语言客户端
- 多租户架构，支持 Generative AI、Agent 记忆、云安全、欺诈检测等场景

**快速部署：**
- 支持 Docker 一键启动
- 兼容 Redis 协议，可通过 redis-cli 或各类 Redis 客户端操作
- 提供 Web 管理界面（默认 3000 端口）