"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[391],{19865:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>O,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=o(85893),r=o(11151);const s={},a="mongoDB",i={id:"mongo",title:"mongoDB",description:"export && restore",source:"@site/notes/docker/mongo.md",sourceDirName:".",slug:"/mongo",permalink:"/notes/docker/mongo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"meetings",permalink:"/notes/docker/meetings"},next:{title:"movies",permalink:"/notes/docker/movies"}},c={},d=[{value:"export &amp;&amp; restore",id:"export--restore",level:2}];function m(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"mongodb",children:"mongoDB"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"# .env\nMONGO_ROOT_USER=username\nMONGO_ROOT_PASSWORD=password\nMONGODB_URL=mongodb://username:password@mongo:27017\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:'version: "3.1"\n\nservices:\n  mongo:\n    image: mongo\n    restart: always\n    ports:\n      - 27017:27017\n    environment:\n      - MONGO_INITDB_ROOT_USERNAME=${MONGO_ROOT_USER}\n      - MONGO_INITDB_ROOT_PASSWORD=${MONGO_ROOT_PASSWORD}\n    volumes:\n      - ./data/mongo:/data/db\n\n  mongo-express:\n    image: mongo-express\n    restart: always\n    ports:\n      - 8081:8081\n    links:\n      - mongo\n    environment:\n      - ME_CONFIG_MONGODB_URL=${MONGODB_URL}\n      - ME_CONFIG_BASICAUTH_USERNAME=${MONGO_ROOT_USER}\n      - ME_CONFIG_BASICAUTH_PASSWORD=${MONGO_ROOT_PASSWORD}\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})}),"\n",(0,t.jsx)(e.h2,{id:"export--restore",children:"export && restore"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"yay --noconfirm -S mongodb-tools-bin\n\nUSER=''\nPASSWD=''\nHOST='192.168.32.6'\nPORT='27017'\n\necho $(date +%s)\necho $(date +%c)\necho $(date +%Y%m%d_%H%M%S)\nFILENAME=sql/${HOST}_$(date +%Y%m%d_%H%M%S).json\n\nmongodump --uri=mongodb://${USER}:${PASSWD}@${HOST}:${PORT}/ --authenticationDatabase=admin -o ${FILENAME}\n# mongorestore --uri=mongodb://${USER}:${PASSWD}@${HOST}:${PORT}/ --authenticationDatabase=admin --dir ${FILENAME}\n"})})]})}function O(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(m,{...n})}):m(n)}},11151:(n,e,o)=>{o.d(e,{Z:()=>i,a:()=>a});var t=o(67294);const r={},s=t.createContext(r);function a(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);