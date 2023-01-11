"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9394],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},s="gitea gops",i={unversionedId:"gitea",id:"gitea",title:"gitea gops",description:"gitea",source:"@site/notes/docker/gitea.md",sourceDirName:".",slug:"/gitea",permalink:"/notes/docker/gitea",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ddns",permalink:"/notes/docker/ddns"},next:{title:"API tool: httpbin hoppscotch",permalink:"/notes/docker/hoppscotch"}},p={},l=[{value:"gitea",id:"gitea",level:2},{value:"gops",id:"gops",level:2}],c={toc:l};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitea-gops"},"gitea gops"),(0,a.kt)("h2",{id:"gitea"},"gitea"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# web\u7ba1\u7406\u754c\u9762\u91cc \u9ed8\u8ba4\u7aef\u53e33000\u548c22\u4e0d\u8981\u6539\n# example: ssh://git@git.hjkl01.cn:58001/user/project.git\n\nversion: "3"\n\nnetworks:\n  gitea:\n    external: false\n\nservices:\n  server:\n    image: gitea/gitea:1.15.4\n    container_name: gitea\n    environment:\n      - USER_UID=1000\n      - USER_GID=1000\n      - DB_TYPE=postgres\n      - DB_HOST=db:5432\n      - DB_NAME=gitea\n      - DB_USER=username\n      - DB_PASSWD=password\n    restart: always\n    networks:\n      - gitea\n    volumes:\n      - ./data/gitea/data:/data\n    ports:\n      - "58000:3000"\n      - "58001:22"\n    depends_on:\n      - db\n\n  db:\n    image: postgres:13-alpine\n    restart: always\n    environment:\n      - POSTGRES_USER=username\n      - POSTGRES_PASSWORD=password\n      - POSTGRES_DB=gitea\n    networks:\n      - gitea\n    volumes:\n      - ./data/gitea/postgres:/var/lib/postgresql/data\n')),(0,a.kt)("h2",{id:"gops"},"gops"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  db:\n    image: postgres:11-alpine\n    restart: unless-stopped\n    environment:\n      POSTGRES_USER: "gogs"\n      POSTGRES_PASSWORD: "gogs"\n      POSTGRES_DB: "postgres"\n    ports:\n      - "5432:5432"\n    networks:\n      - gogs_net\n    volumes:\n      - ./data/postgres_data:/var/lib/postgresql/data\n\n  gogs:\n    image: gogs/gogs:latest\n    networks:\n      - gogs_net\n    depends_on:\n      - db\n    links:\n      - db\n    ports:\n      - "10022:22"\n      - "10080:3000"\n    restart: unless-stopped\n    volumes:\n      - ./data/gogs_data:/data:rw\n\nnetworks:\n  gogs_net:\n    driver: bridge\n')))}g.isMDXComponent=!0}}]);