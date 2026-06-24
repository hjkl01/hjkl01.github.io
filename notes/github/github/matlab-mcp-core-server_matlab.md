### [matlab-mcp-core-server](https://github.com/matlab/matlab-mcp-core-server) ![GitHub Repo stars](https://img.shields.io/github/stars/matlab/matlab-mcp-core-server?style=social)

MATLAB MCP Core Server 是 MathWorks 官方的 MCP 服务器，用于让 AI 应用直接调用 MATLAB。其核心功能包括：启动/关闭 MATLAB、执行 MATLAB 代码与脚本、运行测试脚本、检测已安装工具箱、以及对 MATLAB 代码进行静态质量检查（风格、潜在错误、性能与规范问题）。

项目支持在 Claude Code、Claude Desktop、VS Code（GitHub Copilot）等环境中接入，并可通过参数灵活配置：指定 MATLAB 安装路径、启动工作目录、是否启动即初始化、桌面/无桌面模式、新建或连接已有 MATLAB 会话、自定义扩展工具、日志级别与日志目录等。

此外，服务器还提供用于辅助代码生成的资源（如 MATLAB 编码规范、纯文本 Live Code 生成规范）。默认会收集匿名遥测数据（可关闭）。使用上强调人工审核工具调用，并需遵循 MathWorks 许可证条款（不得多用户共享同一 MATLAB 服务）。