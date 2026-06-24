### [openinterpreter](https://github.com/openinterpreter/openinterpreter) ![GitHub Repo stars](https://img.shields.io/github/stars/openinterpreter/openinterpreter?style=social)

Open Interpreter：低价模型代码智能体（Rust版）。

功能：
- 模拟环境。模拟Harness压榨低价模型性能。终端用 `/harness` 切换。
- 沙盒运行。Win/Mac/Linux原生沙盒执行命令。
- 界面控制。终端用 `/model` 切换模型与提供商。
- 应用测试。内置QA技能配合外部工具操作并测试网页与本地应用。
- 协议兼容。运行 `interpreter acp` 作为编辑器代理。支持MCP、技能、钩子与权限。
- 数据本地。配置及会话状态存至 `~/.openinterpreter`。