### [graphify](https://github.com/Graphify-Labs/graphify) ![GitHub Repo stars](https://img.shields.io/github/stars/Graphify-Labs/graphify?style=social)

Graphify 是一款面向 AI 编程助手的知识图谱构建工具，能将项目中的代码、文档、PDF、图片及视频等全量文件自动映射为可交互的知识图谱，使用户通过自然语言查询、路径追踪和概念解释替代传统文件搜索与 grep。核心功能包括：
- **本地优先与安全**：代码解析完全基于本地 tree-sitter AST，无需大模型且数据不出本机；其他文件语义提取按需配置 API。
- **关系透明**：每条连接均标注 `EXTRACTED`（源文件显式）或 `INFERRED`（系统推断）置信度标签，清晰区分事实与推论。
- **广泛集成**：原生支持 Claude Code、Cursor、Copilot 等 20+ 款 AI 助手，兼容 36 种以上编程语言及多种办公/多媒体格式。
- **团队协作**：生成的图谱可直接提交至 Git，内置自动同步钩子与智能合并机制，方便团队共享项目上下文。
- **隐私保障**：零遥测与数据追踪，支持完全本地化运行。
用户只需在 AI 助手输入 `/graphify .` 即可一键生成交互式网页、架构报告与结构化 JSON 文件，显著提升大型复杂项目的代码理解、依赖分析与架构审查效率。