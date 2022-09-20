"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2086],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?t.createElement(f,i(i({ref:n},l),{},{components:r})):t.createElement(f,i({ref:n},l))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6278:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="nginx-proxy-manager",c={unversionedId:"nginx",id:"nginx",title:"nginx-proxy-manager",description:"",source:"@site/notes/docker/nginx.md",sourceDirName:".",slug:"/nginx",permalink:"/notes/docker/nginx",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"cloudreve minIO alist",permalink:"/notes/docker/cloudreve"},next:{title:"samba nfs",permalink:"/notes/docker/samba"}},s={},p=[],l={toc:p};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nginx-proxy-manager"},"nginx-proxy-manager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  app:\n    image: 'jc21/nginx-proxy-manager:latest'\n    restart: unless-stopped\n    ports:\n      - '80:80'\n      - '81:81'\n      - '443:443'\n    volumes:\n      - ./data:/data\n      - ./letsencrypt:/etc/letsencrypt\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# open http://127.0.0.1:81\n# Default Admin User:\nEmail:    admin@example.com\nPassword: changeme\n")))}u.isMDXComponent=!0}}]);