### [HAMi](https://github.com/Project-HAMi/HAMi) ![GitHub Repo stars](https://img.shields.io/github/stars/Project-HAMi/HAMi?style=social)

HAMi（Heterogeneous AI Computing Virtualization Middleware）是一个CNCF孵化项目，专注于Kubernetes环境下的GPU虚拟化和异构AI加速器调度。

核心功能包括：
- **设备共享**：按显存、计算核心或设备数量分配物理加速器资源
- **资源隔离**：为每个工作负载强制执行加速器内存和计算限制
- **智能调度**：支持拓扑感知、紧凑打包、均匀分散和设备特定调度策略
- **异构集群管理**：统一支持NVIDIA GPU、昇腾NPU、海光DCU、寒武纪MLU等多种AI加速器
- **零应用改造**：兼容标准Kubernetes资源请求语法
- **可观测性**：提供Metrics、Grafana仪表板和WebUI管理界面
- **生态集成**：与vLLM、Volcano、Kueue、Prometheus、NVIDIA GPU Operator等无缝集成