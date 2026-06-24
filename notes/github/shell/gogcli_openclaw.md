### [gogcli](https://github.com/openclaw/gogcli) ![GitHub Repo stars](https://img.shields.io/github/stars/openclaw/gogcli?style=social)

gogcli 是一个面向终端、脚本、CI 和智能代理的 Google 命令行工具，支持统一操作 Gmail、Calendar、Drive、Docs、Sheets、Slides、Forms、Meet、Maps、Photos、Contacts、Tasks、People、Classroom、Chat、YouTube、Analytics、Search Console，以及 Workspace 管理（Admin Directory、Cloud Identity Groups、Keep）等服务。

项目核心功能包括：
- **自动化友好输出**：支持稳定的 `--json` 和 `--plain` 输出到 stdout，提示/进度/警告走 stderr，便于脚本解析。  
- **多账号与多认证方式**：支持多个 Google 账号与 OAuth 客户端，支持 OAuth、直接 Access Token、ADC、Workspace 服务账号（含域范围委托）。  
- **安全控制机制**：支持命令白名单/黑名单、`--dry-run`、`--no-input`、`--force`、`--gmail-no-send`、安全配置二进制（safety profile）等，适合高风险自动化场景。  
- **审计与只读能力**：提供 Drive/Contacts 等高风险数据面的审计、清单、活动追踪、变更追踪与只读报告命令。  
- **丰富业务操作**：覆盖邮件检索与过滤导出、日历创建更新与会议集成、网盘共享审计、文档/表格/幻灯片/表单编辑、地图与地理编码、YouTube 查询、分析报表、站点搜索分析等。  
- **备份能力**：支持 Google 账户数据备份、校验与导出。  
- **文档完善**：每个命令都有自动生成文档与内置 help，提供完整安装、快速开始、认证配置与工作流指南。  

总体上，gogcli 的定位是：**将大量 Google API 能力以一致、可脚本化、可审计、可加固的 CLI 方式提供给开发与运维自动化流程**。