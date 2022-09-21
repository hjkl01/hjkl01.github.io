"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[3290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:6},a="proxy",l={unversionedId:"proxy",id:"proxy",title:"proxy",description:"clash yacd",source:"@site/notes/linux/proxy.md",sourceDirName:".",slug:"/proxy",permalink:"/notes/linux/proxy",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"neovim lua",permalink:"/notes/linux/neovim_lua"},next:{title:"ubuntu(old)",permalink:"/notes/linux/ubuntu"}},c={},i=[{value:"clash yacd",id:"clash-yacd",level:2},{value:"trojan-go",id:"trojan-go",level:2},{value:"glider",id:"glider",level:2},{value:"trojan",id:"trojan",level:2},{value:"socks5 \u8f6c http",id:"socks5-\u8f6c-http",level:2},{value:"privoxy \u914d\u7f6e",id:"privoxy-\u914d\u7f6e",level:2},{value:"server:",id:"server",level:2},{value:"\u5f00\u542fbbr",id:"\u5f00\u542fbbr",level:4},{value:"client",id:"client",level:2},{value:"ubuntu\u4e0b\u4f7f\u7528\uff0c Mac\u4e0b\u8f7d https://github.com/shadowsocks/ShadowsocksX-NG/releases/",id:"ubuntu\u4e0b\u4f7f\u7528-mac\u4e0b\u8f7d-httpsgithubcomshadowsocksshadowsocksx-ngreleases",level:4}],p={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"proxy"},"proxy"),(0,o.kt)("h2",{id:"clash-yacd"},"clash yacd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.8"\n\nservices:\n  yacd:\n    container_name: yacd\n    image: haishanh/yacd\n    ports:\n      - 127.0.0.1:1234:80\n    restart: unless-stopped\n')),(0,o.kt)("h2",{id:"trojan-go"},"trojan-go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install trojan-go\n\n# \u4fee\u6539 /usr/local/etc/trojan-go/config.json\n\nbrew service start trojan-go\n")),(0,o.kt)("h2",{id:"glider"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/nadoo/glider/blob/master/config/glider.conf.example"},"glider")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yay -S glider\n\nglider -listen :1080 -forward trojan://password@ip:443\n\n# with auth\nglider -listen user:user_passwd@:61000 -forward trojan://password@ip:443\n\n# or glider.conf\nlisten=:1080\nforward=trojan://password@ip:443\n")),(0,o.kt)("h2",{id:"trojan"},"trojan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"https://github.com/trojan-gfw/trojan\n# \u673a\u573a\u63a8\u8350: https://portal.shadowsocks.nz/aff.php?aff=24252\n\n# \u90e8\u7f72 https://github.com/Jrohy/trojan\n")),(0,o.kt)("h2",{id:"socks5-\u8f6c-http"},"socks5 \u8f6c http"),(0,o.kt)("h2",{id:"privoxy-\u914d\u7f6e"},"privoxy \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yay -S privoxy\n\ncd /etc/privoxy\n\n(sudo) mv config config.bak\n(sudo) vi config\n\nforward-socks5t / 127.0.0.1:1080 .\nlisten-address 127.0.0.1:9888\n\nsudo systemctl restart privoxy.service\nsudo systemctl enable privoxy.service\n")),(0,o.kt)("h1",{id:"\u65e7"},"\u65e7"),(0,o.kt)("h2",{id:"server"},"server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'install libsodium\npip install shadowsocks\npip install https://github.com/shadowsocks/shadowsocks/archive/master.zip -U\n\n# path : /etc/shadowsocks.json\n{\n    "server":"0.0.0.0",\n    "port_password": {\n        "8000": "password"\n    },\n    "timeout":300,\n    "method":"chacha20-ietf-poly1305",\n    "fast_open":true,\n    "pid-file": "/path/ss.pid",\n    "log-file": "/path/ss.log"\n}\n\n(sudo) ssserver -c /etc/shadowsocks.json -d start\nsudo ssserver -d stop\n\nhttps://github.com/shadowsocks/shadowsocks/wiki/Shadowsocks-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E\n')),(0,o.kt)("h4",{id:"\u5f00\u542fbbr"},"\u5f00\u542fbbr"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh\n\nchmod +x bbr.sh\n\n./bbr.sh\n\nsysctl net.ipv4.tcp_available_congestion_control\n#\u8fd4\u56de\u503c\u4e00\u822c\u4e3a\uff1a\n#net.ipv4.tcp_available_congestion_control = bbr cubic reno\n\nsysctl net.ipv4.tcp_congestion_control\n#\u8fd4\u56de\u503c\u4e00\u822c\u4e3a\uff1a\n#net.ipv4.tcp_congestion_control = bbr\n\nsysctl net.core.default_qdisc\n#\u8fd4\u56de\u503c\u4e00\u822c\u4e3a\uff1a\n#net.core.default_qdisc = fq\n\nlsmod | grep bbr\n#\u8fd4\u56de\u503c\u6709 tcp_bbr \u6a21\u5757\u5373\u8bf4\u660ebbr\u5df2\u542f\u52a8\u3002\n")),(0,o.kt)("h2",{id:"client"},"client"),(0,o.kt)("h4",{id:"ubuntu\u4e0b\u4f7f\u7528-mac\u4e0b\u8f7d-httpsgithubcomshadowsocksshadowsocksx-ngreleases"},"ubuntu\u4e0b\u4f7f\u7528\uff0c Mac\u4e0b\u8f7d ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/shadowsocks/ShadowsocksX-NG/releases/"},"https://github.com/shadowsocks/ShadowsocksX-NG/releases/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'pip install shadowsocks\n\npath : ~/.shadowsocks/shadowsocks.json\n\n{\n  "server":"my_server_ip",\n  "server_port":my_server_port,\n  "password":"my_password",\n  "local_address": "127.0.0.1",\n  "local_port":1080,\n  "timeout":300,\n  "method":"chacha20-ietf-poly1305",\n  "fast_open":true,\n  "pid-file": "/path",\n  "log-file": "/path"\n}\n\nsslocal -c ~/.shadowsocks/shadowsocks.json -d start\n\u53ef\u5148\u5728\u7cfb\u7edf\u8bbe\u7f6e\u91cc\u8bbe\u7f6e\u5168\u5c40\u4ee3\u7406\uff0c\u5728\u6d4f\u89c8\u5668\u91cc\u5b89\u88c5 https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif\n')))}d.isMDXComponent=!0}}]);