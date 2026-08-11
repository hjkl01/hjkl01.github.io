### [firmware](https://github.com/Coldcard/firmware) ![GitHub Repo stars](https://img.shields.io/github/stars/Coldcard/firmware?style=social)

# COLDCARD 硬件钱包固件项目总结

COLDCARD 是一款经济实惠、超安全且可验证的比特币硬件钱包。

**核心功能：**
- 提供比特币硬件钱包的固件源码，支持 Mk3、Mk4、Mk5、Q1 和 Edge 等系列硬件
- 支持可重复构建，可通过 Docker 从源码重建出与设备完全一致的二进制固件
- 维护主分支（master）和边缘分支（edge），后者包含 Taproot、Miniscript 等实验性功能
- 提供 macOS/Linux 桌面模拟器用于开发和测试
- 包含完整的硬件原理图和物料清单

**安全公告：**
2021年至2026年7月期间发布的固件版本存在熵生成缺陷，该时间段内生成的种子应立即重新生成并转移资金。只有以下版本及以上可信任：5.6.0（Mk4/Mk5）、1.5.0Q（Q1）、4.2.0（Mk3）、6.6.0（Edge Mk/Q）。使用 BIP-39 密码短语可降低部分风险。