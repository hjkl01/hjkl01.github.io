### [hickory-dns](https://github.com/hickory-dns/hickory-dns) ![GitHub Repo stars](https://img.shields.io/github/stars/hickory-dns/hickory-dns?style=social)

Hickory DNS 是一个基于 Rust 的 DNS 生态项目，提供安全、稳定的 DNS 客户端、服务器、解析器与递归解析能力，目标是用纯安全 Rust（稳定版）构建高性能、抗攻击、易运维的现代 DNS 系统。

项目由多个 crate 组成：
- **hickory-dns**：可执行 DNS 服务器程序；
- **hickory-proto**：底层 DNS 协议库（消息编解码与传输）；
- **hickory-client**：向 DNS 服务器发送 query/update/notify；
- **hickory-server**：用于构建 DNS 服务器；
- **hickory-resolver**：DNS 解析库，可替代系统解析；
- **hickory-recursor**：递归解析器，从权威服务器逐级查询记录。

核心能力与特性：
- 支持 **DNSSEC**（含根锚验证、NSEC/NSEC3、动态更新后自动重签）；
- 支持现代加密与安全 DNS 协议，如 **DoT（DNS over TLS）**、**DoH（DNS over HTTPS）**；
- 加密后端可选 **aws-lc-rs** 或 **ring**（通过 feature flags 切换）；
- 支持大量 RFC：基础 DNS、负缓存、IPv6、EDNS、动态更新、SIG(0)、DANE、CAA、mDNS/DNS-SD（实验）等；
- 提供 `resolve` 命令行工具用于 DNS 查询；
- 提供 Docker 镜像，便于部署。

项目原名 Trust-DNS，现已更名并迁移为 Hickory DNS。采用 **MIT 或 Apache-2.0 双许可证**。