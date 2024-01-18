"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1527],{38677:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var d=s(85893),c=s(11151);const r={},o="\u76ee\u5f55\u5806\u6808",i={id:"bash-tutorial/stack",title:"\u76ee\u5f55\u5806\u6808",description:"\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u5728\u4e0d\u540c\u76ee\u5f55\u4e4b\u95f4\u5207\u6362\uff0cBash \u63d0\u4f9b\u4e86\u76ee\u5f55\u5806\u6808\u529f\u80fd\u3002",source:"@site/docs/bash-tutorial/stack.md",sourceDirName:"bash-tutorial",slug:"/bash-tutorial/stack",permalink:"/docs/bash-tutorial/stack",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/stack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set \u547d\u4ee4\uff0cshopt \u547d\u4ee4",permalink:"/docs/bash-tutorial/set"},next:{title:"Bash \u542f\u52a8\u73af\u5883",permalink:"/docs/bash-tutorial/startup"}},h={},l=[{value:"cd -",id:"cd--",level:2},{value:"pushd\uff0cpopd",id:"pushdpopd",level:2},{value:"dirs \u547d\u4ee4",id:"dirs-\u547d\u4ee4",level:2}];function t(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u76ee\u5f55\u5806\u6808",children:"\u76ee\u5f55\u5806\u6808"}),"\n",(0,d.jsx)(n.p,{children:"\u4e3a\u4e86\u65b9\u4fbf\u7528\u6237\u5728\u4e0d\u540c\u76ee\u5f55\u4e4b\u95f4\u5207\u6362\uff0cBash \u63d0\u4f9b\u4e86\u76ee\u5f55\u5806\u6808\u529f\u80fd\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"cd--",children:"cd -"}),"\n",(0,d.jsxs)(n.p,{children:["Bash \u53ef\u4ee5\u8bb0\u5fc6\u7528\u6237\u8fdb\u5165\u8fc7\u7684\u76ee\u5f55\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u8bb0\u5fc6\u524d\u4e00\u6b21\u6240\u5728\u7684\u76ee\u5f55\uff0c",(0,d.jsx)(n.code,{children:"cd -"}),"\u547d\u4ee4\u53ef\u4ee5\u8fd4\u56de\u524d\u4e00\u6b21\u7684\u76ee\u5f55\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# \u5f53\u524d\u76ee\u5f55\u662f /path/to/foo\n$ cd bar\n\n# \u91cd\u65b0\u56de\u5230 /path/to/foo\n$ cd -\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u7528\u6237\u539f\u6765\u6240\u5728\u7684\u76ee\u5f55\u662f",(0,d.jsx)(n.code,{children:"/path/to/foo"}),"\uff0c\u8fdb\u5165\u5b50\u76ee\u5f55",(0,d.jsx)(n.code,{children:"bar"}),"\u4ee5\u540e\uff0c\u4f7f\u7528",(0,d.jsx)(n.code,{children:"cd -"}),"\u53ef\u4ee5\u56de\u5230\u539f\u6765\u7684\u76ee\u5f55\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"pushdpopd",children:"pushd\uff0cpopd"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u5e0c\u671b\u8bb0\u5fc6\u591a\u91cd\u76ee\u5f55\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,d.jsx)(n.code,{children:"pushd"}),"\u547d\u4ee4\u548c",(0,d.jsx)(n.code,{children:"popd"}),"\u547d\u4ee4\u3002\u5b83\u4eec\u7528\u6765\u64cd\u4f5c\u76ee\u5f55\u5806\u6808\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"pushd"}),"\u547d\u4ee4\u7684\u7528\u6cd5\u7c7b\u4f3c",(0,d.jsx)(n.code,{children:"cd"}),"\u547d\u4ee4\uff0c\u53ef\u4ee5\u8fdb\u5165\u6307\u5b9a\u7684\u76ee\u5f55\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ pushd dirname\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4f1a\u8fdb\u5165\u76ee\u5f55",(0,d.jsx)(n.code,{children:"dirname"}),"\uff0c\u5e76\u5c06\u8be5\u76ee\u5f55\u653e\u5165\u5806\u6808\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b21\u4f7f\u7528",(0,d.jsx)(n.code,{children:"pushd"}),"\u547d\u4ee4\u65f6\uff0c\u4f1a\u5c06\u5f53\u524d\u76ee\u5f55\u5148\u653e\u5165\u5806\u6808\uff0c\u7136\u540e\u5c06\u6240\u8981\u8fdb\u5165\u7684\u76ee\u5f55\u4e5f\u653e\u5165\u5806\u6808\uff0c\u4f4d\u7f6e\u5728\u524d\u4e00\u4e2a\u8bb0\u5f55\u7684\u4e0a\u65b9\u3002\u4ee5\u540e\u6bcf\u6b21\u4f7f\u7528",(0,d.jsx)(n.code,{children:"pushd"}),"\u547d\u4ee4\uff0c\u90fd\u4f1a\u5c06\u6240\u8981\u8fdb\u5165\u7684\u76ee\u5f55\uff0c\u653e\u5728\u5806\u6808\u7684\u9876\u90e8\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"popd"}),"\u547d\u4ee4\u4e0d\u5e26\u6709\u53c2\u6570\u65f6\uff0c\u4f1a\u79fb\u9664\u5806\u6808\u7684\u9876\u90e8\u8bb0\u5f55\uff0c\u5e76\u8fdb\u5165\u65b0\u7684\u5806\u6808\u9876\u90e8\u76ee\u5f55\uff08\u5373\u539f\u6765\u7684\u7b2c\u4e8c\u6761\u76ee\u5f55\uff09\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# \u5f53\u524d\u5904\u5728\u4e3b\u76ee\u5f55\uff0c\u5806\u6808\u4e3a\u7a7a\n$ pwd\n/home/me\n\n# \u8fdb\u5165 /home/me/foo\n# \u5f53\u524d\u5806\u6808\u4e3a /home/me/foo /home/me\n$ pushd ~/foo\n\n# \u8fdb\u5165 /etc\n# \u5f53\u524d\u5806\u6808\u4e3a /etc /home/me/foo /home/me\n$ pushd /etc\n\n# \u8fdb\u5165 /home/me/foo\n# \u5f53\u524d\u5806\u6808\u4e3a /home/me/foo /home/me\n$ popd\n\n# \u8fdb\u5165 /home/me\n# \u5f53\u524d\u5806\u6808\u4e3a /home/me\n$ popd\n\n# \u76ee\u5f55\u4e0d\u53d8\uff0c\u5f53\u524d\u5806\u6808\u4e3a\u7a7a\n$ popd\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u4e24\u4e2a\u547d\u4ee4\u7684\u53c2\u6570\u5982\u4e0b\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\uff081\uff09-n \u53c2\u6570"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"-n"}),"\u7684\u53c2\u6570\u8868\u793a\u4ec5\u64cd\u4f5c\u5806\u6808\uff0c\u4e0d\u6539\u53d8\u76ee\u5f55\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ popd -n\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u547d\u4ee4\u4ec5\u5220\u9664\u5806\u6808\u9876\u90e8\u7684\u8bb0\u5f55\uff0c\u4e0d\u6539\u53d8\u76ee\u5f55\uff0c\u6267\u884c\u5b8c\u6210\u540e\u8fd8\u505c\u7559\u5728\u5f53\u524d\u76ee\u5f55\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\uff082\uff09\u6574\u6570\u53c2\u6570"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u4e24\u4e2a\u547d\u4ee4\u8fd8\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u6574\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u6574\u6570\u8868\u793a\u5806\u6808\u4e2d\u6307\u5b9a\u4f4d\u7f6e\u7684\u8bb0\u5f55\uff08\u4ece0\u5f00\u59cb\uff09\uff0c\u4f5c\u4e3a\u64cd\u4f5c\u5bf9\u8c61\u3002\u8fd9\u65f6\u4e0d\u4f1a\u5207\u6362\u76ee\u5f55\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# \u4ece\u6808\u9876\u7b97\u8d77\u76843\u53f7\u76ee\u5f55\uff08\u4ece0\u5f00\u59cb\uff09\uff0c\u79fb\u52a8\u5230\u6808\u9876\n$ pushd +3\n\n# \u4ece\u6808\u5e95\u7b97\u8d77\u76843\u53f7\u76ee\u5f55\uff08\u4ece0\u5f00\u59cb\uff09\uff0c\u79fb\u52a8\u5230\u6808\u9876\n$ pushd -3\n\n# \u5220\u9664\u4ece\u6808\u9876\u7b97\u8d77\u76843\u53f7\u76ee\u5f55\uff08\u4ece0\u5f00\u59cb\uff09\n$ popd +3\n\n# \u5220\u9664\u4ece\u6808\u5e95\u7b97\u8d77\u76843\u53f7\u76ee\u5f55\uff08\u4ece0\u5f00\u59cb\uff09\n$ popd -3\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u7684\u6574\u6570\u7f16\u53f7\u90fd\u662f\u4ece0\u5f00\u59cb\u8ba1\u7b97\uff0c",(0,d.jsx)(n.code,{children:"popd +0"}),"\u662f\u5220\u9664\u7b2c\u4e00\u4e2a\u76ee\u5f55\uff0c",(0,d.jsx)(n.code,{children:"popd +1"}),"\u662f\u5220\u9664\u7b2c\u4e8c\u4e2a\uff0c",(0,d.jsx)(n.code,{children:"popd -0"}),"\u662f\u5220\u9664\u6700\u540e\u4e00\u4e2a\u76ee\u5f55\uff0c",(0,d.jsx)(n.code,{children:"popd -1"}),"\u662f\u5220\u9664\u5012\u6570\u7b2c\u4e8c\u4e2a\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\uff083\uff09\u76ee\u5f55\u53c2\u6570"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"pushd"}),"\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u76ee\u5f55\u4f5c\u4e3a\u53c2\u6570\uff0c\u8868\u793a\u5c06\u8be5\u76ee\u5f55\u653e\u5230\u5806\u6808\u9876\u90e8\uff0c\u5e76\u8fdb\u5165\u8be5\u76ee\u5f55\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ pushd dir\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"popd"}),"\u6ca1\u6709\u8fd9\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"dirs-\u547d\u4ee4",children:"dirs \u547d\u4ee4"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dirs"}),"\u547d\u4ee4\u53ef\u4ee5\u663e\u793a\u76ee\u5f55\u5806\u6808\u7684\u5185\u5bb9\uff0c\u4e00\u822c\u7528\u6765\u67e5\u770b",(0,d.jsx)(n.code,{children:"pushd"}),"\u548c",(0,d.jsx)(n.code,{children:"popd"}),"\u64cd\u4f5c\u540e\u7684\u7ed3\u679c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ dirs\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5b83\u6709\u4ee5\u4e0b\u53c2\u6570\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-c"}),"\uff1a\u6e05\u7a7a\u76ee\u5f55\u6808\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-l"}),"\uff1a\u7528\u6237\u4e3b\u76ee\u5f55\u4e0d\u663e\u793a\u6ce2\u6d6a\u53f7\u524d\u7f00\uff0c\u800c\u6253\u5370\u5b8c\u6574\u7684\u76ee\u5f55\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-p"}),"\uff1a\u6bcf\u884c\u4e00\u4e2a\u6761\u76ee\u6253\u5370\u76ee\u5f55\u6808\uff0c\u9ed8\u8ba4\u662f\u6253\u5370\u5728\u4e00\u884c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-v"}),"\uff1a\u6bcf\u884c\u4e00\u4e2a\u6761\u76ee\uff0c\u6bcf\u4e2a\u6761\u76ee\u4e4b\u524d\u663e\u793a\u4f4d\u7f6e\u7f16\u53f7\uff08\u4ece0\u5f00\u59cb\uff09\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"+N"}),"\uff1a",(0,d.jsx)(n.code,{children:"N"}),"\u4e3a\u6574\u6570\uff0c\u8868\u793a\u663e\u793a\u5806\u9876\u7b97\u8d77\u7684\u7b2c N \u4e2a\u76ee\u5f55\uff0c\u4ece\u96f6\u5f00\u59cb\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"-N"}),"\uff1a",(0,d.jsx)(n.code,{children:"N"}),"\u4e3a\u6574\u6570\uff0c\u8868\u793a\u663e\u793a\u5806\u5e95\u7b97\u8d77\u7684\u7b2c N \u4e2a\u76ee\u5f55\uff0c\u4ece\u96f6\u5f00\u59cb\u3002"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var d=s(67294);const c={},r=d.createContext(c);function o(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);