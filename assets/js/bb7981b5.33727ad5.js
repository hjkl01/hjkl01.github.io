"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1141],{4082:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>t,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var c=s(5893),i=s(1151);const d={},r="awk",l={id:"bash-tutorial/archives/commands/awk",title:"awk",description:"awk\u662f\u5904\u7406\u6587\u672c\u6587\u4ef6\u7684\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u51e0\u4e4e\u6240\u6709 Linux \u7cfb\u7edf\u90fd\u81ea\u5e26\u8fd9\u4e2a\u7a0b\u5e8f\u3002",source:"@site/docs/bash-tutorial/archives/commands/awk.md",sourceDirName:"bash-tutorial/archives/commands",slug:"/bash-tutorial/archives/commands/awk",permalink:"/docs/bash-tutorial/archives/commands/awk",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/commands/awk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"alias",permalink:"/docs/bash-tutorial/archives/commands/alias"},next:{title:"cal",permalink:"/docs/bash-tutorial/archives/commands/cal"}},a={},o=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"\u6761\u4ef6",id:"\u6761\u4ef6",level:2},{value:"if \u8bed\u53e5",id:"if-\u8bed\u53e5",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"awk",children:"awk"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/AWK",children:(0,c.jsx)(e.code,{children:"awk"})}),"\u662f\u5904\u7406\u6587\u672c\u6587\u4ef6\u7684\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u51e0\u4e4e\u6240\u6709 Linux \u7cfb\u7edf\u90fd\u81ea\u5e26\u8fd9\u4e2a\u7a0b\u5e8f\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5b83\u4f9d\u6b21\u5904\u7406\u6587\u4ef6\u7684\u6bcf\u4e00\u884c\uff0c\u5e76\u8bfb\u53d6\u91cc\u9762\u7684\u6bcf\u4e00\u4e2a\u5b57\u6bb5\u3002\u5bf9\u4e8e\u65e5\u5fd7\u3001CSV \u90a3\u6837\u7684\u6bcf\u884c\u683c\u5f0f\u76f8\u540c\u7684\u6587\u672c\u6587\u4ef6\uff0c",(0,c.jsx)(e.code,{children:"awk"}),"\u53ef\u80fd\u662f\u6700\u65b9\u4fbf\u7684\u5de5\u5177\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:"https://www.wangbase.com/blogimg/asset/201811/bg2018110702.jpg",alt:""})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"awk"}),"\u5176\u5b9e\u4e0d\u4ec5\u4ec5\u662f\u5de5\u5177\u8f6f\u4ef6\uff0c\u8fd8\u662f\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\u3002\u4e0d\u8fc7\uff0c\u8fd9\u91cc\u53ea\u4ecb\u7ecd\u5b83\u7684\u547d\u4ee4\u884c\u7528\u6cd5\uff0c\u5bf9\u4e8e\u5927\u591a\u6570\u573a\u5408\uff0c\u5e94\u8be5\u8db3\u591f\u7528\u4e86\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"awk"}),"\u7684\u57fa\u672c\u7528\u6cd5\u5c31\u662f\u4e0b\u9762\u7684\u5f62\u5f0f\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"# \u683c\u5f0f\n$ awk \u52a8\u4f5c \u6587\u4ef6\u540d\n\n# \u793a\u4f8b\n$ awk '{print $0}' demo.txt\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(e.code,{children:"demo.txt"}),"\u662f",(0,c.jsx)(e.code,{children:"awk"}),"\u6240\u8981\u5904\u7406\u7684\u6587\u672c\u6587\u4ef6\u3002\u524d\u9762\u5355\u5f15\u53f7\u5185\u90e8\u6709\u4e00\u4e2a\u5927\u62ec\u53f7\uff0c\u91cc\u9762\u5c31\u662f\u6bcf\u4e00\u884c\u7684\u5904\u7406\u52a8\u4f5c",(0,c.jsx)(e.code,{children:"print $0"}),"\u3002\u5176\u4e2d\uff0c",(0,c.jsx)(e.code,{children:"print"}),"\u662f\u6253\u5370\u547d\u4ee4\uff0c",(0,c.jsx)(e.code,{children:"$0"}),"\u4ee3\u8868\u5f53\u524d\u884c\uff0c\u56e0\u6b64\u4e0a\u9762\u547d\u4ee4\u7684\u6267\u884c\u7ed3\u679c\uff0c\u5c31\u662f\u628a\u6bcf\u4e00\u884c\u539f\u6837\u6253\u5370\u51fa\u6765\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u4e0b\u9762\uff0c\u6211\u4eec\u5148\u7528\u6807\u51c6\u8f93\u5165\uff08stdin\uff09\u6f14\u793a\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ echo 'this is a test' | awk '{print $0}'\nthis is a test\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(e.code,{children:"print $0"}),"\u5c31\u662f\u628a\u6807\u51c6\u8f93\u5165",(0,c.jsx)(e.code,{children:"this is a test"}),"\uff0c\u91cd\u65b0\u6253\u5370\u4e86\u4e00\u904d\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"awk"}),"\u4f1a\u6839\u636e\u7a7a\u683c\u548c\u5236\u8868\u7b26\uff0c\u5c06\u6bcf\u4e00\u884c\u5206\u6210\u82e5\u5e72\u5b57\u6bb5\uff0c\u4f9d\u6b21\u7528",(0,c.jsx)(e.code,{children:"$1"}),"\u3001",(0,c.jsx)(e.code,{children:"$2"}),"\u3001",(0,c.jsx)(e.code,{children:"$3"}),"\u4ee3\u8868\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u3001\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\u3001\u7b2c\u4e09\u4e2a\u5b57\u6bb5\u7b49\u7b49\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ echo 'this is a test' | awk '{print $3}'\na\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(e.code,{children:"$3"}),"\u4ee3\u8868",(0,c.jsx)(e.code,{children:"this is a test"}),"\u7684\u7b2c\u4e09\u4e2a\u5b57\u6bb5",(0,c.jsx)(e.code,{children:"a"}),"\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0b\u9762\uff0c\u4e3a\u4e86\u4fbf\u4e8e\u4e3e\u4f8b\uff0c\u6211\u4eec\u628a",(0,c.jsx)(e.code,{children:"/etc/passwd"}),"\u6587\u4ef6\u4fdd\u5b58\u6210",(0,c.jsx)(e.code,{children:"demo.txt"}),"\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"root:x:0:0:root:/root:/usr/bin/zsh\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nsync:x:4:65534:sync:/bin:/bin/sync\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u8fd9\u4e2a\u6587\u4ef6\u7684\u5b57\u6bb5\u5206\u9694\u7b26\u662f\u5192\u53f7\uff08",(0,c.jsx)(e.code,{children:":"}),"\uff09\uff0c\u6240\u4ee5\u8981\u7528",(0,c.jsx)(e.code,{children:"-F"}),"\u53c2\u6570\u6307\u5b9a\u5206\u9694\u7b26\u4e3a\u5192\u53f7\u3002\u7136\u540e\uff0c\u624d\u80fd\u63d0\u53d6\u5230\u5b83\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ awk -F ':' '{ print $1 }' demo.txt\nroot\ndaemon\nbin\nsys\nsync\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53d8\u91cf",children:"\u53d8\u91cf"}),"\n",(0,c.jsxs)(e.p,{children:["\u9664\u4e86",(0,c.jsx)(e.code,{children:"$ + \u6570\u5b57"}),"\u8868\u793a\u67d0\u4e2a\u5b57\u6bb5\uff0c",(0,c.jsx)(e.code,{children:"awk"}),"\u8fd8\u63d0\u4f9b\u5176\u4ed6\u4e00\u4e9b\u53d8\u91cf\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u53d8\u91cf",(0,c.jsx)(e.code,{children:"NF"}),"\u8868\u793a\u5f53\u524d\u884c\u6709\u591a\u5c11\u4e2a\u5b57\u6bb5\uff0c\u56e0\u6b64",(0,c.jsx)(e.code,{children:"$NF"}),"\u5c31\u4ee3\u8868\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ echo 'this is a test' | awk '{print $NF}'\ntest\n"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"$(NF-1)"}),"\u4ee3\u8868\u5012\u6570\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"$ awk -F ':' '{print $1, $(NF-1)}' demo.txt\nroot /root\ndaemon /usr/sbin\nbin /bin\nsys /dev\nsync /bin\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(e.code,{children:"print"}),"\u547d\u4ee4\u91cc\u9762\u7684\u9017\u53f7\uff0c\u8868\u793a\u8f93\u51fa\u7684\u65f6\u5019\uff0c\u4e24\u4e2a\u90e8\u5206\u4e4b\u95f4\u4f7f\u7528\u7a7a\u683c\u5206\u9694\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u53d8\u91cf",(0,c.jsx)(e.code,{children:"NR"}),"\u8868\u793a\u5f53\u524d\u5904\u7406\u7684\u662f\u7b2c\u51e0\u884c\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ awk -F ':' '{print NR \") \" $1}' demo.txt\n1) root\n2) daemon\n3) bin\n4) sys\n5) sync\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(e.code,{children:"print"}),"\u547d\u4ee4\u91cc\u9762\uff0c\u5982\u679c\u539f\u6837\u8f93\u51fa\u5b57\u7b26\uff0c\u8981\u653e\u5728\u53cc\u5f15\u53f7\u91cc\u9762\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"awk"}),"\u7684\u5176\u4ed6\u5185\u7f6e\u53d8\u91cf\u5982\u4e0b\u3002"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"FILENAME"}),"\uff1a\u5f53\u524d\u6587\u4ef6\u540d"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"FS"}),"\uff1a\u5b57\u6bb5\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u662f\u7a7a\u683c\u548c\u5236\u8868\u7b26\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"RS"}),"\uff1a\u884c\u5206\u9694\u7b26\uff0c\u7528\u4e8e\u5206\u5272\u6bcf\u4e00\u884c\uff0c\u9ed8\u8ba4\u662f\u6362\u884c\u7b26\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"OFS"}),"\uff1a\u8f93\u51fa\u5b57\u6bb5\u7684\u5206\u9694\u7b26\uff0c\u7528\u4e8e\u6253\u5370\u65f6\u5206\u9694\u5b57\u6bb5\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u683c\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"ORS"}),"\uff1a\u8f93\u51fa\u8bb0\u5f55\u7684\u5206\u9694\u7b26\uff0c\u7528\u4e8e\u6253\u5370\u65f6\u5206\u9694\u8bb0\u5f55\uff0c\u9ed8\u8ba4\u4e3a\u6362\u884c\u7b26\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"OFMT"}),"\uff1a\u6570\u5b57\u8f93\u51fa\u7684\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3a",(0,c.jsx)(e.code,{children:"\uff05.6g"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u51fd\u6570",children:"\u51fd\u6570"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"awk"}),"\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5185\u7f6e\u51fd\u6570\uff0c\u65b9\u4fbf\u5bf9\u539f\u59cb\u6570\u636e\u7684\u5904\u7406\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u51fd\u6570",(0,c.jsx)(e.code,{children:"toupper()"}),"\u7528\u4e8e\u5c06\u5b57\u7b26\u8f6c\u4e3a\u5927\u5199\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ awk -F ':' '{ print toupper($1) }' demo.txt\nROOT\nDAEMON\nBIN\nSYS\nSYNC\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u8f93\u51fa\u65f6\u90fd\u53d8\u6210\u4e86\u5927\u5199\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u5176\u4ed6\u5e38\u7528\u51fd\u6570\u5982\u4e0b\u3002"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"tolower()"}),"\uff1a\u5b57\u7b26\u8f6c\u4e3a\u5c0f\u5199\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"length()"}),"\uff1a\u8fd4\u56de\u5b57\u7b26\u4e32\u957f\u5ea6\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"substr()"}),"\uff1a\u8fd4\u56de\u5b50\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"sin()"}),"\uff1a\u6b63\u5f26\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"cos()"}),"\uff1a\u4f59\u5f26\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"sqrt()"}),"\uff1a\u5e73\u65b9\u6839\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"rand()"}),"\uff1a\u968f\u673a\u6570\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"awk"}),"\u5185\u7f6e\u51fd\u6570\u7684\u5b8c\u6574\u5217\u8868\uff0c\u53ef\u4ee5\u67e5\u770b",(0,c.jsx)(e.a,{href:"https://www.gnu.org/software/gawk/manual/html_node/Built_002din.html#Built_002din",children:"\u624b\u518c"}),"\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u6761\u4ef6",children:"\u6761\u4ef6"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"awk"}),"\u5141\u8bb8\u6307\u5b9a\u8f93\u51fa\u6761\u4ef6\uff0c\u53ea\u8f93\u51fa\u7b26\u5408\u6761\u4ef6\u7684\u884c\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u8f93\u51fa\u6761\u4ef6\u8981\u5199\u5728\u52a8\u4f5c\u7684\u524d\u9762\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ awk '\u6761\u4ef6 \u52a8\u4f5c' \u6587\u4ef6\u540d\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8bf7\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ awk -F ':' '/usr/ {print $1}' demo.txt\nroot\ndaemon\nbin\nsys\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(e.code,{children:"print"}),"\u547d\u4ee4\u524d\u9762\u662f\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u53ea\u8f93\u51fa\u5305\u542b",(0,c.jsx)(e.code,{children:"usr"}),"\u7684\u884c\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u4f8b\u5b50\u53ea\u8f93\u51fa\u5947\u6570\u884c\uff0c\u4ee5\u53ca\u8f93\u51fa\u7b2c\u4e09\u884c\u4ee5\u540e\u7684\u884c\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"# \u8f93\u51fa\u5947\u6570\u884c\n$ awk -F ':' 'NR % 2 == 1 {print $1}' demo.txt\nroot\nbin\nsync\n\n# \u8f93\u51fa\u7b2c\u4e09\u884c\u4ee5\u540e\u7684\u884c\n$ awk -F ':' 'NR >3 {print $1}' demo.txt\nsys\nsync\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u4f8b\u5b50\u8f93\u51fa\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u7b49\u4e8e\u6307\u5b9a\u503c\u7684\u884c\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ awk -F ':' '$1 == \"root\" {print $1}' demo.txt\nroot\n\n$ awk -F ':' '$1 == \"root\" || $1 == \"bin\" {print $1}' demo.txt\nroot\nbin\n"})}),"\n",(0,c.jsx)(e.h2,{id:"if-\u8bed\u53e5",children:"if \u8bed\u53e5"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"awk"}),"\u63d0\u4f9b\u4e86",(0,c.jsx)(e.code,{children:"if"}),"\u7ed3\u6784\uff0c\u7528\u4e8e\u7f16\u5199\u590d\u6742\u7684\u6761\u4ef6\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ awk -F ':' '{if ($1 > \"m\") print $1}' demo.txt\nroot\nsys\nsync\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u8f93\u51fa\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5927\u4e8e",(0,c.jsx)(e.code,{children:"m"}),"\u7684\u884c\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"if"}),"\u7ed3\u6784\u8fd8\u53ef\u4ee5\u6307\u5b9a",(0,c.jsx)(e.code,{children:"else"}),"\u90e8\u5206\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"$ awk -F ':' '{if ($1 > \"m\") print $1; else print \"---\"}' demo.txt\nroot\n---\n---\nsys\nsync\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"https://gregable.com/2010/09/why-you-should-know-just-little-awk.html",children:"An Awk tutorial by Example"}),", Greg Grothaus"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"https://likegeeks.com/awk-command/",children:"30 Examples for Awk Command in Text Processing"}),", Mokhtar Ebrahim"]}),"\n"]})]})}function t(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>r});var c=s(7294);const i={},d=c.createContext(i);function r(n){const e=c.useContext(d);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),c.createElement(d.Provider,{value:e},n.children)}}}]);