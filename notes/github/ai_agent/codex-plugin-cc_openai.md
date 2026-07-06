### [codex-plugin-cc](https://github.com/openai/codex-plugin-cc) ![GitHub Repo stars](https://img.shields.io/github/stars/openai/codex-plugin-cc?style=social)

该项目是专为 Claude Code 设计的 Codex 插件，旨在让用户在现有工作流中无缝集成并使用 Codex 进行代码审查和任务委派。

主要功能包括：
1. **代码审查**：提供 `/codex:review`（常规只读审查）和 `/codex:adversarial-review`（可引导的压力测试与质疑性审查），支持对当前更改或分支进行比较审查。
2. **任务委派与管理**：通过 `/codex:rescue` 将调试、修复等任务委托给 Codex 处理；使用 `/codex:transfer` 将在 Claude Code 中的会话上下文转移至 Codex 继续；利用 `/codex:status`、`/codex:result` 和 `/codex:cancel` 管理后台作业的状态、结果及取消操作。
3. **配置与集成**：复用本地已安装的 Codex CLI、认证状态及配置文件，支持自定义模型和推理强度，并可选启用“审查门控”以在提交前自动拦截潜在问题。