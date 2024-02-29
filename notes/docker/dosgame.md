# dosgame

```yaml
version: "3.9"
services:
  dosgame-web-docker:
    image: "oldiy/dosgame-web-docker:latest"
    container_name: dosgame
    ports:
      - "8262:262"

networks:
  default:
    external:
      name: nginx-proxy
```
