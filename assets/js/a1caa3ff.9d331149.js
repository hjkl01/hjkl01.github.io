"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[7075],{4762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var s=t(5893),r=t(1151);const a={},o="music",i={id:"music",title:"music",description:"mStream",source:"@site/notes/docker/music.md",sourceDirName:".",slug:"/music",permalink:"/notes/docker/music",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"movies",permalink:"/notes/docker/movies"},next:{title:"mysql",permalink:"/notes/docker/mysql"}},c={},m=[{value:"mStream",id:"mstream",level:2},{value:"Navidrome",id:"navidrome",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"music",children:"music"}),"\n",(0,s.jsx)(n.h2,{id:"mstream",children:(0,s.jsx)(n.a,{href:"https://github.com/IrosTheBeggar/mStream",children:"mStream"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'---\nversion: "2.1"\nservices:\n  mstream:\n    image: lscr.io/linuxserver/mstream:latest\n    container_name: mstream\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Asia/Shanghai\n    volumes:\n      - ./data/mstream/config:/config\n      - ./data/mstream/music:/music\n    ports:\n      - 127.0.0.1:3000:3000\n    restart: unless-stopped\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})}),"\n",(0,s.jsx)(n.h2,{id:"navidrome",children:"Navidrome"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'version: "3"\nservices:\n  navidrome:\n    container_name: navidrome\n    image: deluan/navidrome:latest\n    user: 0:0 #0:0\u4ee3\u8868\u7528root\u7528\u6237\u8fd0\u884c\n    ports:\n      - "127.0.0.1:4533:4533"\n    restart: unless-stopped\n    environment:\n      # Optional: put your config options customization here. Examples:\n      ND_SCANSCHEDULE: 1h\n      ND_LOGLEVEL: info\n      ND_SESSIONTIMEOUT: 24h\n      ND_BASEURL: ""\n      ND_ENABLETRANSCODINGCONFIG: "true"\n      ND_TRANSCODINGCACHESIZE: "4000M"\n      ND_IMAGECACHESIZE: "1000M"\n    volumes:\n      - "./data/navidrome/data:/data"\n      - "./data/mstream/music:/music"\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(7294);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);