"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[370],{99732:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>t});var s=r(86070),c=r(25710);const i={},l="\u5f52\u6863\u548c\u5907\u4efd",a={id:"bash-tutorial/archives/archiving",title:"\u5f52\u6863\u548c\u5907\u4efd",description:"gzip",source:"@site/docs/bash-tutorial/archives/archiving.md",sourceDirName:"bash-tutorial/archives",slug:"/bash-tutorial/archives/archiving",permalink:"/docs/bash-tutorial/archives/archiving",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/archiving.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bash-tutorial",permalink:"/docs/category/bash-tutorial"},next:{title:"\u5f02\u6b65\u4efb\u52a1",permalink:"/docs/bash-tutorial/archives/async"}},d={},t=[{value:"gzip",id:"gzip",level:2},{value:"bzip2",id:"bzip2",level:2},{value:"zip",id:"zip",level:2},{value:"tar",id:"tar",level:2},{value:"rsync",id:"rsync",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5f52\u6863\u548c\u5907\u4efd",children:"\u5f52\u6863\u548c\u5907\u4efd"}),"\n",(0,s.jsx)(e.h2,{id:"gzip",children:"gzip"}),"\n",(0,s.jsxs)(e.p,{children:["gzip \u7a0b\u5e8f\u7528\u6765\u538b\u7f29\u6587\u4ef6\uff0c\u539f\u6587\u4ef6\u7684\u538b\u7f29\u7248\uff08\u6dfb\u52a0",(0,s.jsx)(e.code,{children:"gz"}),"\u540e\u7f00\u540d\uff09\u4f1a\u66ff\u4ee3\u539f\u6587\u4ef6\u3002gunzip \u7a0b\u5e8f\u7528\u6765\u8fd8\u539f\u538b\u7f29\u7248\u672c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ gzip foo.txt\n$ gunzip foo.txt.gz\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gzip"}),"\u7684\u53c2\u6570\u5982\u4e0b\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"-c\t\u628a\u8f93\u51fa\u5199\u5165\u5230\u6807\u51c6\u8f93\u51fa\uff0c\u5e76\u4e14\u4fdd\u7559\u539f\u59cb\u6587\u4ef6\u3002\u4e5f\u6709\u53ef\u80fd\u7528--stdout \u548c--to-stdout \u9009\u9879\u6765\u6307\u5b9a\u3002"}),"\n",(0,s.jsx)(e.li,{children:"-d\t\u89e3\u538b\u7f29\u3002\u6b63\u5982 gunzip \u547d\u4ee4\u4e00\u6837\u3002\u4e5f\u53ef\u4ee5\u7528--decompress \u6216\u8005--uncompress \u9009\u9879\u6765\u6307\u5b9a."}),"\n",(0,s.jsx)(e.li,{children:"-f\t\u5f3a\u5236\u538b\u7f29\uff0c\u5373\u4f7f\u539f\u59cb\u6587\u4ef6\u7684\u538b\u7f29\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\u4e86\uff0c\u4e5f\u8981\u6267\u884c\u3002\u4e5f\u53ef\u4ee5\u7528--force \u9009\u9879\u6765\u6307\u5b9a\u3002"}),"\n",(0,s.jsx)(e.li,{children:"-h\t\u663e\u793a\u7528\u6cd5\u4fe1\u606f\u3002\u4e5f\u53ef\u7528--help \u9009\u9879\u6765\u6307\u5b9a\u3002"}),"\n",(0,s.jsx)(e.li,{children:"-l\t\u5217\u51fa\u6bcf\u4e2a\u88ab\u538b\u7f29\u6587\u4ef6\u7684\u538b\u7f29\u6570\u636e\u3002\u4e5f\u53ef\u7528--list \u9009\u9879\u3002"}),"\n",(0,s.jsx)(e.li,{children:"-r\t\u82e5\u547d\u4ee4\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u53c2\u6570\u662f\u76ee\u5f55\uff0c\u5219\u9012\u5f52\u5730\u538b\u7f29\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u3002\u4e5f\u53ef\u7528--recursive \u9009\u9879\u6765\u6307\u5b9a\u3002"}),"\n",(0,s.jsx)(e.li,{children:"-t\t\u6d4b\u8bd5\u538b\u7f29\u6587\u4ef6\u7684\u5b8c\u6574\u6027\u3002\u4e5f\u53ef\u7528--test \u9009\u9879\u6765\u6307\u5b9a\u3002"}),"\n",(0,s.jsx)(e.li,{children:"-v\t\u663e\u793a\u538b\u7f29\u8fc7\u7a0b\u4e2d\u7684\u4fe1\u606f\u3002\u4e5f\u53ef\u7528--verbose \u9009\u9879\u6765\u6307\u5b9a\u3002"}),"\n",(0,s.jsx)(e.li,{children:"-number\t\u8bbe\u7f6e\u538b\u7f29\u6307\u6570\u3002number \u662f\u4e00\u4e2a\u57281\uff08\u6700\u5feb\uff0c\u6700\u5c0f\u538b\u7f29\uff09\u52309\uff08\u6700\u6162\uff0c\u6700\u5927\u538b\u7f29\uff09\u4e4b\u95f4\u7684\u6574\u6570\u3002 \u6570\u503c1\u548c9\u4e5f\u53ef\u4ee5\u5404\u81ea\u7528--fast \u548c--best \u9009\u9879\u6765\u8868\u793a\u3002\u9ed8\u8ba4\u503c\u662f\u6574\u65706\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u67e5\u770b\u89e3\u538b\u7f29\u540e\u7684\u5185\u5bb9\n$ gunzip -c foo.txt | less\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"zcat"}),"\u7a0b\u5e8f\u7b49\u540c\u4e8e\u5e26\u6709-c \u9009\u9879\u7684 gunzip \u547d\u4ee4\u3002\u5b83\u53ef\u4ee5\u50cf",(0,s.jsx)(e.code,{children:"cat"}),"\u547d\u4ee4\u90a3\u6837\uff0c\u7528\u6765\u67e5\u770b",(0,s.jsx)(e.code,{children:"gzip"}),"\u538b\u7f29\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ zcat foo.txt.gz | less\n"})}),"\n",(0,s.jsx)(e.h2,{id:"bzip2",children:"bzip2"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"bzip2"}),"\u7a0b\u5e8f\u4e0e",(0,s.jsx)(e.code,{children:"gzip"}),"\u7a0b\u5e8f\u76f8\u4f3c\uff0c\u4f46\u662f\u4f7f\u7528\u4e86\u4e0d\u540c\u7684\u538b\u7f29\u7b97\u6cd5\uff0c\u820d\u5f03\u4e86\u538b\u7f29\u901f\u5ea6\uff0c\u5b9e\u73b0\u4e86\u66f4\u9ad8\u7684\u538b\u7f29\u7ea7\u522b\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5b83\u7684\u5de5\u4f5c\u6a21\u5f0f\u7b49\u540c\u4e8e",(0,s.jsx)(e.code,{children:"gzip"}),"\u3002 \u7531",(0,s.jsx)(e.code,{children:"bzip2"}),"\u538b\u7f29\u7684\u6587\u4ef6\uff0c\u7528\u6269\u5c55\u540d",(0,s.jsx)(e.code,{children:".bz2"}),"\u8868\u793a\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ bzip2 foo.txt\n$ bunzip2 foo.txt.bz2\n"})}),"\n",(0,s.jsxs)(e.p,{children:["gzip\u7a0b\u5e8f\u7684\u6240\u6709\u9009\u9879\uff08\u9664\u4e86",(0,s.jsx)(e.code,{children:"-r"}),"\uff09\uff0cbzip2 \u7a0b\u5e8f\u540c\u6837\u4e5f\u652f\u6301\u3002\u540c\u6837\u6709 bunzip2 \u548c bzcat \u7a0b\u5e8f\u6765\u89e3\u538b\u7f29\u6587\u4ef6\u3002bzip2 \u6587\u4ef6\u4e5f\u5e26\u6709 bzip2recover \u7a0b\u5e8f\uff0c\u5176\u4f1a \u8bd5\u56fe\u6062\u590d\u53d7\u635f\u7684 .bz2 \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"zip",children:"zip"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"zip"}),"\u7a0b\u5e8f\u65e2\u662f\u538b\u7f29\u5de5\u5177\uff0c\u4e5f\u662f\u4e00\u4e2a\u6253\u5305\u5de5\u5177\uff0c\u8bfb\u53d6\u548c\u5199\u5165.zip\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ zip options zipfile file...\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5b83\u7684\u7528\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u5c06\u6307\u5b9a\u76ee\u5f55\u538b\u7f29\u6210zip\u6587\u4ef6\n$ zip -r playground.zip playground\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"zip"}),"\u4e0e",(0,s.jsx)(e.code,{children:"tar"}),"\u547d\u4ee4\u6709\u4e00\u4e2a\u76f8\u53cd\u4e4b\u5904\u3002\u5982\u679c\u538b\u7f29\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u5176\u5c06\u88ab\u66f4\u65b0\u800c\u4e0d\u662f\u88ab\u66ff\u4ee3\u3002\u8fd9\u610f\u5473\u7740\u4f1a\u4fdd\u7559\u6b64\u6587\u4ef6\u5305\uff0c\u4f46\u662f\u4f1a\u6dfb\u52a0\u65b0\u6587\u4ef6\uff0c\u540c\u65f6\u66ff\u6362\u5339\u914d\u7684\u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u89e3\u538b\u4f7f\u7528",(0,s.jsx)(e.code,{children:"unzip"}),"\u547d\u4ee4\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ unzip ../playground.zip\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"unzip"}),"\u547d\u4ee4\u7684\u53c2\u6570\u5982\u4e0b\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"-l"})," \u5217\u51fa\u6587\u4ef6\u5305\u4e2d\u7684\u5185\u5bb9\u800c\u4e0d\u89e3\u538b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"-v"})," \u663e\u793a\u5197\u4f59\u4fe1\u606f"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"-p"})," \u8f93\u51fa\u53d1\u9001\u5230\u6807\u51c6\u8f93\u51fa"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ unzip -p ls-etc.zip | less\n"})}),"\n",(0,s.jsx)(e.h2,{id:"tar",children:"tar"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"tar"}),"\u662ftape archive\u7684\u7b80\u79f0\uff0c\u539f\u6765\u662f\u4e00\u6b3e\u5236\u4f5c\u78c1\u5e26\u5907\u4efd\u7684\u5de5\u5177\uff0c\u73b0\u5728\u4e3b\u8981\u7528\u4e8e\u6253\u5305\u3002\u4e00\u4e2a tar \u5305\u53ef\u4ee5\u7531\u4e00\u7ec4\u72ec\u7acb\u7684\u6587\u4ef6\uff0c\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u76ee\u5f55\uff0c\u6216\u8005\u4e24\u8005\u6df7\u5408\u4f53\u7ec4\u6210\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"tar"}),"\u7a0b\u5e8f\u7684\u8bed\u6cd5\u5982\u4e0b\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ tar mode[options] pathname...\n"})}),"\n",(0,s.jsx)(e.p,{children:"tar\u652f\u6301\u4ee5\u4e0b\u6a21\u5f0f\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"c \u8868\u793acreate\uff0c\u4e3a\u6587\u4ef6\u548c\uff0f\u6216\u76ee\u5f55\u5217\u8868\u521b\u5efa\u5f52\u6863\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"x \u62bd\u53d6\u5f52\u6863\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"r \u8ffd\u52a0\u5177\u4f53\u7684\u8def\u5f84\u5230\u5f52\u6863\u6587\u4ef6\u7684\u672b\u5c3e\u3002"}),"\n",(0,s.jsx)(e.li,{children:"t \u5217\u51fa\u5f52\u6863\u6587\u4ef6\u7684\u5185\u5bb9\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"f \u8868\u793afile\uff0c\u7528\u6765\u6307\u5b9a\u751f\u6210\u7684\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6a21\u5f0f\u548c\u53c2\u6570\u53ef\u4ee5\u5199\u5728\u4e00\u8d77\uff0c\u800c\u4e14\u4e0d\u9700\u8981\u5f00\u5934\u7684\u77ed\u6a2a\u7ebf\u3002\u6ce8\u610f\uff0c\u5fc5\u987b\u9996\u5148\u6307\u5b9a\u6a21\u5f0f\uff0c\u7136\u540e\u624d\u662f\u5176\u5b83\u7684\u9009\u9879\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u521b\u5efa\u5b50\u76ee\u5f55\u7684tar\u5305\n$ tar cf playground.tar playground\n\n# \u67e5\u770btar\u5305\u5185\u5bb9\n$ tar tf playground.tar\n\n# \u67e5\u770b\u66f4\u8be6\u7ec6\u7684\u5217\u8868\u4fe1\u606f\n$ tar tvf playground.tar\n\n# \u8fd8\u539f\u5f52\u6863\u6587\u4ef6\n$ tar xf playground.tar\n\n# \u8fd8\u539f\u5355\u4e2a\u6587\u4ef6\n$ tar xf archive.tar pathname\n\n# \u8fd8\u539f\u6587\u4ef6\u5230\u6307\u5b9a\u76ee\u5f55\n$ tar xvf archive.tar -C /home/me/\n\n# \u8ffd\u52a0\u6587\u4ef6\n$ tar rf archive.tar file.txt\n\n# \u9a8c\u8bc1\u5f52\u6863\u6587\u4ef6\u5185\u5bb9\u662f\u5426\u6b63\u786e\n$ tar tvfW archive.tar\n\n# \u652f\u6301\u901a\u914d\u7b26\n$ tar xf ../playground2.tar --wildcards 'home/me/playground/\\*.txt'\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6ce8\u610f\uff0c",(0,s.jsx)(e.code,{children:"tar"}),"\u547d\u4ee4\u8fd8\u539f\u7684\u65f6\u5019\uff0c\u603b\u662f\u8fd8\u539f\u4e3a\u76f8\u5bf9\u8def\u5f84\u3002\u5982\u679c\u5f52\u6863\u7684\u65f6\u5019\uff0c\u4fdd\u5b58\u7684\u662f\u7edd\u5bf9\u8def\u5f84\uff0c\u90a3\u4e48\u8fd8\u539f\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u7edd\u5bf9\u8def\u5f84\u4f1a\u6574\u4e2a\u53d8\u6210\u76f8\u5bf9\u8def\u5f84\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"find"}),"\u547d\u4ee4\u53ef\u4ee5\u4e0e",(0,s.jsx)(e.code,{children:"tar"}),"\u547d\u4ee4\u914d\u5408\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ find playground -name 'file.txt' -exec tar rf playground.tar '{}' '+'\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u7684\u547d\u4ee4\u5148\u7528",(0,s.jsx)(e.code,{children:"find"}),"\u7a0b\u5e8f\u627e\u5230\u6240\u6709\u540d\u4e3a",(0,s.jsx)(e.code,{children:"file.txt"}),"\u7684\u6587\u4ef6\uff0c\u7136\u540e\u4f7f\u7528\u8ffd\u52a0\u6a21\u5f0f\uff08",(0,s.jsx)(e.code,{children:"r"}),"\uff09\u7684",(0,s.jsx)(e.code,{children:"tar"}),"\u547d\u4ee4\uff0c\u628a\u5339\u914d\u7684\u6587\u4ef6\u6dfb\u52a0\u5230\u5f52\u6863\u6587\u4ef6",(0,s.jsx)(e.code,{children:"playground.tar"}),"\u91cc\u9762\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u79cd",(0,s.jsx)(e.code,{children:"tar"}),"\u548c",(0,s.jsx)(e.code,{children:"find"}),"\u7684\u914d\u5408\u4f7f\u7528\uff0c\u53ef\u4ee5\u521b\u5efa\u9010\u6e10\u589e\u52a0\u7684\u76ee\u5f55\u6811\u6216\u8005\u6574\u4e2a\u7cfb\u7edf\u7684\u5907\u4efd\u3002\u901a\u8fc7",(0,s.jsx)(e.code,{children:"find"}),"\u547d\u4ee4\u5339\u914d\u65b0\u4e8e\u67d0\u4e2a\u65f6\u95f4\u6233\u7684\u6587\u4ef6\uff0c\u6211\u4eec\u5c31\u80fd\u591f\u521b\u5efa\u4e00\u4e2a\u5f52\u6863\u6587\u4ef6\uff0c\u5176\u53ea\u5305\u542b\u65b0\u4e8e\u4e0a\u4e00\u4e2a tar \u5305\u7684\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"tar\u652f\u6301\u538b\u7f29\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u6253\u6210gzip\u538b\u7f29\u5305\n$ tar czvf assets.tar.gz dist\n\n# \u6253\u6210bz2\u538b\u7f29\u5305\n$ tar cvfj assets.tar.bz2 dist\n\n# \u89e3\u538b tar.gz \u6587\u4ef6\n$ tar xzv archive.tar.gz\n$ tar xvf archive.tar.gz\n\n# \u89e3\u538bbz2\u538b\u7f29\u5305\n$ tar xvf archive.tar.bz2\n\n# \u663e\u793agzip\u538b\u7f29\u5305\u5185\u5bb9\n$ tar tvf archive.tar.gz\n\n# \u663e\u793abz2\u538b\u7f29\u5305\u5185\u5bb9\n$ tar tvf archive.tar.bz2\n\n# \u4ecegzip\u538b\u7f29\u5305\u53d6\u51fa\u5355\u4e2a\u6587\u4ef6\n$ tar zxvf archive.tar.gz file.txt\n\n# \u4ecebz2\u538b\u7f29\u5305\u53d6\u51fa\u5355\u4e2a\u6587\u4ef6\n$ tar jxvf archive.tar.bz2 file.txt\n\n# \u6309\u901a\u914d\u7b26\u53d6\u51fa\u6587\u4ef6\n$ tar zxvf archive.tar.gz --wildcards '*.php'\n$ tar jxvf archive.tar.bz2 --wildcards '*.php'\n\n# \u8ffd\u52a0\u6587\u4ef6\u5230\u538b\u7f29\u5305\n$ tar rvf archive.tar.gz xyz.txt\n$ tar rvf archive.tar.bz2 xyz.txt\n"})}),"\n",(0,s.jsx)(e.h2,{id:"rsync",children:"rsync"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"rsync"}),"\u547d\u4ee4\u7528\u4e8e\u5728\u591a\u4e2a\u76ee\u5f55\u4e4b\u95f4\u3001\u6216\u8005\u672c\u5730\u4e0e\u8fdc\u7a0b\u76ee\u5f55\u4e4b\u95f4\u540c\u6b65\u3002\u5b57\u6bcd",(0,s.jsx)(e.code,{children:"r"}),"\u8868\u793a",(0,s.jsx)(e.code,{children:"remote"}),"\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ rsync options source destination\n"})}),"\n",(0,s.jsx)(e.p,{children:"source \u548c destination \u662f\u4e0b\u5217\u9009\u9879\u4e4b\u4e00\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e00\u4e2a\u672c\u5730\u6587\u4ef6\u6216\u76ee\u5f55"}),"\n",(0,s.jsxs)(e.li,{children:["\u4e00\u4e2a\u8fdc\u7aef\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u4ee5",(0,s.jsx)(e.code,{children:"[user@]host:path"}),"\u7684\u5f62\u5f0f\u5b58\u5728"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4e00\u4e2a\u8fdc\u7aef rsync \u670d\u52a1\u5668\uff0c\u7531",(0,s.jsx)(e.code,{children:"rsync://[user@]host[:port]/path"}),"\u6307\u5b9a"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f source \u548c destination \u4e24\u8005\u4e4b\u4e00\u5fc5\u987b\u662f\u672c\u5730\u6587\u4ef6\u3002rsync \u4e0d\u652f\u6301\u8fdc\u7aef\u5230\u8fdc\u7aef\u7684\u590d\u5236\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"rsync"}),"\u547d\u4ee4\u7684\u53c2\u6570\u5982\u4e0b\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"-a"})," \u9012\u5f52\u548c\u4fdd\u62a4\u6587\u4ef6\u5c5e\u6027"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"-v"})," \u5197\u4f59\u8f93\u51fa"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"--delete"})," \u5220\u9664\u53ef\u80fd\u5728\u5907\u4efd\u8bbe\u5907\u4e2d\u5df2\u7ecf\u5b58\u5728\u4f46\u5374\u4e0d\u518d\u5b58\u5728\u4e8e\u6e90\u8bbe\u5907\u4e2d\u7684\u6587\u4ef6"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"--rsh=ssh"})," \u4f7f\u7528 ssh \u7a0b\u5e8f\u4f5c\u4e3a\u8fdc\u7a0b shell\uff0c\u76ee\u7684\u5730\u5fc5\u987b\u6807\u6ce8\u4e3b\u673a\u540d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u540c\u6b65\u4e24\u4e2a\u672c\u5730\u76ee\u5f55\n$ rsync -av playground foo\n\n# \u5220\u9664\u6e90\u8bbe\u5907\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\n$ sudo rsync -av --delete /etc /home /usr/local /media/BigDisk/backup\n\n# \u8fdc\u7a0b\u540c\u6b65\n$ sudo rsync -av --delete --rsh=ssh /etc /home /usr/local remote-sys:/backup\n\n# \u4e0e\u8fdc\u7a0brsync\u4e3b\u673a\u540c\u6b65\n$ rsync -av -delete rsync://rsync.gtlib.gatech.edu/path/to/oss fedora-devel\n"})})]})}function o(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>a});var s=r(30758);const c={},i=s.createContext(c);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);