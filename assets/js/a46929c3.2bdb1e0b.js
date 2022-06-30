"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8235],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var o=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,l=function(e,t){if(null==e)return{};var r,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=l,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return r?o.createElement(y,a(a({ref:t},i),{},{components:r})):o.createElement(y,a({ref:t},i))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,a=new Array(n);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var o=r(7462),l=(r(7294),r(3905));const n={sidebar_position:13},a="chrome",c={unversionedId:"linux/chrome",id:"linux/chrome",title:"chrome",description:"web scraper",source:"@site/docs/linux/chrome.md",sourceDirName:"linux",slug:"/linux/chrome",permalink:"/docs/linux/chrome",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/chrome.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"npm yarn",permalink:"/docs/linux/yarn"},next:{title:"adb",permalink:"/docs/linux/adb"}},s={},p=[{value:"web scraper",id:"web-scraper",level:3},{value:"chrome devtools",id:"chrome-devtools",level:3}],i={toc:p};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"chrome"},"chrome"),(0,l.kt)("h3",{id:"web-scraper"},"web scraper"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn"},"https://chrome.google.com/webstore/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"_id":"test","startUrl":["https://list.jd.com/list.html?cat=9987,653,655","https://list.jd.com/list.html?cat=9987,653,655&page=2&s=58&click=0"],"selectors":[{"delay":0,"id":"name","multiple":true,"parentSelectors":["_root"],"selector":"#J_goodsList > ul > li","type":"SelectorElement"},{"delay":0,"id":"sku_name","multiple":false,"parentSelectors":["name"],"regex":"","selector":"a em","type":"SelectorText"},{"delay":0,"id":"price","multiple":false,"parentSelectors":["name"],"regex":"","selector":" div > div.p-price > strong > i","type":"SelectorText"},{"delay":0,"id":"comments","multiple":false,"parentSelectors":["name"],"regex":"","selector":".p-commit strong a","type":"SelectorText"},{"delay":0,"id":"shop","multiple":false,"parentSelectors":["name"],"regex":"","selector":".p-shop span a","type":"SelectorText"}]}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"_id":"tianmao","startUrl":["https://list.tmall.com/search_product.htm?spm=a220m.1000858.0.0.219b2a680geXJ0&s=120&q=%CA%D6%BB%FA&sort=s&style=g&from=mallfp..pc_1_searchbutton&active=1&type=pc#J_Filter"],"selectors":[{"delay":0,"id":"sku","multiple":true,"parentSelectors":["_root"],"selector":"#J_ItemList .product","type":"SelectorElement"},{"delay":0,"id":"name","multiple":false,"parentSelectors":["sku"],"regex":"","selector":".productTitle a","type":"SelectorText"},{"delay":0,"id":"price","multiple":false,"parentSelectors":["sku"],"regex":"","selector":".productPrice em","type":"SelectorText"},{"delay":0,"id":"shop","multiple":false,"parentSelectors":["sku"],"regex":"","selector":"a.productShop-name","type":"SelectorText"},{"delay":0,"id":"sales","multiple":false,"parentSelectors":["sku"],"regex":"","selector":"span em","type":"SelectorText"},{"delay":0,"id":"comments","multiple":false,"parentSelectors":["sku"],"regex":"","selector":"span a[data-p]","type":"SelectorText"}]}\n')),(0,l.kt)("h3",{id:"chrome-devtools"},"chrome devtools"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'var _path = "//div//text()"\nvar result = $x(_path).map(function(i){return i.textContent} ); copy(result);\n')))}u.isMDXComponent=!0}}]);