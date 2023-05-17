"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||u;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<u;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const u={},o="ubuntu(old)",s={unversionedId:"ubuntu",id:"ubuntu",title:"ubuntu(old)",description:"\u66f4\u6362\u6e90",source:"@site/notes/linux/ubuntu.md",sourceDirName:".",slug:"/ubuntu",permalink:"/notes/linux/ubuntu",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"supervisor",permalink:"/notes/linux/supervisor"},next:{title:"\u5c0f\u7c73\u5237\u673a",permalink:"/notes/linux/\u5237\u673a"}},l={},i=[{value:"\u66f4\u6362\u6e90",id:"\u66f4\u6362\u6e90",level:2},{value:"\u4e2d\u6587\u4e71\u7801",id:"\u4e2d\u6587\u4e71\u7801",level:2},{value:"\u914d\u7f6e\u9759\u6001 IP",id:"\u914d\u7f6e\u9759\u6001-ip",level:2},{value:"ip route",id:"ip-route",level:2},{value:"\u5b89\u88c5 Ubuntu \u5206\u533a",id:"\u5b89\u88c5-ubuntu-\u5206\u533a",level:2},{value:"\u624b\u52a8\u914d\u7f6e swap \u5185\u5b58",id:"\u624b\u52a8\u914d\u7f6e-swap-\u5185\u5b58",level:2}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ubuntuold"},"ubuntu(old)"),(0,a.kt)("h2",{id:"\u66f4\u6362\u6e90"},"\u66f4\u6362\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#\u4e2d\u56fd\u79d1\u6280\u5927\u5b66\nsudo sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list\n#\u7f51\u6613\u4e91163\nsudo sed -i 's/deb.debian.org/mirrors.163.com/g' /etc/apt/sources.list\n#\u963f\u91cc\u4e91\nsudo sed -i 's/deb.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list\n#\u6e05\u534e\u540c\u65b9\nsudo sed -i 's/deb.debian.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list\n")),(0,a.kt)("h2",{id:"\u4e2d\u6587\u4e71\u7801"},"\u4e2d\u6587\u4e71\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get -y install language-pack-zh-hans\n\n#\u5199\u5165 ~/.zshrc:\nLC_ALL=zh_CN.utf8\nexport LC_ALL\n\nsource ~/.zshrc\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9759\u6001-ip"},"\u914d\u7f6e\u9759\u6001 IP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"path: `/etc/network/interface`\n\nauto eth1\niface eth1 inet static\naddress 192.168.56.xx\nnetmask 255.255.255.0\nnetwork 192.168.56.0\nbroadcast 192.168.56.255\n\nif possible, \u914d\u7f6e\u8def\u7531\u5668\u4e2d\u7684dhcp.\n")),(0,a.kt)("h2",{id:"ip-route"},"ip route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo route add -net 66.1.254.0/24 gw 66.16.62.254 enp4s0\nsudo ip addr flush dev enp4s0\n")),(0,a.kt)("h2",{id:"\u5b89\u88c5-ubuntu-\u5206\u533a"},"\u5b89\u88c5 Ubuntu \u5206\u533a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"efi\nswap    \u4ea4\u6362\u7a7a\u95f4\n/ ext4\n/boot   200M\u5de6\u53f3  ext4\n/tmp    5G\u5de6\u53f3    ext4\n")),(0,a.kt)("h2",{id:"\u624b\u52a8\u914d\u7f6e-swap-\u5185\u5b58"},"\u624b\u52a8\u914d\u7f6e swap \u5185\u5b58"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\nsudo fallocate -l 4G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\n\nsudo vim /etc/fstab\n/swapfile none swap sw 0 0\n")))}p.isMDXComponent=!0}}]);