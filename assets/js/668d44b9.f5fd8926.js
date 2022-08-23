"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[7815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:8},l="mysql",s={unversionedId:"mysql",id:"mysql",title:"mysql",description:"docker-compose.yml",source:"@site/notes/docker/mysql.md",sourceDirName:".",slug:"/mysql",permalink:"/notes/docker/mysql",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"postgresql",permalink:"/notes/docker/postgresql"},next:{title:"redis",permalink:"/notes/docker/redis"}},c={},i=[{value:"docker-compose.yml",id:"docker-composeyml",level:2},{value:"linux\u914d\u7f6e",id:"linux\u914d\u7f6e",level:3},{value:"others",id:"others",level:3}],u={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql"},"mysql"),(0,a.kt)("h2",{id:"docker-composeyml"},"docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.1'\n\nservices:\n  db:\n    # We use a mariadb image which supports both amd64 & arm64 architecture\n    image: mariadb:10.6.4-focal\n    # If you really want to use MySQL, uncomment the following line\n    #image: mysql:8.0.27\n    command: '--default-authentication-plugin=mysql_native_password'\n    volumes:\n      - ./data/mysql:/var/lib/mysql\n    restart: always\n    environment:\n      - MYSQL_ROOT_PASSWORD=password\n      - MYSQL_DATABASE=data\n      - MYSQL_USER=user\n      - MYSQL_PASSWORD=password\n      - MYSQL_ROOT_HOST=%\n    ports:\n      - 3306:3306\n")),(0,a.kt)("h3",{id:"linux\u914d\u7f6e"},"linux\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/etc/mysql/my.cnf:\n\n[client]\ndefault-character-set = utf8\n\n[mysqld]\ndefault-storage-engine = INNODB\ncharacter-set-server = utf8\ncollation-server = utf8_general_ci\n")),(0,a.kt)("h3",{id:"others"},"others"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"protected-mode yes\n\nmysqldump -u root -p --all-databases > data.txt\nsource data.txt\n\ncreate database testdb default charset utf8 COLLATE utf8_general_ci;\n\nhttp://docs.peewee-orm.com/en/latest/peewee/playhouse.html#pwiz-a-model-generator\n")))}p.isMDXComponent=!0}}]);