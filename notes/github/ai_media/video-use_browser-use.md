### [video-use](https://github.com/browser-use/video-use) ![GitHub Repo stars](https://img.shields.io/github/stars/browser-use/video-use?style=social)

video-use 是一个开源项目，允许用户通过自然语言对话（结合 Claude Code 等 AI 代理）来编辑视频。其核心功能包括：

*   **智能剪辑**：自动去除填充词、废话及片段间的静默间隙。
*   **后期处理**：支持自动调色、添加 30ms 音频淡入淡出以消除爆音，以及自定义样式字幕烧录。
*   **动画叠加**：可并行生成并添加动画特效。
*   **自我评估**：在渲染输出的每个切点处进行自我检查，确保无视觉跳跃或音频问题后才展示结果。
*   **会话持久化**：通过 `project.md` 保存项目记忆，支持跨会话继续编辑。

该项目不依赖预设模板，适用于访谈、教程、旅行视频等多种内容类型，通过读取文本转录和按需生成的视觉摘要来指导编辑，而非直接分析视频帧。