"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[6925],{2967:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(5893),t=r(1151);const i={},o="supervisor & systemctl service",c={id:"supervisor",title:"supervisor & systemctl service",description:"supervisor",source:"@site/notes/linux/supervisor.md",sourceDirName:".",slug:"/supervisor",permalink:"/notes/linux/supervisor",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"samba(old)",permalink:"/notes/linux/samba"},next:{title:"ubuntu(old)",permalink:"/notes/linux/ubuntu"}},l={},u=[{value:"supervisor",id:"supervisor",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u914d\u7f6e: \u540e\u7f00\u4e3a conf \u6216 ini",id:"\u914d\u7f6e-\u540e\u7f00\u4e3a-conf-\u6216-ini",level:3},{value:"systemctl service",id:"systemctl-service",level:2},{value:"glider example",id:"glider-example",level:3}];function a(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"supervisor--systemctl-service",children:"supervisor & systemctl service"}),"\n",(0,n.jsx)(s.h2,{id:"supervisor",children:"supervisor"}),"\n",(0,n.jsx)(s.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"yay --noconfirm -S supervisor\n\n# or install with pip\n\npip install supervisor\nsudo ~/.venv/py3/bin/echo_supervisord_conf > /etc/supervisord.conf\n# config /etc/supervisord.conf\nsupervisord\n"})}),"\n",(0,n.jsx)(s.h3,{id:"\u914d\u7f6e-\u540e\u7f00\u4e3a-conf-\u6216-ini",children:"\u914d\u7f6e: \u540e\u7f00\u4e3a conf \u6216 ini"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"[program:frp_ssh]\n\ncommand     = /home/user/frp/frpc -c /home/user/frp/config.ini\ndirectory = /home/user/somedir\nuser = user\nautostart = true\nautorestart = true\nstartsecs   = 3\n\nredirect_stderr         = true\nstdout_logfile_maxbytes = 50MB\nstdout_logfile_backups  = 10\nstdout_logfile          = /home/user/frp/log\n"})}),"\n",(0,n.jsx)(s.h2,{id:"systemctl-service",children:"systemctl service"}),"\n",(0,n.jsx)(s.h3,{id:"glider-example",children:"glider example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"[Unit]\nDescription=Glider\nDocumentation=glider --help\nAfter=network.target\nStartLimitIntervalSec=30\nStartLimitBurst=2\n\n[Service]\nExecStart=/usr/bin/glider -config /etc/glider/glider.conf\nRestart=always\nRestartSec=1\n# User=someuser\n\n[Install]\nAlias=glider.service\nWantedBy=multi-user.target\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sudo ln -s glider.service /etc/systemd/system/glider.service\nsudo systemctl restart glider.service\n"})})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>c,a:()=>o});var n=r(7294);const t={},i=n.createContext(t);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);