### [ladybird](https://github.com/LadybirdBrowser/ladybird) ![GitHub Repo stars](https://img.shields.io/github/stars/LadybirdBrowser/ladybird?style=social)

Ladybird 是一个完全独立的开源 Web 浏览器项目，采用基于 Web 标准的新颖渲染引擎，目标是构建一个完整可用的现代浏览器。

**核心特点：**
- **多进程架构**：包含主 UI 进程、多个独立标签页的 WebContent 渲染进程、图像解码进程和请求服务进程
- **安全设计**：图像解码和网络连接均在进程外运行，每个标签页拥有独立的沙箱，有效防护恶意内容
- **继承自 SerenityOS 的核心组件**：包括 Web 渲染引擎（LibWeb）、JavaScript 引擎（LibJS）、WebAssembly 实现（LibWasm）、密码学/传输层安全（LibCrypto/LibTLS）、HTTP 客户端（LibHTTP）、2D 图形与图像解码（LibGfx）、Unicode 支持（LibUnicode）、音视频播放（LibMedia）等

**平台支持：** Linux、macOS、Windows（通过 WSL2）及多种 *Nix 系统

**当前状态：** 预 Alpha 阶段，目前仅适合开发者使用

**许可证：** 2-clause BSD