### [fastmcp](https://github.com/PrefectHQ/fastmcp) ![GitHub Repo stars](https://img.shields.io/github/stars/PrefectHQ/fastmcp?style=social)

FastMCP 是一个用于构建 Model Context Protocol (MCP) 应用的 Python 框架，使开发者能够通过简单的工具连接大型语言模型（LLMs）与数据及工具。它提供以下核心功能：

1. **服务器（Servers）**：将 Python 函数封装为符合 MCP 规范的工具、资源和提示，供 LLM 调用。
2. **客户端（Clients）**：支持连接任意本地或远程 MCP 服务器，具备完整的协议管理能力，包括传输协商、身份验证和生命周期管理。
3. **应用（Apps）**：为工具直接在对话中渲染交互式用户界面。
4. **生产级部署**：支持通过 Prefect Horizon 安全地批量部署和管理 MCP 服务，提供预览回滚、RBAC 权限控制、审计日志等功能。

FastMCP 自动处理参数验证、模式生成和文档创建，让开发者专注于业务逻辑。自 1.0 版本起已被纳入官方 MCP Python SDK，是目前最流行的 MCP 开发标准框架之一。