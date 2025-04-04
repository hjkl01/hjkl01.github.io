# gitea

## [gitea](https://docs.gitea.com/zh-cn/installation/install-with-docker#postgresql-%E6%95%B0%E6%8D%AE%E5%BA%93)

```yaml
# web管理界面里 默认端口3000和22不要改
# ssh example: ssh://git@git.hjkl01.cn:33030/admin/project.git

version: "3"

networks:
  gitea:
    external: false

services:
  server:
    image: docker.gitea.com/gitea:1.23.6
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
      - GITEA__database__DB_TYPE=postgres
      - GITEA__database__HOST=db:5432
      - GITEA__database__NAME=gitea
      - GITEA__database__USER=gitea
      - GITEA__database__PASSWD=gitea
    restart: always
    networks:
      - gitea
    volumes:
      - ./data/gitea/data:/data
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "3030:3000"
      - "22222:22"
    depends_on:
      - db

  db:
    image: docker.io/library/postgres:14
    restart: always
    environment:
      - POSTGRES_USER=gitea
      - POSTGRES_PASSWORD=gitea
      - POSTGRES_DB=gitea
    networks:
      - gitea
    volumes:
      - ./data/gitea/postgres:/var/lib/postgresql/data
```
