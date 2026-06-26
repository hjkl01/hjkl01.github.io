# qemu


```yaml
services:
  qemu:
    image: qemux/qemu
    container_name: qemu
    environment:
      BOOT: /boot.iso
      # BOOT: "https://mirrors.nju.edu.cn/archlinux/iso/latest/archlinux-x86_64.iso"
      # BOOT: "arch"
      # BOOT: "mint"
      DISK_SIZE: "512G"
      RAM_SIZE: "16G"
      CPU_CORES: "8"
      # BOOT_MODE: "legacy"
    devices:
      - /dev/kvm
      - /dev/net/tun
    cap_add:
      - NET_ADMIN
    ports:
      - 55522:22
      # - 58006:8006
    volumes:
      - ./data/qemu/archlinux-x86_64.iso:/boot.iso
      - ./data/qemu/qemu:/storage
    restart: always
    stop_grace_period: 2m
```
