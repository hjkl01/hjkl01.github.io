### [ADR](https://github.com/uber/ADR) ![GitHub Repo stars](https://img.shields.io/github/stars/uber/ADR?style=social)

ADR（Agentic AI Detection and Response）是一款企业级 AI 智能体安全系统，已在 Uber 生产环境部署。系统提供四大核心能力：

1. **可观测性**：采集并记录 AI 智能体的意图、工具调用和执行轨迹，支持 Claude Code、Cursor、Codex 等 7 种以上编码工具，覆盖 macOS、Linux、Windows 平台。

2. **基准测试**：包含 300+ 任务、133 个 MCP 服务器，覆盖全部 17 种智能体攻击技术，用于评估防御效果。

3. **威胁检测**：采用双层架构，先通过高召回率进行初步筛选，再对可疑会话进行深度智能推理分析。

4. **安全防护**：在危险操作造成损害前主动拦截（该组件暂未开源）。

项目论文已发表于 MLSys 2026。