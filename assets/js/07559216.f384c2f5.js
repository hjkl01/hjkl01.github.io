"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2336],{7129:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var o=r(5893),t=r(1151);const s={sidebar_position:0},c="docker",l={id:"index",title:"docker",description:"install",source:"@site/notes/docker/index.md",sourceDirName:".",slug:"/",permalink:"/notes/docker/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"cloudreve minIO alist",permalink:"/notes/docker/cloudreve"}},a={},i=[{value:"install",id:"install",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"tools",id:"tools",level:2},{value:"\u51cf\u5c11\u955c\u50cf\u4f53\u79ef",id:"\u51cf\u5c11\u955c\u50cf\u4f53\u79ef",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"docker",children:"docker"}),"\n",(0,o.jsx)(n.h2,{id:"install",children:"install"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'wget -qO- https://get.docker.com/ | sh\nsudo usermod -aG docker $USER\n\n# \u4fee\u6539\u6e90 /etc/docker/daemon.json\n{\n    "registry-mirrors": [\n        "http://hub-mirror.c.163.com",\n        "https://mirror.baidubce.com",\n        "https://dockerproxy.com",\n        "https://1nj0zren.mirror.aliyuncs.com",\n        "https://docker.mirrors.ustc.edu.cn",\n        "http://f1361db2.m.daocloud.io",\n        "https://dockerhub.azk8s.cn"\n    ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# export\ndocker save -o <path for generated tar file> <image name>\nexample: docker save -o ./centos.tar centos:16\n\n# load\ndocker load -i <path to image tar file>\n\n# run image\ndocker run -it ubuntu bash\n\n# exec container\ndocker exec -it openwrt zsh\n"})}),"\n",(0,o.jsx)(n.h2,{id:"tools",children:"tools"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"ctop"}),"\n",(0,o.jsx)(n.li,{children:"lazydocker"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker run -it -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/.config/jesseduffield/lazydocker lazyteam/lazydocker\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"portainer"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"version: '3.1'\n\nservices:\n\n  portainer:\n    image: portainer/portainer\n    restart: always\n    ports:\n      - 8000:8000\n      - 9000:9000\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - ./data/portainer:/data\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n\n# docker network create nginx-proxy\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u51cf\u5c11\u955c\u50cf\u4f53\u79ef",children:(0,o.jsx)(n.a,{href:"https://icloudnative.io/posts/docker-images-part1-reducing-image-size/",children:"\u51cf\u5c11\u955c\u50cf\u4f53\u79ef"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// hello.go\npackage main\n\nimport "fmt"\n\nfunc main () {\n  fmt.Println("Hello, world!")\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'# Dockerfile\nFROM golang\nCOPY hello.go .\nRUN go build hello.go\n# FROM scratch\n# FROM alpine\nFROM busybox:glibc\nCOPY --from=0 /go/hello .\nCMD ["./hello"]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var o=r(7294);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);