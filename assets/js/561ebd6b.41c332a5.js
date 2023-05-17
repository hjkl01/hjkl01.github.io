"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[3290],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),i=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=i(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<s;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=t(7462),r=(t(7294),t(3905));const s={},a="proxy",c={unversionedId:"proxy",id:"proxy",title:"proxy",description:"clash yacd",source:"@site/notes/linux/proxy.md",sourceDirName:".",slug:"/proxy",permalink:"/notes/linux/proxy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nodejs",permalink:"/notes/linux/nodejs"},next:{title:"remote desktop",permalink:"/notes/linux/remote_desktop"}},l={},i=[{value:"clash yacd",id:"clash-yacd",level:2},{value:"glider",id:"glider",level:2},{value:"trojan/trojan-go",id:"trojantrojan-go",level:2},{value:"server /etc/trojan/config.json",id:"server-etctrojanconfigjson",level:3},{value:"client config.json",id:"client-configjson",level:3},{value:"socks5 \u8f6c http",id:"socks5-\u8f6c-http",level:2},{value:"privoxy \u914d\u7f6e",id:"privoxy-\u914d\u7f6e",level:2},{value:"server:",id:"server",level:2},{value:"\u5f00\u542f bbr",id:"\u5f00\u542f-bbr",level:4},{value:"client",id:"client",level:2},{value:"ubuntu \u4e0b\u4f7f\u7528\uff0c Mac \u4e0b\u8f7d https://github.com/shadowsocks/ShadowsocksX-NG/releases/",id:"ubuntu-\u4e0b\u4f7f\u7528-mac-\u4e0b\u8f7d-httpsgithubcomshadowsocksshadowsocksx-ngreleases",level:4}],p={toc:i};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"proxy"},"proxy"),(0,r.kt)("h2",{id:"clash-yacd"},"clash yacd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.8"\n\nservices:\n  yacd:\n    container_name: yacd\n    image: haishanh/yacd\n    ports:\n      - 127.0.0.1:1234:80\n    restart: unless-stopped\n')),(0,r.kt)("h2",{id:"glider"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nadoo/glider/blob/master/config/glider.conf.example"},"glider")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yay -S glider\n\nglider -listen :1080 -forward trojan://password@ip:443\n\n# with auth\nglider -listen user:user_passwd@:61000 -forward trojan://password@ip:443\n\n# or glider.conf\nlisten=:1080\nforward=trojan://password@ip:443\n")),(0,r.kt)("h2",{id:"trojantrojan-go"},"trojan/trojan-go"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'https://github.com/trojan-gfw/trojan\n\n# \u673a\u573a\u63a8\u8350: https://portal.shadowsocks.nz/aff.php?aff=24252\n\n# \u90e8\u7f72\u53c2\u8003 https://github.com/Jrohy/trojan\n\nufw allow 80 443 8443\n# \u751f\u6210\u8bc1\u4e66\ncertbot certonly --standalone -d domain.com -v\n# crontab\n15 2 * */2 * certbot renew\n\n# arch \u5f00\u542f bbr\necho "tcp_bbr" > /etc/modules-load.d/modules.conf\n\necho "net.core.default_qdisc=fq" > /etc/sysctl.d/bbr.conf\necho "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.d/bbr.conf\nreboot\n\n# \u9a8c\u8bc1\nsysctl net.ipv4.tcp_congestion_control\n# net.ipv4.tcp_congestion_control = bbr\n')),(0,r.kt)("h3",{id:"server-etctrojanconfigjson"},"server /etc/trojan/config.json"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/p4gefau1t/trojan-go/releases"},"https://github.com/p4gefau1t/trojan-go/releases"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "run_type": "server",\n  "local_addr": "0.0.0.0",\n  "local_port": 8443,\n  "remote_addr": "github.com",\n  "remote_port": 80,\n  "password": ["domain.com"],\n  "ssl": {\n    "cert": "/var/lib/caddy/certificates/acme-v02.api.letsencrypt.org-directory/domain.com/domain.com.crt",\n    "key": "/var/lib/caddy/certificates/acme-v02.api.letsencrypt.org-directory/domain.com/domain.com.key",\n    "sni": "domain.com"\n  }\n}\n')),(0,r.kt)("h3",{id:"client-configjson"},"client config.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "run_type": "client",\n  "local_addr": "127.0.0.1",\n  "local_port": 1080,\n  "remote_addr": "domain.com",\n  "remote_port": 8443,\n  "password": ["domain.com"],\n  "ssl": {\n    "sni": "domain.com"\n  },\n  "mux": {\n    "enabled": true\n  }\n}\n')),(0,r.kt)("h2",{id:"socks5-\u8f6c-http"},"socks5 \u8f6c http"),(0,r.kt)("h2",{id:"privoxy-\u914d\u7f6e"},"privoxy \u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yay -S privoxy\n\ncd /etc/privoxy\n\n(sudo) mv config config.bak\n(sudo) vi config\n\nforward-socks5t / 127.0.0.1:1080 .\nlisten-address 127.0.0.1:9888\n\nsudo systemctl restart privoxy.service\nsudo systemctl enable privoxy.service\n")),(0,r.kt)("h1",{id:"\u65e7"},"\u65e7"),(0,r.kt)("h2",{id:"server"},"server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'install libsodium\npip install shadowsocks\npip install https://github.com/shadowsocks/shadowsocks/archive/master.zip -U\n\n# path : /etc/shadowsocks.json\n{\n    "server":"0.0.0.0",\n    "port_password": {\n        "8000": "password"\n    },\n    "timeout":300,\n    "method":"chacha20-ietf-poly1305",\n    "fast_open":true,\n    "pid-file": "/path/ss.pid",\n    "log-file": "/path/ss.log"\n}\n\n(sudo) ssserver -c /etc/shadowsocks.json -d start\nsudo ssserver -d stop\n\nhttps://github.com/shadowsocks/shadowsocks/wiki/Shadowsocks-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E\n')),(0,r.kt)("h4",{id:"\u5f00\u542f-bbr"},"\u5f00\u542f bbr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh\n\nchmod +x bbr.sh\n\n./bbr.sh\n\nsysctl net.ipv4.tcp_available_congestion_control\n#\u8fd4\u56de\u503c\u4e00\u822c\u4e3a\uff1a\n#net.ipv4.tcp_available_congestion_control = bbr cubic reno\n\nsysctl net.ipv4.tcp_congestion_control\n#\u8fd4\u56de\u503c\u4e00\u822c\u4e3a\uff1a\n#net.ipv4.tcp_congestion_control = bbr\n\nsysctl net.core.default_qdisc\n#\u8fd4\u56de\u503c\u4e00\u822c\u4e3a\uff1a\n#net.core.default_qdisc = fq\n\nlsmod | grep bbr\n#\u8fd4\u56de\u503c\u6709 tcp_bbr \u6a21\u5757\u5373\u8bf4\u660ebbr\u5df2\u542f\u52a8\u3002\n")),(0,r.kt)("h2",{id:"client"},"client"),(0,r.kt)("h4",{id:"ubuntu-\u4e0b\u4f7f\u7528-mac-\u4e0b\u8f7d-httpsgithubcomshadowsocksshadowsocksx-ngreleases"},"ubuntu \u4e0b\u4f7f\u7528\uff0c Mac \u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/shadowsocks/ShadowsocksX-NG/releases/"},"https://github.com/shadowsocks/ShadowsocksX-NG/releases/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'pip install shadowsocks\n\npath : ~/.shadowsocks/shadowsocks.json\n\n{\n  "server":"my_server_ip",\n  "server_port":my_server_port,\n  "password":"my_password",\n  "local_address": "127.0.0.1",\n  "local_port":1080,\n  "timeout":300,\n  "method":"chacha20-ietf-poly1305",\n  "fast_open":true,\n  "pid-file": "/path",\n  "log-file": "/path"\n}\n\nsslocal -c ~/.shadowsocks/shadowsocks.json -d start\n\u53ef\u5148\u5728\u7cfb\u7edf\u8bbe\u7f6e\u91cc\u8bbe\u7f6e\u5168\u5c40\u4ee3\u7406\uff0c\u5728\u6d4f\u89c8\u5668\u91cc\u5b89\u88c5 https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif\n')))}d.isMDXComponent=!0}}]);