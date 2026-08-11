### [python-sdk](https://github.com/modelcontextprotocol/python-sdk) ![GitHub Repo stars](https://img.shields.io/github/stars/modelcontextprotocol/python-sdk?style=social)

**MCP Python SDK 功能总结**

这是 Model Context Protocol (MCP) 的 Python 官方实现（v2），用于构建与 LLM 应用交互的标准化协议。

**核心功能：**
- 构建 MCP 服务器：通过装饰器轻松暴露工具（tools）、资源（resources）和提示词（prompts）
- 构建 MCP 客户端：连接远程或本地 MCP 服务器，支持多种传输方式（stdio、Streamable HTTP、SSE）
- 自动处理 JSON Schema、请求解析和协议交互，开发者只需编写类型标注的 Python 函数

**环境要求：** Python 3.10+

**安装方式：** `pip install mcp` 或 `uv add mcp`（可选 CLI 功能）