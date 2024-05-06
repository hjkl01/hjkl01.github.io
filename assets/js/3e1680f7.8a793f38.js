"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[6540],{4792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(85893),s=t(11151);const r={sidebar_position:0},o="linux",l={id:"index",title:"linux",description:"\u6211\u7684\u914d\u7f6e\u6587\u4ef6",source:"@site/notes/linux/index.md",sourceDirName:".",slug:"/",permalink:"/notes/linux/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"arch",permalink:"/notes/linux/arch"}},d={},c=[{value:"\u6211\u7684\u914d\u7f6e\u6587\u4ef6",id:"\u6211\u7684\u914d\u7f6e\u6587\u4ef6",level:2},{value:"zsh",id:"zsh",level:2},{value:"find",id:"find",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"linux",children:"linux"}),"\n",(0,i.jsx)(n.h2,{id:"\u6211\u7684\u914d\u7f6e\u6587\u4ef6",children:"\u6211\u7684\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/hjkl01/dotfiles",children:"https://github.com/hjkl01/dotfiles"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"zsh",children:"zsh"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# run command background\n1. setopt NO_HUP\n2. nohup <command> & disown\n"})}),"\n",(0,i.jsx)(n.h2,{id:"find",children:"find"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'# find by name\nfind . -name "*.log"\n\n# \u67e5\u627e\u5185\u5bb9\ngrep "hello" example.txt\ngrep -r "hello" my_directory\nfind directory | xargs grep "string"\n\n# udpate filename\nfind . -type f -name \'some.*\' | while read FILE; do\n    newfile="$(echo ${FILE} | sed -e \'s/some/result/\')"\n    mv "${FILE}" "${newfile}"\ndone\n\n# delte size < 1k\nfind -size 1k -delete\n\n# linux\nsed -i \'s/oo/kk/g\' testfile\n# Mac\nsed -i "" \'s/oo/kk/g\' testfile\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(67294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);