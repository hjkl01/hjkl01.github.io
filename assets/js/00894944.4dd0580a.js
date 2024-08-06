"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1011],{74564:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var r=o(86070),i=o(25710);const t={},a="cloudreve minIO alist",s={id:"cloudreve",title:"cloudreve minIO alist",description:"cloudreve",source:"@site/notes/docker/cloudreve.md",sourceDirName:".",slug:"/cloudreve",permalink:"/notes/docker/cloudreve",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/notes/docker/"},next:{title:"code server",permalink:"/notes/docker/code_server"}},d={},l=[{value:"cloudreve",id:"cloudreve",level:2},{value:"nginx",id:"nginx",level:3},{value:"minIO",id:"minio",level:2},{value:"nginx",id:"nginx-1",level:3},{value:"alist",id:"alist",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"cloudreve-minio-alist",children:"cloudreve minIO alist"}),"\n",(0,r.jsx)(e.h2,{id:"cloudreve",children:"cloudreve"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:'# office \u6587\u6863\u9884\u89c8\u670d\u52a1\n# https://view.xdocin.com/view?src={$src}\n\n# mkdir -vp cloudreve/{uploads,avatar} \\\n    && touch cloudreve/conf.ini \\\n    && touch cloudreve/cloudreve.db \\\n    && mkdir -p aria2/config \\\n    && mkdir -p data/aria2 \\\n    && chmod -R 777 data/aria2\n\nversion: "3.8"\nservices:\n  cloudreve:\n    container_name: cloudreve\n    image: cloudreve/cloudreve:latest\n    restart: unless-stopped\n    ports:\n      - "5212:5212"\n    volumes:\n      - ./data/aria2/downloads:/downloads\n      - ./data/cloudreve/uploads:/cloudreve/uploads\n      - ./data/cloudreve/conf.ini:/cloudreve/conf.ini\n      - ./data/cloudreve/cloudreve.db:/cloudreve/cloudreve.db\n      - ./data/cloudreve/avatar:/cloudreve/avatar\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})}),"\n",(0,r.jsx)(e.h3,{id:"nginx",children:"nginx"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"server {\n    listen 15212 ssl http2;\n    listen [::]:15212 ssl http2;\n    server_name hjkl01.cn;\n\n    ssl_certificate  /etc/nginx/cert/hjkl01.cn_nginx/hjkl01.cn_bundle.crt;\n    ssl_certificate_key /etc/nginx/cert/hjkl01.cn_nginx/hjkl01.cn.key;\n    ssl_session_timeout 5m;\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_prefer_server_ciphers on;\n\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header Host $http_host;\n    proxy_redirect off;\n    client_max_body_size 90000m;\n\n    location / {\n        proxy_pass http://192.168.50.4:5212;\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"minio",children:"minIO"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:'version: "3.7"\n\n# Settings and configurations that are common for all containers\nx-minio-common: &minio-common\n  image: quay.io/minio/minio:RELEASE.2022-05-23T18-45-11Z\n  command: server --console-address ":9001" http://minio{1...4}/data{1...2}\n  environment:\n    - MINIO_ROOT_USER=username\n    - MINIO_ROOT_PASSWORD=password\n  expose:\n    - "9000"\n    - "9001"\n  healthcheck:\n    test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]\n    interval: 30s\n    timeout: 20s\n    retries: 3\n\n# starts 4 docker containers running minio server instances.\n# using nginx reverse proxy, load balancing, you can access\n# it through port 9000.\nservices:\n  minio1:\n    <<: *minio-common\n    hostname: minio1\n    volumes:\n      - ./data/minio/data1-1:/data1\n      - ./data/minio/data1-2:/data2\n\n  minio2:\n    <<: *minio-common\n    hostname: minio2\n    volumes:\n      - ./data/minio/data2-1:/data1\n      - ./data/minio/data2-2:/data2\n\n  minio3:\n    <<: *minio-common\n    hostname: minio3\n    volumes:\n      - ./data/minio/data3-1:/data1\n      - ./data/minio/data3-2:/data2\n\n  minio4:\n    <<: *minio-common\n    hostname: minio4\n    volumes:\n      - ./data/minio/data4-1:/data1\n      - ./data/minio/data4-2:/data2\n\n  nginx:\n    image: nginx:1.19.2-alpine\n    hostname: nginx\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf:ro\n    ports:\n      - "9000:9000"\n      - "9002:9001"\n    depends_on:\n      - minio1\n      - minio2\n      - minio3\n      - minio4\n'})}),"\n",(0,r.jsx)(e.h3,{id:"nginx-1",children:"nginx"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'user  nginx;\nworker_processes  auto;\n\nerror_log  /var/log/nginx/error.log warn;\npid        /var/run/nginx.pid;\n\nevents {\n    worker_connections  4096;\n}\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n    sendfile        on;\n    keepalive_timeout  65;\n\n    # include /etc/nginx/conf.d/*.conf;\n\n    upstream minio {\n        server minio1:9000;\n        server minio2:9000;\n        server minio3:9000;\n        server minio4:9000;\n    }\n\n    upstream console {\n        ip_hash;\n        server minio1:9001;\n        server minio2:9001;\n        server minio3:9001;\n        server minio4:9001;\n    }\n\n    server {\n        listen       9000;\n        listen  [::]:9000;\n        server_name  localhost;\n\n        # To allow special characters in headers\n        ignore_invalid_headers off;\n        # Allow any size file to be uploaded.\n        # Set to a value such as 1000m; to restrict file size to a specific value\n        client_max_body_size 0;\n        # To disable buffering\n        proxy_buffering off;\n        proxy_request_buffering off;\n\n        location / {\n            proxy_set_header Host $http_host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto $scheme;\n\n            proxy_connect_timeout 300;\n            # Default is HTTP/1, keepalive is only enabled in HTTP/1.1\n            proxy_http_version 1.1;\n            proxy_set_header Connection "";\n            chunked_transfer_encoding off;\n\n            proxy_pass http://minio;\n        }\n    }\n\n    server {\n        listen       9001;\n        listen  [::]:9001;\n        server_name  localhost;\n\n        # To allow special characters in headers\n        ignore_invalid_headers off;\n        # Allow any size file to be uploaded.\n        # Set to a value such as 1000m; to restrict file size to a specific value\n        client_max_body_size 0;\n        # To disable buffering\n        proxy_buffering off;\n        proxy_request_buffering off;\n\n        location / {\n            proxy_set_header Host $http_host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_set_header X-NginX-Proxy true;\n\n            # This is necessary to pass the correct IP to be hashed\n            real_ip_header X-Real-IP;\n\n            proxy_connect_timeout 300;\n\n            # To support websocket\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection "upgrade";\n\n            chunked_transfer_encoding off;\n\n            proxy_pass http://console;\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"alist",children:"alist"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:'version: "3.8"\nservices:\n  alist:\n    container_name: alist\n    image: xhofe/alist:latest\n    restart: unless-stopped\n    ports:\n      - "5244:5244"\n    volumes:\n      - ./data/alist:/opt/alist/data\n      - /some_dir:/mnt\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})})]})}function m(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},25710:(n,e,o)=>{o.d(e,{R:()=>a,x:()=>s});var r=o(30758);const i={},t=r.createContext(i);function a(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);