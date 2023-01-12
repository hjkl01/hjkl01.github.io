"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[4704],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>y});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),y=o,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||a;return r?t.createElement(d,s(s({ref:n},l),{},{components:r})):t.createElement(d,s({ref:n},l))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},579:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const a={},s="nodejs",i={unversionedId:"nodejs",id:"nodejs",title:"nodejs",description:"yarn/npm \u8bbe\u7f6e\u56fd\u5185\u6e90",source:"@site/notes/linux/nodejs.md",sourceDirName:".",slug:"/nodejs",permalink:"/notes/linux/nodejs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nginx",permalink:"/notes/linux/nginx"},next:{title:"proxy",permalink:"/notes/linux/proxy"}},p={},c=[{value:"yarn/npm \u8bbe\u7f6e\u56fd\u5185\u6e90",id:"yarnnpm-\u8bbe\u7f6e\u56fd\u5185\u6e90",level:2},{value:"use yrm",id:"use-yrm",level:4}],l={toc:c};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodejs"},"nodejs"),(0,o.kt)("h1",{id:"npm-yarn"},"npm yarn"),(0,o.kt)("h2",{id:"yarnnpm-\u8bbe\u7f6e\u56fd\u5185\u6e90"},"yarn/npm \u8bbe\u7f6e\u56fd\u5185\u6e90"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u8be2\u6e90\nyarn config get registry\n\n# \u66f4\u6362\u56fd\u5185\u6e90\nyarn config set registry https://registry.npmmirror.com\n\n# \u6062\u590d\u5b98\u65b9\u6e90\nyarn config set registry https://registry.yarnpkg.com\n\n# \u5220\u9664\u6ce8\u518c\u8868\nyarn config delete registry\n\n\n# HUAWEI\nhttps://repo.huaweicloud.com/repository/npm/\n# Tencent\nhttp://mirrors.cloud.tencent.com/npm/\n# \u6d59\u6c5f\u5927\u5b66\nhttp://mirrors.zju.edu.cn/npm/\n# \u5357\u4eac\u90ae\u7535\nhttps://mirrors.njupt.edu.cn/nexus/repository/npm/\n# npmjs\nhttps://registry.npmjs.org\n")),(0,o.kt)("h4",{id:"use-yrm"},"use yrm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g yrm\n# yarn global add yrm\nyrm ls\nyrm use taobao\nyrm test\n")))}u.isMDXComponent=!0}}]);