### [speech-to-speech](https://github.com/huggingface/speech-to-speech) ![GitHub Repo stars](https://img.shields.io/github/stars/huggingface/speech-to-speech?style=social)

Speech To Speech 是一个低延迟、全模块化的开源语音智能体管道，遵循 VAD（语音活动检测）-> STT（语音转文字）-> LLM（大语言模型）-> TTS（文字转语音）的处理流程。它通过兼容 OpenAI Realtime 的 WebSocket API 提供服务，支持本地部署或连接远程 API，且所有组件均可替换，旨在构建高性能、可定制的语音交互应用。