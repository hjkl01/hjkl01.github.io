### [CubeSandbox](https://github.com/TencentCloud/CubeSandbox) ![GitHub Repo stars](https://img.shields.io/github/stars/TencentCloud/CubeSandbox?style=social)

CubeSandbox 是一个基于 RustVMM 和 KVM 构建的高性能、开箱即用的安全沙箱服务，专为 AI Agent 设计。其核心功能包括：

1. **极速启动与低资源占用**：冷启动时间低于 60ms，内存开销小于 5MB，支持单机及多节点集群部署，实现高并发与高密度运行。
2. **硬件级隔离**：每个沙箱拥有独立的 Guest OS 内核，提供比 Docker 更强的安全性，可安全运行不受信任的 LLM 生成代码。
3. **E2B 兼容**：原生兼容 E2B SDK，仅需修改环境变量即可无缝迁移，零业务代码改动。
4. **高级管理功能**：
   - 提供 Web 控制台（WebUI）进行可视化管理。
   - 支持快照、克隆和回滚（CubeCoW 引擎），粒度达毫秒级。
   - 具备凭证保险箱（Credential Vault）和安全出口控制（Egress Control），确保密钥不进入沙箱并审计外部访问。
   - 支持模板系统，可快速分发和管理预置环境。
5. **数字助手集成**：支持一键创建和管理 OpenClaw 数字助手。