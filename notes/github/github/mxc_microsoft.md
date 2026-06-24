### [mxc](https://github.com/microsoft/mxc) ![GitHub Repo stars](https://img.shields.io/github/stars/microsoft/mxc?style=social)

MXC（Microsoft eXecution Container）是一个沙箱代码执行系统，用于在 Windows、Linux、macOS 上安全运行不受信任的代码（模型输出、插件、工具）。

支持多种容器后端：进程容器、Windows Sandbox、LXC、Bubblewrap、Seatbelt（macOS）、MicroVM、Hyperlight、IsolationSession、WSLC。

通过 JSON Schema 定义执行参数和安全策略，支持文件系统（读写路径）、网络（出站控制）、UI（剪贴板、显示、GUI）策略控制。

提供 TypeScript SDK（@microsoft/mxc-sdk），包含一次性执行和状态感知生命周期两种 API 模式，适用于短期任务和长期会话场景。