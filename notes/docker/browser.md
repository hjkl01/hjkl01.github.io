# browser


### firefox
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


### chrome
```yaml
services:
  chrome:
    image: lscr.io/linuxserver/chrome:latest
    container_name: chrome
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - CHROME_CLI=https://www.linuxserver.io/ #optional
    volumes:
      - ./data/chrome/config:/config
    ports:
      - 3000:3000
      - 3001:3001
    shm_size: "1gb"
    restart: unless-stopped
```
