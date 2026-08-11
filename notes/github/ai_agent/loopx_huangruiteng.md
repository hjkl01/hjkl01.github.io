### [loopx](https://github.com/huangruiteng/loopx) ![GitHub Repo stars](https://img.shields.io/github/stars/huangruiteng/loopx?style=social)

LoopX 是一个面向长时间运行 AI Agent 任务的轻量级本地控制平面。它通过在 Agent 运行时之外维护持久的控制状态（目标、关卡、待办事项、证据、配额等），实现对多轮 Agent 工作的可审查、可重启和可交接管理。核心功能包括：

- **目标与状态追踪**：维护活跃目标、范围、权限和待办事项清单，支持 Agent 间的所有权声明与租约机制。
- **人工决策关卡**：明确标识需要人类判断的具体节点，而非笼统的"等待所有者"。
- **证据与交接管理**：记录运行历史、验证结果、阻碍项和可接受的写回，确保跨轮次交接有据可查。
- **配额与调度控制**：通过配额机制决定 Agent 是否应执行下一轮，支持安全降级和自修复。
- **多 Agent 运行时集成**：适配 Codex、Claude Code、Cursor 等运行时，保持跨工具的一致守卫逻辑。
- **领域能力包**：内置 Issue 修复、内容运营、ML 实验、基准测试等可复用工作流。
- **可视化与投影**：提供本地只读 UI 仪表板，支持将待办和关卡投影到协作工具（如飞书/Lark 看板）。