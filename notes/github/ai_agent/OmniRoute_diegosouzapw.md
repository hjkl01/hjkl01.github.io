### [OmniRoute](https://github.com/diegosouzapw/OmniRoute) ![GitHub Repo stars](https://img.shields.io/github/stars/diegosouzapw/OmniRoute?style=social)

OmniRoute 是一个免费的开源 AI 网关项目，旨在通过单一端点连接 237 家 AI 提供商（其中 90 多家提供免费额度）。其核心功能包括：

1. **统一接入与自动路由**：支持将 Claude Code、Cursor、Copilot 等 24 多种编程工具和 IDE 接入统一接口，提供 17 种智能路由策略和“组合”功能，实现配额耗尽或故障时的毫秒级自动降级和容错。
2. **极致成本优化**：聚合大量免费 API 额度，声称每月可聚合约 16 亿免费令牌。内置 RTK 和 Caveman 双重压缩技术，可减少 15% 至 95% 的输入令牌消耗，显著降低 API 调用成本。
3. **多平台与本地优先**：支持 npm、Docker、桌面客户端、Termux (Android) 及 PWA 等多种部署方式，数据完全本地化处理，无遥测，确保隐私安全。
4. **高级特性**：集成 MCP 和 A2A 协议支持 AI 代理自主控制网关，具备 TLS 指纹伪装以绕过地区限制，以及详细的用量监控、记忆管理和安全防护机制。