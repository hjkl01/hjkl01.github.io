"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2838],{36310:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>t,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var c=n(85893),h=n(11151);const l={},r="set \u547d\u4ee4\uff0cshopt \u547d\u4ee4",d={id:"bash-tutorial/set",title:"set \u547d\u4ee4\uff0cshopt \u547d\u4ee4",description:"set\u547d\u4ee4\u662f Bash \u811a\u672c\u7684\u91cd\u8981\u73af\u8282\uff0c\u5374\u5e38\u5e38\u88ab\u5ffd\u89c6\uff0c\u5bfc\u81f4\u811a\u672c\u7684\u5b89\u5168\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u51fa\u95ee\u9898\u3002\u672c\u7ae0\u4ecb\u7ecdset\u7684\u57fa\u672c\u7528\u6cd5\uff0c\u5e2e\u52a9\u4f60\u5199\u51fa\u66f4\u5b89\u5168\u7684 Bash \u811a\u672c\u3002",source:"@site/docs/bash-tutorial/set.md",sourceDirName:"bash-tutorial",slug:"/bash-tutorial/set",permalink:"/docs/bash-tutorial/set",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/set.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bash \u811a\u672c\u5165\u95e8",permalink:"/docs/bash-tutorial/script"},next:{title:"\u76ee\u5f55\u5806\u6808",permalink:"/docs/bash-tutorial/stack"}},i={},a=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"set -u",id:"set--u",level:2},{value:"set -x",id:"set--x",level:2},{value:"Bash \u7684\u9519\u8bef\u5904\u7406",id:"bash-\u7684\u9519\u8bef\u5904\u7406",level:2},{value:"set -e",id:"set--e",level:2},{value:"set -o pipefail",id:"set--o-pipefail",level:2},{value:"set -E",id:"set--e-1",level:2},{value:"\u5176\u4ed6\u53c2\u6570",id:"\u5176\u4ed6\u53c2\u6570",level:2},{value:"set \u547d\u4ee4\u603b\u7ed3",id:"set-\u547d\u4ee4\u603b\u7ed3",level:2},{value:"shopt \u547d\u4ee4",id:"shopt-\u547d\u4ee4",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,h.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"set-\u547d\u4ee4shopt-\u547d\u4ee4",children:"set \u547d\u4ee4\uff0cshopt \u547d\u4ee4"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"set"}),"\u547d\u4ee4\u662f Bash \u811a\u672c\u7684\u91cd\u8981\u73af\u8282\uff0c\u5374\u5e38\u5e38\u88ab\u5ffd\u89c6\uff0c\u5bfc\u81f4\u811a\u672c\u7684\u5b89\u5168\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u51fa\u95ee\u9898\u3002\u672c\u7ae0\u4ecb\u7ecd",(0,c.jsx)(s.code,{children:"set"}),"\u7684\u57fa\u672c\u7528\u6cd5\uff0c\u5e2e\u52a9\u4f60\u5199\u51fa\u66f4\u5b89\u5168\u7684 Bash \u811a\u672c\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,c.jsx)(s.p,{children:"\u6211\u4eec\u77e5\u9053\uff0cBash \u6267\u884c\u811a\u672c\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u5b50 Shell\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash script.sh\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(s.code,{children:"script.sh"}),"\u662f\u5728\u4e00\u4e2a\u5b50 Shell \u91cc\u9762\u6267\u884c\u3002\u8fd9\u4e2a\u5b50 Shell \u5c31\u662f\u811a\u672c\u7684\u6267\u884c\u73af\u5883\uff0cBash \u9ed8\u8ba4\u7ed9\u5b9a\u4e86\u8fd9\u4e2a\u73af\u5883\u7684\u5404\u79cd\u53c2\u6570\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"set"}),"\u547d\u4ee4\u7528\u6765\u4fee\u6539\u5b50 Shell \u73af\u5883\u7684\u8fd0\u884c\u53c2\u6570\uff0c\u5373\u5b9a\u5236\u73af\u5883\u3002\u4e00\u5171\u6709\u5341\u51e0\u4e2a\u53c2\u6570\u53ef\u4ee5\u5b9a\u5236\uff0c",(0,c.jsx)(s.a,{href:"https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html",children:"\u5b98\u65b9\u624b\u518c"}),"\u6709\u5b8c\u6574\u6e05\u5355\uff0c\u672c\u7ae0\u4ecb\u7ecd\u5176\u4e2d\u6700\u5e38\u7528\u7684\u51e0\u4e2a\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u987a\u4fbf\u63d0\u4e00\u4e0b\uff0c\u5982\u679c\u547d\u4ee4\u884c\u4e0b\u4e0d\u5e26\u4efb\u4f55\u53c2\u6570\uff0c\u76f4\u63a5\u8fd0\u884c",(0,c.jsx)(s.code,{children:"set"}),"\uff0c\u4f1a\u663e\u793a\u6240\u6709\u7684\u73af\u5883\u53d8\u91cf\u548c Shell \u51fd\u6570\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ set\n"})}),"\n",(0,c.jsx)(s.h2,{id:"set--u",children:"set -u"}),"\n",(0,c.jsx)(s.p,{children:"\u6267\u884c\u811a\u672c\u65f6\uff0c\u5982\u679c\u9047\u5230\u4e0d\u5b58\u5728\u7684\u53d8\u91cf\uff0cBash \u9ed8\u8ba4\u5ffd\u7565\u5b83\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"#!/usr/bin/env bash\n\necho $a\necho bar\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(s.code,{children:"$a"}),"\u662f\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u53d8\u91cf\u3002\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash script.sh\n\nbar\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c",(0,c.jsx)(s.code,{children:"echo $a"}),"\u8f93\u51fa\u4e86\u4e00\u4e2a\u7a7a\u884c\uff0cBash \u5ffd\u7565\u4e86\u4e0d\u5b58\u5728\u7684",(0,c.jsx)(s.code,{children:"$a"}),"\uff0c\u7136\u540e\u7ee7\u7eed\u6267\u884c",(0,c.jsx)(s.code,{children:"echo bar"}),"\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e0d\u662f\u5f00\u53d1\u8005\u60f3\u8981\u7684\u884c\u4e3a\uff0c\u9047\u5230\u53d8\u91cf\u4e0d\u5b58\u5728\uff0c\u811a\u672c\u5e94\u8be5\u62a5\u9519\uff0c\u800c\u4e0d\u662f\u4e00\u58f0\u4e0d\u54cd\u5730\u5f80\u4e0b\u6267\u884c\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"set -u"}),"\u5c31\u7528\u6765\u6539\u53d8\u8fd9\u79cd\u884c\u4e3a\u3002\u811a\u672c\u5728\u5934\u90e8\u52a0\u4e0a\u5b83\uff0c\u9047\u5230\u4e0d\u5b58\u5728\u7684\u53d8\u91cf\u5c31\u4f1a\u62a5\u9519\uff0c\u5e76\u505c\u6b62\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"#!/usr/bin/env bash\nset -u\n\necho $a\necho bar\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash script.sh\nbash: script.sh:\u884c4: a: \u672a\u7ed1\u5b9a\u7684\u53d8\u91cf\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u811a\u672c\u62a5\u9519\u4e86\uff0c\u5e76\u4e14\u4e0d\u518d\u6267\u884c\u540e\u9762\u7684\u8bed\u53e5\u3002"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-u"}),"\u8fd8\u6709\u53e6\u4e00\u79cd\u5199\u6cd5",(0,c.jsx)(s.code,{children:"-o nounset"}),"\uff0c\u4e24\u8005\u662f\u7b49\u4ef7\u7684\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"set -o nounset\n"})}),"\n",(0,c.jsx)(s.h2,{id:"set--x",children:"set -x"}),"\n",(0,c.jsx)(s.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u811a\u672c\u6267\u884c\u540e\uff0c\u53ea\u8f93\u51fa\u8fd0\u884c\u7ed3\u679c\uff0c\u6ca1\u6709\u5176\u4ed6\u5185\u5bb9\u3002\u5982\u679c\u591a\u4e2a\u547d\u4ee4\u8fde\u7eed\u6267\u884c\uff0c\u5b83\u4eec\u7684\u8fd0\u884c\u7ed3\u679c\u5c31\u4f1a\u8fde\u7eed\u8f93\u51fa\u3002\u6709\u65f6\u4f1a\u5206\u4e0d\u6e05\uff0c\u67d0\u4e00\u6bb5\u5185\u5bb9\u662f\u4ec0\u4e48\u547d\u4ee4\u4ea7\u751f\u7684\u3002"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"set -x"}),"\u7528\u6765\u5728\u8fd0\u884c\u7ed3\u679c\u4e4b\u524d\uff0c\u5148\u8f93\u51fa\u6267\u884c\u7684\u90a3\u4e00\u884c\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"#!/usr/bin/env bash\nset -x\n\necho bar\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u6267\u884c\u4e0a\u9762\u7684\u811a\u672c\uff0c\u7ed3\u679c\u5982\u4e0b\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash script.sh\n+ echo bar\nbar\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6267\u884c",(0,c.jsx)(s.code,{children:"echo bar"}),"\u4e4b\u524d\uff0c\u8be5\u547d\u4ee4\u4f1a\u5148\u6253\u5370\u51fa\u6765\uff0c\u884c\u9996\u4ee5",(0,c.jsx)(s.code,{children:"+"}),"\u8868\u793a\u3002\u8fd9\u5bf9\u4e8e\u8c03\u8bd5\u590d\u6742\u7684\u811a\u672c\u662f\u5f88\u6709\u7528\u7684\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-x"}),"\u8fd8\u6709\u53e6\u4e00\u79cd\u5199\u6cd5",(0,c.jsx)(s.code,{children:"-o xtrace"}),"\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"set -o xtrace\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u811a\u672c\u5f53\u4e2d\u5982\u679c\u8981\u5173\u95ed\u547d\u4ee4\u8f93\u51fa\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(s.code,{children:"set +x"}),"\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:'#!/bin/bash\n\nnumber=1\n\nset -x\nif [ $number = "1" ]; then\n  echo "Number equals 1"\nelse\n  echo "Number does not equal 1"\nfi\nset +x\n'})}),"\n",(0,c.jsx)(s.p,{children:"\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u53ea\u5bf9\u7279\u5b9a\u7684\u4ee3\u7801\u6bb5\u6253\u5f00\u547d\u4ee4\u8f93\u51fa\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"bash-\u7684\u9519\u8bef\u5904\u7406",children:"Bash \u7684\u9519\u8bef\u5904\u7406"}),"\n",(0,c.jsxs)(s.p,{children:["\u5982\u679c\u811a\u672c\u91cc\u9762\u6709\u8fd0\u884c\u5931\u8d25\u7684\u547d\u4ee4\uff08\u8fd4\u56de\u503c\u975e",(0,c.jsx)(s.code,{children:"0"}),"\uff09\uff0cBash \u9ed8\u8ba4\u4f1a\u7ee7\u7eed\u6267\u884c\u540e\u9762\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"#!/usr/bin/env bash\n\nfoo\necho bar\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u811a\u672c\u4e2d\uff0c",(0,c.jsx)(s.code,{children:"foo"}),"\u662f\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u547d\u4ee4\uff0c\u6267\u884c\u65f6\u4f1a\u62a5\u9519\u3002\u4f46\u662f\uff0cBash \u4f1a\u5ffd\u7565\u8fd9\u4e2a\u9519\u8bef\uff0c\u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash script.sh\nscript.sh:\u884c3: foo: \u672a\u627e\u5230\u547d\u4ee4\nbar\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0cBash \u53ea\u662f\u663e\u793a\u6709\u9519\u8bef\uff0c\u5e76\u6ca1\u6709\u7ec8\u6b62\u6267\u884c\u3002"}),"\n",(0,c.jsx)(s.p,{children:"\u8fd9\u79cd\u884c\u4e3a\u5f88\u4e0d\u5229\u4e8e\u811a\u672c\u5b89\u5168\u548c\u9664\u9519\u3002\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u5982\u679c\u67d0\u4e2a\u547d\u4ee4\u5931\u8d25\uff0c\u5f80\u5f80\u9700\u8981\u811a\u672c\u505c\u6b62\u6267\u884c\uff0c\u9632\u6b62\u9519\u8bef\u7d2f\u79ef\u3002\u8fd9\u65f6\uff0c\u4e00\u822c\u91c7\u7528\u4e0b\u9762\u7684\u5199\u6cd5\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"command || exit 1\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u7684\u5199\u6cd5\u8868\u793a\u53ea\u8981",(0,c.jsx)(s.code,{children:"command"}),"\u6709\u975e\u96f6\u8fd4\u56de\u503c\uff0c\u811a\u672c\u5c31\u4f1a\u505c\u6b62\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u5982\u679c\u505c\u6b62\u6267\u884c\u4e4b\u524d\u9700\u8981\u5b8c\u6210\u591a\u4e2a\u64cd\u4f5c\uff0c\u5c31\u8981\u91c7\u7528\u4e0b\u9762\u4e09\u79cd\u5199\u6cd5\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:'# \u5199\u6cd5\u4e00\ncommand || { echo "command failed"; exit 1; }\n\n# \u5199\u6cd5\u4e8c\nif ! command; then echo "command failed"; exit 1; fi\n\n# \u5199\u6cd5\u4e09\ncommand\nif [ "$?" -ne 0 ]; then echo "command failed"; exit 1; fi\n'})}),"\n",(0,c.jsx)(s.p,{children:"\u53e6\u5916\uff0c\u9664\u4e86\u505c\u6b62\u6267\u884c\uff0c\u8fd8\u6709\u4e00\u79cd\u60c5\u51b5\u3002\u5982\u679c\u4e24\u4e2a\u547d\u4ee4\u6709\u7ee7\u627f\u5173\u7cfb\uff0c\u53ea\u6709\u7b2c\u4e00\u4e2a\u547d\u4ee4\u6210\u529f\u4e86\uff0c\u624d\u80fd\u7ee7\u7eed\u6267\u884c\u7b2c\u4e8c\u4e2a\u547d\u4ee4\uff0c\u90a3\u4e48\u5c31\u8981\u91c7\u7528\u4e0b\u9762\u7684\u5199\u6cd5\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"command1 && command2\n"})}),"\n",(0,c.jsx)(s.h2,{id:"set--e",children:"set -e"}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u8fd9\u4e9b\u5199\u6cd5\u591a\u5c11\u6709\u4e9b\u9ebb\u70e6\uff0c\u5bb9\u6613\u758f\u5ffd\u3002",(0,c.jsx)(s.code,{children:"set -e"}),"\u4ece\u6839\u672c\u4e0a\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u5b83\u4f7f\u5f97\u811a\u672c\u53ea\u8981\u53d1\u751f\u9519\u8bef\uff0c\u5c31\u7ec8\u6b62\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"#!/usr/bin/env bash\nset -e\n\nfoo\necho bar\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash script.sh\nscript.sh:\u884c4: foo: \u672a\u627e\u5230\u547d\u4ee4\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u7b2c4\u884c\u6267\u884c\u5931\u8d25\u4ee5\u540e\uff0c\u811a\u672c\u5c31\u7ec8\u6b62\u6267\u884c\u4e86\u3002"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"set -e"}),"\u6839\u636e\u8fd4\u56de\u503c\u6765\u5224\u65ad\uff0c\u4e00\u4e2a\u547d\u4ee4\u662f\u5426\u8fd0\u884c\u5931\u8d25\u3002\u4f46\u662f\uff0c\u67d0\u4e9b\u547d\u4ee4\u7684\u975e\u96f6\u8fd4\u56de\u503c\u53ef\u80fd\u4e0d\u8868\u793a\u5931\u8d25\uff0c\u6216\u8005\u5f00\u53d1\u8005\u5e0c\u671b\u5728\u547d\u4ee4\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\uff0c\u811a\u672c\u7ee7\u7eed\u6267\u884c\u4e0b\u53bb\u3002\u8fd9\u65f6\u53ef\u4ee5\u6682\u65f6\u5173\u95ed",(0,c.jsx)(s.code,{children:"set -e"}),"\uff0c\u8be5\u547d\u4ee4\u6267\u884c\u7ed3\u675f\u540e\uff0c\u518d\u91cd\u65b0\u6253\u5f00",(0,c.jsx)(s.code,{children:"set -e"}),"\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"set +e\ncommand1\ncommand2\nset -e\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(s.code,{children:"set +e"}),"\u8868\u793a\u5173\u95ed",(0,c.jsx)(s.code,{children:"-e"}),"\u9009\u9879\uff0c",(0,c.jsx)(s.code,{children:"set -e"}),"\u8868\u793a\u91cd\u65b0\u6253\u5f00",(0,c.jsx)(s.code,{children:"-e"}),"\u9009\u9879\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u8fd8\u6709\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528",(0,c.jsx)(s.code,{children:"command || true"}),"\uff0c\u4f7f\u5f97\u8be5\u547d\u4ee4\u5373\u4f7f\u6267\u884c\u5931\u8d25\uff0c\u811a\u672c\u4e5f\u4e0d\u4f1a\u7ec8\u6b62\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"#!/bin/bash\nset -e\n\nfoo || true\necho bar\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(s.code,{children:"true"}),"\u4f7f\u5f97\u8fd9\u4e00\u884c\u8bed\u53e5\u603b\u662f\u4f1a\u6267\u884c\u6210\u529f\uff0c\u540e\u9762\u7684",(0,c.jsx)(s.code,{children:"echo bar"}),"\u4f1a\u6267\u884c\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-e"}),"\u8fd8\u6709\u53e6\u4e00\u79cd\u5199\u6cd5",(0,c.jsx)(s.code,{children:"-o errexit"}),"\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"set -o errexit\n"})}),"\n",(0,c.jsx)(s.h2,{id:"set--o-pipefail",children:"set -o pipefail"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"set -e"}),"\u6709\u4e00\u4e2a\u4f8b\u5916\u60c5\u51b5\uff0c\u5c31\u662f\u4e0d\u9002\u7528\u4e8e\u7ba1\u9053\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u6240\u8c13\u7ba1\u9053\u547d\u4ee4\uff0c\u5c31\u662f\u591a\u4e2a\u5b50\u547d\u4ee4\u901a\u8fc7\u7ba1\u9053\u8fd0\u7b97\u7b26\uff08",(0,c.jsx)(s.code,{children:"|"}),"\uff09\u7ec4\u5408\u6210\u4e3a\u4e00\u4e2a\u5927\u7684\u547d\u4ee4\u3002Bash \u4f1a\u628a\u6700\u540e\u4e00\u4e2a\u5b50\u547d\u4ee4\u7684\u8fd4\u56de\u503c\uff0c\u4f5c\u4e3a\u6574\u4e2a\u547d\u4ee4\u7684\u8fd4\u56de\u503c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ea\u8981\u6700\u540e\u4e00\u4e2a\u5b50\u547d\u4ee4\u4e0d\u5931\u8d25\uff0c\u7ba1\u9053\u547d\u4ee4\u603b\u662f\u4f1a\u6267\u884c\u6210\u529f\uff0c\u56e0\u6b64\u5b83\u540e\u9762\u547d\u4ee4\u4f9d\u7136\u4f1a\u6267\u884c\uff0c",(0,c.jsx)(s.code,{children:"set -e"}),"\u5c31\u5931\u6548\u4e86\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u8bf7\u770b\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"#!/usr/bin/env bash\nset -e\n\nfoo | echo a\necho bar\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash script.sh\na\nscript.sh:\u884c4: foo: \u672a\u627e\u5230\u547d\u4ee4\nbar\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(s.code,{children:"foo"}),"\u662f\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u547d\u4ee4\uff0c\u4f46\u662f",(0,c.jsx)(s.code,{children:"foo | echo a"}),"\u8fd9\u4e2a\u7ba1\u9053\u547d\u4ee4\u4f1a\u6267\u884c\u6210\u529f\uff0c\u5bfc\u81f4\u540e\u9762\u7684",(0,c.jsx)(s.code,{children:"echo bar"}),"\u4f1a\u7ee7\u7eed\u6267\u884c\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"set -o pipefail"}),"\u7528\u6765\u89e3\u51b3\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ea\u8981\u4e00\u4e2a\u5b50\u547d\u4ee4\u5931\u8d25\uff0c\u6574\u4e2a\u7ba1\u9053\u547d\u4ee4\u5c31\u5931\u8d25\uff0c\u811a\u672c\u5c31\u4f1a\u7ec8\u6b62\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"#!/usr/bin/env bash\nset -eo pipefail\n\nfoo | echo a\necho bar\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u8fd0\u884c\u540e\uff0c\u7ed3\u679c\u5982\u4e0b\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash script.sh\na\nscript.sh:\u884c4: foo: \u672a\u627e\u5230\u547d\u4ee4\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c",(0,c.jsx)(s.code,{children:"echo bar"}),"\u6ca1\u6709\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"set--e-1",children:"set -E"}),"\n",(0,c.jsxs)(s.p,{children:["\u4e00\u65e6\u8bbe\u7f6e\u4e86",(0,c.jsx)(s.code,{children:"-e"}),"\u53c2\u6570\uff0c\u4f1a\u5bfc\u81f4\u51fd\u6570\u5185\u7684\u9519\u8bef\u4e0d\u4f1a\u88ab",(0,c.jsx)(s.code,{children:"trap"}),"\u547d\u4ee4\u6355\u83b7\uff08\u53c2\u8003\u300atrap \u547d\u4ee4\u300b\u4e00\u7ae0\uff09\u3002",(0,c.jsx)(s.code,{children:"-E"}),"\u53c2\u6570\u53ef\u4ee5\u7ea0\u6b63\u8fd9\u4e2a\u884c\u4e3a\uff0c\u4f7f\u5f97\u51fd\u6570\u4e5f\u80fd\u7ee7\u627f",(0,c.jsx)(s.code,{children:"trap"}),"\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"#!/bin/bash\nset -e\n\ntrap \"echo ERR trap fired!\" ERR\n\nmyfunc()\n{\n  # 'foo' \u662f\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u547d\u4ee4\n  foo\n}\n\nmyfunc\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(s.code,{children:"myfunc"}),"\u51fd\u6570\u5185\u90e8\u8c03\u7528\u4e86\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u547d\u4ee4",(0,c.jsx)(s.code,{children:"foo"}),"\uff0c\u5bfc\u81f4\u6267\u884c\u8fd9\u4e2a\u51fd\u6570\u4f1a\u62a5\u9519\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash test.sh\ntest.sh:\u884c9: foo\uff1a\u672a\u627e\u5230\u547d\u4ee4\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4f46\u662f\uff0c\u7531\u4e8e\u8bbe\u7f6e\u4e86",(0,c.jsx)(s.code,{children:"set -e"}),"\uff0c\u51fd\u6570\u5185\u90e8\u7684\u62a5\u9519\u5e76\u6ca1\u6709\u88ab",(0,c.jsx)(s.code,{children:"trap"}),"\u547d\u4ee4\u6355\u83b7\uff0c\u9700\u8981\u52a0\u4e0a",(0,c.jsx)(s.code,{children:"-E"}),"\u53c2\u6570\u624d\u53ef\u4ee5\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"#!/bin/bash\nset -Eeuo pipefail\n\ntrap \"echo ERR trap fired!\" ERR\n\nmyfunc()\n{\n  # 'foo' \u662f\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u547d\u4ee4\n  foo\n}\n\nmyfunc\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u6267\u884c\u4e0a\u9762\u8fd9\u4e2a\u811a\u672c\uff0c\u5c31\u53ef\u4ee5\u770b\u5230",(0,c.jsx)(s.code,{children:"trap"}),"\u547d\u4ee4\u751f\u6548\u4e86\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash test.sh\ntest.sh:\u884c9: foo\uff1a\u672a\u627e\u5230\u547d\u4ee4\nERR trap fired!\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u5176\u4ed6\u53c2\u6570",children:"\u5176\u4ed6\u53c2\u6570"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"set"}),"\u547d\u4ee4\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u53c2\u6570\u3002"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"set -n"}),"\uff1a\u7b49\u540c\u4e8e",(0,c.jsx)(s.code,{children:"set -o noexec"}),"\uff0c\u4e0d\u8fd0\u884c\u547d\u4ee4\uff0c\u53ea\u68c0\u67e5\u8bed\u6cd5\u662f\u5426\u6b63\u786e\u3002"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"set -f"}),"\uff1a\u7b49\u540c\u4e8e",(0,c.jsx)(s.code,{children:"set -o noglob"}),"\uff0c\u8868\u793a\u4e0d\u5bf9\u901a\u914d\u7b26\u8fdb\u884c\u6587\u4ef6\u540d\u6269\u5c55\u3002"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"set -v"}),"\uff1a\u7b49\u540c\u4e8e",(0,c.jsx)(s.code,{children:"set -o verbose"}),"\uff0c\u8868\u793a\u6253\u5370 Shell \u63a5\u6536\u5230\u7684\u6bcf\u4e00\u884c\u8f93\u5165\u3002"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"set -o noclobber"}),"\uff1a\u9632\u6b62\u4f7f\u7528\u91cd\u5b9a\u5411\u8fd0\u7b97\u7b26",(0,c.jsx)(s.code,{children:">"}),"\u8986\u76d6\u5df2\u7ecf\u5b58\u5728\u7684\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u7684",(0,c.jsx)(s.code,{children:"-f"}),"\u548c",(0,c.jsx)(s.code,{children:"-v"}),"\u53c2\u6570\uff0c\u53ef\u4ee5\u5206\u522b\u4f7f\u7528",(0,c.jsx)(s.code,{children:"set +f"}),"\u3001",(0,c.jsx)(s.code,{children:"set +v"}),"\u5173\u95ed\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"set-\u547d\u4ee4\u603b\u7ed3",children:"set \u547d\u4ee4\u603b\u7ed3"}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u91cd\u70b9\u4ecb\u7ecd\u7684",(0,c.jsx)(s.code,{children:"set"}),"\u547d\u4ee4\u7684\u51e0\u4e2a\u53c2\u6570\uff0c\u4e00\u822c\u90fd\u653e\u5728\u4e00\u8d77\u4f7f\u7528\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"# \u5199\u6cd5\u4e00\nset -Eeuxo pipefail\n\n# \u5199\u6cd5\u4e8c\nset -Eeux\nset -o pipefail\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u8fd9\u4e24\u79cd\u5199\u6cd5\u5efa\u8bae\u653e\u5728\u6240\u6709 Bash \u811a\u672c\u7684\u5934\u90e8\u3002"}),"\n",(0,c.jsx)(s.p,{children:"\u53e6\u4e00\u79cd\u529e\u6cd5\u662f\u5728\u6267\u884c Bash \u811a\u672c\u7684\u65f6\u5019\uff0c\u4ece\u547d\u4ee4\u884c\u4f20\u5165\u8fd9\u4e9b\u53c2\u6570\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ bash -euxo pipefail script.sh\n"})}),"\n",(0,c.jsx)(s.h2,{id:"shopt-\u547d\u4ee4",children:"shopt \u547d\u4ee4"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"shopt"}),"\u547d\u4ee4\u7528\u6765\u8c03\u6574 Shell \u7684\u53c2\u6570\uff0c\u8ddf",(0,c.jsx)(s.code,{children:"set"}),"\u547d\u4ee4\u7684\u4f5c\u7528\u5f88\u7c7b\u4f3c\u3002\u4e4b\u6240\u4ee5\u4f1a\u6709\u8fd9\u4e24\u4e2a\u7c7b\u4f3c\u547d\u4ee4\u7684\u4e3b\u8981\u539f\u56e0\u662f\uff0c",(0,c.jsx)(s.code,{children:"set"}),"\u662f\u4ece Ksh \u7ee7\u627f\u7684\uff0c\u5c5e\u4e8e POSIX \u89c4\u8303\u7684\u4e00\u90e8\u5206\uff0c\u800c",(0,c.jsx)(s.code,{children:"shopt"}),"\u662f Bash \u7279\u6709\u7684\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u76f4\u63a5\u8f93\u5165",(0,c.jsx)(s.code,{children:"shopt"}),"\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u53c2\u6570\uff0c\u4ee5\u53ca\u5b83\u4eec\u5404\u81ea\u6253\u5f00\u548c\u5173\u95ed\u7684\u72b6\u6001\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ shopt\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"shopt"}),"\u547d\u4ee4\u540e\u9762\u8ddf\u7740\u53c2\u6570\u540d\uff0c\u53ef\u4ee5\u67e5\u8be2\u8be5\u53c2\u6570\u662f\u5426\u6253\u5f00\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ shopt globstar\nglobstar  off\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u8868\u793a",(0,c.jsx)(s.code,{children:"globstar"}),"\u53c2\u6570\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uff081\uff09-s"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-s"}),"\u7528\u6765\u6253\u5f00\u67d0\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ shopt -s optionNameHere\n"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uff082\uff09-u"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-u"}),"\u7528\u6765\u5173\u95ed\u67d0\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ shopt -u optionNameHere\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e3e\u4f8b\u6765\u8bf4\uff0c",(0,c.jsx)(s.code,{children:"histappend"}),"\u8fd9\u4e2a\u53c2\u6570\u8868\u793a\u9000\u51fa\u5f53\u524d Shell \u65f6\uff0c\u5c06\u64cd\u4f5c\u5386\u53f2\u8ffd\u52a0\u5230\u5386\u53f2\u6587\u4ef6\u4e2d\u3002\u8fd9\u4e2a\u53c2\u6570\u9ed8\u8ba4\u662f\u6253\u5f00\u7684\uff0c\u5982\u679c\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u5c06\u5176\u5173\u95ed\uff0c\u90a3\u4e48\u5f53\u524d Shell \u7684\u64cd\u4f5c\u5386\u53f2\u5c06\u66ff\u6362\u6389\u6574\u4e2a\u5386\u53f2\u6587\u4ef6\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ shopt -u histappend\n"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uff083\uff09-q"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-q"}),"\u7684\u4f5c\u7528\u4e5f\u662f\u67e5\u8be2\u67d0\u4e2a\u53c2\u6570\u662f\u5426\u6253\u5f00\uff0c\u4f46\u4e0d\u662f\u76f4\u63a5\u8f93\u51fa\u67e5\u8be2\u7ed3\u679c\uff0c\u800c\u662f\u901a\u8fc7\u547d\u4ee4\u7684\u6267\u884c\u72b6\u6001\uff08",(0,c.jsx)(s.code,{children:"$?"}),"\uff09\u8868\u793a\u67e5\u8be2\u7ed3\u679c\u3002\u5982\u679c\u72b6\u6001\u4e3a",(0,c.jsx)(s.code,{children:"0"}),"\uff0c\u8868\u793a\u8be5\u53c2\u6570\u6253\u5f00\uff1b\u5982\u679c\u4e3a",(0,c.jsx)(s.code,{children:"1"}),"\uff0c\u8868\u793a\u8be5\u53c2\u6570\u5173\u95ed\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ shopt -q globstar\n$ echo $?\n1\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u547d\u4ee4\u67e5\u8be2",(0,c.jsx)(s.code,{children:"globstar"}),"\u53c2\u6570\u662f\u5426\u6253\u5f00\u3002\u8fd4\u56de\u72b6\u6001\u4e3a",(0,c.jsx)(s.code,{children:"1"}),"\uff0c\u8868\u793a\u8be5\u53c2\u6570\u662f\u5173\u95ed\u7684\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u8fd9\u4e2a\u7528\u6cd5\u4e3b\u8981\u7528\u4e8e\u811a\u672c\uff0c\u4f9b",(0,c.jsx)(s.code,{children:"if"}),"\u6761\u4ef6\u7ed3\u6784\u4f7f\u7528\u3002\u4e0b\u9762\u4f8b\u5b50\u662f\u5982\u679c\u6253\u5f00\u4e86\u8fd9\u4e2a\u53c2\u6570\uff0c\u5c31\u6267\u884c",(0,c.jsx)(s.code,{children:"if"}),"\u7ed3\u6784\u5185\u90e8\u7684\u8bed\u53e5\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"if !(shopt -q globstar); then\n  ...\nfi\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html",children:"The Set Builtin"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/",children:"Safer bash scripts with 'set -euxo pipefail'"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"http://www.davidpashley.com/articles/writing-robust-shell-scripts/",children:"Writing Robust Bash Shell Scripts"})}),"\n"]})]})}function t(e={}){const{wrapper:s}={...(0,h.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>r});var c=n(67294);const h={},l=c.createContext(h);function r(e){const s=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(h):e.components||h:r(e.components),c.createElement(l.Provider,{value:s},e.children)}}}]);