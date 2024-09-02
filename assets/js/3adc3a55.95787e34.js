"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[5270],{387:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var t=a(4848),s=a(8453);const l={},d="adb",o={id:"adb",title:"adb",description:"\u5e38\u7528\u547d\u4ee4",source:"@site/notes/linux/adb.md",sourceDirName:".",slug:"/adb",permalink:"/notes/linux/adb",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ascii",permalink:"/notes/linux/ascii"},next:{title:"asdf",permalink:"/notes/linux/asdf"}},r={},i=[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u5f00\u542f\u8c03\u8bd5",id:"\u5f00\u542f\u8c03\u8bd5",level:3},{value:"authorized",id:"authorized",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"adb",children:"adb"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# adb commands\n\nadb devices #\u67e5\u770b\u8fde\u63a5\u8bbe\u5907\n\nadb start-server \u542f\u52a8adb \u670d\u52a1\uff0c\u57fa\u672c\u4e0d\u4f1a\u7528\u5230\uff0c\u56e0\u4e3a\u53ea\u8981\u8bbe\u5907\u8fde\u63a5\u6b63\u786e\uff0c\u4f1a\u81ea\u52a8\u542f\u52a8adb server\n\nadb kill-server \u505c\u6b62adb server\n\nadb -s cf27456f shell # \u6307\u5b9a\u8fde\u63a5\u8bbe\u5907\u4f7f\u7528\u547d\u4ee4\n\nadb install test.apk # \u5b89\u88c5\u5e94\u7528\n\nadb install -r demo.apk #\u5b89\u88c5apk \u5230sd \u5361\uff1a\n\nadb uninstall cn.com.test.mobile #\u5378\u8f7d\u5e94\u7528\uff0c\u9700\u8981\u6307\u5b9a\u5305\n\nadb uninstall -k cn.com.test.mobile #\u5378\u8f7dapp \u4f46\u4fdd\u7559\u6570\u636e\u548c\u7f13\u5b58\u6587\u4ef6\n\nadb shell pm list packages #\u5217\u51fa\u624b\u673a\u88c5\u7684\u6240\u6709app \u7684\u5305\u540d\n\nadb shell pm list packages -s \u5217\u51fa\u7cfb\u7edf\u5e94\u7528\u7684\u6240\u6709\u5305\u540d\n\nadb shell pm list packages -3 #\u5217\u51fa\u9664\u4e86\u7cfb\u7edf\u5e94\u7528\u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u5305\u540d\n\nadb shell pm clear cn.com.test.mobile #\u6e05\u9664\u5e94\u7528\u6570\u636e\u4e0e\u7f13\u5b58\n\nadb shell am start -ncn.com.test.mobile/.ui.SplashActivity #\u542f\u52a8\u5e94\u7528\n\nadb shell dumpsys package #\u5305\u4fe1\u606fPackage Information\n\nadb shell dumpsys meminfo #\u5185\u5b58\u4f7f\u7528\u60c5\u51b5Memory Usage\n\nadb -s 192.168.32.10:6666 shell pm list packages -3"|cut -f 2 -d ": #\u5217\u51fa\u8fd0\u884c\u7684app\n\nadb shell am force-stop cn.com.test.mobile #\u5f3a\u5236\u505c\u6b62\u5e94\u7528\n\nadb logcat #\u67e5\u770b\u65e5\u5fd7\n\nadb logcat -c #\u6e05\u9664log \u7f13\u5b58\n\nadb reboot #\u91cd\u542f\n\nadb get-serialno #\u83b7\u53d6\u5e8f\u5217\u53f7\n\nadb shell getprop ro.build.version.release #\u67e5\u770bAndroid \u7cfb\u7edf\u7248\u672c\n\nadb shell top -s 10 #\u67e5\u770b\u5360\u7528\u5185\u5b58\u524d10 \u7684app\n\nadb push <local> <remote> #\u4ece\u672c\u5730\u590d\u5236\u6587\u4ef6\u5230\u8bbe\u5907\n\nadb pull <remote> <local> #\u4ece\u8bbe\u5907\u590d\u5236\u6587\u4ef6\u5230\u672c\u5730\n\nadb bugreport #\u67e5\u770bbug \u62a5\u544a\n\nadb help #\u67e5\u770bADB \u5e2e\u52a9\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5f00\u542f\u8c03\u8bd5",children:"\u5f00\u542f\u8c03\u8bd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# USB \u8fde\u63a5\u8c03\u8bd5\nadb -s some_device_id tcpip 6666\n\n# android 11 \u5f00\u542f\u65e0\u7ebf\u8c03\u8bd5\n# \u5f00\u53d1\u8005\u6a21\u5f0f\u4e2d \u9009\u62e9\u65e0\u7ebf\u8c03\u8bd5\n# \u9009\u62e9 \u914d\u5bf9\u7801\u8fde\u63a5 port\u968f\u673a \u6ce8\u610f\u770b\u8bbe\u5907\u663e\u793a\nadb pair host:port\n\n# \u67e5\u770b\u8bbe\u5907\u663e\u793a\u7684\u7aef\u53e3\nadb connect host:port\n"})}),"\n",(0,t.jsx)(n.h3,{id:"authorized",children:"authorized"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# need root\ncat ~/.android/adbkey.pub\n# add to\n/data/misc/adb/adb_keys\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>o});var t=a(6540);const s={},l=t.createContext(s);function d(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);