"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[5356],{7986:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=r(4848),s=r(8453);const o={},a="frp",d={id:"frp",title:"frp",description:"downloads",source:"@site/notes/linux/frp.md",sourceDirName:".",slug:"/frp",permalink:"/notes/linux/frp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"asdf",permalink:"/notes/linux/asdf"},next:{title:"iptables",permalink:"/notes/linux/iptables"}},l={},c=[{value:"downloads",id:"downloads",level:2},{value:"frps",id:"frps",level:2},{value:"frpc",id:"frpc",level:2}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"frp",children:"frp"})}),"\n",(0,t.jsx)(n.h2,{id:"downloads",children:"downloads"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/fatedier/frp/releases",children:"https://github.com/fatedier/frp/releases"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"frps",children:"frps"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[common]\nbind_port = 35000\ntoken = xxx\n\ndashboard_addr = 0.0.0.0\ndashboard_port = 7400\ndashboard_user = xxx\ndashboard_pwd = xxx\n"})}),"\n",(0,t.jsx)(n.h2,{id:"frpc",children:"frpc"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[common]\nserver_addr = address\nserver_port = 35000\ntoken = xxx\n\nuse_encryption = true\nuse_compression = true\n\n\n[some_name]\ntype = tcp\nlocal_ip = localhost\nlocal_port = 80\nremote_port = 8000\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);