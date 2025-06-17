# ddns

```yaml
version: "3.1"
services:
  ddns_go:
    image: jeessy/ddns-go
    restart: unless-stopped
    network_mode: "host"
    volumes:
      - ./data/ddns:/root
  # port: 9876
```

### 创建/查看[cloudflare TOKEN](https://dash.cloudflare.com/profile/api-tokens)
