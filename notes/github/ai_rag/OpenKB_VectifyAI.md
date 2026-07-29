### [OpenKB](https://github.com/VectifyAI/OpenKB) ![GitHub Repo stars](https://img.shields.io/github/stars/VectifyAI/OpenKB?style=social)

OpenKB 为开源命令行知识库系统。无向量数据库。利用 LLM 将原始文档编译为结构化互链 Wiki。替代传统 RAG，实现知识累积。

功能特征：
- 文档解析：处理长文档、多格式（PDF/Word/URL等）及多模态（图表）。依赖 PageIndex 树形索引推理检索。
- Wiki 编译：自动提取并同步摘要、概念及实体页面。生成交叉链接。
- 查询对话：支持基于 Wiki 的单次问答与多轮持久化对话。
- 技能工厂（Skill Factory）：提取知识库为独立 Agent 技能。供外部 AI Agent（Claude/Codex等）调用。
- 生态兼容：输出纯 `.md` 文件。原生适配 Obsidian。符合 Google OKF 规范。