### [picoclaw](https://github.com/sipeed/picoclaw) ![GitHub Repo stars](https://img.shields.io/github/stars/sipeed/picoclaw?style=social)

PicoClaw 是一款完全基于 Go 语言从零开发的超轻量级个人 AI 智能体项目，核心功能总结如下：

- **极致轻量化与低成本**：内存占用低于 10MB，冷启动不足 1 秒，采用单二进制跨架构分发，可在约 10 美元的低配开发板（RISC-V/ARM/MIPS/x86 等）或旧款安卓设备上稳定运行。
- **广泛的模型与渠道兼容**：原生支持 OpenAI、Anthropic、Google 及本地 Ollama/vLLM 等 30 多家大语言模型提供商，内置智能路由优化 API 调用成本；同时无缝对接 Telegram、Discord、微信、QQ、WhatsApp 等 19 种以上即时通讯平台。
- **强大的 Agent 扩展能力**：完整支持 MCP（模型上下文协议）、Skills 技能插件、视觉多模态处理、网页搜索、文件读写与代码执行；提供定时任务、子代理并发编排、事件钩子拦截等高级自动化工作流。
- **灵活的多端部署方案**：提供图形化 WebUI 启动器、CLI 命令行交互、Docker 容器化部署及原生 APK，全面覆盖桌面、服务器及资源极度受限的边缘计算场景。

该项目旨在打破硬件与算力壁垒，以极低的资源消耗实现高效、安全且高度可扩展的本地化 AI 助手服务。