"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[9125],{7524:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=i(4848),t=i(8453);const l={sidebar_position:1},r="arch",o={id:"arch",title:"arch",description:"install on vps",source:"@site/notes/linux/arch.md",sourceDirName:".",slug:"/arch",permalink:"/notes/linux/arch",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"linux",permalink:"/notes/linux/"},next:{title:"git ssh",permalink:"/notes/linux/ssh_git"}},c={},a=[{value:"install on vps",id:"install-on-vps",level:2},{value:"\u26a0\ufe0f \u8bbe\u7f6e root \u7684\u5bc6\u7801",id:"\ufe0f-\u8bbe\u7f6e-root-\u7684\u5bc6\u7801",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"wifi",id:"wifi",level:3},{value:"\u6e90\u8bbe\u7f6e",id:"\u6e90\u8bbe\u7f6e",level:3},{value:"yay",id:"yay",level:3},{value:"\u4f7f\u7528 ntp",id:"\u4f7f\u7528-ntp",level:3},{value:"utf8",id:"utf8",level:3},{value:"boot",id:"boot",level:3},{value:"\u6211\u7684\u914d\u7f6e",id:"\u6211\u7684\u914d\u7f6e",level:3},{value:"\u8f93\u5165\u6cd5",id:"\u8f93\u5165\u6cd5",level:3},{value:"pppoe \u62e8\u53f7",id:"pppoe-\u62e8\u53f7",level:3},{value:"missing libcrypto.so.1.1",id:"missing-libcryptoso11",level:3}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"arch",children:"arch"})}),"\n",(0,s.jsx)(e.h2,{id:"install-on-vps",children:"install on vps"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["wiki: ",(0,s.jsx)(e.a,{href:"https://gitlab.com/drizzt/vps2arch/-/wikis/Tested-VPS-Providers",children:"https://gitlab.com/drizzt/vps2arch/-/wikis/Tested-VPS-Providers"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.h3,{id:"\ufe0f-\u8bbe\u7f6e-root-\u7684\u5bc6\u7801",children:"\u26a0\ufe0f \u8bbe\u7f6e root \u7684\u5bc6\u7801"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# wget https://tinyurl.com/vps2arch \u4e5f\u4f1a\u88ab\u91cd\u5b9a\u5411\u5230\u4ee5\u4e0b url\nwget https://gitlab.com/drizzt/vps2arch/-/raw/master/vps2arch\n\n# \u542f\u52a8\u811a\u672c\nsh ./vps2arch\n\n# \u5f53\u4f60\u4ece\u811a\u672c\u9ed8\u8ba4\u7684\u6e90\u4e0b\u8f7d\u901f\u5ea6\u8f83\u6162\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528 -m \u53c2\u6570\u6307\u5b9a\u6e90\uff0c\u4f8b\u5982\nsudo sh ./vps2arch -m https://mirrors.neusoft.edu.cn/archlinux/\nsync ; reboot -f\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://github.com/archlinux/archinstall",children:"archlinux"})," ",(0,s.jsx)(e.a,{href:"https://github.com/JunkFood02/Arch-Linux-Installation-Guide",children:"link2"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"install dhcpcd iwd networkmanager"}),"\n",(0,s.jsx)(e.li,{children:"systemctl enable --now dhcpcd.service"}),"\n",(0,s.jsx)(e.li,{children:"systemctl enable --now iwd.service"}),"\n",(0,s.jsx)(e.li,{children:"systemctl enable --now NetworkManager.service"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"wifi",children:"wifi"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"iwctl\ndevice list\n\nstation list\nstation wlan0 scan\nstation wlan0 show\nstation wlan0 connect SSID\n\n# after install\nlspci -k\n# example\nyay --noconfirm -S broadcom-wl\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6e90\u8bbe\u7f6e",children:"\u6e90\u8bbe\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# /etc/pacman.d/mirrorlist\n\n# \u6e05\u534e\u5927\u5b66\nServer = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch\n# \u5357\u4eac\u5927\u5b66\nServer = https://mirror.nju.edu.cn/archlinux/$repo/os/$arch\n# or\nsudo pacman-mirrors -i -c China\n# or\nsudo reflector --country China --sort rate --latest 20 --save /etc/pacman.d/mirrorlist\n\nsudo pacman -Syy\n"})}),"\n",(0,s.jsx)(e.h3,{id:"yay",children:"yay"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pacman -S --needed git base-devel\ngit clone https://aur.archlinux.org/yay-bin.git\ncd yay-bin\nmakepkg -si\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u4f7f\u7528-ntp",children:"\u4f7f\u7528 ntp"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pacman -S ntp\ntimedatectl set-ntp true\n# \u8bbe\u7f6e\u65f6\u533a\nln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\nhwclock --systohc\n"})}),"\n",(0,s.jsx)(e.h3,{id:"utf8",children:"utf8"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# \u7f16\u8f91 /etc/locale.gen \u53d6\u6d88\u4e00\u4e0b\u884c\u7684\u6ce8\u91ca\uff08\u4f60\u53ef\u80fd\u9700\u8981\u4e00\u4e2a\u7f16\u8f91\u5668\uff0c\u5982 vim\uff0c\u8bf7\u81ea\u884c\u5b89\u88c5\uff09\nen_GB.UTF-8 UTF-8\nzh_CN.UTF-8 UTF-8\n\n# \u6267\u884c locale-gen\n\n# \u521b\u5efa /etc/locale.conf \u5e76\u7f16\u8f91 LANG \u8fd9\u4e00 \u53d8\u91cf\uff0c\u6bd4\u5982\uff1a\n# LANG=zh_CN.UTF-8\n\n# install glibc-locales ttf-maple ttf-firacode-nerd\n"})}),"\n",(0,s.jsx)(e.h3,{id:"boot",children:"boot"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"yay --noconfirm -S grub efibootmgr os-prober\n\nsudo vim /etc/default/grub\n\nGRUB_DEFAULT=2\n# GRUB_SAVEDEFAULT=true\nGRUB_DISABLE_OS_PROBER=false\n\nsudo grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=Arch\nsudo grub-mkconfig -o /boot/grub/grub.cfg\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6211\u7684\u914d\u7f6e",children:"\u6211\u7684\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/hjkl01/dotfiles",children:"https://github.com/hjkl01/dotfiles"})}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u8f93\u5165\u6cd5",children:"\u8f93\u5165\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'sudo pacman -Rs $(pacman -Qsq fcitx)\n\nsudo pacman -S fcitx5 fcitx5-configtool fcitx5-qt fcitx5-gtk fcitx5-chinese-addons\n\n# https://github.com/Mark24Code/rime-auto-deploy\n\nvi ~/.xprofile\n\nexport GTK_IM_MODULE=fcitx\nexport QT_IM_MODULE=fcitx\nexport XMODIFIERS="@im=fcitx"\nfcitx5 &\n\n# \u5982\u679c\u4e0d\u751f\u6548 \u53d6\u51faexport \u5199\u5165\u5230/etc/environment\nINPUT_METHOD=fcitx5\nGTK_IM_MODULE=fcitx5\nQT_IM_MODULE=fcitx5\nXMODIFIERS=@im=fcitx5\n'})}),"\n",(0,s.jsx)(e.h3,{id:"pppoe-\u62e8\u53f7",children:"pppoe \u62e8\u53f7"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"yay -S --noconfirm rp-pppoe net-tools\n\nifconfig # \u67e5\u770b\u5bf9\u5e94\u7684\u7f51\u5361\nsudo ifconfig \u7f51\u5361 down # \u505c\u6b62\u7f51\u5361\u670d\u52a1\nsudo pppoe-setup # \u8f93\u5165\u5bf9\u5e94\u7684\u7528\u6237\u540d\u5bc6\u7801\u7b49\u4fe1\u606f\nsudo pppoe-start\n\nsudo route delete default\nsudo route add default ppp0 # ppp0\u53ef\u80fd\u662f\u5176\u4ed6\u540d\u5b57 ifconfig\u67e5\u770b\n\nsudo nvim /etc/resolvconf.conf # \u66f4\u65b0name_servers\nsudo resolvconf -u # \u66f4\u65b0DNS\n"})}),"\n",(0,s.jsx)(e.h3,{id:"missing-libcryptoso11",children:"missing libcrypto.so.1.1"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://unix.stackexchange.com/questions/723616/how-to-fix-missing-libcrypto-so-1-1",children:"https://unix.stackexchange.com/questions/723616/how-to-fix-missing-libcrypto-so-1-1"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>o});var s=i(6540);const t={},l=s.createContext(t);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);