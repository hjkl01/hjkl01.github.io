# caddy

### test command

```shell
caddy file-server --root ./public --listen :3000
caddy reverse-proxy --from :8000 --to 127.0.0.1:9000
```

### docker-compose.yml

```shell
version: "3.7"

services:
  caddy:
    image: caddy:alpine
    restart: unless-stopped
    container_name: caddy
    network_mode: "host"
    volumes:
      - ./data/caddy/Caddyfile:/etc/caddy/Caddyfile
      - /etc/caddy/conf.d/:/etc/caddy/conf.d/
      # - ./data/caddy/cert:/data
      - ./data/caddy/dist/:/www/


# Caddyfile
import /etc/caddy/conf.d/*
```

### conf.d/some.conf
```shell
# 反向代理
news.hjkl01.cn {
    reverse_proxy 127.0.0.1:8000
    reverse_proxy api/* 127.0.0.1:8080

    encode zstd gzip

    header * {
        # cors
        Access-Control-Allow-Origin  *
        Access-Control-Allow-Methods "GET, POST, OPTIONS"
        header_upstream Host {host}
        header_upstream X-Real-IP {remote}
        header_upstream X-Forwarded-For {remote}
        header_upstream X-Forwarded-Proto {scheme}
    }
    # ssl
    # tls /etc/caddy/conf.d/example.com_nginx/example.com_bundle.pem /etc/caddy/conf.d/example.com_nginx/example.com.key

}

# 静态文件
blog.hjkl01.cn {
    root * /data/blog
    templates
    file_server browse
    try_files {path} /index.html
    # try_files {path} {path}.html

    log {
        output file /var/log/caddy/access.log {
            roll_size 1gb
            roll_keep 5
            roll_keep_for 720h
        }
    }
}

# 混合
hjkl01.cn {
    root * /data/build
    file_server browse

    handle /api/* {
      reverse_proxy localhost:8080
    }

    handle {
      try_files {path} {path}.html
      file_server
    }
}
```

### auth

```shell
caddy hash-password

basicauth /* {
        username output
}
```

### dns.providers.cloudflare
```shell
go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest
xcaddy build --with github.com/caddy-dns/cloudflare
sudo mv caddy /usr/local/bin/
```

#### Caddyfile [创建cf令牌](https://dash.cloudflare.com/profile/api-tokens)
```shell
(cloudflare) {
      tls {
        dns cloudflare token
      }
}
example.com:port {
      reverse_proxy http://localhost:8080
      import cloudflare
}
```

#### /etc/systemd/system/caddy.service
```shell
[Unit]
Description=Caddy
Documentation=caddy --help
After=network.target
StartLimitIntervalSec=30
StartLimitBurst=2

[Service]
ExecStart=/usr/local/bin/caddy run --config /etc/caddy/Caddyfile
Restart=always
RestartSec=1

[Install]
Alias=caddy.service
WantedBy=multi-user.target
```
