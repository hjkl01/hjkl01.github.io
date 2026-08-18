### [weathernext](https://github.com/google-deepmind/weathernext) ![GitHub Repo stars](https://img.shields.io/github/stars/google-deepmind/weathernext?style=social)

# WeatherNext 项目功能总结

WeatherNext 是由 Google DeepMind 和 Google Research 开发的全球中程大气与飓风预报模型开源项目。

**核心功能：**
- 提供 WeatherNext 2（WN2）及 WeatherNext Cyclones 等预训练气象预报模型的代码，支持在 TPU/GPU 上运行
- 可实现全球天气的确定性预报，精度分辨率达 0.25°（约30km）
- 支持直接从 HRES 操作初始条件或 ERA5 再分析数据初始化，进行自回归滚长预测
- 内置飓风追踪器，可直接从模型输出生成热带气旋路径数据
- 提供 Colab Notebook 交互式教程，便于快速上手和可视化预测结果（温度、风速、位势高度等）
- 支持训练损失计算与梯度更新，可用于模型微调

**附加模型：**
- 包含早期代际模型 GraphCast（确定性预报）和 GenCast（扩散系综预报）的代码
- 提供轻量级 Mini 版本，适配低内存环境

**数据获取：**
- 提供通过 Google Cloud、WeatherLab、OpenMeteo 等平台直接获取每日预报数据的服务

该项目代码基于 Apache 2.0 和 CC BY 4.0 协议开源，适用于研究和实验目的。