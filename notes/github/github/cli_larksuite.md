### [cli](https://github.com/larksuite/cli) ![GitHub Repo stars](https://img.shields.io/github/stars/larksuite/cli?style=social)

lark-cli 是飞书/Lark 官方开源命令行工具（MIT 许可），面向人类和 AI Agent 使用，可通过 200+ 命令与 26 个 Agent Skills 覆盖日历、消息、文档、云盘、Markdown、多维表格、表格、幻灯片、任务、知识库、通讯录、邮件、会议纪要、考勤、审批、OKR 等核心业务场景。  
它采用三层命令体系：快捷命令（`+`，易用且有智能默认）、平台 API 映射命令（1:1 对应端点）、原始 API 调用（覆盖 2500+ OpenAPI），兼顾易用性与完整能力。  
工具支持快速安装与交互式鉴权（OAuth）、多身份执行（user/bot）、多种输出格式、自动分页、dry-run 请求预览和 API schema 探查。  
整体强调 AI 友好与安全可控：针对 Agent 调用做了参数与输出优化，并提供输入注入防护、终端输出净化、系统钥匙串凭据存储等机制，同时提醒授权后存在误操作与数据泄露风险，建议谨慎配置默认安全策略。