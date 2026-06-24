### [nostr-vpn](https://github.com/mmalmi/nostr-vpn) ![GitHub Repo stars](https://img.shields.io/github/stars/mmalmi/nostr-vpn?style=social)

nostr-vpn 是一个类似 Tailscale 的私有 Mesh VPN 项目，基于 FIPS 数据平面构建，提供 `nvpn` 命令行与守护进程、共享的原生应用核心，以及 macOS、Linux、Windows、Android、iOS 的原生客户端外壳。

项目当前核心能力包括：自动生成 Nostr 身份密钥；通过邀请机制共享网络并进行成员/管理员同步；支持多网络配置（单次激活一个网络）；建立私有 Mesh 隧道；在可直连时走点对点 UDP、受阻时经 FIPS 邻居转发；支持 MagicDNS、路由发布、出口节点选择与 WireGuard 上游出口；并提供桌面端应用、JSON 状态输出、网络诊断与更新能力。

平台支持方面：Apple Silicon macOS、Linux x64、Windows x64、Android arm64、iOS（部分仍在完善或等待公开分发），另含 Umbrel/StartOS 的服务与 Web 控制面板；Intel macOS 暂为源码构建。