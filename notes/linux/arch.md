---
sidebar_position: 1
---

# arch


### 我的配置

> https://github.com/hjkl01/dotfiles

### 安装参考

- [archlinux](https://github.com/archlinux/archinstall) [link2](https://github.com/JunkFood02/Arch-Linux-Installation-Guide)


### wifi

```shell
iwctl
device list

station list
station wlan0 scan
station wlan0 show
station wlan0 connect SSID
```

### 安装
```shell
关闭安全启动以及快速启动
磁盘分区
fdisk -l
cfdisk /dev/sdb

/boot分区，用来存储启动信息，该分区一般 512M 足够。BIOS 引导可以不单独分这个分区，但是 UEFI 引导必须有该分区作为 EFI 分区。
/swap分区，交换分区，该分区功能很多，不等同于 Windows 的虚拟内存，建议每一个用户至少创建一个 2G 大小的交换分区。该分区大小视电脑内存大小而定。一般选取自身电脑内存的四分之一即可，及本人电脑为16G，那么我将选择创建4G的swap分区
/home分区（可选），即用户分区，用于存储用户的数据。该分区是用户自己数据存储的地方。如果你不单独分出 home 分区，则你的所有数据将仅存储在/mnt 分区。对于新手，建议不创建单独的 /home 分区；。
/mnt分区，即根目录，储存用户的数据，如果你创建单独的/home 分区，则建议该分区大小不小于 20G，根据你的需求和剩余空间大小而定；如果不创建单独的 /home 分区，就把磁盘所有剩余空间留给 /mnt。

mkfs.ext4 /dev/sdb4
mkfs.vfat -F32 /dev/sdb2
mkswap /dev/sdb3
# mkfs.ext4 /dev/sdb5
mount /dev/sdb4 /mnt
mkdir -p /mnt/boot
mount /dev/sdb2 /mnt/boot
swapon /dev/sdb3
# mkdir /mnt/home
# mount /dev/sdb5 /mnt/home

reflector --country 'China' --age 12 --protocol https --sort rate --save /etc/pacman.d/mirrorlist

Server = https://mirrors.aliyun.com/archlinux/$repo/os/$arch
Server = https://mirror.nyist.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.jcut.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.shanghaitech.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch

pacstrap /mnt base base-devel linux linux-firmware neovim e2fsprogs ntfs-3g zsh tmux fzf zoxide neovim lua stylua git htop tree lsof
# fcitx5-rime alacritty 
pacman -Sy archlinux-keyring
genfstab -U -p /mnt >> /mnt/etc/fstab

arch-chroot /mnt /bin/bash
passwd root

useradd -m -G wheel -s /usr/bin/zsh 你的用户名
passwd 你的用户名
nvim /etc/sudoers

echo archlinux > /etc/hostname

nvim /etc/hosts
127.0.0.1	localhost
::1		localhost

# amd
pacman -S amd-ucode
# intel
pacman -S intel-ucode

pacman -S grub efibootmgr os-prober
# uefi
    grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=grub --recheck
#非uefi启动
    grub-install --target=i386-pc /dev/sdbX
grub-mkconfig -o /boot/grub/grub.cfg

nvim /etc/locale.gen
#en_US.UTF-8 UTF-8
#zh_CN.UTF-8 UTF-8
locale-gen
echo LANG=zh_CN.UTF-8 > /etc/locale.conf

ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
systemctl enable systemd-timesyncd

pacman -S xorg
pacman -S gnome gdm
systemctl enable gdm
pacman -S wqy-microhei

nvim ~/.xprofile
export LANG=zh_CN.UTF-8
export LANGUAGE=zh_CN:en_US
export LC_CTYPE=en_US.UTF-8

cp ~/.xprofile /home/你的用户名


# after install
lspci -k
# example
pacman --noconfirm -S broadcom-wl

pacman -S dhcpcd iwd networkmanager

systemctl enable dhcpcd.service
systemctl enable iwd.service
systemctl enable NetworkManager

# Windows 双系统引导

nvim /etc/default/grub
# GRUB_DISABLE_OS_PROBER=false

sudo grub-mkconfig -o /boot/grub/grub.cfg
```

### yay

```shell
pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay-bin.git
cd yay-bin
makepkg -si
```

### 输入法 [参考](https://github.com/Mark24Code/rime-auto-deploy)

```shell
vi ~/.xprofile

export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
fcitx5 &

# 如果不生效 取出export 写入到/etc/environment
INPUT_METHOD=fcitx5
GTK_IM_MODULE=fcitx5
QT_IM_MODULE=fcitx5
XMODIFIERS=@im=fcitx5
```

### pppoe 拨号

```shell
yay -S --noconfirm rp-pppoe net-tools

ifconfig # 查看对应的网卡
sudo ifconfig 网卡 down # 停止网卡服务
sudo pppoe-setup # 输入对应的用户名密码等信息
sudo pppoe-start

sudo route delete default
sudo route add default ppp0 # ppp0可能是其他名字 ifconfig查看

sudo nvim /etc/resolvconf.conf # 更新name_servers
sudo resolvconf -u # 更新DNS
```

### missing libcrypto.so.1.1

- https://unix.stackexchange.com/questions/723616/how-to-fix-missing-libcrypto-so-1-1


### install on vps

- wiki: https://gitlab.com/drizzt/vps2arch/-/wikis/Tested-VPS-Providers

- #### ⚠️ 设置 root 的密码

```shell
# wget https://tinyurl.com/vps2arch 也会被重定向到以下 url
wget https://gitlab.com/drizzt/vps2arch/-/raw/master/vps2arch

# 启动脚本
sh ./vps2arch

# 当你从脚本默认的源下载速度较慢的时候，可以使用 -m 参数指定源，例如
sudo sh ./vps2arch -m https://mirrors.neusoft.edu.cn/archlinux/
sync ; reboot -f
```

