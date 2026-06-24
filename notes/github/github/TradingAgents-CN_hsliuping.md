### [TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) ![GitHub Repo stars](https://img.shields.io/github/stars/hsliuping/TradingAgents-CN?style=social)

TradingAgents 中文增强版是一个面向中文用户的多智能体+大模型股票分析学习平台，基于原版 TradingAgents 二次增强，定位于教育与研究，不提供实盘交易指令。项目支持 A 股/港股/美股分析，提供中文本地化界面与学习体系，帮助用户开展合规的股票研究和策略实验。

核心功能包括：多 LLM 提供商接入（含原生 OpenAI、Google AI、国产模型与聚合渠道）、智能模型选择与持久化配置、自定义端点、批量与单股分析、智能新闻分析与过滤、股票筛选、自选股管理、个股详情、模拟交易、实时进度通知（SSE/WebSocket）、统一日志与多级缓存、专业报告导出（Markdown/Word/PDF）。

v1.0.1 采用 FastAPI + Vue3 新架构，配套 MongoDB+Redis、RESTful API、Docker 多架构部署（amd64/arm64）与 GitHub Actions 自动构建；重点增强了配置管理、模型排序一致性、页面切换刷新、单股同步链路可视化、AKShare 多级行情兜底及上游能力吸收，并修复了技术指标/基本面计算和分析死循环等关键问题，提升稳定性与数据一致性。

项目采用混合许可证：除 `app/` 与 `frontend/` 外为 Apache 2.0 开源；`app/`（后端）和 `frontend/`（前端）为专有部分，商业使用需单独授权。