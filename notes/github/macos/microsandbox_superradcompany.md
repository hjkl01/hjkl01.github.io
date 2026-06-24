### [microsandbox](https://github.com/superradcompany/microsandbox) ![GitHub Repo stars](https://img.shields.io/github/stars/superradcompany/microsandbox?style=social)

Microsandbox 是一个可在本地快速启动轻量级 microVM 的沙箱工具，主打“无服务器、无常驻守护进程、嵌入式、无 root”。它支持通过 Rust、Python、TypeScript、Go SDK 在代码中直接创建和控制沙箱，也提供 `msb` CLI 用于运行命令、管理命名沙箱生命周期、镜像管理、安装/卸载沙箱命令、状态查看与资源监控。

项目核心能力包括：硬件级隔离、毫秒级启动（平均小于 100ms）、OCI 镜像兼容（Docker Hub/GHCR 等）、可长时间运行（支持 detached 模式）、密钥不进入 VM 以降低泄露风险。还支持 AI Agent 场景，提供 Agent Skills 与 MCP Server，让智能体可自主创建和管理沙箱、执行命令、访问文件系统与监控运行状态。运行环境要求为 Linux（启用 KVM）或 macOS（Apple Silicon），当前处于 Beta 阶段。