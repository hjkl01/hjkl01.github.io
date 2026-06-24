### [agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) ![GitHub Repo stars](https://img.shields.io/github/stars/microsoft/agent-governance-toolkit?style=social)

Agent Governance Toolkit（AGT）是微软推出的多语言智能体治理工具包，核心目标是在不依赖提示词约束的情况下，为生产环境中的自主 AI Agent 提供可执行、可审计、可追责的治理能力。它主要解决三类问题：  
1）某个动作是否被允许（策略强制）；  
2）具体是哪个 Agent 执行了该动作（身份与信任）；  
3）是否能证明全过程（防篡改审计证据）。

项目支持通过 `govern()` 等方式对工具调用进行实时策略校验与拦截（支持 YAML/OPA/Cedar 等策略），并在拒绝时抛出治理异常；同时可记录每次决策证据，满足审计与合规需求。其架构可按需组合：策略引擎、身份认证（SPIFFE/DID/mTLS）、审计日志、沙箱执行、SRE 控制等。

AGT 提供完整 Python 全栈，以及 TypeScript、.NET、Rust、Go SDK，并支持大量主流 Agent 框架（如 Semantic Kernel、AutoGen、LangChain/LangGraph、CrewAI、OpenAI Agents SDK 等）。还包含 CLI 能力（安装诊断、OWASP 校验、策略 lint、红队扫描）和扩展模块（MCP 安全网关、影子 Agent 发现、治理看板、提示注入评估、贡献者信誉检查）。

在规范与合规方面，项目有正式技术规范与大量一致性测试，覆盖 OWASP Agentic Top 10、NIST AI RMF、EU AI Act、SOC 2 映射，强调“应用层中间件治理 + 分层防护”的生产实践。