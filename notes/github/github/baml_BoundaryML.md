### [baml](https://github.com/BoundaryML/baml) ![GitHub Repo stars](https://img.shields.io/github/stars/BoundaryML/baml?style=social)

BAML（Basically A Made-up Language）是一款专为AI Agent设计的编程语言，语法类似TypeScript，但具有以下核心特性：

- 类似Rust的静态类型系统，编译速度快于Go，类型在运行时持久保留，无`any`类型和危险转换
- 错误类型化并进行静态分析
- 文件系统即模块/命名空间结构
- 支持绿色线程和无色并发（类似Go）
- 内置测试/评估框架和Agent专用标准库
- 工具原生设计，无垃圾输出
- 可独立运行或增量集成（支持从TypeScript、Python、Go、C#、Java等语言调用BAML函数）

该项目由Boundary公司在西雅图开发，提供`baml` CLI工具用于安装、初始化和IDE集成。