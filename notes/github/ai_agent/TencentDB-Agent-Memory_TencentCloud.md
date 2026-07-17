### [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) ![GitHub Repo stars](https://img.shields.io/github/stars/TencentCloud/TencentDB-Agent-Memory?style=social)

该项目（TencentDB Agent Memory）是一款专为AI智能体设计的记忆管理框架，核心功能如下：
- **符号化短期记忆**：将冗长的工具日志与上下文压缩为轻量级Mermaid任务图谱，大幅削减Token消耗（最高降低61%），并通过`node_id`实现全链路追溯。
- **分层长期记忆**：采用“对话→原子事实→场景→用户画像”四层语义金字塔，将碎片化交互结构化沉淀，替代传统扁平向量存储，显著提升长周期会话的个性化理解与任务准确率。
- **渐进式披露与白盒调试**：上层保存结构与摘要，底层保留原始证据；支持从高层抽象逐层下钻至原始日志，所有中间产物均为可读文件，实现透明检索与无损恢复。
- **多平台无缝集成**：提供OpenClaw插件与Hermes网关适配器，内置混合检索（BM25+向量+RRF）与本地SQLite后端，支持零配置启用，自动完成记忆的捕获、提取、聚合与召回，让智能体专注推理，人类专注决策。