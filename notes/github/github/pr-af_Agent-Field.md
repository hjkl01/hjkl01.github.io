### [pr-af](https://github.com/Agent-Field/pr-af) ![GitHub Repo stars](https://img.shields.io/github/stars/Agent-Field/pr-af?style=social)

PR-AF 是一个基于 AgentField 的开源智能代码审查工具，核心功能如下：

**动态自适应审查管道**：根据 PR 的代码拓扑结构，动态编译审查维度（语义、机械、系统视角），并生成专用的审查 Agent 进行并行审查。

**证据支撑的审查发现**：通过 AST 提取调用方代码片段和 import 上下文，验证发现的问题是否有代码证据支撑，大幅降低误报率。

**复合漏洞合成**：不只分析线性代码，还能聚类跨文件的关联风险，评估孤立发现是否组合成系统性问题。

**可证伪性门控**：在生成 GitHub 评论前，主动尝试推翻每个发现（安全行为、预期行为、已有缓解措施等），只有幸存的发现才会被输出。

**多模型灵活支持**：支持通过 OpenRouter 调用不同层级的模型——DeepSeek 类用于常规 PR，GLM-5.2 用于深度开源模型审查，Opus 类前沿模型用于高风险 PR。

**多方式集成**：提供 CLI、REST API、Docker Compose、GitHub Actions 等多种部署和触发方式，支持自定义审查策略和成本/时间上限控制。

**低成本**：相比商业工具（如 Codex、CodeRabbit）约便宜 10 倍，且为开源免费项目。