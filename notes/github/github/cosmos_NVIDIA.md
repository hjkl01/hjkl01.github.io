### [cosmos](https://github.com/NVIDIA/cosmos) ![GitHub Repo stars](https://img.shields.io/github/stars/NVIDIA/cosmos?style=social)

NVIDIA Cosmos 是一个开放式世界模型平台，提供数据集和工具，用于构建物理 AI（Physical AI），支持机器人、自动驾驶、智能基础设施等应用。

**Cosmos 3** 是最新的全模态（omnimodal）世界模型系列，基于统一的混合 Transformer 架构（Mixture-of-Transformers），融合自回归变换器（推理）和扩散变换器（生成），支持语言、图像、视频、音频、动作序列的联合处理和生成。

**两大运行时接口：**
- **Reasoner（推理器）**：输入文本/视觉，输出文本，用于世界理解、视觉定位、物理推理、任务规划、动作预测。
- **Generator（生成器）**：输入文本/视觉/声音/动作，输出视频/音频/动作，用于世界生成、仿真、未来预测、合成数据生成、策略学习、机器人训练。

**模型系列：**
- Cosmos3-Nano（16B）：紧凑型全模态世界模型
- Cosmos3-Super（64B）：前沿级全模态世界模型
- Cosmos3-Super-Text2Image：文本到图像生成
- Cosmos3-Super-Image2Video：图像到视频生成
- Cosmos3-Nano-Policy-DROID：视觉-语言机器人策略

**支持功能：**
- 文本/图像/视频生成（最高 720p，30fps，300帧）
- 带声音的视频生成（48kHz 立体声 AAC）
- 动作策略、前向/逆动力学预测
- 支持多种机器人构型（单臂、双臂、人形、无人机、自动驾驶等）

**集成方式：**
Diffusers（研究）、vLLM-Omni（生成服务）、vLLM（推理服务）、NIM（生产级容器）。