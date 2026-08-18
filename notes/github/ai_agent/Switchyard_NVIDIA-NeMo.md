### [Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) ![GitHub Repo stars](https://img.shields.io/github/stars/NVIDIA-NeMo/Switchyard?style=social)

# Switchyard 项目功能总结

Switchyard 是一个用 Rust 开发的 LLM 流量代理和库，主要功能包括：

**协议转换**
在 OpenAI Chat Completions、Anthropic Messages 和 OpenAI Responses 三种 API 格式之间相互转换，使客户端无需修改即可使用不同供应商的模型。

**智能路由**
- LLM 分类器路由：根据请求内容判断是否需要弱/强模型 tier
- 阶段路由器：利用对话中的信号（工具结果、错误等）进行路由决策
- 升级路由器：先使用弱模型处理，再由评判模型决定是否升级
- 随机路由：用于 A/B 测试或成本实验的固定流量分配
- 支持自定义路由算法

**多后端支持**
可路由到 vLLM、NVIDIA NIM、Ollama 或任何 OpenAI 兼容端点。

**操作指标**
通过 Prometheus 收集请求、错误、延迟、token 消耗和路由开销等监控数据。

**多种使用方式**
- Launcher 模式：启动 Claude Code、Codex CLI、OpenClaw 等编码代理
- 独立服务器模式：作为代理运行
- 库模式：嵌入到自定义 Rust 应用中