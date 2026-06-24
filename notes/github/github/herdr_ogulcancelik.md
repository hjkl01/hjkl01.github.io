### [herdr](https://github.com/ogulcancelik/herdr) ![GitHub Repo stars](https://img.shields.io/github/stars/ogulcancelik/herdr?style=social)

herdr 是一个运行在终端中的 **AI 代理多路复用器**，结合了 tmux 的会话持久化能力和代理状态感知能力，核心功能包括：

- 在终端内管理 **工作区 / 标签页 / 分屏**，支持鼠标点击、拖拽、分割与文本选择；
- 支持 **后台持久会话**：可随时 detach/reattach，关闭终端后代理仍持续运行，并可恢复会话结构；
- 提供 **代理状态可视化**：实时显示 blocked / working / done / idle，快速掌握多个代理进度；
- 支持 **本地与远程（SSH）接入**，可从任意设备连接同一会话，也可直接附着到单个代理终端；
- 提供 **CLI 与 Socket API**，便于代理或脚本自动创建工作区、分屏、运行命令、读取输出、等待状态变化；
- 内置多种主流代理的自动检测与集成（如 Claude Code、Codex 等），无配置即可使用，并支持扩展集成；
- 轻量化单一 Rust 二进制（Linux/macOS），非 GUI、非 Electron，保持原生终端体验。