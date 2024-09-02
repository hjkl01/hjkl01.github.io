"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[8050],{5461:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=r(4848),l=r(8453);const s={sidebar_position:0},t="docker",c={id:"index",title:"docker",description:"install",source:"@site/notes/docker/index.md",sourceDirName:".",slug:"/",permalink:"/notes/docker/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"k8s",permalink:"/notes/docker/k8s"}},i={},a=[{value:"install",id:"install",level:2},{value:"on Linux",id:"on-linux",level:3},{value:"on Mac",id:"on-mac",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"tools",id:"tools",level:2},{value:"\u51cf\u5c11\u955c\u50cf\u4f53\u79ef",id:"\u51cf\u5c11\u955c\u50cf\u4f53\u79ef",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"docker",children:"docker"})}),"\n",(0,o.jsx)(n.h2,{id:"install",children:"install"}),"\n",(0,o.jsx)(n.h3,{id:"on-linux",children:"on Linux"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'wget -qO- https://get.docker.com/ | sh\nsudo usermod -aG docker $USER\n\n# \u4fee\u6539\u6e90 /etc/docker/daemon.json\nsudo tee /etc/docker/daemon.json <<EOF\n{\n    "registry-mirrors": ["https://docker.hjkl01.cn"]\n}\nEOF\n\n# \u914d\u7f6e\u5b8c\u540e\u9700\u8981\u91cd\u542f Docker \u670d\u52a1\nsudo systemctl restart docker\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"on-mac",children:"on Mac"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/abiosoft/colima",children:"https://github.com/abiosoft/colima"})}),"\n",(0,o.jsx)(n.h1,{id:"use-mirror-example",children:"use mirror example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# docker pull nginx:latest\ndocker pull docker.hjkl01.cn/library/nginx:latest  # \u62c9\u53d6 Docker \u5b98\u65b9\u955c\u50cf\n\n# docker pull quay.io/coreos/etcd:latest\ndocker pull quay.hjkl01.cn/coreos/etcd:latest  # \u62c9\u53d6 Quay \u955c\u50cf\n\n# docker pull gcr.io/google-containers/busybox:latest\ndocker pull gcr.hjkl01.cn/google-containers/busybox:latest  # \u62c9\u53d6 GCR \u955c\u50cf\n\n# docker pull k8s.gcr.io/pause:latest\ndocker pull k8s-gcr.hjkl01.cn/pause:latest  # \u62c9\u53d6 k8s.gcr.io \u955c\u50cf\n\n# docker pull registry.k8s.io/pause:latest\ndocker pull k8s.hjkl01.cn/pause:latest  # \u62c9\u53d6 registry.k8s.io \u955c\u50cf\n\n# docker pull ghcr.io/github/super-linter:latest\ndocker pull ghcr.hjkl01.cn/github/super-linter:latest  # \u62c9\u53d6 GitHub \u5bb9\u5668\u955c\u50cf\n\n# docker pull docker.cloudsmith.io/public/repo/image:latest\ndocker pull cloudsmith.hjkl01.cn/public/repo/image:latest  # \u62c9\u53d6 Cloudsmith \u955c\u50cf\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# export\ndocker save -o <path for generated tar file> <image name>\nexample: docker save -o ./centos.tar centos:16\n\n# load\ndocker load -i <path to image tar file>\n\n# run image\ndocker run -it ubuntu bash\n\n# exec container\ndocker exec -it openwrt zsh\n"})}),"\n",(0,o.jsx)(n.h2,{id:"tools",children:"tools"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"ctop"}),"\n",(0,o.jsx)(n.li,{children:"lazydocker"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker run -it -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/.config/jesseduffield/lazydocker lazyteam/lazydocker\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"portainer"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"version: '3.1'\n\nservices:\n\n  portainer:\n    image: portainer/portainer\n    restart: always\n    ports:\n      - 8000:8000\n      - 9000:9000\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - ./data/portainer:/data\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n\n# docker network create nginx-proxy\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"dozzle"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'version: "3"\nservices:\n  dozzle:\n    container_name: dozzle\n    image: amir20/dozzle:latest\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n    ports:\n      - 8888:8080\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u51cf\u5c11\u955c\u50cf\u4f53\u79ef",children:(0,o.jsx)(n.a,{href:"https://icloudnative.io/posts/docker-images-part1-reducing-image-size/",children:"\u51cf\u5c11\u955c\u50cf\u4f53\u79ef"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// hello.go\npackage main\n\nimport "fmt"\n\nfunc main () {\n  fmt.Println("Hello, world!")\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'# Dockerfile\nFROM golang\nCOPY hello.go .\nRUN go build hello.go\n# FROM scratch\n# FROM alpine\nFROM busybox:glibc\nCOPY --from=0 /go/hello .\nCMD ["./hello"]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var o=r(6540);const l={},s=o.createContext(l);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);