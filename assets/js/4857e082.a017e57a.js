"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8443],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?t.createElement(y,c(c({ref:r},p),{},{components:n})):t.createElement(y,c({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4357:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},c="caddy",i={unversionedId:"caddy",id:"caddy",title:"caddy",description:"",source:"@site/notes/linux/caddy.md",sourceDirName:".",slug:"/caddy",permalink:"/notes/linux/caddy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"My Linux Shell Config",permalink:"/notes/linux/"},next:{title:"nginx",permalink:"/notes/linux/nginx"}},l={},s=[],p={toc:s};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"caddy"},"caddy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# \u53cd\u5411\u4ee3\u7406\nnews.hjkl01.cn {\n    reverse_proxy 127.0.0.1:8000\n\n    encode zstd gzip\n\n    header * {\n        # cors\n        Access-Control-Allow-Origin  *\n        Access-Control-Allow-Methods "GET, POST, OPTIONS"\n        header_upstream Host {host}\n        header_upstream X-Real-IP {remote}\n        header_upstream X-Forwarded-For {remote}\n        header_upstream X-Forwarded-Proto {scheme}\n    }\n}\n\n\nblog.hjkl01.cn {\n    root * /data/blog\n    templates\n    file_server {\n            precompressed zstd br gzip\n        }\n\n    log {\n        output file /var/log/caddy/access.log {\n            roll_size 1gb\n            roll_keep 5\n            roll_keep_for 720h\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);