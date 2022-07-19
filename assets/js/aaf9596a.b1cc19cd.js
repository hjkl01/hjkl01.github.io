"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9578],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=p,y=m["".concat(a,".").concat(f)]||m[f]||u[f]||i;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),p=(t(7294),t(3905));const i={},o="pip",l={unversionedId:"pip",id:"pip",title:"pip",description:"virtualenv",source:"@site/notes/python/pip.md",sourceDirName:".",slug:"/pip",permalink:"/notes/python/pip",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ocr",permalink:"/notes/python/ocr"},next:{title:"settings.py",permalink:"/notes/python/settings"}},a={},c=[{value:"virtualenv",id:"virtualenv",level:2},{value:"pipenv",id:"pipenv",level:2},{value:"pip.conf",id:"pipconf",level:2}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"pip"},"pip"),(0,p.kt)("h2",{id:"virtualenv"},"virtualenv"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"(sudo) pip install virtualenv\nvirtualenv -p /usr/bin/python3.7 ~/.virtualenv/py3\n# pip freeze > requirements.txt\n")),(0,p.kt)("h2",{id:"pipenv"},"pipenv"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"alias pv='pipenv run python'\nalias pi='pipenv run pip install '\n")),(0,p.kt)("h2",{id:"pipconf"},"pip.conf"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e00\u6b21\npip install web.py -i http://pypi.douban.com/simple --trusted-host pypi.douban.com\n# \u5168\u5c40\n\n# \u6e05\u534e\u6e90\npip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple\n# \u963f\u91cc\u6e90\npip config set global.index-url https://mirrors.aliyun.com/pypi/simple/\n# \u817e\u8baf\u6e90\npip config set global.index-url http://mirrors.cloud.tencent.com/pypi/simple\n# \u8c46\u74e3\u6e90\npip config set global.index-url http://pypi.douban.com/simple/\n\n# or\n\n# linux:`~/.pip/pip.conf`\n# windows:`%HOMEPATH%\\pip\\pip.ini\uff09`\n\n[global]\n  index-url = http://mirrors.aliyun.com/pypi/simple/\n[install]\n  trusted-host=mirrors.aliyun.com\n\n# locale.Error: unsupported locale setting\nexport LC_ALL=C\n")))}u.isMDXComponent=!0}}]);