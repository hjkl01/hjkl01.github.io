"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[319],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=l,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(7462),l=(t(7294),t(3905));const a={sidebar_position:10},i="nginx",o={unversionedId:"linux/nginx",id:"linux/nginx",title:"nginx",description:"\u63a8\u8350\u5728\u7ebf\u914d\u7f6e",source:"@site/docs/linux/nginx.md",sourceDirName:"linux",slug:"/linux/nginx",permalink:"/docs/linux/nginx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/nginx.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"supervisor",permalink:"/docs/linux/supervisor"},next:{title:"samba(old)",permalink:"/docs/linux/samba"}},s={},p=[{value:"\u63a8\u8350\u5728\u7ebf\u914d\u7f6e",id:"\u63a8\u8350\u5728\u7ebf\u914d\u7f6e",level:2},{value:"https\u8bc1\u4e66",id:"https\u8bc1\u4e66",level:2},{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",level:2},{value:"ssl",id:"ssl",level:3},{value:"\u8f6c\u53d1mongo\u7aef\u53e3(TCP)",id:"\u8f6c\u53d1mongo\u7aef\u53e3tcp",level:3},{value:"\u9650\u6d41",id:"\u9650\u6d41",level:2},{value:"\u6b63\u5e38\u9650\u6d41",id:"\u6b63\u5e38\u9650\u6d41",level:3},{value:"\u5904\u7406\u7a81\u53d1\u6d41\u91cf",id:"\u5904\u7406\u7a81\u53d1\u6d41\u91cf",level:3},{value:"\u9650\u5236\u8fde\u63a5\u6570",id:"\u9650\u5236\u8fde\u63a5\u6570",level:3},{value:"\u8bbe\u7f6e\u767d\u540d\u5355",id:"\u8bbe\u7f6e\u767d\u540d\u5355",level:3},{value:"\u9650\u5236\u6570\u636e\u4f20\u8f93\u901f\u5ea6",id:"\u9650\u5236\u6570\u636e\u4f20\u8f93\u901f\u5ea6",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nginx"},"nginx"),(0,l.kt)("h2",{id:"\u63a8\u8350\u5728\u7ebf\u914d\u7f6e"},"\u63a8\u8350\u5728\u7ebf\u914d\u7f6e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://digitalocean.github.io/nginxconfig.io/?global.app.lang=zhCN"},"https://digitalocean.github.io/nginxconfig.io/?global.app.lang=zhCN"))),(0,l.kt)("h2",{id:"https\u8bc1\u4e66"},"https\u8bc1\u4e66"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5certbot\nyay -S --noconfirm certbot\nsudo certbot certonly --standalone -d domain\nsudo certbot certonly -d domain --webroot -w /html/filepath/\n\nsudo crontab -e \n15 2 * */2 * systemctl stop nginx.service && certbot renew && systemctl restart nginx.service\n")),(0,l.kt)("h2",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"server {\n    listen 80;\n    listen [::]:80;\n    server_name blog.hjkl01.cn;\n\n    # \u9759\u6001\u6587\u4ef6\n\n    # root /html/github;\n    # location / {\n    #    index index.html index.htm;\n    # }\n\n    root /html/github/;\n\n    location / {\n        # try_files $uri $uri/ =404;\n        try_files $uri $uri /index.html;\n    }\n\n    \n    # django\n    location /static/ {\n        alias /home/ubuntu/djangoapp/static/; \n    }\n\n    location /media/ {\n        alias /home/ubuntu/djangoapp/media/; \n    }\n\n    location / {\n        proxy_pass http://127.0.0.1:8000;\n        proxy_set_header X-Forwarded-Host $server_name;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_redirect off;\n        add_header P3P 'CP=\"ALL DSP COR PSAa OUR NOR ONL UNI COM NAV\"';\n        add_header Access-Control-Allow-Origin *;\n    }\n\n\n    # \u8f6c\u53d1\u7aef\u53e3\n    location / {\n        proxy_pass http://127.0.0.1:8000/;\n    }\n\n    # \u91cd\u5b9a\u5411\n    return 301 https://$host$request_uri;\n    # rewrite ^(.*)$ https://blog.hjkl01.cn; #\u5c06\u6240\u6709HTTP\u8bf7\u6c42\u901a\u8fc7rewrite\u6307\u4ee4\u91cd\u5b9a\u5411\u5230HTTPS\u3002\n\n    # CORS\n    add_header Access-Control-Allow-Origin *;\n    add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';\n    add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';\n\n}\n")),(0,l.kt)("h3",{id:"ssl"},"ssl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"server {\n    listen 443 ssl http2;\n    listen [::]:443 ssl http2;\n    server_name blog.hjkl01.cn;\n\n    ssl_certificate /etc/letsencrypt/live/blog.hjkl01.cn/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/blog.hjkl01.cn/privkey.pem;\n    ssl_trusted_certificate /etc/letsencrypt/live/blog.hjkl01.cn/chain.pem;\n    ssl_session_timeout 5m;\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; \n    ssl_prefer_server_ciphers on;\n\n    # \u9759\u6001\u6587\u4ef6\n    location / {\n        root /html/github;  #\u7ad9\u70b9\u76ee\u5f55\u3002\n        index index.html index.htm;\n    }\n\n    # \u8f6c\u53d1\u7aef\u53e3\n    location / {\n        proxy_pass http://127.0.0.1:8080/;\n    }\n\n}\n")),(0,l.kt)("h3",{id:"\u8f6c\u53d1mongo\u7aef\u53e3tcp"},"\u8f6c\u53d1mongo\u7aef\u53e3(TCP)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"stream {\n    server {\n        listen  <your incoming Mongo TCP port>;\n        proxy_connect_timeout 1s;\n        proxy_timeout 3s;\n        proxy_pass    stream_mongo_backend;\n    }\n\n    upstream stream_mongo_backend {\n      server <localhost:your local Mongo TCP port>;\n  }\n}\n")),(0,l.kt)("h2",{id:"\u9650\u6d41"},"\u9650\u6d41"),(0,l.kt)("h3",{id:"\u6b63\u5e38\u9650\u6d41"},"\u6b63\u5e38\u9650\u6d41"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# nginx.conf\nhttp {\n    limit_req_zone $binary_remote_addr zone=myRateLimit:10m rate=10r/s;\n}\n# server\nserver {\n        location / {\n            limit_req zone=myRateLimit;\n            proxy_pass http://my_upstream;\n        }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"key \uff1a\u5b9a\u4e49\u9650\u6d41\u5bf9\u8c61\uff0cbinary",(0,l.kt)("em",{parentName:"li"},"remote_addr \u662f\u4e00\u79cdkey\uff0c\u8868\u793a\u57fa\u4e8e remote_addr(\u5ba2\u6237\u7aefIP) \u6765\u505a\u9650\u6d41\uff0cbinary")," \u7684\u76ee\u7684\u662f\u538b\u7f29\u5185\u5b58\u5360\u7528\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"zone\uff1a\u5b9a\u4e49\u5171\u4eab\u5185\u5b58\u533a\u6765\u5b58\u50a8\u8bbf\u95ee\u4fe1\u606f\uff0c myRateLimit:10m \u8868\u793a\u4e00\u4e2a\u5927\u5c0f\u4e3a10M\uff0c\u540d\u5b57\u4e3amyRateLimit\u7684\u5185\u5b58\u533a\u57df\u30021M\u80fd\u5b58\u50a816000 IP\u5730\u5740\u7684\u8bbf\u95ee\u4fe1\u606f\uff0c10M\u53ef\u4ee5\u5b58\u50a816W IP\u5730\u5740\u8bbf\u95ee\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"rate \u7528\u4e8e\u8bbe\u7f6e\u6700\u5927\u8bbf\u95ee\u901f\u7387\uff0crate=10r/s \u8868\u793a\u6bcf\u79d2\u6700\u591a\u5904\u740610\u4e2a\u8bf7\u6c42\u3002Nginx \u5b9e\u9645\u4e0a\u4ee5\u6beb\u79d2\u4e3a\u7c92\u5ea6\u6765\u8ddf\u8e2a\u8bf7\u6c42\u4fe1\u606f\uff0c\u56e0\u6b64 10r/s \u5b9e\u9645\u4e0a\u662f\u9650\u5236\uff1a\u6bcf100\u6beb\u79d2\u5904\u7406\u4e00\u4e2a\u8bf7\u6c42\u3002\u8fd9\u610f\u5473\u7740\uff0c\u81ea\u4e0a\u4e00\u4e2a\u8bf7\u6c42\u5904\u7406\u5b8c\u540e\uff0c\u82e5\u540e\u7eed100\u6beb\u79d2\u5185\u53c8\u6709\u8bf7\u6c42\u5230\u8fbe\uff0c\u5c06\u62d2\u7edd\u5904\u7406\u8be5\u8bf7\u6c42\u3002")),(0,l.kt)("h3",{id:"\u5904\u7406\u7a81\u53d1\u6d41\u91cf"},"\u5904\u7406\u7a81\u53d1\u6d41\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"server {\n        location / {\n            limit_req zone=myRateLimit burst=20 nodelay;\n            proxy_pass http://my_upstream;\n        }\n    }\n")),(0,l.kt)("h3",{id:"\u9650\u5236\u8fde\u63a5\u6570"},"\u9650\u5236\u8fde\u63a5\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"limit_conn_zone $binary_remote_addr zone=perip:10m;\nlimit_conn_zone $server_name zone=perserver:10m;\nserver {\n    ...\n    limit_conn perip 10;\n    limit_conn perserver 100;\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"limit_conn perip 10 \u4f5c\u7528\u7684key \u662f $binary_remote_addr\uff0c\u8868\u793a\u9650\u5236\u5355\u4e2aIP\u540c\u65f6\u6700\u591a\u80fd\u6301\u670910\u4e2a\u8fde\u63a5\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"limit_conn perserver 100 \u4f5c\u7528\u7684key\u662f $server_name\uff0c\u8868\u793a\u865a\u62df\u4e3b\u673a(server) \u540c\u65f6\u80fd\u5904\u7406\u5e76\u53d1\u8fde\u63a5\u7684\u603b\u6570\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a\u53ea\u6709\u5f53 request header \u88ab\u540e\u7aefserver\u5904\u7406\u540e\uff0c\u8fd9\u4e2a\u8fde\u63a5\u624d\u8fdb\u884c\u8ba1\u6570\u3002"))),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u767d\u540d\u5355"},"\u8bbe\u7f6e\u767d\u540d\u5355"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# nginx.conf\ngeo $limit {\n    default 1;\n    10.0.0.0/8 0;\n    192.168.0.0/24 0;\n    172.20.0.35 0;\n}\nmap $limit $limit_key {\n    0 "";\n    1 $binary_remote_addr;\n}\nlimit_req_zone $limit_key zone=myRateLimit:10m rate=10r/s;\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"geo \u5bf9\u4e8e\u767d\u540d\u5355(\u5b50\u7f51\u6216IP\u90fd\u53ef\u4ee5) \u5c06\u8fd4\u56de0\uff0c\u5176\u4ed6IP\u5c06\u8fd4\u56de1\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"map \u5c06 $limit \u8f6c\u6362\u4e3a $limit_key\uff0c\u5982\u679c\u662f $limit \u662f0(\u767d\u540d\u5355)\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\uff1b\u5982\u679c\u662f1\uff0c\u5219\u8fd4\u56de\u5ba2\u6237\u7aef\u5b9e\u9645IP\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"limit_req_zone \u9650\u6d41\u7684key\u4e0d\u518d\u4f7f\u7528 $binary_remote_addr\uff0c\u800c\u662f $limit_key \u6765\u52a8\u6001\u83b7\u53d6\u503c\u3002\u5982\u679c\u662f\u767d\u540d\u5355\uff0climit_req_zone \u7684\u9650\u6d41key\u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5c06\u4e0d\u4f1a\u9650\u6d41\uff1b\u82e5\u4e0d\u662f\u767d\u540d\u5355\uff0c\u5c06\u4f1a\u5bf9\u5ba2\u6237\u7aef\u771f\u5b9eIP\u8fdb\u884c\u9650\u6d41\u3002"))),(0,l.kt)("h3",{id:"\u9650\u5236\u6570\u636e\u4f20\u8f93\u901f\u5ea6"},"\u9650\u5236\u6570\u636e\u4f20\u8f93\u901f\u5ea6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"location /flv/ {\n    flv;\n    limit_rate_after 20m;\n    limit_rate       100k;\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u9650\u5236\u662f\u9488\u5bf9\u6bcf\u4e2a\u8bf7\u6c42\u7684\uff0c\u8868\u793a\u5ba2\u6237\u7aef\u4e0b\u8f7d\u524d20M\u65f6\u4e0d\u9650\u901f\uff0c\u540e\u7eed\u9650\u5236100kb/s\u3002")))}m.isMDXComponent=!0}}]);