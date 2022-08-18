"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[6728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:11},s="samba(old)",i={unversionedId:"samba",id:"samba",title:"samba(old)",description:"new for docker",source:"@site/notes/linux/samba.md",sourceDirName:".",slug:"/samba",permalink:"/notes/linux/samba",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"supervisor",permalink:"/notes/linux/supervisor"},next:{title:"npm yarn",permalink:"/notes/linux/yarn"}},c={},u=[{value:"\u5728arch \u4e2d\u5b89\u88c5\u53c2\u8003",id:"\u5728arch-\u4e2d\u5b89\u88c5\u53c2\u8003",level:3},{value:"\u5728ubuntu\u4e2d\u5b89\u88c5",id:"\u5728ubuntu\u4e2d\u5b89\u88c5",level:3}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sambaold"},"samba(old)"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"new for docker")),(0,a.kt)("h3",{id:"\u5728arch-\u4e2d\u5b89\u88c5\u53c2\u8003"},"\u5728arch \u4e2d\u5b89\u88c5\u53c2\u8003"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"https://wiki.archlinux.org/title/samba\n")),(0,a.kt)("h3",{id:"\u5728ubuntu\u4e2d\u5b89\u88c5"},"\u5728ubuntu\u4e2d\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install samba\nsudo useradd xxx\nsudo smbpasswd -a xxx\nsudo vi /etc/samba/smb.conf\n\n#### \u914d\u7f6e\u5185\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9\n[dev]\ncomment = dev\npath = /var/dev\nvalid user = xxx\nwrite list = xxx\ncreate mask = 0664\ndirectory mask = 0775\nforce user = xxx\nforce group = xxx\npublic = no\navailable = yes\nbrowseable = yes\nsecurity = user\n### \u91cd\u542fsamba\u3010sudo service smbd restart\u3011\n")))}p.isMDXComponent=!0}}]);