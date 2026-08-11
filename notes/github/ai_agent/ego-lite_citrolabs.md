### [ego-lite](https://github.com/citrolabs/ego-lite) ![GitHub Repo stars](https://img.shields.io/github/stars/citrolabs/ego-lite?style=social)

**ego lite 项目功能总结：**

ego lite 是一款专为 AI agent 设计的高性能浏览器，核心功能包括：

1. **人机并行** - 用户与 AI agent 可同时使用同一浏览器，agent 在独立 Space 中执行任务，互不干扰。

2. **多任务并行** - 支持多个 agent 或多个任务在各自的独立 Space 中同时运行，高效并行工作。

3. **继承现有数据** - 首次启动可选择迁移 Chrome 数据，agent 可继承用户的登录状态、cookies、扩展和书签。

4. **代码化调用** - 将浏览器能力封装为 JavaScript 函数供 agent 直接调用，替代传统 CLI 循环，复杂任务执行速度提升最高 2.5 倍，token 消耗显著降低。

5. **高质量页面快照** - 基于内核级定制，提供业界最强的页面快照，可靠处理深层嵌套 iframe 等复杂场景。

6. **通用 agent 接入** - 通过 `ego-browser` 技能层，支持 Claude Code、Codex、Cursor 等任意 agent 驱动浏览器。

7. **经验积累** - 成功操作将沉淀为可复用技能，类似任务后续执行速度可提升 5 倍。

当前支持 macOS，Windows 和 Linux 版本已在开发计划中。