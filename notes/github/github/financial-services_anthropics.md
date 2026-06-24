### [financial-services](https://github.com/anthropics/financial-services) ![GitHub Repo stars](https://img.shields.io/github/stars/anthropics/financial-services?style=social)

该项目提供一套面向金融服务场景的 Claude 参考方案，覆盖投行、股票研究、私募、财富管理、基金后台和运营开户等流程。核心能力可通过两种方式使用：  
1）作为 Claude Cowork 插件安装；  
2）通过 Claude Managed Agents API 部署到自有工作流系统。  

项目包含两大部分：  
- **工作流代理（Agents）**：如 Pitch Agent、Market Researcher、GL Reconciler、KYC Screener 等，可端到端完成路演材料、研究建模、财务对账、月结、报表审阅、开户审核等任务。  
- **垂直插件（Vertical Plugins）**：按业务条线提供技能、斜杠命令和数据连接器，可单独安装使用（如 `/comps`、`/dcf`、`/earnings`、`/ic-memo` 等）。  

系统采用文件化结构（Markdown/YAML/JSON，无构建步骤），支持按机构需求定制：替换数据源、加入内部术语与模板、调整代理职责、扩展新技能/新代理。  

数据连接基于 MCP，集中在 `financial-analysis` 核心插件中，集成 Daloopa、Morningstar、S&P Global、FactSet、Moody’s、LSEG、PitchBook 等 11 个数据提供方（通常需供应商订阅/API Key）。  

另提供 Microsoft 365 安装工具，用于在企业自有云（如 Vertex AI、Bedrock 或内部网关）中部署 Claude M365 插件。  

项目定位为“分析与文档草稿辅助”，不提供投资/法律/税务/会计建议，不执行交易或审批，所有输出需专业人员复核与签署。