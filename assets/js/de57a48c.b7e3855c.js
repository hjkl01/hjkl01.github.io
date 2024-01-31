"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[635],{13431:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>t,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var d=s(85893),l=s(11151);const i={},c="\u786c\u4ef6\u64cd\u4f5c",r={id:"bash-tutorial/archives/hardware",title:"\u786c\u4ef6\u64cd\u4f5c",description:"df",source:"@site/docs/bash-tutorial/archives/hardware.md",sourceDirName:"bash-tutorial/archives",slug:"/bash-tutorial/archives/hardware",permalink:"/docs/bash-tutorial/archives/hardware",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/hardware.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6587\u4ef6\u7cfb\u7edf",permalink:"/docs/bash-tutorial/archives/file"},next:{title:"\u4e3b\u673a\u7ba1\u7406",permalink:"/docs/bash-tutorial/archives/host"}},a={},h=[{value:"df",id:"df",level:2},{value:"free",id:"free",level:2},{value:"\u786c\u76d8",id:"\u786c\u76d8",level:2},{value:"mount",id:"mount",level:2},{value:"umount",id:"umount",level:2},{value:"fdisk",id:"fdisk",level:2},{value:"mkfs",id:"mkfs",level:2},{value:"fsck",id:"fsck",level:2},{value:"dd",id:"dd",level:2},{value:"dmidecode",id:"dmidecode",level:2},{value:"lspci",id:"lspci",level:2},{value:"lsusb",id:"lsusb",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u786c\u4ef6\u64cd\u4f5c",children:"\u786c\u4ef6\u64cd\u4f5c"}),"\n",(0,d.jsx)(n.h2,{id:"df",children:"df"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"df"}),"\u547d\u4ee4\u67e5\u770b\u786c\u76d8\u4fe1\u606f\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ df\nFilesystem 1K-blocks Used Available Use% Mounted on\n/dev/sda2 15115452 5012392 9949716 34% /\n/dev/sda5 59631908 26545424 30008432 47% /home\n/dev/sda1 147764 17370 122765 13% /boot\n"})}),"\n",(0,d.jsx)(n.h2,{id:"free",children:"free"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"free"}),"\u547d\u4ee4\u67e5\u770b\u5185\u5b58\u5360\u7528\u60c5\u51b5\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ free\n total used free shared buffers cached\nMem: 513712 503976 9736 0 5312 122916\n-/+ buffers/cache: 375748 137964\nSwap: 1052248 104712 947536\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u786c\u76d8",children:"\u786c\u76d8"}),"\n",(0,d.jsxs)(n.p,{children:["\u6587\u4ef6",(0,d.jsx)(n.code,{children:"/etc/fstab"}),"\u914d\u7f6e\u7cfb\u7edf\u542f\u52a8\u65f6\u8981\u6302\u8f7d\u7684\u8bbe\u5907\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"LABEL=/12               /               ext3        defaults        1   1\nLABEL=/home             /home           ext3        defaults        1   2\nLABEL=/boot             /boot           ext3        defaults        1   2\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u7ed3\u679c\u4e00\u5171\u67096\u4e2a\u5b57\u6bb5\uff0c\u542b\u4e49\u4f9d\u6b21\u5982\u4e0b\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8bbe\u5907\u540d\uff1a\u4e0e\u7269\u7406\u8bbe\u5907\u76f8\u5173\u8054\u7684\u8bbe\u5907\u6587\u4ef6\uff08\u6216\u8bbe\u5907\u6807\u7b7e\uff09\u7684\u540d\u5b57\uff0c\u6bd4\u5982\u8bf4",(0,d.jsx)(n.code,{children:"/dev/hda1"}),"\uff08\u7b2c\u4e00\u4e2a IDE \u901a\u9053\u4e0a\u7b2c\u4e00\u4e2a\u4e3b\u8bbe\u5907\u5206\u533a\uff09\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u6302\u8f7d\u70b9\uff1a\u8bbe\u5907\u6240\u8fde\u63a5\u5230\u7684\u6587\u4ef6\u7cfb\u7edf\u6811\u7684\u76ee\u5f55\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff1aLinux \u5141\u8bb8\u6302\u8f7d\u8bb8\u591a\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u9009\u9879\uff1a\u6587\u4ef6\u7cfb\u7edf\u53ef\u4ee5\u901a\u8fc7\u5404\u79cd\u5404\u6837\u7684\u9009\u9879\u6765\u6302\u8f7d\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u9891\u7387\uff1a\u4e00\u4f4d\u6570\u5b57\uff0c\u6307\u5b9a\u662f\u5426\u548c\u5728\u4ec0\u4e48\u65f6\u95f4\u7528 dump \u547d\u4ee4\u6765\u5907\u4efd\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u6b21\u5e8f\uff1a\u4e00\u4f4d\u6570\u5b57\uff0c\u6307\u5b9a fsck \u547d\u4ee4\u6309\u7167\u4ec0\u4e48\u6b21\u5e8f\u6765\u68c0\u67e5\u6587\u4ef6\u7cfb\u7edf\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"mount",children:"mount"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"mount"}),"\u4e0d\u5e26\u53c2\u6570\u65f6\uff0c\u663e\u793a\u5f53\u524d\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mount\n/dev/sda2 on / type ext3 (rw)\nproc on /proc type proc (rw)\nsysfs on /sys type sysfs (rw)\ndevpts on /dev/pts type devpts (rw,gid=5,mode=620)\n/dev/sda5 on /home type ext3 (rw)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u4e2a\u5217\u8868\u7684\u683c\u5f0f\u662f\uff1a\u8bbe\u5907 on \u6302\u8f7d\u70b9 type \u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff08\u53ef\u9009\u7684\uff09\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"mount"}),"\u5e26\u53c2\u6570\u65f6\uff0c\u7528\u4e8e\u5c06\u8bbe\u5907\u6587\u4ef6\u6302\u8f7d\u5230\u6302\u8f7d\u70b9\uff0c",(0,d.jsx)(n.code,{children:"-t"}),"\u53c2\u6570\u7528\u6765\u6307\u5b9a\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ mount -t iso9660 /dev/hdc /mnt/cdrom\n\n# \u6302\u8f7d\u4e00\u4e2aiso\u6587\u4ef6\n$ mount -t iso9660 -o loop image.iso /mnt/iso_image\n"})}),"\n",(0,d.jsx)(n.h2,{id:"umount",children:"umount"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"umount"}),"\u547d\u4ee4\u7528\u6765\u5378\u8f7d\u8bbe\u5907\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ umount [\u8bbe\u5907\u540d]\n\n$ umount /dev/hdc\n"})}),"\n",(0,d.jsx)(n.h2,{id:"fdisk",children:"fdisk"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"fdisk"}),"\u547d\u4ee4\u7528\u4e8e\u683c\u5f0f\u5316\u78c1\u76d8\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sudo umount /dev/sdb1\n$ sudo fdisk /dev/sdb\n"})}),"\n",(0,d.jsx)(n.h2,{id:"mkfs",children:"mkfs"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"mkfs"}),"\u547d\u4ee4\u7528\u4e8e\u5728\u4e00\u4e2a\u8bbe\u5907\u4e0a\u65b0\u5efa\u6587\u4ef6\u7cfb\u7edf\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sudo mkfs -t ext3 /dev/sdb1\n$ sudo mkfs -t vfat /dev/sdb1\n"})}),"\n",(0,d.jsx)(n.h2,{id:"fsck",children:"fsck"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"fsck"}),"\u547d\u4ee4\u7528\u4e8e\u68c0\u67e5\uff08\u4fee\u590d\uff09\u6587\u4ef6\u7cfb\u7edf\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sudo fsck /dev/sdb1\n"})}),"\n",(0,d.jsx)(n.h2,{id:"dd",children:"dd"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dd"}),"\u547d\u4ee4\u7528\u4e8e\u5c06\u5927\u578b\u6570\u636e\u5757\uff0c\u4ece\u4e00\u4e2a\u78c1\u76d8\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u78c1\u76d8\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ dd if=input_file of=output_file [bs=block_size [count=blocks]]\n\n# \u5c06 /dev/sdb \u7684\u6240\u6709\u6570\u636e\u590d\u5236\u5230 /dev/sdc\n$ dd if=/dev/sdb of=/dev/sdc\n\n# \u5c06 /dev/sdb \u7684\u6240\u6709\u6570\u636e\u62f7\u8d1d\u5230\u4e00\u4e2a\u955c\u50cf\u6587\u4ef6\n$ dd if=/dev/sdb of=flash_drive.img\n\n# \u4ececdrom\u5236\u4f5c\u4e00\u4e2aiso\u6587\u4ef6\n$ dd if=/dev/cdrom of=ubuntu.iso\n"})}),"\n",(0,d.jsx)(n.h2,{id:"dmidecode",children:"dmidecode"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dmidecode"}),"\u547d\u4ee4\u7528\u4e8e\u8f93\u51faBIOS\u4fe1\u606f\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sudo dmidecode\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0a\u547d\u4ee4\u4f1a\u8f93\u51fa\u5168\u90e8BIOS\u4fe1\u606f\u3002\u4e3a\u4e86\u4fbf\u4e8e\u67e5\u770b\uff0c\u5f80\u5f80\u9700\u8981\u6307\u5b9a\u6240\u9700\u4fe1\u606f\u7684\u7c7b\u522b\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"0 BIOS"}),"\n",(0,d.jsx)(n.li,{children:"1 System"}),"\n",(0,d.jsx)(n.li,{children:"2 Base Board"}),"\n",(0,d.jsx)(n.li,{children:"3 Chassis 4 Processor"}),"\n",(0,d.jsx)(n.li,{children:"5 Memory Controller"}),"\n",(0,d.jsx)(n.li,{children:"6 Memory Module"}),"\n",(0,d.jsx)(n.li,{children:"7 Cache"}),"\n",(0,d.jsx)(n.li,{children:"8 Port Connector"}),"\n",(0,d.jsx)(n.li,{children:"9 System Slots"}),"\n",(0,d.jsx)(n.li,{children:"10 On Board Devices"}),"\n",(0,d.jsx)(n.li,{children:"11 OEM Strings"}),"\n",(0,d.jsx)(n.li,{children:"12 System Configuration Options"}),"\n",(0,d.jsx)(n.li,{children:"13 BIOS Language"}),"\n",(0,d.jsx)(n.li,{children:"14 Group Associations"}),"\n",(0,d.jsx)(n.li,{children:"15 System Event Log"}),"\n",(0,d.jsx)(n.li,{children:"16 Physical Memory Array"}),"\n",(0,d.jsx)(n.li,{children:"17 Memory Device"}),"\n",(0,d.jsx)(n.li,{children:"18 32-bit Memory Error"}),"\n",(0,d.jsx)(n.li,{children:"19 Memory Array Mapped Address"}),"\n",(0,d.jsx)(n.li,{children:"20 Memory Device Mapped Address"}),"\n",(0,d.jsx)(n.li,{children:"21 Built-in Pointing Device"}),"\n",(0,d.jsx)(n.li,{children:"22 Portable Battery"}),"\n",(0,d.jsx)(n.li,{children:"23 System Reset"}),"\n",(0,d.jsx)(n.li,{children:"24 Hardware Security"}),"\n",(0,d.jsx)(n.li,{children:"25 System Power Controls"}),"\n",(0,d.jsx)(n.li,{children:"26 Voltage Probe"}),"\n",(0,d.jsx)(n.li,{children:"27 Cooling Device"}),"\n",(0,d.jsx)(n.li,{children:"28 Temperature Probe"}),"\n",(0,d.jsx)(n.li,{children:"29 Electrical Current Probe"}),"\n",(0,d.jsx)(n.li,{children:"30 Out-of-band Remote Access"}),"\n",(0,d.jsx)(n.li,{children:"31 Boot Integrity Services"}),"\n",(0,d.jsx)(n.li,{children:"32 System Boot"}),"\n",(0,d.jsx)(n.li,{children:"33 64-bit Memory Error"}),"\n",(0,d.jsx)(n.li,{children:"34 Management Device"}),"\n",(0,d.jsx)(n.li,{children:"35 Management Device Component"}),"\n",(0,d.jsx)(n.li,{children:"36 Management Device Threshold Data"}),"\n",(0,d.jsx)(n.li,{children:"37 Memory Channel"}),"\n",(0,d.jsx)(n.li,{children:"38 IPMI Device"}),"\n",(0,d.jsx)(n.li,{children:"39 Power Supply"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u67e5\u770b\u5185\u5b58\u4fe1\u606f\u7684\u547d\u4ee4\u5982\u4e0b\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sudo dmidecode -t 17\n# \u6216\u8005\n$ dmidecode --type 17\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u5176\u4ed6\u4e00\u4e9b\u9009\u9879\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770bBIOS\u4fe1\u606f\n$ sudo dmidecode \u2013t 0\n\n# \u67e5\u770bCPU\u4fe1\u606f\n$ sudo dmidecode -t 4\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dmidecode"}),"\u4e5f\u652f\u6301\u5173\u952e\u8bcd\u67e5\u770b\uff0c\u5173\u952e\u8bcd\u4e0e\u7c7b\u522b\u7684\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"bios 0, 13"}),"\n",(0,d.jsx)(n.li,{children:"system 1, 12, 15, 23, 32"}),"\n",(0,d.jsx)(n.li,{children:"baseboard 2, 10"}),"\n",(0,d.jsx)(n.li,{children:"chassis 3"}),"\n",(0,d.jsx)(n.li,{children:"processor 4"}),"\n",(0,d.jsx)(n.li,{children:"memory 5, 6, 16, 17"}),"\n",(0,d.jsx)(n.li,{children:"cache 7"}),"\n",(0,d.jsx)(n.li,{children:"connector 8"}),"\n",(0,d.jsx)(n.li,{children:"slot 9"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u67e5\u770b\u7cfb\u7edf\u4fe1\u606f\u7684\u547d\u4ee4\u5982\u4e0b\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ sudo dmidecode -t system\n"})}),"\n",(0,d.jsx)(n.h2,{id:"lspci",children:"lspci"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"lspci"}),"\u547d\u4ee4\u5217\u51fa\u672c\u673a\u7684\u6240\u6709PCI\u8bbe\u5907\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ lspci\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u8f93\u51fa\u4fe1\u606f\u7684\u683c\u5f0f\u5982\u4e0b\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"03:00.0 Unassigned class [ff00]: Realtek Semiconductor Co., Ltd. RTS5209 PCI Express Card Reader (rev 01)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8f93\u51fa\u4fe1\u606f\u4e00\u5171\u5206\u6210\u4e09\u4e2a\u5b57\u6bb5\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Field 1\uff1aPCI bus slot \u7684\u7f16\u53f7"}),"\n",(0,d.jsx)(n.li,{children:"Field 2\uff1aPCI slot\u7684\u540d\u5b57"}),"\n",(0,d.jsx)(n.li,{children:"Field 3\uff1a\u8bbe\u5907\u540d\u548c\u5382\u5546\u540d"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u60f3\u67e5\u770b\u66f4\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ lspci -vmm\n"})}),"\n",(0,d.jsx)(n.h2,{id:"lsusb",children:"lsusb"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"lsusb"}),"\u547d\u4ee4\u7528\u4e8e\u64cd\u4f5cUSB\u7aef\u53e3\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4e0b\u9762\u547d\u4ee4\u5217\u51fa\u672c\u673a\u6240\u6709USB\u7aef\u53e3\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ lsusb\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5b83\u7684\u8f93\u51fa\u683c\u5f0f\u5982\u4e0b\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Bus 002 Device 003: ID 0781:5567 SanDisk Corp. Cruzer Blade\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5404\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\u5982\u4e0b\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Bus 002 : bus\u7f16\u53f7"}),"\n",(0,d.jsx)(n.li,{children:"Device 003\uff1abus 002\u8fde\u63a5\u7684\u7b2c\u4e09\u4e2a\u8bbe\u5907"}),"\n",(0,d.jsx)(n.li,{children:"ID 0781:5567\uff1a\u5f53\u524d\u8bbe\u5907\u7684\u7f16\u53f7\uff0c\u5192\u53f7\u524d\u662f\u5382\u5546\u7f16\u53f7\uff0c\u5192\u53f7\u540e\u662f\u8bbe\u5907\u7f16\u53f7"}),"\n",(0,d.jsx)(n.li,{children:"SanDisk Corp. Cruzer Blade\uff1a\u5382\u5546\u548c\u8bbe\u5907\u540d"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u627e\u51fa\u672c\u673a\u6709\u591a\u5c11\u4e2aUSB\u63a5\u53e3\u53ef\u7528\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ find /dev/bus/\n/dev/bus/\n/dev/bus/usb\n/dev/bus/usb/002\n/dev/bus/usb/002/006\n/dev/bus/usb/002/005\n/dev/bus/usb/002/004\n/dev/bus/usb/002/002\n/dev/bus/usb/002/001\n/dev/bus/usb/001\n/dev/bus/usb/001/007\n/dev/bus/usb/001/003\n/dev/bus/usb/001/002\n/dev/bus/usb/001/001\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u67e5\u770b\u67d0\u4e2aUSB\u8bbe\u5907\u7684\u8be6\u7ec6\u60c5\u51b5\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ lsusb -D /dev/bus/usb/002/005\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u67e5\u770b\u6240\u6709\u8bbe\u5907\u7684\u8be6\u7ec6\u60c5\u51b5\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ lsusb -v\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u67e5\u770bUSB\u7aef\u53e3\u7684\u7248\u672c\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ lsusb -v | grep -i bcdusb\n"})})]})}function t(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>c});var d=s(67294);const l={},i=d.createContext(l);function c(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);