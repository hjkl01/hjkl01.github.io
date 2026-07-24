## systemctl

### caddy example

```
[Unit]
Description=Caddy web server
Documentation=https://caddyserver.com/docs/
After=network-online.target
Wants=network-online.target
StartLimitIntervalSec=14400
StartLimitBurst=10

[Service]
Type=notify
User=caddy
Group=caddy
Environment=XDG_DATA_HOME=/var/lib
Environment=XDG_CONFIG_HOME=/etc
ExecStartPre=/usr/bin/caddy validate --config /etc/caddy/Caddyfile
ExecStart=/usr/bin/caddy run --config /etc/caddy/Caddyfile
ExecReload=/usr/bin/caddy reload --config /etc/caddy/Caddyfile --force
ExecStopPost=/usr/bin/rm -f /run/caddy/admin.socket

# Do not allow the process to be restarted in a tight loop. If the
# process fails to start, something critical needs to be fixed.
Restart=on-abnormal

# Use graceful shutdown with a reasonable timeout
TimeoutStopSec=5s

LimitNOFILE=1048576
LimitNPROC=512

# Hardening options
AmbientCapabilities=CAP_NET_BIND_SERVICE
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
DevicePolicy=closed
LockPersonality=true
MemoryAccounting=true
MemoryDenyWriteExecute=true
NoNewPrivileges=true
PrivateDevices=true
PrivateTmp=true
ProcSubset=pid
ProtectClock=true
ProtectControlGroups=true
ProtectHome=true
ProtectHostname=true
ProtectKernelLogs=true
ProtectKernelModules=true
ProtectKernelTunables=true
ProtectProc=invisible
ProtectSystem=strict
RemoveIPC=true
ReadWritePaths=/var/lib/caddy /var/log/caddy /run/caddy
RestrictNamespaces=true
RestrictRealtime=true
RestrictSUIDSGID=true

[Install]
WantedBy=multi-user.target
```

```shell
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
