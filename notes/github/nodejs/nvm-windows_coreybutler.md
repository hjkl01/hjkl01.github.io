### [nvm-windows](https://github.com/coreybutler/nvm-windows) ![GitHub Repo stars](https://img.shields.io/github/stars/coreybutler/nvm-windows?style=social)

**NVM for Windows 功能总结**

NVM for Windows 是一款专为 Windows 系统设计的 Node.js 版本管理器，由 Microsoft、npm、Google 推荐。

**核心功能：**
- 管理同一台 Windows 电脑上安装的多个 Node.js 版本
- 在不同 Node.js 版本间快速切换，无需重复修改环境变量
- 安装特定版本、最新版本或 LTS 版本
- 通过符号链接（symlink）机制实现版本切换，切换后所有打开的终端窗口自动生效
- 支持设置 npm 镜像源（如国内用户可使用 npmmirror）
- 内置调试命令检查常见配置问题

**主要特点：**
- 使用 Go 语言编写，不依赖已有的 Node.js 安装
- 提供 Windows 安装程序，支持管理员权限运行
- 版本切换配置持久化，重启系统后仍然有效
- 与 macOS/Linux 上的 nvm 是不同的项目，专门为 Windows 设计