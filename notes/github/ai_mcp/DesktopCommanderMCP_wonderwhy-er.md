### [DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) ![GitHub Repo stars](https://img.shields.io/github/stars/wonderwhy-er/DesktopCommanderMCP?style=social)

Desktop Commander MCP 是一款基于模型上下文协议（MCP）的本地 AI 桌面控制工具，可无缝集成至 Claude Desktop、Cursor、VS Code 等主流编辑器。核心功能包括：
- **文件系统操作**：支持递归目录浏览、内容与文件名搜索、元数据查询，以及 Excel、PDF、DOCX、Markdown 等文件的读写与可视化预览。
- **终端与进程管理**：可执行命令行指令、启动/交互/终止后台进程、流式读取长耗时命令输出，并支持 SSH 连接与数据库交互。
- **精准代码编辑**：提供手术级文本替换、全文重写、多文件批量修改及模式搜索，内置模糊匹配回退机制与详细操作日志。
- **内存数据分析**：支持直接在内存中运行 Python/Node.js/R 脚本，快速解析 CSV/JSON/Excel 数据，无需保存临时文件。
- **安全与沙箱隔离**：内置命令黑名单、防软链接越权、完整审计日志，并提供 Docker 容器化部署方案以实现系统级隔离。
- **跨平台与远程控制**：全面兼容 macOS/Windows/Linux，支持通过 Remote MCP 在 ChatGPT 或 Claude Web 等云端服务中安全调用本地桌面资源。

该项目旨在让 AI 获得完整的桌面端操作权限，实现自动化文件处理、代码调试、环境配置与运维任务，且依赖本地客户端订阅运行，不产生额外 API 费用。