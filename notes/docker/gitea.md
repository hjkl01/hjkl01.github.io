# gitea

## [gitea](https://docs.gitea.com/zh-cn/installation/install-with-docker#postgresql-%E6%95%B0%E6%8D%AE%E5%BA%93)

- 设置都有级别,如
  - Runner:
    - 实例级别：Runner将为实例中的所有存储库运行Job。
    - 组织级别：Runner将为组织中的所有存储库运行Job。
    - 存储库级别：Runner将为其所属的存储库运行Job。
    - 需要在 Gitea 中注册 Runner, 需要在 Gitea 的 Web UI 中获取 `GITEA_RUNNER_REGISTRATION_TOKEN`。
- 变量
  - 密钥: secrets
  - 变量: vars

## docker-compose.yml
```yaml
# ssh example: ssh://git@git.hjkl01.cn:33030/admin/project.git

version: "3"

networks:
  gitea-net:

services:
  gitea:
    image: docker.gitea.com/gitea:1.23.6
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
    restart: always
    volumes:
      - ./data/gitea:/data
    ports:
      - "3000:3000"   # Web UI
      - "22222:22"
    networks:
      - gitea-net

  act_runner:
    # image: gitea/act_runner:latest
    image: gitea/act_runner:nightly
    container_name: gitea_act_runner
    restart: always
    depends_on:
      - gitea
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data/runner:/data
    environment:
      - GITEA_INSTANCE_URL=http://gitea:3030
      - GITEA_RUNNER_REGISTRATION_TOKEN=启动后在 Gitea 中注册 Runner
      - GITEA_RUNNER_NAME=runner-docker
      - GITEA_RUNNER_LABELS=docker:docker
    networks:
      - gitea-net
```

## .gitea/workflows/pull_on_push.yml

```yaml
name: Deploy to Multiple Servers

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: docker
    container:
      image: alpine:3.20
    env:
      SERVER_USER: ${{ vars.USER }}
      SERVER_IP: ${{ vars.SERVER_IP }}
    steps:
      - name: Update apk mirrors (TUNA mirror)
        run: |
          sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories
          apk update

      - name: Install ssh client & git
        run: apk add --no-cache openssh-client git

      - name: Setup SSH key
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_ed25519
          chmod 600 ~/.ssh/id_ed25519

          touch ~/.ssh/known_hosts
          ssh-keyscan -p 22 $(echo ${{ vars.SERVER_IP }} | cut -d@ -f2) >> ~/.ssh/known_hosts 2>/dev/null || true

      - name: Debug variables
        run: |
          echo "Server user: $SERVER_USER"
          echo "Server IP: $SERVER_IP"

      - name: Deploy via SSH
        run: |
          ssh -i ~/.ssh/id_ed25519 $SERVER_USER@$SERVER_IP "cd /some_dir && git pull"
```
