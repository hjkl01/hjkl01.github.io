### [codex-desktop-linux](https://github.com/ilysenko/codex-desktop-linux) ![GitHub Repo stars](https://img.shields.io/github/stars/ilysenko/codex-desktop-linux?style=social)

这是一个**非官方的 Linux 版 Codex Desktop 构建项目**，核心功能是将上游 macOS 的 `Codex.dmg` 自动转换为可运行的 Linux Electron 应用，并提供完整的 Linux 打包、安装与更新能力。

项目主要提供：

- 将 Codex Desktop 从 macOS DMG 转换为 Linux 可运行版本；
- 生成并安装原生 Linux 包：`.deb`、`.rpm`、`.pkg.tar.zst`，也支持本地自构建 AppImage；
- 支持 Nix/NixOS（含 flake 一键运行与模块化安装）；
- 内置 Linux 启动器增强（托盘、单实例热启动、可选多实例、Wayland/X11 兼容优化）；
- 默认提供本地自动更新器 `codex-update-manager`（基于 `systemd --user`），可检测上游新 DMG、在本机重建并安装新包，也支持回滚；
- 支持“无常驻更新器”手动更新模式（`PACKAGE_WITH_UPDATER=0`）；
- 提供可选 Linux 特性模块机制（`linux-features`），按需启用实验/扩展功能；
- 集成 Linux 浏览器注释、Chrome/Brave/Chromium 原生消息宿主支持；
- 提供可选 **Linux Computer Use**（桌面查看与控制能力，含截图、窗口定位、输入模拟等）；
- 提供可选实验功能，如 Linux Read Aloud、移动端远程控制补丁；
- 打包产物内置受管 Node.js 运行时，普通安装通常不依赖系统 `nodejs/npm`。