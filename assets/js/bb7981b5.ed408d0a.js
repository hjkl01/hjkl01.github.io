"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1141],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},k=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,c=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(c,i(i({ref:n},k),{},{components:t})):a.createElement(c,i({ref:n},k))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},71937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(83117),r=(t(67294),t(3905));const l={},i="awk",p={unversionedId:"bash-tutorial/archives/commands/awk",id:"bash-tutorial/archives/commands/awk",title:"awk",description:"awk\u662f\u5904\u7406\u6587\u672c\u6587\u4ef6\u7684\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u51e0\u4e4e\u6240\u6709 Linux \u7cfb\u7edf\u90fd\u81ea\u5e26\u8fd9\u4e2a\u7a0b\u5e8f\u3002",source:"@site/docs/bash-tutorial/archives/commands/awk.md",sourceDirName:"bash-tutorial/archives/commands",slug:"/bash-tutorial/archives/commands/awk",permalink:"/docs/bash-tutorial/archives/commands/awk",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/commands/awk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"alias",permalink:"/docs/bash-tutorial/archives/commands/alias"},next:{title:"cal",permalink:"/docs/bash-tutorial/archives/commands/cal"}},o={},s=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"\u6761\u4ef6",id:"\u6761\u4ef6",level:2},{value:"if \u8bed\u53e5",id:"if-\u8bed\u53e5",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],k={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"awk"},"awk"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/AWK"},(0,r.kt)("inlineCode",{parentName:"a"},"awk")),"\u662f\u5904\u7406\u6587\u672c\u6587\u4ef6\u7684\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u51e0\u4e4e\u6240\u6709 Linux \u7cfb\u7edf\u90fd\u81ea\u5e26\u8fd9\u4e2a\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u5b83\u4f9d\u6b21\u5904\u7406\u6587\u4ef6\u7684\u6bcf\u4e00\u884c\uff0c\u5e76\u8bfb\u53d6\u91cc\u9762\u7684\u6bcf\u4e00\u4e2a\u5b57\u6bb5\u3002\u5bf9\u4e8e\u65e5\u5fd7\u3001CSV \u90a3\u6837\u7684\u6bcf\u884c\u683c\u5f0f\u76f8\u540c\u7684\u6587\u672c\u6587\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u53ef\u80fd\u662f\u6700\u65b9\u4fbf\u7684\u5de5\u5177\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.wangbase.com/blogimg/asset/201811/bg2018110702.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u5176\u5b9e\u4e0d\u4ec5\u4ec5\u662f\u5de5\u5177\u8f6f\u4ef6\uff0c\u8fd8\u662f\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\u3002\u4e0d\u8fc7\uff0c\u8fd9\u91cc\u53ea\u4ecb\u7ecd\u5b83\u7684\u547d\u4ee4\u884c\u7528\u6cd5\uff0c\u5bf9\u4e8e\u5927\u591a\u6570\u573a\u5408\uff0c\u5e94\u8be5\u8db3\u591f\u7528\u4e86\u3002"),(0,r.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u7684\u57fa\u672c\u7528\u6cd5\u5c31\u662f\u4e0b\u9762\u7684\u5f62\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u683c\u5f0f\n$ awk \u52a8\u4f5c \u6587\u4ef6\u540d\n\n# \u793a\u4f8b\n$ awk '{print $0}' demo.txt\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"demo.txt"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u6240\u8981\u5904\u7406\u7684\u6587\u672c\u6587\u4ef6\u3002\u524d\u9762\u5355\u5f15\u53f7\u5185\u90e8\u6709\u4e00\u4e2a\u5927\u62ec\u53f7\uff0c\u91cc\u9762\u5c31\u662f\u6bcf\u4e00\u884c\u7684\u5904\u7406\u52a8\u4f5c",(0,r.kt)("inlineCode",{parentName:"p"},"print $0"),"\u3002\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"print"),"\u662f\u6253\u5370\u547d\u4ee4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"$0"),"\u4ee3\u8868\u5f53\u524d\u884c\uff0c\u56e0\u6b64\u4e0a\u9762\u547d\u4ee4\u7684\u6267\u884c\u7ed3\u679c\uff0c\u5c31\u662f\u628a\u6bcf\u4e00\u884c\u539f\u6837\u6253\u5370\u51fa\u6765\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u5148\u7528\u6807\u51c6\u8f93\u5165\uff08stdin\uff09\u6f14\u793a\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 'this is a test' | awk '{print $0}'\nthis is a test\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"print $0"),"\u5c31\u662f\u628a\u6807\u51c6\u8f93\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"this is a test"),"\uff0c\u91cd\u65b0\u6253\u5370\u4e86\u4e00\u904d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u4f1a\u6839\u636e\u7a7a\u683c\u548c\u5236\u8868\u7b26\uff0c\u5c06\u6bcf\u4e00\u884c\u5206\u6210\u82e5\u5e72\u5b57\u6bb5\uff0c\u4f9d\u6b21\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"$1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"$2"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"$3"),"\u4ee3\u8868\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u3001\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\u3001\u7b2c\u4e09\u4e2a\u5b57\u6bb5\u7b49\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 'this is a test' | awk '{print $3}'\na\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"$3"),"\u4ee3\u8868",(0,r.kt)("inlineCode",{parentName:"p"},"this is a test"),"\u7684\u7b2c\u4e09\u4e2a\u5b57\u6bb5",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\uff0c\u4e3a\u4e86\u4fbf\u4e8e\u4e3e\u4f8b\uff0c\u6211\u4eec\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),"\u6587\u4ef6\u4fdd\u5b58\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"demo.txt"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root:x:0:0:root:/root:/usr/bin/zsh\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nsync:x:4:65534:sync:/bin:/bin/sync\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u7684\u5b57\u6bb5\u5206\u9694\u7b26\u662f\u5192\u53f7\uff08",(0,r.kt)("inlineCode",{parentName:"p"},":"),"\uff09\uff0c\u6240\u4ee5\u8981\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"-F"),"\u53c2\u6570\u6307\u5b9a\u5206\u9694\u7b26\u4e3a\u5192\u53f7\u3002\u7136\u540e\uff0c\u624d\u80fd\u63d0\u53d6\u5230\u5b83\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ awk -F ':' '{ print $1 }' demo.txt\nroot\ndaemon\nbin\nsys\nsync\n")),(0,r.kt)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,r.kt)("p",null,"\u9664\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"$ + \u6570\u5b57"),"\u8868\u793a\u67d0\u4e2a\u5b57\u6bb5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u8fd8\u63d0\u4f9b\u5176\u4ed6\u4e00\u4e9b\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"NF"),"\u8868\u793a\u5f53\u524d\u884c\u6709\u591a\u5c11\u4e2a\u5b57\u6bb5\uff0c\u56e0\u6b64",(0,r.kt)("inlineCode",{parentName:"p"},"$NF"),"\u5c31\u4ee3\u8868\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 'this is a test' | awk '{print $NF}'\ntest\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$(NF-1)"),"\u4ee3\u8868\u5012\u6570\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ awk -F ':' '{print $1, $(NF-1)}' demo.txt\nroot /root\ndaemon /usr/sbin\nbin /bin\nsys /dev\nsync /bin\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"print"),"\u547d\u4ee4\u91cc\u9762\u7684\u9017\u53f7\uff0c\u8868\u793a\u8f93\u51fa\u7684\u65f6\u5019\uff0c\u4e24\u4e2a\u90e8\u5206\u4e4b\u95f4\u4f7f\u7528\u7a7a\u683c\u5206\u9694\u3002"),(0,r.kt)("p",null,"\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"NR"),"\u8868\u793a\u5f53\u524d\u5904\u7406\u7684\u662f\u7b2c\u51e0\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ awk -F ':' '{print NR \") \" $1}' demo.txt\n1) root\n2) daemon\n3) bin\n4) sys\n5) sync\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"print"),"\u547d\u4ee4\u91cc\u9762\uff0c\u5982\u679c\u539f\u6837\u8f93\u51fa\u5b57\u7b26\uff0c\u8981\u653e\u5728\u53cc\u5f15\u53f7\u91cc\u9762\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u7684\u5176\u4ed6\u5185\u7f6e\u53d8\u91cf\u5982\u4e0b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FILENAME"),"\uff1a\u5f53\u524d\u6587\u4ef6\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FS"),"\uff1a\u5b57\u6bb5\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u662f\u7a7a\u683c\u548c\u5236\u8868\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RS"),"\uff1a\u884c\u5206\u9694\u7b26\uff0c\u7528\u4e8e\u5206\u5272\u6bcf\u4e00\u884c\uff0c\u9ed8\u8ba4\u662f\u6362\u884c\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OFS"),"\uff1a\u8f93\u51fa\u5b57\u6bb5\u7684\u5206\u9694\u7b26\uff0c\u7528\u4e8e\u6253\u5370\u65f6\u5206\u9694\u5b57\u6bb5\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u683c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ORS"),"\uff1a\u8f93\u51fa\u8bb0\u5f55\u7684\u5206\u9694\u7b26\uff0c\u7528\u4e8e\u6253\u5370\u65f6\u5206\u9694\u8bb0\u5f55\uff0c\u9ed8\u8ba4\u4e3a\u6362\u884c\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OFMT"),"\uff1a\u6570\u5b57\u8f93\u51fa\u7684\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"\uff05.6g"),"\u3002"))),(0,r.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5185\u7f6e\u51fd\u6570\uff0c\u65b9\u4fbf\u5bf9\u539f\u59cb\u6570\u636e\u7684\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"toupper()"),"\u7528\u4e8e\u5c06\u5b57\u7b26\u8f6c\u4e3a\u5927\u5199\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ awk -F ':' '{ print toupper($1) }' demo.txt\nROOT\nDAEMON\nBIN\nSYS\nSYNC\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u8f93\u51fa\u65f6\u90fd\u53d8\u6210\u4e86\u5927\u5199\u3002"),(0,r.kt)("p",null,"\u5176\u4ed6\u5e38\u7528\u51fd\u6570\u5982\u4e0b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tolower()"),"\uff1a\u5b57\u7b26\u8f6c\u4e3a\u5c0f\u5199\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"length()"),"\uff1a\u8fd4\u56de\u5b57\u7b26\u4e32\u957f\u5ea6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"substr()"),"\uff1a\u8fd4\u56de\u5b50\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sin()"),"\uff1a\u6b63\u5f26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cos()"),"\uff1a\u4f59\u5f26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqrt()"),"\uff1a\u5e73\u65b9\u6839\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rand()"),"\uff1a\u968f\u673a\u6570\u3002"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u5185\u7f6e\u51fd\u6570\u7684\u5b8c\u6574\u5217\u8868\uff0c\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/gawk/manual/html_node/Built_002din.html#Built_002din"},"\u624b\u518c"),"\u3002"),(0,r.kt)("h2",{id:"\u6761\u4ef6"},"\u6761\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u5141\u8bb8\u6307\u5b9a\u8f93\u51fa\u6761\u4ef6\uff0c\u53ea\u8f93\u51fa\u7b26\u5408\u6761\u4ef6\u7684\u884c\u3002"),(0,r.kt)("p",null,"\u8f93\u51fa\u6761\u4ef6\u8981\u5199\u5728\u52a8\u4f5c\u7684\u524d\u9762\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ awk '\u6761\u4ef6 \u52a8\u4f5c' \u6587\u4ef6\u540d\n")),(0,r.kt)("p",null,"\u8bf7\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ awk -F ':' '/usr/ {print $1}' demo.txt\nroot\ndaemon\nbin\nsys\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"print"),"\u547d\u4ee4\u524d\u9762\u662f\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u53ea\u8f93\u51fa\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"usr"),"\u7684\u884c\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u53ea\u8f93\u51fa\u5947\u6570\u884c\uff0c\u4ee5\u53ca\u8f93\u51fa\u7b2c\u4e09\u884c\u4ee5\u540e\u7684\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8f93\u51fa\u5947\u6570\u884c\n$ awk -F ':' 'NR % 2 == 1 {print $1}' demo.txt\nroot\nbin\nsync\n\n# \u8f93\u51fa\u7b2c\u4e09\u884c\u4ee5\u540e\u7684\u884c\n$ awk -F ':' 'NR >3 {print $1}' demo.txt\nsys\nsync\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u8f93\u51fa\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u7b49\u4e8e\u6307\u5b9a\u503c\u7684\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ awk -F ':' '$1 == \"root\" {print $1}' demo.txt\nroot\n\n$ awk -F ':' '$1 == \"root\" || $1 == \"bin\" {print $1}' demo.txt\nroot\nbin\n")),(0,r.kt)("h2",{id:"if-\u8bed\u53e5"},"if \u8bed\u53e5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"awk"),"\u63d0\u4f9b\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"\u7ed3\u6784\uff0c\u7528\u4e8e\u7f16\u5199\u590d\u6742\u7684\u6761\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ awk -F ':' '{if ($1 > \"m\") print $1}' demo.txt\nroot\nsys\nsync\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u8f93\u51fa\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5927\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"m"),"\u7684\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"if"),"\u7ed3\u6784\u8fd8\u53ef\u4ee5\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"else"),"\u90e8\u5206\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ awk -F ':' '{if ($1 > \"m\") print $1; else print \"---\"}' demo.txt\nroot\n---\n---\nsys\nsync\n")),(0,r.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gregable.com/2010/09/why-you-should-know-just-little-awk.html"},"An Awk tutorial by Example"),", Greg Grothaus"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://likegeeks.com/awk-command/"},"30 Examples for Awk Command in Text Processing"),", Mokhtar Ebrahim")))}m.isMDXComponent=!0}}]);