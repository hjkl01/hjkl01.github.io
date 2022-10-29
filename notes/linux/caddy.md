---
sidebar_position: 1
---

# caddy

```shell 
# 反向代理
news.hjkl01.cn {
    reverse_proxy 127.0.0.1:8000

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
}


blog.hjkl01.cn {
    root * /data/blog
    templates
    file_server browse
    try_files {path} {path}.html

    log {
        output file /var/log/caddy/access.log {
            roll_size 1gb
            roll_keep 5
            roll_keep_for 720h
        }
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
