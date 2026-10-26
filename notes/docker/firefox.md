# firefox

```yaml

services:
  firefox:
    image: lscr.io/linuxserver/firefox:latest
    container_name: remote-firefox
    restart: unless-stopped

    environment:
      PUID: "1000"
      PGID: "1000"
      TZ: Asia/Shanghai

    volumes:
      - ./data/firefox:/config

    ports:
      # 仅允许本机及 FRP 客户端通过本机访问
      - "3000:3000"

    shm_size: "1gb"
```
