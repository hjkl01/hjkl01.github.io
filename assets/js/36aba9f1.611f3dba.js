"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[4524],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),k=r,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const l={},i="Bash \u542f\u52a8\u73af\u5883",s={unversionedId:"bash-tutorial/startup",id:"bash-tutorial/startup",title:"Bash \u542f\u52a8\u73af\u5883",description:"Session",source:"@site/docs/bash-tutorial/startup.md",sourceDirName:"bash-tutorial",slug:"/bash-tutorial/startup",permalink:"/docs/bash-tutorial/startup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/startup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u76ee\u5f55\u5806\u6808",permalink:"/docs/bash-tutorial/stack"},next:{title:"\u5b57\u7b26\u4e32\u64cd\u4f5c",permalink:"/docs/bash-tutorial/string"}},o={},p=[{value:"Session",id:"session",level:2},{value:"\u767b\u5f55 Session",id:"\u767b\u5f55-session",level:3},{value:"\u975e\u767b\u5f55 Session",id:"\u975e\u767b\u5f55-session",level:3},{value:".bash_logout",id:"bash_logout",level:3},{value:"\u542f\u52a8\u9009\u9879",id:"\u542f\u52a8\u9009\u9879",level:2},{value:"\u952e\u76d8\u7ed1\u5b9a",id:"\u952e\u76d8\u7ed1\u5b9a",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bash-\u542f\u52a8\u73af\u5883"},"Bash \u542f\u52a8\u73af\u5883"),(0,r.kt)("h2",{id:"session"},"Session"),(0,r.kt)("p",null,"\u7528\u6237\u6bcf\u6b21\u4f7f\u7528 Shell\uff0c\u90fd\u4f1a\u5f00\u542f\u4e00\u4e2a\u4e0e Shell \u7684 Session\uff08\u5bf9\u8bdd\uff09\u3002"),(0,r.kt)("p",null,"Session \u6709\u4e24\u79cd\u7c7b\u578b\uff1a\u767b\u5f55 Session \u548c\u975e\u767b\u5f55 Session\uff0c\u4e5f\u53ef\u4ee5\u53eb\u505a login shell \u548c non-login shell\u3002"),(0,r.kt)("h3",{id:"\u767b\u5f55-session"},"\u767b\u5f55 Session"),(0,r.kt)("p",null,"\u767b\u5f55 Session \u662f\u7528\u6237\u767b\u5f55\u7cfb\u7edf\u4ee5\u540e\uff0c\u7cfb\u7edf\u4e3a\u7528\u6237\u5f00\u542f\u7684\u539f\u59cb Session\uff0c\u901a\u5e38\u9700\u8981\u7528\u6237\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\u8fdb\u884c\u767b\u5f55\u3002"),(0,r.kt)("p",null,"\u767b\u5f55 Session \u4e00\u822c\u8fdb\u884c\u6574\u4e2a\u7cfb\u7edf\u73af\u5883\u7684\u521d\u59cb\u5316\uff0c\u542f\u52a8\u7684\u521d\u59cb\u5316\u811a\u672c\u4f9d\u6b21\u5982\u4e0b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/profile"),"\uff1a\u6240\u6709\u7528\u6237\u7684\u5168\u5c40\u914d\u7f6e\u811a\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/profile.d"),"\u76ee\u5f55\u91cc\u9762\u6240\u6709",(0,r.kt)("inlineCode",{parentName:"li"},".sh"),"\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.bash_profile"),"\uff1a\u7528\u6237\u7684\u4e2a\u4eba\u914d\u7f6e\u811a\u672c\u3002\u5982\u679c\u8be5\u811a\u672c\u5b58\u5728\uff0c\u5219\u6267\u884c\u5b8c\u5c31\u4e0d\u518d\u5f80\u4e0b\u6267\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.bash_login"),"\uff1a\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bash_profile"),"\u6ca1\u627e\u5230\uff0c\u5219\u5c1d\u8bd5\u6267\u884c\u8fd9\u4e2a\u811a\u672c\uff08C shell \u7684\u521d\u59cb\u5316\u811a\u672c\uff09\u3002\u5982\u679c\u8be5\u811a\u672c\u5b58\u5728\uff0c\u5219\u6267\u884c\u5b8c\u5c31\u4e0d\u518d\u5f80\u4e0b\u6267\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.profile"),"\uff1a\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bash_profile"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bash_login"),"\u90fd\u6ca1\u627e\u5230\uff0c\u5219\u5c1d\u8bd5\u8bfb\u53d6\u8fd9\u4e2a\u811a\u672c\uff08Bourne shell \u548c Korn shell \u7684\u521d\u59cb\u5316\u811a\u672c\uff09\u3002")),(0,r.kt)("p",null,"Linux \u53d1\u884c\u7248\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u4f1a\u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"/etc"),"\u91cc\u9762\u7684\u6587\u4ef6\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/profile"),"\uff0c\u56e0\u6b64\u4e0d\u8981\u76f4\u63a5\u4fee\u6539\u8fd9\u4e2a\u6587\u4ef6\u3002\u5982\u679c\u60f3\u4fee\u6539\u6240\u6709\u7528\u6237\u7684\u767b\u9646\u73af\u5883\uff0c\u5c31\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/profile.d"),"\u76ee\u5f55\u91cc\u9762\u65b0\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},".sh"),"\u811a\u672c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u4fee\u6539\u4f60\u4e2a\u4eba\u7684\u767b\u5f55\u73af\u5883\uff0c\u4e00\u822c\u662f\u5199\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),"\u91cc\u9762\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u5178\u578b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".bash_profile"),"\u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# .bash_profile\nPATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin\nPATH=$PATH:$HOME/bin\n\nSHELL=/bin/bash\nMANPATH=/usr/man:/usr/X11/man\nEDITOR=/usr/bin/vi\nPS1='\\h:\\w\\$ '\nPS2='> '\n\nif [ -f ~/.bashrc ]; then\n. ~/.bashrc\nfi\n\nexport PATH\nexport EDITOR\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u4e2a\u811a\u672c\u5b9a\u4e49\u4e86\u4e00\u4e9b\u6700\u57fa\u672c\u7684\u73af\u5883\u53d8\u91cf\uff0c\u7136\u540e\u6267\u884c\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bash"),"\u547d\u4ee4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"--login"),"\u53c2\u6570\uff0c\u4f1a\u5f3a\u5236\u6267\u884c\u767b\u5f55 Session \u4f1a\u6267\u884c\u7684\u811a\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash --login\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bash"),"\u547d\u4ee4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"--noprofile"),"\u53c2\u6570\uff0c\u4f1a\u8df3\u8fc7\u4e0a\u9762\u8fd9\u4e9b Profile \u811a\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash --noprofile\n")),(0,r.kt)("h3",{id:"\u975e\u767b\u5f55-session"},"\u975e\u767b\u5f55 Session"),(0,r.kt)("p",null,"\u975e\u767b\u5f55 Session \u662f\u7528\u6237\u8fdb\u5165\u7cfb\u7edf\u4ee5\u540e\uff0c\u624b\u52a8\u65b0\u5efa\u7684 Session\uff0c\u8fd9\u65f6\u4e0d\u4f1a\u8fdb\u884c\u73af\u5883\u521d\u59cb\u5316\u3002\u6bd4\u5982\uff0c\u5728\u547d\u4ee4\u884c\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),"\u547d\u4ee4\uff0c\u5c31\u4f1a\u65b0\u5efa\u4e00\u4e2a\u975e\u767b\u5f55 Session\u3002"),(0,r.kt)("p",null,"\u975e\u767b\u5f55 Session \u7684\u521d\u59cb\u5316\u811a\u672c\u4f9d\u6b21\u5982\u4e0b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/etc/bash.bashrc"),"\uff1a\u5bf9\u5168\u4f53\u7528\u6237\u6709\u6548\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.bashrc"),"\uff1a\u4ec5\u5bf9\u5f53\u524d\u7528\u6237\u6709\u6548\u3002")),(0,r.kt)("p",null,"\u5bf9\u7528\u6237\u6765\u8bf4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u901a\u5e38\u662f\u6700\u91cd\u8981\u7684\u811a\u672c\u3002\u975e\u767b\u5f55 Session \u9ed8\u8ba4\u4f1a\u6267\u884c\u5b83\uff0c\u800c\u767b\u5f55 Session \u4e00\u822c\u4e5f\u4f1a\u901a\u8fc7\u8c03\u7528\u6267\u884c\u5b83\u3002\u6bcf\u6b21\u65b0\u5efa\u4e00\u4e2a Bash \u7a97\u53e3\uff0c\u5c31\u76f8\u5f53\u4e8e\u65b0\u5efa\u4e00\u4e2a\u975e\u767b\u5f55 Session\uff0c\u6240\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u6bcf\u6b21\u90fd\u4f1a\u6267\u884c\u3002\u6ce8\u610f\uff0c\u6267\u884c\u811a\u672c\u76f8\u5f53\u4e8e\u65b0\u5efa\u4e00\u4e2a\u975e\u4e92\u52a8\u7684 Bash \u73af\u5883\uff0c\u4f46\u662f\u8fd9\u79cd\u60c5\u51b5\u4e0d\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bash"),"\u547d\u4ee4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"--norc"),"\u53c2\u6570\uff0c\u53ef\u4ee5\u7981\u6b62\u5728\u975e\u767b\u5f55 Session \u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u811a\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash --norc\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bash"),"\u547d\u4ee4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"--rcfile"),"\u53c2\u6570\uff0c\u6307\u5b9a\u53e6\u4e00\u4e2a\u811a\u672c\u4ee3\u66ff",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash --rcfile testrc\n")),(0,r.kt)("h3",{id:"bash_logout"},".bash_logout"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"~/.bash_logout"),"\u811a\u672c\u5728\u6bcf\u6b21\u9000\u51fa Session \u65f6\u6267\u884c\uff0c\u901a\u5e38\u7528\u6765\u505a\u4e00\u4e9b\u6e05\u7406\u5de5\u4f5c\u548c\u8bb0\u5f55\u5de5\u4f5c\uff0c\u6bd4\u5982\u5220\u9664\u4e34\u65f6\u6587\u4ef6\uff0c\u8bb0\u5f55\u7528\u6237\u5728\u672c\u6b21 Session \u82b1\u8d39\u7684\u65f6\u95f4\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u9000\u51fa\u65f6\u8981\u6267\u884c\u7684\u547d\u4ee4\uff0c\u8fd9\u4e2a\u6587\u4ef6\u4e5f\u53ef\u4ee5\u4e0d\u5b58\u5728\u3002"),(0,r.kt)("h2",{id:"\u542f\u52a8\u9009\u9879"},"\u542f\u52a8\u9009\u9879"),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf Debug\uff0c\u6709\u65f6\u5728\u542f\u52a8 Bash \u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u52a0\u4e0a\u542f\u52a8\u53c2\u6570\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-n"),"\uff1a\u4e0d\u8fd0\u884c\u811a\u672c\uff0c\u53ea\u68c0\u67e5\u662f\u5426\u6709\u8bed\u6cd5\u9519\u8bef\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v"),"\uff1a\u8f93\u51fa\u6bcf\u4e00\u884c\u8bed\u53e5\u8fd0\u884c\u7ed3\u679c\u524d\uff0c\u4f1a\u5148\u8f93\u51fa\u8be5\u884c\u8bed\u53e5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-x"),"\uff1a\u6bcf\u4e00\u4e2a\u547d\u4ee4\u5904\u7406\u4e4b\u524d\uff0c\u5148\u8f93\u51fa\u8be5\u547d\u4ee4\uff0c\u518d\u6267\u884c\u8be5\u547d\u4ee4\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash -n scriptname\n$ bash -v scriptname\n$ bash -x scriptname\n")),(0,r.kt)("h2",{id:"\u952e\u76d8\u7ed1\u5b9a"},"\u952e\u76d8\u7ed1\u5b9a"),(0,r.kt)("p",null,"Bash \u5141\u8bb8\u7528\u6237\u5b9a\u4e49\u81ea\u5df1\u7684\u5feb\u6377\u952e\u3002\u5168\u5c40\u7684\u952e\u76d8\u7ed1\u5b9a\u6587\u4ef6\u9ed8\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/inputrc"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u4e3b\u76ee\u5f55\u521b\u5efa\u81ea\u5df1\u7684\u952e\u76d8\u7ed1\u5b9a\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},".inputrc"),"\u6587\u4ef6\u3002\u5982\u679c\u5b9a\u4e49\u4e86\u8fd9\u4e2a\u6587\u4ef6\uff0c\u9700\u8981\u5728\u5176\u4e2d\u52a0\u5165\u4e0b\u9762\u8fd9\u884c\uff0c\u4fdd\u8bc1\u5168\u5c40\u7ed1\u5b9a\u4e0d\u4f1a\u88ab\u9057\u6f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$include /etc/inputrc\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".inputrc"),"\u6587\u4ef6\u91cc\u9762\u7684\u5feb\u6377\u952e\uff0c\u53ef\u4ee5\u50cf\u8fd9\u6837\u5b9a\u4e49\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},'"\\C-t":"pwd\\n"'),"\u8868\u793a\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl + t"),"\u7ed1\u5b9a\u4e3a\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"pwd"),"\u547d\u4ee4\u3002"))}c.isMDXComponent=!0}}]);