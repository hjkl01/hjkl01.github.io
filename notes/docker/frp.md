# frp

## downloads

> https://github.com/fatedier/frp/releases

## config
> https://github.com/fatedier/frp/blob/dev/conf/frps_full_example.toml
> https://github.com/fatedier/frp/blob/dev/conf/frpc_full_example.toml


## docker
```yaml
services:
  frps:
    image: snowdreamtech/frps:0.68.1
    container_name: frps
    restart: always
    network_mode: host
    volumes:
      - ./frps.toml:/etc/frp/frps.toml

  frpc:
    image: snowdreamtech/frpc:0.68.1
    container_name: frpc
    restart: always
    network_mode: host
    volumes:
      - ./frpc.toml:/etc/frp/frpc.toml
```

### frps.toml

```toml
bindPort = 7000

# 身份认证
auth.method = "token"
auth.token = "CHANGE_TO_A_LONG_RANDOM_PASSWORD"

# Dashboard
webServer.addr = "0.0.0.0"
webServer.port = 7500
webServer.user = "admin"
webServer.password = "CHANGE_ME_STRONG_PASSWORD"

# 日志
log.to = "/var/log/frps.log"
log.level = "info"
log.maxDays = 7

# 最大连接数
transport.maxPoolCount = 50

# 心跳
transport.heartbeatTimeout = 90

# 限制客户端
maxPortsPerClient = 20

# dashboard https（可选）
# webServer.tls.certFile = "/etc/frp/server.crt"
# webServer.tls.keyFile = "/etc/frp/server.key"

auth.token = "token..."
```


### frpc.toml
```toml
serverAddr = "YOUR_SERVER_IP"
serverPort = 7000

auth.method = "token"
auth.token = "CHANGE_TO_A_LONG_RANDOM_PASSWORD"

loginFailExit = true

# TLS
transport.tls.enable = true

# 日志
log.to = "./frpc.log"
log.level = "info"
log.maxDays = 3

# 管理后台
webServer.addr = "127.0.0.1"
webServer.port = 7400
webServer.user = "admin"
webServer.password = "CHANGE_ME"

# ssh
[[proxies]]
name = "ssh"

type = "tcp"
localIP = "127.0.0.1"
localPort = 22

remotePort = 6000

# web
[[proxies]]
name = "web"

type = "http"
localIP = "127.0.0.1"
localPort = 8080
remotePort = 6000
```
