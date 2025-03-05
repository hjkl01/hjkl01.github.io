"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[2759],{8095:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=s(4848),l=s(8453);const r={},u="ubuntu(old)",i={id:"ubuntu",title:"ubuntu(old)",description:"\u66f4\u6362\u6e90",source:"@site/notes/linux/ubuntu.md",sourceDirName:".",slug:"/ubuntu",permalink:"/notes/linux/ubuntu",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"systemctl",permalink:"/notes/linux/systemctl"},next:{title:"\u5c0f\u7c73\u5237\u673a",permalink:"/notes/linux/\u5237\u673a"}},a={},o=[{value:"\u66f4\u6362\u6e90",id:"\u66f4\u6362\u6e90",level:2},{value:"\u4e2d\u6587\u4e71\u7801",id:"\u4e2d\u6587\u4e71\u7801",level:2},{value:"\u914d\u7f6e\u9759\u6001 IP",id:"\u914d\u7f6e\u9759\u6001-ip",level:2},{value:"ip route",id:"ip-route",level:2},{value:"\u5b89\u88c5 Ubuntu \u5206\u533a",id:"\u5b89\u88c5-ubuntu-\u5206\u533a",level:2},{value:"\u624b\u52a8\u914d\u7f6e swap \u5185\u5b58",id:"\u624b\u52a8\u914d\u7f6e-swap-\u5185\u5b58",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ubuntuold",children:"ubuntu(old)"})}),"\n",(0,t.jsx)(n.h2,{id:"\u66f4\u6362\u6e90",children:"\u66f4\u6362\u6e90"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"#\u4e2d\u56fd\u79d1\u6280\u5927\u5b66\nsudo sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list\n#\u7f51\u6613\u4e91163\nsudo sed -i 's/deb.debian.org/mirrors.163.com/g' /etc/apt/sources.list\n#\u963f\u91cc\u4e91\nsudo sed -i 's/deb.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list\n#\u6e05\u534e\u540c\u65b9\nsudo sed -i 's/deb.debian.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e2d\u6587\u4e71\u7801",children:"\u4e2d\u6587\u4e71\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt-get -y install language-pack-zh-hans\n\n#\u5199\u5165 ~/.zshrc:\nLC_ALL=zh_CN.utf8\nexport LC_ALL\n\nsource ~/.zshrc\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u914d\u7f6e\u9759\u6001-ip",children:"\u914d\u7f6e\u9759\u6001 IP"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"path: `/etc/network/interface`\n\nauto eth1\niface eth1 inet static\naddress 192.168.56.xx\nnetmask 255.255.255.0\nnetwork 192.168.56.0\nbroadcast 192.168.56.255\n\nif possible, \u914d\u7f6e\u8def\u7531\u5668\u4e2d\u7684dhcp.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ip-route",children:"ip route"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo route add -net 66.1.254.0/24 gw 66.16.62.254 enp4s0\nsudo ip addr flush dev enp4s0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5-ubuntu-\u5206\u533a",children:"\u5b89\u88c5 Ubuntu \u5206\u533a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"efi\nswap\t\u4ea4\u6362\u7a7a\u95f4\n/ ext4\n/boot\t200M\u5de6\u53f3\text4\n/tmp\t5G\u5de6\u53f3\text4\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u624b\u52a8\u914d\u7f6e-swap-\u5185\u5b58",children:"\u624b\u52a8\u914d\u7f6e swap \u5185\u5b58"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\nsudo fallocate -l 4G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\n\nsudo vim /etc/fstab\n/swapfile none swap sw 0 0\n"})})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>u,x:()=>i});var t=s(6540);const l={},r=t.createContext(l);function u(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:u(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);