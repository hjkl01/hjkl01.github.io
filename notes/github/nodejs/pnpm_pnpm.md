### [pnpm](https://github.com/pnpm/pnpm) ![GitHub Repo stars](https://img.shields.io/github/stars/pnpm/pnpm?style=social)

pnpm 是一个快速、磁盘空间高效的 Node.js 包管理器。其核心功能包括：

- **高速安装**：比 npm 和 Yarn 快最多 2 倍
- **节省磁盘空间**：采用内容可寻址存储机制，多个项目共享同一依赖时仅存储一份文件副本，通过硬链接或写时复制链接，避免重复安装
- **严格依赖管理**：包只能访问 package.json 中显式声明的依赖
- **确定性构建**：提供 pnpm-lock.yaml 锁文件确保依赖版本一致
- **Monorepo 支持**：原生支持多包仓库管理
- **Node.js 版本管理**：可作为 Node.js 运行时版本管理器使用
- **跨平台**：支持 Windows、Linux 和 macOS
- **生产验证**：自 2016 年起在各类团队的生产环境中稳定使用