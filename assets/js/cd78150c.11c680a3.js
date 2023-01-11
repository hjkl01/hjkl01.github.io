"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1317],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},s="samba nfs",i={unversionedId:"samba",id:"samba",title:"samba nfs",description:"samba",source:"@site/notes/docker/samba.md",sourceDirName:".",slug:"/samba",permalink:"/notes/docker/samba",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"redis",permalink:"/notes/docker/redis"},next:{title:"shiori \u4e66\u7b7e\u7ba1\u7406\u5668",permalink:"/notes/docker/shiori"}},c={},l=[{value:"samba",id:"samba",level:2},{value:"nfs",id:"nfs",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"samba-nfs"},"samba nfs"),(0,a.kt)("h2",{id:"samba"},"samba"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.4"\n\nservices:\n  samba:\n    image: dperson/samba\n    environment:\n      TZ: "EST5EDT"\n    networks:\n      - default\n    ports:\n      - "137:137/udp"\n      - "138:138/udp"\n      - "139:139/tcp"\n      - "445:445/tcp"\n    read_only: true\n    tmpfs:\n      - /tmp\n    restart: unless-stopped\n    stdin_open: true\n    tty: true\n    volumes:\n      - /data:/mnt:z\n    command: \'-s "Volume;/mnt;yes;no;no;USER" -u "USER;PASSWORD" -p\'\n')),(0,a.kt)("h2",{id:"nfs"},"nfs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "2.1"\nservices:\n  # https://hub.docker.com/r/itsthenetwork/nfs-server-alpine\n  nfs:\n    image: itsthenetwork/nfs-server-alpine:12\n    container_name: nfs\n    restart: unless-stopped\n    privileged: true\n    environment:\n      - SHARED_DIRECTORY=/data\n    volumes:\n      - ./data/jellyfin/movies:/data\n    ports:\n      - 2049:2049\n')))}u.isMDXComponent=!0}}]);