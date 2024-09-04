"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[5603],{1763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(4848),r=t(8453);const o={sidebar_position:1},p="pip",l={id:"pip",title:"pip",description:"virtualenv",source:"@site/notes/python/pip.md",sourceDirName:".",slug:"/pip",permalink:"/notes/python/pip",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"python",permalink:"/notes/python/"},next:{title:"celery",permalink:"/notes/python/celery"}},s={},c=[{value:"virtualenv",id:"virtualenv",level:3},{value:"pip.conf config mirror",id:"pipconf-config-mirror",level:3},{value:"poetry",id:"poetry",level:2},{value:"set mirror",id:"set-mirror",level:3},{value:"pyproject.toml to requirements.txt",id:"pyprojecttoml-to-requirementstxt",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"pip",children:"pip"})}),"\n",(0,i.jsx)(n.h3,{id:"virtualenv",children:"virtualenv"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"python3 -m venv some_dir\n\n# (sudo) pip install virtualenv\n# virtualenv -p /usr/bin/python3.7 ~/.virtualenv/py3\n# pip freeze > requirements.txt\n"})}),"\n",(0,i.jsx)(n.h3,{id:"pipconf-config-mirror",children:"pip.conf config mirror"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'# \u4e00\u6b21\npip install -i https://pypi.tuna.tsinghua.edu.cn/simple fastapi\n\n# poetry\n# pyproject.toml \u6587\u4ef6\n[[tool.poetry.source]]\nname = "aliyun"\nurl = "http://mirrors.aliyun.com/pypi/simple"\ndefault = true\n\n# \u5168\u5c40\n# \u6e05\u534e\u6e90\npip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple\n# \u963f\u91cc\u6e90\npip config set global.index-url https://mirrors.aliyun.com/pypi/simple/\n# \u817e\u8baf\u6e90\npip config set global.index-url http://mirrors.cloud.tencent.com/pypi/simple\n# \u8c46\u74e3\u6e90\npip config set global.index-url http://pypi.douban.com/simple/\n\n# or\n\n# linux:`~/.pip/pip.conf`\n# windows:`%HOMEPATH%\\pip\\pip.ini\uff09`\n\n[global]\n  index-url = http://mirrors.aliyun.com/pypi/simple/\n[install]\n  trusted-host=mirrors.aliyun.com\n\n# locale.Error: unsupported locale setting\nexport LC_ALL=C\n'})}),"\n",(0,i.jsx)(n.h2,{id:"poetry",children:"poetry"}),"\n",(0,i.jsx)(n.h3,{id:"set-mirror",children:"set mirror"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'poetry config repositories.pypi https://mirrors.aliyun.com/pypi/simple/\npoetry config --list\n\n# add to pyproject.toml\n[[tool.poetry.source]]\nname = "aliyun"\nurl = "https://mirrors.aliyun.com/pypi/simple/"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"pyprojecttoml-to-requirementstxt",children:"pyproject.toml to requirements.txt"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pip install pip-tools\npython -m piptools compile -o requirements.txt pyproject.toml\npip install -r requirements.txt\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>p,x:()=>l});var i=t(6540);const r={},o=i.createContext(r);function p(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:p(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);