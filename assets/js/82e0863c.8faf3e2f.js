"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[266],{2009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(6070),r=n(5296);const i={sidebar_position:1},o="k8s",a={id:"k8s",title:"k8s",description:"install",source:"@site/notes/docker/k8s.md",sourceDirName:".",slug:"/k8s",permalink:"/notes/docker/k8s",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/notes/docker/"},next:{title:"caddy",permalink:"/notes/docker/caddy"}},c={},l=[{value:"install",id:"install",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"k8s",children:"k8s"})}),"\n",(0,s.jsx)(t.h2,{id:"install",children:"install"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'brew install kubectl\nbrew install minikube\n# https://github.com/kubernetes/minikube/releases\n\ndocker pull kicbase/stable:v0.0.44\n# tag list: https://hub.docker.com/r/kicbase/stable/tags\nminikube start --base-image="kicbase/stable:v0.0.44"\n\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5296:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(758);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);