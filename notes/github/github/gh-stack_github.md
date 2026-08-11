### [gh-stack](https://github.com/github/gh-stack) ![GitHub Repo stars](https://img.shields.io/github/stars/github/gh-stack?style=social)

# GitHub Stacked PRs 功能总结

**gh-stack** 是一个 GitHub CLI 扩展，用于管理堆叠分支和拉取请求（PR）。它将大型变更拆分为一系列有序、相互依赖的小型 PR，便于逐个审查。

**核心功能：**

1. **堆叠管理** — 创建、维护和导航有序的分支堆叠，每个上层分支依赖下层分支
2. **分支操作** — 初始化堆叠、添加分支、查看堆叠状态、在分支间快速导航
3. **Rebase 自动化** — 对堆叠分支进行级联 rebase，自动处理 rebase 冲突
4. **PR 操作** — 批量创建和更新 PR，自动设置正确的 base 分支，在 GitHub 上将 PR 链接为堆叠
5. **远程同步** — 一键拉取、rebase、推送并同步本地与 GitHub 的堆叠状态
6. **堆叠修改** — 通过交互式终端界面删除、折叠、插入、重命名和重排分支
7. **批量合并** — 一次性合并堆叠中多个 PR，支持普通合并、变基合并、压缩合并
8. **AI 代理集成** — 安装技能让 AI 编程代理了解堆叠 PR 工作流程
9. **主题适配** — 交互式界面自动适配终端亮色/暗色主题

**适用场景：** 大型功能开发需拆分为多个小 PR 时，提高代码审查效率和合并流程的清晰度。