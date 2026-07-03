### [kueue](https://github.com/kubernetes-sigs/kueue) ![GitHub Repo stars](https://img.shields.io/github/stars/kubernetes-sigs/kueue?style=social)

Kueue 是一套用于 Kubernetes 作业的队列管理 API 和控制器，负责决定作业何时被批准启动（创建 Pod）以及何时停止（删除活跃 Pod）。其核心功能包括：

1. **作业管理与调度策略**：支持基于优先级的作业排队，提供严格 FIFO 和尽力而为 FIFO 两种策略。
2. **高级资源管理**：包含资源口味灵活性、公平共享、多租户抢占机制及集群队列（Cohorts）。
3. **广泛集成支持**：内置对 BatchJob、Kubeflow、Ray、JobSet、Pod 组等多种作业类型的原生支持，并兼容部署和状态集等长期运行服务。
4. **混合负载管理**：允许同时管理批处理工作负载和服务型工作负载。
5. **智能调度特性**：
   - **部分准入与动态回收**：根据可用配额降低并行度运行作业，并在 Pod 完成后释放配额。
   - **全有或全无调度**：基于超时的全部就绪调度机制。
   - **拓扑感知调度**：优化数据中心拓扑下的 Pod 间通信吞吐量。
   - **多集群分发 (MultiKueue)**：跨集群搜索容量并卸载主集群压力。
6. **系统洞察与监控**：提供 Prometheus 指标和待处理工作负载的监控端点。
7. **扩展机制**：通过 AdmissionChecks 机制允许内部或外部组件影响作业准入，并支持与集群自动伸缩器集成以实现高级自动缩放。

该项目已具备生产就绪状态，拥有完善的测试覆盖、文档和稳定的发布周期，要求 Kubernetes 1.29 或更高版本。