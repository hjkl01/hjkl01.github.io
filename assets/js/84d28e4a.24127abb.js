"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[2580],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7803:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(3117),o=(t(7294),t(3905));const i={},a="selenium",p={unversionedId:"spider",id:"spider",title:"selenium",description:"",source:"@site/notes/python/spider.md",sourceDirName:".",slug:"/spider",permalink:"/notes/python/spider",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"settings.py",permalink:"/notes/python/settings"}},s={},c=[],u={toc:c};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"selenium"},"selenium"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import random\nfrom selenium import webdriver\nfrom time import sleep\nfrom bs4 import BeautifulSoup as BS\n\n\noptions = webdriver.ChromeOptions()\nUA = \'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36\'\noptions.add_argument(f\'user-agent={UA}\')\n\noptions.add_experimental_option("excludeSwitches", ["enable-automation"])\noptions.add_experimental_option(\'useAutomationExtension\', False)\n\n# \u6ca1\u6709\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u7684\u8bdd\u9700\u8981\u586b\u5199Chromedriver\u7684\u8def\u5f84\uff1awebdriver.Chrome(executable_path="***")\ndriver = webdriver.Chrome(options=options)\ndriver.maximize_window()\n\n# \u53bb\u6389window.navigator.webdriver\u5b57\u6bb5\uff0c\u9632\u6b62\u88ab\u68c0\u6d4b\u51fa\u662f\u4f7f\u7528selenium\ndriver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {\n  "source": """\n    Object.defineProperty(navigator, \'webdriver\', {\n      get: () => undefined\n    })\n  """\n})\n')))}l.isMDXComponent=!0}}]);