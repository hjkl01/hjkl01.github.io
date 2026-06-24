### [Memori](https://github.com/MemoriLabs/Memori) ![GitHub Repo stars](https://img.shields.io/github/stars/MemoriLabs/Memori?style=social)

Memori 是一个面向 AI 代理/LLM 应用的“持久化记忆”系统，核心能力是自动记录并召回代理在对话与执行过程中的信息（不只记录说过的话，还包括工具调用、决策和结果），让代理跨会话持续记住用户与任务上下文。

项目主要功能：
- 提供 **TypeScript 与 Python SDK**，可快速接入现有 LLM 应用。
- **与模型、数据库、框架解耦**（LLM/数据存储/框架无关），可集成到已有架构。
- 自动在后台进行记忆持久化与召回，支持按 **entity（实体）/process（进程）/session（会话）** 分层管理记忆。
- 提供 **Attribution 归因机制**（必须设置 entity 和 process）以正确建立记忆。
- 支持会话管理（自动会话、新建会话、指定会话）。
- 提供 **Advanced Augmentation**，将记忆结构化增强为属性、事件、事实、人物、偏好、关系、规则、技能等，且后台执行、低延迟。
- 提供 **Memori Cloud（零配置）** 与 **BYODB（自带数据库）** 两种使用方式。
- 提供 **Dashboard**（记忆、分析、Playground、API Key 管理）与 **CLI**（账号、密钥、配额管理）。

生态与集成：
- 支持主流 LLM：Anthropic、Bedrock、DeepSeek、Gemini、Grok、OpenAI（含流式/非流式、同步/异步）。
- 支持框架：Agno、LangChain、Pydantic AI。
- 支持平台：DeepSeek、Nebius AI Studio。
- 提供现成集成：
  - **OpenClaw 插件**（无须改代理代码即可获得持久记忆）
  - **Hermes Agent memory provider**（提供显式 recall 工具）
  - **MCP 接入**（可一条命令连接 Claude Code、Cursor、Codex、Warp 等客户端）

性能亮点（LoCoMo 基准）：
- 总体准确率 **81.95%**
- 平均每次查询 **1294 tokens**
- 仅为全量上下文成本的 **4.97%**
- 相比其他检索式记忆方案（如 Zep、LangMem、Mem0）表现更优，并显著降低提示与上下文成本。