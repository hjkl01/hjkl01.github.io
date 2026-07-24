### [Bonsai-demo](https://github.com/PrismML-Eng/Bonsai-demo) ![GitHub Repo stars](https://img.shields.io/github/stars/PrismML-Eng/Bonsai-demo?style=social)

该项目提供 Bonsai 系列语言模型（包括 1-bit Bonsai 和 Ternary-Bonsai，支持 27B、8B、4B、1.7B 等规格）的本地部署演示。核心功能包括：

1. **多平台兼容**：支持在 Mac (Metal)、Linux/Windows (CUDA, Vulkan, ROCm) 及 CPU 环境下运行。
2. **视觉与长上下文**：27B 版本为视觉语言模型，支持图片输入及 256k+ token 的超长上下文处理。
3. **智能体能力**：原生支持 OpenAI 风格的工具调用（Tool Calling）及 MCP 服务器集成，并具备可调节推理强度的思考模式。
4. **高效量化**：通过 1-bit 或 2-bit 量化技术大幅降低模型体积（如 27B 模型仅需约 3.5-7GB 权重内存），适配消费级硬件甚至移动端。
5. **便捷部署**：提供自动化安装脚本（setup.sh/ps1），一键完成依赖配置、模型下载及后端服务启动，并可选集成 Open WebUI 提供完整的聊天界面。