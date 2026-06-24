### [kiro-gateway](https://github.com/jwadow/kiro-gateway) ![GitHub Repo stars](https://img.shields.io/github/stars/jwadow/kiro-gateway?style=social)

Kiro Gateway 是一个面向 Kiro API（Amazon Q Developer / AWS CodeWhisperer）的代理网关，可将 Kiro 的模型能力以 **OpenAI 兼容 API** 和 **Anthropic 兼容 API** 对外提供，便于 Claude Code、Cursor、LangChain、OpenAI/Anthropic SDK 等工具直接接入。

核心功能包括：支持多种模型（含 Claude、GLM、DeepSeek、MiniMax、Qwen 等）与模型名自动规范化；支持流式输出、工具调用、视觉输入、联网搜索、完整上下文传递与扩展推理；支持多账号管理与自动故障切换（限流/配额异常时自动切换账号）；支持 token 自动刷新与错误自动重试（403/429/5xx）；支持在受限网络下通过 HTTP/HTTPS/SOCKS5 代理或 VPN 转发请求。

项目提供 Python 原生与 Docker 两种部署方式，支持多种认证来源（Kiro IDE/CLI 凭据文件、环境变量、AWS SSO、kiro-cli SQLite 数据库），并内置健康检查、模型列表、聊天补全与消息接口（`/v1/chat/completions`、`/v1/messages`）。