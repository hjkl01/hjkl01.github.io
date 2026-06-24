### [mempalace](https://github.com/MemPalace/mempalace) ![GitHub Repo stars](https://img.shields.io/github/stars/MemPalace/mempalace?style=social)

MemPalace 本地优先 AI 记忆系统。存储对话历史 verbatim，通过语义搜索检索，不总结、不改写。结构化索引：人/项目为 wing，话题为 room，内容为 drawer。可插拔后端（默认 ChromaDB），支持 sqlite_exact、qdrant、pgvector。无 API 调用即可实现 96.6% 召回率。嵌入模型本地运行，数据不外传。提供 MCP 服务、知识图谱、Agent 等功能，支持 Claude Code 等自动保存钩子。