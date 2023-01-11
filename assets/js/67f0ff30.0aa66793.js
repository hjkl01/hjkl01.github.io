"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[5947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(y,a(a({ref:t},i),{},{components:n})):r.createElement(y,a({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const l={},a="chrome",c={unversionedId:"chrome",id:"chrome",title:"chrome",description:"web scraper",source:"@site/notes/python/chrome.md",sourceDirName:".",slug:"/chrome",permalink:"/notes/python/chrome",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"celery",permalink:"/notes/python/celery"},next:{title:"database",permalink:"/notes/python/databases"}},s={},p=[{value:"web scraper",id:"web-scraper",level:3},{value:"chrome devtools",id:"chrome-devtools",level:3}],i={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chrome"},"chrome"),(0,o.kt)("h3",{id:"web-scraper"},"web scraper"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn"},"https://chrome.google.com/webstore/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": "test",\n  "startUrl": [\n    "https://list.jd.com/list.html?cat=9987,653,655",\n    "https://list.jd.com/list.html?cat=9987,653,655&page=2&s=58&click=0"\n  ],\n  "selectors": [\n    {\n      "delay": 0,\n      "id": "name",\n      "multiple": true,\n      "parentSelectors": ["_root"],\n      "selector": "#J_goodsList > ul > li",\n      "type": "SelectorElement"\n    },\n    {\n      "delay": 0,\n      "id": "sku_name",\n      "multiple": false,\n      "parentSelectors": ["name"],\n      "regex": "",\n      "selector": "a em",\n      "type": "SelectorText"\n    },\n    {\n      "delay": 0,\n      "id": "price",\n      "multiple": false,\n      "parentSelectors": ["name"],\n      "regex": "",\n      "selector": " div > div.p-price > strong > i",\n      "type": "SelectorText"\n    },\n    {\n      "delay": 0,\n      "id": "comments",\n      "multiple": false,\n      "parentSelectors": ["name"],\n      "regex": "",\n      "selector": ".p-commit strong a",\n      "type": "SelectorText"\n    },\n    {\n      "delay": 0,\n      "id": "shop",\n      "multiple": false,\n      "parentSelectors": ["name"],\n      "regex": "",\n      "selector": ".p-shop span a",\n      "type": "SelectorText"\n    }\n  ]\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": "tianmao",\n  "startUrl": [\n    "https://list.tmall.com/search_product.htm?spm=a220m.1000858.0.0.219b2a680geXJ0&s=120&q=%CA%D6%BB%FA&sort=s&style=g&from=mallfp..pc_1_searchbutton&active=1&type=pc#J_Filter"\n  ],\n  "selectors": [\n    {\n      "delay": 0,\n      "id": "sku",\n      "multiple": true,\n      "parentSelectors": ["_root"],\n      "selector": "#J_ItemList .product",\n      "type": "SelectorElement"\n    },\n    {\n      "delay": 0,\n      "id": "name",\n      "multiple": false,\n      "parentSelectors": ["sku"],\n      "regex": "",\n      "selector": ".productTitle a",\n      "type": "SelectorText"\n    },\n    {\n      "delay": 0,\n      "id": "price",\n      "multiple": false,\n      "parentSelectors": ["sku"],\n      "regex": "",\n      "selector": ".productPrice em",\n      "type": "SelectorText"\n    },\n    {\n      "delay": 0,\n      "id": "shop",\n      "multiple": false,\n      "parentSelectors": ["sku"],\n      "regex": "",\n      "selector": "a.productShop-name",\n      "type": "SelectorText"\n    },\n    {\n      "delay": 0,\n      "id": "sales",\n      "multiple": false,\n      "parentSelectors": ["sku"],\n      "regex": "",\n      "selector": "span em",\n      "type": "SelectorText"\n    },\n    {\n      "delay": 0,\n      "id": "comments",\n      "multiple": false,\n      "parentSelectors": ["sku"],\n      "regex": "",\n      "selector": "span a[data-p]",\n      "type": "SelectorText"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"chrome-devtools"},"chrome devtools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"var _path = '//div//text()'\nvar result = $x(_path).map(function(i){return i.textContent} ); copy(result);\n")))}m.isMDXComponent=!0}}]);