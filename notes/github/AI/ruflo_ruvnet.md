### [ruflo](https://github.com/ruvnet/ruflo) ![GitHub Repo stars](https://img.shields.io/github/stars/ruvnet/ruflo?style=social)

Ruflo 是一个面向 Claude Code 的多智能体 AI 编排平台，可在跨机器、跨团队、跨信任边界场景下协同 100+ 专用智能体，提供群体协作、持久记忆、自学习优化、联邦通信与企业级安全能力。它通过 CLI/MCP 将任务自动路由给智能体群，结合 AgentDB + HNSW 向量记忆、SONA 学习机制、后台自动 worker 与多模型路由（Claude/GPT/Gemini/Cohere/Ollama），让智能体在编码、测试、安全审计、文档、架构等流程中持续协作与进化。

项目支持两类使用方式：轻量插件模式（仅斜杠命令）和完整 CLI 安装模式（含 MCP 服务、hooks、守护进程、完整智能体与工具链）。生态包含 30+ 插件，覆盖编排、记忆与 RAG、智能学习、测试质量、安全合规、架构方法、可观测性、扩展开发及行业场景。核心能力还包括零信任联邦（mTLS + ed25519、PII 处理、可审计信任评分）、并行工具调用、目标规划（GOAP + A*）与可自托管 Web UI，实现从自然语言目标到可执行多智能体计划与实时执行监控的完整闭环。