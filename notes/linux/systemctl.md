## systemctl

### caddy example

```
# ~/.config/systemd/user/aionui.service
[Unit]
Description=AionUi Desktop Application
After=graphical-session.target

[Service]
Type=simple
# 👇 修改为你的实际安装路径
ExecStart=/home/ljl/github/aionui-web/aionui-web
Restart=on-failure
RestartSec=5

[Install]
WantedBy=default.target
```



```shell
cp aionui.service ~/.config/systemd/user/aionui.service
systemctl --user daemon-reload
systemctl --user enable --now aionui

sudo ln -s glider.service /etc/systemd/system/multi-user.target.wants/glider.service
# sudo ln -s glider.service /etc/systemd/system/glider.service
# sudo ln -s glider.service /etc/lib/systemd/system/glider.service
sudo systemctl daemon-reload
sudo systemctl reload-or-restart glider.service

sudo journalctl -u glider.service -f
```

# supervisor & systemctl

## supervisor

### 安装

```
yay --noconfirm -S supervisor

# or install with pip

pip install supervisor
sudo ~/.venv/py3/bin/echo_supervisord_conf > /etc/supervisord.conf
# config /etc/supervisord.conf
supervisord
```

### 配置: 后缀为 conf 或 ini

```shell
[program:frp_ssh]

command     = /home/user/frp/frpc -c /home/user/frp/config.ini
directory = /home/user/somedir
user = user
autostart = true
autorestart = true
startsecs   = 3

redirect_stderr         = true
stdout_logfile_maxbytes = 50MB
stdout_logfile_backups  = 10
stdout_logfile          = /home/user/frp/log
```
