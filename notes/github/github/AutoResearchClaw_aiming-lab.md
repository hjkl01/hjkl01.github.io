### [AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) ![GitHub Repo stars](https://img.shields.io/github/stars/aiming-lab/AutoResearchClaw?style=social)

AutoResearchClaw 是一个将“研究想法”自动转化为“可投稿论文”的自主研究系统，支持纯自动运行与人机协同（Co-Pilot）两种模式。项目核心功能包括：

- 提供 **23 阶段端到端研究流水线**（选题、文献检索、假设生成、实验设计与执行、结果分析、论文写作、质量审核、导出发布）。
- 自动从 **OpenAlex、Semantic Scholar、arXiv** 获取真实文献，生成参考文献并进行多层引用真实性与相关性校验，自动清理虚假引用。
- 支持 **多智能体协作**（假设辩论、结果分析、同行评审）与 **PIVOT/REFINE 决策循环**，在实验失败或假设不成立时自动修复或转向。
- 具备 **硬件感知实验执行**（自动识别 GPU/MPS/CPU）、沙箱运行、异常检测（NaN/Inf）、代码修复与迭代优化能力。
- 输出完整科研交付物：论文草稿、会议模板 LaTeX（NeurIPS/ICML/ICLR）、BibTeX、实验代码与指标、图表、评审报告和可复现制品。
- 提供 **HITL 人在回路协同系统**：多种干预模式（全自动、关卡审批、分步、协同驾驶等）、关键阶段人工审阅/编辑、预算与风险控制。
- 支持 **跨运行自学习**（MetaClaw 集成）：将失败与告警沉淀为技能，注入后续运行以提升稳健性。
- 支持 **技能扩展库**：可加载内置与自定义学科技能，增强写作、实验设计和领域研究能力。
- 具备 **跨平台与生态集成能力**：可独立 CLI 运行，也可接入 OpenClaw、ACP 兼容智能体（Claude/Codex/Copilot/Gemini/Kimi/OpenCode）及 Discord/Telegram/飞书/微信等消息平台。
- 新版本支持 **多学科专用实验代理**（如高能物理、生物、统计）与 **ARC-Bench 开放式自主研究基准**（55 主题）。