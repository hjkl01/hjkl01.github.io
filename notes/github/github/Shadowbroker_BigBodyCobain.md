### [Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) ![GitHub Repo stars](https://img.shields.io/github/stars/BigBodyCobain/Shadowbroker?style=social)

ShadowBroker 是一个去中心化的实时地理情报平台，将 60+ 公共 OSINT 数据源聚合到同一张地图中，提供 35+ 可切换图层与多种可视化模式（默认/卫星/热成像/夜视/CRT），用于全局态势感知与情报分析。

核心功能包括：实时追踪航空器（商业/私人/军用）、船舶 AIS、卫星轨道、铁路、冲突事件、乌克兰前线与空袭警报、地震火灾火山天气空气质量、互联网中断、数据中心、电厂、军事基地、GPS 干扰区、CCTV 网络（上万路）、KiwiSDR 与警用扫描器、Meshtastic/APRS 无线电节点，以及 Shodan 互联网设备检索覆盖层。

平台支持右键地点情报卡（国家信息、领导人、Wikipedia 摘要、最新 Sentinel-2 图像）、SAR 地表变化检测（形变/洪水/植被扰动/灾损等）、AOI 自定义告警、Time Machine 快照回放、以及 HMAC 签名的 Agentic AI 指令通道（可由 OpenClaw/GPT/Claude/LangChain 等代理接入并对地图与图层执行读写操作）。

内置 InfoNet 实验性去中心化通信与治理层（网状消息、Dead Drop、终端 CLI、治理投票与升级机制），但当前不保证隐私；项目强调只聚合公开数据、开源可审计、默认不收集不上传用户数据，支持本地浏览器 + 自托管后端部署（Docker/Kubernetes）。