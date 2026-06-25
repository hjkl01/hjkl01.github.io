# sglang


```yaml
services:
  sglang:
    image: lmsysorg/sglang:latest
    container_name: sglang-qwen35-9b

    restart: unless-stopped

    ports:
      - "51810:30000"

    ipc: host

    environment:
      HF_HOME: /root/.cache/huggingface
      CUDA_VISIBLE_DEVICES: "7"

    volumes:
      - ~/.cache/huggingface:/root/.cache/huggingface

    gpus: all

    command: >
      python3 -m sglang.launch_server
      --model-path /root/.cache/huggingface/hub/models--Qwen--Qwen3.5-9B/snapshots/c202236235762e1c871ad0ccb60c8ee5ba337b9a
      --host 0.0.0.0
      --port 30000
      --trust-remote-code
      --context-length 8192
      --mem-fraction-static 0.95
      --max-running-requests 1
      --skip-server-warmup
      --disable-cuda-graph
      --enable-metrics
      --served-model-name Qwen3.5-9B
```
