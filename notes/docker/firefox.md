# firefox


### Dockerfile.firefox

```shell
FROM jlesage/firefox

RUN set -eux; \
    sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories && \
    apk add --no-cache font-noto-cjk
```

### build command

```shell
docker build -t firefox . -f Dockerfile.firefox
```

### docker-compose.yml

```yaml
version: "3"
services:
  firefox:
    # image: jlesage/firefox
    image: firefox
    container_name: firefox
    ports:
      - "5800:5800"
      - "5900:5900"
    environment:
      - VNC_PASSWORD=xxx
    volumes:
      - ./data/firefox/config:/config:rw
      - /dev/shm:/dev/shm   # 避免内存太小导致崩溃
    restart: unless-stopped
```
