"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9808],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||l;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(83117),a=(t(67294),t(3905));const l={sidebar_position:1},i="Mac",o={unversionedId:"index",id:"index",title:"Mac",description:"\u5237\u65b0DNS",source:"@site/notes/mac/index.md",sourceDirName:".",slug:"/",permalink:"/notes/mac/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar"},s={},c=[{value:"\u5237\u65b0DNS",id:"\u5237\u65b0dns",level:3},{value:"Mac\u7ec8\u7aef\u5f55\u5c4f",id:"mac\u7ec8\u7aef\u5f55\u5c4f",level:3},{value:"\u5728touch bar \u4e0a\u663e\u793a\u6b4c\u8bcd-LyricsX",id:"\u5728touch-bar-\u4e0a\u663e\u793a\u6b4c\u8bcd-lyricsx",level:3},{value:"mtmr \u914d\u7f6e",id:"mtmr-\u914d\u7f6e",level:3}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mac"},"Mac"),(0,a.kt)("h3",{id:"\u5237\u65b0dns"},"\u5237\u65b0DNS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dscacheutil -flushcache\n")),(0,a.kt)("h3",{id:"mac\u7ec8\u7aef\u5f55\u5c4f"},"Mac\u7ec8\u7aef\u5f55\u5c4f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# https://github.com/icholy/ttygif\nbrew install ttygif\nttyrec myrecording\n\n# On OSX optionally you can set a -f flag which will bypass cropping which is needed for terminal apps which aren't full screen. Both standard Terminal and iTerm apps are supported.\nttygif myrecording -f\n")),(0,a.kt)("h3",{id:"\u5728touch-bar-\u4e0a\u663e\u793a\u6b4c\u8bcd-lyricsx"},"\u5728touch bar \u4e0a\u663e\u793a\u6b4c\u8bcd-LyricsX"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/ddddxxx/LyricsX"},"https://github.com/ddddxxx/LyricsX"))),(0,a.kt)("h3",{id:"mtmr-\u914d\u7f6e"},"mtmr \u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[{\n        "type": "dnd",\n        "align": "left",\n        "width": 38\n    },\n    {\n        "type": "brightnessDown",\n        "width": 32,\n        "bordered": false,\n        "align": "left"\n    },\n    {\n        "type": "brightnessUp",\n        "width": 32,\n        "bordered": false,\n        "align": "left"\n    },\n    {\n        "type": "dock",\n        "align": "left",\n        "width": 420\n    },\n    {\n        "type": "group",\n        "align": "right",\n        "bordered": false,\n        "title": "Media",\n        "items": [{\n                "type": "close",\n                "bordered": false,\n                "align": "left"\n            },\n            {\n                "type": "brightnessDown",\n                "bordered": false,\n                "align": "left",\n                "width": 36\n            },\n            {\n                "type": "brightness",\n                "width": 200,\n                "align": "left",\n                "image": {\n                    "base64": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURffLOPfLNyaSVzUAAAACdFJOU/kBxOqnWgAAAbJJREFUSMfVljtyhDAQBVulQCFH4CgcDR1NR9ERFBKoeA5GfGddtkNvwFINFKP5tED22+Zxwviv6QVKfIEc/iNoF5gkpLIeYI8SUp4PsAUJiekADQntF6isQjvxCTrhAJlFqMMBeIH9BMsD7DAb2BhvYbIyNAOCZIWqYKGTpDZJFQu9EKVd44RxQRq3IrULWD62C8wSssWUZEsR0k6wcDOrJZmoBpMKI+s5qkBQCQOUJADVOECdOsDS0gDbsgHMfT4rVwHSrZQFIN5ABka8BgDgAeZ+BztBgvUEnSgVlhNsTFJjvoF5HAZorBpdYKAiSRbqNyBIUr6AjZMdPwO72R40MElS+wZUWA+wQ6LAYkFvdIhkmA+wQSDDdIAGAZ6A34H0x0fca11gBZZsIHSIfnE/5+NjCn/OuiuUB+/aunZwDeNayjXdTpDN0wlY+r1PfWu75nfj8RogN2JuCN2Y5qgMwTI0wGPUnQw6Qarx0sVNKA5Mn6VUL22lIbZoYitDbPmlvocc9Umfl2D7adz1reC3pF8av4m+DCenp/ndZuG3E7fhuC3pH2+vnz8V3MfE+bnxBTXuuIMTrLWHAAAAAElFTkSuQmCC"\n                }\n            },\n            {\n                "type": "brightnessUp",\n                "bordered": false,\n                "align": "left",\n                "width": 36\n            },\n            {\n                "type": "volumeDown",\n                "bordered": false,\n                "align": "left",\n                "width": 36\n            },\n            {\n                "type": "volume",\n                "width": 200,\n                "align": "left"\n            },\n            {\n                "type": "volumeUp",\n                "bordered": false,\n                "align": "left",\n                "width": 36\n            },\n            {\n                "type": "previous",\n                "bordered": false,\n                "align": "center"\n            },\n            {\n                "type": "play",\n                "bordered": false,\n                "align": "center"\n            },\n            {\n                "type": "next",\n                "bordered": false,\n                "align": "center"\n            }\n        ]\n    },\n    {\n        "type": "displaySleep",\n        "width": 20,\n        "align": "right",\n        "bordered": false\n    },\n    {\n        "type": "weather",\n        "align": "right",\n        "icon_type": "images",\n        "api_key": "ca93a0bb8cdb428552660d83249e4bc9",\n        "bordered": false\n    },\n    {\n        "type": "play",\n        "align": "right",\n        "width": 38\n    },\n    // {\n    //     "type": "volumeDown",\n    //     "bordered": false,\n    //     "align": "right",\n    //     "width": 28\n    // },\n    // {\n    //     "type": "volumeUp",\n    //     "bordered": false,\n    //     "align": "right",\n    //     "width": 28\n    // },\n    {\n        "type": "mute",\n        "bordered": false,\n        "align": "right"\n    },\n    // {\n    //     "type": "battery",\n    //     "align": "right",\n    //     "bordered": false\n    // },\n    // {\n    //     "type": "timeButton",\n    //     "formatTemplate": "HH:mm",\n    //     "align": "right",\n    //     "bordered": false,\n    //     "longAction": "shellScript",\n    //     "longExecutablePath": "/usr/bin/pmset",\n    //     "longShellArguments": ["sleepnow"]\n    // }\n]\n')))}p.isMDXComponent=!0}}]);