"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[1228],{1642:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=o(4848),r=o(8453);const a={},c="openwrt",s={id:"openwrt",title:"openwrt",description:"command",source:"@site/notes/docker/openwrt.md",sourceDirName:".",slug:"/openwrt",permalink:"/notes/docker/openwrt",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nocodb",permalink:"/notes/docker/nocodb"},next:{title:"postgresql",permalink:"/notes/docker/postgresql"}},i={},p=[{value:"command",id:"command",level:2},{value:"docker-compose",id:"docker-compose",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"openwrt",children:"openwrt"})}),"\n",(0,t.jsx)(e.h2,{id:"command",children:(0,t.jsx)(e.a,{href:"https://mlapp.cn/376.html",children:"command"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"# command\nsudo ip link set enp3s0 promisc on\ndocker network create -d macvlan --subnet=192.168.50.0/24 --gateway=192.168.50.1 -o parent=enp3s0 macnet\ndocker run --restart always --name openwrt -d --network macnet --privileged registry.cn-shanghai.aliyuncs.com/suling/openwrt:x86_64 /sbin/init\ndocker exec -it openwrt zsh\n\nvim /etc/config/network\n\nconfig interface 'lan'\n    option type 'bridge'\n    option ifname 'eth0'\n    option proto 'static'\n    option ipaddr '192.168.50.18'\n    option netmask '255.255.255.0'\n    option ip6assign '60'\n    option gateway '192.168.50.1'\n    option broadcast '192.168.50.255'\n    option dns '192.168.50.1'\n\n/etc/init.d/network restart\n"})}),"\n",(0,t.jsx)(e.h2,{id:"docker-compose",children:(0,t.jsx)(e.a,{href:"https://github.com/crazygit/family-media-center/blob/master/docker-compose.openwrt.yml",children:"docker-compose"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:'# \u53c2\u8003: https://docs.docker.com/network/macvlan/\n\n# \u865a\u62df\u7f51\u5361\u6280\u672f: \u53ef\u4ee5\u9009\u62e9macvlan\u6a21\u5f0f\uff0c\u4e5f\u53ef\u4ee5ipvlan\u6a21\u5f0f\n\n# \u6ce8\u610f: \u5982\u679c\u5bbf\u4e3b\u673a\u91c7\u7528\u7684\u662fWIFI\u8fde\u63a5\u7f51\u7edc\uff0c\u5219\u4f7f\u7528ipvlan\u6a21\u5f0f\uff0cmacvlan\u6a21\u5f0f\u9002\u5408\u5bbf\u4e3b\u673a\u4e3a\u6709\u7ebf\u8fde\u63a5\u7f51\u7edc\u7684\u60c5\u51b5\n\n# \u624b\u52a8\u521b\u5efa\u7f51\u7edc\u547d\u4ee4\n\n# ipvlan, parent\u4e3a\u5bbf\u4e3b\u673a\u7f51\u5361\n# docker network create -d ipvlan --subnet=192.168.2.1/24 --gateway=192.168.2.1 -o parent=enp3s0 -o ipvlan_mode=l2 ipvlan\n\n# macvlan, parent\u4e3a\u5bbf\u4e3b\u673a\u7f51\u5361\n# docker network create -d macvlan --subnet=192.168.2.1/24 --gateway=192.168.2.1 -o parent=enp3s0 macvlan\n\n# \u4f7f\u7528docker-compose\u521b\u5efa\u7f51\u7edc\u65f6\uff0cdocker-compose V3\u7248\u672c\u914d\u7f6e\u65f6\u4e0d\u652f\u6301\u8bbe\u7f6e\u7f51\u5173,\u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u4f7f\u7528version2.4\u7684\u7248\u672c\n# https://docs.docker.com/compose/compose-file/\n\n# Additional IPAM configurations, such as gateway, are only honored for version 2 at the moment.\n\nversion: "3.7"\n\nservices:\n  openwrt:\n    image: crazygit/lean-openwrt-x86-64\n    restart: always\n    privileged: true\n    volumes:\n      - ./openwrt/etc/config/network:/etc/config/network\n      - ./openwrt/etc/config/dhcp:/etc/config/dhcp\n      - ./openwrt/etc/rc.local:/etc/rc.local\n    networks:\n      - macvlan\n      #- ipvlan\n\nnetworks:\n  macvlan:\n    driver: macvlan\n    driver_opts:\n      # \u5bbf\u4e3b\u673a\u7f51\u5361\n      parent: enp3s0\n    ipam:\n      config:\n        - subnet: 192.168.2.0/24\n          #gateway: 192.168.2.1\n  #ipvlan:\n  #  driver: ipvlan\n  #  driver_opts:\n  #    ipvlan_mode: l2\n  #    # \u5bbf\u4e3b\u673a\u7f51\u5361\n  #    parent: enp3s0\n  #  ipam:\n  #    config:\n  #      - subnet: 192.168.2.0/24\n  #        #gateway: 192.168.2.1\n'})})]})}function l(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>s});var t=o(6540);const r={},a=t.createContext(r);function c(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);