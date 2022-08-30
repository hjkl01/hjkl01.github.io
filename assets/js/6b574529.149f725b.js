"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="arch",l={unversionedId:"arch",id:"arch",title:"arch",description:"wiki",source:"@site/notes/linux/arch.md",sourceDirName:".",slug:"/arch",permalink:"/notes/linux/arch",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"git ssh",permalink:"/notes/linux/ssh_git"},next:{title:"asdf",permalink:"/notes/linux/asdf"}},c={},s=[{value:"wiki",id:"wiki",level:2},{value:"\u26a0\ufe0f \u8bbe\u7f6eroot\u7684\u5bc6\u7801",id:"\ufe0f-\u8bbe\u7f6eroot\u7684\u5bc6\u7801",level:3},{value:"\u6e90\u8bbe\u7f6e",id:"\u6e90\u8bbe\u7f6e",level:3},{value:"yay",id:"yay",level:3},{value:"\u4f7f\u7528 ntp",id:"\u4f7f\u7528-ntp",level:3},{value:"utf8",id:"utf8",level:3},{value:"\u6211\u7684\u914d\u7f6e",id:"\u6211\u7684\u914d\u7f6e",level:3},{value:"\u8f93\u5165\u6cd5",id:"\u8f93\u5165\u6cd5",level:3},{value:"pppoe \u62e8\u53f7",id:"pppoe-\u62e8\u53f7",level:3},{value:"find",id:"find",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arch"},"arch"),(0,a.kt)("h2",{id:"wiki"},"wiki"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"link: ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com/drizzt/vps2arch/-/wikis/Tested-VPS-Providers"},"https://gitlab.com/drizzt/vps2arch/-/wikis/Tested-VPS-Providers"))),(0,a.kt)("h3",{id:"\ufe0f-\u8bbe\u7f6eroot\u7684\u5bc6\u7801"},"\u26a0\ufe0f \u8bbe\u7f6eroot\u7684\u5bc6\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# wget https://tinyurl.com/vps2arch \u4e5f\u4f1a\u88ab\u91cd\u5b9a\u5411\u5230\u4ee5\u4e0b url\nwget https://gitlab.com/drizzt/vps2arch/-/raw/master/vps2arch\n\n# \u542f\u52a8\u811a\u672c\nsh ./vps2arch\n\n# \u5f53\u4f60\u4ece\u811a\u672c\u9ed8\u8ba4\u7684\u6e90\u4e0b\u8f7d\u901f\u5ea6\u8f83\u6162\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528 -m \u53c2\u6570\u6307\u5b9a\u6e90\uff0c\u4f8b\u5982\nsudo sh ./vps2arch -m https://mirrors.neusoft.edu.cn/archlinux/\nsync ; reboot -f\n")),(0,a.kt)("h3",{id:"\u6e90\u8bbe\u7f6e"},"\u6e90\u8bbe\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# /etc/pacman.d/mirrorlist\n\n# \u6e05\u534e\u5927\u5b66\nServer = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch\n# \u5357\u4eac\u5927\u5b66\nServer = https://mirror.nju.edu.cn/archlinux/$repo/os/$arch\n# or\nsudo pacman-mirrors -i -c China\n\nsudo pacman -Syy\n")),(0,a.kt)("h3",{id:"yay"},"yay"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pacman -S --needed git base-devel\ngit clone https://aur.archlinux.org/yay-bin.git\ncd yay-bin\nmakepkg -si\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-ntp"},"\u4f7f\u7528 ntp"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pacman -S ntp\ntimedatectl set-ntp true\n# \u8bbe\u7f6e\u65f6\u533a\nln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\nhwclock --systohc\n")),(0,a.kt)("h3",{id:"utf8"},"utf8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u7f16\u8f91 /etc/locale.gen \u53d6\u6d88\u4e00\u4e0b\u884c\u7684\u6ce8\u91ca\uff08\u4f60\u53ef\u80fd\u9700\u8981\u4e00\u4e2a\u7f16\u8f91\u5668\uff0c\u5982 vim\uff0c\u8bf7\u81ea\u884c\u5b89\u88c5\uff09\nen_GB.UTF-8 UTF-8\nzh_CN.UTF-8 UTF-8\n\n# \u6267\u884c locale-gen\n\n# \u521b\u5efa /etc/locale.conf \u5e76\u7f16\u8f91 LANG \u8fd9\u4e00 \u53d8\u91cf\uff0c\u6bd4\u5982\uff1a\n\n# LANG=zh_CN.UTF-8\n")),(0,a.kt)("h3",{id:"\u6211\u7684\u914d\u7f6e"},"\u6211\u7684\u914d\u7f6e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/hjkl01/dotfiles"},"https://github.com/hjkl01/dotfiles"))),(0,a.kt)("h3",{id:"\u8f93\u5165\u6cd5"},"\u8f93\u5165\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sudo pacman -Rs $(pacman -Qsq fcitx)\n\nsudo pacman -S fcitx5 fcitx5-configtool fcitx5-qt fcitx5-gtk fcitx5-chinese-addons\n\nvi ~/.xprofile\n\nexport GTK_IM_MODULE=fcitx\nexport QT_IM_MODULE=fcitx\nexport XMODIFIERS="@im=fcitx"\nfcitx5 &\n')),(0,a.kt)("h3",{id:"pppoe-\u62e8\u53f7"},"pppoe \u62e8\u53f7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yay -S --noconfirm rp-pppoe\n\nifconfig # \u67e5\u770b\u5bf9\u5e94\u7684\u7f51\u5361\nsudo ifconfig \u7f51\u5361 down # \u505c\u6b62\u7f51\u5361\u670d\u52a1\nsudo pppoe-setup # \u8f93\u5165\u5bf9\u5e94\u7684\u7528\u6237\u540d\u5bc6\u7801\u7b49\u4fe1\u606f\nsudo pppoe-start\n\nsudo route delete default\nsudo route add default ppp0 # ppp0\u53ef\u80fd\u662f\u5176\u4ed6\u540d\u5b57 ifconfig\u67e5\u770b\n\nsudo nvim /etc/resolvconf.conf # \u66f4\u65b0name_servers\nsudo resolvconf -u # \u66f4\u65b0DNS\n")),(0,a.kt)("h3",{id:"find"},"find"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# find by name \nfind . -name "*.log"\n\n# delte size < 1k\nfind -size 1k -delete\n')))}u.isMDXComponent=!0}}]);