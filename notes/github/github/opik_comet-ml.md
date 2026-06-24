### [opik](https://github.com/comet-ml/opik) ![GitHub Repo stars](https://img.shields.io/github/stars/comet-ml/opik?style=social)

Opik 是由 Comet 开源的可观测性、评估与优化平台，用于构建、测试和优化生成式 AI 应用。

核心功能包括：

- **全链路追踪**：记录 LLM 调用、对话日志、Agent 活动详情
- **评估测试**：支持 LLM-as-a-Judge 评估、幻觉检测、审核、RAG 评估，数据集与实验管理
- **生产监控**：大规模日志处理（40M+ 条/天），监控仪表盘，线上评估规则
- **优化工具**：Opik Agent Optimizer 优化提示词与 Agent，Opik Guardrails 实现安全防护
- **CI/CD 集成**：支持 PyTest 集成进行自动化评估

提供 Python、TypeScript、Ruby SDK，支持 70+ 框架集成，包括 LangChain、LlamaIndex、OpenAI、Anthropic、Google ADK、AutoGen 等主流框架。支持自托管部署（Docker、Kubernetes）或使用 Comet.com 云服务。