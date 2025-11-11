# samba nfs

## [samba](https://github.com/dockur/samba)

```yaml
services:
  samba:
    image: dockurr/samba
    container_name: samba
    environment:
      NAME: "Data"
      USER: "someuser"
      PASS: "secret"
      UID: "1000"
      GID: "1000"
    ports:
      - 445:445
    volumes:
      - /home/someuser:/storage
    restart: always
```

## nfs

```yaml
version: "2.1"
services:
  # https://hub.docker.com/r/itsthenetwork/nfs-server-alpine
  nfs:
    image: itsthenetwork/nfs-server-alpine:12
    container_name: nfs
    restart: unless-stopped
    privileged: true
    environment:
      - SHARED_DIRECTORY=/data
    volumes:
      - ./data/jellyfin/movies:/data
    ports:
      - 2049:2049

networks:
  default:
    external:
      name: nginx-proxy
```
