### [claude-code-harness](https://github.com/Chachamaru127/claude-code-harness) ![GitHub Repo stars](https://img.shields.io/github/stars/Chachamaru127/claude-code-harness?style=social)

Claude Code Harness 是一个面向 Claude Code 的规范化交付框架，把“让代理直接写代码”改为可复用的 5 步闭环流程：**Plan、Work、Review、Release（含 Sync）**。  
其核心功能是以 `spec.md` 和 `Plans.md` 作为唯一事实源，先定义范围与验收标准，再按批准任务实施（含测试与验证）、独立评审、最后打包发布证据，减少信息漂移、遗漏测试和凭记忆发布的问题。

项目提供一组命令化工作流：  
- `/harness-setup`：初始化统一基线（指导、命令、钩子、检查）；  
- `/harness-plan`：将需求转为规范与计划（范围、依赖、未知项、停止条件）；  
- `/harness-work`：按已批准切片开发并执行验证；  
- `/harness-review`：实现与评审分离，重大问题阻断完成；  
- `/harness-release`：做发布前检查并打包可验证证据。  

它支持多工具安装路径与分级支持（Claude Code 为主要支持路径，Codex/OpenCode 等为兼容或候选路径），并提供迁移体检命令 `bin/harness doctor --migration-report`，用于旧环境清点而不删除数据。整体定位是：用可审计、可验证、可发布的流程提升 AI 代理开发交付质量。