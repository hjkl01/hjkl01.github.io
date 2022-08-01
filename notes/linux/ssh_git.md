---
sidebar_position: 1
---

# git ssh 

### git
```shell
# generate public key
git config --global user.name ""
git config --global user.email ""
ssh-keygen -t rsa -b 4096 -C ""

# git config
git config --global http.https://github.com.proxy socks5://127.0.0.1:7890
git config --global https.https://github.com.proxy socks5://127.0.0.1:7890

# git submodule
git submodule add https://github.com/liuyib/hexo-theme-stun/ themes/stun
git submodule update --remote
```

#### ~/.gitconfig
```shell 
# ~/.gitconfig
[http "https://github.com"]
	postBuffer = 524288000
	proxy = socks5://127.0.0.1:1080
[https "https://github.com"]
	postBuffer = 524288000
	proxy = socks5://127.0.0.1:1080

[pull]
	rebase = false
[user]
	email = 
	name = 
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[init]
	defaultBranch = master

; [url "https://ghproxy.com/https://github.com/"]
; 	insteadOf = https://github.com

; [url "https://gitclone.com/github.com/"]
; 	insteadOf = https://github.com
```

### ssh
```shell
# $HOME/.ssh/config
Host github
   HostName github.com
   User git
   # 走 HTTP 代理
   # ProxyCommand socat - PROXY:127.0.0.1:%h:%p,proxyport=8080
   # 走 socks5 代理
   ProxyCommand nc -v -x 127.0.0.1:7890 %h %p


Host archServer
    HostName 192.168.xx.xx
    User xxx
    Port xxx
    # use ipv4
    # AddressFamily inet
    IdentitiesOnly yes
    IdentityFile ~/.ssh/id_rsa
    ServerAliveInterval 120
    
# 转发跳板机端口
ssh -tt -i ./id_rsa -L 0.0.0.0:local_port:host2:host2_port user@host1

# 上传共钥到目标服务器
ssh-copy-id -i ~/.ssh/id_rsa.pub archServer

# 转发服务器到本机的1082端口
ssh -D 1082 -f -C -q -N archServer
```
### ssh TOTP 开启二次验证

```shell 
# ubuntu 
sudo apt install -y libpam-google-authenticator

# arch 
yay -S --noconfirm google-authenticator-libpam-git

# 生成验证码  
# 哪个账号需要动态验证码，请切换到该账号下操作  
# -t: 使用 TOTP 验证  
# -f: 将配置保存到 ~/.google_authenticator 文件里面  
# -d: 不允许重复使用以前使用的令牌  
# -w 3: 使用令牌进行身份验证以进行时钟偏移  
# -e 10: 生成 10 个紧急备用代码  
# -r 3 -R 30: 限速 - 每 30 秒允许 3 次登录  
google-authenticator -t -f -d -w 3 -e 10 -r 3 -R 30

# chrome 插件 https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai
# android app Google Authenticator https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&gl=US

sudo vim /etc/pam.d/sshd  

auth required pam_google_authenticator.so

sudo nvim /etc/ssh/sshd_config 

KbdInteractiveAuthentication yes
ChallengeResponseAuthentication yes  
PubkeyAuthentication yes  
PasswordAuthentication yes  
AuthenticationMethods publickey,password publickey,keyboard-interactive

sudo systemctl restart ssh.service
```


### 星图

#### 在markdown中的代码:
```shell
![stars](https://starchart.cc/lesssound/pornhub.svg)
```

#### example:
![stars](https://starchart.cc/lesssound/pornhub.svg)
