### [12-factor-agents](https://github.com/humanlayer/12-factor-agents) ![GitHub Repo stars](https://img.shields.io/github/stars/humanlayer/12-factor-agents?style=social)

该项目是一个面向 **LLM 应用/AI Agent 工程化**的方法论指南，提出“12 因素 Agent”原则，目标是帮助开发者构建可在生产环境落地的、可靠且可维护的智能体系统。其核心观点是：不要过度依赖一体化框架，而应将 Agent 的关键能力以小而模块化的方式融入现有产品，以更快达到可交付质量。

项目主要内容包括一套 12 条实践原则：
1. 将自然语言转为工具调用  
2. 自主管理 Prompt  
3. 自主管理上下文窗口  
4. 将工具视为结构化输出  
5. 统一执行状态与业务状态  
6. 用简单 API 支持启动/暂停/恢复  
7. 通过工具调用实现人类介入  
8. 自主管理控制流  
9. 将错误压缩并纳入上下文  
10. 使用小而专注的 Agent  
11. 从任意入口触发，在用户场景中运行  
12. 将 Agent 设计为无状态 reducer  

同时项目解释了传统“LLM+工具循环”模式在真实业务中常停留在 70-80% 质量、难以达标的问题，并给出可扩展、可观测、可维护的设计模式与实践方向。