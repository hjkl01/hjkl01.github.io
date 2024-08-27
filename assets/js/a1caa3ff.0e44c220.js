"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[6513],{8034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(4848),s=t(8453);const a={},o="music",i={id:"music",title:"music",description:"mStream",source:"@site/notes/docker/music.md",sourceDirName:".",slug:"/music",permalink:"/notes/docker/music",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"movies",permalink:"/notes/docker/movies"},next:{title:"mysql",permalink:"/notes/docker/mysql"}},m={},c=[{value:"mStream",id:"mstream",level:2},{value:"Navidrome",id:"navidrome",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"music",children:"music"})}),"\n",(0,r.jsx)(n.h2,{id:"mstream",children:(0,r.jsx)(n.a,{href:"https://github.com/IrosTheBeggar/mStream",children:"mStream"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'---\nversion: "2.1"\nservices:\n  mstream:\n    image: lscr.io/linuxserver/mstream:latest\n    container_name: mstream\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Asia/Shanghai\n    volumes:\n      - ./data/mstream/config:/config\n      - ./data/mstream/music:/music\n    ports:\n      - 127.0.0.1:3000:3000\n    restart: unless-stopped\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})}),"\n",(0,r.jsx)(n.h2,{id:"navidrome",children:"Navidrome"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3"\nservices:\n  navidrome:\n    container_name: navidrome\n    image: deluan/navidrome:latest\n    user: 0:0 #0:0\u4ee3\u8868\u7528root\u7528\u6237\u8fd0\u884c\n    ports:\n      - "127.0.0.1:4533:4533"\n    restart: unless-stopped\n    environment:\n      # Optional: put your config options customization here. Examples:\n      ND_SCANSCHEDULE: 1h\n      ND_LOGLEVEL: info\n      ND_SESSIONTIMEOUT: 24h\n      ND_BASEURL: ""\n      ND_ENABLETRANSCODINGCONFIG: "true"\n      ND_TRANSCODINGCACHESIZE: "4000M"\n      ND_IMAGECACHESIZE: "1000M"\n    volumes:\n      - "./data/navidrome/data:/data"\n      - "./data/mstream/music:/music"\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);