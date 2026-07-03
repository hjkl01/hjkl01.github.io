### [ainovel-cli](https://github.com/voocel/ainovel-cli) ![GitHub Repo stars](https://img.shields.io/github/stars/voocel/ainovel-cli?style=social)

ainovel-cli 是一个全自动 AI 长篇小说创作引擎，支持从一句话需求到完整小说的无人工干预创作。其核心功能包括：

1.  **多智能体协作**：由 Coordinator 调度 Architect（规划）、Writer（写作）、Editor（评审）三个子代理，自主完成从大纲生成、逐章写作到质量评审的全流程。
2.  **长篇管理能力**：采用卷弧双层滚动规划与分层摘要机制，支持 500+ 章超长篇创作，确保剧情连贯性、伏笔回收及角色状态一致。
3.  **高稳定性与恢复**：具备 Step 级断点恢复功能，崩溃后可精确续写；内置自适应上下文压缩策略，有效管理长文本记忆。
4.  **实时干预与导入导出**：支持写作过程中实时注入修改意见并自动重写受影响章节；提供现有小说导入反推设定及 TXT/EPUB 格式导出功能。
5.  **灵活配置**：兼容多种主流 LLM 提供商，支持自定义代理、去 AI 味规则及多种写作风格。