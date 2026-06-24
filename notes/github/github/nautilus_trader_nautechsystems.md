### [nautilus_trader](https://github.com/nautechsystems/nautilus_trader) ![GitHub Repo stars](https://img.shields.io/github/stars/nautechsystems/nautilus_trader?style=social)

NautilusTrader 是一个开源、生产级的 Rust 原生多资产多交易场所量化交易引擎，采用统一的事件驱动架构，覆盖策略研究、确定性回测/仿真到实盘执行全流程。项目以 Rust 提供高性能与安全性，以 Python 作为策略开发、配置和编排控制层，实现“研究到实盘无代码改动”的一致执行语义与时间模型，降低部署偏差风险。

核心能力包括：跨平台运行（Linux/macOS/Windows）、模块化适配器接入任意 REST/WebSocket 交易所与数据源、支持多交易场所并行策略（含做市与跨场所策略）、丰富高级订单与条件单、纳秒级多品种历史数据回测、可选 Redis 状态持久化，以及可扩展的缓存与消息总线组件。系统同时支持 Python/Cython/Rust 开发，并提供 Docker、预编译安装包、开发分支轮子包与完整工程化工具链，适用于个人及小团队的单节点回测和实盘量化交易。