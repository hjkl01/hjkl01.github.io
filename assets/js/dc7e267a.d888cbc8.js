"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2542],{9870:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>h,toc:()=>o});var c=s(5893),l=s(1151);const d={},r="Bash \u7684\u57fa\u672c\u8bed\u6cd5",h={id:"bash-tutorial/grammar",title:"Bash \u7684\u57fa\u672c\u8bed\u6cd5",description:"\u672c\u7ae0\u4ecb\u7ecd Bash \u7684\u6700\u57fa\u672c\u8bed\u6cd5\u3002",source:"@site/docs/bash-tutorial/grammar.md",sourceDirName:"bash-tutorial",slug:"/bash-tutorial/grammar",permalink:"/docs/bash-tutorial/grammar",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/grammar.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bash \u51fd\u6570",permalink:"/docs/bash-tutorial/function"},next:{title:"Bash \u7b80\u4ecb",permalink:"/docs/bash-tutorial/"}},i={},o=[{value:"echo \u547d\u4ee4",id:"echo-\u547d\u4ee4",level:2},{value:"<code>-n</code>\u53c2\u6570",id:"-n\u53c2\u6570",level:3},{value:"<code>-e</code>\u53c2\u6570",id:"-e\u53c2\u6570",level:3},{value:"\u547d\u4ee4\u683c\u5f0f",id:"\u547d\u4ee4\u683c\u5f0f",level:2},{value:"\u7a7a\u683c",id:"\u7a7a\u683c",level:2},{value:"\u5206\u53f7",id:"\u5206\u53f7",level:2},{value:"\u547d\u4ee4\u7684\u7ec4\u5408\u7b26<code>&amp;&amp;</code>\u548c<code>||</code>",id:"\u547d\u4ee4\u7684\u7ec4\u5408\u7b26\u548c",level:2},{value:"type \u547d\u4ee4",id:"type-\u547d\u4ee4",level:2},{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"bash-\u7684\u57fa\u672c\u8bed\u6cd5",children:"Bash \u7684\u57fa\u672c\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.p,{children:"\u672c\u7ae0\u4ecb\u7ecd Bash \u7684\u6700\u57fa\u672c\u8bed\u6cd5\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"echo-\u547d\u4ee4",children:"echo \u547d\u4ee4"}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e\u540e\u9762\u7684\u4f8b\u5b50\u4f1a\u5927\u91cf\u7528\u5230",(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\uff0c\u8fd9\u91cc\u5148\u4ecb\u7ecd\u8fd9\u4e2a\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u5728\u5c4f\u5e55\u8f93\u51fa\u4e00\u884c\u6587\u672c\uff0c\u53ef\u4ee5\u5c06\u8be5\u547d\u4ee4\u7684\u53c2\u6570\u539f\u6837\u8f93\u51fa\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo hello world\nhello world\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"echo"}),"\u7684\u53c2\u6570\u662f",(0,c.jsx)(n.code,{children:"hello world"}),"\uff0c\u53ef\u4ee5\u539f\u6837\u8f93\u51fa\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u60f3\u8981\u8f93\u51fa\u7684\u662f\u591a\u884c\u6587\u672c\uff0c\u5373\u5305\u62ec\u6362\u884c\u7b26\u3002\u8fd9\u65f6\u5c31\u9700\u8981\u628a\u591a\u884c\u6587\u672c\u653e\u5728\u5f15\u53f7\u91cc\u9762\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "<HTML>\n    <HEAD>\n          <TITLE>Page Title</TITLE>\n    </HEAD>\n    <BODY>\n          Page body.\n    </BODY>\n</HTML>"\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"echo"}),"\u53ef\u4ee5\u539f\u6837\u8f93\u51fa\u591a\u884c\u6587\u672c\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"-n\u53c2\u6570",children:[(0,c.jsx)(n.code,{children:"-n"}),"\u53c2\u6570"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,c.jsx)(n.code,{children:"echo"}),"\u8f93\u51fa\u7684\u6587\u672c\u672b\u5c3e\u4f1a\u6709\u4e00\u4e2a\u56de\u8f66\u7b26\u3002",(0,c.jsx)(n.code,{children:"-n"}),"\u53c2\u6570\u53ef\u4ee5\u53d6\u6d88\u672b\u5c3e\u7684\u56de\u8f66\u7b26\uff0c\u4f7f\u5f97\u4e0b\u4e00\u4e2a\u63d0\u793a\u7b26\u7d27\u8ddf\u5728\u8f93\u51fa\u5185\u5bb9\u7684\u540e\u9762\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo -n hello world\nhello world$\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"world"}),"\u540e\u9762\u76f4\u63a5\u5c31\u662f\u4e0b\u4e00\u884c\u7684\u63d0\u793a\u7b26",(0,c.jsx)(n.code,{children:"$"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo a;echo b\na\nb\n\n$ echo -n a;echo b\nab\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"-n"}),"\u53c2\u6570\u53ef\u4ee5\u8ba9\u4e24\u4e2a",(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\u7684\u8f93\u51fa\u8fde\u5728\u4e00\u8d77\uff0c\u51fa\u73b0\u5728\u540c\u4e00\u884c\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"-e\u53c2\u6570",children:[(0,c.jsx)(n.code,{children:"-e"}),"\u53c2\u6570"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"-e"}),"\u53c2\u6570\u4f1a\u89e3\u91ca\u5f15\u53f7\uff08\u53cc\u5f15\u53f7\u548c\u5355\u5f15\u53f7\uff09\u91cc\u9762\u7684\u7279\u6b8a\u5b57\u7b26\uff08\u6bd4\u5982\u6362\u884c\u7b26",(0,c.jsx)(n.code,{children:"\\n"}),"\uff09\u3002\u5982\u679c\u4e0d\u4f7f\u7528",(0,c.jsx)(n.code,{children:"-e"}),"\u53c2\u6570\uff0c\u5373\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f15\u53f7\u4f1a\u8ba9\u7279\u6b8a\u5b57\u7b26\u53d8\u6210\u666e\u901a\u5b57\u7b26\uff0c",(0,c.jsx)(n.code,{children:"echo"}),"\u4e0d\u89e3\u91ca\u5b83\u4eec\uff0c\u539f\u6837\u8f93\u51fa\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'$ echo "Hello\\nWorld"\nHello\\nWorld\n\n# \u53cc\u5f15\u53f7\u7684\u60c5\u51b5\n$ echo -e "Hello\\nWorld"\nHello\nWorld\n\n# \u5355\u5f15\u53f7\u7684\u60c5\u51b5\n$ echo -e \'Hello\\nWorld\'\nHello\nWorld\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"-e"}),"\u53c2\u6570\u4f7f\u5f97",(0,c.jsx)(n.code,{children:"\\n"}),"\u89e3\u91ca\u4e3a\u6362\u884c\u7b26\uff0c\u5bfc\u81f4\u8f93\u51fa\u5185\u5bb9\u91cc\u9762\u51fa\u73b0\u6362\u884c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u547d\u4ee4\u683c\u5f0f",children:"\u547d\u4ee4\u683c\u5f0f"}),"\n",(0,c.jsx)(n.p,{children:"\u547d\u4ee4\u884c\u73af\u5883\u4e2d\uff0c\u4e3b\u8981\u901a\u8fc7\u4f7f\u7528 Shell \u547d\u4ee4\uff0c\u8fdb\u884c\u5404\u79cd\u64cd\u4f5c\u3002Shell \u547d\u4ee4\u57fa\u672c\u90fd\u662f\u4e0b\u9762\u7684\u683c\u5f0f\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ command [ arg1 ... [ argN ]]\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"command"}),"\u662f\u5177\u4f53\u7684\u547d\u4ee4\u6216\u8005\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\uff0c",(0,c.jsx)(n.code,{children:"arg1 ... argN"}),"\u662f\u4f20\u9012\u7ed9\u547d\u4ee4\u7684\u53c2\u6570\uff0c\u5b83\u4eec\u662f\u53ef\u9009\u7684\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ ls -l\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u8fd9\u4e2a\u547d\u4ee4\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"ls"}),"\u662f\u547d\u4ee4\uff0c",(0,c.jsx)(n.code,{children:"-l"}),"\u662f\u53c2\u6570\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u4e9b\u53c2\u6570\u662f\u547d\u4ee4\u7684\u914d\u7f6e\u9879\uff0c\u8fd9\u4e9b\u914d\u7f6e\u9879\u4e00\u822c\u90fd\u4ee5\u4e00\u4e2a\u8fde\u8bcd\u7ebf\u5f00\u5934\uff0c\u6bd4\u5982\u4e0a\u9762\u7684",(0,c.jsx)(n.code,{children:"-l"}),"\u3002\u540c\u4e00\u4e2a\u914d\u7f6e\u9879\u5f80\u5f80\u6709\u957f\u548c\u77ed\u4e24\u79cd\u5f62\u5f0f\uff0c\u6bd4\u5982",(0,c.jsx)(n.code,{children:"-l"}),"\u662f\u77ed\u5f62\u5f0f\uff0c",(0,c.jsx)(n.code,{children:"--list"}),"\u662f\u957f\u5f62\u5f0f\uff0c\u5b83\u4eec\u7684\u4f5c\u7528\u5b8c\u5168\u76f8\u540c\u3002\u77ed\u5f62\u5f0f\u4fbf\u4e8e\u624b\u52a8\u8f93\u5165\uff0c\u957f\u5f62\u5f0f\u4e00\u822c\u7528\u5728\u811a\u672c\u4e4b\u4e2d\uff0c\u53ef\u8bfb\u6027\u66f4\u597d\uff0c\u5229\u4e8e\u89e3\u91ca\u81ea\u8eab\u7684\u542b\u4e49\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# \u77ed\u5f62\u5f0f\n$ ls -r\n\n# \u957f\u5f62\u5f0f\n$ ls --reverse\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"-r"}),"\u662f\u77ed\u5f62\u5f0f\uff0c",(0,c.jsx)(n.code,{children:"--reverse"}),"\u662f\u957f\u5f62\u5f0f\uff0c\u4f5c\u7528\u5b8c\u5168\u4e00\u6837\u3002\u524d\u8005\u4fbf\u4e8e\u8f93\u5165\uff0c\u540e\u8005\u4fbf\u4e8e\u7406\u89e3\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"Bash \u5355\u4e2a\u547d\u4ee4\u4e00\u822c\u90fd\u662f\u4e00\u884c\uff0c\u7528\u6237\u6309\u4e0b\u56de\u8f66\u952e\uff0c\u5c31\u5f00\u59cb\u6267\u884c\u3002\u6709\u4e9b\u547d\u4ee4\u6bd4\u8f83\u957f\uff0c\u5199\u6210\u591a\u884c\u4f1a\u6709\u5229\u4e8e\u9605\u8bfb\u548c\u7f16\u8f91\uff0c\u8fd9\u65f6\u53ef\u4ee5\u5728\u6bcf\u4e00\u884c\u7684\u7ed3\u5c3e\u52a0\u4e0a\u53cd\u659c\u6760\uff0cBash \u5c31\u4f1a\u5c06\u4e0b\u4e00\u884c\u8ddf\u5f53\u524d\u884c\u653e\u5728\u4e00\u8d77\u89e3\u91ca\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo foo bar\n\n# \u7b49\u540c\u4e8e\n$ echo foo \\\nbar\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u7a7a\u683c",children:"\u7a7a\u683c"}),"\n",(0,c.jsx)(n.p,{children:"Bash \u4f7f\u7528\u7a7a\u683c\uff08\u6216 Tab \u952e\uff09\u533a\u5206\u4e0d\u540c\u7684\u53c2\u6570\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ command foo bar\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"foo"}),"\u548c",(0,c.jsx)(n.code,{children:"bar"}),"\u4e4b\u95f4\u6709\u4e00\u4e2a\u7a7a\u683c\uff0c\u6240\u4ee5 Bash \u8ba4\u4e3a\u5b83\u4eec\u662f\u4e24\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u53c2\u6570\u4e4b\u95f4\u6709\u591a\u4e2a\u7a7a\u683c\uff0cBash \u4f1a\u81ea\u52a8\u5ffd\u7565\u591a\u4f59\u7684\u7a7a\u683c\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo this is a     test\nthis is a test\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"a"}),"\u548c",(0,c.jsx)(n.code,{children:"test"}),"\u4e4b\u95f4\u6709\u591a\u4e2a\u7a7a\u683c\uff0cBash \u4f1a\u5ffd\u7565\u591a\u4f59\u7684\u7a7a\u683c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5206\u53f7",children:"\u5206\u53f7"}),"\n",(0,c.jsxs)(n.p,{children:["\u5206\u53f7\uff08",(0,c.jsx)(n.code,{children:";"}),"\uff09\u662f\u547d\u4ee4\u7684\u7ed3\u675f\u7b26\uff0c\u4f7f\u5f97\u4e00\u884c\u53ef\u4ee5\u653e\u7f6e\u591a\u4e2a\u547d\u4ee4\uff0c\u4e0a\u4e00\u4e2a\u547d\u4ee4\u6267\u884c\u7ed3\u675f\u540e\uff0c\u518d\u6267\u884c\u7b2c\u4e8c\u4e2a\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ clear; ls\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0cBash \u5148\u6267\u884c",(0,c.jsx)(n.code,{children:"clear"}),"\u547d\u4ee4\uff0c\u6267\u884c\u5b8c\u6210\u540e\uff0c\u518d\u6267\u884c",(0,c.jsx)(n.code,{children:"ls"}),"\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f\uff0c\u4f7f\u7528\u5206\u53f7\u65f6\uff0c\u7b2c\u4e8c\u4e2a\u547d\u4ee4\u603b\u662f\u63a5\u7740\u7b2c\u4e00\u4e2a\u547d\u4ee4\u6267\u884c\uff0c\u4e0d\u7ba1\u7b2c\u4e00\u4e2a\u547d\u4ee4\u6267\u884c\u6210\u529f\u6216\u5931\u8d25\u3002"}),"\n",(0,c.jsxs)(n.h2,{id:"\u547d\u4ee4\u7684\u7ec4\u5408\u7b26\u548c",children:["\u547d\u4ee4\u7684\u7ec4\u5408\u7b26",(0,c.jsx)(n.code,{children:"&&"}),"\u548c",(0,c.jsx)(n.code,{children:"||"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u9664\u4e86\u5206\u53f7\uff0cBash \u8fd8\u63d0\u4f9b\u4e24\u4e2a\u547d\u4ee4\u7ec4\u5408\u7b26",(0,c.jsx)(n.code,{children:"&&"}),"\u548c",(0,c.jsx)(n.code,{children:"||"}),"\uff0c\u5141\u8bb8\u66f4\u597d\u5730\u63a7\u5236\u591a\u4e2a\u547d\u4ee4\u4e4b\u95f4\u7684\u7ee7\u53d1\u5173\u7cfb\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"Command1 && Command2\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u7684\u610f\u601d\u662f\uff0c\u5982\u679c",(0,c.jsx)(n.code,{children:"Command1"}),"\u547d\u4ee4\u8fd0\u884c\u6210\u529f\uff0c\u5219\u7ee7\u7eed\u8fd0\u884c",(0,c.jsx)(n.code,{children:"Command2"}),"\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"Command1 || Command2\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u547d\u4ee4\u7684\u610f\u601d\u662f\uff0c\u5982\u679c",(0,c.jsx)(n.code,{children:"Command1"}),"\u547d\u4ee4\u8fd0\u884c\u5931\u8d25\uff0c\u5219\u7ee7\u7eed\u8fd0\u884c",(0,c.jsx)(n.code,{children:"Command2"}),"\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ cat filelist.txt ; ls -l filelist.txt\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u53ea\u8981",(0,c.jsx)(n.code,{children:"cat"}),"\u547d\u4ee4\u6267\u884c\u7ed3\u675f\uff0c\u4e0d\u7ba1\u6210\u529f\u6216\u5931\u8d25\uff0c\u90fd\u4f1a\u7ee7\u7eed\u6267\u884c",(0,c.jsx)(n.code,{children:"ls"}),"\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ cat filelist.txt && ls -l filelist.txt\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u53ea\u6709",(0,c.jsx)(n.code,{children:"cat"}),"\u547d\u4ee4\u6267\u884c\u6210\u529f\uff0c\u624d\u4f1a\u7ee7\u7eed\u6267\u884c",(0,c.jsx)(n.code,{children:"ls"}),"\u547d\u4ee4\u3002\u5982\u679c",(0,c.jsx)(n.code,{children:"cat"}),"\u6267\u884c\u5931\u8d25\uff08\u6bd4\u5982\u4e0d\u5b58\u5728\u6587\u4ef6",(0,c.jsx)(n.code,{children:"flielist.txt"}),"\uff09\uff0c\u90a3\u4e48",(0,c.jsx)(n.code,{children:"ls"}),"\u547d\u4ee4\u5c31\u4e0d\u4f1a\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ mkdir foo || mkdir bar\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u53ea\u6709",(0,c.jsx)(n.code,{children:"mkdir foo"}),"\u547d\u4ee4\u6267\u884c\u5931\u8d25\uff08\u6bd4\u5982",(0,c.jsx)(n.code,{children:"foo"}),"\u76ee\u5f55\u5df2\u7ecf\u5b58\u5728\uff09\uff0c\u624d\u4f1a\u7ee7\u7eed\u6267\u884c",(0,c.jsx)(n.code,{children:"mkdir bar"}),"\u547d\u4ee4\u3002\u5982\u679c",(0,c.jsx)(n.code,{children:"mkdir foo"}),"\u547d\u4ee4\u6267\u884c\u6210\u529f\uff0c\u5c31\u4e0d\u4f1a\u521b\u5efa",(0,c.jsx)(n.code,{children:"bar"}),"\u76ee\u5f55\u4e86\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"type-\u547d\u4ee4",children:"type \u547d\u4ee4"}),"\n",(0,c.jsx)(n.p,{children:"Bash \u672c\u8eab\u5185\u7f6e\u4e86\u5f88\u591a\u547d\u4ee4\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u6267\u884c\u5916\u90e8\u7a0b\u5e8f\u3002\u600e\u4e48\u77e5\u9053\u4e00\u4e2a\u547d\u4ee4\u662f\u5185\u7f6e\u547d\u4ee4\uff0c\u8fd8\u662f\u5916\u90e8\u7a0b\u5e8f\u5462\uff1f"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"type"}),"\u547d\u4ee4\u7528\u6765\u5224\u65ad\u547d\u4ee4\u7684\u6765\u6e90\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ type echo\necho is a shell builtin\n$ type ls\nls is hashed (/bin/ls)\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"type"}),"\u547d\u4ee4\u544a\u8bc9\u6211\u4eec\uff0c",(0,c.jsx)(n.code,{children:"echo"}),"\u662f\u5185\u90e8\u547d\u4ee4\uff0c",(0,c.jsx)(n.code,{children:"ls"}),"\u662f\u5916\u90e8\u7a0b\u5e8f\uff08",(0,c.jsx)(n.code,{children:"/bin/ls"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"type"}),"\u547d\u4ee4\u672c\u8eab\u4e5f\u662f\u5185\u7f6e\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ type type\ntype is a shell builtin\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u8981\u67e5\u770b\u4e00\u4e2a\u547d\u4ee4\u7684\u6240\u6709\u5b9a\u4e49\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"type"}),"\u547d\u4ee4\u7684",(0,c.jsx)(n.code,{children:"-a"}),"\u53c2\u6570\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ type -a echo\necho is shell builtin\necho is /usr/bin/echo\necho is /bin/echo\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4ee3\u7801\u8868\u793a\uff0c",(0,c.jsx)(n.code,{children:"echo"}),"\u547d\u4ee4\u65e2\u662f\u5185\u7f6e\u547d\u4ee4\uff0c\u4e5f\u6709\u5bf9\u5e94\u7684\u5916\u90e8\u7a0b\u5e8f\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"type"}),"\u547d\u4ee4\u7684",(0,c.jsx)(n.code,{children:"-t"}),"\u53c2\u6570\uff0c\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u547d\u4ee4\u7684\u7c7b\u578b\uff1a\u522b\u540d\uff08alias\uff09\uff0c\u5173\u952e\u8bcd\uff08keyword\uff09\uff0c\u51fd\u6570\uff08function\uff09\uff0c\u5185\u7f6e\u547d\u4ee4\uff08builtin\uff09\u548c\u6587\u4ef6\uff08file\uff09\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ type -t bash\nfile\n$ type -t if\nkeyword\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"bash"}),"\u662f\u6587\u4ef6\uff0c",(0,c.jsx)(n.code,{children:"if"}),"\u662f\u5173\u952e\u8bcd\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5feb\u6377\u952e",children:"\u5feb\u6377\u952e"}),"\n",(0,c.jsx)(n.p,{children:"Bash \u63d0\u4f9b\u5f88\u591a\u5feb\u6377\u952e\uff0c\u53ef\u4ee5\u5927\u5927\u65b9\u4fbf\u64cd\u4f5c\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u6700\u5e38\u7528\u7684\u5feb\u6377\u952e\uff0c\u5b8c\u6574\u7684\u4ecb\u7ecd\u53c2\u89c1\u300a\u884c\u64cd\u4f5c\u300b\u4e00\u7ae0\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + L"}),"\uff1a\u6e05\u9664\u5c4f\u5e55\u5e76\u5c06\u5f53\u524d\u884c\u79fb\u5230\u9875\u9762\u9876\u90e8\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + C"}),"\uff1a\u4e2d\u6b62\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Shift + PageUp"}),"\uff1a\u5411\u4e0a\u6eda\u52a8\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Shift + PageDown"}),"\uff1a\u5411\u4e0b\u6eda\u52a8\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + U"}),"\uff1a\u4ece\u5149\u6807\u4f4d\u7f6e\u5220\u9664\u5230\u884c\u9996\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + K"}),"\uff1a\u4ece\u5149\u6807\u4f4d\u7f6e\u5220\u9664\u5230\u884c\u5c3e\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + W"}),"\uff1a\u5220\u9664\u5149\u6807\u4f4d\u7f6e\u524d\u4e00\u4e2a\u5355\u8bcd\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Ctrl + D"}),"\uff1a\u5173\u95ed Shell \u4f1a\u8bdd\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"\u2191"}),"\uff0c",(0,c.jsx)(n.code,{children:"\u2193"}),"\uff1a\u6d4f\u89c8\u5df2\u6267\u884c\u547d\u4ee4\u7684\u5386\u53f2\u8bb0\u5f55\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9664\u4e86\u4e0a\u9762\u7684\u5feb\u6377\u952e\uff0cBash \u8fd8\u5177\u6709\u81ea\u52a8\u8865\u5168\u529f\u80fd\u3002\u547d\u4ee4\u8f93\u5165\u5230\u4e00\u534a\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6309\u4e0b Tab \u952e\uff0cBash \u4f1a\u81ea\u52a8\u5b8c\u6210\u5269\u4e0b\u7684\u90e8\u5206\u3002\u6bd4\u5982\uff0c\u8f93\u5165",(0,c.jsx)(n.code,{children:"tou"}),"\uff0c\u7136\u540e\u6309\u4e00\u4e0b Tab \u952e\uff0cBash \u4f1a\u81ea\u52a8\u8865\u4e0a",(0,c.jsx)(n.code,{children:"ch"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u9664\u4e86\u547d\u4ee4\u7684\u81ea\u52a8\u8865\u5168\uff0cBash \u8fd8\u652f\u6301\u8def\u5f84\u7684\u81ea\u52a8\u8865\u5168\u3002\u6709\u65f6\uff0c\u9700\u8981\u8f93\u5165\u5f88\u957f\u7684\u8def\u5f84\uff0c\u8fd9\u65f6\u53ea\u9700\u8981\u8f93\u5165\u524d\u9762\u7684\u90e8\u5206\uff0c\u7136\u540e\u6309\u4e0b Tab \u952e\uff0c\u5c31\u4f1a\u81ea\u52a8\u8865\u5168\u540e\u9762\u7684\u90e8\u5206\u3002\u5982\u679c\u6709\u591a\u4e2a\u53ef\u80fd\u7684\u9009\u62e9\uff0c\u6309\u4e24\u6b21 Tab \u952e\uff0cBash \u4f1a\u663e\u793a\u6240\u6709\u9009\u9879\uff0c\u8ba9\u4f60\u9009\u62e9\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>h,a:()=>r});var c=s(7294);const l={},d=c.createContext(l);function r(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);