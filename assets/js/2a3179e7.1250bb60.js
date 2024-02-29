"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9394],{24261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(85893),a=t(11151);const o={},r="gitea gops",i={id:"gitea",title:"gitea gops",description:"gitea",source:"@site/notes/docker/gitea.md",sourceDirName:".",slug:"/gitea",permalink:"/notes/docker/gitea",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dosgame",permalink:"/notes/docker/dosgame"},next:{title:"API tool: httpbin hoppscotch",permalink:"/notes/docker/hoppscotch"}},g={},d=[{value:"gitea",id:"gitea",level:2},{value:"gops",id:"gops",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"gitea-gops",children:"gitea gops"}),"\n",(0,s.jsx)(n.h2,{id:"gitea",children:"gitea"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# web\u7ba1\u7406\u754c\u9762\u91cc \u9ed8\u8ba4\u7aef\u53e33000\u548c22\u4e0d\u8981\u6539\n# example: ssh://git@git.hjkl01.cn:58001/user/project.git\n\nversion: "3"\n\nnetworks:\n  gitea:\n    external: false\n\nservices:\n  server:\n    image: gitea/gitea:1.15.4\n    container_name: gitea\n    environment:\n      - USER_UID=1000\n      - USER_GID=1000\n      - DB_TYPE=postgres\n      - DB_HOST=db:5432\n      - DB_NAME=gitea\n      - DB_USER=username\n      - DB_PASSWD=password\n    restart: always\n    networks:\n      - gitea\n    volumes:\n      - ./data/gitea/data:/data\n    ports:\n      - "58000:3000"\n      - "58001:22"\n    depends_on:\n      - db\n\n  db:\n    image: postgres:13-alpine\n    restart: always\n    environment:\n      - POSTGRES_USER=username\n      - POSTGRES_PASSWORD=password\n      - POSTGRES_DB=gitea\n    networks:\n      - gitea\n    volumes:\n      - ./data/gitea/postgres:/var/lib/postgresql/data\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})}),"\n",(0,s.jsx)(n.h2,{id:"gops",children:"gops"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'version: "3"\nservices:\n  db:\n    image: postgres:11-alpine\n    restart: unless-stopped\n    environment:\n      POSTGRES_USER: "gogs"\n      POSTGRES_PASSWORD: "gogs"\n      POSTGRES_DB: "postgres"\n    ports:\n      - "5432:5432"\n    networks:\n      - gogs_net\n    volumes:\n      - ./data/postgres_data:/var/lib/postgresql/data\n\n  gogs:\n    image: gogs/gogs:latest\n    networks:\n      - gogs_net\n    depends_on:\n      - db\n    links:\n      - db\n    ports:\n      - "10022:22"\n      - "10080:3000"\n    restart: unless-stopped\n    volumes:\n      - ./data/gogs_data:/data:rw\n\nnetworks:\n  gogs_net:\n    driver: bridge\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(67294);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);