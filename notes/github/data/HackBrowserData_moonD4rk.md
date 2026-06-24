### [HackBrowserData](https://github.com/moonD4rk/HackBrowserData) ![GitHub Repo stars](https://img.shields.io/github/stars/moonD4rk/HackBrowserData?style=social)

HackBrowserData 是一个命令行工具，用于从浏览器中解密并导出数据，支持导出密码、Cookie、书签、历史记录、下载记录、信用卡信息、扩展、LocalStorage、SessionStorage 等。

项目支持 Windows、macOS、Linux 三大平台，覆盖主流 Chromium 内核浏览器与 Firefox，并在 macOS 支持 Safari。可按浏览器和数据类别筛选导出，支持 CSV、JSON、Cookie-Editor 格式输出，并可压缩为 ZIP。还提供浏览器/配置文件检测列表与详细统计功能。

构建基于 Go 1.20+。其中 Windows 下对 Chromium 127+（Chrome/Edge/Brave 等）Cookie 解密需额外构建并嵌入 App-Bound Encryption 载荷。macOS 下部分浏览器解密可能需要当前用户密码，Safari 需开启“完全磁盘访问”。