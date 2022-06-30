"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8745],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||i;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3988:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:9},s="supervisor",a={unversionedId:"linux/supervisor",id:"linux/supervisor",title:"supervisor",description:"\u540e\u7f00\u4e3aconf\u6216ini",source:"@site/docs/linux/supervisor.md",sourceDirName:"linux",slug:"/linux/supervisor",permalink:"/docs/linux/supervisor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/supervisor.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"remote desktop",permalink:"/docs/linux/remote_desktop"},next:{title:"nginx",permalink:"/docs/linux/nginx"}},u={},c=[{value:"\u540e\u7f00\u4e3aconf\u6216ini",id:"\u540e\u7f00\u4e3aconf\u6216ini",level:2}],p={toc:c};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supervisor"},"supervisor"),(0,o.kt)("h2",{id:"\u540e\u7f00\u4e3aconf\u6216ini"},"\u540e\u7f00\u4e3aconf\u6216ini"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[program:frp_ssh]\n\ncommand     = /home/user/frp/frpc -c /home/user/frp/config.ini \ndirectory = /home/user/somedir\nuser = user\nautostart = true\nautorestart = true\nstartsecs   = 3\n\nredirect_stderr         = true\nstdout_logfile_maxbytes = 50MB\nstdout_logfile_backups  = 10\nstdout_logfile          = /home/user/frp/log\n")))}l.isMDXComponent=!0}}]);