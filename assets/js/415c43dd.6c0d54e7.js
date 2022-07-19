"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,m=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),N=o(n),s=l,d=N["".concat(m,".").concat(s)]||N[s]||u[s]||i;return n?a.createElement(d,r(r({ref:t},k),{},{components:n})):a.createElement(d,r({ref:t},k))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=N;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},9236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const i={},r="\u547d\u4ee4\u63d0\u793a\u7b26",p={unversionedId:"prompt",id:"prompt",title:"\u547d\u4ee4\u63d0\u793a\u7b26",description:"\u7528\u6237\u8fdb\u5165 Bash \u4ee5\u540e\uff0cBash \u4f1a\u663e\u793a\u4e00\u4e2a\u547d\u4ee4\u63d0\u793a\u7b26\uff0c\u7528\u6765\u63d0\u793a\u7528\u6237\u5728\u8be5\u4f4d\u7f6e\u540e\u9762\u8f93\u5165\u547d\u4ee4\u3002",source:"@site/notes/bash-tutorial/prompt.md",sourceDirName:".",slug:"/prompt",permalink:"/bash-tutorial/prompt",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mktemp \u547d\u4ee4\uff0ctrap \u547d\u4ee4",permalink:"/bash-tutorial/mktemp"},next:{title:"\u5f15\u53f7\u548c\u8f6c\u4e49",permalink:"/bash-tutorial/quotation"}},m={},o=[{value:"\u73af\u5883\u53d8\u91cf PS1",id:"\u73af\u5883\u53d8\u91cf-ps1",level:2},{value:"\u989c\u8272",id:"\u989c\u8272",level:2},{value:"\u73af\u5883\u53d8\u91cf PS2\uff0cPS3\uff0cPS4",id:"\u73af\u5883\u53d8\u91cf-ps2ps3ps4",level:2}],k={toc:o};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u547d\u4ee4\u63d0\u793a\u7b26"},"\u547d\u4ee4\u63d0\u793a\u7b26"),(0,l.kt)("p",null,"\u7528\u6237\u8fdb\u5165 Bash \u4ee5\u540e\uff0cBash \u4f1a\u663e\u793a\u4e00\u4e2a\u547d\u4ee4\u63d0\u793a\u7b26\uff0c\u7528\u6765\u63d0\u793a\u7528\u6237\u5728\u8be5\u4f4d\u7f6e\u540e\u9762\u8f93\u5165\u547d\u4ee4\u3002"),(0,l.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf-ps1"},"\u73af\u5883\u53d8\u91cf PS1"),(0,l.kt)("p",null,"\u547d\u4ee4\u63d0\u793a\u7b26\u901a\u5e38\u662f\u7f8e\u5143\u7b26\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"$"),"\uff0c\u5bf9\u4e8e\u6839\u7528\u6237\u5219\u662f\u4e95\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"#"),"\u3002\u8fd9\u4e2a\u7b26\u53f7\u662f\u73af\u5883\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"PS1"),"\u51b3\u5b9a\u7684\uff0c\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u770b\u5230\u5f53\u524d\u547d\u4ee4\u63d0\u793a\u7b26\u7684\u5b9a\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo $PS1\n")),(0,l.kt)("p",null,"Bash \u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u547d\u4ee4\u63d0\u793a\u7b26\uff0c\u53ea\u8981\u6539\u5199\u8fd9\u4e2a\u53d8\u91cf\u5373\u53ef\u3002\u6539\u5199\u540e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"PS1"),"\uff0c\u53ef\u4ee5\u653e\u5728\u7528\u6237\u7684 Bash \u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"),"\u91cc\u9762\uff0c\u4ee5\u540e\u65b0\u5efa Bash \u5bf9\u8bdd\u65f6\uff0c\u65b0\u7684\u63d0\u793a\u7b26\u5c31\u4f1a\u751f\u6548\u3002\u8981\u5728\u5f53\u524d\u7a97\u53e3\u770b\u5230\u4fee\u6539\u540e\u7684\u63d0\u793a\u7b26\uff0c\u53ef\u4ee5\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ source ~/.bashrc\n")),(0,l.kt)("p",null,"\u547d\u4ee4\u63d0\u793a\u7b26\u7684\u5b9a\u4e49\uff0c\u53ef\u4ee5\u5305\u542b\u7279\u6b8a\u7684\u8f6c\u4e49\u5b57\u7b26\uff0c\u8868\u793a\u7279\u5b9a\u5185\u5bb9\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\a"),"\uff1a\u54cd\u94c3\uff0c\u8ba1\u7b97\u673a\u53d1\u51fa\u4e00\u8bb0\u58f0\u97f3\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\d"),"\uff1a\u4ee5\u661f\u671f\u3001\u6708\u3001\u65e5\u683c\u5f0f\u8868\u793a\u5f53\u524d\u65e5\u671f\uff0c\u4f8b\u5982\u201cMon May 26\u201d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\h"),"\uff1a\u672c\u673a\u7684\u4e3b\u673a\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\H"),"\uff1a\u5b8c\u6574\u7684\u4e3b\u673a\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\j"),"\uff1a\u8fd0\u884c\u5728\u5f53\u524d Shell \u4f1a\u8bdd\u7684\u5de5\u4f5c\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\l"),"\uff1a\u5f53\u524d\u7ec8\u7aef\u8bbe\u5907\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\n"),"\uff1a\u4e00\u4e2a\u6362\u884c\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\r"),"\uff1a\u4e00\u4e2a\u56de\u8f66\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\s"),"\uff1aShell \u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\t"),"\uff1a24\u5c0f\u65f6\u5236\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"hours:minutes:seconds"),"\u683c\u5f0f\u8868\u793a\u5f53\u524d\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\T"),"\uff1a12\u5c0f\u65f6\u5236\u7684\u5f53\u524d\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\@"),"\uff1a12\u5c0f\u65f6\u5236\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"AM/PM"),"\u683c\u5f0f\u8868\u793a\u5f53\u524d\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\A"),"\uff1a24\u5c0f\u65f6\u5236\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"hours:minutes"),"\u8868\u793a\u5f53\u524d\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\u"),"\uff1a\u5f53\u524d\u7528\u6237\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\v"),"\uff1aShell \u7684\u7248\u672c\u53f7\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\V"),"\uff1aShell \u7684\u7248\u672c\u53f7\u548c\u53d1\u5e03\u53f7\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\w"),"\uff1a\u5f53\u524d\u7684\u5de5\u4f5c\u8def\u5f84\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\W"),"\uff1a\u5f53\u524d\u76ee\u5f55\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\!"),"\uff1a\u5f53\u524d\u547d\u4ee4\u5728\u547d\u4ee4\u5386\u53f2\u4e2d\u7684\u7f16\u53f7\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\#"),"\uff1a\u5f53\u524d shell \u4f1a\u8bdd\u4e2d\u7684\u547d\u4ee4\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\$"),"\uff1a\u666e\u901a\u7528\u6237\u663e\u793a\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"$"),"\u5b57\u7b26\uff0c\u6839\u7528\u6237\u663e\u793a\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"#"),"\u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\["),"\uff1a\u975e\u6253\u5370\u5b57\u7b26\u5e8f\u5217\u7684\u5f00\u59cb\u6807\u5fd7\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\]"),"\uff1a\u975e\u6253\u5370\u5b57\u7b26\u5e8f\u5217\u7684\u7ed3\u675f\u6807\u5fd7\u3002")),(0,l.kt)("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"[\\u@\\h \\W]\\$"),"\u8fd9\u4e2a\u63d0\u793a\u7b26\u5b9a\u4e49\uff0c\u663e\u793a\u51fa\u6765\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"[user@host ~]$"),"\uff08\u5177\u4f53\u7684\u663e\u793a\u5185\u5bb9\u53d6\u51b3\u4e8e\u4f60\u7684\u7cfb\u7edf\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[user@host ~]$ echo $PS1\n[\\u@\\h \\W]\\$\n")),(0,l.kt)("p",null,"\u6539\u5199",(0,l.kt)("inlineCode",{parentName:"p"},"PS1"),"\u53d8\u91cf\uff0c\u5c31\u53ef\u4ee5\u6539\u53d8\u8fd9\u4e2a\u547d\u4ee4\u63d0\u793a\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ PS1="\\A \\h \\$ "\n17:33 host $\n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"$"),"\u540e\u9762\u6700\u597d\u8ddf\u4e00\u4e2a\u7a7a\u683c\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c\u7528\u6237\u7684\u8f93\u5165\u4e0e\u63d0\u793a\u7b26\u5c31\u4e0d\u4f1a\u8fde\u5728\u4e00\u8d77\u3002"),(0,l.kt)("h2",{id:"\u989c\u8272"},"\u989c\u8272"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u547d\u4ee4\u63d0\u793a\u7b26\u662f\u663e\u793a\u7ec8\u7aef\u9884\u5b9a\u4e49\u7684\u989c\u8272\u3002Bash \u5141\u8bb8\u81ea\u5b9a\u4e49\u63d0\u793a\u7b26\u989c\u8272\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u8bbe\u5b9a\u5176\u540e\u6587\u672c\u7684\u989c\u8272\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;30m"),"\uff1a\u9ed1\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;30m"),"\uff1a\u6df1\u7070\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;31m"),"\uff1a\u7ea2\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;31m"),"\uff1a\u6d45\u7ea2\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;32m"),"\uff1a\u7eff\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;32m"),"\uff1a\u6d45\u7eff\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;33m"),"\uff1a\u68d5\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;33m"),"\uff1a\u9ec4\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;34m"),"\uff1a\u84dd\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;34m"),"\uff1a\u6d45\u84dd\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;35m"),"\uff1a\u7c89\u7ea2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;35m"),"\uff1a\u6d45\u7c89\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;36m"),"\uff1a\u9752\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;36m"),"\uff1a\u6d45\u9752\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;37m"),"\uff1a\u6d45\u7070\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;37m"),"\uff1a\u767d\u8272")),(0,l.kt)("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u5982\u679c\u8981\u5c06\u63d0\u793a\u7b26\u8bbe\u4e3a\u7ea2\u8272\uff0c\u53ef\u4ee5\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"PS1"),"\u8bbe\u6210\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PS1='\\[\\033[0;31m\\]<\\u@\\h \\W>\\$'\n")),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u4e0a\u9762\u8fd9\u6837\u8bbe\u7f6e\u4ee5\u540e\uff0c\u7528\u6237\u5728\u63d0\u793a\u7b26\u540e\u9762\u8f93\u5165\u7684\u6587\u672c\u4e5f\u662f\u7ea2\u8272\u7684\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c \u53ef\u4ee5\u5728\u7ed3\u5c3e\u6dfb\u52a0\u53e6\u4e00\u4e2a\u7279\u6b8a\u4ee3\u7801",(0,l.kt)("inlineCode",{parentName:"p"},"\\[\\033[00m\\]"),"\uff0c\u8868\u793a\u5c06\u5176\u540e\u7684\u6587\u672c\u6062\u590d\u5230\u9ed8\u8ba4\u989c\u8272\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PS1='\\[\\033[0;31m\\]<\\u@\\h \\W>\\$\\[\\033[00m\\]'\n")),(0,l.kt)("p",null,"\u9664\u4e86\u8bbe\u7f6e\u524d\u666f\u989c\u8272\uff0cBash \u8fd8\u5141\u8bb8\u8bbe\u7f6e\u80cc\u666f\u989c\u8272\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;40m"),"\uff1a\u84dd\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;44m"),"\uff1a\u9ed1\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;41m"),"\uff1a\u7ea2\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;45m"),"\uff1a\u7c89\u7ea2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;42m"),"\uff1a\u7eff\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;46m"),"\uff1a\u9752\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[0;43m"),"\uff1a\u68d5\u8272"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\033[1;47m"),"\uff1a\u6d45\u7070\u8272")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5e26\u6709\u7ea2\u8272\u80cc\u666f\u7684\u63d0\u793a\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PS1='\\[\\033[0;41m\\]<\\u@\\h \\W>\\$\\[\\033[0m\\] '\n")),(0,l.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf-ps2ps3ps4"},"\u73af\u5883\u53d8\u91cf PS2\uff0cPS3\uff0cPS4"),(0,l.kt)("p",null,"\u9664\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"PS1"),"\uff0cBash \u8fd8\u63d0\u4f9b\u4e86\u63d0\u793a\u7b26\u76f8\u5173\u7684\u53e6\u5916\u4e09\u4e2a\u73af\u5883\u53d8\u91cf\u3002"),(0,l.kt)("p",null,"\u73af\u5883\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"PS2"),"\u662f\u547d\u4ee4\u884c\u6298\u884c\u8f93\u5165\u65f6\u7cfb\u7edf\u7684\u63d0\u793a\u7b26\uff0c\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"> "),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "hello\n> world"\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"hello"),"\u4ee5\u540e\u6309\u4e0b\u56de\u8f66\u952e\uff0c\u7cfb\u7edf\u4f1a\u63d0\u793a\u7ee7\u7eed\u8f93\u5165\u3002\u8fd9\u65f6\uff0c\u7b2c\u4e8c\u884c\u663e\u793a\u7684\u63d0\u793a\u7b26\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"PS2"),"\u5b9a\u4e49\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"> "),"\u3002"),(0,l.kt)("p",null,"\u73af\u5883\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"PS3"),"\u662f\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"select"),"\u547d\u4ee4\u65f6\uff0c\u7cfb\u7edf\u8f93\u5165\u83dc\u5355\u7684\u63d0\u793a\u7b26\u3002"),(0,l.kt)("p",null,"\u73af\u5883\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"PS4"),"\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"+ "),"\u3002\u5b83\u662f\u4f7f\u7528 Bash \u7684",(0,l.kt)("inlineCode",{parentName:"p"},"-x"),"\u53c2\u6570\u6267\u884c\u811a\u672c\u65f6\uff0c\u6bcf\u4e00\u884c\u547d\u4ee4\u5728\u6267\u884c\u524d\u90fd\u4f1a\u5148\u6253\u5370\u51fa\u6765\uff0c\u5e76\u4e14\u5728\u884c\u9996\u51fa\u73b0\u7684\u90a3\u4e2a\u63d0\u793a\u7b26\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u662f\u811a\u672c",(0,l.kt)("inlineCode",{parentName:"p"},"test.sh"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\necho "hello world"\n')),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"-x"),"\u53c2\u6570\u6267\u884c\u8fd9\u4e2a\u811a\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash -x test.sh\n+ echo 'hello world'\nhello world\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u8f93\u51fa\u7684\u7b2c\u4e00\u884c\u524d\u9762\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"+ "),"\uff0c\u8fd9\u5c31\u662f\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"PS4"),"\u5b9a\u4e49\u7684\u3002"))}u.isMDXComponent=!0}}]);