### [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) ![GitHub Repo stars](https://img.shields.io/github/stars/esengine/DeepSeek-Reasonix?style=social)

Reasonix 是一个专为终端设计的 DeepSeek 原生 AI 编程代理。主要功能特点：

1. **配置驱动**：通过 `reasonix.toml` 配置文件管理模型提供商、代理、工具和插件，无硬编码模型。
2. **多模型支持**：内置 DeepSeek 预设，支持任何 OpenAI 兼容端点，可组合运行两个模型（执行器+规划器）。
3. **插件驱动**：外部工具通过标准输入 JSON-RPC（MCP 兼容）作为子进程运行。
4. **缓存感知上下文管理**：启动时注入稳定的环境摘要，自动裁剪过期工具输出。
5. **轻量分发**：单个静态 Go 二进制文件，无外部依赖，支持跨平台编译。

支持 CLI/TUI、桌面应用和 VS Code 扩展三种使用方式。