### [skills](https://github.com/browserbase/skills) ![GitHub Repo stars](https://img.shields.io/github/stars/browserbase/skills?style=social)

Browserbase Skills 是一组为 Claude Code 提供的插件技能，用于通过浏览器自动化和官方 `browse` CLI 完成网页操作与 Browserbase 平台工作流。项目核心功能包括：

- 浏览器自动化：支持远程 Browserbase 会话、身份能力、验证码处理、代理等；
- Browserbase CLI 工作流：管理 sessions、projects、contexts、extensions、fetch、dashboard 等；
- 云端函数部署：通过 `browse` CLI 部署无服务器浏览器自动化任务；
- 自动化调试：定位并修复失败脚本（如反爬、选择器、时序、认证、验证码问题）；
- 浏览器追踪：采集 CDP 全量追踪、截图、DOM 并按页面拆分检索；
- 安全代理能力：构建仅允许白名单域名访问的安全浏览工具；
- 使用与成本分析：在终端查看用量统计、会话分析和成本预测；
- Cookie 同步：将本地 Chrome Cookie 同步到 Browserbase 持久上下文；
- 无浏览器抓取与搜索：直接获取静态页面 HTML/JSON，或返回结构化搜索结果；
- AI UI 测试：基于代码变更或全站探索进行对抗式 UI 测试并发现缺陷。

同时项目提供标准安装方式（`npx skills add browserbase/skills` 或 Claude Code 插件市场安装），并支持本地模式（`--local`）和复用本地 Chrome 会话（`--auto-connect`）以适配本地开发与登录态场景。