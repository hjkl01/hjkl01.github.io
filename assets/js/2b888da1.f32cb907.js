"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[5611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(83117),a=(n(67294),n(3905));const l={},i="find",s={unversionedId:"bash-tutorial/archives/commands/find",id:"bash-tutorial/archives/commands/find",title:"find",description:"find\u547d\u4ee4\u7528\u4e8e\u5bfb\u627e\u6587\u4ef6\uff0c\u4f1a\u5305\u62ec\u5f53\u524d\u76ee\u5f55\u7684\u6240\u6709\u4e0b\u7ea7\u76ee\u5f55\u3002",source:"@site/docs/bash-tutorial/archives/commands/find.md",sourceDirName:"bash-tutorial/archives/commands",slug:"/bash-tutorial/archives/commands/find",permalink:"/docs/bash-tutorial/archives/commands/find",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/commands/find.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"file",permalink:"/docs/bash-tutorial/archives/commands/file"},next:{title:"fmt",permalink:"/docs/bash-tutorial/archives/commands/fmt"}},c={},o=[],p={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"find"},"find"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"find"),"\u547d\u4ee4\u7528\u4e8e\u5bfb\u627e\u6587\u4ef6\uff0c\u4f1a\u5305\u62ec\u5f53\u524d\u76ee\u5f55\u7684\u6240\u6709\u4e0b\u7ea7\u76ee\u5f55\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u5e26\u4efb\u4f55\u53c2\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"find"),"\u6587\u4ef6\u4f1a\u5217\u51fa\u5f53\u524d\u76ee\u5f55\u7684\u6240\u6709\u6587\u4ef6\uff0c\u751a\u81f3\u8fd8\u5305\u62ec\u76f8\u5bf9\u8def\u5f84\u3002\u5982\u679c\u628a\u7ed3\u679c\u5bfc\u5165 sort \u6548\u679c\u66f4\u597d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ find | sort\n.\n./Makefile\n./README\n./build\n./client.c\n./client.h\n./common.h\n./project.c\n./server.c\n./server.h\n./tests\n./tests/suite1.pl\n./tests/suite2.pl\n./tests/suite3.pl\n./tests/suite4.pl\n")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981 ls -l \u6837\u5f0f\u7684\u5217\u8868\uff0c\u53ea\u8981\u5728 find \u540e\u9762\u52a0\u4e0a -ls\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ find -ls\n")),(0,a.kt)("p",null,"find \u6709\u5b83\u81ea\u5df1\u7684\u4e00\u5957\u590d\u6742\u7684\u8fc7\u6ee4\u8bed\u53e5\u3002\u4e0b\u9762\u5217\u4e3e\u7684\u662f\u4e00\u4e9b\u6700\u5e38\u7528\u7684\u4f60\u53ef\u4ee5\u7528\u4ee5\u83b7\u53d6\u67d0\u4e9b\u6587\u4ef6\u5217\u8868\u7684\u8fc7\u6ee4\u5668\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"find -name '*.c' \u2014\u2014 \u67e5\u627e\u7b26\u5408\u67d0 shell \u5f0f\u6837\u5f0f\u7684\u6587\u4ef6\u540d\u7684\u6587\u4ef6\u3002\u7528 iname \u5f00\u542f\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u641c\u7d22\u3002"),(0,a.kt)("li",{parentName:"ul"},"find -path '",(0,a.kt)("em",{parentName:"li"},"test"),"' \u2014\u2014 \u67e5\u627e\u7b26\u5408\u67d0 shell \u5f0f\u6837\u5f0f\u7684\u8def\u5f84\u7684\u6587\u4ef6\u3002\u7528 ipath \u5f00\u542f\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u641c\u7d22\u3002"),(0,a.kt)("li",{parentName:"ul"},"find -mtime -5 \u2014\u2014 \u67e5\u627e\u8fd1\u4e94\u5929\u5185\u7f16\u8f91\u8fc7\u7684\u6587\u4ef6\u3002\u4f60\u4e5f\u53ef\u4ee5\u7528 +5 \u6765\u67e5\u627e\u4e94\u5929\u4e4b\u524d\u7f16\u8f91\u8fc7\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"find -newer server.c \u2014\u2014 \u67e5\u627e\u6bd4 server.c \u66f4\u65b0\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"find -type d \u2014\u2014 \u67e5\u627e\u6240\u6709\u6587\u4ef6\u5939\u3002\u5982\u679c\u60f3\u627e\u51fa\u6240\u6709\u6587\u4ef6\uff0c\u90a3\u5c31\u7528 -type f\uff1b\u627e\u7b26\u53f7\u8fde\u63a5\u5c31\u7528 -type l\u3002")),(0,a.kt)("p",null,"\u8981\u6ce8\u610f\uff0c\u4e0a\u9762\u63d0\u5230\u7684\u8fd9\u4e9b\u8fc7\u6ee4\u5668\u90fd\u662f\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u7684\uff0c\u4f8b\u5982\u627e\u51fa\u8fd1\u4e24\u5929\u5185\u7f16\u8f91\u8fc7\u7684 C \u6e90\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ find -name '*.c' -mtime -2\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c find \u5bf9\u641c\u7d22\u7ed3\u679c\u6240\u91c7\u53d6\u7684\u52a8\u4f5c\u53ea\u662f\u7b80\u5355\u5730\u901a\u8fc7\u6807\u51c6\u8f93\u51fa\u8f93\u51fa\u4e00\u4e2a\u5217\u8868\uff0c\u7136\u800c\u5176\u5b9e\u8fd8\u6709\u5176\u4ed6\u4e00\u4e9b\u6709\u7528\u7684\u540e\u7eed\u52a8\u4f5c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-ls \u2014\u2014 \u5982\u524d\u6587\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u7c7b ls -l \u5f0f\u7684\u5217\u8868\u3002"),(0,a.kt)("li",{parentName:"ul"},"-delete \u2014\u2014 \u5220\u9664\u7b26\u5408\u67e5\u627e\u6761\u4ef6\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"-exec \u2014\u2014 \u5bf9\u641c\u7d22\u7ed3\u679c\u91cc\u7684\u6bcf\u4e2a\u6587\u4ef6\u90fd\u8fd0\u884c\u67d0\u4e2a\u547d\u4ee4\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"\u4f1a\u88ab\u66ff\u6362\u6210\u9002\u5f53\u7684\u6587\u4ef6\u540d\uff0c\u5e76\u4e14\u547d\u4ee4\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"\\;"),"\u7ec8\u7ed3\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ find -name '*.pl' -exec perl -c {} \\;\n")),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"+"),"\u4f5c\u4e3a\u7ec8\u6b62\u7b26\u6765\u5bf9\u6240\u6709\u7ed3\u679c\u8fd0\u884c\u4e00\u6b21\u547d\u4ee4\u3002\u6211\u8fd8\u53d1\u73b0\u4e00\u4e2a\u6211\u7ecf\u5e38\u4f7f\u7528\u7684\u5c0f\u6280\u5de7\uff0c\u5c31\u662f\u7528 find \u751f\u6210\u4e00\u4e2a\u6587\u4ef6\u5217\u8868\uff0c\u7136\u540e\u5728 Vim \u7684\u5782\u76f4\u5206\u7a97\u4e2d\u7f16\u8f91\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ find -name '*.c' -exec vim {} +\n")))}u.isMDXComponent=!0}}]);