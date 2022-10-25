---
sidebar_position: 2
---

# Navidrome

```yaml 
version: "3"
services:
  navidrome:
    container_name: navidrome
    image: deluan/navidrome:latest
    user: 0:0 #0:0代表用root用户运行
    ports:
      - "127.0.0.1:4533:4533"
    restart: unless-stopped
    environment:
      # Optional: put your config options customization here. Examples:
      ND_SCANSCHEDULE: 1h
      ND_LOGLEVEL: info
      ND_SESSIONTIMEOUT: 24h
      ND_BASEURL: ""
      ND_ENABLETRANSCODINGCONFIG: "true"
      ND_TRANSCODINGCACHESIZE: "4000M"
      ND_IMAGECACHESIZE: "1000M"
    volumes:
      - "./data/navidrome/data:/data"
      - "./data/mstream/music:/music"
```
