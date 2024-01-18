"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1816],{62410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var r=t(85893),s=t(11151);const o={},c="wxedge",d={id:"wxedge",title:"wxedge",description:"host \u6a21\u5f0f",source:"@site/notes/docker/wxedge.md",sourceDirName:".",slug:"/wxedge",permalink:"/notes/docker/wxedge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"shiori \u4e66\u7b7e\u7ba1\u7406\u5668",permalink:"/notes/docker/shiori"}},a={},i=[{value:"host \u6a21\u5f0f",id:"host-\u6a21\u5f0f",level:2},{value:"\u6df7\u6742\u6a21\u5f0f\u5b9e\u4f8b",id:"\u6df7\u6742\u6a21\u5f0f\u5b9e\u4f8b",level:2},{value:"\u7ed1\u5b9a",id:"\u7ed1\u5b9a",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"wxedge",children:"wxedge"}),"\n",(0,r.jsx)(n.h2,{id:"host-\u6a21\u5f0f",children:"host \u6a21\u5f0f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"docker run -d --name=wxedge --restart=always --privileged --net=host -v /dockers/data:/storage:rw  registry.hub.docker.com/onething1/wxedge\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6df7\u6742\u6a21\u5f0f\u5b9e\u4f8b",children:"\u6df7\u6742\u6a21\u5f0f\u5b9e\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sudo ip link set wlp2s0 promisc on\ndocker network create -d macvlan --subnet=192.168.32.0/24 --gateway=192.168.32.1 -o parent=wlp2s0 macvlandocker\ndocker run -d --name=wxedge --restart=always --privileged --net=macvlandocker --ip=192.168.32.46 -p 192.168.32.46:18888:18888 -v /dockers/data:/storage:rw  registry.hub.docker.com/onething1/wxedge\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7ed1\u5b9a",children:"\u7ed1\u5b9a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6253\u5f00 ip:18888, APP \u626b\u7801"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var r=t(67294);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);