### [Impactor](https://github.com/claration/Impactor) ![GitHub Repo stars](https://img.shields.io/github/stars/claration/Impactor?style=social)

# Impactor 功能总结

Impactor 是一款开源、跨平台的 iOS 侧载工具，支持 macOS、Linux 和 Windows。

**核心功能：**
- 使用 Apple ID 为 iOS 9.0+ 及 Mac 应用签名并侧载
- 支持安装 SideStore 和 LiveContainer
- 支持 AppSync 和 ipatool 获取的 IPA 安装
- 支持 tweak 注入（ElleKit），可注入 .deb/.dylib 文件
- 自动生成 SideStore、LiveContainer 等应用的配对文件
- 支持导出 P12 证书文件
- 提供设备工具（重新信任、配对文件管理）
- 智能处理应用权限和插件注册

**工作原理：**
模拟 Xcode 的操作流程，通过 Apple 开发者账户申请证书和配置文件，对应用进行签名后安装到设备。免费账户有效期 7 天。

**其他：**
- 支持多语言翻译
- MIT 开源协议
- 可通过 Flatpak、Homebrew 安装