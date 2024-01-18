"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9860],{72057:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>h,contentTitle:()=>a,default:()=>t,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=c(85893),r=c(11151);const l={},a="\u5b57\u7b26\u4e32\u64cd\u4f5c",o={id:"bash-tutorial/string",title:"\u5b57\u7b26\u4e32\u64cd\u4f5c",description:"\u672c\u7ae0\u4ecb\u7ecd Bash \u5b57\u7b26\u4e32\u64cd\u4f5c\u7684\u8bed\u6cd5\u3002",source:"@site/docs/bash-tutorial/string.md",sourceDirName:"bash-tutorial",slug:"/bash-tutorial/string",permalink:"/docs/bash-tutorial/string",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/string.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bash \u542f\u52a8\u73af\u5883",permalink:"/docs/bash-tutorial/startup"},next:{title:"Bash \u53d8\u91cf",permalink:"/docs/bash-tutorial/variable"}},h={},d=[{value:"\u5b57\u7b26\u4e32\u7684\u957f\u5ea6",id:"\u5b57\u7b26\u4e32\u7684\u957f\u5ea6",level:2},{value:"\u5b50\u5b57\u7b26\u4e32",id:"\u5b50\u5b57\u7b26\u4e32",level:2},{value:"\u641c\u7d22\u548c\u66ff\u6362",id:"\u641c\u7d22\u548c\u66ff\u6362",level:2},{value:"\u6539\u53d8\u5927\u5c0f\u5199",id:"\u6539\u53d8\u5927\u5c0f\u5199",level:2}];function i(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5b57\u7b26\u4e32\u64cd\u4f5c",children:"\u5b57\u7b26\u4e32\u64cd\u4f5c"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u7ae0\u4ecb\u7ecd Bash \u5b57\u7b26\u4e32\u64cd\u4f5c\u7684\u8bed\u6cd5\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5b57\u7b26\u4e32\u7684\u957f\u5ea6",children:"\u5b57\u7b26\u4e32\u7684\u957f\u5ea6"}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6\u5b57\u7b26\u4e32\u957f\u5ea6\u7684\u8bed\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"${#varname}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ myPath=/home/cam/book/long.file.name\n$ echo ${#myPath}\n29\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5927\u62ec\u53f7",(0,s.jsx)(e.code,{children:"{}"}),"\u662f\u5fc5\u9700\u7684\uff0c\u5426\u5219 Bash \u4f1a\u5c06",(0,s.jsx)(e.code,{children:"$#"}),"\u7406\u89e3\u6210\u811a\u672c\u7684\u53c2\u6570\u4e2a\u6570\uff0c\u5c06\u53d8\u91cf\u540d\u7406\u89e3\u6210\u6587\u672c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ echo $#myvar\n0myvar\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0cBash \u5c06",(0,s.jsx)(e.code,{children:"$#"}),"\u548c",(0,s.jsx)(e.code,{children:"myvar"}),"\u5206\u5f00\u89e3\u91ca\u4e86\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5b50\u5b57\u7b26\u4e32",children:"\u5b50\u5b57\u7b26\u4e32"}),"\n",(0,s.jsx)(e.p,{children:"\u5b57\u7b26\u4e32\u63d0\u53d6\u5b50\u4e32\u7684\u8bed\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"${varname:offset:length}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u8bed\u6cd5\u7684\u542b\u4e49\u662f\u8fd4\u56de\u53d8\u91cf",(0,s.jsx)(e.code,{children:"$varname"}),"\u7684\u5b50\u5b57\u7b26\u4e32\uff0c\u4ece\u4f4d\u7f6e",(0,s.jsx)(e.code,{children:"offset"}),"\u5f00\u59cb\uff08\u4ece",(0,s.jsx)(e.code,{children:"0"}),"\u5f00\u59cb\u8ba1\u7b97\uff09\uff0c\u957f\u5ea6\u4e3a",(0,s.jsx)(e.code,{children:"length"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ count=frogfootman\n$ echo ${count:4:4}\nfoot\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u8fd4\u56de\u5b57\u7b26\u4e32",(0,s.jsx)(e.code,{children:"frogfootman"}),"\u4ece4\u53f7\u4f4d\u7f6e\u5f00\u59cb\u7684\u957f\u5ea6\u4e3a4\u7684\u5b50\u5b57\u7b26\u4e32",(0,s.jsx)(e.code,{children:"foot"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u79cd\u8bed\u6cd5\u4e0d\u80fd\u76f4\u63a5\u64cd\u4f5c\u5b57\u7b26\u4e32\uff0c\u53ea\u80fd\u901a\u8fc7\u53d8\u91cf\u6765\u8bfb\u53d6\u5b57\u7b26\u4e32\uff0c\u5e76\u4e14\u4e0d\u4f1a\u6539\u53d8\u539f\u59cb\u5b57\u7b26\u4e32\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'# \u62a5\u9519\n$ echo ${"hello":2:3}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,s.jsx)(e.code,{children:'"hello"'}),"\u4e0d\u662f\u53d8\u91cf\u540d\uff0c\u5bfc\u81f4 Bash \u62a5\u9519\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u7701\u7565",(0,s.jsx)(e.code,{children:"length"}),"\uff0c\u5219\u4ece\u4f4d\u7f6e",(0,s.jsx)(e.code,{children:"offset"}),"\u5f00\u59cb\uff0c\u4e00\u76f4\u8fd4\u56de\u5230\u5b57\u7b26\u4e32\u7684\u7ed3\u5c3e\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ count=frogfootman\n$ echo ${count:4}\nfootman\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u662f\u8fd4\u56de\u53d8\u91cf",(0,s.jsx)(e.code,{children:"count"}),"\u4ece4\u53f7\u4f4d\u7f6e\u4e00\u76f4\u5230\u7ed3\u5c3e\u7684\u5b50\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c",(0,s.jsx)(e.code,{children:"offset"}),"\u4e3a\u8d1f\u503c\uff0c\u8868\u793a\u4ece\u5b57\u7b26\u4e32\u7684\u672b\u5c3e\u5f00\u59cb\u7b97\u8d77\u3002\u6ce8\u610f\uff0c\u8d1f\u6570\u524d\u9762\u5fc5\u987b\u6709\u4e00\u4e2a\u7a7a\u683c\uff0c \u4ee5\u9632\u6b62\u4e0e",(0,s.jsx)(e.code,{children:"${variable:-word}"}),"\u7684\u53d8\u91cf\u7684\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u8bed\u6cd5\u6df7\u6dc6\u3002\u8fd9\u65f6\u8fd8\u53ef\u4ee5\u6307\u5b9a",(0,s.jsx)(e.code,{children:"length"}),"\uff0c",(0,s.jsx)(e.code,{children:"length"}),"\u53ef\u4ee5\u662f\u6b63\u503c\uff0c\u4e5f\u53ef\u4ee5\u662f\u8d1f\u503c\uff08\u8d1f\u503c\u4e0d\u80fd\u8d85\u8fc7",(0,s.jsx)(e.code,{children:"offset"}),"\u7684\u957f\u5ea6\uff09\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'$ foo="This string is long."\n$ echo ${foo: -5}\nlong.\n$ echo ${foo: -5:2}\nlo\n$ echo ${foo: -5:-2}\nlon\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,s.jsx)(e.code,{children:"offset"}),"\u4e3a",(0,s.jsx)(e.code,{children:"-5"}),"\uff0c\u8868\u793a\u4ece\u5012\u6570\u7b2c5\u4e2a\u5b57\u7b26\u5f00\u59cb\u622a\u53d6\uff0c\u6240\u4ee5\u8fd4\u56de",(0,s.jsx)(e.code,{children:"long."}),"\u3002\u5982\u679c\u6307\u5b9a\u957f\u5ea6",(0,s.jsx)(e.code,{children:"length"}),"\u4e3a",(0,s.jsx)(e.code,{children:"2"}),"\uff0c\u5219\u8fd4\u56de",(0,s.jsx)(e.code,{children:"lo"}),"\uff1b\u5982\u679c",(0,s.jsx)(e.code,{children:"length"}),"\u4e3a",(0,s.jsx)(e.code,{children:"-2"}),"\uff0c\u8868\u793a\u8981\u6392\u9664\u4ece\u5b57\u7b26\u4e32\u672b\u5c3e\u5f00\u59cb\u76842\u4e2a\u5b57\u7b26\uff0c\u6240\u4ee5\u8fd4\u56de",(0,s.jsx)(e.code,{children:"lon"}),"\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u641c\u7d22\u548c\u66ff\u6362",children:"\u641c\u7d22\u548c\u66ff\u6362"}),"\n",(0,s.jsx)(e.p,{children:"Bash \u63d0\u4f9b\u5b57\u7b26\u4e32\u641c\u7d22\u548c\u66ff\u6362\u7684\u591a\u79cd\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\uff081\uff09\u5b57\u7b26\u4e32\u5934\u90e8\u7684\u6a21\u5f0f\u5339\u914d\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u4e24\u79cd\u8bed\u6cd5\u53ef\u4ee5\u68c0\u67e5\u5b57\u7b26\u4e32\u5f00\u5934\uff0c\u662f\u5426\u5339\u914d\u7ed9\u5b9a\u7684\u6a21\u5f0f\u3002\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5c31\u5220\u9664\u5339\u914d\u7684\u90e8\u5206\uff0c\u8fd4\u56de\u5269\u4e0b\u7684\u90e8\u5206\u3002\u539f\u59cb\u53d8\u91cf\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u5982\u679c pattern \u5339\u914d\u53d8\u91cf variable \u7684\u5f00\u5934\uff0c\n# \u5220\u9664\u6700\u77ed\u5339\u914d\uff08\u975e\u8d2a\u5a6a\u5339\u914d\uff09\u7684\u90e8\u5206\uff0c\u8fd4\u56de\u5269\u4f59\u90e8\u5206\n${variable#pattern}\n\n# \u5982\u679c pattern \u5339\u914d\u53d8\u91cf variable \u7684\u5f00\u5934\uff0c\n# \u5220\u9664\u6700\u957f\u5339\u914d\uff08\u8d2a\u5a6a\u5339\u914d\uff09\u7684\u90e8\u5206\uff0c\u8fd4\u56de\u5269\u4f59\u90e8\u5206\n${variable##pattern}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u4e24\u79cd\u8bed\u6cd5\u4f1a\u5220\u9664\u53d8\u91cf\u5b57\u7b26\u4e32\u5f00\u5934\u7684\u5339\u914d\u90e8\u5206\uff08\u5c06\u5176\u66ff\u6362\u4e3a\u7a7a\uff09\uff0c\u8fd4\u56de\u5269\u4e0b\u7684\u90e8\u5206\u3002\u533a\u522b\u662f\u4e00\u4e2a\u662f\u6700\u77ed\u5339\u914d\uff08\u53c8\u79f0\u975e\u8d2a\u5a6a\u5339\u914d\uff09\uff0c\u53e6\u4e00\u4e2a\u662f\u6700\u957f\u5339\u914d\uff08\u53c8\u79f0\u8d2a\u5a6a\u5339\u914d\uff09\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5339\u914d\u6a21\u5f0f",(0,s.jsx)(e.code,{children:"pattern"}),"\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(e.code,{children:"*"}),"\u3001",(0,s.jsx)(e.code,{children:"?"}),"\u3001",(0,s.jsx)(e.code,{children:"[]"}),"\u7b49\u901a\u914d\u7b26\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ myPath=/home/cam/book/long.file.name\n\n$ echo ${myPath#/*/}\ncam/book/long.file.name\n\n$ echo ${myPath##/*/}\nlong.file.name\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u5339\u914d\u7684\u6a21\u5f0f\u662f",(0,s.jsx)(e.code,{children:"/*/"}),"\uff0c\u5176\u4e2d",(0,s.jsx)(e.code,{children:"*"}),"\u53ef\u4ee5\u5339\u914d\u4efb\u610f\u6570\u91cf\u7684\u5b57\u7b26\uff0c\u6240\u4ee5\u6700\u77ed\u5339\u914d\u662f",(0,s.jsx)(e.code,{children:"/home/"}),"\uff0c\u6700\u957f\u5339\u914d\u662f",(0,s.jsx)(e.code,{children:"/home/cam/book/"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u5199\u6cd5\u53ef\u4ee5\u5220\u9664\u6587\u4ef6\u8def\u5f84\u7684\u76ee\u5f55\u90e8\u5206\uff0c\u53ea\u7559\u4e0b\u6587\u4ef6\u540d\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ path=/home/cam/book/long.file.name\n\n$ echo ${path##*/}\nlong.file.name\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u6a21\u5f0f",(0,s.jsx)(e.code,{children:"*/"}),"\u5339\u914d\u76ee\u5f55\u90e8\u5206\uff0c\u6240\u4ee5\u53ea\u8fd4\u56de\u6587\u4ef6\u540d\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u518d\u770b\u4e00\u4e2a\u4f8b\u5b50\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'$ phone="555-456-1414"\n$ echo ${phone#*-}\n456-1414\n$ echo ${phone##*-}\n1414\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u5339\u914d\u4e0d\u6210\u529f\uff0c\u5219\u8fd4\u56de\u539f\u59cb\u5b57\u7b26\u4e32\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'$ phone="555-456-1414"\n$ echo ${phone#444}\n555-456-1414\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u539f\u59cb\u5b57\u7b26\u4e32\u91cc\u9762\u65e0\u6cd5\u5339\u914d\u6a21\u5f0f",(0,s.jsx)(e.code,{children:"444"}),"\uff0c\u6240\u4ee5\u539f\u6837\u8fd4\u56de\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u8981\u5c06\u5934\u90e8\u5339\u914d\u7684\u90e8\u5206\uff0c\u66ff\u6362\u6210\u5176\u4ed6\u5185\u5bb9\uff0c\u91c7\u7528\u4e0b\u9762\u7684\u5199\u6cd5\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u6a21\u5f0f\u5fc5\u987b\u51fa\u73b0\u5728\u5b57\u7b26\u4e32\u7684\u5f00\u5934\n${variable/#pattern/string}\n\n# \u793a\u4f8b\n$ foo=JPG.JPG\n$ echo ${foo/#JPG/jpg}\njpg.JPG\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u88ab\u66ff\u6362\u7684",(0,s.jsx)(e.code,{children:"JPG"}),"\u5fc5\u987b\u51fa\u73b0\u5728\u5b57\u7b26\u4e32\u5934\u90e8\uff0c\u6240\u4ee5\u8fd4\u56de",(0,s.jsx)(e.code,{children:"jpg.JPG"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\uff082\uff09\u5b57\u7b26\u4e32\u5c3e\u90e8\u7684\u6a21\u5f0f\u5339\u914d\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u4e24\u79cd\u8bed\u6cd5\u53ef\u4ee5\u68c0\u67e5\u5b57\u7b26\u4e32\u7ed3\u5c3e\uff0c\u662f\u5426\u5339\u914d\u7ed9\u5b9a\u7684\u6a21\u5f0f\u3002\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5c31\u5220\u9664\u5339\u914d\u7684\u90e8\u5206\uff0c\u8fd4\u56de\u5269\u4e0b\u7684\u90e8\u5206\u3002\u539f\u59cb\u53d8\u91cf\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u5982\u679c pattern \u5339\u914d\u53d8\u91cf variable \u7684\u7ed3\u5c3e\uff0c\n# \u5220\u9664\u6700\u77ed\u5339\u914d\uff08\u975e\u8d2a\u5a6a\u5339\u914d\uff09\u7684\u90e8\u5206\uff0c\u8fd4\u56de\u5269\u4f59\u90e8\u5206\n${variable%pattern}\n\n# \u5982\u679c pattern \u5339\u914d\u53d8\u91cf variable \u7684\u7ed3\u5c3e\uff0c\n# \u5220\u9664\u6700\u957f\u5339\u914d\uff08\u8d2a\u5a6a\u5339\u914d\uff09\u7684\u90e8\u5206\uff0c\u8fd4\u56de\u5269\u4f59\u90e8\u5206\n${variable%%pattern}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u4e24\u79cd\u8bed\u6cd5\u4f1a\u5220\u9664\u53d8\u91cf\u5b57\u7b26\u4e32\u7ed3\u5c3e\u7684\u5339\u914d\u90e8\u5206\uff08\u5c06\u5176\u66ff\u6362\u4e3a\u7a7a\uff09\uff0c\u8fd4\u56de\u5269\u4e0b\u7684\u90e8\u5206\u3002\u533a\u522b\u662f\u4e00\u4e2a\u662f\u6700\u77ed\u5339\u914d\uff08\u53c8\u79f0\u975e\u8d2a\u5a6a\u5339\u914d\uff09\uff0c\u53e6\u4e00\u4e2a\u662f\u6700\u957f\u5339\u914d\uff08\u53c8\u79f0\u8d2a\u5a6a\u5339\u914d\uff09\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ path=/home/cam/book/long.file.name\n\n$ echo ${path%.*}\n/home/cam/book/long.file\n\n$ echo ${path%%.*}\n/home/cam/book/long\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u5339\u914d\u6a21\u5f0f\u662f",(0,s.jsx)(e.code,{children:".*"}),"\uff0c\u5176\u4e2d",(0,s.jsx)(e.code,{children:"*"}),"\u53ef\u4ee5\u5339\u914d\u4efb\u610f\u6570\u91cf\u7684\u5b57\u7b26\uff0c\u6240\u4ee5\u6700\u77ed\u5339\u914d\u662f",(0,s.jsx)(e.code,{children:".name"}),"\uff0c\u6700\u957f\u5339\u914d\u662f",(0,s.jsx)(e.code,{children:".file.name"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u5199\u6cd5\u53ef\u4ee5\u5220\u9664\u8def\u5f84\u7684\u6587\u4ef6\u540d\u90e8\u5206\uff0c\u53ea\u7559\u4e0b\u76ee\u5f55\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ path=/home/cam/book/long.file.name\n\n$ echo ${path%/*}\n/home/cam/book\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u6a21\u5f0f",(0,s.jsx)(e.code,{children:"/*"}),"\u5339\u914d\u6587\u4ef6\u540d\u90e8\u5206\uff0c\u6240\u4ee5\u53ea\u8fd4\u56de\u76ee\u5f55\u90e8\u5206\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u5199\u6cd5\u53ef\u4ee5\u66ff\u6362\u6587\u4ef6\u7684\u540e\u7f00\u540d\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ file=foo.png\n$ echo ${file%.png}.jpg\nfoo.jpg\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u7684\u4f8b\u5b50\u5c06\u6587\u4ef6\u7684\u540e\u7f00\u540d\uff0c\u4ece",(0,s.jsx)(e.code,{children:".png"}),"\u6539\u6210\u4e86",(0,s.jsx)(e.code,{children:".jpg"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u518d\u770b\u4e00\u4e2a\u4f8b\u5b50\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'$ phone="555-456-1414"\n$ echo ${phone%-*}\n555-456\n$ echo ${phone%%-*}\n555\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u5339\u914d\u4e0d\u6210\u529f\uff0c\u5219\u8fd4\u56de\u539f\u59cb\u5b57\u7b26\u4e32\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u8981\u5c06\u5c3e\u90e8\u5339\u914d\u7684\u90e8\u5206\uff0c\u66ff\u6362\u6210\u5176\u4ed6\u5185\u5bb9\uff0c\u91c7\u7528\u4e0b\u9762\u7684\u5199\u6cd5\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u6a21\u5f0f\u5fc5\u987b\u51fa\u73b0\u5728\u5b57\u7b26\u4e32\u7684\u7ed3\u5c3e\n${variable/%pattern/string}\n\n# \u793a\u4f8b\n$ foo=JPG.JPG\n$ echo ${foo/%JPG/jpg}\nJPG.jpg\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u88ab\u66ff\u6362\u7684",(0,s.jsx)(e.code,{children:"JPG"}),"\u5fc5\u987b\u51fa\u73b0\u5728\u5b57\u7b26\u4e32\u5c3e\u90e8\uff0c\u6240\u4ee5\u8fd4\u56de",(0,s.jsx)(e.code,{children:"JPG.jpg"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\uff083\uff09\u4efb\u610f\u4f4d\u7f6e\u7684\u6a21\u5f0f\u5339\u914d\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u4e24\u79cd\u8bed\u6cd5\u53ef\u4ee5\u68c0\u67e5\u5b57\u7b26\u4e32\u5185\u90e8\uff0c\u662f\u5426\u5339\u914d\u7ed9\u5b9a\u7684\u6a21\u5f0f\u3002\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5c31\u5220\u9664\u5339\u914d\u7684\u90e8\u5206\uff0c\u6362\u6210\u5176\u4ed6\u7684\u5b57\u7b26\u4e32\u8fd4\u56de\u3002\u539f\u59cb\u53d8\u91cf\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u5982\u679c pattern \u5339\u914d\u53d8\u91cf variable \u7684\u4e00\u90e8\u5206\uff0c\n# \u6700\u957f\u5339\u914d\uff08\u8d2a\u5a6a\u5339\u914d\uff09\u7684\u90a3\u90e8\u5206\u88ab string \u66ff\u6362\uff0c\u4f46\u4ec5\u66ff\u6362\u7b2c\u4e00\u4e2a\u5339\u914d\n${variable/pattern/string}\n\n# \u5982\u679c pattern \u5339\u914d\u53d8\u91cf variable \u7684\u4e00\u90e8\u5206\uff0c\n# \u6700\u957f\u5339\u914d\uff08\u8d2a\u5a6a\u5339\u914d\uff09\u7684\u90a3\u90e8\u5206\u88ab string \u66ff\u6362\uff0c\u6240\u6709\u5339\u914d\u90fd\u66ff\u6362\n${variable//pattern/string}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u4e24\u79cd\u8bed\u6cd5\u90fd\u662f\u6700\u957f\u5339\u914d\uff08\u8d2a\u5a6a\u5339\u914d\uff09\u4e0b\u7684\u66ff\u6362\uff0c\u533a\u522b\u662f\u524d\u4e00\u4e2a\u8bed\u6cd5\u4ec5\u4ec5\u66ff\u6362\u7b2c\u4e00\u4e2a\u5339\u914d\uff0c\u540e\u4e00\u4e2a\u8bed\u6cd5\u66ff\u6362\u6240\u6709\u5339\u914d\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ path=/home/cam/foo/foo.name\n\n$ echo ${path/foo/bar}\n/home/cam/bar/foo.name\n\n$ echo ${path//foo/bar}\n/home/cam/bar/bar.name\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u524d\u4e00\u4e2a\u547d\u4ee4\u53ea\u66ff\u6362\u4e86\u7b2c\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"foo"}),"\uff0c\u540e\u4e00\u4e2a\u547d\u4ee4\u5c06\u4e24\u4e2a",(0,s.jsx)(e.code,{children:"foo"}),"\u90fd\u66ff\u6362\u4e86\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u9762\u7684\u4f8b\u5b50\u5c06\u5206\u9694\u7b26\u4ece",(0,s.jsx)(e.code,{children:":"}),"\u6362\u6210\u6362\u884c\u7b26\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ echo -e ${PATH//:/'\\n'}\n/usr/local/bin\n/usr/bin\n/bin\n...\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,s.jsx)(e.code,{children:"echo"}),"\u547d\u4ee4\u7684",(0,s.jsx)(e.code,{children:"-e"}),"\u53c2\u6570\uff0c\u8868\u793a\u5c06\u66ff\u6362\u540e\u7684\u5b57\u7b26\u4e32\u7684",(0,s.jsx)(e.code,{children:"\\n"}),"\u5b57\u7b26\uff0c\u89e3\u91ca\u4e3a\u6362\u884c\u7b26\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6a21\u5f0f\u90e8\u5206\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'$ phone="555-456-1414"\n$ echo ${phone/5?4/-}\n55-56-1414\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u7684\u4f8b\u5b50\u5c06",(0,s.jsx)(e.code,{children:"5-4"}),"\u66ff\u6362\u6210",(0,s.jsx)(e.code,{children:"-"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u7701\u7565\u4e86",(0,s.jsx)(e.code,{children:"string"}),"\u90e8\u5206\uff0c\u90a3\u4e48\u5c31\u76f8\u5f53\u4e8e\u5339\u914d\u7684\u90e8\u5206\u66ff\u6362\u6210\u7a7a\u5b57\u7b26\u4e32\uff0c\u5373\u5220\u9664\u5339\u914d\u7684\u90e8\u5206\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ path=/home/cam/foo/foo.name\n\n$ echo ${path/.*/}\n/home/cam/foo/foo\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u7b2c\u4e8c\u4e2a\u659c\u6760\u540e\u9762\u7684",(0,s.jsx)(e.code,{children:"string"}),"\u90e8\u5206\u7701\u7565\u4e86\uff0c\u6240\u4ee5\u6a21\u5f0f",(0,s.jsx)(e.code,{children:".*"}),"\u5339\u914d\u7684\u90e8\u5206",(0,s.jsx)(e.code,{children:".name"}),"\u88ab\u5220\u9664\u540e\u8fd4\u56de\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u524d\u9762\u63d0\u5230\u8fc7\uff0c\u8fd9\u4e2a\u8bed\u6cd5\u8fd8\u6709\u4e24\u79cd\u6269\u5c55\u5f62\u5f0f\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u6a21\u5f0f\u5fc5\u987b\u51fa\u73b0\u5728\u5b57\u7b26\u4e32\u7684\u5f00\u5934\n${variable/#pattern/string}\n\n# \u6a21\u5f0f\u5fc5\u987b\u51fa\u73b0\u5728\u5b57\u7b26\u4e32\u7684\u7ed3\u5c3e\n${variable/%pattern/string}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6539\u53d8\u5927\u5c0f\u5199",children:"\u6539\u53d8\u5927\u5c0f\u5199"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u8bed\u6cd5\u53ef\u4ee5\u6539\u53d8\u53d8\u91cf\u7684\u5927\u5c0f\u5199\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u8f6c\u4e3a\u5927\u5199\n${varname^^}\n\n# \u8f6c\u4e3a\u5c0f\u5199\n${varname,,}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ foo=heLLo\n$ echo ${foo^^}\nHELLO\n$ echo ${foo,,}\nhello\n"})})]})}function t(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(i,{...n})}):i(n)}},11151:(n,e,c)=>{c.d(e,{Z:()=>o,a:()=>a});var s=c(67294);const r={},l=s.createContext(r);function a(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);