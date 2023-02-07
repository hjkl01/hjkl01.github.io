"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[7335],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},i="movies",s={unversionedId:"movies",id:"movies",title:"movies",description:"aria2",source:"@site/notes/docker/movies.md",sourceDirName:".",slug:"/movies",permalink:"/notes/docker/movies",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mongoDB",permalink:"/notes/docker/mongo"},next:{title:"music",permalink:"/notes/docker/music"}},l={},c=[{value:"aria2",id:"aria2",level:2},{value:"caddy",id:"caddy",level:2},{value:"nginx",id:"nginx",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"movies"},"movies"),(0,a.kt)("h2",{id:"aria2"},"aria2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.8"\n\nservices:\n  Aria2-Pro:\n    container_name: aria2-pro\n    image: p3terx/aria2-pro\n    environment:\n      - PUID=65534\n      - PGID=65534\n      - UMASK_SET=022\n      - RPC_SECRET=updateme!!!\n      - RPC_PORT=6800\n      - LISTEN_PORT=6888\n      - DISK_CACHE=64M\n      - IPV6_MODE=true\n      - UPDATE_TRACKERS=true\n      - CUSTOM_TRACKER_URL=\n      - TZ=Asia/Shanghai\n    volumes:\n      - ${PWD}/data/aria2-config:/config\n      - ${PWD}/data/downloads:/downloads\n    network_mode: host\n    # network_mode: bridge\n    # ports:\n    #   - 6800:6800\n    #   - 6888:6888\n    #   - 6888:6888/udp\n    restart: unless-stopped\n    logging:\n      driver: json-file\n      options:\n        max-size: 1m\n\n  AriaNg:\n    container_name: ariang\n    image: p3terx/ariang\n    command: --port 6880 --ipv6\n    # network_mode: host\n    ports:\n      - 127.0.0.1:6880:6880\n    restart: unless-stopped\n    logging:\n      driver: json-file\n      options:\n        max-size: 1m\n\n  # jellyfin\n  jellyfin:\n    image: jellyfin/jellyfin:latest\n    container_name: jellyfin_server\n    volumes:\n      - ./data/jellyfin/config:/config # Configuration directory\n      - ./data/jellyfin/cache:/cache\n      - ./data/downloads:/downloads\n    ports:\n      - 127.0.0.1:8096:8096\n    restart: unless-stopped\n\n  alist:\n    container_name: alist\n    image: xhofe/alist:latest\n    restart: unless-stopped\n    ports:\n      - "127.0.0.1:5244:5244"\n    volumes:\n      - ./data/alist:/opt/alist/data\n      - ./data/downloads:/mnt\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n')),(0,a.kt)("h2",{id:"caddy"},"caddy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"movies.domain.com {\n    reverse_proxy 127.0.0.1:8096\n    encode zstd gzip\n}\n\naria.domain.com {\n    reverse_proxy 127.0.0.1:6800\n    encode zstd gzip\n}\n")),(0,a.kt)("h2",{id:"nginx"},"nginx"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/notes/linux/nginx"},"\u94fe\u63a5")))}d.isMDXComponent=!0}}]);