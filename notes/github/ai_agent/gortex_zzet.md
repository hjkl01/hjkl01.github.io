### [gortex](https://github.com/zzet/gortex) ![GitHub Repo stars](https://img.shields.io/github/stars/zzet/gortex?style=social)

Gortex 是一个高性能、高效的代码智能引擎，专为 AI 代理和 IDE 设计。其核心功能是将代码索引为图结构，并通过 CLI、MCP Server 和 Web UI 暴露数据。主要特点包括：

1. **多语言支持**：通过 Tree-sitter AST 分析支持 257 种语言/语法，提供编译器级别的解析能力。
2. **知识图谱**：生成持久化的分层知识图谱，涵盖函数、类、调用链、HTTP 路由及跨服务契约，具备强置信度模型。
3. **高效 AI 集成**：原生支持 17 种 AI 编程代理（如 Claude Code, Cursor 等），通过图查询替代文件读取，可减少高达 50 倍的 Token 消耗。
4. **跨仓库支持**：默认支持多仓库索引，实现跨仓库的引用解析、影响分析和契约匹配。
5. **零依赖部署**：提供 macOS、Linux 和 Windows 的单静态二进制文件，无需外部依赖链，安装简单。
6. **丰富工具集**：提供 175 个 MCP 工具，涵盖符号查找、数据流分析、克隆检测、重构等功能。
7. **其他特性**：内置语义搜索、推测性执行、实时编辑器覆盖、GCX1 紧凑格式、PR 自动审查以及可选的 LLM 提供商集成。