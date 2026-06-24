### [whitelist-bypass](https://github.com/kulikov0/whitelist-bypass) ![GitHub Repo stars](https://img.shields.io/github/stars/kulikov0/whitelist-bypass?style=social)

该项目是一个“白名单绕过”网络隧道工具：通过 VK Call、Yandex Telemost、WB Stream 等视频通话平台中转网络流量，利用这些平台在政府白名单内的特性来绕过网络审查。

核心功能如下：
- 提供两种隧道模式：
  - **DC 模式**：基于 WebRTC DataChannel（SCTP）传输 TCP/UDP 流量；
  - **Video 模式**：将数据编码到 VP8 视频轨道中传输，适用于 DataChannel 被限速但 RTP 可用的场景。
- 支持**无浏览器 Headless 架构**（推荐）：两端均使用 Go + Pion 直接连接 SFU，性能更好，并支持 ChaCha20 混淆、资源参数调优等能力。
- 流量路径伪装为正常视频通话，经平台 SFU 转发，从 DPI 视角更像普通通话流量。
- 提供多端组件与客户端：
  - Android：VpnService + tun2socks，实现全局流量代理；
  - iOS：提供本地 SOCKS5 代理（可配合第三方 VPN/代理 App 实现全局）；
  - Linux：Headless joiner，暴露 SOCKS5 端口；
  - 桌面 Creator（Electron）及纯 Go Headless Creator；
  - VK 机器人可按需拉起 Headless Creator 并返回入会链接。
- 支持 VK、Telemost、WB Stream 三个平台的创建/加入通话，支持新建会话或附加到已有会话。
- 提供预编译发布包与完整源码构建脚本（Android/iOS/Linux/Windows/macOS、Docker）。