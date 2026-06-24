### [higress](https://github.com/higress-group/higress) ![GitHub Repo stars](https://img.shields.io/github/stars/higress-group/higress?style=social)

Higress 是一个基于 Istio 和 Envoy 的云原生 AI API 网关，支持通过 Go/Rust/JS 编写 Wasm 插件进行扩展，内置大量开箱即用插件和可视化控制台。其核心能力是统一管理 LLM API 与 MCP API：可对接主流大模型厂商，支持托管 MCP Server，并可通过 openapi-to-mcp 工具将 OpenAPI 快速转换为远程 MCP 服务。

项目主要应用场景包括：AI 网关（统一协议接入、多模型负载均衡、令牌限流、缓存与可观测性）、MCP Server 托管、Kubernetes Ingress 控制器、微服务网关（支持 Nacos/ZooKeeper/Consul/Eureka 等注册中心）和安全网关（WAF 及多种认证策略）。

核心优势包括：生产级稳定性（毫秒级配置生效、避免 Nginx reload 抖动）、完整流式处理能力（适配 SSE 等流协议并降低内存开销）、高扩展性（插件沙箱隔离、多语言支持、插件独立升级与无损热更新）、以及易用安全（支持 Ingress/Gateway API、可自动申请续期证书、可用 Docker 一键启动）。项目源于阿里巴巴内部大规模生产实践，并已用于阿里云核心 AI 业务与企业级网关场景。