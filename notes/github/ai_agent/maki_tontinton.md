### [maki](https://github.com/tontinton/maki) ![GitHub Repo stars](https://img.shields.io/github/stars/tontinton/maki?style=social)

Maki 是一款专为最小化上下文令牌消耗并优化用户体验而设计的 AI 编程代理。其核心功能包括：

1. **上下文效率**：通过 `index` 工具解析文件结构、`code_execution` 沙箱隔离数据处理、智能选择子代理模型强度以及精简的系统提示，显著减少令牌占用。
2. **用户体验**：基于 Rust (ratatui) 构建，启动极快且内存占用低；提供完整的子代理可见性、细粒度的权限控制系统（如自动识别危险命令）、长期记忆管理、模糊搜索及丰富的主题支持。
3. **广泛支持**：兼容 Anthropic、OpenAI、Google、Copilot、Ollama 等多种主流 AI 提供商，并支持动态自定义提供商。
4. **扩展与集成**：支持通过 Lua 插件进行深度定制，提供 ACP 协议以集成至 Zed 等编辑器，并兼容 Claude Code 的输出格式以便替换现有方案。