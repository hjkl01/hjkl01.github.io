### [TRELLIS.2](https://github.com/microsoft/TRELLIS.2) ![GitHub Repo stars](https://img.shields.io/github/stars/microsoft/TRELLIS.2?style=social)

**TRELLIS.2** 是一款 4B 参数的大型 3D 生成模型，实现高保真度的**图像到 3D**生成。

核心功能：
- **O-Voxel 稀疏体素表示**：无需等值面转换，原生支持开放表面、非流形几何和内部封闭结构等任意拓扑
- **PBR 材质建模**：生成包含颜色、粗糙度、金属度和透明度的完整物理渲染材质
- **高效生成**：在 H100 GPU 上，512³ 分辨率约 3 秒，1024³ 约 17 秒，1536³ 约 60 秒
- **快速处理**：CPU 10 秒完成网格转 O-Voxel，CUDA 100ms 完成反向转换
- **全流程支持**：提供预训练权重、推理代码及完整训练代码，支持从零训练或微调
