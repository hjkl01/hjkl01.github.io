"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[759],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>u});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?t.createElement(y,o(o({ref:n},p),{},{components:r})):t.createElement(y,o({ref:n},p))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3674:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(3117),a=(r(7294),r(3905));const i={sidebar_position:1},o="aria2 jellyfin embyserver",s={unversionedId:"aria2",id:"aria2",title:"aria2 jellyfin embyserver",description:"aria2",source:"@site/notes/docker/aria2.md",sourceDirName:".",slug:"/aria2",permalink:"/notes/docker/aria2",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/notes/docker/"},next:{title:"ddns",permalink:"/notes/docker/ddns"}},l={},c=[{value:"aria2",id:"aria2",level:2},{value:"jellyfin",id:"jellyfin",level:2},{value:"emby",id:"emby",level:2}],p={toc:c};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aria2-jellyfin-embyserver"},"aria2 jellyfin embyserver"),(0,a.kt)("h2",{id:"aria2"},"aria2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.8"\n\nservices:\n\n  Aria2-Pro:\n    container_name: aria2-pro\n    image: p3terx/aria2-pro\n    environment:\n      - PUID=65534\n      - PGID=65534\n      - UMASK_SET=022\n      - RPC_SECRET=update_me\n      - RPC_PORT=6800\n      - LISTEN_PORT=6888\n      - DISK_CACHE=64M\n      - IPV6_MODE=true\n      - UPDATE_TRACKERS=true\n      - CUSTOM_TRACKER_URL=\n      - TZ=Asia/Shanghai\n    volumes:\n      - ${PWD}/data/aria2-config:/config\n      # - ${PWD}/data/embyserver/movies:/downloads\n      - ${PWD}/data/jellyfin/movies:/downloads\n    ports:\n     - 6800:6800\n     - 6888:6888\n     - 6888:6888/udp\n    restart: unless-stopped\n    logging:\n      driver: json-file\n      options:\n        max-size: 1m\n\n  AriaNg:\n    container_name: ariang\n    image: p3terx/ariang\n    command: --port 6880 --ipv6\n    ports:\n      - 192.168.50.4:6880:6880\n    restart: unless-stopped\n    logging:\n      driver: json-file\n      options:\n        max-size: 1m\n')),(0,a.kt)("h2",{id:"jellyfin"},"jellyfin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "2.3"\nservices:\n\n  jellyfin:\n    image: jellyfin/jellyfin:latest\n    container_name: jellyfin_server\n    volumes:\n      - ./data/jellyfin/config:/config # Configuration directory\n      - ./data/jellyfin/cache:/cache\n      - ./data/jellyfin/movies:/media\n    ports:\n      - 8096:8096 # HTTP port\n    restart: unless-stopped\n')),(0,a.kt)("h2",{id:"emby"},"emby"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "2.3"\nservices:\n  emby:\n    image: emby/embyserver\n    container_name: embyserver\n    runtime: nvidia # Expose NVIDIA GPUs\n    # network_mode: host # Enable DLNA and Wake-on-Lan\n    environment:\n      - UID=1000 # The UID to run emby as (default: 2)\n      - GID=100 # The GID to run emby as (default 2)\n      - GIDLIST=100 # A comma-separated list of additional GIDs to run emby as (default: 2)\n    volumes:\n      - ./data/embyserver/programdata:/config # Configuration directory\n      - ./data/embyserver/tvshows:/mnt/share1 # Media directory\n      - ./data/embyserver/movies:/media\n    ports:\n      - 8096:8096 # HTTP port\n      # - 8920:8920 # HTTPS port\n    devices:\n      - /dev/dri:/dev/dri # VAAPI/NVDEC/NVENC render nodes\n    #   - /dev/vchiq:/dev/vchiq # MMAL/OMX on Raspberry Pi\n    restart: unless-stopped      \n')))}d.isMDXComponent=!0}}]);