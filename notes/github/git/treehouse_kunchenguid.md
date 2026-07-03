### [treehouse](https://github.com/kunchenguid/treehouse) ![GitHub Repo stars](https://img.shields.io/github/stars/kunchenguid/treehouse?style=social)

Treehouse 是一个用于管理 Git worktrees 的工具，旨在实现工作环境的隔离与复用。它通过维护一个可复用的 worktree 池，让每个代理（Agent）或会话都能瞬间获得独立且包含完整依赖及构建缓存的环境，无需重复克隆仓库。主要特性包括即时隔离、资源持久化复用、自动冲突检测（避免多进程干扰）以及安全的清理机制。支持 macOS、Linux 和 Windows 平台。