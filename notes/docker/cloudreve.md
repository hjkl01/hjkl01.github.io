# cloudreve minIO alist

## cloudreve

```yaml
# office 文档预览服务
# https://view.xdocin.com/view?src={$src}

# mkdir -vp cloudreve/{uploads,avatar} \
    && touch cloudreve/conf.ini \
    && touch cloudreve/cloudreve.db \
    && mkdir -p aria2/config \
    && mkdir -p data/aria2 \
    && chmod -R 777 data/aria2

version: "3.8"
services:
  cloudreve:
    container_name: cloudreve
    image: cloudreve/cloudreve:latest
    restart: unless-stopped
    ports:
      - "5212:5212"
    volumes:
      - ./data/aria2/downloads:/downloads
      - ./data/cloudreve/uploads:/cloudreve/uploads
      - ./data/cloudreve/conf.ini:/cloudreve/conf.ini
      - ./data/cloudreve/cloudreve.db:/cloudreve/cloudreve.db
      - ./data/cloudreve/avatar:/cloudreve/avatar

networks:
  default:
    external:
      name: nginx-proxy
```

### nginx

```shell
server {
    listen 15212 ssl http2;
    listen [::]:15212 ssl http2;
    server_name hjkl01.cn;

    ssl_certificate  /etc/nginx/cert/hjkl01.cn_nginx/hjkl01.cn_bundle.crt;
    ssl_certificate_key /etc/nginx/cert/hjkl01.cn_nginx/hjkl01.cn.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_redirect off;
    client_max_body_size 90000m;

    location / {
        proxy_pass http://192.168.50.4:5212;
    }
}
```

## minIO

```yaml
version: "3.7"

# Settings and configurations that are common for all containers
x-minio-common: &minio-common
  image: quay.io/minio/minio:RELEASE.2022-05-23T18-45-11Z
  command: server --console-address ":9001" http://minio{1...4}/data{1...2}
  environment:
    - MINIO_ROOT_USER=username
    - MINIO_ROOT_PASSWORD=password
  expose:
    - "9000"
    - "9001"
  healthcheck:
    test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
    interval: 30s
    timeout: 20s
    retries: 3

# starts 4 docker containers running minio server instances.
# using nginx reverse proxy, load balancing, you can access
# it through port 9000.
services:
  minio1:
    <<: *minio-common
    hostname: minio1
    volumes:
      - ./data/minio/data1-1:/data1
      - ./data/minio/data1-2:/data2

  minio2:
    <<: *minio-common
    hostname: minio2
    volumes:
      - ./data/minio/data2-1:/data1
      - ./data/minio/data2-2:/data2

  minio3:
    <<: *minio-common
    hostname: minio3
    volumes:
      - ./data/minio/data3-1:/data1
      - ./data/minio/data3-2:/data2

  minio4:
    <<: *minio-common
    hostname: minio4
    volumes:
      - ./data/minio/data4-1:/data1
      - ./data/minio/data4-2:/data2

  nginx:
    image: nginx:1.19.2-alpine
    hostname: nginx
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    ports:
      - "9000:9000"
      - "9002:9001"
    depends_on:
      - minio1
      - minio2
      - minio3
      - minio4
```

### nginx

```shell
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections  4096;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;
    sendfile        on;
    keepalive_timeout  65;

    # include /etc/nginx/conf.d/*.conf;

    upstream minio {
        server minio1:9000;
        server minio2:9000;
        server minio3:9000;
        server minio4:9000;
    }

    upstream console {
        ip_hash;
        server minio1:9001;
        server minio2:9001;
        server minio3:9001;
        server minio4:9001;
    }

    server {
        listen       9000;
        listen  [::]:9000;
        server_name  localhost;

        # To allow special characters in headers
        ignore_invalid_headers off;
        # Allow any size file to be uploaded.
        # Set to a value such as 1000m; to restrict file size to a specific value
        client_max_body_size 0;
        # To disable buffering
        proxy_buffering off;
        proxy_request_buffering off;

        location / {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            proxy_connect_timeout 300;
            # Default is HTTP/1, keepalive is only enabled in HTTP/1.1
            proxy_http_version 1.1;
            proxy_set_header Connection "";
            chunked_transfer_encoding off;

            proxy_pass http://minio;
        }
    }

    server {
        listen       9001;
        listen  [::]:9001;
        server_name  localhost;

        # To allow special characters in headers
        ignore_invalid_headers off;
        # Allow any size file to be uploaded.
        # Set to a value such as 1000m; to restrict file size to a specific value
        client_max_body_size 0;
        # To disable buffering
        proxy_buffering off;
        proxy_request_buffering off;

        location / {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-NginX-Proxy true;

            # This is necessary to pass the correct IP to be hashed
            real_ip_header X-Real-IP;

            proxy_connect_timeout 300;

            # To support websocket
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";

            chunked_transfer_encoding off;

            proxy_pass http://console;
        }
    }
}
```

## alist

```yaml
version: "3.8"
services:
  alist:
    container_name: alist
    image: xhofe/alist:v3.44.0
    restart: unless-stopped
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
    ports:
      - "5244:5244"
    volumes:
      - ./data/alist:/opt/alist/data
      - /some_dir:/mnt

networks:
  default:
    external:
      name: nginx-proxy
```
