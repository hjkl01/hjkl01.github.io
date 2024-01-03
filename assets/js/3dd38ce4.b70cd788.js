"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[7335],{193:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(5893),o=t(1151);const i={},s="movies",r={id:"movies",title:"movies",description:"aria2",source:"@site/notes/docker/movies.md",sourceDirName:".",slug:"/movies",permalink:"/notes/docker/movies",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mongoDB",permalink:"/notes/docker/mongo"},next:{title:"music",permalink:"/notes/docker/music"}},d={},l=[{value:"aria2",id:"aria2",level:2},{value:"caddy",id:"caddy",level:2},{value:"nginx",id:"nginx",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"movies",children:"movies"}),"\n",(0,a.jsx)(e.h2,{id:"aria2",children:"aria2"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:'version: "3.8"\n\nservices:\n  Aria2-Pro:\n    container_name: aria2-pro\n    image: p3terx/aria2-pro\n    environment:\n      - PUID=65534\n      - PGID=65534\n      - UMASK_SET=022\n      - RPC_SECRET=updateme!!!\n      - RPC_PORT=6800\n      - LISTEN_PORT=6888\n      - DISK_CACHE=64M\n      - IPV6_MODE=true\n      - UPDATE_TRACKERS=true\n      - CUSTOM_TRACKER_URL=\n      - TZ=Asia/Shanghai\n    volumes:\n      - ${PWD}/data/aria2-config:/config\n      - ${PWD}/data/downloads:/downloads\n    network_mode: host\n    # network_mode: bridge\n    # ports:\n    #   - 6800:6800\n    #   - 6888:6888\n    #   - 6888:6888/udp\n    restart: unless-stopped\n    logging:\n      driver: json-file\n      options:\n        max-size: 1m\n\n  AriaNg:\n    container_name: ariang\n    image: p3terx/ariang\n    command: --port 6880 --ipv6\n    # network_mode: host\n    ports:\n      - 127.0.0.1:6880:6880\n    restart: unless-stopped\n    logging:\n      driver: json-file\n      options:\n        max-size: 1m\n\n  # jellyfin\n  jellyfin:\n    image: jellyfin/jellyfin:latest\n    container_name: jellyfin_server\n    volumes:\n      - ./data/jellyfin/config:/config # Configuration directory\n      - ./data/jellyfin/cache:/cache\n      - ./data/downloads:/downloads\n    ports:\n      - 127.0.0.1:8096:8096\n    restart: unless-stopped\n\n  alist:\n    container_name: alist\n    image: xhofe/alist:latest\n    restart: unless-stopped\n    ports:\n      - "127.0.0.1:5244:5244"\n    volumes:\n      - ./data/alist:/opt/alist/data\n      - ./data/downloads:/mnt\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})}),"\n",(0,a.jsx)(e.h2,{id:"caddy",children:"caddy"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"movies.domain.com {\n    reverse_proxy 127.0.0.1:8096\n    encode zstd gzip\n}\n\naria.domain.com {\n    reverse_proxy 127.0.0.1:6800\n    encode zstd gzip\n}\n"})}),"\n",(0,a.jsx)(e.h2,{id:"nginx",children:"nginx"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/notes/linux/nginx",children:"\u94fe\u63a5"})})]})}function m(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>s});var a=t(7294);const o={},i=a.createContext(o);function s(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);