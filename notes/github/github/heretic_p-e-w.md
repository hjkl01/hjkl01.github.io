### [heretic](https://github.com/p-e-w/heretic) ![GitHub Repo stars](https://img.shields.io/github/stars/p-e-w/heretic?style=social)

Heretic 是一个针对 Transformer 语言模型的**全自动去审查（去安全对齐）工具**，无需昂贵后训练，也不要求用户理解模型内部原理。它基于方向消融（abliteration）与 Optuna 的 TPE 参数优化，自动在“减少拒答率”和“保持原模型能力（降低 KL 偏移）”之间做联合优化，从而在尽量保留智能的前提下去除审查行为。

项目核心功能包括：  
- 一键命令行去审查模型（Python 3.10+、PyTorch 2.2+）。  
- 自动硬件基准测试并选择批大小，支持 bitsandbytes 4bit 量化以降低显存占用。  
- 完成后可选择保存、上传 Hugging Face、对话测试和标准基准评测。  
- 内置模型评估能力（如拒答率、KL 等指标）。  
- 支持多数稠密模型、许多多模态模型、多种 MoE 架构及部分混合架构（如 Qwen3.5）；暂不原生支持纯状态空间等部分研究架构。

其方法实现要点：  
- 对注意力 out-projection 与 MLP down-projection 做参数化方向消融；  
- 通过“有害/无害提示词”首 token 残差的均值差，逐层计算拒答方向；  
- 使用可优化的分层权重核与可插值的浮点方向索引，并对不同组件分别优化参数，以提升“去拒答/保能力”的平衡。

此外提供研究功能（安装 `heretic-llm[research]`）：  
- 生成各层残差向量 2D 投影图与动态图（PaCMAP）；  
- 输出残差几何统计表（相似度、范数、聚类分离度等），用于可解释性分析。  

整体定位：一个可自动化、大规模复现、面向实用与研究两用的 LLM 去审查工具。