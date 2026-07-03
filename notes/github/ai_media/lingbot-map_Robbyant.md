### [lingbot-map](https://github.com/Robbyant/lingbot-map) ![GitHub Repo stars](https://img.shields.io/github/stars/Robbyant/lingbot-map?style=social)

LingBot-Map 是一个由 Robbyant Team 开发的流式 3D 重建前馈 3D 基础模型。其核心功能与特点如下：

1.  **几何上下文 Transformer**：在统一的流式框架内整合了坐标定位、密集几何线索和长距离漂移校正（通过锚点上下文、姿态参考窗口和轨迹记忆实现）。
2.  **高效流式推理**：采用前馈架构结合分页 KV 缓存注意力机制，支持在超过 10,000 帧的长序列中稳定运行，在 518×378 分辨率下推理速度约为 20 FPS。
3.  **先进重建性能**：在多种基准测试中，其表现优于现有的流式和迭代优化方法。
4.  **灵活的应用场景**：提供交互式可视化演示（demo.py）和离线渲染管道（batch_demo.py），支持室内/室外长视频、天空掩膜处理、关键帧间隔优化及窗口化推理，适用于大规模场景重建。