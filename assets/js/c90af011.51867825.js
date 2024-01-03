"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[6924],{7485:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(5893),s=t(1151);const r={},c="nocodb",a={id:"nocodb",title:"nocodb",description:"",source:"@site/notes/docker/nocodb.md",sourceDirName:".",slug:"/nocodb",permalink:"/notes/docker/nocodb",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nginx-proxy-manager",permalink:"/notes/docker/nginx"},next:{title:"openwrt",permalink:"/notes/docker/openwrt"}},i={},d=[];function p(n){const e={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"nocodb",children:"nocodb"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:'version: "3.3"\n\nservices:\n  root_db:\n    image: postgres:13-alpine\n    restart: unless-stopped\n    ports:\n      - 5432:5432\n    command: postgres -c \'max_connections=500\'\n    environment:\n      POSTGRES_PASSWORD: "passwd"\n      POSTGRES_USER: "username"\n      POSTGRES_DB: "postgres"\n      PGDATA: "/var/lib/postgresql/data"\n    healthcheck:\n      test: pg_isready -U "$$POSTGRES_USER" -d "$$POSTGRES_DB"\n      interval: 10s\n      timeout: 2s\n      retries: 10\n    volumes:\n      - ./data/nocodb_pg:/var/lib/postgresql/data\n\n  nocodb:\n    depends_on:\n      root_db:\n        condition: service_healthy\n    image: nocodb/nocodb:latest\n    ports:\n      - "8080:8080"\n      - "8081:8081"\n      - "8082:8082"\n      - "8083:8083"\n    restart: always\n    environment:\n      NC_DB: "pg://root_db:5432?u=username&p=passwd&d=postgres"\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})})]})}function l(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>c});var o=t(7294);const s={},r=o.createContext(s);function c(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);