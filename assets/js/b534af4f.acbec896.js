"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[759],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},442:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="aria2 jellyfin",l={unversionedId:"aria2",id:"aria2",title:"aria2 jellyfin",description:"aria2",source:"@site/notes/docker/aria2.md",sourceDirName:".",slug:"/aria2",permalink:"/notes/docker/aria2",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/notes/docker/"},next:{title:"ddns",permalink:"/notes/docker/ddns"}},s={},c=[{value:"aria2",id:"aria2",level:2},{value:"caddy",id:"caddy",level:2},{value:"nginx",id:"nginx",level:2}],p={toc:c};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aria2-jellyfin"},"aria2 jellyfin"),(0,a.kt)("h2",{id:"aria2"},"aria2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.8"\n\nservices:\n\n  Aria2-Pro:\n    container_name: aria2-pro\n    image: p3terx/aria2-pro\n    environment:\n      - PUID=65534\n      - PGID=65534\n      - UMASK_SET=022\n      - RPC_SECRET=!!!update_me\n      - RPC_PORT=6800\n      - LISTEN_PORT=6888\n      - DISK_CACHE=64M\n      - IPV6_MODE=true\n      - UPDATE_TRACKERS=true\n      - CUSTOM_TRACKER_URL=\n      - TZ=Asia/Shanghai\n    volumes:\n      - ${PWD}/data/aria2-config:/config\n      - ${PWD}/data/aria2/downloads:/downloads\n    network_mode: host\n    #  network_mode: bridge\n    #  ports:\n    #    - 6800:6800\n    #    - 6888:6888\n    #    - 6888:6888/udp\n    restart: unless-stopped\n    logging:\n      driver: json-file\n      options:\n        max-size: 1m\n\n  AriaNg:\n    container_name: ariang\n    image: p3terx/ariang\n    command: --port 6880 --ipv6\n    network_mode: host\n    #  network_mode: bridge\n    #  ports:\n    #    - 127.0.0.1:6880:6880\n    restart: unless-stopped\n    logging:\n      driver: json-file\n      options:\n        max-size: 1m\n        \n  # jellyfin\n  jellyfin:\n    image: jellyfin/jellyfin:latest\n    container_name: jellyfin_server\n    volumes:\n      - ./data/jellyfin/config:/config # Configuration directory\n      - ./data/jellyfin/cache:/cache\n      - ./data/aria2/downloads:/downloads\n    ports:\n      - 127.0.0.1:8096:8096\n    restart: unless-stopped\n')),(0,a.kt)("h2",{id:"caddy"},"caddy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"movies.hjkl01.cn {\n    reverse_proxy 127.0.0.1:8096\n    encode zstd gzip\n}\n\naria.hjkl01.cn {\n    reverse_proxy 127.0.0.1:6800\n    encode zstd gzip\n}\n")),(0,a.kt)("h2",{id:"nginx"},"nginx"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/notes/linux/nginx"},"\u94fe\u63a5")))}d.isMDXComponent=!0}}]);