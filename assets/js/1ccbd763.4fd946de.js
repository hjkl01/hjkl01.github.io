"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),k=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=k(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=k(n),N=a,s=u["".concat(o,".").concat(N)]||u[N]||d[N]||i;return n?l.createElement(s,r(r({ref:t},m),{},{components:n})):l.createElement(s,r({ref:t},m))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var k=2;k<i;k++)r[k]=n[k];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>k});var l=n(83117),a=(n(67294),n(3905));const i={},r="Bash \u884c\u64cd\u4f5c",p={unversionedId:"bash-tutorial/readline",id:"bash-tutorial/readline",title:"Bash \u884c\u64cd\u4f5c",description:"\u7b80\u4ecb",source:"@site/docs/bash-tutorial/readline.md",sourceDirName:"bash-tutorial",slug:"/bash-tutorial/readline",permalink:"/docs/bash-tutorial/readline",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/readline.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"read \u547d\u4ee4",permalink:"/docs/bash-tutorial/read"},next:{title:"Bash \u811a\u672c\u5165\u95e8",permalink:"/docs/bash-tutorial/script"}},o={},k=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5149\u6807\u79fb\u52a8",id:"\u5149\u6807\u79fb\u52a8",level:2},{value:"\u6e05\u9664\u5c4f\u5e55",id:"\u6e05\u9664\u5c4f\u5e55",level:2},{value:"\u7f16\u8f91\u64cd\u4f5c",id:"\u7f16\u8f91\u64cd\u4f5c",level:2},{value:"\u81ea\u52a8\u8865\u5168",id:"\u81ea\u52a8\u8865\u5168",level:2},{value:"\u64cd\u4f5c\u5386\u53f2",id:"\u64cd\u4f5c\u5386\u53f2",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"history \u547d\u4ee4",id:"history-\u547d\u4ee4",level:3},{value:"\u76f8\u5173\u5feb\u6377\u952e",id:"\u76f8\u5173\u5feb\u6377\u952e",level:3},{value:"\u5176\u4ed6\u5feb\u6377\u952e",id:"\u5176\u4ed6\u5feb\u6377\u952e",level:2}],m={toc:k};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bash-\u884c\u64cd\u4f5c"},"Bash \u884c\u64cd\u4f5c"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"Bash \u5185\u7f6e\u4e86 Readline \u5e93\uff0c\u5177\u6709\u8fd9\u4e2a\u5e93\u63d0\u4f9b\u7684\u5f88\u591a\u201c\u884c\u64cd\u4f5c\u201d\u529f\u80fd\uff0c\u6bd4\u5982\u547d\u4ee4\u7684\u81ea\u52a8\u8865\u5168\uff0c\u53ef\u4ee5\u5927\u5927\u52a0\u5feb\u64cd\u4f5c\u901f\u5ea6\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u5e93\u9ed8\u8ba4\u91c7\u7528 Emacs \u5feb\u6377\u952e\uff0c\u4e5f\u53ef\u4ee5\u6539\u6210 Vi \u5feb\u6377\u952e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ set -o vi\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u547d\u4ee4\u53ef\u4ee5\u6539\u56de Emacs \u5feb\u6377\u952e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ set -o emacs\n")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u6c38\u4e45\u6027\u66f4\u6539\u7f16\u8f91\u6a21\u5f0f\uff08Emacs / Vi\uff09\uff0c\u53ef\u4ee5\u5c06\u547d\u4ee4\u5199\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"~/.inputrc"),"\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u662f Readline \u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"set editing-mode vi\n")),(0,a.kt)("p",null,"\u672c\u7ae0\u4ecb\u7ecd\u7684\u5feb\u6377\u952e\u90fd\u5c5e\u4e8e Emacs \u6a21\u5f0f\u3002Vi \u6a21\u5f0f\u7684\u5feb\u6377\u952e\uff0c\u8bfb\u8005\u53ef\u4ee5\u53c2\u8003 Vi \u7f16\u8f91\u5668\u7684\u6559\u7a0b\u3002"),(0,a.kt)("p",null,"Bash \u9ed8\u8ba4\u5f00\u542f\u8fd9\u4e2a\u5e93\uff0c\u4f46\u662f\u5141\u8bb8\u5173\u95ed\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash --noediting\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"--noediting"),"\u53c2\u6570\u5173\u95ed\u4e86 Readline \u5e93\uff0c\u542f\u52a8\u7684 Bash \u5c31\u4e0d\u5e26\u6709\u884c\u64cd\u4f5c\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"\u5149\u6807\u79fb\u52a8"},"\u5149\u6807\u79fb\u52a8"),(0,a.kt)("p",null,"Readline \u63d0\u4f9b\u5feb\u901f\u79fb\u52a8\u5149\u6807\u7684\u5feb\u6377\u952e\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + a"),"\uff1a\u79fb\u5230\u884c\u9996\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + b"),"\uff1a\u5411\u884c\u9996\u79fb\u52a8\u4e00\u4e2a\u5b57\u7b26\uff0c\u4e0e\u5de6\u7bad\u5934\u4f5c\u7528\u76f8\u540c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + e"),"\uff1a\u79fb\u5230\u884c\u5c3e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + f"),"\uff1a\u5411\u884c\u5c3e\u79fb\u52a8\u4e00\u4e2a\u5b57\u7b26\uff0c\u4e0e\u53f3\u7bad\u5934\u4f5c\u7528\u76f8\u540c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + f"),"\uff1a\u79fb\u52a8\u5230\u5f53\u524d\u5355\u8bcd\u7684\u8bcd\u5c3e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + b"),"\uff1a\u79fb\u52a8\u5230\u5f53\u524d\u5355\u8bcd\u7684\u8bcd\u9996\u3002")),(0,a.kt)("p",null,"\u4e0a\u9762\u5feb\u6377\u952e\u7684 Alt \u952e\uff0c\u4e5f\u53ef\u4ee5\u7528 ESC \u952e\u4ee3\u66ff\u3002"),(0,a.kt)("h2",{id:"\u6e05\u9664\u5c4f\u5e55"},"\u6e05\u9664\u5c4f\u5e55"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + l"),"\u5feb\u6377\u952e\u53ef\u4ee5\u6e05\u9664\u5c4f\u5e55\uff0c\u5373\u5c06\u5f53\u524d\u884c\u79fb\u5230\u5c4f\u5e55\u7684\u7b2c\u4e00\u884c\uff0c\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"clear"),"\u547d\u4ee4\u4f5c\u7528\u76f8\u540c\u3002"),(0,a.kt)("h2",{id:"\u7f16\u8f91\u64cd\u4f5c"},"\u7f16\u8f91\u64cd\u4f5c"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u5feb\u6377\u952e\u53ef\u4ee5\u7f16\u8f91\u547d\u4ee4\u884c\u5185\u5bb9\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + d"),"\uff1a\u5220\u9664\u5149\u6807\u4f4d\u7f6e\u7684\u5b57\u7b26\uff08delete\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + w"),"\uff1a\u5220\u9664\u5149\u6807\u524d\u9762\u7684\u5355\u8bcd\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + t"),"\uff1a\u5149\u6807\u4f4d\u7f6e\u7684\u5b57\u7b26\u4e0e\u5b83\u524d\u9762\u4e00\u4f4d\u7684\u5b57\u7b26\u4ea4\u6362\u4f4d\u7f6e\uff08transpose\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + t"),"\uff1a\u5149\u6807\u4f4d\u7f6e\u7684\u8bcd\u4e0e\u5b83\u524d\u9762\u4e00\u4f4d\u7684\u8bcd\u4ea4\u6362\u4f4d\u7f6e\uff08transpose\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + l"),"\uff1a\u5c06\u5149\u6807\u4f4d\u7f6e\u81f3\u8bcd\u5c3e\u8f6c\u4e3a\u5c0f\u5199\uff08lowercase\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + u"),"\uff1a\u5c06\u5149\u6807\u4f4d\u7f6e\u81f3\u8bcd\u5c3e\u8f6c\u4e3a\u5927\u5199\uff08uppercase\uff09\u3002")),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + d"),"\u7684\u65f6\u5019\uff0c\u5982\u679c\u5f53\u524d\u884c\u6ca1\u6709\u4efb\u4f55\u5b57\u7b26\uff0c\u4f1a\u5bfc\u81f4\u9000\u51fa\u5f53\u524d Shell\uff0c\u6240\u4ee5\u8981\u5c0f\u5fc3\u3002"),(0,a.kt)("p",null,"\u526a\u5207\u548c\u7c98\u8d34\u5feb\u6377\u952e\u5982\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + k"),"\uff1a\u526a\u5207\u5149\u6807\u4f4d\u7f6e\u5230\u884c\u5c3e\u7684\u6587\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + u"),"\uff1a\u526a\u5207\u5149\u6807\u4f4d\u7f6e\u5230\u884c\u9996\u7684\u6587\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + d"),"\uff1a\u526a\u5207\u5149\u6807\u4f4d\u7f6e\u5230\u8bcd\u5c3e\u7684\u6587\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + Backspace"),"\uff1a\u526a\u5207\u5149\u6807\u4f4d\u7f6e\u5230\u8bcd\u9996\u7684\u6587\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + y"),"\uff1a\u5728\u5149\u6807\u4f4d\u7f6e\u7c98\u8d34\u6587\u672c\u3002")),(0,a.kt)("p",null,"\u540c\u6837\u5730\uff0cAlt \u952e\u53ef\u4ee5\u7528 Esc \u952e\u4ee3\u66ff\u3002"),(0,a.kt)("h2",{id:"\u81ea\u52a8\u8865\u5168"},"\u81ea\u52a8\u8865\u5168"),(0,a.kt)("p",null,"\u547d\u4ee4\u8f93\u5165\u5230\u4e00\u534a\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6309\u4e00\u4e0b Tab \u952e\uff0cReadline \u4f1a\u81ea\u52a8\u8865\u5168\u547d\u4ee4\u6216\u8def\u5f84\u3002\u6bd4\u5982\uff0c\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"cle"),"\uff0c\u518d\u6309\u4e0b Tab \u952e\uff0cBash \u4f1a\u81ea\u52a8\u5c06\u8fd9\u4e2a\u547d\u4ee4\u8865\u5168\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"clear"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u7b26\u5408\u6761\u4ef6\u7684\u547d\u4ee4\u6216\u8def\u5f84\u6709\u591a\u4e2a\uff0c\u5c31\u9700\u8981\u8fde\u7eed\u6309\u4e24\u6b21 Tab \u952e\uff0cBash \u4f1a\u63d0\u793a\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u547d\u4ee4\u6216\u8def\u5f84\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u547d\u4ee4\u6216\u8def\u5f84\uff0cTab \u8fd8\u53ef\u4ee5\u8865\u5168\u5176\u4ed6\u503c\u3002\u5982\u679c\u4e00\u4e2a\u503c\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"$"),"\u5f00\u5934\uff0c\u5219\u6309\u4e0b Tab \u952e\u4f1a\u8865\u5168\u53d8\u91cf\uff1b\u5982\u679c\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"~"),"\u5f00\u5934\uff0c\u5219\u8865\u5168\u7528\u6237\u540d\uff1b\u5982\u679c\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"@"),"\u5f00\u5934\uff0c\u5219\u8865\u5168\u4e3b\u673a\u540d\uff08hostname\uff09\uff0c\u4e3b\u673a\u540d\u4ee5\u5217\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),"\u6587\u4ef6\u91cc\u9762\u7684\u4e3b\u673a\u4e3a\u51c6\u3002"),(0,a.kt)("p",null,"\u81ea\u52a8\u8865\u5168\u76f8\u5173\u7684\u5feb\u6377\u952e\u5982\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tab\uff1a\u5b8c\u6210\u81ea\u52a8\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + ?"),"\uff1a\u5217\u51fa\u53ef\u80fd\u7684\u8865\u5168\uff0c\u4e0e\u8fde\u6309\u4e24\u6b21 Tab \u952e\u4f5c\u7528\u76f8\u540c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + /"),"\uff1a\u5c1d\u8bd5\u6587\u4ef6\u8def\u5f84\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + x /"),"\uff1a\u5148\u6309",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + x"),"\uff0c\u518d\u6309",(0,a.kt)("inlineCode",{parentName:"li"},"/"),"\uff0c\u7b49\u540c\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"Alt + ?"),"\uff0c\u5217\u51fa\u53ef\u80fd\u7684\u6587\u4ef6\u8def\u5f84\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + !"),"\uff1a\u547d\u4ee4\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + x !"),"\uff1a\u5148\u6309",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + x"),"\uff0c\u518d\u6309",(0,a.kt)("inlineCode",{parentName:"li"},"!"),"\uff0c\u7b49\u540c\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"Alt + !"),"\uff0c\u547d\u4ee4\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + ~"),"\uff1a\u7528\u6237\u540d\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + x ~"),"\uff1a\u5148\u6309",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + x"),"\uff0c\u518d\u6309",(0,a.kt)("inlineCode",{parentName:"li"},"~"),"\uff0c\u7b49\u540c\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"Alt + ~"),"\uff0c\u7528\u6237\u540d\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + $"),"\uff1a\u53d8\u91cf\u540d\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + x $"),"\uff1a\u5148\u6309",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + x"),"\uff0c\u518d\u6309",(0,a.kt)("inlineCode",{parentName:"li"},"$"),"\uff0c\u7b49\u540c\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"Alt + $"),"\uff0c\u53d8\u91cf\u540d\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + @"),"\uff1a\u4e3b\u673a\u540d\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + x @"),"\uff1a\u5148\u6309",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + x"),"\uff0c\u518d\u6309",(0,a.kt)("inlineCode",{parentName:"li"},"@"),"\uff0c\u7b49\u540c\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"Alt + @"),"\uff0c\u4e3b\u673a\u540d\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + *"),"\uff1a\u5728\u547d\u4ee4\u884c\u4e00\u6b21\u6027\u63d2\u5165\u6240\u6709\u53ef\u80fd\u7684\u8865\u5168\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + Tab"),"\uff1a\u5c1d\u8bd5\u7528",(0,a.kt)("inlineCode",{parentName:"li"},".bash_history"),"\u91cc\u9762\u4ee5\u524d\u6267\u884c\u547d\u4ee4\uff0c\u8fdb\u884c\u8865\u5168\u3002")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Alt"),"\u952e\u4e5f\u53ef\u4ee5\u7528 ESC \u952e\u4ee3\u66ff\u3002"),(0,a.kt)("h2",{id:"\u64cd\u4f5c\u5386\u53f2"},"\u64cd\u4f5c\u5386\u53f2"),(0,a.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("p",null,"Bash \u4f1a\u4fdd\u7559\u7528\u6237\u7684\u64cd\u4f5c\u5386\u53f2\uff0c\u5373\u7528\u6237\u8f93\u5165\u7684\u6bcf\u4e00\u6761\u547d\u4ee4\u90fd\u4f1a\u8bb0\u5f55\u3002\u6709\u4e86\u64cd\u4f5c\u5386\u53f2\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u65b9\u5411\u952e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u2191"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u2193"),"\uff0c\u5feb\u901f\u6d4f\u89c8\u4e0a\u4e00\u6761\u548c\u4e0b\u4e00\u6761\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u9000\u51fa\u5f53\u524d Shell \u7684\u65f6\u5019\uff0cBash \u4f1a\u5c06\u7528\u6237\u5728\u5f53\u524d Shell \u7684\u64cd\u4f5c\u5386\u53f2\u5199\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bash_history"),"\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u9ed8\u8ba4\u50a8\u5b58500\u4e2a\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u73af\u5883\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"HISTFILE"),"\u603b\u662f\u6307\u5411\u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo $HISTFILE\n/home/me/.bash_history\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"history"),"\u547d\u4ee4\u4f1a\u8f93\u51fa\u8fd9\u4e2a\u6587\u4ef6\u7684\u5168\u90e8\u5185\u5bb9\u3002\u7528\u6237\u53ef\u4ee5\u770b\u5230\u6700\u8fd1\u6267\u884c\u8fc7\u7684\u6240\u6709\u547d\u4ee4\uff0c\u6bcf\u6761\u547d\u4ee4\u4e4b\u524d\u90fd\u6709\u884c\u53f7\u3002\u8d8a\u8fd1\u7684\u547d\u4ee4\uff0c\u6392\u5728\u8d8a\u540e\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ history\n...\n498 echo Goodbye\n499 ls ~\n500 cd\n")),(0,a.kt)("p",null,"\u8f93\u5165\u547d\u4ee4\u65f6\uff0c\u6309\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + r"),"\u5feb\u6377\u952e\uff0c\u5c31\u53ef\u4ee5\u641c\u7d22\u64cd\u4f5c\u5386\u53f2\uff0c\u9009\u62e9\u4ee5\u524d\u6267\u884c\u8fc7\u7684\u547d\u4ee4\u3002\u8fd9\u65f6\u952e\u5165\u547d\u4ee4\u7684\u5f00\u5934\u90e8\u5206\uff0cShell \u5c31\u4f1a\u81ea\u52a8\u5728\u5386\u53f2\u6587\u4ef6\u4e2d\uff0c\u67e5\u8be2\u5e76\u663e\u793a\u6700\u8fd1\u4e00\u6761\u5339\u914d\u7684\u7ed3\u679c\uff0c\u8fd9\u65f6\u6309\u4e0b\u56de\u8f66\u952e\uff0c\u5c31\u4f1a\u6267\u884c\u90a3\u6761\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u65b9\u6cd5\u53ef\u4ee5\u5feb\u901f\u6267\u884c\u4ee5\u524d\u6267\u884c\u8fc7\u7684\u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo Hello World\nHello World\n\n$ echo Goodbye\nGoodbye\n\n$ !e\necho Goodbye\nGoodbye\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"!e"),"\u8868\u793a\u627e\u51fa\u64cd\u4f5c\u5386\u53f2\u4e4b\u4e2d\uff0c\u6700\u8fd1\u7684\u90a3\u4e00\u6761\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"e"),"\u5f00\u5934\u7684\u547d\u4ee4\u5e76\u6267\u884c\u3002Bash \u4f1a\u5148\u8f93\u51fa\u90a3\u4e00\u6761\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"echo Goodbye"),"\uff0c\u7136\u540e\u76f4\u63a5\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u540c\u7406\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"!echo"),"\u4e5f\u4f1a\u6267\u884c\u6700\u8fd1\u4e00\u6761\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"echo"),"\u5f00\u5934\u7684\u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ !echo\necho Goodbye\nGoodbye\n\n$ !echo H\necho Goodbye H\nGoodbye H\n\n$ !echo H G\necho Goodbye H G\nGoodbye H G\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"!string"),"\u8bed\u6cd5\u53ea\u4f1a\u5339\u914d\u547d\u4ee4\uff0c\u4e0d\u4f1a\u5339\u914d\u53c2\u6570\u3002\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"!echo H"),"\u4e0d\u4f1a\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"echo Hello World"),"\uff0c\u800c\u662f\u4f1a\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"echo Goodbye"),"\uff0c\u5e76\u628a\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"H"),"\u9644\u52a0\u5728\u8fd9\u6761\u547d\u4ee4\u4e4b\u540e\u3002\u540c\u7406\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"!echo H G"),"\u4e5f\u662f\u7b49\u540c\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"echo Goodbye"),"\u547d\u4ee4\u4e4b\u540e\u9644\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"H G"),"\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"!string"),"\u8bed\u6cd5\u4f1a\u6269\u5c55\u6210\u4ee5\u524d\u6267\u884c\u8fc7\u7684\u547d\u4ee4\uff0c\u6240\u4ee5\u542b\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"!"),"\u7684\u5b57\u7b26\u4e32\u653e\u5728\u53cc\u5f15\u53f7\u91cc\u9762\uff0c\u5fc5\u987b\u975e\u5e38\u5c0f\u5fc3\uff0c\u5982\u679c\u5b83\u540e\u9762\u6709\u975e\u7a7a\u683c\u7684\u5b57\u7b26\uff0c\u5c31\u5f88\u6709\u53ef\u80fd\u62a5\u9519\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "I say:\\"hello!\\""\nbash: !\\: event not found\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u62a5\u9519\uff0c\u539f\u56e0\u662f\u611f\u53f9\u53f7\u540e\u9762\u662f\u4e00\u4e2a\u53cd\u659c\u6760\uff0cBash \u4f1a\u5c1d\u8bd5\u5bfb\u627e\uff0c\u4ee5\u524d\u662f\u5426\u6267\u884c\u8fc7\u53cd\u659c\u6760\u5f00\u5934\u7684\u547d\u4ee4\uff0c\u4e00\u65e6\u627e\u4e0d\u5230\u5c31\u4f1a\u62a5\u9519\u3002\u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u5728\u611f\u53f9\u53f7\u524d\u9762\uff0c\u4e5f\u52a0\u4e0a\u53cd\u659c\u6760\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "I say:\\"hello\\!\\""\nI say:"hello\\!"\n')),(0,a.kt)("h3",{id:"history-\u547d\u4ee4"},"history \u547d\u4ee4"),(0,a.kt)("p",null,"\u524d\u9762\u8bf4\u8fc7\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"history"),"\u547d\u4ee4\u80fd\u663e\u793a\u64cd\u4f5c\u5386\u53f2\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"p"},".bash_history"),"\u6587\u4ef6\u7684\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ history\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u8be5\u547d\u4ee4\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u8bfb\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},".bash_history"),"\u6587\u4ef6\u7684\u597d\u5904\u662f\uff0c\u5b83\u4f1a\u5728\u6240\u6709\u7684\u64cd\u4f5c\u524d\u52a0\u4e0a\u884c\u53f7\uff0c\u6700\u8fd1\u7684\u64cd\u4f5c\u5728\u6700\u540e\u9762\uff0c\u884c\u53f7\u6700\u5927\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u5b9a\u5236\u73af\u5883\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"HISTTIMEFORMAT"),"\uff0c\u53ef\u4ee5\u663e\u793a\u6bcf\u4e2a\u64cd\u4f5c\u7684\u65f6\u95f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export HISTTIMEFORMAT='%F %T  '\n$ history\n1  2013-06-09 10:40:12   cat /etc/issue\n2  2013-06-09 10:40:12   clear\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"%F"),"\u76f8\u5f53\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"%Y - %m - %d"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"%T"),"\u76f8\u5f53\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"}," %H : %M : %S"),"\u3002"),(0,a.kt)("p",null,"\u53ea\u8981\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"HISTTIMEFORMAT"),"\u8fd9\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u5c31\u4f1a\u5728",(0,a.kt)("inlineCode",{parentName:"p"},".bash_history"),"\u6587\u4ef6\u4fdd\u5b58\u547d\u4ee4\u7684\u6267\u884c\u65f6\u95f4\u6233\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5c31\u4e0d\u4f1a\u4fdd\u5b58\u65f6\u95f4\u6233\u3002"),(0,a.kt)("p",null,"\u73af\u5883\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"HISTSIZE"),"\u8bbe\u7f6e\u4fdd\u5b58\u5386\u53f2\u64cd\u4f5c\u7684\u6570\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export HISTSIZE=10000\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u8bbe\u7f6e\u4fdd\u5b58\u8fc7\u53bb10000\u6761\u64cd\u4f5c\u5386\u53f2\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u5e0c\u671b\u4fdd\u5b58\u672c\u6b21\u64cd\u4f5c\u7684\u5386\u53f2\uff0c\u53ef\u4ee5\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"HISTSIZE"),"\u7b49\u4e8e0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export HISTSIZE=0\n")),(0,a.kt)("p",null,"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"HISTSIZE=0"),"\u5199\u5165\u7528\u6237\u4e3b\u76ee\u5f55\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u6587\u4ef6\uff0c\u90a3\u4e48\u5c31\u4e0d\u4f1a\u4fdd\u7559\u8be5\u7528\u6237\u7684\u64cd\u4f5c\u5386\u53f2\u3002\u5982\u679c\u5199\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/profile"),"\uff0c\u6574\u4e2a\u7cfb\u7edf\u90fd\u4e0d\u4f1a\u4fdd\u7559\u64cd\u4f5c\u5386\u53f2\u3002"),(0,a.kt)("p",null,"\u73af\u5883\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"HISTIGNORE"),"\u53ef\u4ee5\u8bbe\u7f6e\u54ea\u4e9b\u547d\u4ee4\u4e0d\u5199\u5165\u64cd\u4f5c\u5386\u53f2\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export HISTIGNORE='pwd:ls:exit'\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u8bbe\u7f6e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"pwd"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"ls"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"exit"),"\u8fd9\u4e09\u4e2a\u547d\u4ee4\u4e0d\u5199\u5165\u64cd\u4f5c\u5386\u53f2\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u641c\u7d22\u67d0\u4e2a\u4ee5\u524d\u6267\u884c\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u914d\u5408",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),"\u547d\u4ee4\u641c\u7d22\u64cd\u4f5c\u5386\u53f2\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ history | grep /usr/bin\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},".bash_history"),"\u6587\u4ef6\u91cc\u9762\uff0c\u90a3\u4e9b\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin"),"\u7684\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u64cd\u4f5c\u5386\u53f2\u7684\u6bcf\u4e00\u6761\u8bb0\u5f55\u90fd\u6709\u7f16\u53f7\u3002\u77e5\u9053\u4e86\u547d\u4ee4\u7684\u7f16\u53f7\u4ee5\u540e\uff0c\u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"\u611f\u53f9\u53f7 + \u7f16\u53f7"),"\u6267\u884c\u8be5\u547d\u4ee4\u3002\u5982\u679c\u60f3\u8981\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},".bash_history"),"\u91cc\u9762\u7684\u7b2c8\u6761\u547d\u4ee4\uff0c\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ !8\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"history"),"\u547d\u4ee4\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),"\u53c2\u6570\u53ef\u4ee5\u6e05\u9664\u64cd\u4f5c\u5386\u53f2\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ history -c\n")),(0,a.kt)("h3",{id:"\u76f8\u5173\u5feb\u6377\u952e"},"\u76f8\u5173\u5feb\u6377\u952e"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4e0e\u64cd\u4f5c\u5386\u53f2\u76f8\u5173\u7684\u5feb\u6377\u952e\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + p"),"\uff1a\u663e\u793a\u4e0a\u4e00\u4e2a\u547d\u4ee4\uff0c\u4e0e\u5411\u4e0a\u7bad\u5934\u6548\u679c\u76f8\u540c\uff08previous\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + n"),"\uff1a\u663e\u793a\u4e0b\u4e00\u4e2a\u547d\u4ee4\uff0c\u4e0e\u5411\u4e0b\u7bad\u5934\u6548\u679c\u76f8\u540c\uff08next\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + <"),"\uff1a\u663e\u793a\u7b2c\u4e00\u4e2a\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + >"),"\uff1a\u663e\u793a\u6700\u540e\u4e00\u4e2a\u547d\u4ee4\uff0c\u5373\u5f53\u524d\u7684\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + o"),"\uff1a\u6267\u884c\u5386\u53f2\u6587\u4ef6\u91cc\u9762\u7684\u5f53\u524d\u6761\u76ee\uff0c\u5e76\u81ea\u52a8\u663e\u793a\u4e0b\u4e00\u6761\u547d\u4ee4\u3002\u8fd9\u5bf9\u91cd\u590d\u6267\u884c\u67d0\u4e2a\u5e8f\u5217\u7684\u547d\u4ee4\u5f88\u6709\u5e2e\u52a9\u3002")),(0,a.kt)("p",null,"\u611f\u53f9\u53f7",(0,a.kt)("inlineCode",{parentName:"p"},"!"),"\u7684\u5feb\u6377\u952e\u5982\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!!"),"\uff1a\u6267\u884c\u4e0a\u4e00\u4e2a\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!n"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"n"),"\u4e3a\u6570\u5b57\uff0c\u6267\u884c\u5386\u53f2\u6587\u4ef6\u91cc\u9762\u884c\u53f7\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"n"),"\u7684\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!-n"),"\uff1a\u6267\u884c\u5f53\u524d\u547d\u4ee4\u4e4b\u524d",(0,a.kt)("inlineCode",{parentName:"li"},"n"),"\u6761\u7684\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!string"),"\uff1a\u6267\u884c\u6700\u8fd1\u4e00\u4e2a\u4ee5\u6307\u5b9a\u5b57\u7b26\u4e32",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\u5f00\u5934\u7684\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!?string"),"\uff1a\u6267\u884c\u6700\u8fd1\u4e00\u6761\u5305\u542b\u5b57\u7b26\u4e32",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\u7684\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!$"),"\uff1a\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!*"),"\uff1a\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6240\u6709\u53c2\u6570\uff0c\u5373\u9664\u4e86\u547d\u4ee4\u4ee5\u5916\u7684\u6240\u6709\u90e8\u5206\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"^string1^string2"),"\uff1a\u6267\u884c\u6700\u8fd1\u4e00\u6761\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"li"},"string1"),"\u7684\u547d\u4ee4\uff0c\u5c06\u5176\u66ff\u6362\u6210",(0,a.kt)("inlineCode",{parentName:"li"},"string2"),"\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"!$"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"!*"),"\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cp a.txt b.txt\n$ echo !$\nb.txt\n\n$ cp a.txt b.txt\n$ echo !*\na.txt b.txt\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"!$"),"\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"b.txt"),"\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"!*"),"\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6240\u6709\u53c2\u6570\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"a.txt b.txt"),"\uff09\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"^string1^string2"),"\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ rm /var/log/httpd/error.log\n$ ^error^access\nrm /var/log/httpd/access.log\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"^error^access"),"\u5c06\u6700\u8fd1\u4e00\u6761\u542b\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"\u7684\u547d\u4ee4\u91cc\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"\uff0c\u66ff\u6362\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"access"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u786e\u5b9a\u662f\u4ec0\u4e48\u547d\u4ee4\uff0c\u7136\u540e\u518d\u6267\u884c\uff0c\u53ef\u4ee5\u6253\u5f00",(0,a.kt)("inlineCode",{parentName:"p"},"histverify"),"\u9009\u9879\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"!"),"\u5feb\u6377\u952e\u6240\u4ea7\u751f\u7684\u547d\u4ee4\uff0c\u4f1a\u5148\u6253\u5370\u51fa\u6765\uff0c\u7b49\u5230\u7528\u6237\u6309\u4e0b\u56de\u8f66\u952e\u540e\u518d\u6267\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ shopt -s histverify\n")),(0,a.kt)("h2",{id:"\u5176\u4ed6\u5feb\u6377\u952e"},"\u5176\u4ed6\u5feb\u6377\u952e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + j"),"\uff1a\u7b49\u540c\u4e8e\u56de\u8f66\u952e\uff08LINEFEED\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + m"),"\uff1a\u7b49\u540c\u4e8e\u56de\u8f66\u952e\uff08CARRIAGE RETURN\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + o"),"\uff1a\u7b49\u540c\u4e8e\u56de\u8f66\u952e\uff0c\u5e76\u5c55\u793a\u64cd\u4f5c\u5386\u53f2\u7684\u4e0b\u4e00\u4e2a\u547d\u4ee4\u3002\xa0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + v"),"\uff1a\u5c06\u4e0b\u4e00\u4e2a\u8f93\u5165\u7684\u7279\u6b8a\u5b57\u7b26\u53d8\u6210\u5b57\u9762\u91cf\uff0c\u6bd4\u5982\u56de\u8f66\u53d8\u6210",(0,a.kt)("inlineCode",{parentName:"li"},"^M"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl + ["),"\uff1a\u7b49\u540c\u4e8e ESC\u3002\xa0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + ."),"\uff1a\u63d2\u5165\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u8bcd\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt + _"),"\uff1a\u7b49\u540c\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"Alt + ."),"\u3002")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Alt + ."),"\u5feb\u6377\u952e\uff0c\u5bf9\u4e8e\u5f88\u957f\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u6709\u65f6\u4f1a\u975e\u5e38\u65b9\u4fbf\u3002\u56e0\u4e3a Unix \u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u901a\u5e38\u662f\u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir foo_bar\n$ cd #\u6309\u4e0b Alt + .\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"cd"),"\u547d\u4ee4\u540e\u6309\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"Alt + ."),"\uff0c\u5c31\u4f1a\u81ea\u52a8\u63d2\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"foo_bar"),"\u3002"))}d.isMDXComponent=!0}}]);