## systemctl

### glider example

```
[Unit]
Description=Glider Service
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
ExecStart=/usr/bin/glider -config /etc/glider/glider.conf

[Install]
WantedBy=multi-user.target
WantedBy=multi-user.target
```

```shell
sudo ln -s glider.service /etc/systemd/system/multi-user.target.wants/glider.service
# sudo ln -s glider.service /etc/systemd/system/glider.service
# sudo ln -s glider.service /etc/lib/systemd/system/glider.service
sudo systemctl daemon-reload
sudo systemctl restart glider.service
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
