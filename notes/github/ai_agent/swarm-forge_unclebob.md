### [swarm-forge](https://github.com/unclebob/swarm-forge) ![GitHub Repo stars](https://img.shields.io/github/stars/unclebob/swarm-forge?style=social)

SwarmForge 是一个基于 tmux 的 AI 智能体编排平台，让多个 AI 智能体协同完成软件开发项目。

**核心功能：**
- 通过 git worktree 为每个智能体分配独立工作空间
- 基于 tmux 管理多会话终端，支持实时观察各角色状态
- 支持 claude、codex、copilot、grok 等多种 AI 后端
- 通过配置文件定义智能体拓扑结构和角色分工
- 智能体间通过持久化手递文件通信，避免直接操作 tmux

**三种工作流模式：**
- `two-pack`：快速后端开发，含编码与清理
- `four-pack`：紧凑规格驱动流程，含规格、编码、重构、架构
- `six-pack`：完整流程，含规格、编码、清理、架构、强化、QA

**主要特点：**
- 配置驱动，项目本地定义角色提示词和宪法规则
- 本地运行，无需云端依赖
- 防休眠机制保持代理持续工作
- 灵活支持终端自动检测与自定义后端