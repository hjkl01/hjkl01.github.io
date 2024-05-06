"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[1317],{3246:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=s(85893),a=s(11151);const r={},o="samba nfs",i={id:"samba",title:"samba nfs",description:"samba",source:"@site/notes/docker/samba.md",sourceDirName:".",slug:"/samba",permalink:"/notes/docker/samba",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"redis",permalink:"/notes/docker/redis"},next:{title:"shiori \u4e66\u7b7e\u7ba1\u7406\u5668",permalink:"/notes/docker/shiori"}},c={},l=[{value:"samba",id:"samba",level:2},{value:"nfs",id:"nfs",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"samba-nfs",children:"samba nfs"}),"\n",(0,t.jsx)(e.h2,{id:"samba",children:"samba"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:'version: "3.4"\n\nservices:\n  samba:\n    image: dperson/samba\n    environment:\n      TZ: "EST5EDT"\n    ports:\n      - "139:139/tcp"\n      - "445:445/tcp"\n    read_only: false\n    restart: unless-stopped\n    volumes:\n      - ./data:/mnt:z\n      - ./data:/mnt:ro\n    command: \'-s "Volume;/mnt;yes;no;no;foo" -u "foo;bar" -p\'\n           # "<name;/path>[;browse;readonly;guest;users;admins;writelist;comment]"\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})}),"\n",(0,t.jsx)(e.h2,{id:"nfs",children:"nfs"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:'version: "2.1"\nservices:\n  # https://hub.docker.com/r/itsthenetwork/nfs-server-alpine\n  nfs:\n    image: itsthenetwork/nfs-server-alpine:12\n    container_name: nfs\n    restart: unless-stopped\n    privileged: true\n    environment:\n      - SHARED_DIRECTORY=/data\n    volumes:\n      - ./data/jellyfin/movies:/data\n    ports:\n      - 2049:2049\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})})]})}function m(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>i,a:()=>o});var t=s(67294);const a={},r=t.createContext(a);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);