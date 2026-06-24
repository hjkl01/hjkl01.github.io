### [Sana](https://github.com/NVlabs/Sana) ![GitHub Repo stars](https://img.shields.io/github/stars/NVlabs/Sana?style=social)

SANA 是一个面向高分辨率图像与视频生成的高效开源框架，提供完整的训练、推理与部署能力。项目包含多个子方向：SANA（最高支持 4K 文生图）、SANA-1.5（训练与推理算力扩展）、SANA-Sprint（一步/少步极速生成）、SANA-Video/LongSANA（高效长视频生成）、Sol-RL（扩散模型强化学习后训练）、SANA-WM（可控世界模型，支持 720p 1 分钟视频与 6-DoF 相机控制）。

核心特点是“高效率+高质量”：通过线性注意力、DC-AE 高压缩编码、Flow-DPM-Solver、sCM 蒸馏、块因果线性注意力等技术显著提升速度与显存效率，并支持 4bit/8bit 量化在低显存（\<8GB）设备运行。项目同时提供模型权重、训练/推理代码、模型库与文档，兼容 diffusers、ComfyUI、SGLang，并支持 ControlNet、LoRA/DreamBooth、FSDP 及 RL 后训练等完整生态。