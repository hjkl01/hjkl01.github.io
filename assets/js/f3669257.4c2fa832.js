"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9729],{669:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var r=i(5893),s=i(1151);const c={},l="\u6587\u4ef6\u64cd\u4f5c",d={id:"bash-tutorial/archives/file-operation",title:"\u6587\u4ef6\u64cd\u4f5c",description:"cp",source:"@site/docs/bash-tutorial/archives/file-operation.md",sourceDirName:"bash-tutorial/archives",slug:"/bash-tutorial/archives/file-operation",permalink:"/docs/bash-tutorial/archives/file-operation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/file-operation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"who",permalink:"/docs/bash-tutorial/archives/commands/who"},next:{title:"\u6587\u4ef6\u7cfb\u7edf",permalink:"/docs/bash-tutorial/archives/file"}},t={},a=[{value:"cp",id:"cp",level:2},{value:"mkdir",id:"mkdir",level:2},{value:"mv",id:"mv",level:2},{value:"rm",id:"rm",level:2},{value:"ln",id:"ln",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u6587\u4ef6\u64cd\u4f5c",children:"\u6587\u4ef6\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.h2,{id:"cp",children:"cp"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"cp"}),"\u547d\u4ee4\u7528\u4e8e\u5c06\u6587\u4ef6\uff08\u6216\u76ee\u5f55\uff09\u62f7\u8d1d\u5230\u76ee\u7684\u5730\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u62f7\u8d1d\u5355\u4e2a\u6587\u4ef6\n$ cp source dest\n\n# \u62f7\u8d1d\u591a\u4e2a\u6587\u4ef6\n$ cp source1 source2 source3 dest\n\n# -i \u76ee\u7684\u5730\u6709\u540c\u540d\u6587\u4ef6\u65f6\u4f1a\u63d0\u793a\u786e\u8ba4\n$ cp -i file1 file2\n\n# -r \u9012\u5f52\u62f7\u8d1d\uff0c\u5c06dir1\u62f7\u8d1d\u5230dir2\uff0c\u5b8c\u6210\u540edir2\u751f\u6210\u4e00\u4e2a\u5b50\u76ee\u5f55dir1\n# dir2\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5c06\u88ab\u521b\u5efa\n# \u62f7\u8d1d\u76ee\u5f55\u65f6\uff0c\u8be5\u53c2\u6570\u662f\u5fc5\u9700\u7684\n$ cp -r dir1 dir2\n\n# -u --update \u53ea\u62f7\u8d1d\u76ee\u7684\u5730\u6ca1\u6709\u7684\u6587\u4ef6\uff0c\u6216\u8005\u6bd4\u76ee\u7684\u5730\u540c\u540d\u6587\u4ef6\u66f4\u65b0\u7684\u6587\u4ef6\n$ cp -u *.html destination\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4ed6\u53c2\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-a"})," \u62f7\u8d1d\u65f6\u4fdd\u7559\u6240\u6709\u5c5e\u6027\uff0c\u5305\u62ec\u6240\u6709\u8005\u4e0e\u6743\u9650"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-v"})," \u663e\u793a\u62f7\u8d1d\u7684\u8be6\u7ec6\u4fe1\u606f"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"mkdir",children:"mkdir"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"mkdir"}),"\u547d\u4ee4\u7528\u4e8e\u65b0\u5efa\u76ee\u5f55\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u65b0\u5efa\u591a\u4e2a\u76ee\u5f55\n$ mkdir dir1 dir2 dir3\n"})}),"\n",(0,r.jsx)(n.h2,{id:"mv",children:"mv"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"mv"}),"\u547d\u4ee4\u7528\u4e8e\u5c06\u6e90\u6587\u4ef6\u79fb\u52a8\u5230\u76ee\u7684\u5730\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u79fb\u52a8\u5355\u4e2a\u6587\u4ef6\n$ mv item1 item2\n\n# \u79fb\u52a8\u591a\u4e2a\u6587\u4ef6\n$ mv file1 file2 dir1\n\n# \u5c06dir1\u62f7\u8d1d\u8fdb\u5165dir2\uff0c\u5b8c\u6210\u540edir2\u5c06\u591a\u51fa\u4e00\u4e2a\u5b50\u76ee\u5f55dir1\n# \u5982\u679cdir2\u4e0d\u5b58\u5728\uff0c\u5c06\u4f1a\u88ab\u521b\u5efa\n$ mv dir1 dir2\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-i"})," \u8986\u76d6\u5df2\u7ecf\u5b58\u5728\u7684\u6587\u4ef6\u65f6\uff0c\u4f1a\u63d0\u793a\u786e\u8ba4"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-u"})," \u53ea\u79fb\u52a8\u76ee\u7684\u5730\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\uff0c\u6216\u6bd4\u76ee\u7684\u5730\u66f4\u65b0\u7684\u6587\u4ef6"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"rm",children:"rm"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"rm"}),"\u547d\u4ee4\u7528\u4e8e\u5220\u9664\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u6570\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-i"})," \u6587\u4ef6\u5b58\u5728\u65f6\uff0c\u4f1a\u63d0\u793a\u786e\u8ba4\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-r"})," \u9012\u5f52\u5220\u9664\u4e00\u4e2a\u5b50\u76ee\u5f55"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-f"})," \u5982\u679c\u5220\u9664\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\uff0c\u4e0d\u62a5\u9519"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-v"})," \u5220\u9664\u65f6\u5c55\u793a\u8be6\u7ec6\u4fe1\u606f"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ln",children:"ln"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ln"}),"\u547d\u4ee4\u7528\u4e8e\u5efa\u7acb\u94fe\u63a5\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u65b0\u5efa\u786c\u94fe\u63a5\n$ ln file link\n\n# \u65b0\u5efa\u8f6f\u94fe\u63a5\n$ ln -s item link\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var r=i(7294);const s={},c=r.createContext(s);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);