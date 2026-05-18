# wg-easy

## [github](https://github.com/wg-easy/wg-easy/)

```yaml
services:
  wg-easy:
    image: ghcr.io/wg-easy/wg-easy:15
    container_name: wg-easy
    volumes:
      - ./data/wireguard/etc_wireguard:/etc/wireguard
      - ./data/wireguard/lib/modules:/lib/modules:ro
    ports:
      - "51820:51820/udp"
      - "51821:51821/tcp"
    restart: unless-stopped
    environment:
      # Web UI 管理端口（可选）
      - PORT=51821
      - HOST=0.0.0.0
      # HTTP 访问（无反向代理时需要）
      - INSECURE=true

      # v15 首次初始化配置（仅在首次启动生效）
      - INIT_ENABLED=true
      - INIT_USERNAME=admin
      - INIT_PASSWORD=0bf2a1bf53495bf17a746865c6a17f4d1a166bb9
      - INIT_HOST=wg.zkzdht.com
      - INIT_PORT=51820
      - INIT_DNS=114.114.114.114

      # 禁用 IPv6（宿主机不支持 ip6_tables 模块）
      - DISABLE_IPV6=true

      # 时区
      - TZ=Asia/Shanghai
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    sysctls:
      - net.ipv4.ip_forward=1
      - net.ipv4.conf.all.src_valid_mark=1
```
