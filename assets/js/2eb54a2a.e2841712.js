"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9590],{58596:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var c=r(85893),n=r(11151);const t={},i="scp",o={id:"bash-tutorial/archives/commands/scp",title:"scp",description:"\u57fa\u672c\u7528\u6cd5",source:"@site/docs/bash-tutorial/archives/commands/scp.md",sourceDirName:"bash-tutorial/archives/commands",slug:"/bash-tutorial/archives/commands/scp",permalink:"/docs/bash-tutorial/archives/commands/scp",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/commands/scp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ps",permalink:"/docs/bash-tutorial/archives/commands/ps"},next:{title:"sed",permalink:"/docs/bash-tutorial/archives/commands/sed"}},l={},a=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"scp",children:"scp"}),"\n",(0,c.jsx)(s.h2,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"scp"}),"\u662f secure copy \u7684\u7f29\u5199\uff0c\u7528\u6765\u5728\u4e24\u53f0\u4e3b\u673a\u4e4b\u95f4\u52a0\u5bc6\u4f20\u9001\u6587\u4ef6\u3002\u5b83\u7684\u5e95\u5c42\u662f SSH \u534f\u8bae\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f22\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u5b83\u4e3b\u8981\u7528\u4e8e\u4ee5\u4e0b\u4e09\u79cd\u590d\u5236\u64cd\u4f5c\u3002"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u4ece\u672c\u5730\u7cfb\u7edf\u5230\u8fdc\u7a0b\u7cfb\u7edf\u3002"}),"\n",(0,c.jsx)(s.li,{children:"\u4ece\u8fdc\u7a0b\u7cfb\u7edf\u5230\u672c\u5730\u7cfb\u7edf\u3002"}),"\n",(0,c.jsx)(s.li,{children:"\u5728\u672c\u5730\u7cfb\u7edf\u7684\u4e24\u4e2a\u8fdc\u7a0b\u7cfb\u7edf\u4e4b\u95f4\u3002"}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4f7f\u7528",(0,c.jsx)(s.code,{children:"scp"}),"\u4f20\u8f93\u6570\u636e\u65f6\uff0c\u6587\u4ef6\u548c\u5bc6\u7801\u90fd\u662f\u52a0\u5bc6\u7684\uff0c\u4e0d\u4f1a\u6cc4\u6f0f\u654f\u611f\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"scp"}),"\u7684\u8bed\u6cd5\u7c7b\u4f3c",(0,c.jsx)(s.code,{children:"cp"}),"\u7684\u8bed\u6cd5\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u6ce8\u610f\uff0c\u5982\u679c\u4f20\u8f93\u7684\u6587\u4ef6\u5728\u672c\u673a\u548c\u8fdc\u7a0b\u7cfb\u7edf\uff0c\u6709\u76f8\u540c\u7684\u540d\u79f0\u548c\u4f4d\u7f6e\uff0c",(0,c.jsx)(s.code,{children:"scp"}),"\u4f1a\u5728\u6ca1\u6709\u8b66\u544a\u7684\u60c5\u51b5\u4e0b\u8986\u76d6\u6587\u4ef6\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uff081\uff09\u672c\u5730\u6587\u4ef6\u590d\u5236\u5230\u8fdc\u7a0b\u7cfb\u7edf"})}),"\n",(0,c.jsx)(s.p,{children:"\u590d\u5236\u672c\u673a\u6587\u4ef6\u5230\u8fdc\u7a0b\u7cfb\u7edf\u7684\u57fa\u672c\u8bed\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"# \u8bed\u6cd5\n$ scp SourceFile user@host:directory/TargetFile\n\n# \u793a\u4f8b\n$ scp file.txt remote_username@10.10.0.2:/remote/directory\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u4e0b\u9762\u662f\u590d\u5236\u6574\u4e2a\u76ee\u5f55\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"# \u5c06\u672c\u673a\u7684 documents \u76ee\u5f55\u62f7\u8d1d\u5230\u8fdc\u7a0b\u4e3b\u673a\uff0c\n# \u4f1a\u5728\u8fdc\u7a0b\u4e3b\u673a\u521b\u5efa documents \u76ee\u5f55\n$ scp -r documents username@server_ip:/path_to_remote_directory\n\n# \u5c06\u672c\u673a\u6574\u4e2a\u76ee\u5f55\u62f7\u8d1d\u5230\u8fdc\u7a0b\u76ee\u5f55\u4e0b\n$ scp -r localmachine/path_to_the_directory username@server_ip:/path_to_remote_directory/\n\n# \u5c06\u672c\u673a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u5185\u5bb9\u62f7\u8d1d\u5230\u8fdc\u7a0b\u76ee\u5f55\u4e0b\n$ scp -r localmachine/path_to_the_directory/* username@server_ip:/path_to_remote_directory/\n"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uff082\uff09\u8fdc\u7a0b\u6587\u4ef6\u590d\u5236\u5230\u672c\u5730"})}),"\n",(0,c.jsx)(s.p,{children:"\u4ece\u8fdc\u7a0b\u4e3b\u673a\u590d\u5236\u6587\u4ef6\u5230\u672c\u5730\u7684\u8bed\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"# \u8bed\u6cd5\n$ scp user@host:directory/SourceFile TargetFile\n\n# \u793a\u4f8b\n$ scp remote_username@10.10.0.2:/remote/file.txt /local/directory\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u4e0b\u9762\u662f\u590d\u5236\u6574\u4e2a\u76ee\u5f55\u7684\u4f8b\u5b50\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"# \u62f7\u8d1d\u4e00\u4e2a\u8fdc\u7a0b\u76ee\u5f55\u5230\u672c\u673a\u76ee\u5f55\u4e0b\n$ scp -r username@server_ip:/path_to_remote_directory local-machine/path_to_the_directory/\n\n# \u62f7\u8d1d\u8fdc\u7a0b\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u5185\u5bb9\uff0c\u5230\u672c\u673a\u76ee\u5f55\u4e0b\n$ scp -r username@server_ip:/path_to_remote_directory/* local-machine/path_to_the_directory/\n$ scp -r user@host:directory/SourceFolder TargetFolder\n"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\uff083\uff09\u4e24\u4e2a\u8fdc\u7a0b\u7cfb\u7edf\u4e4b\u95f4\u7684\u590d\u5236"})}),"\n",(0,c.jsx)(s.p,{children:"\u672c\u673a\u53d1\u51fa\u6307\u4ee4\uff0c\u4ece\u8fdc\u7a0b\u4e3b\u673a A \u62f7\u8d1d\u5230\u8fdc\u7a0b\u4e3b\u673a B \u7684\u8bed\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"# \u8bed\u6cd5\n$ scp user@host1:directory/SourceFile user@host2:directory/SourceFile\n\n# \u793a\u4f8b\n$ scp user1@host1.com:/files/file.txt user2@host2.com:/files\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u7cfb\u7edf\u5c06\u63d0\u793a\u60a8\u8f93\u5165\u4e24\u4e2a\u8fdc\u7a0b\u5e10\u6237\u7684\u5bc6\u7801\u3002\u6570\u636e\u5c06\u76f4\u63a5\u4ece\u4e00\u4e2a\u8fdc\u7a0b\u4e3b\u673a\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u8fdc\u7a0b\u4e3b\u673a\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-P"}),"\u7528\u6765\u6307\u5b9a\u8fdc\u7a0b\u4e3b\u673a\u7684 SSH \u7aef\u53e3\u3002\u5982\u679c\u8fdc\u7a0b\u4e3b\u673a\u4f7f\u7528\u975e\u9ed8\u8ba4\u7aef\u53e322\uff0c\u53ef\u4ee5\u5728\u547d\u4ee4\u4e2d\u6307\u5b9a\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ scp -P 2222 user@host:directory/SourceFile TargetFile\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-p"}),"\u53c2\u6570\u7528\u6765\u4fdd\u7559\u4fee\u6539\u65f6\u95f4\uff08modification time\uff09\u3001\u8bbf\u95ee\u65f6\u95f4\uff08access time\uff09\u3001\u6587\u4ef6\u72b6\u6001\uff08mode\uff09\u7b49\u539f\u59cb\u6587\u4ef6\u7684\u4fe1\u606f\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ scp -C -p ~/test.txt root@192.168.1.3:/some/path/test.txt\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-l"}),"\u53c2\u6570\u7528\u6765\u9650\u5236\u4f20\u8f93\u6570\u636e\u7684\u5e26\u5bbd\u901f\u7387\uff0c\u5355\u4f4d\u662f Kbit/sec\u3002\u5bf9\u4e8e\u591a\u4eba\u5206\u4eab\u7684\u5e26\u5bbd\uff0c\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u7559\u51fa\u4e00\u90e8\u5206\u5e26\u5bbd\u4f9b\u5176\u4ed6\u4eba\u4f7f\u7528\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ scp -l 80 yourusername@yourserver:/home/yourusername/* .\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,c.jsx)(s.code,{children:"scp"}),"\u547d\u4ee4\u5360\u7528\u7684\u5e26\u5bbd\u9650\u5236\u4e3a\u6bcf\u79d280K\u6bd4\u7279\u4f4d\uff0c\u5373\u6bcf\u79d210K\u5b57\u8282\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-c"}),"\u53c2\u6570\u7528\u6765\u6307\u5b9a\u52a0\u5bc6\u7b97\u6cd5\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ scp -c blowfish some_file your_username@remotehost.edu:~\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u9762\u4ee3\u7801\u6307\u5b9a\u52a0\u5bc6\u7b97\u6cd5\u4e3a",(0,c.jsx)(s.code,{children:"blowfish"}),"\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-C"}),"\u8868\u793a\u662f\u5426\u5728\u4f20\u8f93\u65f6\u538b\u7f29\u6587\u4ef6\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ scp -c blowfish -C local_file your_username@remotehost.edu:~\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-q"}),"\u53c2\u6570\u7528\u6765\u5173\u95ed\u663e\u793a\u62f7\u8d1d\u7684\u8fdb\u5ea6\u6761\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ scp -q Label.pdf mrarianto@202.x.x.x:.\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-F"}),"\u53c2\u6570\u7528\u6765\u6307\u5b9a ssh_config \u6587\u4ef6\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ scp -F /home/pungki/proxy_ssh_config Label.pdf\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-v"}),"\u53c2\u6570\u7528\u6765\u663e\u793a\u8be6\u7ec6\u7684\u8f93\u51fa\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ scp -v ~/test.txt root@192.168.1.3:/root/help2356.txt\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-i"}),"\u53c2\u6570\u7528\u6765\u6307\u5b9a\u5bc6\u94a5\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"$ scp -vCq -i private_key.pem ~/test.txt root@192.168.1.3:/some/path/test.txt\n"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"-r"}),"\u53c2\u6570\u8868\u793a\u662f\u5426\u4ee5\u9012\u5f52\u65b9\u5f0f\u590d\u5236\u76ee\u5f55\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>o,a:()=>i});var c=r(67294);const n={},t=c.createContext(n);function i(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);