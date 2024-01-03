"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[6728],{4380:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=s(5893),r=s(1151);const a={},o="samba(old)",i={id:"samba",title:"samba(old)",description:"new for docker",source:"@site/notes/linux/samba.md",sourceDirName:".",slug:"/samba",permalink:"/notes/linux/samba",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"remote desktop",permalink:"/notes/linux/remote_desktop"},next:{title:"supervisor & systemctl service",permalink:"/notes/linux/supervisor"}},c={},u=[{value:"\u5728 arch \u4e2d\u5b89\u88c5\u53c2\u8003",id:"\u5728-arch-\u4e2d\u5b89\u88c5\u53c2\u8003",level:3},{value:"\u5728 ubuntu \u4e2d\u5b89\u88c5",id:"\u5728-ubuntu-\u4e2d\u5b89\u88c5",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sambaold",children:"samba(old)"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"new for docker"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5728-arch-\u4e2d\u5b89\u88c5\u53c2\u8003",children:"\u5728 arch \u4e2d\u5b89\u88c5\u53c2\u8003"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"https://wiki.archlinux.org/title/samba\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5728-ubuntu-\u4e2d\u5b89\u88c5",children:"\u5728 ubuntu \u4e2d\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo apt-get install samba\nsudo useradd xxx\nsudo smbpasswd -a xxx\nsudo vi /etc/samba/smb.conf\n\n#### \u914d\u7f6e\u5185\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9\n[dev]\ncomment = dev\npath = /var/dev\nvalid user = xxx\nwrite list = xxx\ncreate mask = 0664\ndirectory mask = 0775\nforce user = xxx\nforce group = xxx\npublic = no\navailable = yes\nbrowseable = yes\nsecurity = user\n### \u91cd\u542fsamba\u3010sudo service smbd restart\u3011\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var t=s(7294);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);