### [cli](https://github.com/urfave/cli) ![GitHub Repo stars](https://img.shields.io/github/stars/urfave/cli?style=social)

urfave/cli 是一个用于用 Go 快速构建命令行工具的声明式库，主打简单、高性能、易用。其核心功能包括：支持命令与子命令（含别名和前缀匹配）、灵活的帮助系统、支持 bash/zsh/fish/powershell 的动态 Shell 自动补全、仅依赖 Go 标准库、支持多种输入参数类型（基础类型、切片、时间、时长等）、支持组合短参数（如 `-abc`）、可通过 urfave/cli-docs 生成 man 和 Markdown 文档，以及支持从环境变量、纯文本文件和结构化文件（通过 urfave/cli-altsrc）读取输入配置。