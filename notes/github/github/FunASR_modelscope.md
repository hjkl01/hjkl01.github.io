### [FunASR](https://github.com/modelscope/FunASR) ![GitHub Repo stars](https://img.shields.io/github/stars/modelscope/FunASR?style=social)

FunASR 是一个面向工业场景的端到端语音识别工具包，主打高性能、多语言和一体化能力。它可通过一次 API 调用完成语音活动检测（VAD）、语音识别（ASR）、标点恢复、说话人分离，并支持时间戳输出。  
项目支持 50+ 语言，提供情感识别、音频事件识别、流式实时识别（WebSocket）和 OpenAI 兼容接口，便于本地私有化部署与 AI Agent 集成。  

其核心优势是速度快：基准中 SenseVoice-Small 可达约 170 倍实时（GPU）和 17 倍实时（CPU），整体显著快于 Whisper；并支持 vLLM 加速（部分模型可再提升 2–3 倍）。  
项目提供完整模型生态（如 Fun-ASR-Nano、SenseVoice、Paraformer、Qwen3-ASR、GLM-ASR、Whisper 等）以及 Python SDK、服务端 CLI、Docker 与示例文档，适合从快速试用到生产部署。