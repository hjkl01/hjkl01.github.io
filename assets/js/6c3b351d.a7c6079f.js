"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[3673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,d=m["".concat(o,".").concat(c)]||m[c]||s[c]||r;return n?l.createElement(d,i(i({ref:t},k),{},{components:n})):l.createElement(d,i({ref:t},k))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={},i="\u8fdb\u7a0b\u7ba1\u7406",p={unversionedId:"archives/process",id:"archives/process",title:"\u8fdb\u7a0b\u7ba1\u7406",description:"ps",source:"@site/notes/bash-tutorial/archives/process.md",sourceDirName:"archives",slug:"/archives/process",permalink:"/bash-tutorial/archives/process",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u547d\u540d\u7ba1\u9053",permalink:"/bash-tutorial/archives/named-pipe"},next:{title:"\u91cd\u5b9a\u5411",permalink:"/bash-tutorial/archives/redirection"}},o={},u=[{value:"ps",id:"ps",level:2},{value:"top",id:"top",level:2},{value:"jobs",id:"jobs",level:2},{value:"fg",id:"fg",level:2},{value:"bg",id:"bg",level:2},{value:"kill",id:"kill",level:2},{value:"killall",id:"killall",level:2},{value:"\u5176\u4ed6\u8fdb\u7a0b\u76f8\u5173\u547d\u4ee4",id:"\u5176\u4ed6\u8fdb\u7a0b\u76f8\u5173\u547d\u4ee4",level:2}],k={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8fdb\u7a0b\u7ba1\u7406"},"\u8fdb\u7a0b\u7ba1\u7406"),(0,a.kt)("h2",{id:"ps"},"ps"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ps"),"\u547d\u4ee4\u7528\u6765\u5217\u51fa\u8fdb\u7a0b\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ps\nPID TTY           TIME CMD\n5198 pts/1    00:00:00 bash\n10129 pts/1   00:00:00 ps\n")),(0,a.kt)("p",null,"\u4e0d\u5e26\u4efb\u4f55\u53c2\u6570\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ps"),"\u53ea\u5217\u51fa\u4e0e\u5f53\u524dSession\u76f8\u5173\u7684\u8fdb\u7a0b\u3002\u8f93\u51fa\u7ed3\u679c\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"PID"),"\u662f\u8fdb\u7a0bID\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"TTY"),"\u662f\u8fdb\u7a0b\u7684\u7ec8\u7aef\u53f7\uff08\u5982\u679c\u663e\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"?"),"\uff0c\u5219\u8868\u793a\u8fdb\u7a0b\u6ca1\u6709\u7ec8\u7aef\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"TIME"),"\u662f\u6d88\u8017\u7684CPU\u65f6\u95f4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"CMD"),"\u662f\u89e6\u53d1\u8fdb\u7a0b\u7684\u547d\u4ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u53c2\u6570\u5217\u51fa\u6240\u6709\u8fdb\u7a0b\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec\u4e0d\u5728\u5f53\u524dSession\u7684\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ps x\nPID TTY   STAT   TIME COMMAND\n2799 ?    Ssl    0:00 /usr/libexec/bonobo-activation-server \u2013ac\n2820 ?    Sl     0:01 /usr/libexec/evolution-data-server-1.10 --\n")),(0,a.kt)("p",null,"\u8fd9\u65f6\u7684\u8f93\u51fa\u7ed3\u679c\uff0c\u4f1a\u591a\u51fa",(0,a.kt)("inlineCode",{parentName:"p"},"STAT"),"\u4e00\u680f\uff0c\u8868\u793a\u72b6\u6001\u3002\u5b83\u7684\u5404\u79cd\u503c\u5982\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"R")," \u6b63\u5728\u8fd0\u884c\u6216\u51c6\u5907\u8fd0\u884c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"S")," \u6b63\u5728\u7761\u7720\uff0c\u5373\u6ca1\u6709\u8fd0\u884c\uff0c\u6b63\u5728\u7b49\u5f85\u4e00\u4e2a\u4e8b\u4ef6\u5524\u9192"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"D")," \u4e0d\u53ef\u4e2d\u65ad\u7761\u7720\u3002\u8fdb\u7a0b\u6b63\u5728\u7b49\u5f85 I/O\uff0c\u6bd4\u5982\u78c1\u76d8\u9a71\u52a8\u5668\u7684I/O"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"T")," \u5df2\u505c\u6b62\uff0c\u5373\u8fdb\u7a0b\u505c\u6b62\u8fd0\u884c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Z")," \u201c\u50f5\u5c38\u201d\u8fdb\u7a0b\u3002\u5373\u8fd9\u662f\u4e00\u4e2a\u5df2\u7ecf\u7ec8\u6b62\u7684\u5b50\u8fdb\u7a0b\uff0c\u4f46\u7236\u8fdb\u7a0b\u8fd8\u6ca1\u6709\u6e05\u7a7a\u5b83\uff08\u6ca1\u6709\u628a\u5b50\u8fdb\u7a0b\u4ece\u8fdb\u7a0b\u8868\u4e2d\u5220\u9664\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<")," \u9ad8\u4f18\u5148\u7ea7\u8fdb\u7a0b\u3002\u8fd9\u53ef\u80fd\u4f1a\u6388\u4e88\u4e00\u4e2a\u8fdb\u7a0b\u66f4\u591a\u91cd\u8981\u7684\u8d44\u6e90\uff0c\u7ed9\u5b83\u66f4\u591a\u7684 CPU \u65f6\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"N")," \u4f4e\u4f18\u5148\u7ea7\u8fdb\u7a0b\u3002\u4e00\u4e2a\u4f4e\u4f18\u5148\u7ea7\u8fdb\u7a0b\uff08\u4e00\u4e2a\u201c\u597d\u201d\u8fdb\u7a0b\uff09\u53ea\u6709\u5f53\u5176\u5b83\u9ad8\u4f18\u5148\u7ea7\u8fdb\u7a0b\u6267\u884c\u4e4b\u540e\uff0c\u624d\u4f1a\u5f97\u5230\u5904\u7406\u5668\u65f6\u95f4\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"aux"),"\u53c2\u6570\u53ef\u4ee5\u663e\u793a\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ps aux\nUSER   PID  %CPU  %MEM     VSZ    RSS  TTY   STAT   START   TIME  COMMAND\nroot     1   0.0   0.0    2136    644  ?     Ss     Mar05   0:31  init\nroot     2   0.0   0.0       0      0  ?     S&lt;     Mar05   0:00  [kt]\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5305\u542b\u7684\u5217\u7684\u542b\u4e49\u5982\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"USER")," \u7528\u6237ID\uff0c\u8868\u793a\u8fdb\u7a0b\u7684\u6240\u6709\u8005"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%CPU")," \u767e\u5206\u6bd4\u8868\u793a\u7684 CPU \u4f7f\u7528\u7387"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%MEM")," \u767e\u5206\u6bd4\u8868\u793a\u7684\u5185\u5b58\u4f7f\u7528\u7387"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VSZ")," \u865a\u62df\u5185\u5b58\u5927\u5c0f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RSS")," \u8fdb\u7a0b\u5360\u7528\u7684\u7269\u7406\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u4ee5\u5343\u5b57\u8282\u4e3a\u5355\u4f4d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"START")," \u8fdb\u7a0b\u8fd0\u884c\u7684\u8d77\u59cb\u65f6\u95f4\u3002\u82e5\u8d85\u8fc724\u5c0f\u65f6\uff0c\u5219\u7528\u5929\u8868\u793a\u3002")),(0,a.kt)("h2",{id:"top"},"top"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"top"),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u673a\u5668\u7684\u5f53\u524d\u72b6\u6001\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ top\n")),(0,a.kt)("p",null,"\u5b83\u7684\u8f93\u51fa\u7ed3\u679c\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u6700\u4e0a\u9762\u662f\u7cfb\u7edf\u6982\u8981\uff0c\u4e0b\u9762\u662f\u8fdb\u7a0b\u5217\u8868\uff0c\u4ee5 CPU \u7684\u4f7f\u7528\u7387\u6392\u5e8f\u3002"),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u662f\u52a8\u6001\u66f4\u65b0\u7684\uff0c\u9ed8\u8ba4\u6bcf\u4e09\u5206\u949f\u66f4\u65b0\u4e00\u6b21\u3002"),(0,a.kt)("h2",{id:"jobs"},"jobs"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jobs"),"\u547d\u4ee4\u7528\u6765\u67e5\u770b\u540e\u53f0\u4efb\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ jobs\n[1]+ Running            xlogo &\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e4b\u4e2d\uff0c\u6bcf\u4e2a\u540e\u53f0\u4efb\u52a1\u4f1a\u6709\u4e00\u4e2a\u7f16\u53f7\u3002\u4e0a\u9762\u7ed3\u679c\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"xlogo"),"\u7684\u7f16\u53f7\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"+"),"\u8868\u793a\u6b63\u5728\u8fd0\u884c\u3002"),(0,a.kt)("h2",{id:"fg"},"fg"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fg"),"\u547d\u4ee4\u7528\u4e8e\u5c06\u540e\u53f0\u4efb\u52a1\u5207\u6362\u5230\u524d\u53f0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ fg %1\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fg"),"\u547d\u4ee4\u4e4b\u540e\uff0c\u8ddf\u968f\u7740\u4e00\u4e2a\u767e\u5206\u53f7\u548c\u5de5\u4f5c\u5e8f\u53f7\uff0c\u7528\u6765\u6307\u5b9a\u5207\u6362\u54ea\u4e00\u4e2a\u540e\u53f0\u4efb\u52a1\u3002\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u540e\u53f0\u4efb\u52a1\uff0c\u90a3\u4e48",(0,a.kt)("inlineCode",{parentName:"p"},"fg"),"\u547d\u4ee4\u53ef\u4ee5\u4e0d\u5e26\u53c2\u6570\u3002"),(0,a.kt)("h2",{id:"bg"},"bg"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bg"),"\u547d\u4ee4\u7528\u4e8e\u5c06\u4e00\u4e2a\u6682\u505c\u7684\u524d\u53f0\u4efb\u52a1\uff0c\u8f6c\u79fb\u5230\u540e\u53f0\u3002\u53ea\u6709\u6682\u505c\u7684\u4efb\u52a1\uff0c\u624d\u80fd\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"bg"),"\u547d\u4ee4\uff0c\u56e0\u4e3a\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1\uff0c\u547d\u4ee4\u884c\u662f\u65e0\u6cd5\u8f93\u5165\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ bg %1\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + z"),"\u53ef\u4ee5\u6682\u505c\u6b63\u5728\u8fd0\u884c\u7684\u524d\u53f0\u4efb\u52a1\u3002"),(0,a.kt)("h2",{id:"kill"},"kill"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kill"),"\u547d\u4ee4\u7528\u4e8e\u6740\u6b7b\u8fdb\u7a0b\u3002\u5b83\u7684\u53c2\u6570\u662f\u8fdb\u7a0bID\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kill 28401\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kill"),"\u547d\u4ee4\u7684\u5b9e\u8d28\u662f\u64cd\u4f5c\u7cfb\u7edf\u5411\u8fdb\u7a0b\u53d1\u9001\u4fe1\u53f7\u3002\u5728\u4f7f\u7528 Ctrl-c \u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a\u53eb\u505a INT\uff08\u4e2d\u65ad\uff09\u7684\u4fe1\u53f7\uff1b\u5f53\u4f7f\u7528 Ctrl-z \u65f6\uff0c\u5219\u53d1\u9001\u4e00\u4e2a\u53eb\u505a TSTP\uff08\u7ec8\u7aef\u505c\u6b62\uff09\u7684\u4fe1\u53f7\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kill"),"\u547d\u4ee4\u53ef\u4ee5\u7528\u6765\u5411\u8fdb\u7a0b\u53d1\u9001\u6307\u5b9a\u4fe1\u53f7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kill [-signal] PID\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u5e38\u89c1\u4fe1\u53f7\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HUP\uff1a\u7f16\u53f71\uff0c\u8868\u793a\u6302\u8d77\u3002\u53d1\u9001\u8fd9\u4e2a\u4fe1\u53f7\u5230\u524d\u53f0\u7a0b\u5e8f\uff0c\u7a0b\u5e8f\u4f1a\u7ec8\u6b62\u3002\u8bb8\u591a\u5b88\u62a4\u8fdb\u7a0b\u4e5f\u4f7f\u7528\u8fd9\u4e2a\u4fe1\u53f7\uff0c\u6765\u91cd\u65b0\u521d\u59cb\u5316\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5f53\u53d1\u9001\u8fd9\u4e2a\u4fe1\u53f7\u5230\u4e00\u4e2a\u5b88\u62a4\u8fdb\u7a0b\u540e\uff0c \u8fd9\u4e2a\u8fdb\u7a0b\u4f1a\u91cd\u65b0\u542f\u52a8\uff0c\u5e76\u4e14\u91cd\u65b0\u8bfb\u53d6\u5b83\u7684\u914d\u7f6e\u6587\u4ef6\u3002Apache \u7f51\u7edc\u670d\u52a1\u5668\u5b88\u62a4\u8fdb\u7a0b\u5c31\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("li",{parentName:"ul"},"INT\uff1a\u7f16\u53f72\uff0c\u4e2d\u65ad\u3002\u5b9e\u73b0\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl-c"),"\u4e00\u6837\u7684\u529f\u80fd\uff0c\u7531\u7ec8\u7aef\u53d1\u9001\u3002\u901a\u5e38\uff0c\u5b83\u4f1a\u7ec8\u6b62\u4e00\u4e2a\u7a0b\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ul"},"KILL\uff1a\u7f16\u53f79\uff0c\u6740\u6b7b\u3002\u8fdb\u7a0b\u53ef\u80fd\u9009\u62e9\u5ffd\u7565\u8fd9\u4e2a\u4fe1\u53f7\u3002\u6240\u4ee5\uff0c\u64cd\u4f5c\u7cfb\u7edf\u4e0d\u53d1\u9001\u8be5\u4fe1\u53f7\u5230\u76ee\u6807\u8fdb\u7a0b\uff0c\u800c\u662f\u5185\u6838\u7acb\u5373\u7ec8\u6b62\u8fd9\u4e2a\u8fdb\u7a0b\u3002\u5f53\u4e00\u4e2a\u8fdb\u7a0b\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u7ec8\u6b62\u7684\u65f6\u5019\uff0c\u5b83\u6ca1\u6709\u673a\u4f1a\u53bb\u505a\u4e9b\u201c\u6e05\u7406\u201d\u5de5\u4f5c\uff0c\u6216\u8005\u662f\u4fdd\u5b58\u52b3\u52a8\u6210\u679c\u3002\u56e0\u4e3a\u8fd9\u4e2a\u539f\u56e0\uff0c\u628a KILL \u4fe1\u53f7\u770b\u4f5c\u6740\u624b\u950f\uff0c\u5f53\u5176\u5b83\u7ec8\u6b62\u4fe1\u53f7\u5931\u8d25\u540e\uff0c\u518d\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("li",{parentName:"ul"},"TERM\uff1a\u7f16\u53f715\uff0c\u7ec8\u6b62\u3002\u8fd9\u662f kill \u547d\u4ee4\u53d1\u9001\u7684\u9ed8\u8ba4\u4fe1\u53f7\u3002\u5982\u679c\u7a0b\u5e8f\u4ecd\u7136\u201c\u6d3b\u7740\u201d\uff0c\u53ef\u4ee5\u63a5\u53d7\u4fe1\u53f7\uff0c\u90a3\u4e48\u8fd9\u4e2a\u4fe1\u53f7\u7ec8\u6b62\u3002"),(0,a.kt)("li",{parentName:"ul"},"CONT\uff1a\u7f16\u53f718\uff0c\u7ee7\u7eed\u3002\u5728\u505c\u6b62\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u8fdb\u7a0b\u6062\u590d\u8fd0\u884c\u3002"),(0,a.kt)("li",{parentName:"ul"},"STOP\uff1a\u7f16\u53f719\uff0c\u505c\u6b62\u3002\u8fd9\u4e2a\u4fe1\u53f7\u5bfc\u81f4\u8fdb\u7a0b\u505c\u6b62\u8fd0\u884c\uff0c\u800c\u6ca1\u6709\u7ec8\u6b62\u3002\u50cf KILL \u4fe1\u53f7\uff0c\u5b83\u4e0d\u88ab \u53d1\u9001\u5230\u76ee\u6807\u8fdb\u7a0b\uff0c\u56e0\u6b64\u5b83\u4e0d\u80fd\u88ab\u5ffd\u7565\u3002"),(0,a.kt)("li",{parentName:"ul"},"QUIT\uff1a\u7f16\u53f73\uff0c\u9000\u51fa"),(0,a.kt)("li",{parentName:"ul"},"SEGV\uff1a\u7f16\u53f711\uff0c\u6bb5\u9519\u8bef\u3002\u5982\u679c\u4e00\u4e2a\u7a0b\u5e8f\u975e\u6cd5\u4f7f\u7528\u5185\u5b58\uff0c\u5c31\u4f1a\u53d1\u9001\u8fd9\u4e2a\u4fe1\u53f7\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u7a0b\u5e8f\u8bd5\u56fe\u5199\u5165\u5185\u5b58\uff0c\u800c\u8fd9\u4e2a\u5185\u5b58\u7a7a\u95f4\u662f\u4e0d\u5141\u8bb8\u6b64\u7a0b\u5e8f\u5199\u5165\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"TSTP\uff1a\u7f16\u53f720\uff0c\u7ec8\u7aef\u505c\u6b62\u3002\u5f53\u6309\u4e0b Ctrl-z \u7ec4\u5408\u952e\u540e\uff0c\u7ec8\u7aef\u53d1\u9001\u8fd9\u4e2a\u4fe1\u53f7\u3002\u4e0d\u50cf STOP \u4fe1\u53f7\uff0c TSTP \u4fe1\u53f7\u7531\u76ee\u6807\u8fdb\u7a0b\u63a5\u6536\uff0c\u4e14\u53ef\u80fd\u88ab\u5ffd\u7565\u3002"),(0,a.kt)("li",{parentName:"ul"},"WINCH\uff1a\u7f16\u53f728\uff0c\u6539\u53d8\u7a97\u53e3\u5927\u5c0f\u3002\u5f53\u6539\u53d8\u7a97\u53e3\u5927\u5c0f\u65f6\uff0c\u7cfb\u7edf\u4f1a\u53d1\u9001\u8fd9\u4e2a\u4fe1\u53f7\u3002 \u4e00\u4e9b\u7a0b\u5e8f\uff0c\u50cf top \u548c less \u7a0b\u5e8f\u4f1a\u54cd\u5e94\u8fd9\u4e2a\u4fe1\u53f7\uff0c\u6309\u7167\u65b0\u7a97\u53e3\u7684\u5c3a\u5bf8\uff0c\u5237\u65b0\u663e\u793a\u7684\u5185\u5bb9\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-l"),"\u53c2\u6570\u53ef\u4ee5\u5217\u51fa\u6240\u6709\u4fe1\u53f7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kill -l\n")),(0,a.kt)("h2",{id:"killall"},"killall"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"killall"),"\u547d\u4ee4\u7528\u4e8e\u5411\u6307\u5b9a\u7684\u7a0b\u5e8f\u6216\u7528\u6237\u53d1\u9001\u4fe1\u53f7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ killall [-u user] [-signal] name\n")),(0,a.kt)("h2",{id:"\u5176\u4ed6\u8fdb\u7a0b\u76f8\u5173\u547d\u4ee4"},"\u5176\u4ed6\u8fdb\u7a0b\u76f8\u5173\u547d\u4ee4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pstree")," \u8f93\u51fa\u6811\u578b\u7ed3\u6784\u7684\u8fdb\u7a0b\u5217\u8868\uff0c\u8fd9\u4e2a\u5217\u8868\u5c55\u793a\u4e86\u8fdb\u7a0b\u95f4\u7236/\u5b50\u5173\u7cfb\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vmstat")," \u8f93\u51fa\u4e00\u4e2a\u7cfb\u7edf\u8d44\u6e90\u4f7f\u7528\u5feb\u7167\uff0c\u5305\u62ec\u5185\u5b58\uff0c\u4ea4\u6362\u5206\u533a\u548c\u78c1\u76d8 I/O\u3002 \u4e3a\u4e86\u770b\u5230\u8fde\u7eed\u7684\u663e\u793a\u7ed3\u679c\uff0c\u5219\u5728\u547d\u4ee4\u540d\u540e\u52a0\u4e0a\u5ef6\u65f6\u7684\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002\u4f8b\u5982\uff0c\u201cvmstat 5\u201d\u3002 \u7ec8\u6b62\u8f93\u51fa\uff0c\u6309\u4e0b Ctrl-c \u7ec4\u5408\u952e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xload")," \u4e00\u4e2a\u56fe\u5f62\u754c\u9762\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u753b\u51fa\u7cfb\u7edf\u8d1f\u8f7d\u7684\u56fe\u5f62\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tload")," \u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"xload"),"\u7a0b\u5e8f\u76f8\u4f3c\uff0c\u4f46\u662f\u5728\u7ec8\u7aef\u4e2d\u753b\u51fa\u56fe\u5f62\u3002\u4f7f\u7528 Ctrl-c\uff0c\u6765\u7ec8\u6b62\u8f93\u51fa\u3002")))}s.isMDXComponent=!0}}]);