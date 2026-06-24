### [FXMinerProxy](https://github.com/FxPool/FXMinerProxy) ![GitHub Repo stars](https://img.shields.io/github/stars/FxPool/FXMinerProxy?style=social)

FXMinerProxy 是一款基于 Go 语言开发的虚拟货币矿池中转代理软件，主要用于实现矿池间的流量转发与抽水（收取手续费）。

**核心功能：**
1. **多币种支持**：支持 BTC、LTC、ETHW、ZEC、RVN、KASPA 等数十种主流加密货币的挖矿代理。
2. **抽水机制**：提供灵活的费率设置，根据矿机数量阶梯式调整抽水比例（最高 0.2%，大规模矿场最低可达 0.05%）。
3. **高稳定性与性能**：经大型矿场验证，具备低内存占用（单台矿机约 100K-150K）和高并发处理能力，支持 Linux 和 Windows 系统部署。
4. **管理面板**：提供后台管理界面及实时日志监控，方便运维管理。
5. **高级方案**：支持 DNS 劫持等无感知抽水方案。