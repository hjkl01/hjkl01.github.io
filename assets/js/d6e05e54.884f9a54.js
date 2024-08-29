"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[4747],{1491:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var t=o(4848),a=o(8453);const l={},r="ollama",c={id:"ollama",title:"ollama",description:"docker-compose.yml",source:"@site/notes/docker/ollama.md",sourceDirName:".",slug:"/ollama",permalink:"/notes/docker/ollama",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nocodb",permalink:"/notes/docker/nocodb"},next:{title:"openwrt",permalink:"/notes/docker/openwrt"}},s={},m=[{value:"docker-compose.yml",id:"docker-composeyml",level:3}];function i(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ollama",children:"ollama"})}),"\n",(0,t.jsx)(n.h3,{id:"docker-composeyml",children:(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/ollama/ollama",children:"docker-compose.yml"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/ollama/ollama",children:"Github"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"version: '3.9'\nservices:\n\n    ollama:\n        image: ollama/ollama\n        container_name: ollama\n        environment:\n            - OLLAMA_ORIGINS=*\n        ports:\n            - '11434:11434'\n        volumes:\n            - './data/ollama:/root/.ollama'\n\n    fmaclen:\n        image: 'ghcr.io/fmaclen/hollama:latest'\n        ports:\n            - '4173:4173'\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(6540);const a={},l=t.createContext(a);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);