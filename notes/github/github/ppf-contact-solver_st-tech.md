### [ppf-contact-solver](https://github.com/st-tech/ppf-contact-solver) ![GitHub Repo stars](https://img.shields.io/github/stars/st-tech/ppf-contact-solver?style=social)

ZOZO’s Contact Solver 是一个面向物理仿真的高精度接触求解器，支持布料（shell）、实体（solid）和细杆（rod）等对象的碰撞与形变模拟。项目核心特点是：基于 FEM 的可变形求解、GPU 并行计算、严格防穿透接触处理、应变上限控制（避免“橡皮感”拉伸），并可扩展到超大规模场景（已展示超 1.8 亿接触）。

项目提供两种主要使用方式：  
1) Blender 插件：可在 Blender 中搭建场景并远程调用求解器运行，支持 macOS 客户端；  
2) JupyterLab + Python API：通过浏览器脚本化建模、仿真、预览、导出与日志分析。  

部署方面支持 Windows 原生免安装可执行包与 Docker（Linux/Windows），也支持云端部署（如 AWS、GCP、vast.ai、Scaleway），便于按需租用 GPU。项目包含完整文档、示例集、自动化 CI 压力测试（含多次重复运行）与日志/性能指标输出。许可证为 Apache 2.0，可用于商业和闭源场景。