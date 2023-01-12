"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[3079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=s,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const o={},a="prest",p={unversionedId:"prest",id:"prest",title:"prest",description:"",source:"@site/notes/docker/prest.md",sourceDirName:".",slug:"/prest",permalink:"/notes/docker/prest",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"postgresql",permalink:"/notes/docker/postgresql"},next:{title:"redis",permalink:"/notes/docker/redis"}},i={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"prest"},"prest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# https://github.com/prest/prest#test-using-docker\nversion: "3"\nservices:\n  postgres:\n    image: postgres\n    volumes:\n      - "./data/postgres:/var/lib/postgresql/data"\n    environment:\n      - POSTGRES_USER=prest\n      - POSTGRES_DB=prest\n      - POSTGRES_PASSWORD=prest\n    ports:\n      - "5432:5432"\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready", "-U", "prest"]\n      interval: 30s\n      retries: 3\n  prest:\n    # use latest build - analyze the risk of using this version in production\n    image: prest/prest\n    links:\n      - "postgres:postgres"\n    environment:\n      - PREST_DEBUG=false\n      - PREST_AUTH_ENABLED=true\n      - PREST_PG_HOST=postgres\n      - PREST_PG_USER=prest\n      - PREST_PG_PASS=prest\n      - PREST_PG_DATABASE=prest\n      - PREST_PG_PORT=5432\n      - PREST_SSL_MODE=disable\n    depends_on:\n      postgres:\n        condition: service_healthy\n    ports:\n      - "3000:3000"\n')))}u.isMDXComponent=!0}}]);