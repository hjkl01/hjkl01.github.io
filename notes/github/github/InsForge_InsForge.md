### [InsForge](https://github.com/InsForge/InsForge) ![GitHub Repo stars](https://img.shields.io/github/stars/InsForge/InsForge?style=social)

InsForge 是一个面向“智能体编程（agentic coding）”的一体化开源后端平台，帮助代码智能体端到端构建和交付全栈应用。它通过两种方式与智能体交互：  
1) MCP Server（支持自托管和云端）；  
2) CLI + Skills（云端）。  

核心能力是让智能体像后端工程师一样完成后端操作：读取文档、数据库结构、元数据和运行日志，并直接配置与管理后端资源（如部署边缘函数、执行数据库迁移、创建存储桶、配置认证等）。  

主要产品模块包括：认证（用户与会话管理）、Postgres 数据库、S3 兼容对象存储、多模型统一网关（OpenAI 兼容 API）、边缘函数、长时容器计算服务（私测）以及网站构建与部署。  

项目支持云端使用（insforge.dev）、本地 Docker Compose 自托管、多项目隔离运行，以及 Railway/Zeabur/Sealos 的一键部署。整体定位是为 AI 编码工作流提供完整后端基础设施。