### [OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio) ![GitHub Repo stars](https://img.shields.io/github/stars/HakanSeven12/OpenCADStudio?style=social)

OpenCAD Studio是一款基于Rust开发的开源CAD应用程序，支持2D绘图和3D建模，并提供Web版本。

核心功能：
- **文件支持**：原生读写DWG和DXF文件（R13-R2018），支持STL、STEP、OBJ、PDF导出及WBLOCK/XREF功能
- **2D绘图**：提供LINE、PLINE、CIRCLE、HATCH、OFFSET、TRIM、ARRAY等完整绘图与编辑命令
- **3D建模**：支持BOX、SPHERE、EXTRUDE、LOFT、SWEEP等实体建模操作
- **标注与注释**：全面尺寸标注、MTEXT文本、MLEADER引线、GD&T公差、TABLE表格
- **布局系统**：多标签图纸空间、视口投影、布局管理与打印输出
- **块与参照**：INSERT插入块、属性编辑、XREF外部参照、数据提取
- **捕捉与精度**：对象捕捉、跟踪、极轴追踪、动态输入、栅格捕捉
- **渲染**：基于WebGPU的GPU加速渲染，支持抗锯齿、宽多段线、图像纹理、复杂线型、实体消隐等
- **界面**：模块化功能区、命令行自动补全、图层管理、属性面板、主题切换