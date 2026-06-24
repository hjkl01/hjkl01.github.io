### [crowdsec](https://github.com/crowdsecurity/crowdsec) ![GitHub Repo stars](https://img.shields.io/github/stars/crowdsecurity/crowdsec?style=social)

CrowdSec 是一个开源、协作式安全方案，核心功能是通过社区共享威胁情报，实现对恶意 IP 的检测与拦截。

项目主要功能包括：
- 提供一体化安全引擎，集成 IDS/IPS 与 WAF，基于日志与 HTTP 请求分析恶意行为；
- 支持主动防护与处置，可通过 Remediation 组件自动封禁攻击来源；
- 内置社区恶意 IP 封禁列表（Community Blocklist），可实时预防已知恶意 IP 访问系统；
- 支持“本地检测、异地处置”（Detect Here, Remedy There），可集中分析多源日志并在应用层、系统层、基础设施层多点拦截威胁；
- 默认提供常见攻击场景规则（如暴力破解、端口扫描、Web 扫描等），并可通过 Hub 获取、扩展或自定义检测规则；
- 提供 Console 用于安全态势可视化、监控与自动化管理；
- 支持 Linux、Windows、Docker、OPNsense、Kubernetes 等多平台部署。