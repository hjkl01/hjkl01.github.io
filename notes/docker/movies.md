# movies

## [bitplay](https://github.com/aculix/bitplay)

```yaml
services:
  bitplay:
    image: ghcr.io/aculix/bitplay:main
    container_name: bitplay
    ports:
      - 3347:3347 # Expose the web UI port
    volumes:
      # Mount the config directory for persistent settings (Optional)
      - ./data/bitplay_config:/app/config
    restart: unless-stopped
```

## aria2

```yaml
version: "3.8"

services:
  Aria2-Pro:
    container_name: aria2-pro
    image: p3terx/aria2-pro
    environment:
      - PUID=65534
      - PGID=65534
      - UMASK_SET=022
      - RPC_SECRET=updateme!!!
      - RPC_PORT=6800
      - LISTEN_PORT=6888
      - DISK_CACHE=64M
      - IPV6_MODE=true
      - UPDATE_TRACKERS=true
      - CUSTOM_TRACKER_URL=
      - TZ=Asia/Shanghai
    volumes:
      - ${PWD}/data/aria2-config:/config
      - ${PWD}/data/downloads:/downloads
    network_mode: host
    # network_mode: bridge
    # ports:
    #   - 6800:6800
    #   - 6888:6888
    #   - 6888:6888/udp
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-size: 1m

  AriaNg:
    container_name: ariang
    image: p3terx/ariang
    command: --port 6880 --ipv6
    # network_mode: host
    ports:
      - 127.0.0.1:6880:6880
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-size: 1m

  jellyfin:
    image: jellyfin/jellyfin:latest
    container_name: jellyfin_server
    volumes:
      - ./data/jellyfin/config:/config # Configuration directory
      - ./data/jellyfin/cache:/cache
      - ./data/downloads:/downloads
    ports:
      - 127.0.0.1:8096:8096
    restart: unless-stopped

  alist:
    container_name: alist
    image: xhofe/alist:latest
    restart: unless-stopped
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
    ports:
      - "127.0.0.1:5244:5244"
    volumes:
      - ./data/alist:/opt/alist/data
      - ./data/downloads:/mnt

networks:
  default:
    external:
      name: nginx-proxy
```

## caddy

```shell
movies.domain.com {
    reverse_proxy 127.0.0.1:8096
    encode zstd gzip
}

aria.domain.com {
    reverse_proxy 127.0.0.1:6800
    encode zstd gzip
}
```

## nginx

[链接](/notes/linux/nginx)

