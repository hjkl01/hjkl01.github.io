### [chaos-mesh](https://github.com/chaos-mesh/chaos-mesh) ![GitHub Repo stars](https://img.shields.io/github/stars/chaos-mesh/chaos-mesh?style=social)

Chaos Mesh 是一个开源的云原生混沌工程平台，面向 Kubernetes 场景，支持在开发、测试和生产环境中模拟真实故障与异常，用于发现系统潜在问题并提升系统韧性。

项目核心由两部分组成：
- **Chaos Operator**：负责混沌实验编排与故障注入，基于 Kubernetes CRD 定义实验对象，支持自动调度与管理。
  - **Chaos Controller Manager**：负责实验调度、工作流与各类故障控制器管理。
  - **Chaos Daemon**：以 DaemonSet 运行，可对目标 Pod 命名空间中的网络设备、文件系统、内核等进行故障干预。
- **Chaos Dashboard**：提供可视化 Web UI，用于混沌实验的创建、设计、管理与状态监控，降低使用门槛。

当前支持多种故障类型（CRD），包括 `PodChaos`、`NetworkChaos`、`IOChaos`、`TimeChaos`、`StressChaos` 等。  
此外，Chaos Mesh 是 CNCF 孵化项目，采用 Apache 2.0 许可证。