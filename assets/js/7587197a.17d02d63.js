"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[4760],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=l,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=t(83117),l=(t(67294),t(3905));const r={},o="Bash \u51fd\u6570",p={unversionedId:"bash-tutorial/function",id:"bash-tutorial/function",title:"Bash \u51fd\u6570",description:"\u672c\u7ae0\u4ecb\u7ecd Bash \u51fd\u6570\u7684\u7528\u6cd5\u3002",source:"@site/docs/bash-tutorial/function.md",sourceDirName:"bash-tutorial",slug:"/bash-tutorial/function",permalink:"/docs/bash-tutorial/function",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/function.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bash \u7684\u6a21\u5f0f\u6269\u5c55",permalink:"/docs/bash-tutorial/expansion"},next:{title:"Bash \u7684\u57fa\u672c\u8bed\u6cd5",permalink:"/docs/bash-tutorial/grammar"}},i={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u53c2\u6570\u53d8\u91cf",id:"\u53c2\u6570\u53d8\u91cf",level:2},{value:"return \u547d\u4ee4",id:"return-\u547d\u4ee4",level:2},{value:"\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\uff0clocal \u547d\u4ee4",id:"\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cflocal-\u547d\u4ee4",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bash-\u51fd\u6570"},"Bash \u51fd\u6570"),(0,l.kt)("p",null,"\u672c\u7ae0\u4ecb\u7ecd Bash \u51fd\u6570\u7684\u7528\u6cd5\u3002"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"\u51fd\u6570\uff08function\uff09\u662f\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u6709\u5229\u4e8e\u4ee3\u7801\u7684\u590d\u7528\u3002\u5b83\u4e0e\u522b\u540d\uff08alias\uff09\u7684\u533a\u522b\u662f\uff0c\u522b\u540d\u53ea\u9002\u5408\u5c01\u88c5\u7b80\u5355\u7684\u5355\u4e2a\u547d\u4ee4\uff0c\u51fd\u6570\u5219\u53ef\u4ee5\u5c01\u88c5\u590d\u6742\u7684\u591a\u884c\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u51fd\u6570\u603b\u662f\u5728\u5f53\u524d Shell \u6267\u884c\uff0c\u8fd9\u662f\u8ddf\u811a\u672c\u7684\u4e00\u4e2a\u91cd\u5927\u533a\u522b\uff0cBash \u4f1a\u65b0\u5efa\u4e00\u4e2a\u5b50 Shell \u6267\u884c\u811a\u672c\u3002\u5982\u679c\u51fd\u6570\u4e0e\u811a\u672c\u540c\u540d\uff0c\u51fd\u6570\u4f1a\u4f18\u5148\u6267\u884c\u3002\u4f46\u662f\uff0c\u51fd\u6570\u7684\u4f18\u5148\u7ea7\u4e0d\u5982\u522b\u540d\uff0c\u5373\u5982\u679c\u51fd\u6570\u4e0e\u522b\u540d\u540c\u540d\uff0c\u90a3\u4e48\u522b\u540d\u4f18\u5148\u6267\u884c\u3002"),(0,l.kt)("p",null,"Bash \u51fd\u6570\u5b9a\u4e49\u7684\u8bed\u6cd5\u6709\u4e24\u79cd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7b2c\u4e00\u79cd\nfn() {\n  # codes\n}\n\n# \u7b2c\u4e8c\u79cd\nfunction fn() {\n  # codes\n}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"fn"),"\u662f\u81ea\u5b9a\u4e49\u7684\u51fd\u6570\u540d\uff0c\u51fd\u6570\u4ee3\u7801\u5c31\u5199\u5728\u5927\u62ec\u53f7\u4e4b\u4e2d\u3002\u8fd9\u4e24\u79cd\u5199\u6cd5\u662f\u7b49\u4ef7\u7684\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u51fd\u6570\u7684\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'hello() {\n  echo "Hello $1"\n}\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u51fd\u6570\u4f53\u91cc\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"$1"),"\u8868\u793a\u51fd\u6570\u8c03\u7528\u65f6\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u8c03\u7528\u65f6\uff0c\u5c31\u76f4\u63a5\u5199\u51fd\u6570\u540d\uff0c\u53c2\u6570\u8ddf\u5728\u51fd\u6570\u540d\u540e\u9762\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ hello world\nHello world\n")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u591a\u884c\u51fd\u6570\u7684\u4f8b\u5b50\uff0c\u663e\u793a\u5f53\u524d\u65e5\u671f\u65f6\u95f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'today() {\n  echo -n "Today\'s date is: "\n  date +"%A, %B %-d, %Y"\n}\n')),(0,l.kt)("p",null,"\u5220\u9664\u4e00\u4e2a\u51fd\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"unset"),"\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"unset -f functionName\n")),(0,l.kt)("p",null,"\u67e5\u770b\u5f53\u524d Shell \u5df2\u7ecf\u5b9a\u4e49\u7684\u6240\u6709\u51fd\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"declare"),"\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ declare -f\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"declare"),"\u547d\u4ee4\u4e0d\u4ec5\u4f1a\u8f93\u51fa\u51fd\u6570\u540d\uff0c\u8fd8\u4f1a\u8f93\u51fa\u6240\u6709\u5b9a\u4e49\u3002\u8f93\u51fa\u987a\u5e8f\u662f\u6309\u7167\u51fd\u6570\u540d\u7684\u5b57\u6bcd\u8868\u987a\u5e8f\u3002\u7531\u4e8e\u4f1a\u8f93\u51fa\u5f88\u591a\u5185\u5bb9\uff0c\u6700\u597d\u901a\u8fc7\u7ba1\u9053\u547d\u4ee4\u914d\u5408",(0,l.kt)("inlineCode",{parentName:"p"},"more"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"less"),"\u4f7f\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"declare"),"\u547d\u4ee4\u8fd8\u652f\u6301\u67e5\u770b\u5355\u4e2a\u51fd\u6570\u7684\u5b9a\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ declare -f functionName\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"declare -F"),"\u53ef\u4ee5\u8f93\u51fa\u6240\u6709\u5df2\u7ecf\u5b9a\u4e49\u7684\u51fd\u6570\u540d\uff0c\u4e0d\u542b\u51fd\u6570\u4f53\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ declare -F\n")),(0,l.kt)("h2",{id:"\u53c2\u6570\u53d8\u91cf"},"\u53c2\u6570\u53d8\u91cf"),(0,l.kt)("p",null,"\u51fd\u6570\u4f53\u5185\u53ef\u4ee5\u4f7f\u7528\u53c2\u6570\u53d8\u91cf\uff0c\u83b7\u53d6\u51fd\u6570\u53c2\u6570\u3002\u51fd\u6570\u7684\u53c2\u6570\u53d8\u91cf\uff0c\u4e0e\u811a\u672c\u53c2\u6570\u53d8\u91cf\u662f\u4e00\u81f4\u7684\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$1"),"~",(0,l.kt)("inlineCode",{parentName:"li"},"$9"),"\uff1a\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u5230\u7b2c9\u4e2a\u7684\u53c2\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$0"),"\uff1a\u51fd\u6570\u6240\u5728\u7684\u811a\u672c\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$#"),"\uff1a\u51fd\u6570\u7684\u53c2\u6570\u603b\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$@"),"\uff1a\u51fd\u6570\u7684\u5168\u90e8\u53c2\u6570\uff0c\u53c2\u6570\u4e4b\u95f4\u4f7f\u7528\u7a7a\u683c\u5206\u9694\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$*"),"\uff1a\u51fd\u6570\u7684\u5168\u90e8\u53c2\u6570\uff0c\u53c2\u6570\u4e4b\u95f4\u4f7f\u7528\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"li"},"$IFS"),"\u503c\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5206\u9694\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u683c\uff0c\u4f46\u662f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u51fd\u6570\u7684\u53c2\u6570\u591a\u4e8e9\u4e2a\uff0c\u90a3\u4e48\u7b2c10\u4e2a\u53c2\u6570\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"${10}"),"\u7684\u5f62\u5f0f\u5f15\u7528\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u811a\u672c",(0,l.kt)("inlineCode",{parentName:"p"},"test.sh"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n# test.sh\n\nfunction alice {\n  echo "alice: $@"\n  echo "$0: $1 $2 $3 $4"\n  echo "$# arguments"\n\n}\n\nalice in wonderland\n')),(0,l.kt)("p",null,"\u8fd0\u884c\u8be5\u811a\u672c\uff0c\u7ed3\u679c\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash test.sh\nalice: in wonderland\ntest.sh: in wonderland\n2 arguments\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u7531\u4e8e\u51fd\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"alice"),"\u53ea\u6709\u7b2c\u4e00\u4e2a\u548c\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u6240\u4ee5\u7b2c\u4e09\u4e2a\u548c\u7b2c\u56db\u4e2a\u53c2\u6570\u4e3a\u7a7a\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u65e5\u5fd7\u51fd\u6570\u7684\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"function log_msg {\n  echo \"[`date '+ %F %T'` ]: $@\"\n}\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ log_msg "This is sample log message"\n[ 2018-08-16 19:56:34 ]: This is sample log message\n')),(0,l.kt)("h2",{id:"return-\u547d\u4ee4"},"return \u547d\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"return"),"\u547d\u4ee4\u7528\u4e8e\u4ece\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u503c\u3002\u51fd\u6570\u6267\u884c\u5230\u8fd9\u6761\u547d\u4ee4\uff0c\u5c31\u4e0d\u518d\u5f80\u4e0b\u6267\u884c\u4e86\uff0c\u76f4\u63a5\u8fd4\u56de\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"function func_return_value {\n  return 10\n}\n")),(0,l.kt)("p",null,"\u51fd\u6570\u5c06\u8fd4\u56de\u503c\u8fd4\u56de\u7ed9\u8c03\u7528\u8005\u3002\u5982\u679c\u547d\u4ee4\u884c\u76f4\u63a5\u6267\u884c\u51fd\u6570\uff0c\u4e0b\u4e00\u4e2a\u547d\u4ee4\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"$?"),"\u62ff\u5230\u8fd4\u56de\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ func_return_value\n$ echo "Value returned by function is: $?"\nValue returned by function is: 10\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"return"),"\u540e\u9762\u4e0d\u8ddf\u53c2\u6570\uff0c\u53ea\u7528\u4e8e\u8fd4\u56de\u4e5f\u662f\u53ef\u4ee5\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"function name {\n  commands\n  return\n}\n")),(0,l.kt)("h2",{id:"\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cflocal-\u547d\u4ee4"},"\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\uff0clocal \u547d\u4ee4"),(0,l.kt)("p",null,"Bash \u51fd\u6570\u4f53\u5185\u76f4\u63a5\u58f0\u660e\u7684\u53d8\u91cf\uff0c\u5c5e\u4e8e\u5168\u5c40\u53d8\u91cf\uff0c\u6574\u4e2a\u811a\u672c\u90fd\u53ef\u4ee5\u8bfb\u53d6\u3002\u8fd9\u4e00\u70b9\u9700\u8981\u7279\u522b\u5c0f\u5fc3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u811a\u672c test.sh\nfn () {\n  foo=1\n  echo "fn: foo = $foo"\n}\n\nfn\necho "global: foo = $foo"\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u811a\u672c\u7684\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash test.sh\nfn: foo = 1\nglobal: foo = 1\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"$foo"),"\u662f\u5728\u51fd\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"fn"),"\u5185\u90e8\u58f0\u660e\u7684\uff0c\u51fd\u6570\u4f53\u5916\u4e5f\u53ef\u4ee5\u8bfb\u53d6\u3002"),(0,l.kt)("p",null,"\u51fd\u6570\u4f53\u5185\u4e0d\u4ec5\u53ef\u4ee5\u58f0\u660e\u5168\u5c40\u53d8\u91cf\uff0c\u8fd8\u53ef\u4ee5\u4fee\u6539\u5168\u5c40\u53d8\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#! /bin/bash\nfoo=1\n\nfn () {\n  foo=2\n}\n\nfn\n\necho $foo\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7684\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"$foo"),"\u503c\u4e3a2\u3002"),(0,l.kt)("p",null,"\u51fd\u6570\u91cc\u9762\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"local"),"\u547d\u4ee4\u58f0\u660e\u5c40\u90e8\u53d8\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#! /bin/bash\n# \u811a\u672c test.sh\nfn () {\n  local foo\n  foo=1\n  echo "fn: foo = $foo"\n}\n\nfn\necho "global: foo = $foo"\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u811a\u672c\u7684\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash test.sh\nfn: foo = 1\nglobal: foo =\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"local"),"\u547d\u4ee4\u58f0\u660e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"$foo"),"\u53d8\u91cf\uff0c\u53ea\u5728\u51fd\u6570\u4f53\u5185\u6709\u6548\uff0c\u51fd\u6570\u4f53\u5916\u6ca1\u6709\u5b9a\u4e49\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linuxtechi.com/define-use-functions-linux-shell-script/"},"How to define and use functions in Linux Shell Script"),", by Pradeep Kumar")))}c.isMDXComponent=!0}}]);