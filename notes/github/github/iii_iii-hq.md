### [iii](https://github.com/iii-hq/iii) ![GitHub Repo stars](https://img.shields.io/github/stars/iii-hq/iii?style=social)

iii 是一个用于实时组合、扩展与观测后端服务的统一运行时平台。它用三大原语 **Worker（工作进程）**、**Function（函数）**、**Trigger（触发器）** 把队列、HTTP、定时任务、状态、流、可观测性、Agent、沙箱等能力整合到同一系统中，实现“零集成式”扩展。

核心能力包括：通过 `iii worker add` 快速为项目添加新能力；Worker 加入后自动进入全局目录并可被其他 Worker 立即发现和调用；Agent 也可用同一接口动态添加 Worker、发现函数并追踪执行过程；系统统一处理路由、序列化与投递，并提供完整可追踪性。

项目提供 Node.js、Python、Rust 三种 SDK，支持快速初始化项目与运行引擎；配套 `iii-console` 用于查看 workers、functions、triggers、queues、traces、logs 和实时状态；仓库包含 engine、sdk、console、skills、docs、website 等模块，形成完整的开发与运维生态。