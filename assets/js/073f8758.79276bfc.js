"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[2127],{178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(4848),r=t(8453);const s={},d="ddns",a={id:"ddns",title:"ddns",description:"\u521b\u5efa/\u67e5\u770bcloudflare TOKEN",source:"@site/notes/docker/ddns.md",sourceDirName:".",slug:"/ddns",permalink:"/notes/docker/ddns",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cowrie",permalink:"/notes/docker/cowrie"},next:{title:"dosgame",permalink:"/notes/docker/dosgame"}},c={},l=[{value:"\u521b\u5efa/\u67e5\u770bcloudflare TOKEN",id:"\u521b\u5efa\u67e5\u770bcloudflare-token",level:3}];function i(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"ddns",children:"ddns"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  ddns_go:\n    image: jeessy/ddns-go\n    restart: unless-stopped\n    network_mode: "host"\n    volumes:\n      - ./data/ddns:/root\n  # port: 9876\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"\u521b\u5efa\u67e5\u770bcloudflare-token",children:["\u521b\u5efa/\u67e5\u770b",(0,o.jsx)(n.a,{href:"https://dash.cloudflare.com/profile/api-tokens",children:"cloudflare TOKEN"})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var o=t(6540);const r={},s=o.createContext(r);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);