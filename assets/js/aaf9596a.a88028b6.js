"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9578],{3784:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var p=i(5893),t=i(1151);const r={},s="pip",l={id:"pip",title:"pip",description:"virtualenv",source:"@site/notes/python/pip.md",sourceDirName:".",slug:"/pip",permalink:"/notes/python/pip",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ocr",permalink:"/notes/python/ocr"},next:{title:"selenium",permalink:"/notes/python/selenium"}},o={},c=[{value:"virtualenv",id:"virtualenv",level:2},{value:"pipenv",id:"pipenv",level:2},{value:"pip.conf",id:"pipconf",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,t.a)(),...n.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e.h1,{id:"pip",children:"pip"}),"\n",(0,p.jsx)(e.h2,{id:"virtualenv",children:"virtualenv"}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"(sudo) pip install virtualenv\nvirtualenv -p /usr/bin/python3.7 ~/.virtualenv/py3\n# pip freeze > requirements.txt\n"})}),"\n",(0,p.jsx)(e.h2,{id:"pipenv",children:"pipenv"}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"alias pv='pipenv run python'\nalias pi='pipenv run pip install '\n"})}),"\n",(0,p.jsx)(e.h2,{id:"pipconf",children:"pip.conf"}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"# \u4e00\u6b21\npip install web.py -i http://pypi.douban.com/simple --trusted-host pypi.douban.com\n# \u5168\u5c40\n\n# \u6e05\u534e\u6e90\npip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple\n# \u963f\u91cc\u6e90\npip config set global.index-url https://mirrors.aliyun.com/pypi/simple/\n# \u817e\u8baf\u6e90\npip config set global.index-url http://mirrors.cloud.tencent.com/pypi/simple\n# \u8c46\u74e3\u6e90\npip config set global.index-url http://pypi.douban.com/simple/\n\n# or\n\n# linux:`~/.pip/pip.conf`\n# windows:`%HOMEPATH%\\pip\\pip.ini\uff09`\n\n[global]\n  index-url = http://mirrors.aliyun.com/pypi/simple/\n[install]\n  trusted-host=mirrors.aliyun.com\n\n# locale.Error: unsupported locale setting\nexport LC_ALL=C\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,p.jsx)(e,{...n,children:(0,p.jsx)(a,{...n})}):a(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>l,a:()=>s});var p=i(7294);const t={},r=p.createContext(t);function s(n){const e=p.useContext(r);return p.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),p.createElement(r.Provider,{value:e},n.children)}}}]);