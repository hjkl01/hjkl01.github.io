"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[3290],{84752:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var o=s(85893),r=s(11151);const t={},c="proxy",a={id:"proxy",title:"proxy",description:"clash yacd",source:"@site/notes/linux/proxy.md",sourceDirName:".",slug:"/proxy",permalink:"/notes/linux/proxy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nodejs",permalink:"/notes/linux/nodejs"},next:{title:"remote desktop",permalink:"/notes/linux/remote_desktop"}},l={},i=[{value:"clash yacd",id:"clash-yacd",level:2},{value:"glider",id:"glider",level:2},{value:"clash config to glider",id:"clash-config-to-glider",level:2},{value:"trojan/trojan-go",id:"trojantrojan-go",level:2},{value:"server /etc/trojan/config.json",id:"server-etctrojanconfigjson",level:3},{value:"client config.json",id:"client-configjson",level:3},{value:"socks5 \u8f6c http",id:"socks5-\u8f6c-http",level:2},{value:"privoxy \u914d\u7f6e",id:"privoxy-\u914d\u7f6e",level:2},{value:"server:",id:"server",level:2},{value:"\u5f00\u542f bbr",id:"\u5f00\u542f-bbr",level:4},{value:"client",id:"client",level:2},{value:"ubuntu \u4e0b\u4f7f\u7528\uff0c Mac \u4e0b\u8f7d https://github.com/shadowsocks/ShadowsocksX-NG/releases/",id:"ubuntu-\u4e0b\u4f7f\u7528-mac-\u4e0b\u8f7d-httpsgithubcomshadowsocksshadowsocksx-ngreleases",level:4}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"proxy",children:"proxy"}),"\n",(0,o.jsx)(e.h2,{id:"clash-yacd",children:"clash yacd"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:'version: "3.8"\n\nservices:\n  yacd:\n    container_name: yacd\n    image: haishanh/yacd\n    ports:\n      - 127.0.0.1:1234:80\n    restart: unless-stopped\n'})}),"\n",(0,o.jsx)(e.h2,{id:"glider",children:(0,o.jsx)(e.a,{href:"https://github.com/nadoo/glider/blob/master/config/glider.conf.example",children:"glider"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"yay -S glider\n\nglider -listen :1080 -forward trojan://password@ip:443\n\n# with auth\nglider -listen user:user_passwd@:61000 -forward trojan://password@ip:443\n\n# or glider.conf\nlisten=:1080\n# with user and password\nlisten=user:passwd@:1080\nforward=trojan://password@ip:443\n"})}),"\n",(0,o.jsx)(e.h2,{id:"clash-config-to-glider",children:"clash config to glider"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'# pip install pyyaml\nimport yaml\n\nfilename = "./config.yaml"\nwith open(filename, "r") as file:\n    con = yaml.safe_load(file)\n\nfor server in con["proxies"]:\n    res = f"forward=trojan://{server[\'password\']}@{server[\'server\']}:{server[\'port\']}"\n    print(res)\n'})}),"\n",(0,o.jsx)(e.h2,{id:"trojantrojan-go",children:"trojan/trojan-go"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:'https://github.com/trojan-gfw/trojan\n\n# \u673a\u573a\u63a8\u8350: https://portal.shadowsocks.nz/aff.php?aff=24252\n\n# \u90e8\u7f72\u53c2\u8003 https://github.com/Jrohy/trojan\n\nufw allow 80 443 8443\n# \u751f\u6210\u8bc1\u4e66\ncertbot certonly --standalone -d domain.com -v\n# crontab\n15 2 * */2 * certbot renew\n\n# arch \u5f00\u542f bbr\necho "tcp_bbr" > /etc/modules-load.d/modules.conf\n\necho "net.core.default_qdisc=fq" > /etc/sysctl.d/bbr.conf\necho "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.d/bbr.conf\nreboot\n\n# \u9a8c\u8bc1\nsysctl net.ipv4.tcp_congestion_control\n# net.ipv4.tcp_congestion_control = bbr\n'})}),"\n",(0,o.jsx)(e.h3,{id:"server-etctrojanconfigjson",children:"server /etc/trojan/config.json"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/p4gefau1t/trojan-go/releases",children:"https://github.com/p4gefau1t/trojan-go/releases"})}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "run_type": "server",\n  "local_addr": "0.0.0.0",\n  "local_port": 8443,\n  "remote_addr": "github.com",\n  "remote_port": 80,\n  "password": ["domain.com"],\n  "ssl": {\n    "cert": "/var/lib/caddy/certificates/acme-v02.api.letsencrypt.org-directory/domain.com/domain.com.crt",\n    "key": "/var/lib/caddy/certificates/acme-v02.api.letsencrypt.org-directory/domain.com/domain.com.key",\n    "sni": "domain.com"\n  }\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"client-configjson",children:"client config.json"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "run_type": "client",\n  "local_addr": "127.0.0.1",\n  "local_port": 1080,\n  "remote_addr": "domain.com",\n  "remote_port": 8443,\n  "password": ["domain.com"],\n  "ssl": {\n    "sni": "domain.com"\n  },\n  "mux": {\n    "enabled": true\n  }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"socks5-\u8f6c-http",children:"socks5 \u8f6c http"}),"\n",(0,o.jsx)(e.h2,{id:"privoxy-\u914d\u7f6e",children:"privoxy \u914d\u7f6e"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"yay -S privoxy\n\ncd /etc/privoxy\n\n(sudo) mv config config.bak\n(sudo) vi config\n\nforward-socks5t / 127.0.0.1:1080 .\nlisten-address 127.0.0.1:9888\n\nsudo systemctl restart privoxy.service\nsudo systemctl enable privoxy.service\n"})}),"\n",(0,o.jsx)(e.h1,{id:"\u65e7",children:"\u65e7"}),"\n",(0,o.jsx)(e.h2,{id:"server",children:"server:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:'install libsodium\npip install shadowsocks\npip install https://github.com/shadowsocks/shadowsocks/archive/master.zip -U\n\n# path : /etc/shadowsocks.json\n{\n    "server":"0.0.0.0",\n    "port_password": {\n        "8000": "password"\n    },\n    "timeout":300,\n    "method":"chacha20-ietf-poly1305",\n    "fast_open":true,\n    "pid-file": "/path/ss.pid",\n    "log-file": "/path/ss.log"\n}\n\n(sudo) ssserver -c /etc/shadowsocks.json -d start\nsudo ssserver -d stop\n\nhttps://github.com/shadowsocks/shadowsocks/wiki/Shadowsocks-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E\n'})}),"\n",(0,o.jsx)(e.h4,{id:"\u5f00\u542f-bbr",children:"\u5f00\u542f bbr"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh\n\nchmod +x bbr.sh\n\n./bbr.sh\n\nsysctl net.ipv4.tcp_available_congestion_control\n#\u8fd4\u56de\u503c\u4e00\u822c\u4e3a\uff1a\n#net.ipv4.tcp_available_congestion_control = bbr cubic reno\n\nsysctl net.ipv4.tcp_congestion_control\n#\u8fd4\u56de\u503c\u4e00\u822c\u4e3a\uff1a\n#net.ipv4.tcp_congestion_control = bbr\n\nsysctl net.core.default_qdisc\n#\u8fd4\u56de\u503c\u4e00\u822c\u4e3a\uff1a\n#net.core.default_qdisc = fq\n\nlsmod | grep bbr\n#\u8fd4\u56de\u503c\u6709 tcp_bbr \u6a21\u5757\u5373\u8bf4\u660ebbr\u5df2\u542f\u52a8\u3002\n"})}),"\n",(0,o.jsx)(e.h2,{id:"client",children:"client"}),"\n",(0,o.jsxs)(e.h4,{id:"ubuntu-\u4e0b\u4f7f\u7528-mac-\u4e0b\u8f7d-httpsgithubcomshadowsocksshadowsocksx-ngreleases",children:["ubuntu \u4e0b\u4f7f\u7528\uff0c Mac \u4e0b\u8f7d ",(0,o.jsx)(e.a,{href:"https://github.com/shadowsocks/ShadowsocksX-NG/releases/",children:"https://github.com/shadowsocks/ShadowsocksX-NG/releases/"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:'pip install shadowsocks\n\npath : ~/.shadowsocks/shadowsocks.json\n\n{\n  "server":"my_server_ip",\n  "server_port":my_server_port,\n  "password":"my_password",\n  "local_address": "127.0.0.1",\n  "local_port":1080,\n  "timeout":300,\n  "method":"chacha20-ietf-poly1305",\n  "fast_open":true,\n  "pid-file": "/path",\n  "log-file": "/path"\n}\n\nsslocal -c ~/.shadowsocks/shadowsocks.json -d start\n\u53ef\u5148\u5728\u7cfb\u7edf\u8bbe\u7f6e\u91cc\u8bbe\u7f6e\u5168\u5c40\u4ee3\u7406\uff0c\u5728\u6d4f\u89c8\u5668\u91cc\u5b89\u88c5 https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif\n'})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>a,a:()=>c});var o=s(67294);const r={},t=o.createContext(r);function c(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);