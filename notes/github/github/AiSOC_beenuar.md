### [AiSOC](https://github.com/beenuar/AiSOC) ![GitHub Repo stars](https://img.shields.io/github/stars/beenuar/AiSOC?style=social)

AiSOC 是一款开源、可自托管的 AI 安全运营中心（SOC）平台，核心功能如下：

- **多源数据采集与联邦查询**：83+ 连接器（EDR/XDR、SIEM、云、身份、网络等），Schema 驱动接入，一条查询跨 Splunk SPL / Sentinel KQL / Elastic ES|QL / QRadar AQL 联邦检索。
- **实时检测与关联**：947 条可执行规则（869 条原生）在 Kafka 事件流上实时触发，结合 ML Fusion 与 UEBA 进行威胁关联、评分和状态化检测（暴力破解、端口扫描等）。
- **AI 自主调查与决策审计**：基于 LangGraph 的智能体按告警特征路由至专业模型，自动调用 IOC 情报、MITRE 查询、图谱扩散半径等工具；Investigation Ledger 完整记录每一步 prompt、工具调用、证据引用与推理，支持回放与公开分享。
- **自动分流与受控响应**：融合告警由 AI 自动 triage（默认 copilot 模式），基于置信度 × 影响面 × 可逆性策略决定是否自动执行响应动作；高置信低风险操作自动执行，其余保留人工确认，支持回滚与事后验证。
- **LLM 成本治理**：多模型网关、租户级预算与熔断、内容寻址响应缓存、成本阶梯路由（低置信度升级强模型）及 BYOK 密钥管理。
- **Hunt-as-Code**：YAML 假设模板 + MITRE 标签 + 定时调度，配合自然语言 `/hunt` 工作台和免费在线规则翻译器 / ATT&CK 覆盖率评估器。
- **开放扩展生态**：Python / TypeScript / Go 插件 SDK，检测规则、连接器、剧本均可一键贡献，CI 自动校验 PR。
- **IDE 集成**：内置 MCP Server，分析师可在 Claude / Cursor / Cody 中直接查询告警、发起调查、逐跳回放 Agent 决策链。
- **透明可验证**：MIT 协议，Agent 代码与底层基础设施均可读、可替换；每次 PR 均通过 CI 评估套件（告警降噪率、检测回归、伪造毒理校验），每周发布公开基准记分板。