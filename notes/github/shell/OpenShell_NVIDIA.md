### [OpenShell](https://github.com/NVIDIA/OpenShell) ![GitHub Repo stars](https://img.shields.io/github/stars/NVIDIA/OpenShell?style=social)

NVIDIA OpenShell 是一个面向自主 AI 代理的安全私有运行时，核心作用是为代理提供隔离沙箱，并通过声明式 YAML 策略控制文件系统、网络、进程和推理访问，防止未授权文件访问、数据外传和失控的网络行为。

它支持在 Docker、Podman、MicroVM 和 Kubernetes 等环境中运行，通过网关管理沙箱生命周期，并对所有外发连接进行策略拦截：允许符合规则的访问、将模型请求安全转发到受控推理后端，或直接拒绝并记录。项目内置对 Claude、Codex、OpenCode、Copilot 等代理的支持，也能注入 API Key、Token 等凭证到沙箱环境变量中而不落盘。

OpenShell 支持动态更新网络和推理策略、通过终端 UI 实时监控网关和沙箱、从社区模板或自定义容器创建沙箱，并提供实验性的 GPU 透传能力，适合更安全地运行编码代理、网络排障代理、策略生成代理等自动化工作流。