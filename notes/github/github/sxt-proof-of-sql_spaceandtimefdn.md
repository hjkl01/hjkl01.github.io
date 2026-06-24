### [sxt-proof-of-sql](https://github.com/spaceandtimefdn/sxt-proof-of-sql) ![GitHub Repo stars](https://img.shields.io/github/stars/spaceandtimefdn/sxt-proof-of-sql?style=social)

Proof of SQL 是由 Space and Time 团队开发的高性能零知识 SQL 证明器，用于以密码学方式证明 SQL 查询是在未被篡改的数据上正确执行的。其核心特点是低延迟与高吞吐：可在亚秒级完成百万行以上分析查询证明，并通过 GPU 加速与原生承诺机制显著提升速度、降低链上验证 Gas 成本。

项目支持将查询结果与证明一起返回给智能合约或离线验证方，实现链上/链下数据的无信任计算，适用于数据驱动型 DeFi、Web3、金融与企业场景。它可集成到各类 SQL 数据库（含中心化与去中心化系统，如 BigQuery）。

当前已支持的 SQL 能力包括：`SELECT ... WHERE`、`GROUP BY`、比较与逻辑运算、基础数值运算、`SUM`/`COUNT` 聚合，以及多种数据类型（BOOLEAN、整数、VARCHAR、DECIMAL75、TIMESTAMP）；更多 SQL 特性仍在持续扩展中。项目提供 Rust crate、示例程序（如 Hello World 与 CSV 数据库示例）、性能基准与协议文档，整体处于活跃开发和安全审计阶段。