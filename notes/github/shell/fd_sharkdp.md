### [fd](https://github.com/sharkdp/fd) ![GitHub Repo stars](https://img.shields.io/github/stars/sharkdp/fd?style=social)

fd 是一个快速、简洁且用户友好的命令行文件查找工具，旨在替代传统的 find 命令。其核心功能包括：

1. **高效搜索**：利用并行目录遍历实现极速搜索，默认使用正则表达式，也支持通配符匹配。
2. **智能过滤**：默认忽略隐藏文件和 `.gitignore` 中的模式，同时提供选项以自定义大小写敏感、路径匹配及文件类型过滤（如扩展名、所有者、修改时间等）。
3. **命令执行**：支持对搜索结果并行或批量执行外部命令（如解压、格式化、删除等），便于文件处理流水线集成。
4. **跨平台兼容**：支持 Linux、macOS、Windows 等多种操作系统，并提供丰富的安装方式及 shell 补全功能。