### [routa](https://github.com/phodal/routa) ![GitHub Repo stars](https://img.shields.io/github/stars/phodal/routa?style=social)

Routa 是一个“以工作区为核心”的多智能体软件交付协作平台，用看板而非单一聊天线程来管理目标、任务、会话、执行轨迹、证据和评审状态。它通过 Backlog/Todo/Dev/Review/Done/Blocked 等泳道，将需求拆解、实现、验证、评审和交付分配给不同专家代理，并在每一环引入更严格的输入与证据契约，确保任务可执行、变更可追踪、结果可审计。

项目核心能力包括：工作区与看板管理、代理会话与流式执行、任务跨泳道自动路由、代码仓库与 Git/worktree 管理、GitHub 仓库虚拟导入、MCP 工具与自定义服务器接入、定时/Webhook/后台任务自动化、基于发现与严重级别的评审，以及本地优先桌面模式和自托管 Web 模式。  
技术上采用双后端一体化架构：Web（Next.js）与 Desktop（Tauri + Axum/Rust）共享统一语义与 API 契约，并支持 ACP、MCP、A2A、AG-UI、A2UI、REST、SSE 等集成接口。  
同时提供 Desktop、CLI、Web 三种使用入口，适用于可视化协作、终端脚本化和自部署场景。