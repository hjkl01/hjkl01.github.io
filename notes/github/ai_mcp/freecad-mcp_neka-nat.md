### [freecad-mcp](https://github.com/neka-nat/freecad-mcp) ![GitHub Repo stars](https://img.shields.io/github/stars/neka-nat/freecad-mcp?style=social)

这是一个允许通过 Claude Desktop 控制 FreeCAD 的 MCP 工具集。核心功能包括：

- 文档与对象管理：新建、创建、编辑、删除 FreeCAD 文档和对象
- 代码执行：在 FreeCAD 中运行任意 Python 代码
- 零件库操作：从 FreeCAD 零件库插入部件并查看部件列表
- 视图截图：获取当前视图的屏幕截图，支持自定义视角（等轴测、正面、顶面等）
- 有限元分析：运行 CalculiX 求解器进行 FEM 分析，返回应力、位移等结果
- 远程连接：支持绑定局域网 IP，允许从其他机器远程控制 FreeCAD
- 自动启动：可配置 FreeCAD 启动时自动运行 RPC 服务器

安装方式：将插件放入 FreeCAD 的 Mod 目录，再在 Claude Desktop 配置文件中添加 MCP Server 即可。