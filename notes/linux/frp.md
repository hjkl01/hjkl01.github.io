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
    image: gists/frp
    restart: unless-stopped
    ports:
      - "7000:7000"
      - "35000:35000"
    volumes:
      - ./data/frp/frps.toml:/etc/frp/frps.toml
    command: frps -c /etc/frps/frps.toml

  frpc:
    image: gists/frp
    restart: unless-stopped
    volumes:
      - ./data/frp/frpc.toml:/etc/frp/frpc.toml
    command: frpc -c /etc/frp/frpc.toml
```

### frps.toml
```toml
bindAddr = "0.0.0.0"
bindPort = 35000

webServer.addr = "127.0.0.1"
webServer.port = 7000
webServer.user = "username"
webServer.password = "password"

auth.token = "token..."
```


### frps.toml
```toml
serverAddr = "frps_server_address"
serverPort = 35000
auth.token = "token..."

[[proxies]]
name = "some-device-ssh"
type = "tcp"
localIP = "127.0.0.1"
localPort = 22
remotePort = 22222
```
