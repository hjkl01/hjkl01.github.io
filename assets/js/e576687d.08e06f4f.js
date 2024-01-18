"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9919],{17967:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var t=s(85893),r=s(11151);const c={},l="mktemp \u547d\u4ee4\uff0ctrap \u547d\u4ee4",i={id:"bash-tutorial/mktemp",title:"mktemp \u547d\u4ee4\uff0ctrap \u547d\u4ee4",description:"Bash \u811a\u672c\u6709\u65f6\u9700\u8981\u521b\u5efa\u4e34\u65f6\u6587\u4ef6\u6216\u4e34\u65f6\u76ee\u5f55\u3002\u5e38\u89c1\u7684\u505a\u6cd5\u662f\uff0c\u5728/tmp\u76ee\u5f55\u91cc\u9762\u521b\u5efa\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u8fd9\u6837\u505a\u6709\u5f88\u591a\u5f0a\u7aef\uff0c\u4f7f\u7528mktemp\u547d\u4ee4\u662f\u6700\u5b89\u5168\u7684\u505a\u6cd5\u3002",source:"@site/docs/bash-tutorial/mktemp.md",sourceDirName:"bash-tutorial",slug:"/bash-tutorial/mktemp",permalink:"/docs/bash-tutorial/mktemp",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/mktemp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5faa\u73af",permalink:"/docs/bash-tutorial/loop"},next:{title:"\u547d\u4ee4\u63d0\u793a\u7b26",permalink:"/docs/bash-tutorial/prompt"}},d={},a=[{value:"\u4e34\u65f6\u6587\u4ef6\u7684\u5b89\u5168\u95ee\u9898",id:"\u4e34\u65f6\u6587\u4ef6\u7684\u5b89\u5168\u95ee\u9898",level:2},{value:"mktemp \u547d\u4ee4\u7684\u7528\u6cd5",id:"mktemp-\u547d\u4ee4\u7684\u7528\u6cd5",level:2},{value:"mktemp \u547d\u4ee4\u7684\u53c2\u6570",id:"mktemp-\u547d\u4ee4\u7684\u53c2\u6570",level:2},{value:"trap \u547d\u4ee4",id:"trap-\u547d\u4ee4",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"mktemp-\u547d\u4ee4trap-\u547d\u4ee4",children:"mktemp \u547d\u4ee4\uff0ctrap \u547d\u4ee4"}),"\n",(0,t.jsxs)(n.p,{children:["Bash \u811a\u672c\u6709\u65f6\u9700\u8981\u521b\u5efa\u4e34\u65f6\u6587\u4ef6\u6216\u4e34\u65f6\u76ee\u5f55\u3002\u5e38\u89c1\u7684\u505a\u6cd5\u662f\uff0c\u5728",(0,t.jsx)(n.code,{children:"/tmp"}),"\u76ee\u5f55\u91cc\u9762\u521b\u5efa\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u8fd9\u6837\u505a\u6709\u5f88\u591a\u5f0a\u7aef\uff0c\u4f7f\u7528",(0,t.jsx)(n.code,{children:"mktemp"}),"\u547d\u4ee4\u662f\u6700\u5b89\u5168\u7684\u505a\u6cd5\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e34\u65f6\u6587\u4ef6\u7684\u5b89\u5168\u95ee\u9898",children:"\u4e34\u65f6\u6587\u4ef6\u7684\u5b89\u5168\u95ee\u9898"}),"\n",(0,t.jsxs)(n.p,{children:["\u76f4\u63a5\u521b\u5efa\u4e34\u65f6\u6587\u4ef6\uff0c\u5c24\u5176\u5728",(0,t.jsx)(n.code,{children:"/tmp"}),"\u76ee\u5f55\u91cc\u9762\uff0c\u5f80\u5f80\u4f1a\u5bfc\u81f4\u5b89\u5168\u95ee\u9898\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\uff0c",(0,t.jsx)(n.code,{children:"/tmp"}),"\u76ee\u5f55\u662f\u6240\u6709\u4eba\u53ef\u8bfb\u5199\u7684\uff0c\u4efb\u4f55\u7528\u6237\u90fd\u53ef\u4ee5\u5f80\u8be5\u76ee\u5f55\u91cc\u9762\u5199\u6587\u4ef6\u3002\u521b\u5efa\u7684\u4e34\u65f6\u6587\u4ef6\u4e5f\u662f\u6240\u6709\u4eba\u53ef\u8bfb\u7684\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ touch /tmp/info.txt\n$ ls -l /tmp/info.txt\n-rw-r--r-- 1 ruanyf ruanyf 0 12\u6708 28 17:12 /tmp/info.txt\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u5728",(0,t.jsx)(n.code,{children:"/tmp"}),"\u76ee\u5f55\u76f4\u63a5\u521b\u5efa\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u9ed8\u8ba4\u662f\u6240\u6709\u4eba\u53ef\u8bfb\u7684\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u6b21\uff0c\u5982\u679c\u653b\u51fb\u8005\u77e5\u9053\u4e34\u65f6\u6587\u4ef6\u7684\u6587\u4ef6\u540d\uff0c\u4ed6\u53ef\u4ee5\u521b\u5efa\u7b26\u53f7\u94fe\u63a5\uff0c\u94fe\u63a5\u5230\u4e34\u65f6\u6587\u4ef6\uff0c\u53ef\u80fd\u5bfc\u81f4\u7cfb\u7edf\u8fd0\u884c\u5f02\u5e38\u3002\u653b\u51fb\u8005\u4e5f\u53ef\u80fd\u5411\u811a\u672c\u63d0\u4f9b\u4e00\u4e9b\u6076\u610f\u6570\u636e\u3002\u56e0\u6b64\uff0c\u4e34\u65f6\u6587\u4ef6\u6700\u597d\u4f7f\u7528\u4e0d\u53ef\u9884\u6d4b\u3001\u6bcf\u6b21\u90fd\u4e0d\u4e00\u6837\u7684\u6587\u4ef6\u540d\uff0c\u9632\u6b62\u88ab\u5229\u7528\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540e\uff0c\u4e34\u65f6\u6587\u4ef6\u4f7f\u7528\u5b8c\u6bd5\uff0c\u5e94\u8be5\u5220\u9664\u3002\u4f46\u662f\uff0c\u811a\u672c\u610f\u5916\u9000\u51fa\u65f6\uff0c\u5f80\u5f80\u4f1a\u5ffd\u7565\u6e05\u7406\u4e34\u65f6\u6587\u4ef6\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u751f\u6210\u4e34\u65f6\u6587\u4ef6\u5e94\u8be5\u9075\u5faa\u4e0b\u9762\u7684\u89c4\u5219\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u521b\u5efa\u524d\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u786e\u4fdd\u4e34\u65f6\u6587\u4ef6\u5df2\u6210\u529f\u521b\u5efa\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e34\u65f6\u6587\u4ef6\u5fc5\u987b\u6709\u6743\u9650\u7684\u9650\u5236\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e34\u65f6\u6587\u4ef6\u8981\u4f7f\u7528\u4e0d\u53ef\u9884\u6d4b\u7684\u6587\u4ef6\u540d\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u811a\u672c\u9000\u51fa\u65f6\uff0c\u8981\u5220\u9664\u4e34\u65f6\u6587\u4ef6\uff08\u4f7f\u7528",(0,t.jsx)(n.code,{children:"trap"}),"\u547d\u4ee4\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"mktemp-\u547d\u4ee4\u7684\u7528\u6cd5",children:"mktemp \u547d\u4ee4\u7684\u7528\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"mktemp"}),"\u547d\u4ee4\u5c31\u662f\u4e3a\u5b89\u5168\u521b\u5efa\u4e34\u65f6\u6587\u4ef6\u800c\u8bbe\u8ba1\u7684\u3002\u867d\u7136\u5728\u521b\u5efa\u4e34\u65f6\u6587\u4ef6\u4e4b\u524d\uff0c\u5b83\u4e0d\u4f1a\u68c0\u67e5\u4e34\u65f6\u6587\u4ef6\u662f\u5426\u5b58\u5728\uff0c\u4f46\u662f\u5b83\u652f\u6301\u552f\u4e00\u6587\u4ef6\u540d\u548c\u6e05\u9664\u673a\u5236\uff0c\u56e0\u6b64\u53ef\u4ee5\u51cf\u8f7b\u5b89\u5168\u653b\u51fb\u7684\u98ce\u9669\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u76f4\u63a5\u8fd0\u884c",(0,t.jsx)(n.code,{children:"mktemp"}),"\u547d\u4ee4\uff0c\u5c31\u80fd\u751f\u6210\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ mktemp\n/tmp/tmp.4GcsWSG4vj\n\n$ ls -l /tmp/tmp.4GcsWSG4vj\n-rw------- 1 ruanyf ruanyf 0 12\u6708 28 12:49 /tmp/tmp.4GcsWSG4vj\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,t.jsx)(n.code,{children:"mktemp"}),"\u547d\u4ee4\u751f\u6210\u7684\u4e34\u65f6\u6587\u4ef6\u540d\u662f\u968f\u673a\u7684\uff0c\u800c\u4e14\u6743\u9650\u662f\u53ea\u6709\u7528\u6237\u672c\u4eba\u53ef\u8bfb\u5199\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["Bash \u811a\u672c\u4f7f\u7528",(0,t.jsx)(n.code,{children:"mktemp"}),"\u547d\u4ee4\u7684\u7528\u6cd5\u5982\u4e0b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nTMPFILE=$(mktemp)\necho "Our temp file is $TMPFILE"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u786e\u4fdd\u4e34\u65f6\u6587\u4ef6\u521b\u5efa\u6210\u529f\uff0c",(0,t.jsx)(n.code,{children:"mktemp"}),"\u547d\u4ee4\u540e\u9762\u6700\u597d\u4f7f\u7528 OR \u8fd0\u7b97\u7b26\uff08",(0,t.jsx)(n.code,{children:"||"}),"\uff09\uff0c\u4fdd\u8bc1\u521b\u5efa\u5931\u8d25\u65f6\u9000\u51fa\u811a\u672c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nTMPFILE=$(mktemp) || exit 1\necho "Our temp file is $TMPFILE"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u4fdd\u8bc1\u811a\u672c\u9000\u51fa\u65f6\u4e34\u65f6\u6587\u4ef6\u88ab\u5220\u9664\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"trap"}),"\u547d\u4ee4\u6307\u5b9a\u9000\u51fa\u65f6\u7684\u6e05\u9664\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\ntrap \'rm -f "$TMPFILE"\' EXIT\n\nTMPFILE=$(mktemp) || exit 1\necho "Our temp file is $TMPFILE"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"mktemp-\u547d\u4ee4\u7684\u53c2\u6570",children:"mktemp \u547d\u4ee4\u7684\u53c2\u6570"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-d"}),"\u53c2\u6570\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u76ee\u5f55\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ mktemp -d\n/tmp/tmp.Wcau5UjmN6\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-p"}),"\u53c2\u6570\u53ef\u4ee5\u6307\u5b9a\u4e34\u65f6\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\u3002\u9ed8\u8ba4\u662f\u4f7f\u7528",(0,t.jsx)(n.code,{children:"$TMPDIR"}),"\u73af\u5883\u53d8\u91cf\u6307\u5b9a\u7684\u76ee\u5f55\uff0c\u5982\u679c\u8fd9\u4e2a\u53d8\u91cf\u6ca1\u8bbe\u7f6e\uff0c\u90a3\u4e48\u4f7f\u7528",(0,t.jsx)(n.code,{children:"/tmp"}),"\u76ee\u5f55\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ mktemp -p /home/ruanyf/\n/home/ruanyf/tmp.FOKEtvs2H3\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-t"}),"\u53c2\u6570\u53ef\u4ee5\u6307\u5b9a\u4e34\u65f6\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u6a21\u677f\uff0c\u6a21\u677f\u7684\u672b\u5c3e\u5fc5\u987b\u81f3\u5c11\u5305\u542b\u4e09\u4e2a\u8fde\u7eed\u7684",(0,t.jsx)(n.code,{children:"X"}),"\u5b57\u7b26\uff0c\u8868\u793a\u968f\u673a\u5b57\u7b26\uff0c\u5efa\u8bae\u81f3\u5c11\u4f7f\u7528\u516d\u4e2a",(0,t.jsx)(n.code,{children:"X"}),"\u3002\u9ed8\u8ba4\u7684\u6587\u4ef6\u540d\u6a21\u677f\u662f",(0,t.jsx)(n.code,{children:"tmp."}),"\u540e\u63a5\u5341\u4e2a\u968f\u673a\u5b57\u7b26\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ mktemp -t mytemp.XXXXXXX\n/tmp/mytemp.yZ1HgZV\n"})}),"\n",(0,t.jsx)(n.h2,{id:"trap-\u547d\u4ee4",children:"trap \u547d\u4ee4"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"trap"}),"\u547d\u4ee4\u7528\u6765\u5728 Bash \u811a\u672c\u4e2d\u54cd\u5e94\u7cfb\u7edf\u4fe1\u53f7\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u5e38\u89c1\u7684\u7cfb\u7edf\u4fe1\u53f7\u5c31\u662f SIGINT\uff08\u4e2d\u65ad\uff09\uff0c\u5373\u6309 Ctrl + C \u6240\u4ea7\u751f\u7684\u4fe1\u53f7\u3002",(0,t.jsx)(n.code,{children:"trap"}),"\u547d\u4ee4\u7684",(0,t.jsx)(n.code,{children:"-l"}),"\u53c2\u6570\uff0c\u53ef\u4ee5\u5217\u51fa\u6240\u6709\u7684\u7cfb\u7edf\u4fe1\u53f7\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ trap -l\n 1) SIGHUP\t 2) SIGINT\t 3) SIGQUIT\t 4) SIGILL\t 5) SIGTRAP\n 6) SIGABRT\t 7) SIGBUS\t 8) SIGFPE\t 9) SIGKILL\t10) SIGUSR1\n11) SIGSEGV\t12) SIGUSR2\t13) SIGPIPE\t14) SIGALRM\t15) SIGTERM\n16) SIGSTKFLT\t17) SIGCHLD\t18) SIGCONT\t19) SIGSTOP\t20) SIGTSTP\n21) SIGTTIN\t22) SIGTTOU\t23) SIGURG\t24) SIGXCPU\t25) SIGXFSZ\n26) SIGVTALRM\t27) SIGPROF\t28) SIGWINCH\t29) SIGIO\t30) SIGPWR\n31) SIGSYS\t34) SIGRTMIN\t35) SIGRTMIN+1\t36) SIGRTMIN+2\t37) SIGRTMIN+3\n38) SIGRTMIN+4\t39) SIGRTMIN+5\t40) SIGRTMIN+6\t41) SIGRTMIN+7\t42) SIGRTMIN+8\n43) SIGRTMIN+9\t44) SIGRTMIN+10\t45) SIGRTMIN+11\t46) SIGRTMIN+12\t47) SIGRTMIN+13\n48) SIGRTMIN+14\t49) SIGRTMIN+15\t50) SIGRTMAX-14\t51) SIGRTMAX-13\t52) SIGRTMAX-12\n53) SIGRTMAX-11\t54) SIGRTMAX-10\t55) SIGRTMAX-9\t56) SIGRTMAX-8\t57) SIGRTMAX-7\n58) SIGRTMAX-6\t59) SIGRTMAX-5\t60) SIGRTMAX-4\t61) SIGRTMAX-3\t62) SIGRTMAX-2\n63) SIGRTMAX-1\t64) SIGRTMAX\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"trap"}),"\u7684\u547d\u4ee4\u683c\u5f0f\u5982\u4e0b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ trap [\u52a8\u4f5c] [\u4fe1\u53f71] [\u4fe1\u53f72] ...\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u201c\u52a8\u4f5c\u201d\u662f\u4e00\u4e2a Bash \u547d\u4ee4\uff0c\u201c\u4fe1\u53f7\u201d\u5e38\u7528\u7684\u6709\u4ee5\u4e0b\u51e0\u4e2a\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"HUP\uff1a\u7f16\u53f71\uff0c\u811a\u672c\u4e0e\u6240\u5728\u7684\u7ec8\u7aef\u8131\u79bb\u8054\u7cfb\u3002"}),"\n",(0,t.jsx)(n.li,{children:"INT\uff1a\u7f16\u53f72\uff0c\u7528\u6237\u6309\u4e0b Ctrl + C\uff0c\u610f\u56fe\u8ba9\u811a\u672c\u7ec8\u6b62\u8fd0\u884c\u3002"}),"\n",(0,t.jsx)(n.li,{children:"QUIT\uff1a\u7f16\u53f73\uff0c\u7528\u6237\u6309\u4e0b Ctrl + \u659c\u6760\uff0c\u610f\u56fe\u9000\u51fa\u811a\u672c\u3002"}),"\n",(0,t.jsx)(n.li,{children:"KILL\uff1a\u7f16\u53f79\uff0c\u8be5\u4fe1\u53f7\u7528\u4e8e\u6740\u6b7b\u8fdb\u7a0b\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["TERM\uff1a\u7f16\u53f715\uff0c\u8fd9\u662f",(0,t.jsx)(n.code,{children:"kill"}),"\u547d\u4ee4\u53d1\u51fa\u7684\u9ed8\u8ba4\u4fe1\u53f7\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"EXIT\uff1a\u7f16\u53f70\uff0c\u8fd9\u4e0d\u662f\u7cfb\u7edf\u4fe1\u53f7\uff0c\u800c\u662f Bash \u811a\u672c\u7279\u6709\u7684\u4fe1\u53f7\uff0c\u4e0d\u7ba1\u4ec0\u4e48\u60c5\u51b5\uff0c\u53ea\u8981\u9000\u51fa\u811a\u672c\u5c31\u4f1a\u4ea7\u751f\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"trap"}),"\u547d\u4ee4\u54cd\u5e94",(0,t.jsx)(n.code,{children:"EXIT"}),"\u4fe1\u53f7\u7684\u5199\u6cd5\u5982\u4e0b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ trap 'rm -f \"$TMPFILE\"' EXIT\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c\u811a\u672c\u9047\u5230",(0,t.jsx)(n.code,{children:"EXIT"}),"\u4fe1\u53f7\u65f6\uff0c\u5c31\u4f1a\u6267\u884c",(0,t.jsx)(n.code,{children:'rm -f "$TMPFILE"'}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"trap \u547d\u4ee4\u7684\u5e38\u89c1\u4f7f\u7528\u573a\u666f\uff0c\u5c31\u662f\u5728 Bash \u811a\u672c\u4e2d\u6307\u5b9a\u9000\u51fa\u65f6\u6267\u884c\u7684\u6e05\u7406\u547d\u4ee4\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\ntrap 'rm -f \"$TMPFILE\"' EXIT\n\nTMPFILE=$(mktemp) || exit 1\nls /etc > $TMPFILE\nif grep -qi \"kernel\" $TMPFILE; then\n  echo 'find'\nfi\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u4e0d\u7ba1\u662f\u811a\u672c\u6b63\u5e38\u6267\u884c\u7ed3\u675f\uff0c\u8fd8\u662f\u7528\u6237\u6309 Ctrl + C \u7ec8\u6b62\uff0c\u90fd\u4f1a\u4ea7\u751f",(0,t.jsx)(n.code,{children:"EXIT"}),"\u4fe1\u53f7\uff0c\u4ece\u800c\u89e6\u53d1\u5220\u9664\u4e34\u65f6\u6587\u4ef6\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c",(0,t.jsx)(n.code,{children:"trap"}),"\u547d\u4ee4\u5fc5\u987b\u653e\u5728\u811a\u672c\u7684\u5f00\u5934\u3002\u5426\u5219\uff0c\u5b83\u4e0a\u65b9\u7684\u4efb\u4f55\u547d\u4ee4\u5bfc\u81f4\u811a\u672c\u9000\u51fa\uff0c\u90fd\u4e0d\u4f1a\u88ab\u5b83\u6355\u83b7\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c",(0,t.jsx)(n.code,{children:"trap"}),"\u9700\u8981\u89e6\u53d1\u591a\u6761\u547d\u4ee4\uff0c\u53ef\u4ee5\u5c01\u88c5\u4e00\u4e2a Bash \u51fd\u6570\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"function egress {\n  command1\n  command2\n  command3\n}\n\ntrap egress EXIT\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.putorius.net/working-with-temporary-files.html",children:"Working with Temporary Files and Directories in Shell Scripts"}),", Steven Vona"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.putorius.net/using-trap-to-exit-bash-scripts-cleanly.html",children:"Using Trap to Exit Bash Scripts Cleanly"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://mywiki.wooledge.org/SignalTrap",children:"Sending and Trapping Signals"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(67294);const r={},c=t.createContext(r);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);