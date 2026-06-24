### [fabro](https://github.com/fabro-sh/fabro) ![GitHub Repo stars](https://img.shields.io/github/stars/fabro-sh/fabro?style=social)

Fabro：开源 AI 智能体编排工具。流程定为图，AI 执行，人把关关键节点。

核心功能：
- 确定性图工作流：Graphviz DOT 定义流水线。支持分支、循环、并行。
- 人机协同：设审批节点。支持中途干预 AI。
- 多模型路由：类 CSS 样式表按需分配不同 AI 模型。
- 云沙盒：Daytona 隔离虚拟机运行 AI。支持 SSH 及环境预览。
- Git 检查点：单步执行自动 commit 变更与元数据。支持回滚、溯源。
- 运行观测：持久化记录事件流、检查点、阶段输出。
- 极简部署：Rust 单二进制文件，零依赖。含 REST API（支持 SSE 流）与 React Web UI。