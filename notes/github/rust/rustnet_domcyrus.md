### [rustnet](https://github.com/domcyrus/rustnet) ![GitHub Repo stars](https://img.shields.io/github/stars/domcyrus/rustnet?style=social)

RustNet 是一款跨平台终端网络监控工具，主打“按进程查看连接”。它可实时展示 TCP、UDP、QUIC 连接，并将每条连接映射到所属进程（Linux 用 eBPF，macOS 用 PKTAP，Windows/FreeBSD 用原生 API）。

核心功能包括：  
- 深度包检测（DPI），可识别 HTTP、TLS/SNI、DNS、SSH、FTP、QUIC、MQTT、BitTorrent、STUN、NTP、mDNS、LLMNR、DHCP、SNMP、SSDP、NetBIOS 等协议；  
- 实时 TCP 分析（重传、乱序、快速重传），支持单连接与全局统计；  
- 智能连接生命周期管理（按协议超时、白黄红老化提示、可保留已关闭连接用于排查）；  
- 类 Vim/fzf 的强过滤与排序能力（如 port/src/dst/sni/process/state/proto 与正则）；  
- GeoIP 本地国家识别（基于 MaxMind，本地查询不联网）；  
- 网卡实时统计（速率、字节、包数、错误、丢包等）；  
- 默认安全沙箱与最小权限运行（Linux Landlock、macOS Seatbelt、Windows 降权与子进程限制）。  

定位上，RustNet 介于 netstat/ss 与 Wireshark/tcpdump 之间：既能看“谁在连”（进程归属），又有实时连接视图与协议识别；同时支持导出 PCAP，便于后续在 Wireshark 做更深度取证分析。