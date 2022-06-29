---
sidebar_position: 0
---

# docker

## install
```shell
wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker $USER

# 修改源 " lang:sh %}
# path: /etc/docker/daemon.json
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
```

## tools
- ctop
- lazydocker
```shell
docker run -it -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/.config/jesseduffield/lazydocker lazyteam/lazydocker
```
- portainer
```shell
version: '3.1'

services:

  portainer:
    image: portainer/portainer
    restart: always
    ports:
      - 8000:8000
      - 9000:9000
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data/portainer:/data
```
