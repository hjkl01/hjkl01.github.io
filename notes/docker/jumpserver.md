# jumpserver

## [docs](https://docs.jumpserver.org/zh/v4/)
## [github](https://github.com/jumpserver/Dockerfile)


```shell
docker volume create jsdata &> /dev/null
docker volume create pgdata &> /dev/null
docker run -d --name jms_all --restart always \
     -e SECRET_KEY=PleaseChangeMe \
     -e BOOTSTRAP_TOKEN=PleaseChangeMe \
     -v jsdata:/opt/data \
     -v pgdata:/var/lib/postgresql \
     -v $PWD/conf.py:/opt/jumpserver/apps/jumpserver/conf.py \
     -p 8085:80 -p 2222:2222 jumpserver/jms_all

# conf.py 从容器里复制 修改domain
```

### 初始账号

```shell
默认账号: admin
默认密码: ChangeMe
```


```yaml
---
services:
  jumpserver:
    image: jumpserver/jms_all
    container_name: jumpserver
    environment:
      - SECRET_KEY=PleaseChangeMe
      - BOOTSTRAP_TOKEN=PleaseChangeMe
    volumes:
      - ./data/jumpserver/jsdata/:/opt/data
      - ./data/jumpserver/pgdata/:/var/lib/postgresql
      # - ./data/jumpserver/conf.py:/opt/jumpserver/apps/jumpserver/conf.py
    ports:
      - 80:80
      - 2222:2222
    restart: unless-stopped
```
