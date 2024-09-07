"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[2753],{8031:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(4848),r=t(8453);const i={},l="ffmpeg",c={id:"ffpmeg",title:"ffmpeg",description:"\u89c6\u9891\u8f6c\u56fe\u7247",source:"@site/notes/linux/ffpmeg.md",sourceDirName:".",slug:"/ffpmeg",permalink:"/notes/linux/ffpmeg",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"asdf",permalink:"/notes/linux/asdf"},next:{title:"frp",permalink:"/notes/linux/frp"}},o={},a=[{value:"\u89c6\u9891\u8f6c\u56fe\u7247",id:"\u89c6\u9891\u8f6c\u56fe\u7247",level:2},{value:"\u56fe\u7247\u8f6c\u89c6\u9891",id:"\u56fe\u7247\u8f6c\u89c6\u9891",level:2},{value:"\u622a\u56fe",id:"\u622a\u56fe",level:2},{value:"\u751f\u6210gif\u52a8\u56fe",id:"\u751f\u6210gif\u52a8\u56fe",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ffmpeg",children:"ffmpeg"})}),"\n",(0,s.jsx)(n.h2,{id:"\u89c6\u9891\u8f6c\u56fe\u7247",children:"\u89c6\u9891\u8f6c\u56fe\u7247"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'current_time=$(date "+%Y-%m-%d %H:%M:%S")\necho $current_time\nffmpeg -i some.mp4 -t 1 -s 640x360 -r 15 pic/op_%04d.jpg\n\n-t \u9700\u8981\u8f6c\u6362\u7684\u89c6\u9891\u65f6\u957f\n-s \u8bbe\u7f6e\u76ee\u6807\u56fe\u7247\u7684\u5206\u8fa8\u7387\n-r \u5e27\u7387\uff0c\u6bcf\u79d2\u4ea7\u751f\u56fe\u7247\u7684\u6570\u91cf\nop_%04d.jpg \u751f\u6210\u56fe\u7247\u6587\u4ef6\u7684\u540d\u79f0\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u56fe\u7247\u8f6c\u89c6\u9891",children:"\u56fe\u7247\u8f6c\u89c6\u9891"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ffmpeg -f image2 -i pic/op_%04d.jpg -r 25 output_$current_time.mp4\n\n-f \u6e90\u56fe\u7247\u7684\u683c\u5f0f\uff0cimage2\u4e0d\u662fimage\n-i \u8f93\u5165\u6587\u4ef6\u5e8f\u5217\nop_%04d.jpg \u6e90\u56fe\u7247\u7684\u540d\u79f0\n-r \u76ee\u6807\u89c6\u9891\u7684\u5e27\u7387\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u622a\u56fe",children:"\u622a\u56fe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ffmpeg -i some.mp4 -y -f image2 -ss 00:00:03 -vframes 1 -s 640x360 1.jpg\n\n-y \u5f3a\u5236\u8986\u76d6\u5df2\u6709\u6587\u4ef6\n-f \u6307\u5b9a\u56fe\u7247\u683c\u5f0f\n-ss \u5f00\u59cb\u622a\u56fe\u65f6\u523b\n-vframes \u622a\u56fe\u56fe\u7247\u6570\u91cf 1\uff1a\u4e00\u5f20\u56fe\uff0840ms\uff09\n-s \u6307\u5b9a\u56fe\u7247\u5206\u8fa8\u7387\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u751f\u6210gif\u52a8\u56fe",children:"\u751f\u6210gif\u52a8\u56fe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ffmpeg -i some.mp4 -t 5 -r 3 image1.gif\n\n-t 5 \u5171\u622a\u56fe5s\n-r 3 \u6bcf\u79d23fps\nimage1.gif \u52a8\u56fe\u540d\u79f0\n"})})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(6540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);