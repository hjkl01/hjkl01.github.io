"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[7357],{4956:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var r=n(5893),a=n(1151);const c={},i="\u547d\u540d\u7ba1\u9053",t={id:"bash-tutorial/archives/named-pipe",title:"\u547d\u540d\u7ba1\u9053",description:"\u5728\u5927\u591a\u6570\u7c7b\u4f3c Unix \u7684\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u6709\u53ef\u80fd\u521b\u5efa\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u53eb\u505a\u547d\u540d\u7ba1\u9053\u3002\u547d\u540d\u7ba1\u9053\u7528\u6765\u5728 \u4e24\u4e2a\u8fdb\u7a0b\u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\uff0c\u4e5f\u53ef\u4ee5\u50cf\u5176\u5b83\u7c7b\u578b\u7684\u6587\u4ef6\u4e00\u6837\u4f7f\u7528\u3002",source:"@site/docs/bash-tutorial/archives/named-pipe.md",sourceDirName:"bash-tutorial/archives",slug:"/bash-tutorial/archives/named-pipe",permalink:"/docs/bash-tutorial/archives/named-pipe",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/named-pipe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u673a\u7ba1\u7406",permalink:"/docs/bash-tutorial/archives/host"},next:{title:"\u8fdb\u7a0b\u7ba1\u7406",permalink:"/docs/bash-tutorial/archives/process"}},l={},o=[{value:"\u8bbe\u7f6e\u4e00\u4e2a\u547d\u540d\u7ba1\u9053",id:"\u8bbe\u7f6e\u4e00\u4e2a\u547d\u540d\u7ba1\u9053",level:2},{value:"\u4f7f\u7528\u547d\u540d\u7ba1\u9053",id:"\u4f7f\u7528\u547d\u540d\u7ba1\u9053",level:2}];function p(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u547d\u540d\u7ba1\u9053",children:"\u547d\u540d\u7ba1\u9053"}),"\n",(0,r.jsx)(s.p,{children:"\u5728\u5927\u591a\u6570\u7c7b\u4f3c Unix \u7684\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u6709\u53ef\u80fd\u521b\u5efa\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u53eb\u505a\u547d\u540d\u7ba1\u9053\u3002\u547d\u540d\u7ba1\u9053\u7528\u6765\u5728 \u4e24\u4e2a\u8fdb\u7a0b\u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\uff0c\u4e5f\u53ef\u4ee5\u50cf\u5176\u5b83\u7c7b\u578b\u7684\u6587\u4ef6\u4e00\u6837\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u547d\u4ee4\u7ba1\u9053\u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8e\u6587\u4ef6\uff0c\u4f46\u5b9e\u9645\u4e0a\u5f62\u6210\u4e86\u5148\u5165\u5148\u51fa\uff08FIFO\uff09\u7684\u7f13\u51b2\u3002\u548c\u666e\u901a\uff08\u672a\u547d\u4ee4\u7684\uff09\u7ba1\u9053\u4e00\u6837\uff0c \u6570\u636e\u4ece\u4e00\u7aef\u8fdb\u5165\uff0c\u7136\u540e\u4ece\u53e6\u4e00\u7aef\u51fa\u73b0\u3002\u901a\u8fc7\u547d\u4ee4\u7ba1\u9053\uff0c\u6709\u53ef\u80fd\u50cf\u8fd9\u6837\u8bbe\u7f6e\u4e00\u4e9b\u4e1c\u897f\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"process1 > named_pipe\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u548c"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"process2 < named_pipe\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u8868\u73b0\u51fa\u6765\u5c31\u50cf\u8fd9\u6837\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"process1 | process2\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u8bbe\u7f6e\u4e00\u4e2a\u547d\u540d\u7ba1\u9053",children:"\u8bbe\u7f6e\u4e00\u4e2a\u547d\u540d\u7ba1\u9053"}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528 mkfifo \u547d\u4ee4\u80fd\u591f\u521b\u5efa\u547d\u4ee4\u7ba1\u9053\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ mkfifo pipe1\n$ ls -l pipe1\nprw-r--r-- 1 me me 0 2009-07-17 06:41 pipe1\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 mkfifo \u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a pipe1 \u7684\u547d\u540d\u7ba1\u9053\u3002\u4f7f\u7528 ls \u547d\u4ee4\uff0c\u6211\u4eec\u67e5\u770b\u8fd9\u4e2a\u6587\u4ef6\uff0c \u770b\u5230\u4f4d\u4e8e\u5c5e\u6027\u5b57\u6bb5\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u662f \u201cp\u201d\uff0c\u8868\u660e\u5b83\u662f\u4e00\u4e2a\u547d\u540d\u7ba1\u9053\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u4f7f\u7528\u547d\u540d\u7ba1\u9053",children:"\u4f7f\u7528\u547d\u540d\u7ba1\u9053"}),"\n",(0,r.jsx)(s.p,{children:"\u4e3a\u4e86\u6f14\u793a\u547d\u540d\u7ba1\u9053\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u6211\u4eec\u5c06\u9700\u8981\u4e24\u4e2a\u7ec8\u7aef\u7a97\u53e3\uff08\u6216\u7528\u4e24\u4e2a\u865a\u62df\u63a7\u5236\u53f0\u4ee3\u66ff\uff09\u3002 \u5728\u7b2c\u4e00\u4e2a\u7ec8\u7aef\u4e2d\uff0c\u6211\u4eec\u8f93\u5165\u4e00\u4e2a\u7b80\u5355\u547d\u4ee4\uff0c\u5e76\u628a\u547d\u4ee4\u7684\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u547d\u540d\u7ba1\u9053\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ ls -l > pipe1\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u6211\u4eec\u6309\u4e0b Enter \u6309\u952e\u4e4b\u540e\uff0c\u547d\u4ee4\u5c06\u4f1a\u6302\u8d77\u3002\u8fd9\u662f\u56e0\u4e3a\u5728\u7ba1\u9053\u7684\u53e6\u4e00\u7aef\u6ca1\u6709\u4efb\u4f55\u63a5\u53d7\u6570\u636e\u3002\u5f53\u8fd9\u79cd\u73b0\u8c61\u53d1\u751f\u7684\u65f6\u5019\uff0c \u636e\u8bf4\u662f\u7ba1\u9053\u963b\u585e\u4e86\u3002\u4e00\u65e6\u6211\u4eec\u7ed1\u5b9a\u4e00\u4e2a\u8fdb\u7a0b\u5230\u7ba1\u9053\u7684\u53e6\u4e00\u7aef\uff0c\u8be5\u8fdb\u7a0b\u5f00\u59cb\u4ece\u7ba1\u9053\u4e2d\u8bfb\u53d6\u8f93\u5165\u7684\u65f6\u5019\uff0c\u8fd9\u79cd\u60c5\u51b5\u4f1a\u6d88\u5931\u3002 \u4f7f\u7528\u7b2c\u4e8c\u4e2a\u7ec8\u7aef\u7a97\u53e3\uff0c\u6211\u4eec\u8f93\u5165\u8fd9\u4e2a\u547d\u4ee4\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ cat < pipe1\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u7136\u540e\u4ea7\u81ea\u7b2c\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\u7684\u76ee\u5f55\u5217\u8868\u51fa\u73b0\u5728\u7b2c\u4e8c\u4e2a\u7ec8\u7aef\u4e2d\uff0c\u5e76\u4f5c\u4e3a\u6765\u81ea cat \u547d\u4ee4\u7684\u8f93\u51fa\u3002\u5728\u7b2c\u4e00\u4e2a\u7ec8\u7aef \u7a97\u53e3\u4e2d\u7684 ls \u547d\u4ee4\u4e00\u65e6\u5b83\u4e0d\u518d\u963b\u585e\uff0c\u4f1a\u6210\u529f\u5730\u7ed3\u675f\u3002"})]})}function d(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>i});var r=n(7294);const a={},c=r.createContext(a);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);