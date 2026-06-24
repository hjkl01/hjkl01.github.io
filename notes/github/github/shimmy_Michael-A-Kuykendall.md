### [shimmy](https://github.com/Michael-A-Kuykendall/shimmy) ![GitHub Repo stars](https://img.shields.io/github/stars/Michael-A-Kuykendall/shimmy?style=social)

Shimmy 是一个轻量级、本地优先的 OpenAI API 替代服务，主打“开箱即用、零依赖、永久免费”。它以单二进制形式运行，为 GGUF 本地模型提供 100% OpenAI 兼容接口，现有基于 OpenAI SDK 的工具和代码基本无需改动，只需切换 API 地址即可接入。

项目核心功能包括：自动发现本地模型（Hugging Face/Ollama/本地目录）、自动分配端口、自动检测并选择 GPU 后端（CUDA/Vulkan/OpenCL/MLX，失败可优雅回退到 CPU）、支持 LoRA 适配器，以及 MOE CPU/GPU 混合推理（可在消费级硬件上运行 70B+ 大模型）。同时提供常用接口与命令（聊天补全、模型列表、健康检查、WebSocket 流式输出、模型探测等）。

技术上基于 Rust + Tokio 与 llama.cpp，强调高性能与可靠性：快速启动、低内存占用、跨平台支持（Windows/Linux/macOS），并提供响应缓存、模型预加载、请求路由、监控与 Prometheus 集成、部署模板（Docker/K8s 等）及完善测试体系。整体定位是让本地大模型推理像基础设施一样“无感、稳定、低成本、隐私安全”。