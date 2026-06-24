### [pytorch](https://github.com/pytorch/pytorch) ![GitHub Repo stars](https://img.shields.io/github/stars/pytorch/pytorch?style=social)

PyTorch 是一个面向 Python 的深度学习与张量计算框架，核心功能包括：

- 提供类似 NumPy 的张量计算能力，并支持强大的 GPU 加速，可在 CPU 或 GPU 上高效运行科学计算任务。
- 基于动态计算图和自动求导系统构建深度神经网络，适合灵活、快速地进行深度学习研究与模型开发。
- 包含完整组件体系：  
  - `torch`：张量运算库  
  - `torch.autograd`：自动微分  
  - `torch.jit`：模型编译、序列化与优化  
  - `torch.nn`：神经网络模块  
  - `torch.multiprocessing`：支持张量共享的多进程能力  
  - `torch.utils`：数据加载与常用工具
- 采用 Python 优先设计，能够自然地与 NumPy、SciPy、Cython 等生态结合，方便扩展自定义层和功能。
- 强调命令式、直观的开发体验，代码执行逻辑清晰，调试和错误定位更直接。
- 具备高性能和低开销，集成 MKL、cuDNN、NCCL 等加速库，并优化了内存使用效率。
- 支持通过 Python 或 C/C++ 方便地扩展新模块和算子。
- 支持多种安装与构建方式，包括 pip/Conda、源码编译、Docker，并支持 CUDA、AMD ROCm、Intel GPU 等硬件平台。