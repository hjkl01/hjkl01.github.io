# caddy

```yaml
version: "3.7"

services:
  caddy:
    image: caddy:alpine
    restart: unless-stopped
    # cap_add:
    #   - NET_ADMIN
    network_mode: "host"
    # ports:
    #   - "80:80"
    #   - "443:443"
    #   - "443:443/udp"
    volumes:
      - /etc/caddy/conf.d/:/etc/caddy/conf.d/
      - ./data/caddy/Caddyfile:/etc/caddy/Caddyfile
      - ./data/dev/dist/:/www/
```


## Caddyfile
```
import /etc/caddy/conf.d/*
```
