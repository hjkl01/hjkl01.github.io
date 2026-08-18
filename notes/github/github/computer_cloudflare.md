### [computer](https://github.com/cloudflare/computer) ![GitHub Repo stars](https://img.shields.io/github/stars/cloudflare/computer?style=social)

Cloudflare Computer 是一个运行在 Durable Object 内的虚拟文件系统项目，以 SQLite 存储权威状态，并提供三种执行后端：

1. **Container 后端**：通过 FUSE 挂载将 SQLite 状态投影到沙箱容器中，支持完整的 Linux 用户态、二进制文件和网络访问。
2. **Isolate Shell 后端**：在 Dynamic Worker 中运行 just-bash，通过 Workers RPC 直接访问 Workspace。
3. **Isolate JavaScript 后端**：在 Dynamic Worker 中运行 ECMAScript 模块，提供持久化相对导入、配置的库和文件系统 API。

项目当前处于预览阶段，适用于实验和原型开发，不适合生产环境。