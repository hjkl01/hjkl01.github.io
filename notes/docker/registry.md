---
sidebar_position: 1
---

# docker registry


## registry.yml
```yaml
version: '3'
services:
  registry:
    image: registry:2
    container_name: registry
    restart: always
    ports:
      - "15005:5000"
    volumes:
      - ./data/registry/data:/var/lib/registry
      - ./data/registry/auth:/auth
      - ./data/registry/config.yml:/etc/docker/registry/config.yml:ro
    environment:
      REGISTRY_AUTH: htpasswd
      REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd
      REGISTRY_AUTH_HTPASSWD_REALM: Registry Realm
```

## 生成密码
```shell
sudo apt install apache2-utils -y

# 创建第一个用户（-c 表示创建新文件）
sudo htpasswd -Bc ./data/registry/auth/htpasswd admin
```

## config.yml
```yaml
version: 0.1
log:
  fields:
    service: registry
storage:
  cache:
    blobdescriptor: inmemory
  filesystem:
    rootdirectory: /var/lib/registry
http:
  addr: :5000
  headers:
    X-Content-Type-Options: [nosniff]
health:
  storagedriver:
    enabled: true
    interval: 10s
    threshold: 3
```

## 客户端
```shell
# /etc/docker/daemon.json
{
  "insecure-registries": ["你的-registry-ip:5000"]
}

sudo systemctl restart docker

docker login http://你的-registry-ip:5000

# 拉取一个测试镜像
docker pull hello-world

# 打标签
docker tag hello-world 你的-registry-ip:5000/hello-world:latest

# 推送
docker push 你的-registry-ip:5000/hello-world:latest

# 查看已推送的镜像
curl -u admin:mypassword -X GET http://你的-registry-ip:5000/v2/_catalog
```
