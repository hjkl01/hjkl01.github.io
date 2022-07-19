"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2236],{3905:(e,l,n)=>{n.d(l,{Zo:()=>o,kt:()=>m});var t=n(7294);function a(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function r(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?r(Object(n),!0).forEach((function(l){a(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function i(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),h=function(e){var l=t.useContext(s),n=l;return e&&(n="function"==typeof e?e(l):p(p({},l),e)),n},o=function(e){var l=h(e.components);return t.createElement(s.Provider,{value:l},e.children)},u={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},k=t.forwardRef((function(e,l){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),k=h(n),m=a,c=k["".concat(s,".").concat(m)]||k[m]||u[m]||r;return n?t.createElement(c,p(p({ref:l},o),{},{components:n})):t.createElement(c,p({ref:l},o))}));function m(e,l){var n=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=k;var i={};for(var s in l)hasOwnProperty.call(l,s)&&(i[s]=l[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var h=2;h<r;h++)p[h]=n[h];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3156:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var t=n(7462),a=(n(7294),n(3905));const r={},p="Bash \u7b80\u4ecb",i={unversionedId:"index",id:"index",title:"Bash \u7b80\u4ecb",description:"Bash \u662f Unix \u7cfb\u7edf\u548c Linux \u7cfb\u7edf\u7684\u4e00\u79cd Shell\uff08\u547d\u4ee4\u884c\u73af\u5883\uff09\uff0c\u662f\u76ee\u524d\u7edd\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\u7684\u9ed8\u8ba4 Shell\u3002",source:"@site/notes/bash-tutorial/index.md",sourceDirName:".",slug:"/",permalink:"/bash-tutorial/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bash \u7684\u57fa\u672c\u8bed\u6cd5",permalink:"/bash-tutorial/grammar"},next:{title:"\u5faa\u73af",permalink:"/bash-tutorial/loop"}},s={},h=[{value:"Shell \u7684\u542b\u4e49",id:"shell-\u7684\u542b\u4e49",level:2},{value:"Shell \u7684\u79cd\u7c7b",id:"shell-\u7684\u79cd\u7c7b",level:2},{value:"\u547d\u4ee4\u884c\u73af\u5883",id:"\u547d\u4ee4\u884c\u73af\u5883",level:2},{value:"\u7ec8\u7aef\u6a21\u62df\u5668",id:"\u7ec8\u7aef\u6a21\u62df\u5668",level:3},{value:"\u547d\u4ee4\u884c\u63d0\u793a\u7b26",id:"\u547d\u4ee4\u884c\u63d0\u793a\u7b26",level:3},{value:"\u8fdb\u5165\u548c\u9000\u51fa\u65b9\u6cd5",id:"\u8fdb\u5165\u548c\u9000\u51fa\u65b9\u6cd5",level:3},{value:"Shell \u548c Bash \u7684\u5386\u53f2",id:"shell-\u548c-bash-\u7684\u5386\u53f2",level:2}],o={toc:h};function u(e){let{components:l,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},o,n,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bash-\u7b80\u4ecb"},"Bash \u7b80\u4ecb"),(0,a.kt)("p",null,"Bash \u662f Unix \u7cfb\u7edf\u548c Linux \u7cfb\u7edf\u7684\u4e00\u79cd Shell\uff08\u547d\u4ee4\u884c\u73af\u5883\uff09\uff0c\u662f\u76ee\u524d\u7edd\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\u7684\u9ed8\u8ba4 Shell\u3002"),(0,a.kt)("h2",{id:"shell-\u7684\u542b\u4e49"},"Shell \u7684\u542b\u4e49"),(0,a.kt)("p",null,"\u5b66\u4e60 Bash\uff0c\u9996\u5148\u9700\u8981\u7406\u89e3 Shell \u662f\u4ec0\u4e48\u3002Shell \u8fd9\u4e2a\u5355\u8bcd\u7684\u539f\u610f\u662f\u201c\u5916\u58f3\u201d\uff0c\u8ddf kernel\uff08\u5185\u6838\uff09\u76f8\u5bf9\u5e94\uff0c\u6bd4\u55bb\u5185\u6838\u5916\u9762\u7684\u4e00\u5c42\uff0c\u5373\u7528\u6237\u8ddf\u5185\u6838\u4ea4\u4e92\u7684\u5bf9\u8bdd\u754c\u9762\u3002"),(0,a.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0cShell \u8fd9\u4e2a\u8bcd\u6709\u591a\u79cd\u542b\u4e49\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0cShell \u662f\u4e00\u4e2a\u7a0b\u5e8f\uff0c\u63d0\u4f9b\u4e00\u4e2a\u4e0e\u7528\u6237\u5bf9\u8bdd\u7684\u73af\u5883\u3002\u8fd9\u4e2a\u73af\u5883\u53ea\u6709\u4e00\u4e2a\u547d\u4ee4\u63d0\u793a\u7b26\uff0c\u8ba9\u7528\u6237\u4ece\u952e\u76d8\u8f93\u5165\u547d\u4ee4\uff0c\u6240\u4ee5\u53c8\u79f0\u4e3a\u547d\u4ee4\u884c\u73af\u5883\uff08command line interface\uff0c\u7b80\u5199\u4e3a CLI\uff09\u3002Shell \u63a5\u6536\u5230\u7528\u6237\u8f93\u5165\u7684\u547d\u4ee4\uff0c\u5c06\u547d\u4ee4\u9001\u5165\u64cd\u4f5c\u7cfb\u7edf\u6267\u884c\uff0c\u5e76\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9\u7528\u6237\u3002\u672c\u4e66\u4e2d\uff0c\u9664\u975e\u7279\u522b\u6307\u660e\uff0cShell \u6307\u7684\u5c31\u662f\u547d\u4ee4\u884c\u73af\u5883\u3002"),(0,a.kt)("p",null,"\u5176\u6b21\uff0cShell \u662f\u4e00\u4e2a\u547d\u4ee4\u89e3\u91ca\u5668\uff0c\u89e3\u91ca\u7528\u6237\u8f93\u5165\u7684\u547d\u4ee4\u3002\u5b83\u652f\u6301\u53d8\u91cf\u3001\u6761\u4ef6\u5224\u65ad\u3001\u5faa\u73af\u64cd\u4f5c\u7b49\u8bed\u6cd5\uff0c\u6240\u4ee5\u7528\u6237\u53ef\u4ee5\u7528 Shell \u547d\u4ee4\u5199\u51fa\u5404\u79cd\u5c0f\u7a0b\u5e8f\uff0c\u53c8\u79f0\u4e3a\u811a\u672c\uff08script\uff09\u3002\u8fd9\u4e9b\u811a\u672c\u90fd\u901a\u8fc7 Shell \u7684\u89e3\u91ca\u6267\u884c\uff0c\u800c\u4e0d\u901a\u8fc7\u7f16\u8bd1\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0cShell \u662f\u4e00\u4e2a\u5de5\u5177\u7bb1\uff0c\u63d0\u4f9b\u4e86\u5404\u79cd\u5c0f\u5de5\u5177\uff0c\u4f9b\u7528\u6237\u65b9\u4fbf\u5730\u4f7f\u7528\u64cd\u4f5c\u7cfb\u7edf\u7684\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"shell-\u7684\u79cd\u7c7b"},"Shell \u7684\u79cd\u7c7b"),(0,a.kt)("p",null,"Shell \u6709\u5f88\u591a\u79cd\uff0c\u53ea\u8981\u80fd\u7ed9\u7528\u6237\u63d0\u4f9b\u547d\u4ee4\u884c\u73af\u5883\u7684\u7a0b\u5e8f\uff0c\u90fd\u53ef\u4ee5\u770b\u4f5c\u662f Shell\u3002"),(0,a.kt)("p",null,"\u5386\u53f2\u4e0a\uff0c\u4e3b\u8981\u7684 Shell \u6709\u4e0b\u9762\u8fd9\u4e9b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bourne Shell\uff08sh\uff09"),(0,a.kt)("li",{parentName:"ul"},"Bourne Again shell\uff08bash\uff09"),(0,a.kt)("li",{parentName:"ul"},"C Shell\uff08csh\uff09"),(0,a.kt)("li",{parentName:"ul"},"TENEX C Shell\uff08tcsh\uff09"),(0,a.kt)("li",{parentName:"ul"},"Korn shell\uff08ksh\uff09"),(0,a.kt)("li",{parentName:"ul"},"Z Shell\uff08zsh\uff09"),(0,a.kt)("li",{parentName:"ul"},"Friendly Interactive Shell\uff08fish\uff09")),(0,a.kt)("p",null,"Bash \u662f\u76ee\u524d\u6700\u5e38\u7528\u7684 Shell\uff0c\u9664\u975e\u7279\u522b\u6307\u660e\uff0c\u4e0b\u6587\u7684 Shell \u548c Bash \u5f53\u4f5c\u540c\u4e49\u8bcd\u4f7f\u7528\uff0c\u53ef\u4ee5\u4e92\u6362\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u8bbe\u5907\u7684\u9ed8\u8ba4 Shell\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo $SHELL\n/bin/bash\n")),(0,a.kt)("p",null,"\u5f53\u524d\u6b63\u5728\u4f7f\u7528\u7684 Shell \u4e0d\u4e00\u5b9a\u662f\u9ed8\u8ba4 Shell\uff0c\u4e00\u822c\u6765\u8bf4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ps"),"\u547d\u4ee4\u7ed3\u679c\u7684\u5012\u6570\u7b2c\u4e8c\u884c\u662f\u5f53\u524d Shell\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ps\n  PID TTY          TIME CMD\n 4467 pts/0    00:00:00 bash\n 5379 pts/0    00:00:00 ps\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ps"),"\u547d\u4ee4\u7ed3\u679c\u7684\u5012\u6570\u7b2c\u4e8c\u884c\u663e\u793a\uff0c\u8fd0\u884c\u7684\u547d\u4ee4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"cmd"),"\uff09\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"bash"),"\uff0c\u8868\u660e\u5f53\u524d\u6b63\u5728\u4f7f\u7528\u7684\nShell \u662f Bash\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u7684 Linux \u7cfb\u7edf\u5b89\u88c5\u7684\u6240\u6709 Shell\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/shells\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4e09\u4e2a\u547d\u4ee4\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"$"),"\u662f\u547d\u4ee4\u884c\u73af\u5883\u7684\u63d0\u793a\u7b26\uff0c\u7528\u6237\u53ea\u9700\u8981\u8f93\u5165\u63d0\u793a\u7b26\u540e\u9762\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"Linux \u5141\u8bb8\u6bcf\u4e2a\u7528\u6237\u4f7f\u7528\u4e0d\u540c\u7684 Shell\uff0c\u7528\u6237\u7684\u9ed8\u8ba4 Shell \u4e00\u822c\u90fd\u662f Bash\uff0c\u6216\u8005\u4e0e Bash \u517c\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u547d\u4ee4\u884c\u73af\u5883"},"\u547d\u4ee4\u884c\u73af\u5883"),(0,a.kt)("h3",{id:"\u7ec8\u7aef\u6a21\u62df\u5668"},"\u7ec8\u7aef\u6a21\u62df\u5668"),(0,a.kt)("p",null,"\u5982\u679c\u662f\u4e0d\u5e26\u6709\u56fe\u5f62\u73af\u5883\u7684 Linux \u7cfb\u7edf\uff08\u6bd4\u5982\u4e13\u7528\u4e8e\u670d\u52a1\u5668\u7684\u7cfb\u7edf\uff09\uff0c\u542f\u52a8\u540e\u5c31\u76f4\u63a5\u662f\u547d\u4ee4\u884c\u73af\u5883\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u73b0\u5728\u5927\u90e8\u5206\u7684 Linux \u53d1\u884c\u7248\uff0c\u5c24\u5176\u662f\u9488\u5bf9\u666e\u901a\u7528\u6237\u7684\u53d1\u884c\u7248\uff0c\u90fd\u662f\u56fe\u5f62\u73af\u5883\u3002\u7528\u6237\u767b\u5f55\u7cfb\u7edf\u540e\uff0c\u81ea\u52a8\u8fdb\u5165\u56fe\u5f62\u73af\u5883\uff0c\u9700\u8981\u81ea\u5df1\u542f\u52a8\u7ec8\u7aef\u6a21\u62df\u5668\uff0c\u624d\u80fd\u8fdb\u5165\u547d\u4ee4\u884c\u73af\u5883\u3002"),(0,a.kt)("p",null,"\u6240\u8c13\u201c\u7ec8\u7aef\u6a21\u62df\u5668\u201d\uff08terminal emulator\uff09\u5c31\u662f\u4e00\u4e2a\u6a21\u62df\u547d\u4ee4\u884c\u7a97\u53e3\u7684\u7a0b\u5e8f\uff0c\u8ba9\u7528\u6237\u5728\u4e00\u4e2a\u7a97\u53e3\u4e2d\u4f7f\u7528\u547d\u4ee4\u884c\u73af\u5883\uff0c\u5e76\u4e14\u63d0\u4f9b\u5404\u79cd\u9644\u52a0\u529f\u80fd\uff0c\u6bd4\u5982\u8c03\u6574\u989c\u8272\u3001\u5b57\u4f53\u5927\u5c0f\u3001\u884c\u8ddd\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u4e0d\u540c Linux \u53d1\u884c\u7248\uff08\u51c6\u786e\u5730\u8bf4\u662f\u4e0d\u540c\u7684\u684c\u9762\u73af\u5883\uff09\u5e26\u6709\u7684\u7ec8\u7aef\u7a0b\u5e8f\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u6bd4\u5982 KDE \u684c\u9762\u73af\u5883\u7684\u7ec8\u7aef\u7a0b\u5e8f\u662f konsole\uff0cGnome \u684c\u9762\u73af\u5883\u7684\u7ec8\u7aef\u7a0b\u5e8f\u662f gnome-terminal\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u5b89\u88c5\u7b2c\u4e09\u65b9\u7684\u7ec8\u7aef\u7a0b\u5e8f\u3002\u6240\u6709\u7ec8\u7aef\u7a0b\u5e8f\uff0c\u5c3d\u7ba1\u540d\u5b57\u4e0d\u540c\uff0c\u57fa\u672c\u529f\u80fd\u90fd\u662f\u4e00\u6837\u7684\uff0c\u5c31\u662f\u8ba9\u7528\u6237\u53ef\u4ee5\u8fdb\u5165\u547d\u4ee4\u884c\u73af\u5883\uff0c\u4f7f\u7528 Shell\u3002"),(0,a.kt)("h3",{id:"\u547d\u4ee4\u884c\u63d0\u793a\u7b26"},"\u547d\u4ee4\u884c\u63d0\u793a\u7b26"),(0,a.kt)("p",null,"\u8fdb\u5165\u547d\u4ee4\u884c\u73af\u5883\u4ee5\u540e\uff0c\u7528\u6237\u4f1a\u770b\u5230 Shell \u7684\u63d0\u793a\u7b26\u3002\u63d0\u793a\u7b26\u5f80\u5f80\u662f\u4e00\u4e32\u524d\u7f00\uff0c\u6700\u540e\u4ee5\u4e00\u4e2a\u7f8e\u5143\u7b26\u53f7",(0,a.kt)("inlineCode",{parentName:"p"},"$"),"\u7ed3\u5c3e\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u4e2a\u7b26\u53f7\u540e\u9762\u8f93\u5165\u5404\u79cd\u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[user@hostname] $\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u5b8c\u6574\u7684\u63d0\u793a\u7b26\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"[user@hostname] $"),"\uff0c\u5176\u4e2d\u524d\u7f00\u662f\u7528\u6237\u540d\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"user"),"\uff09\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"@"),"\uff0c\u518d\u52a0\u4e3b\u673a\u540d\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),"\uff09\u3002\u6bd4\u5982\uff0c\u7528\u6237\u540d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"bill"),"\uff0c\u4e3b\u673a\u540d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"home-machine"),"\uff0c\u524d\u7f00\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"bill@home-machine"),"\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u6839\u7528\u6237\uff08root\uff09\u7684\u63d0\u793a\u7b26\uff0c\u4e0d\u4ee5\u7f8e\u5143\u7b26\u53f7\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"$"),"\uff09\u7ed3\u5c3e\uff0c\u800c\u4ee5\u4e95\u53f7\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"#"),"\uff09\u7ed3\u5c3e\uff0c\u7528\u6765\u63d0\u9192\u7528\u6237\uff0c\u73b0\u5728\u5177\u6709\u6839\u6743\u9650\uff0c\u53ef\u4ee5\u6267\u884c\u5404\u79cd\u64cd\u4f5c\uff0c\u52a1\u5fc5\u5c0f\u5fc3\uff0c\u4e0d\u8981\u51fa\u73b0\u8bef\u64cd\u4f5c\u3002\u8fd9\u4e2a\u7b26\u53f7\u662f\u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49\u7684\uff0c\u8be6\u89c1\u300a\u547d\u4ee4\u63d0\u793a\u7b26\u300b\u4e00\u7ae0\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u7b80\u6d01\uff0c\u540e\u6587\u7684\u547d\u4ee4\u884c\u63d0\u793a\u7b26\u90fd\u53ea\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"$"),"\u8868\u793a\u3002"),(0,a.kt)("h3",{id:"\u8fdb\u5165\u548c\u9000\u51fa\u65b9\u6cd5"},"\u8fdb\u5165\u548c\u9000\u51fa\u65b9\u6cd5"),(0,a.kt)("p",null,"\u8fdb\u5165\u547d\u4ee4\u884c\u73af\u5883\u4ee5\u540e\uff0c\u4e00\u822c\u5c31\u5df2\u7ecf\u6253\u5f00 Bash \u4e86\u3002\u5982\u679c\u4f60\u7684 Shell \u4e0d\u662f Bash\uff0c\u53ef\u4ee5\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"bash"),"\u547d\u4ee4\u542f\u52a8 Bash\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash\n")),(0,a.kt)("p",null,"\u9000\u51fa Bash \u73af\u5883\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"exit"),"\u547d\u4ee4\uff0c\u4e5f\u53ef\u4ee5\u540c\u65f6\u6309\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + d"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ exit\n")),(0,a.kt)("p",null,"Bash \u7684\u57fa\u672c\u7528\u6cd5\u5c31\u662f\u5728\u547d\u4ee4\u884c\u8f93\u5165\u5404\u79cd\u547d\u4ee4\uff0c\u975e\u5e38\u76f4\u89c2\u3002\u4f5c\u4e3a\u7ec3\u4e60\uff0c\u53ef\u4ee5\u8bd5\u7740\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"pwd"),"\u547d\u4ee4\u3002\u6309\u4e0b\u56de\u8f66\u952e\uff0c\u5c31\u4f1a\u663e\u793a\u5f53\u524d\u6240\u5728\u7684\u76ee\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pwd\n/home/me\n")),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u5c0f\u5fc3\u8f93\u5165\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"pwe"),"\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u63d0\u793a\uff0c\u8868\u793a\u8f93\u5165\u51fa\u9519\uff0c\u6ca1\u6709\u5bf9\u5e94\u7684\u53ef\u6267\u884c\u7a0b\u5e8f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pwe\nbash: pwe\uff1a\u672a\u627e\u5230\u547d\u4ee4\n")),(0,a.kt)("h2",{id:"shell-\u548c-bash-\u7684\u5386\u53f2"},"Shell \u548c Bash \u7684\u5386\u53f2"),(0,a.kt)("p",null,"Shell \u4f34\u968f\u7740 Unix \u7cfb\u7edf\u7684\u8bde\u751f\u800c\u8bde\u751f\u3002"),(0,a.kt)("p",null,"1969\u5e74\uff0cKen Thompson \u548c Dennis Ritchie \u5f00\u53d1\u4e86\u7b2c\u4e00\u7248\u7684 Unix\u3002"),(0,a.kt)("p",null,"1971\u5e74\uff0cKen Thompson \u7f16\u5199\u4e86\u6700\u521d\u7684 Shell\uff0c\u79f0\u4e3a Thompson shell\uff0c\u7a0b\u5e8f\u540d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"sh"),"\uff0c\u65b9\u4fbf\u7528\u6237\u4f7f\u7528 Unix\u3002"),(0,a.kt)("p",null,"1973\u5e74\u81f31975\u5e74\u95f4\uff0cJohn R. Mashey \u6269\u5c55\u4e86\u6700\u521d\u7684 Thompson shell\uff0c\u6dfb\u52a0\u4e86\u7f16\u7a0b\u529f\u80fd\uff0c\u4f7f\u5f97 Shell \u6210\u4e3a\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\u3002\u8fd9\u4e2a\u7248\u672c\u7684 Shell \u79f0\u4e3a Mashey shell\u3002"),(0,a.kt)("p",null,"1976\u5e74\uff0cStephen Bourne \u7ed3\u5408 Mashey shell \u7684\u529f\u80fd\uff0c\u91cd\u5199\u4e00\u4e2a\u65b0\u7684 Shell\uff0c\u79f0\u4e3a Bourne shell\u3002"),(0,a.kt)("p",null,"1978\u5e74\uff0c\u52a0\u5dde\u5927\u5b66\u4f2f\u514b\u5229\u5206\u6821\u7684 Bill Joy \u5f00\u53d1\u4e86 C shell\uff0c\u4e3a Shell \u63d0\u4f9b C \u8bed\u8a00\u7684\u8bed\u6cd5\uff0c\u7a0b\u5e8f\u540d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"csh"),"\u3002\u5b83\u662f\u7b2c\u4e00\u4e2a\u771f\u6b63\u66ff\u4ee3",(0,a.kt)("inlineCode",{parentName:"p"},"sh"),"\u7684 UNIX shell\uff0c\u88ab\u5408\u5e76\u5230 Berkeley UNIX \u7684 2BSD \u7248\u672c\u4e2d\u3002"),(0,a.kt)("p",null,"1979\u5e74\uff0cUNIX \u7b2c\u4e03\u7248\u53d1\u5e03\uff0c\u5185\u7f6e\u4e86 Bourne Shell\uff0c\u5bfc\u81f4\u5b83\u6210\u4e3a Unix \u7684\u9ed8\u8ba4 Shell\u3002\u6ce8\u610f\uff0cThompson shell\u3001Mashey shell \u548c Bourne shell \u90fd\u662f\u8d1d\u5c14\u5b9e\u9a8c\u5ba4\u7684\u4ea7\u54c1\uff0c\u7a0b\u5e8f\u540d\u90fd\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"sh"),"\u3002\u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\uff0c\u5b83\u4eec\u662f\u540c\u4e00\u4e2a\u4e1c\u897f\uff0c\u53ea\u662f\u5e95\u5c42\u4ee3\u7801\u4e0d\u540c\u800c\u5df2\u3002"),(0,a.kt)("p",null,"1983\u5e74\uff0cDavid Korn \u5f00\u53d1\u4e86Korn shell\uff0c\u7a0b\u5e8f\u540d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ksh"),"\u3002"),(0,a.kt)("p",null,"1985\u5e74\uff0cRichard Stallman \u6210\u7acb\u4e86\u81ea\u7531\u8f6f\u4ef6\u57fa\u91d1\u4f1a\uff08FSF\uff09\uff0c\u7531\u4e8e Shell \u7684\u7248\u6743\u5c5e\u4e8e\u8d1d\u5c14\u516c\u53f8\uff0c\u6240\u4ee5\u4ed6\u51b3\u5b9a\u5199\u4e00\u4e2a\u81ea\u7531\u7248\u6743\u7684\u3001\u4f7f\u7528 GNU \u8bb8\u53ef\u8bc1\u7684 Shell \u7a0b\u5e8f\uff0c\u907f\u514d Unix \u7684\u7248\u6743\u4e89\u8bae\u3002"),(0,a.kt)("p",null,"1988\u5e74\uff0c\u81ea\u7531\u8f6f\u4ef6\u57fa\u91d1\u4f1a\u7684\u7b2c\u4e00\u4e2a\u4ed8\u85aa\u7a0b\u5e8f\u5458 Brian Fox \u5199\u4e86\u4e00\u4e2a Shell\uff0c\u529f\u80fd\u57fa\u672c\u4e0a\u662f Bourne shell \u7684\u514b\u9686\uff0c\u53eb\u505a Bourne-Again SHell\uff0c\u7b80\u79f0 Bash\uff0c\u7a0b\u5e8f\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"bash"),"\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u514d\u8d39\u4f7f\u7528\u3002\u540e\u6765\uff0c\u5b83\u9010\u6e10\u6210\u4e3a Linux \u7cfb\u7edf\u7684\u6807\u51c6 Shell\u3002"),(0,a.kt)("p",null,"1989\u5e74\uff0cBash \u53d1\u5e031.0\u7248\u3002"),(0,a.kt)("p",null,"1996\u5e74\uff0cBash \u53d1\u5e032.0\u7248\u3002"),(0,a.kt)("p",null,"2004\u5e74\uff0cBash \u53d1\u5e033.0\u7248\u3002"),(0,a.kt)("p",null,"2009\u5e74\uff0cBash \u53d1\u5e034.0\u7248\u3002"),(0,a.kt)("p",null,"2019\u5e74\uff0cBash \u53d1\u5e035.0\u7248\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"bash"),"\u547d\u4ee4\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"--version"),"\u53c2\u6570\u6216\u8005\u73af\u5883\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"$BASH_VERSION"),"\uff0c\u67e5\u770b\u672c\u673a\u7684 Bash \u7248\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash --version\nGNU bash\uff0c\u7248\u672c 5.0.3(1)-release (x86_64-pc-linux-gnu)\n\n# \u6216\u8005\n$ echo $BASH_VERSION\n5.0.3(1)-release\n")))}u.isMDXComponent=!0}}]);