### [birdnet-go](https://github.com/tphakala/birdnet-go) ![GitHub Repo stars](https://img.shields.io/github/stars/tphakala/birdnet-go?style=social)

BirdNET-Go 是一个可自托管、7×24 小时运行的本地 AI 声景分析平台，用于鸟类、野生动物和蝙蝠声音识别。它可接入声卡或 RTSP 音频流，在树莓派等设备上进行本地推理，并通过网页仪表盘实时展示结果。

项目核心功能包括：支持 BirdNET、Google Perch、BattyBirdNET、Geomodel 等多模型并行识别与交叉校验；实时频谱图与检测热力图；可配置误报过滤与置信度阈值；多音频源并行处理及离线音频分析；告警规则引擎（支持 Discord、Slack、Telegram、MQTT、Webhook、BirdWeather 等）；数据存储与备份（SQLite/MySQL）；系统运维能力（健康诊断、数据库修复、OIDC/SSO、TLS 管理、热重载）。

它支持 Linux/Windows/macOS、Docker 多架构镜像和预编译二进制，前端支持 PWA 安装、15 种界面语言及 40+ 语言物种名，默认本地优先并注重隐私。