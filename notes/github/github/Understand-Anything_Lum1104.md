### [Understand-Anything](https://github.com/Lum1104/Understand-Anything) ![GitHub Repo stars](https://img.shields.io/github/stars/Lum1104/Understand-Anything?style=social)

Understand Anything 是一个面向代码库与知识库的分析插件，可将项目结构与语义信息转成可交互知识图谱，帮助用户快速理解大型系统。

核心功能包括：
- **代码库知识图谱构建**：自动提取文件、函数、类、依赖关系，生成可视化图谱。
- **交互式可视化探索**：提供 Dashboard，支持缩放、点击、搜索节点，查看关系与通俗解释。
- **业务逻辑映射**：展示领域、流程、步骤等业务视图，连接代码与业务过程。
- **知识库分析**：支持对 Karpathy 风格 wiki 进行图谱化，提取实体、类别、隐含关系与观点。
- **引导式学习与问答**：自动生成架构学习路径，支持自然语言提问代码库问题。
- **语义/模糊搜索**：可按名称或含义检索相关模块（如“哪些部分处理认证”）。
- **变更影响分析**：在提交前分析改动对系统的波及范围。
- **增量更新机制**：默认只重分析变更文件，并可通过提交钩子自动更新图谱。
- **多语言输出**：支持中文等多语言节点描述与界面文案。
- **多平台兼容**：可在 Claude Code、Codex、Cursor、Copilot、Gemini CLI 等多种 AI 编码平台使用。

技术上采用 **Tree-sitter + LLM 的混合多智能体流水线**：前者保证结构解析可复现，后者补充语义理解与解释能力。