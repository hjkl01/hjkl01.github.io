"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9837],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>k});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},s=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return a?t.createElement(c,p(p({ref:n},s),{},{components:a})):t.createElement(c,p({ref:n},s))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31622:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=a(83117),r=(a(67294),a(3905));const l={},p="read \u547d\u4ee4",i={unversionedId:"bash-tutorial/read",id:"bash-tutorial/read",title:"read \u547d\u4ee4",description:"\u7528\u6cd5",source:"@site/docs/bash-tutorial/read.md",sourceDirName:"bash-tutorial",slug:"/bash-tutorial/read",permalink:"/docs/bash-tutorial/read",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/read.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f15\u53f7\u548c\u8f6c\u4e49",permalink:"/docs/bash-tutorial/quotation"},next:{title:"Bash \u884c\u64cd\u4f5c",permalink:"/docs/bash-tutorial/readline"}},o={},d=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"IFS \u53d8\u91cf",id:"ifs-\u53d8\u91cf",level:2}],s={toc:d};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"read-\u547d\u4ee4"},"read \u547d\u4ee4"),(0,r.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,r.kt)("p",null,"\u6709\u65f6\uff0c\u811a\u672c\u9700\u8981\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u7531\u7528\u6237\u63d0\u4f9b\u4e00\u90e8\u5206\u6570\u636e\uff0c\u8fd9\u65f6\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u3002\u5b83\u5c06\u7528\u6237\u7684\u8f93\u5165\u5b58\u5165\u4e00\u4e2a\u53d8\u91cf\uff0c\u65b9\u4fbf\u540e\u9762\u7684\u4ee3\u7801\u4f7f\u7528\u3002\u7528\u6237\u6309\u4e0b\u56de\u8f66\u952e\uff0c\u5c31\u8868\u793a\u8f93\u5165\u7ed3\u675f\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u7684\u683c\u5f0f\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"read [-options] [variable...]\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u8bed\u6cd5\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"\u662f\u53c2\u6570\u9009\u9879\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"variable"),"\u662f\u7528\u6765\u4fdd\u5b58\u8f93\u5165\u6570\u503c\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u53d8\u91cf\u540d\u3002\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u53d8\u91cf\u540d\uff0c\u73af\u5883\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"REPLY"),"\u4f1a\u5305\u542b\u7528\u6237\u8f93\u5165\u7684\u4e00\u6574\u884c\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50",(0,r.kt)("inlineCode",{parentName:"p"},"demo.sh"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\necho -n "\u8f93\u5165\u4e00\u4e9b\u6587\u672c > "\nread text\necho "\u4f60\u7684\u8f93\u5165\uff1a$text"\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u5148\u663e\u793a\u4e00\u884c\u63d0\u793a\u6587\u672c\uff0c\u7136\u540e\u4f1a\u7b49\u5f85\u7528\u6237\u8f93\u5165\u6587\u672c\u3002\u7528\u6237\u8f93\u5165\u7684\u6587\u672c\uff0c\u5b58\u5165\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"text"),"\uff0c\u5728\u4e0b\u4e00\u884c\u663e\u793a\u51fa\u6765\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash demo.sh\n\u8f93\u5165\u4e00\u4e9b\u6587\u672c > \u4f60\u597d\uff0c\u4e16\u754c\n\u4f60\u7684\u8f93\u5165\uff1a\u4f60\u597d\uff0c\u4e16\u754c\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u53ef\u4ee5\u63a5\u53d7\u7528\u6237\u8f93\u5165\u7684\u591a\u4e2a\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\necho Please, enter your firstname and lastname\nread FN LN\necho "Hi! $LN, $FN !"\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u6839\u636e\u7528\u6237\u7684\u8f93\u5165\uff0c\u540c\u65f6\u4e3a\u4e24\u4e2a\u53d8\u91cf\u8d4b\u503c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u7528\u6237\u7684\u8f93\u5165\u9879\u5c11\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u7ed9\u51fa\u7684\u53d8\u91cf\u6570\u76ee\uff0c\u90a3\u4e48\u989d\u5916\u7684\u53d8\u91cf\u503c\u4e3a\u7a7a\u3002\u5982\u679c\u7528\u6237\u7684\u8f93\u5165\u9879\u591a\u4e8e\u5b9a\u4e49\u7684\u53d8\u91cf\uff0c\u90a3\u4e48\u591a\u4f59\u7684\u8f93\u5165\u9879\u4f1a\u5305\u542b\u5230\u6700\u540e\u4e00\u4e2a\u53d8\u91cf\u4e2d\u3002"),(0,r.kt)("p",null,"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u4e4b\u540e\u6ca1\u6709\u5b9a\u4e49\u53d8\u91cf\u540d\uff0c\u90a3\u4e48\u73af\u5883\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"REPLY"),"\u4f1a\u5305\u542b\u6240\u6709\u7684\u8f93\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n# read-single: read multiple values into default variable\necho -n "Enter one or more values > "\nread\necho "REPLY = \'$REPLY\'"\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u811a\u672c\u7684\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ read-single\nEnter one or more values > a b c d\nREPLY = 'a b c d'\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u9664\u4e86\u8bfb\u53d6\u952e\u76d8\u8f93\u5165\uff0c\u53ef\u4ee5\u7528\u6765\u8bfb\u53d6\u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\nfilename='/etc/hosts'\n\nwhile read myline\ndo\n  echo \"$myline\"\ndone < $filename\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\uff0c\u8bfb\u53d6\u4e00\u4e2a\u6587\u4ef6\u7684\u5185\u5bb9\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"done"),"\u547d\u4ee4\u540e\u9762\u7684\u5b9a\u5411\u7b26",(0,r.kt)("inlineCode",{parentName:"p"},"<"),"\uff0c\u5c06\u6587\u4ef6\u5185\u5bb9\u5bfc\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\uff0c\u6bcf\u6b21\u8bfb\u53d6\u4e00\u884c\uff0c\u5b58\u5165\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"myline"),"\uff0c\u76f4\u5230\u6587\u4ef6\u8bfb\u53d6\u5b8c\u6bd5\u3002"),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u7684\u53c2\u6570\u5982\u4e0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff081\uff09-t \u53c2\u6570")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"-t"),"\u53c2\u6570\uff0c\u8bbe\u7f6e\u4e86\u8d85\u65f6\u7684\u79d2\u6570\u3002\u5982\u679c\u8d85\u8fc7\u4e86\u6307\u5b9a\u65f6\u95f4\uff0c\u7528\u6237\u4ecd\u7136\u6ca1\u6709\u8f93\u5165\uff0c\u811a\u672c\u5c06\u653e\u5f03\u7b49\u5f85\uff0c\u7ee7\u7eed\u5411\u4e0b\u6267\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\necho -n "\u8f93\u5165\u4e00\u4e9b\u6587\u672c > "\nif read -t 3 response; then\n  echo "\u7528\u6237\u5df2\u7ecf\u8f93\u5165\u4e86"\nelse\n  echo "\u7528\u6237\u6ca1\u6709\u8f93\u5165"\nfi\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u8f93\u5165\u547d\u4ee4\u4f1a\u7b49\u5f853\u79d2\uff0c\u5982\u679c\u7528\u6237\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\u6ca1\u6709\u8f93\u5165\uff0c\u8fd9\u4e2a\u547d\u4ee4\u5c31\u4f1a\u6267\u884c\u5931\u8d25\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"\u6839\u636e\u547d\u4ee4\u7684\u8fd4\u56de\u503c\uff0c\u8f6c\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"else"),"\u4ee3\u7801\u5757\uff0c\u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u73af\u5883\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"TMOUT"),"\u4e5f\u53ef\u4ee5\u8d77\u5230\u540c\u6837\u4f5c\u7528\uff0c\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u7b49\u5f85\u7528\u6237\u8f93\u5165\u7684\u65f6\u95f4\uff08\u5355\u4f4d\u4e3a\u79d2\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ TMOUT=3\n$ read response\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e5f\u662f\u7b49\u5f853\u79d2\uff0c\u5982\u679c\u7528\u6237\u8fd8\u6ca1\u6709\u8f93\u5165\uff0c\u5c31\u4f1a\u8d85\u65f6\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff082\uff09-p \u53c2\u6570")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-p"),"\u53c2\u6570\u6307\u5b9a\u7528\u6237\u8f93\u5165\u7684\u63d0\u793a\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'read -p "Enter one or more values > "\necho "REPLY = \'$REPLY\'"\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u5148\u663e\u793a",(0,r.kt)("inlineCode",{parentName:"p"},"Enter one or more values >"),"\uff0c\u518d\u63a5\u53d7\u7528\u6237\u7684\u8f93\u5165\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff083\uff09-a \u53c2\u6570")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-a"),"\u53c2\u6570\u628a\u7528\u6237\u7684\u8f93\u5165\u8d4b\u503c\u7ed9\u4e00\u4e2a\u6570\u7ec4\uff0c\u4ece\u96f6\u53f7\u4f4d\u7f6e\u5f00\u59cb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ read -a people\nalice duchess dodo\n$ echo ${people[2]}\ndodo\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u7528\u6237\u8f93\u5165\u88ab\u8d4b\u503c\u7ed9\u4e00\u4e2a\u6570\u7ec4",(0,r.kt)("inlineCode",{parentName:"p"},"people"),"\uff0c\u8fd9\u4e2a\u6570\u7ec4\u76842\u53f7\u6210\u5458\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"dodo"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff084\uff09-n \u53c2\u6570")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n"),"\u53c2\u6570\u6307\u5b9a\u53ea\u8bfb\u53d6\u82e5\u5e72\u4e2a\u5b57\u7b26\u4f5c\u4e3a\u53d8\u91cf\u503c\uff0c\u800c\u4e0d\u662f\u6574\u884c\u8bfb\u53d6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ read -n 3 letter\nabcdefghij\n$ echo $letter\nabc\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"letter"),"\u53ea\u5305\u542b3\u4e2a\u5b57\u6bcd\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff085\uff09-e \u53c2\u6570")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e"),"\u53c2\u6570\u5141\u8bb8\u7528\u6237\u8f93\u5165\u7684\u65f6\u5019\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"readline"),"\u5e93\u63d0\u4f9b\u7684\u5feb\u6377\u952e\uff0c\u6bd4\u5982\u81ea\u52a8\u8865\u5168\u3002\u5177\u4f53\u7684\u5feb\u6377\u952e\u53ef\u4ee5\u53c2\u9605\u300a\u884c\u64cd\u4f5c\u300b\u4e00\u7ae0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\necho Please input the path to the file:\n\nread -e fileName\n\necho $fileName\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u63a5\u53d7\u7528\u6237\u8f93\u5165\u7684\u6587\u4ef6\u540d\u3002\u8fd9\u65f6\uff0c\u7528\u6237\u53ef\u80fd\u60f3\u4f7f\u7528 Tab \u952e\u7684\u6587\u4ef6\u540d\u201c\u81ea\u52a8\u8865\u5168\u201d\u529f\u80fd\uff0c\u4f46\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u7684\u8f93\u5165\u9ed8\u8ba4\u4e0d\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"readline"),"\u5e93\u7684\u529f\u80fd\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"-e"),"\u53c2\u6570\u5c31\u53ef\u4ee5\u5141\u8bb8\u7528\u6237\u4f7f\u7528\u81ea\u52a8\u8865\u5168\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff086\uff09\u5176\u4ed6\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-d delimiter"),"\uff1a\u5b9a\u4e49\u5b57\u7b26\u4e32",(0,r.kt)("inlineCode",{parentName:"li"},"delimiter"),"\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4f5c\u4e3a\u7528\u6237\u8f93\u5165\u7684\u7ed3\u675f\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u6362\u884c\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-r"),"\uff1araw \u6a21\u5f0f\uff0c\u8868\u793a\u4e0d\u628a\u7528\u6237\u8f93\u5165\u7684\u53cd\u659c\u6760\u5b57\u7b26\u89e3\u91ca\u4e3a\u8f6c\u4e49\u5b57\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-s"),"\uff1a\u4f7f\u5f97\u7528\u6237\u7684\u8f93\u5165\u4e0d\u663e\u793a\u5728\u5c4f\u5e55\u4e0a\uff0c\u8fd9\u5e38\u5e38\u7528\u4e8e\u8f93\u5165\u5bc6\u7801\u6216\u4fdd\u5bc6\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-u fd"),"\uff1a\u4f7f\u7528\u6587\u4ef6\u63cf\u8ff0\u7b26",(0,r.kt)("inlineCode",{parentName:"li"},"fd"),"\u4f5c\u4e3a\u8f93\u5165\u3002")),(0,r.kt)("h2",{id:"ifs-\u53d8\u91cf"},"IFS \u53d8\u91cf"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u8bfb\u53d6\u7684\u503c\uff0c\u9ed8\u8ba4\u662f\u4ee5\u7a7a\u683c\u5206\u9694\u3002\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"IFS"),"\uff08\u5185\u90e8\u5b57\u6bb5\u5206\u9694\u7b26\uff0cInternal Field Separator \u7684\u7f29\u5199\uff09\uff0c\u4fee\u6539\u5206\u9694\u6807\u5fd7\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IFS"),"\u7684\u9ed8\u8ba4\u503c\u662f\u7a7a\u683c\u3001Tab \u7b26\u53f7\u3001\u6362\u884c\u7b26\u53f7\uff0c\u901a\u5e38\u53d6\u7b2c\u4e00\u4e2a\uff08\u5373\u7a7a\u683c\uff09\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"IFS"),"\u5b9a\u4e49\u6210\u5192\u53f7\uff08",(0,r.kt)("inlineCode",{parentName:"p"},":"),"\uff09\u6216\u5206\u53f7\uff08",(0,r.kt)("inlineCode",{parentName:"p"},";"),"\uff09\uff0c\u5c31\u53ef\u4ee5\u5206\u9694\u4ee5\u8fd9\u4e24\u4e2a\u7b26\u53f7\u5206\u9694\u7684\u503c\uff0c\u8fd9\u5bf9\u8bfb\u53d6\u6587\u4ef6\u5f88\u6709\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n# read-ifs: read fields from a file\n\nFILE=/etc/passwd\n\nread -p "Enter a username > " user_name\nfile_info="$(grep "^$user_name:" $FILE)"\n\nif [ -n "$file_info" ]; then\n  IFS=":" read user pw uid gid name home shell <<< "$file_info"\n  echo "User = \'$user\'"\n  echo "UID = \'$uid\'"\n  echo "GID = \'$gid\'"\n  echo "Full Name = \'$name\'"\n  echo "Home Dir. = \'$home\'"\n  echo "Shell = \'$shell\'"\nelse\n  echo "No such user \'$user_name\'" >&2\n  exit 1\nfi\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"IFS"),"\u8bbe\u4e3a\u5192\u53f7\uff0c\u7136\u540e\u7528\u6765\u5206\u89e3",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),"\u6587\u4ef6\u7684\u4e00\u884c\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"IFS"),"\u7684\u8d4b\u503c\u547d\u4ee4\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u5199\u5728\u4e00\u884c\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"IFS"),"\u7684\u6539\u53d8\u4ec5\u5bf9\u540e\u9762\u7684\u547d\u4ee4\u751f\u6548\uff0c\u8be5\u547d\u4ee4\u6267\u884c\u540e",(0,r.kt)("inlineCode",{parentName:"p"},"IFS"),"\u4f1a\u81ea\u52a8\u6062\u590d\u539f\u6765\u7684\u503c\u3002\u5982\u679c\u4e0d\u5199\u5728\u4e00\u884c\uff0c\u5c31\u8981\u91c7\u7528\u4e0b\u9762\u7684\u5199\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'OLD_IFS="$IFS"\nIFS=":"\nread user pw uid gid name home shell <<< "$file_info"\nIFS="$OLD_IFS"\n')),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"<<<"),"\u662f Here \u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u5c06\u53d8\u91cf\u503c\u8f6c\u4e3a\u6807\u51c6\u8f93\u5165\uff0c\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\u547d\u4ee4\u53ea\u80fd\u89e3\u6790\u6807\u51c6\u8f93\u5165\u3002"),(0,r.kt)("p",null,"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"IFS"),"\u8bbe\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5c31\u7b49\u540c\u4e8e\u5c06\u6574\u884c\u8bfb\u5165\u4e00\u4e2a\u53d8\u91cf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\ninput="/path/to/txt/file"\nwhile IFS= read -r line\ndo\n  echo "$line"\ndone < "$input"\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u53ef\u4ee5\u9010\u884c\u8bfb\u53d6\u6587\u4ef6\uff0c\u6bcf\u4e00\u884c\u5b58\u5165\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"line"),"\uff0c\u6253\u5370\u51fa\u6765\u4ee5\u540e\u518d\u8bfb\u53d6\u4e0b\u4e00\u884c\u3002"))}u.isMDXComponent=!0}}]);