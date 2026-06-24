### [witr](https://github.com/pranshuparmar/witr) ![GitHub Repo stars](https://img.shields.io/github/stars/pranshuparmar/witr?style=social)

witr 是一个跨平台命令行工具（含交互式 TUI），核心目标是回答“这个进程/服务/端口为什么在运行”。

它通过将端口、服务、容器、文件占用等对象统一映射到 PID，自动给出可读的因果链说明：进程从哪里来、如何被启动、当前由谁维持运行。相比 `ps/top/lsof/systemctl/docker ps` 等只展示“在运行什么”，witr 直接解释“为什么在运行”。

主要功能包括：
- 按进程名、PID、端口、文件、容器查询（可混合多目标输入）。
- 输出进程关键信息与“Why It Exists”祖先链路，支持普通/简短/树形/JSON 等模式。
- 识别主要来源与上下文：如 systemd/launchd/Windows 服务、SSH、cron、pm2、容器运行时等，并补充工作目录、Git 仓库、网络绑定等信息。
- 提供风险与健康告警：如 root 运行、危险 capability、公网监听、频繁重启、高内存、超长运行、可疑注入变量等。
- 提供交互式 TUI 仪表盘：进程、端口、容器、文件锁四类视图，支持筛选排序、进程详情、鼠标操作，以及 Unix 下信号与 renice 操作。

项目支持 Linux、macOS、Windows、FreeBSD，提供静态二进制及多种包管理器安装方式，适用于日常排障、运维巡检与故障应急场景。