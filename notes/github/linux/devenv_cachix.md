### [devenv](https://github.com/cachix/devenv) ![GitHub Repo stars](https://img.shields.io/github/stars/cachix/devenv?style=social)

**devenv.sh** 是一个基于 Nix 的快速、声明式、可复现且可组合的开发者环境管理工具。

核心功能：

- **开发体验**：带实时构建进度的终端 UI、原生 Shell 热重载、亚 100ms 瞬时环境启动、LSP 代码补全、无需配置文件即可快速创建临时环境。
- **语言与包管理**：内置支持 50+ 编程语言（含编译器、LSP、格式化器等），提供 Nixpkgs 中 10 万+ 软件包，以及 PostgreSQL、Redis、MongoDB 等 40+ 服务的声明式启动。
- **进程与任务**：自研进程管理器（依赖排序、自动端口分配、健康检查、文件监听），支持 DAG 任务编排与缓存。
- **打包与部署**：无需 Docker 即可构建 OCI 容器，支持多仓库引用与 polyrepo 配置。
- **安全与集成**：声明式密钥管理（SecretSpec）、Git Hooks、内置测试框架、direnv 自动激活、MCP 服务器支持 AI 助手集成，以及 AI 自动生成环境配置。