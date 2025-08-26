---
sidebar_position: 0
---

# docker

## install

### on Linux
```shell
wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker $USER

# 修改源 /etc/docker/daemon.json
sudo tee /etc/docker/daemon.json <<EOF
{
    "registry-mirrors": ["https://docker.hjkl01.cn"]
}
EOF

# 配置完后需要重启 Docker 服务
sudo systemctl restart docker

```

### on Mac
https://github.com/abiosoft/colima
```shell
# volumes
colima start --vm-type=vz

colima start --kubernetes=false

vi ~/.colima/default/colima.yaml

# docker: {}
docker:
  registry-mirrors:
    - https://docker.hjkl01.cn

colima restart

# colima delete
# colima start
```


## use mirror example
```
# docker pull nginx:latest
docker pull docker.hjkl01.cn/library/nginx:latest  # 拉取 Docker 官方镜像

# docker pull quay.io/coreos/etcd:latest
docker pull quay.hjkl01.cn/coreos/etcd:latest  # 拉取 Quay 镜像

# docker pull gcr.io/google-containers/busybox:latest
docker pull gcr.hjkl01.cn/google-containers/busybox:latest  # 拉取 GCR 镜像

# docker pull k8s.gcr.io/pause:latest
docker pull k8s-gcr.hjkl01.cn/pause:latest  # 拉取 k8s.gcr.io 镜像

# docker pull registry.k8s.io/pause:latest
docker pull k8s.hjkl01.cn/pause:latest  # 拉取 registry.k8s.io 镜像

# docker pull ghcr.io/github/super-linter:latest
docker pull ghcr.hjkl01.cn/github/super-linter:latest  # 拉取 GitHub 容器镜像

# docker pull docker.cloudsmith.io/public/repo/image:latest
docker pull cloudsmith.hjkl01.cn/public/repo/image:latest  # 拉取 Cloudsmith 镜像
```

## 常用命令

```shell
# export
docker save -o <path for generated tar file> <image name>
example: docker save -o ./centos.tar centos:16

# load
docker load -i <path to image tar file>

# run image
docker run -it --rm ubuntu bash

# exec container
docker exec -it openwrt zsh
```

## push to aliyun

```shell
# Dockerfile

FROM python:3.11-slim

RUN sed -i.bak -e 's|http://deb.debian.org/debian|http://mirrors.aliyun.com/debian|g' \
  -e 's|http://security.debian.org/debian-security|http://mirrors.aliyun.com/debian-security|g' \
  /etc/apt/sources.list.d/debian.sources

RUN apt-get update && apt-get install -y --no-install-recommends \
  openssh-client \
  git nodejs binutils build-essential \
  poppler-utils \
  libreoffice \
  libreoffice-l10n-zh-cn fonts-wqy-zenhei fonts-wqy-microhei fonts-arphic-ukai fonts-arphic-uming \
  && rm -rf /var/lib/apt/lists/*

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY backend/requirements.txt .

RUN pip install --no-cache-dir uv -i https://mirrors.aliyun.com/pypi/simple/
RUN uv pip install --no-cache-dir -r requirements.txt --index-url https://mirrors.aliyun.com/pypi/simple/ --system

RUN pip install pyinstaller -i https://mirrors.aliyun.com/pypi/simple/

# 暴露端口
EXPOSE 19000

# 启动应用
CMD ["tail","-f", "/dev/null"]

```

```shell
# login
docker login --username=762293490@qq.com registry.cn-hangzhou.aliyuncs.com
# password: your aliyun password

docker build -t build . -f ./Dockerfile.actions

docker tag build:latest registry.cn-hangzhou.aliyuncs.com/hjkl01/hjkl01:amd_250826

docker push registry.cn-hangzhou.aliyuncs.com/hjkl01/hjkl01:amd_250826
```


## tools

- [linuxserver](https://docs.linuxserver.io/images/docker-chromium/)
- [github docker-library](https://github.com/docker-library)
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

networks:
  default:
    external:
      name: nginx-proxy

# docker network create nginx-proxy
```

- dozzle

```shell
version: "3"
services:
  dozzle:
    container_name: dozzle
    image: amir20/dozzle:latest
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    ports:
      - 8888:8080
```

## [减少镜像体积](https://icloudnative.io/posts/docker-images-part1-reducing-image-size/)

```go
// hello.go
package main

import "fmt"

func main () {
  fmt.Println("Hello, world!")
}
```

```shell
# Dockerfile
FROM golang
COPY hello.go .
RUN go build hello.go
# FROM scratch
# FROM alpine
FROM busybox:glibc
COPY --from=0 /go/hello .
CMD ["./hello"]
```
