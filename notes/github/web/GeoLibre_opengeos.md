### [GeoLibre](https://github.com/opengeos/GeoLibre) ![GitHub Repo stars](https://img.shields.io/github/stars/opengeos/GeoLibre?style=social)

GeoLibre 是一款免费开源的轻量级云原生 GIS 平台，支持在 Web 浏览器、桌面端（Windows/macOS/Linux）、移动端（Android）及 Jupyter 笔记本中运行，所有数据处理均在本地完成，保障用户数据隐私安全。

核心功能包括：

1. **1,000+ 地理处理工具**：通过 WebAssembly 在浏览器端本地运行，无需安装服务器或 Python，涵盖矢量分析、栅格分析、遥感、水文、地形、LiDAR 点云处理、格式转换、网络分析和投影转换等。

2. **跨平台可视化**：支持 3D Tiles 渲染、城市建筑 3D 可视化及时间序列动画。

3. **行星地图支持**：提供地球及月球、火星、木星卫星等多颗天体的基底地图，适配对应天体的椭球参数。

4. **SQL 工作空间**：支持空间 SQL 查询与分析。

5. **插件系统与数据集成**：支持插件扩展及云原生数据格式（GeoParquet、PTiles、COG）转换。

技术栈基于 Tauri v2、React、TypeScript、MapLibre GL JS、DuckDB-WASM Spatial 和 deck.gl 构建。