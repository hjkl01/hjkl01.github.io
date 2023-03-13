"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2086],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},c="nginx-proxy-manager",i={unversionedId:"nginx",id:"nginx",title:"nginx-proxy-manager",description:"",source:"@site/notes/docker/nginx.md",sourceDirName:".",slug:"/nginx",permalink:"/notes/docker/nginx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"netdata",permalink:"/notes/docker/netdata"},next:{title:"nocodb",permalink:"/notes/docker/nocodb"}},p={},l=[],s={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nginx-proxy-manager"},"nginx-proxy-manager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  app:\n    image: "jc21/nginx-proxy-manager:latest"\n    restart: unless-stopped\n    ports:\n      - "80:80"\n      - "81:81"\n      - "443:443"\n    volumes:\n      - ./data:/data\n      - ./letsencrypt:/etc/letsencrypt\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# open http://127.0.0.1:81\n# Default Admin User:\nEmail:    admin@example.com\nPassword: changeme\n")))}u.isMDXComponent=!0}}]);