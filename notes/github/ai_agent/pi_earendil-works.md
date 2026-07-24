### [pi](https://github.com/earendil-works/pi) ![GitHub Repo stars](https://img.shields.io/github/stars/earendil-works/pi?style=social)

# Pi Agent Harness 功能总结

Pi Agent Harness 是一个自扩展编码代理项目，主要功能包括：

- **交互式编码代理 CLI**：提供命令行交互式的代码编写与辅助功能
- **代理运行时**：支持工具调用和状态管理的智能代理核心引擎
- **统一多模型 API**：整合 OpenAI、Anthropic、Google 等多个大语言模型提供商接口
- **终端 UI 库**：支持差异渲染的终端界面组件

项目默认以启动用户的权限运行，无内置权限限制系统；如需安全隔离，可通过 Gondolin 微虚拟机、Docker 容器或 OpenShell 沙箱等方式部署。此外，还提供 Slack/聊天自动化和工作流支持。