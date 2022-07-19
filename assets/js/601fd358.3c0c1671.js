"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[6098],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},c="ps",s={unversionedId:"archives/commands/ps",id:"archives/commands/ps",title:"ps",description:"ps\u547d\u4ee4\u5217\u51fa\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u8fdb\u7a0b\u4fe1\u606f\u3002",source:"@site/notes/bash-tutorial/archives/commands/ps.md",sourceDirName:"archives/commands",slug:"/archives/commands/ps",permalink:"/bash-tutorial/archives/commands/ps",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nl",permalink:"/bash-tutorial/archives/commands/nl"},next:{title:"scp",permalink:"/bash-tutorial/archives/commands/scp"}},i={},p=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ps"},"ps"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ps"),"\u547d\u4ee4\u5217\u51fa\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u8fdb\u7a0b\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u8fdb\u7a0b\u5f88\u591a\uff0c\u6240\u4ee5\u4e3a\u4e86\u5feb\u901f\u627e\u5230\u67d0\u4e2a\u8fdb\u7a0b\uff0c\u4e00\u822c\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),"\u914d\u5408\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u627e\u51fa\u6b63\u5728\u8fd0\u884c vim \u7684\u8fdb\u7a0b\n$ ps | grep vi\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-u"),"\u53c2\u6570\u5217\u51fa\u6307\u5b9a\u7528\u6237\u62e5\u6709\u7684\u8fdb\u7a0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ps -u yourusername\n")))}u.isMDXComponent=!0}}]);