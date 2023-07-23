"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?o.createElement(h,a(a({ref:t},g),{},{components:n})):o.createElement(h,a({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(3117),r=(n(7294),n(3905));const s={sidebar_position:1},a="git ssh",i={unversionedId:"ssh_git",id:"ssh_git",title:"git ssh",description:"git",source:"@site/notes/linux/ssh_git.md",sourceDirName:".",slug:"/ssh_git",permalink:"/notes/linux/ssh_git",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"arch",permalink:"/notes/linux/arch"},next:{title:"adb",permalink:"/notes/linux/adb"}},l={},c=[{value:"git",id:"git",level:3},{value:"~/.gitconfig",id:"gitconfig",level:4},{value:"git commands",id:"git-commands",level:4},{value:"ssh",id:"ssh",level:3},{value:"ssh TOTP \u5f00\u542f\u4e8c\u6b21\u9a8c\u8bc1",id:"ssh-totp-\u5f00\u542f\u4e8c\u6b21\u9a8c\u8bc1",level:4},{value:"github",id:"github",level:3},{value:"\u661f\u56fe",id:"\u661f\u56fe",level:4},{value:"\u5728 markdown \u4e2d\u7684\u4ee3\u7801:",id:"\u5728-markdown-\u4e2d\u7684\u4ee3\u7801",level:5},{value:"example:",id:"example",level:5},{value:"git \u6280\u5de7",id:"git-\u6280\u5de7",level:4}],g={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git-ssh"},"git ssh"),(0,r.kt)("h3",{id:"git"},"git"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# generate public key\ngit config --global user.name ""\ngit config --global user.email ""\nssh-keygen -t rsa -b 4096 -C ""\n\n# git config\ngit config --global http.https://github.com.proxy socks5://127.0.0.1:7890\ngit config --global https.https://github.com.proxy socks5://127.0.0.1:7890\n\n# git submodule\ngit submodule add https://github.com/liuyib/hexo-theme-stun/ themes/stun\ngit submodule update --remote\n')),(0,r.kt)("h4",{id:"gitconfig"},"~/.gitconfig"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# ~/.gitconfig\n[pull]\n    rebase = false\n[user]\n    email =\n    name =\n[filter "lfs"]\n    clean = git-lfs clean -- %f\n    smudge = git-lfs smudge -- %f\n    process = git-lfs filter-process\n    required = true\n[init]\n    defaultBranch = master\n\n[alias]\n  lg = log --graph --abbrev-commit --decorate --format=format:\'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)\' --all\n  lp = log --stat -p\n\n; [http "https://github.com"]\n;   postBuffer = 524288000\n;   proxy = socks5://127.0.0.1:1080\n; [https "https://github.com"]\n;   postBuffer = 524288000\n;   proxy = socks5://127.0.0.1:1080\n\n; [url "https://gitclone.com/github.com/"]\n[url "https://ghproxy.com/https://github.com/"]\n    insteadOf = https://github.com\n')),(0,r.kt)("h4",{id:"git-commands"},"git commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'git branch -a # \u67e5\u770b\u5168\u90e8\u5206\u652f\ngit checkout -b dev # \u521b\u5efa\u5e76\u68c0\u51fa\u4e00\u4e2a\u65b0\u7684\u5206\u652f\ngit add somefile\ngit commit -m "update feature"\ngit push -u origin dev\n\ngit checkout master\ngit merge dev\ngit branch -d dev # \u5220\u9664dev\u5206\u652f\ngit branch -d origin/dev # \u5220\u9664\u8fdc\u7a0bdev\u5206\u652f\n\n# \u56de\u9000\u7248\u672c\ngit reset --hard HEAD^\ngit reset --hard somecommit\n')),(0,r.kt)("h3",{id:"ssh"},"ssh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# $HOME/.ssh/config\n\nHost archServer\n    HostName 192.168.xx.xx\n    User xxx\n    Port xxx\n    # AddressFamily inet # use ipv4\n    # AddressFamily inet6 # use ipv6\n    IdentitiesOnly yes\n    IdentityFile ~/.ssh/id_rsa\n    ServerAliveInterval 120\n    # DynamicForward localhsot:1080\n    # LocalForward localhost:5432 remote-host:5432\n    # RemoteForward remote-port target-host:target-port\n\n# \u8f6c\u53d1\u8df3\u677f\u673a\u7aef\u53e3\nssh -tt -i ./id_rsa -L 0.0.0.0:local_port:host2:host2_port user@host1\n\n# \u4e0a\u4f20\u516c\u94a5\u5230\u76ee\u6807\u670d\u52a1\u5668\nssh-copy-id -i ~/.ssh/id_rsa.pub archServer\n\n# \u8f6c\u53d1\u670d\u52a1\u5668\u5230\u672c\u673a\u76841082\u7aef\u53e3\nssh -D 1082 -f -C -q -N archServer\n\n# Host github\n#    HostName github.com\n#    User git\n#    # \u8d70 HTTP \u4ee3\u7406\n#    # ProxyCommand socat - PROXY:127.0.0.1:%h:%p,proxyport=8080\n#    # \u8d70 socks5 \u4ee3\u7406\n#    ProxyCommand nc -v -x 127.0.0.1:7890 %h %p\n")),(0,r.kt)("h4",{id:"ssh-totp-\u5f00\u542f\u4e8c\u6b21\u9a8c\u8bc1"},"ssh TOTP \u5f00\u542f\u4e8c\u6b21\u9a8c\u8bc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# ubuntu\nsudo apt install -y libpam-google-authenticator\n\n# arch\n# yay -S --noconfirm google-authenticator-libpam-git\nsudo pacman -S --noconfirm libpam-google-authenticator\n\n# \u751f\u6210\u9a8c\u8bc1\u7801\n# \u54ea\u4e2a\u8d26\u53f7\u9700\u8981\u52a8\u6001\u9a8c\u8bc1\u7801\uff0c\u8bf7\u5207\u6362\u5230\u8be5\u8d26\u53f7\u4e0b\u64cd\u4f5c\n# -t: \u4f7f\u7528 TOTP \u9a8c\u8bc1\n# -f: \u5c06\u914d\u7f6e\u4fdd\u5b58\u5230 ~/.google_authenticator \u6587\u4ef6\u91cc\u9762\n# -d: \u4e0d\u5141\u8bb8\u91cd\u590d\u4f7f\u7528\u4ee5\u524d\u4f7f\u7528\u7684\u4ee4\u724c\n# -w 3: \u4f7f\u7528\u4ee4\u724c\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u4ee5\u8fdb\u884c\u65f6\u949f\u504f\u79fb\n# -e 10: \u751f\u6210 10 \u4e2a\u7d27\u6025\u5907\u7528\u4ee3\u7801\n# -r 3 -R 30: \u9650\u901f - \u6bcf 30 \u79d2\u5141\u8bb8 3 \u6b21\u767b\u5f55\ngoogle-authenticator -t -f -d -w 3 -e 10 -r 3 -R 30\n\n# chrome \u63d2\u4ef6 https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai\n# android app Google Authenticator https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&gl=US\n\nsudo vim /etc/pam.d/sshd\n\nauth required pam_google_authenticator.so\n\nsudo nvim /etc/ssh/sshd_config\n\nKbdInteractiveAuthentication yes\nChallengeResponseAuthentication yes\nPubkeyAuthentication yes\nPasswordAuthentication yes\nAuthenticationMethods publickey keyboard-interactive\n# AuthenticationMethods keyboard-interactive\n\nsudo systemctl restart ssh.service\n")),(0,r.kt)("h3",{id:"github"},"github"),(0,r.kt)("h4",{id:"\u661f\u56fe"},"\u661f\u56fe"),(0,r.kt)("h5",{id:"\u5728-markdown-\u4e2d\u7684\u4ee3\u7801"},"\u5728 markdown \u4e2d\u7684\u4ee3\u7801:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"![stars](https://starchart.cc/lesssound/pornhub.svg)\n")),(0,r.kt)("h5",{id:"example"},"example:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://starchart.cc/lesssound/pornhub.svg",alt:"stars"})),(0,r.kt)("h4",{id:"git-\u6280\u5de7"},"git \u6280\u5de7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'git log --after="2020-15-05" --before="2020-25-05"\n\ngit log --after="yesterday" // shows only commits from yeserday\n\ngit log --after="today" // shows only today commits\n\ngit log --before="10 day ago" // omits last 10 days commits\n\ngit log --after="1 week ago" //show only commits from last week\n\ngit log --after="2 week ago"\n\ngit log --after="2 month ago" // shows only last 2 months commits\n\n# git log with diff changes\ngit log -p\n\n# Filter commits by author\ngit log --author="Srebalaji"\n\n# Filter commits by log messages\ngit log --grep="ISSUE-43560"\n# To make the search case insensitive, you can pass -i parameter\ngit log -i --grep="issue-43560"\n\n# Filter commits by files\ngit log main.rb\n\n# Filter commits by file content\ngit log -S"function login()"\n\n# Custom formatting log messages\ngit log --pretty=format:"%Cred%an - %ar%n %Cblue %h -%Cgreen %s %n"\n')))}u.isMDXComponent=!0}}]);