"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[4517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=r(3117),a=(r(7294),r(3905));const l={},o="ls",s={unversionedId:"bash-tutorial/archives/commands/ls",id:"bash-tutorial/archives/commands/ls",title:"ls",description:"ls\u547d\u4ee4\u7528\u4e8e\u5217\u51fa\u5f53\u524d\u76ee\u5f55\u91cc\u9762\u7684\u6587\u4ef6\u548c\u5b50\u76ee\u5f55\u3002",source:"@site/docs/bash-tutorial/archives/commands/ls.md",sourceDirName:"bash-tutorial/archives/commands",slug:"/bash-tutorial/archives/commands/ls",permalink:"/docs/bash-tutorial/archives/commands/ls",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/commands/ls.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lpr",permalink:"/docs/bash-tutorial/archives/commands/lpr"},next:{title:"nl",permalink:"/docs/bash-tutorial/archives/commands/nl"}},c={},i=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}],u={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ls"},"ls"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ls"),"\u547d\u4ee4\u7528\u4e8e\u5217\u51fa\u5f53\u524d\u76ee\u5f55\u91cc\u9762\u7684\u6587\u4ef6\u548c\u5b50\u76ee\u5f55\u3002"),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a\uff1a\u5217\u51fa\u9690\u85cf\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"l\uff1a\u4ee5\u957f\u683c\u5f0f\u5217\u51fa\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"t\uff1a\u6309\u6700\u540e\u7f16\u8f91\u65e5\u671f\u6392\u5e8f\uff0c\u6700\u65b0\u7684\u6700\u5148\u3002\u8fd9\u5728\u67d0\u4e2a\u5927\u76ee\u5f55\u91cc\u627e\u51fa\u6700\u8fd1\u4fee\u6539\u7684\u6587\u4ef6\u5217\u8868\u65f6\u5f88\u6709\u7528\uff0c\u6bd4\u5982\u5c06\u7ed3\u679c\u5bfc\u5165\uff08 pipe \uff09 head \u6216\u8005 sed 10q\u3002\u6216\u8bb8\u52a0\u4e0a -l \u4f1a\u6548\u679c\u66f4\u597d\u3002\u5f53\u7136\u5982\u679c\u4f60\u60f3\u83b7\u53d6\u6700\u65e7\u7684\u6587\u4ef6\u5217\u8868\uff0c\u53ea\u8981\u52a0 -r \u53cd\u8f6c\u5217\u8868\u5373\u53ef\u3002"),(0,a.kt)("li",{parentName:"ul"},"X\uff1a\u6309\u6587\u4ef6\u7c7b\u578b\u5206\u7c7b\u3002\u8fd9\u5728\u591a\u8bed\u8a00\u6216\u591a\u540e\u7f00\u7684\u9879\u76ee\u4e2d\u7279\u522b\u65b9\u4fbf\uff0c\u6bd4\u5982\u5934\u6587\u4ef6\u548c\u6e90\u6587\u4ef6\u5206\u5f00\uff0c\u6216\u533a\u5206\u5f00\u6e90\u6587\u4ef6\u548c\u751f\u6210\u6587\u4ef6\u6216\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"v\uff1a\u6309\u7167\u6587\u4ef6\u540d\u91cc\u7684\u7248\u672c\u53f7\u6392\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ul"},"S\uff1a\u6309\u6587\u4ef6\u5927\u5c0f\u6392\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ul"},"R\uff1a\u9012\u5f52\u5730\u5217\u4e3e\u6587\u4ef6\u3002\u8fd9\u4e2a\u9009\u9879\u548c -l \u7ec4\u5408\u4f7f\u7528\u5e76\u5c06\u7ed3\u679c\u5bfc\u51fa\u5230 less \u6548\u679c\u5f88\u597d\u3002")),(0,a.kt)("p",null,"\u53ef\u4ee5\u628a\u7ed3\u679c\u5bfc\u51fa\u7ed9\u7c7b\u4f3c vim \u7684\u8fdb\u7a0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls -XR | vim -\n")))}p.isMDXComponent=!0}}]);