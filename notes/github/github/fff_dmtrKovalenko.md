### [fff](https://github.com/dmtrKovalenko/fff) ![GitHub Repo stars](https://img.shields.io/github/stars/dmtrKovalenko/fff?style=social)

FFF 是一个面向**人类与 AI 代理**的高性能文件搜索工具库，主打在长驻进程中进行多次搜索时，比 ripgrep/fzf 更快、更省上下文。

核心功能：
- **路径与内容搜索**：支持文件名/路径模糊搜索与全文 grep（plain/regex/fuzzy）。
- **抗拼写错误**：模糊匹配可容忍错别字、字符缺失或顺序偏差。
- **Frecency 排序**：结合“最近 + 高频”访问习惯对结果排序，常用文件优先。
- **智能查询能力**：支持 smart-case、无结果自动回退 fuzzy、多模式切换、多关键词 OR、分页游标。
- **约束过滤**：支持 git 状态、glob、包含/排除规则等查询语法。
- **Git 感知**：返回 modified/staged/untracked 等状态，便于优先处理正在改动文件。
- **定义识别**：可标记代码定义行（如 fn/class/struct/def 等）。
- **后台监听与增量索引**：持续更新索引，避免重复全量扫描。
- **轻量内存内容索引**：以常驻内存换取毫秒级重复查询性能。

生态与接入形式：
- **MCP Server**：可被 Claude Code、Codex、Cursor、Cline 等 MCP 客户端调用。
- **Pi 扩展**：替换或增强 Pi 的 grep/find/multi_grep 与 @ 补全。
- **Neovim 插件（fff.nvim）**：提供交互式文件/内容搜索、命令与可编程 API。
- **Node/Bun SDK**：`@ff-labs/fff-node`，返回类型化结果，便于构建代理工具/IDE 集成。
- **Rust crate**：`fff-search`，最低开销原生接入。
- **C 库 ABI**：`libfff_c`，可绑定 C/C++、Go、Python、Zig 等语言。

总体定位：
- 适合 **AI 代理、编辑器插件、IDE、长时间运行工具** 的高频搜索场景；
- 若只做一次性终端 grep，`rg` 仍更合适。