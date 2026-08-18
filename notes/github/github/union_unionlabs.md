### [union](https://github.com/unionlabs/union) ![GitHub Repo stars](https://img.shields.io/github/stars/unionlabs/union?style=social)

**Union 项目功能总结**

Union 是一个高效零知识基础设施层，支持通用消息传递、资产转移、NFT 和 DeFi。基于共识验证技术，无需依赖第三方信任方、预言机、多重签名或 MPC。实现了 IBC 协议与 Cosmos 链兼容，同时连接以太坊、Berachain、Arbitrum 等 EVM 链。

核心组件包括：
- **uniond**：节点实现（Go）
- **galoisd**：零知识证明器（Go/Gnark）
- **voyager**：高性能跨生态系统中继器（Rust）
- **cosmwasm**：CosmWasm 智能合约栈（Rust）
- **light-clients**：各生态轻客户端（Rust）
- **unionvisor**：生产环境节点管理器（Rust）
- **evm**：EVM 智能合约栈（Solidity）
- **app/site**：前端应用与官网（TypeScript/Svelte/Astro）
- **TypeScript SDK**：交互式开发工具包

项目通过去中心化治理控制合约升级、连接配置和协议演进，已支持 Arbitrum、Base、Berachain、BSC、Ethereum、Osmosis、Sei、Sui、Union、Xion 等多个主网和测试网。