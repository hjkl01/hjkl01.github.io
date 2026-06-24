### [mlx](https://github.com/ml-explore/mlx) ![GitHub Repo stars](https://img.shields.io/github/stars/ml-explore/mlx?style=social)

MLX 是苹果机器学习研究团队开发的Apple芯片机器学习阵列框架。

核心特点：
- Python API 兼容NumPy，C++/C/Swift API 齐全
- 高层API（mlx.nn、mlx.optimizers）参考PyTorch设计
- 支持自动微分、自动向量化、计算图优化
- 惰性计算，数组按需实例化
- 动态计算图，形状变化不触发重编译
- 支持CPU和GPU多设备运行
- 统一内存模型，数组驻留共享内存，跨设备操作无需数据传输

已实现示例：Transformer语言模型训练、LLaMA大模型文本生成与LoRA微调、Stable Diffusion图像生成、Whisper语音识别。