"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9345],{13944:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>j,frontMatter:()=>d,metadata:()=>i,toc:()=>x});var c=s(85893),l=s(11151);const d={},r="Bash \u884c\u64cd\u4f5c",i={id:"bash-tutorial/readline",title:"Bash \u884c\u64cd\u4f5c",description:"\u7b80\u4ecb",source:"@site/docs/bash-tutorial/readline.md",sourceDirName:"bash-tutorial",slug:"/bash-tutorial/readline",permalink:"/docs/bash-tutorial/readline",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/readline.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"read \u547d\u4ee4",permalink:"/docs/bash-tutorial/read"},next:{title:"Bash \u811a\u672c\u5165\u95e8",permalink:"/docs/bash-tutorial/script"}},h={},x=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5149\u6807\u79fb\u52a8",id:"\u5149\u6807\u79fb\u52a8",level:2},{value:"\u6e05\u9664\u5c4f\u5e55",id:"\u6e05\u9664\u5c4f\u5e55",level:2},{value:"\u7f16\u8f91\u64cd\u4f5c",id:"\u7f16\u8f91\u64cd\u4f5c",level:2},{value:"\u81ea\u52a8\u8865\u5168",id:"\u81ea\u52a8\u8865\u5168",level:2},{value:"\u64cd\u4f5c\u5386\u53f2",id:"\u64cd\u4f5c\u5386\u53f2",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"history \u547d\u4ee4",id:"history-\u547d\u4ee4",level:3},{value:"\u76f8\u5173\u5feb\u6377\u952e",id:"\u76f8\u5173\u5feb\u6377\u952e",level:3},{value:"\u5176\u4ed6\u5feb\u6377\u952e",id:"\u5176\u4ed6\u5feb\u6377\u952e",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"bash-\u884c\u64cd\u4f5c",children:"Bash \u884c\u64cd\u4f5c"}),"\n",(0,c.jsx)(n.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,c.jsx)(n.p,{children:"Bash \u5185\u7f6e\u4e86 Readline \u5e93\uff0c\u5177\u6709\u8fd9\u4e2a\u5e93\u63d0\u4f9b\u7684\u5f88\u591a\u201c\u884c\u64cd\u4f5c\u201d\u529f\u80fd\uff0c\u6bd4\u5982\u547d\u4ee4\u7684\u81ea\u52a8\u8865\u5168\uff0c\u53ef\u4ee5\u5927\u5927\u52a0\u5feb\u64cd\u4f5c\u901f\u5ea6\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e2a\u5e93\u9ed8\u8ba4\u91c7\u7528 Emacs \u5feb\u6377\u952e\uff0c\u4e5f\u53ef\u4ee5\u6539\u6210 Vi \u5feb\u6377\u952e\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ set -o vi\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0b\u9762\u7684\u547d\u4ee4\u53ef\u4ee5\u6539\u56de Emacs \u5feb\u6377\u952e\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ set -o emacs\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u6c38\u4e45\u6027\u66f4\u6539\u7f16\u8f91\u6a21\u5f0f\uff08Emacs / Vi\uff09\uff0c\u53ef\u4ee5\u5c06\u547d\u4ee4\u5199\u5728",(0,c.jsx)(n.code,{children:"~/.inputrc"}),"\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u662f Readline \u7684\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"set editing-mode vi\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u672c\u7ae0\u4ecb\u7ecd\u7684\u5feb\u6377\u952e\u90fd\u5c5e\u4e8e Emacs \u6a21\u5f0f\u3002Vi \u6a21\u5f0f\u7684\u5feb\u6377\u952e\uff0c\u8bfb\u8005\u53ef\u4ee5\u53c2\u8003 Vi \u7f16\u8f91\u5668\u7684\u6559\u7a0b\u3002"}),"\n",(0,c.jsx)(n.p,{children:"Bash \u9ed8\u8ba4\u5f00\u542f\u8fd9\u4e2a\u5e93\uff0c\u4f46\u662f\u5141\u8bb8\u5173\u95ed\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ bash --noediting\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"--noediting"}),"\u53c2\u6570\u5173\u95ed\u4e86 Readline \u5e93\uff0c\u542f\u52a8\u7684 Bash \u5c31\u4e0d\u5e26\u6709\u884c\u64cd\u4f5c\u529f\u80fd\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5149\u6807\u79fb\u52a8",children:"\u5149\u6807\u79fb\u52a8"}),"\n",(0,c.jsx)(n.p,{children:"Readline \u63d0\u4f9b\u5feb\u901f\u79fb\u52a8\u5149\u6807\u7684\u5feb\u6377\u952e\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + a"}),"\uff1a\u79fb\u5230\u884c\u9996\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + b"}),"\uff1a\u5411\u884c\u9996\u79fb\u52a8\u4e00\u4e2a\u5b57\u7b26\uff0c\u4e0e\u5de6\u7bad\u5934\u4f5c\u7528\u76f8\u540c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + e"}),"\uff1a\u79fb\u5230\u884c\u5c3e\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + f"}),"\uff1a\u5411\u884c\u5c3e\u79fb\u52a8\u4e00\u4e2a\u5b57\u7b26\uff0c\u4e0e\u53f3\u7bad\u5934\u4f5c\u7528\u76f8\u540c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + f"}),"\uff1a\u79fb\u52a8\u5230\u5f53\u524d\u5355\u8bcd\u7684\u8bcd\u5c3e\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + b"}),"\uff1a\u79fb\u52a8\u5230\u5f53\u524d\u5355\u8bcd\u7684\u8bcd\u9996\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u5feb\u6377\u952e\u7684 Alt \u952e\uff0c\u4e5f\u53ef\u4ee5\u7528 ESC \u952e\u4ee3\u66ff\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u6e05\u9664\u5c4f\u5e55",children:"\u6e05\u9664\u5c4f\u5e55"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Ctrl + l"}),"\u5feb\u6377\u952e\u53ef\u4ee5\u6e05\u9664\u5c4f\u5e55\uff0c\u5373\u5c06\u5f53\u524d\u884c\u79fb\u5230\u5c4f\u5e55\u7684\u7b2c\u4e00\u884c\uff0c\u4e0e",(0,c.jsx)(n.code,{children:"clear"}),"\u547d\u4ee4\u4f5c\u7528\u76f8\u540c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u7f16\u8f91\u64cd\u4f5c",children:"\u7f16\u8f91\u64cd\u4f5c"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0b\u9762\u7684\u5feb\u6377\u952e\u53ef\u4ee5\u7f16\u8f91\u547d\u4ee4\u884c\u5185\u5bb9\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + d"}),"\uff1a\u5220\u9664\u5149\u6807\u4f4d\u7f6e\u7684\u5b57\u7b26\uff08delete\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + w"}),"\uff1a\u5220\u9664\u5149\u6807\u524d\u9762\u7684\u5355\u8bcd\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + t"}),"\uff1a\u5149\u6807\u4f4d\u7f6e\u7684\u5b57\u7b26\u4e0e\u5b83\u524d\u9762\u4e00\u4f4d\u7684\u5b57\u7b26\u4ea4\u6362\u4f4d\u7f6e\uff08transpose\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + t"}),"\uff1a\u5149\u6807\u4f4d\u7f6e\u7684\u8bcd\u4e0e\u5b83\u524d\u9762\u4e00\u4f4d\u7684\u8bcd\u4ea4\u6362\u4f4d\u7f6e\uff08transpose\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + l"}),"\uff1a\u5c06\u5149\u6807\u4f4d\u7f6e\u81f3\u8bcd\u5c3e\u8f6c\u4e3a\u5c0f\u5199\uff08lowercase\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + u"}),"\uff1a\u5c06\u5149\u6807\u4f4d\u7f6e\u81f3\u8bcd\u5c3e\u8f6c\u4e3a\u5927\u5199\uff08uppercase\uff09\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528",(0,c.jsx)(n.code,{children:"Ctrl + d"}),"\u7684\u65f6\u5019\uff0c\u5982\u679c\u5f53\u524d\u884c\u6ca1\u6709\u4efb\u4f55\u5b57\u7b26\uff0c\u4f1a\u5bfc\u81f4\u9000\u51fa\u5f53\u524d Shell\uff0c\u6240\u4ee5\u8981\u5c0f\u5fc3\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u526a\u5207\u548c\u7c98\u8d34\u5feb\u6377\u952e\u5982\u4e0b\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + k"}),"\uff1a\u526a\u5207\u5149\u6807\u4f4d\u7f6e\u5230\u884c\u5c3e\u7684\u6587\u672c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + u"}),"\uff1a\u526a\u5207\u5149\u6807\u4f4d\u7f6e\u5230\u884c\u9996\u7684\u6587\u672c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + d"}),"\uff1a\u526a\u5207\u5149\u6807\u4f4d\u7f6e\u5230\u8bcd\u5c3e\u7684\u6587\u672c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + Backspace"}),"\uff1a\u526a\u5207\u5149\u6807\u4f4d\u7f6e\u5230\u8bcd\u9996\u7684\u6587\u672c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + y"}),"\uff1a\u5728\u5149\u6807\u4f4d\u7f6e\u7c98\u8d34\u6587\u672c\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u540c\u6837\u5730\uff0cAlt \u952e\u53ef\u4ee5\u7528 Esc \u952e\u4ee3\u66ff\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u81ea\u52a8\u8865\u5168",children:"\u81ea\u52a8\u8865\u5168"}),"\n",(0,c.jsxs)(n.p,{children:["\u547d\u4ee4\u8f93\u5165\u5230\u4e00\u534a\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6309\u4e00\u4e0b Tab \u952e\uff0cReadline \u4f1a\u81ea\u52a8\u8865\u5168\u547d\u4ee4\u6216\u8def\u5f84\u3002\u6bd4\u5982\uff0c\u8f93\u5165",(0,c.jsx)(n.code,{children:"cle"}),"\uff0c\u518d\u6309\u4e0b Tab \u952e\uff0cBash \u4f1a\u81ea\u52a8\u5c06\u8fd9\u4e2a\u547d\u4ee4\u8865\u5168\u4e3a",(0,c.jsx)(n.code,{children:"clear"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u7b26\u5408\u6761\u4ef6\u7684\u547d\u4ee4\u6216\u8def\u5f84\u6709\u591a\u4e2a\uff0c\u5c31\u9700\u8981\u8fde\u7eed\u6309\u4e24\u6b21 Tab \u952e\uff0cBash \u4f1a\u63d0\u793a\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u547d\u4ee4\u6216\u8def\u5f84\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u9664\u4e86\u547d\u4ee4\u6216\u8def\u5f84\uff0cTab \u8fd8\u53ef\u4ee5\u8865\u5168\u5176\u4ed6\u503c\u3002\u5982\u679c\u4e00\u4e2a\u503c\u4ee5",(0,c.jsx)(n.code,{children:"$"}),"\u5f00\u5934\uff0c\u5219\u6309\u4e0b Tab \u952e\u4f1a\u8865\u5168\u53d8\u91cf\uff1b\u5982\u679c\u4ee5",(0,c.jsx)(n.code,{children:"~"}),"\u5f00\u5934\uff0c\u5219\u8865\u5168\u7528\u6237\u540d\uff1b\u5982\u679c\u4ee5",(0,c.jsx)(n.code,{children:"@"}),"\u5f00\u5934\uff0c\u5219\u8865\u5168\u4e3b\u673a\u540d\uff08hostname\uff09\uff0c\u4e3b\u673a\u540d\u4ee5\u5217\u5728",(0,c.jsx)(n.code,{children:"/etc/hosts"}),"\u6587\u4ef6\u91cc\u9762\u7684\u4e3b\u673a\u4e3a\u51c6\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u81ea\u52a8\u8865\u5168\u76f8\u5173\u7684\u5feb\u6377\u952e\u5982\u4e0b\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Tab\uff1a\u5b8c\u6210\u81ea\u52a8\u8865\u5168\u3002"}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + ?"}),"\uff1a\u5217\u51fa\u53ef\u80fd\u7684\u8865\u5168\uff0c\u4e0e\u8fde\u6309\u4e24\u6b21 Tab \u952e\u4f5c\u7528\u76f8\u540c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + /"}),"\uff1a\u5c1d\u8bd5\u6587\u4ef6\u8def\u5f84\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + x /"}),"\uff1a\u5148\u6309",(0,c.jsx)(n.code,{children:"Ctrl + x"}),"\uff0c\u518d\u6309",(0,c.jsx)(n.code,{children:"/"}),"\uff0c\u7b49\u540c\u4e8e",(0,c.jsx)(n.code,{children:"Alt + ?"}),"\uff0c\u5217\u51fa\u53ef\u80fd\u7684\u6587\u4ef6\u8def\u5f84\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + !"}),"\uff1a\u547d\u4ee4\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + x !"}),"\uff1a\u5148\u6309",(0,c.jsx)(n.code,{children:"Ctrl + x"}),"\uff0c\u518d\u6309",(0,c.jsx)(n.code,{children:"!"}),"\uff0c\u7b49\u540c\u4e8e",(0,c.jsx)(n.code,{children:"Alt + !"}),"\uff0c\u547d\u4ee4\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + ~"}),"\uff1a\u7528\u6237\u540d\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + x ~"}),"\uff1a\u5148\u6309",(0,c.jsx)(n.code,{children:"Ctrl + x"}),"\uff0c\u518d\u6309",(0,c.jsx)(n.code,{children:"~"}),"\uff0c\u7b49\u540c\u4e8e",(0,c.jsx)(n.code,{children:"Alt + ~"}),"\uff0c\u7528\u6237\u540d\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + $"}),"\uff1a\u53d8\u91cf\u540d\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + x $"}),"\uff1a\u5148\u6309",(0,c.jsx)(n.code,{children:"Ctrl + x"}),"\uff0c\u518d\u6309",(0,c.jsx)(n.code,{children:"$"}),"\uff0c\u7b49\u540c\u4e8e",(0,c.jsx)(n.code,{children:"Alt + $"}),"\uff0c\u53d8\u91cf\u540d\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + @"}),"\uff1a\u4e3b\u673a\u540d\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + x @"}),"\uff1a\u5148\u6309",(0,c.jsx)(n.code,{children:"Ctrl + x"}),"\uff0c\u518d\u6309",(0,c.jsx)(n.code,{children:"@"}),"\uff0c\u7b49\u540c\u4e8e",(0,c.jsx)(n.code,{children:"Alt + @"}),"\uff0c\u4e3b\u673a\u540d\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + *"}),"\uff1a\u5728\u547d\u4ee4\u884c\u4e00\u6b21\u6027\u63d2\u5165\u6240\u6709\u53ef\u80fd\u7684\u8865\u5168\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + Tab"}),"\uff1a\u5c1d\u8bd5\u7528",(0,c.jsx)(n.code,{children:".bash_history"}),"\u91cc\u9762\u4ee5\u524d\u6267\u884c\u547d\u4ee4\uff0c\u8fdb\u884c\u8865\u5168\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u7684",(0,c.jsx)(n.code,{children:"Alt"}),"\u952e\u4e5f\u53ef\u4ee5\u7528 ESC \u952e\u4ee3\u66ff\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u64cd\u4f5c\u5386\u53f2",children:"\u64cd\u4f5c\u5386\u53f2"}),"\n",(0,c.jsx)(n.h3,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,c.jsxs)(n.p,{children:["Bash \u4f1a\u4fdd\u7559\u7528\u6237\u7684\u64cd\u4f5c\u5386\u53f2\uff0c\u5373\u7528\u6237\u8f93\u5165\u7684\u6bcf\u4e00\u6761\u547d\u4ee4\u90fd\u4f1a\u8bb0\u5f55\u3002\u6709\u4e86\u64cd\u4f5c\u5386\u53f2\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u65b9\u5411\u952e\u7684",(0,c.jsx)(n.code,{children:"\u2191"}),"\u548c",(0,c.jsx)(n.code,{children:"\u2193"}),"\uff0c\u5feb\u901f\u6d4f\u89c8\u4e0a\u4e00\u6761\u548c\u4e0b\u4e00\u6761\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9000\u51fa\u5f53\u524d Shell \u7684\u65f6\u5019\uff0cBash \u4f1a\u5c06\u7528\u6237\u5728\u5f53\u524d Shell \u7684\u64cd\u4f5c\u5386\u53f2\u5199\u5165",(0,c.jsx)(n.code,{children:"~/.bash_history"}),"\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u9ed8\u8ba4\u50a8\u5b58500\u4e2a\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u73af\u5883\u53d8\u91cf",(0,c.jsx)(n.code,{children:"HISTFILE"}),"\u603b\u662f\u6307\u5411\u8fd9\u4e2a\u6587\u4ef6\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo $HISTFILE\n/home/me/.bash_history\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"history"}),"\u547d\u4ee4\u4f1a\u8f93\u51fa\u8fd9\u4e2a\u6587\u4ef6\u7684\u5168\u90e8\u5185\u5bb9\u3002\u7528\u6237\u53ef\u4ee5\u770b\u5230\u6700\u8fd1\u6267\u884c\u8fc7\u7684\u6240\u6709\u547d\u4ee4\uff0c\u6bcf\u6761\u547d\u4ee4\u4e4b\u524d\u90fd\u6709\u884c\u53f7\u3002\u8d8a\u8fd1\u7684\u547d\u4ee4\uff0c\u6392\u5728\u8d8a\u540e\u9762\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ history\n...\n498 echo Goodbye\n499 ls ~\n500 cd\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8f93\u5165\u547d\u4ee4\u65f6\uff0c\u6309\u4e0b",(0,c.jsx)(n.code,{children:"Ctrl + r"}),"\u5feb\u6377\u952e\uff0c\u5c31\u53ef\u4ee5\u641c\u7d22\u64cd\u4f5c\u5386\u53f2\uff0c\u9009\u62e9\u4ee5\u524d\u6267\u884c\u8fc7\u7684\u547d\u4ee4\u3002\u8fd9\u65f6\u952e\u5165\u547d\u4ee4\u7684\u5f00\u5934\u90e8\u5206\uff0cShell \u5c31\u4f1a\u81ea\u52a8\u5728\u5386\u53f2\u6587\u4ef6\u4e2d\uff0c\u67e5\u8be2\u5e76\u663e\u793a\u6700\u8fd1\u4e00\u6761\u5339\u914d\u7684\u7ed3\u679c\uff0c\u8fd9\u65f6\u6309\u4e0b\u56de\u8f66\u952e\uff0c\u5c31\u4f1a\u6267\u884c\u90a3\u6761\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u4e0b\u9762\u7684\u65b9\u6cd5\u53ef\u4ee5\u5feb\u901f\u6267\u884c\u4ee5\u524d\u6267\u884c\u8fc7\u7684\u547d\u4ee4\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo Hello World\nHello World\n\n$ echo Goodbye\nGoodbye\n\n$ !e\necho Goodbye\nGoodbye\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!e"}),"\u8868\u793a\u627e\u51fa\u64cd\u4f5c\u5386\u53f2\u4e4b\u4e2d\uff0c\u6700\u8fd1\u7684\u90a3\u4e00\u6761\u4ee5",(0,c.jsx)(n.code,{children:"e"}),"\u5f00\u5934\u7684\u547d\u4ee4\u5e76\u6267\u884c\u3002Bash \u4f1a\u5148\u8f93\u51fa\u90a3\u4e00\u6761\u547d\u4ee4",(0,c.jsx)(n.code,{children:"echo Goodbye"}),"\uff0c\u7136\u540e\u76f4\u63a5\u6267\u884c\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u540c\u7406\uff0c",(0,c.jsx)(n.code,{children:"!echo"}),"\u4e5f\u4f1a\u6267\u884c\u6700\u8fd1\u4e00\u6761\u4ee5",(0,c.jsx)(n.code,{children:"echo"}),"\u5f00\u5934\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ !echo\necho Goodbye\nGoodbye\n\n$ !echo H\necho Goodbye H\nGoodbye H\n\n$ !echo H G\necho Goodbye H G\nGoodbye H G\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c",(0,c.jsx)(n.code,{children:"!string"}),"\u8bed\u6cd5\u53ea\u4f1a\u5339\u914d\u547d\u4ee4\uff0c\u4e0d\u4f1a\u5339\u914d\u53c2\u6570\u3002\u6240\u4ee5",(0,c.jsx)(n.code,{children:"!echo H"}),"\u4e0d\u4f1a\u6267\u884c",(0,c.jsx)(n.code,{children:"echo Hello World"}),"\uff0c\u800c\u662f\u4f1a\u6267\u884c",(0,c.jsx)(n.code,{children:"echo Goodbye"}),"\uff0c\u5e76\u628a\u53c2\u6570",(0,c.jsx)(n.code,{children:"H"}),"\u9644\u52a0\u5728\u8fd9\u6761\u547d\u4ee4\u4e4b\u540e\u3002\u540c\u7406\uff0c",(0,c.jsx)(n.code,{children:"!echo H G"}),"\u4e5f\u662f\u7b49\u540c\u4e8e",(0,c.jsx)(n.code,{children:"echo Goodbye"}),"\u547d\u4ee4\u4e4b\u540e\u9644\u52a0",(0,c.jsx)(n.code,{children:"H G"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e",(0,c.jsx)(n.code,{children:"!string"}),"\u8bed\u6cd5\u4f1a\u6269\u5c55\u6210\u4ee5\u524d\u6267\u884c\u8fc7\u7684\u547d\u4ee4\uff0c\u6240\u4ee5\u542b\u6709",(0,c.jsx)(n.code,{children:"!"}),"\u7684\u5b57\u7b26\u4e32\u653e\u5728\u53cc\u5f15\u53f7\u91cc\u9762\uff0c\u5fc5\u987b\u975e\u5e38\u5c0f\u5fc3\uff0c\u5982\u679c\u5b83\u540e\u9762\u6709\u975e\u7a7a\u683c\u7684\u5b57\u7b26\uff0c\u5c31\u5f88\u6709\u53ef\u80fd\u62a5\u9519\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "I say:\\"hello!\\""\nbash: !\\: event not found\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u62a5\u9519\uff0c\u539f\u56e0\u662f\u611f\u53f9\u53f7\u540e\u9762\u662f\u4e00\u4e2a\u53cd\u659c\u6760\uff0cBash \u4f1a\u5c1d\u8bd5\u5bfb\u627e\uff0c\u4ee5\u524d\u662f\u5426\u6267\u884c\u8fc7\u53cd\u659c\u6760\u5f00\u5934\u7684\u547d\u4ee4\uff0c\u4e00\u65e6\u627e\u4e0d\u5230\u5c31\u4f1a\u62a5\u9519\u3002\u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u5728\u611f\u53f9\u53f7\u524d\u9762\uff0c\u4e5f\u52a0\u4e0a\u53cd\u659c\u6760\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "I say:\\"hello\\!\\""\nI say:"hello\\!"\n'})}),"\n",(0,c.jsx)(n.h3,{id:"history-\u547d\u4ee4",children:"history \u547d\u4ee4"}),"\n",(0,c.jsxs)(n.p,{children:["\u524d\u9762\u8bf4\u8fc7\uff0c",(0,c.jsx)(n.code,{children:"history"}),"\u547d\u4ee4\u80fd\u663e\u793a\u64cd\u4f5c\u5386\u53f2\uff0c\u5373",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\u7684\u5185\u5bb9\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ history\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528\u8be5\u547d\u4ee4\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u8bfb\u53d6",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\u7684\u597d\u5904\u662f\uff0c\u5b83\u4f1a\u5728\u6240\u6709\u7684\u64cd\u4f5c\u524d\u52a0\u4e0a\u884c\u53f7\uff0c\u6700\u8fd1\u7684\u64cd\u4f5c\u5728\u6700\u540e\u9762\uff0c\u884c\u53f7\u6700\u5927\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7\u5b9a\u5236\u73af\u5883\u53d8\u91cf",(0,c.jsx)(n.code,{children:"HISTTIMEFORMAT"}),"\uff0c\u53ef\u4ee5\u663e\u793a\u6bcf\u4e2a\u64cd\u4f5c\u7684\u65f6\u95f4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ export HISTTIMEFORMAT='%F %T  '\n$ history\n1  2013-06-09 10:40:12   cat /etc/issue\n2  2013-06-09 10:40:12   clear\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"%F"}),"\u76f8\u5f53\u4e8e",(0,c.jsx)(n.code,{children:"%Y - %m - %d"}),"\uff0c",(0,c.jsx)(n.code,{children:"%T"}),"\u76f8\u5f53\u4e8e",(0,c.jsx)(n.code,{children:" %H : %M : %S"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u53ea\u8981\u8bbe\u7f6e",(0,c.jsx)(n.code,{children:"HISTTIMEFORMAT"}),"\u8fd9\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u5c31\u4f1a\u5728",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\u4fdd\u5b58\u547d\u4ee4\u7684\u6267\u884c\u65f6\u95f4\u6233\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5c31\u4e0d\u4f1a\u4fdd\u5b58\u65f6\u95f4\u6233\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u73af\u5883\u53d8\u91cf",(0,c.jsx)(n.code,{children:"HISTSIZE"}),"\u8bbe\u7f6e\u4fdd\u5b58\u5386\u53f2\u64cd\u4f5c\u7684\u6570\u91cf\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ export HISTSIZE=10000\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u547d\u4ee4\u8bbe\u7f6e\u4fdd\u5b58\u8fc7\u53bb10000\u6761\u64cd\u4f5c\u5386\u53f2\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u5e0c\u671b\u4fdd\u5b58\u672c\u6b21\u64cd\u4f5c\u7684\u5386\u53f2\uff0c\u53ef\u4ee5\u8bbe\u7f6e",(0,c.jsx)(n.code,{children:"HISTSIZE"}),"\u7b49\u4e8e0\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"export HISTSIZE=0\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c",(0,c.jsx)(n.code,{children:"HISTSIZE=0"}),"\u5199\u5165\u7528\u6237\u4e3b\u76ee\u5f55\u7684",(0,c.jsx)(n.code,{children:"~/.bashrc"}),"\u6587\u4ef6\uff0c\u90a3\u4e48\u5c31\u4e0d\u4f1a\u4fdd\u7559\u8be5\u7528\u6237\u7684\u64cd\u4f5c\u5386\u53f2\u3002\u5982\u679c\u5199\u5165",(0,c.jsx)(n.code,{children:"/etc/profile"}),"\uff0c\u6574\u4e2a\u7cfb\u7edf\u90fd\u4e0d\u4f1a\u4fdd\u7559\u64cd\u4f5c\u5386\u53f2\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u73af\u5883\u53d8\u91cf",(0,c.jsx)(n.code,{children:"HISTIGNORE"}),"\u53ef\u4ee5\u8bbe\u7f6e\u54ea\u4e9b\u547d\u4ee4\u4e0d\u5199\u5165\u64cd\u4f5c\u5386\u53f2\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"export HISTIGNORE='pwd:ls:exit'\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u8bbe\u7f6e\uff0c",(0,c.jsx)(n.code,{children:"pwd"}),"\u3001",(0,c.jsx)(n.code,{children:"ls"}),"\u3001",(0,c.jsx)(n.code,{children:"exit"}),"\u8fd9\u4e09\u4e2a\u547d\u4ee4\u4e0d\u5199\u5165\u64cd\u4f5c\u5386\u53f2\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u641c\u7d22\u67d0\u4e2a\u4ee5\u524d\u6267\u884c\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u914d\u5408",(0,c.jsx)(n.code,{children:"grep"}),"\u547d\u4ee4\u641c\u7d22\u64cd\u4f5c\u5386\u53f2\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ history | grep /usr/bin\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u8fd4\u56de",(0,c.jsx)(n.code,{children:".bash_history"}),"\u6587\u4ef6\u91cc\u9762\uff0c\u90a3\u4e9b\u5305\u542b",(0,c.jsx)(n.code,{children:"/usr/bin"}),"\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u64cd\u4f5c\u5386\u53f2\u7684\u6bcf\u4e00\u6761\u8bb0\u5f55\u90fd\u6709\u7f16\u53f7\u3002\u77e5\u9053\u4e86\u547d\u4ee4\u7684\u7f16\u53f7\u4ee5\u540e\uff0c\u53ef\u4ee5\u7528",(0,c.jsx)(n.code,{children:"\u611f\u53f9\u53f7 + \u7f16\u53f7"}),"\u6267\u884c\u8be5\u547d\u4ee4\u3002\u5982\u679c\u60f3\u8981\u6267\u884c",(0,c.jsx)(n.code,{children:".bash_history"}),"\u91cc\u9762\u7684\u7b2c8\u6761\u547d\u4ee4\uff0c\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ !8\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"history"}),"\u547d\u4ee4\u7684",(0,c.jsx)(n.code,{children:"-c"}),"\u53c2\u6570\u53ef\u4ee5\u6e05\u9664\u64cd\u4f5c\u5386\u53f2\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ history -c\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u76f8\u5173\u5feb\u6377\u952e",children:"\u76f8\u5173\u5feb\u6377\u952e"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e9b\u4e0e\u64cd\u4f5c\u5386\u53f2\u76f8\u5173\u7684\u5feb\u6377\u952e\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + p"}),"\uff1a\u663e\u793a\u4e0a\u4e00\u4e2a\u547d\u4ee4\uff0c\u4e0e\u5411\u4e0a\u7bad\u5934\u6548\u679c\u76f8\u540c\uff08previous\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + n"}),"\uff1a\u663e\u793a\u4e0b\u4e00\u4e2a\u547d\u4ee4\uff0c\u4e0e\u5411\u4e0b\u7bad\u5934\u6548\u679c\u76f8\u540c\uff08next\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + <"}),"\uff1a\u663e\u793a\u7b2c\u4e00\u4e2a\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + >"}),"\uff1a\u663e\u793a\u6700\u540e\u4e00\u4e2a\u547d\u4ee4\uff0c\u5373\u5f53\u524d\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + o"}),"\uff1a\u6267\u884c\u5386\u53f2\u6587\u4ef6\u91cc\u9762\u7684\u5f53\u524d\u6761\u76ee\uff0c\u5e76\u81ea\u52a8\u663e\u793a\u4e0b\u4e00\u6761\u547d\u4ee4\u3002\u8fd9\u5bf9\u91cd\u590d\u6267\u884c\u67d0\u4e2a\u5e8f\u5217\u7684\u547d\u4ee4\u5f88\u6709\u5e2e\u52a9\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u611f\u53f9\u53f7",(0,c.jsx)(n.code,{children:"!"}),"\u7684\u5feb\u6377\u952e\u5982\u4e0b\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"!!"}),"\uff1a\u6267\u884c\u4e0a\u4e00\u4e2a\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"!n"}),"\uff1a",(0,c.jsx)(n.code,{children:"n"}),"\u4e3a\u6570\u5b57\uff0c\u6267\u884c\u5386\u53f2\u6587\u4ef6\u91cc\u9762\u884c\u53f7\u4e3a",(0,c.jsx)(n.code,{children:"n"}),"\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"!-n"}),"\uff1a\u6267\u884c\u5f53\u524d\u547d\u4ee4\u4e4b\u524d",(0,c.jsx)(n.code,{children:"n"}),"\u6761\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"!string"}),"\uff1a\u6267\u884c\u6700\u8fd1\u4e00\u4e2a\u4ee5\u6307\u5b9a\u5b57\u7b26\u4e32",(0,c.jsx)(n.code,{children:"string"}),"\u5f00\u5934\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"!?string"}),"\uff1a\u6267\u884c\u6700\u8fd1\u4e00\u6761\u5305\u542b\u5b57\u7b26\u4e32",(0,c.jsx)(n.code,{children:"string"}),"\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"!$"}),"\uff1a\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"!*"}),"\uff1a\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6240\u6709\u53c2\u6570\uff0c\u5373\u9664\u4e86\u547d\u4ee4\u4ee5\u5916\u7684\u6240\u6709\u90e8\u5206\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"^string1^string2"}),"\uff1a\u6267\u884c\u6700\u8fd1\u4e00\u6761\u5305\u542b",(0,c.jsx)(n.code,{children:"string1"}),"\u7684\u547d\u4ee4\uff0c\u5c06\u5176\u66ff\u6362\u6210",(0,c.jsx)(n.code,{children:"string2"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0b\u9762\u662f",(0,c.jsx)(n.code,{children:"!$"}),"\u548c",(0,c.jsx)(n.code,{children:"!*"}),"\u7684\u4f8b\u5b50\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ cp a.txt b.txt\n$ echo !$\nb.txt\n\n$ cp a.txt b.txt\n$ echo !*\na.txt b.txt\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"!$"}),"\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\uff08",(0,c.jsx)(n.code,{children:"b.txt"}),"\uff09\uff0c",(0,c.jsx)(n.code,{children:"!*"}),"\u4ee3\u8868\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6240\u6709\u53c2\u6570\uff08",(0,c.jsx)(n.code,{children:"a.txt b.txt"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0b\u9762\u662f",(0,c.jsx)(n.code,{children:"^string1^string2"}),"\u7684\u4f8b\u5b50\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ rm /var/log/httpd/error.log\n$ ^error^access\nrm /var/log/httpd/access.log\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"^error^access"}),"\u5c06\u6700\u8fd1\u4e00\u6761\u542b\u6709",(0,c.jsx)(n.code,{children:"error"}),"\u7684\u547d\u4ee4\u91cc\u9762\u7684",(0,c.jsx)(n.code,{children:"error"}),"\uff0c\u66ff\u6362\u6210",(0,c.jsx)(n.code,{children:"access"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u5e0c\u671b\u786e\u5b9a\u662f\u4ec0\u4e48\u547d\u4ee4\uff0c\u7136\u540e\u518d\u6267\u884c\uff0c\u53ef\u4ee5\u6253\u5f00",(0,c.jsx)(n.code,{children:"histverify"}),"\u9009\u9879\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u4f7f\u7528",(0,c.jsx)(n.code,{children:"!"}),"\u5feb\u6377\u952e\u6240\u4ea7\u751f\u7684\u547d\u4ee4\uff0c\u4f1a\u5148\u6253\u5370\u51fa\u6765\uff0c\u7b49\u5230\u7528\u6237\u6309\u4e0b\u56de\u8f66\u952e\u540e\u518d\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ shopt -s histverify\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5176\u4ed6\u5feb\u6377\u952e",children:"\u5176\u4ed6\u5feb\u6377\u952e"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + j"}),"\uff1a\u7b49\u540c\u4e8e\u56de\u8f66\u952e\uff08LINEFEED\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + m"}),"\uff1a\u7b49\u540c\u4e8e\u56de\u8f66\u952e\uff08CARRIAGE RETURN\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + o"}),"\uff1a\u7b49\u540c\u4e8e\u56de\u8f66\u952e\uff0c\u5e76\u5c55\u793a\u64cd\u4f5c\u5386\u53f2\u7684\u4e0b\u4e00\u4e2a\u547d\u4ee4\u3002\xa0"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + v"}),"\uff1a\u5c06\u4e0b\u4e00\u4e2a\u8f93\u5165\u7684\u7279\u6b8a\u5b57\u7b26\u53d8\u6210\u5b57\u9762\u91cf\uff0c\u6bd4\u5982\u56de\u8f66\u53d8\u6210",(0,c.jsx)(n.code,{children:"^M"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + ["}),"\uff1a\u7b49\u540c\u4e8e ESC\u3002\xa0"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + ."}),"\uff1a\u63d2\u5165\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u8bcd\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Alt + _"}),"\uff1a\u7b49\u540c\u4e8e",(0,c.jsx)(n.code,{children:"Alt + ."}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u7684",(0,c.jsx)(n.code,{children:"Alt + ."}),"\u5feb\u6377\u952e\uff0c\u5bf9\u4e8e\u5f88\u957f\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u6709\u65f6\u4f1a\u975e\u5e38\u65b9\u4fbf\u3002\u56e0\u4e3a Unix \u547d\u4ee4\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u901a\u5e38\u662f\u6587\u4ef6\u8def\u5f84\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ mkdir foo_bar\n$ cd #\u6309\u4e0b Alt + .\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u5728",(0,c.jsx)(n.code,{children:"cd"}),"\u547d\u4ee4\u540e\u6309\u4e0b",(0,c.jsx)(n.code,{children:"Alt + ."}),"\uff0c\u5c31\u4f1a\u81ea\u52a8\u63d2\u5165",(0,c.jsx)(n.code,{children:"foo_bar"}),"\u3002"]})]})}function j(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var c=s(67294);const l={},d=c.createContext(l);function r(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);