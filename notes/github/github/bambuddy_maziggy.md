### [bambuddy](https://github.com/maziggy/bambuddy) ![GitHub Repo stars](https://img.shields.io/github/stars/maziggy/bambuddy?style=social)

Bambuddy 是一个面向 Bambu Lab 打印机的开源自托管管理平台，可在本地网络离线运行、无需依赖官方云，支持从单台到多台（打印农场）统一管理。

核心功能包括：实时监控与控制打印机（状态、摄像头、AMS、风扇、暂停/恢复等）、打印队列与调度自动化（定时、批量、多机分发、自动上下电、耗材校验）、打印归档与日志分析（3MF归档、预览、失败分析、用料与成本统计）、文件库管理（上传/整理/去重/多盘管理）、项目管理、多渠道通知、耗材库存与标签管理、维护计划管理，以及完整的权限与认证体系（分组权限、2FA、OIDC单点登录）。

项目还提供虚拟打印机与远程打印能力（Proxy Mode 安全 TLS 中继）、可选服务端切片（网页端直接 Slice & Print）、MakerWorld 导入、Prometheus/MQTT/Home Assistant/Spoolman 等集成，并支持 API Key、Webhook、备份恢复与调试诊断。整体定位是替代并增强 Bambu 官方云的私有化打印控制中心。