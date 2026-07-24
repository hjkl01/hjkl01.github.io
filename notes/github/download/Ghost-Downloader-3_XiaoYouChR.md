### [Ghost-Downloader-3](https://github.com/XiaoYouChR/Ghost-Downloader-3) ![GitHub Repo stars](https://img.shields.io/github/stars/XiaoYouChR/Ghost-Downloader-3?style=social)

Ghost Downloader 3 是一款 AI 驱动的跨平台多线程下载器，支持 Linux、Windows、macOS 和 Android 系统。核心功能如下：

1. **多协议支持**：涵盖 HTTP、Magnet/BT、FTP、M3U8、MPEG-DASH、eD2k 等多种下载协议。
2. **智能加速与防封**：采用 IDM 式智能分块技术（无需文件合并）结合 AI 加速，并模拟真实浏览器 TLS 指纹以规避反爬虫检测。
3. **视频解析与录制**：内置 YouTube 和 Bilibili 解析器（支持播放列表、4K/HDR、字幕及登录态），支持 M3U8 直播流的实时解密录制。
4. **平台专属优化**：提供 GitHub Releases 和 HuggingFace 模型下载的专用解析器及镜像加速。
5. **丰富的交互能力**：配套浏览器扩展可嗅探页面资源并接管下载；提供 aria2 兼容的 RPC 接口；任务支持暂停、编辑（URL/Headers/代理）及断点续传；最小化至托盘时自动释放 UI 资源以降低内存占用。