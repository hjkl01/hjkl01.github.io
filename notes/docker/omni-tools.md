# ddns

## [address](https://github.com/iib0011/omni-tools)
```yaml
services:
  omni-tools:
    image: iib0011/omni-tools:latest
    container_name: omni-tools
    restart: unless-stopped
    ports:
      - "8080:80"
```
