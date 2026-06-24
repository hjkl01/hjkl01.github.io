### [physicsnemo](https://github.com/NVIDIA/physicsnemo) ![GitHub Repo stars](https://img.shields.io/github/stars/NVIDIA/physicsnemo?style=social)

NVIDIA PhysicsNeMo 是 NVIDIA 开源的深度学习框架，用于构建、训练、微调和推理物理 AI 模型，基于前沿的 SciML（科学机器学习）方法，适用于 AI4Science 和工程应用。

核心功能：

- **模型库**：提供多种优化的模型架构，包括 Neural Operators（如 FNO、DeepONet）、图神经网络（MeshGraphNet）、扩散模型、Transformer、Physics-Informed Neural Networks 等

- **训练框架**：可扩展的 GPU 优化训练库，支持从单 GPU 到多节点 GPU 集群的分布式训练，内置优化工具、高效数据管道和符号 PDE 计算

- **PyTorch 集成**：基于 PyTorch 构建，提供熟悉的 Python 接口，可与现有 PyTorch 工作流无缝结合

- **定制扩展**：支持定义新的物理模型、几何和约束条件，提供 ONNX 部署支持、检查点和日志工具

主要组件：models（模型）、datapipes（数据管道）、distributed（分布式计算）、curator（数据整理）、sym（符号 PDE）。领域专用包包括 PhysicsNeMo CFD（计算流体力学）和 Earth-2 Studio（气候预测）。