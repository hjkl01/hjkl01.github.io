### [cli](https://github.com/googleworkspace/cli) ![GitHub Repo stars](https://img.shields.io/github/stars/googleworkspace/cli?style=social)

gws 是一款面向人类用户和 AI 智能体的 Google Workspace 统一命令行工具（CLI）。它通过动态读取 Google 发现服务，自动生成对 Drive、Gmail、Calendar 等所有 Workspace API 的支持，无需编写样板代码。主要特性包括：

1. **动态命令生成**：自动适配新增的 API 端点和方法，无需更新工具即可使用新功能。
2. **结构化输出**：所有响应均为结构化 JSON，便于脚本处理和 AI 智能体直接调用。
3. **丰富的 AI 集成**：内置 40+ 种智能体技能（Agent Skills）和 50+ 个常用工作流配方，支持 Gemini CLI 扩展及 OpenClaw 等智能体平台。
4. **灵活的身份验证**：支持多种认证方式，包括交互式 OAuth、服务账号、预获取令牌及 CI/CD 环境下的无头模式。
5. **实用辅助命令**：提供 Gmail 回复/转发、日历日程查看、文档写入等便捷助手命令。
6. **安全与过滤**：集成 Google Cloud Model Armor，可对 API 响应进行提示注入扫描和清理。