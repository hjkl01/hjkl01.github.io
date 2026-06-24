### [spiderfoot](https://github.com/smicallef/spiderfoot) ![GitHub Repo stars](https://img.shields.io/github/stars/smicallef/spiderfoot?style=social)

SpiderFoot 是一款基于 Python 3 的开源情报（OSINT）自动化工具，采用 MIT 许可证。它集成了超过 200 个模块，支持通过内置 Web 界面或命令行使用，能够利用多种数据源和分析方法高效提取和导航数据。该工具适用于红队演练、渗透测试等进攻性侦察，也可用于防御性地收集组织在互联网上的暴露信息。

主要功能包括：
- **多目标扫描**：支持 IP 地址、域名、子域名、主机名、网络段、ASN、邮箱、电话号码、用户名、人名及加密货币地址等实体。
- **丰富的情报集成**：提供 DNS 枚举、威胁情报查询、数据泄露搜索、社交媒体追踪、暗网搜索、端口扫描等功能，并可与 SHODAN、VirusTotal 等外部 API 集成。
- **高级分析能力**：具备可配置的关联引擎、可视化展示、数据导出（CSV/JSON/GEXF）以及调用 DNSTwist、Nmap 等其他安全工具的能力。
- **灵活部署**：支持本地安装、Docker 部署，并提供云托管版本 SpiderFoot HX 以增强协作和管理功能。