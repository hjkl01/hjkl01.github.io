"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[876],{35817:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var n=a(44730),r=a(52263),c=a(74902),i=a(87462),l=a(4942),o=a(97685),s=a(71002),m=a(94184),u=a.n(m),d=a(67294),f=a(53124),p=a(88258),g=a(92820),v=a(25378),h=a(99532),y=a(11382),E=a(24308),x=a(21584),Z=a(96159),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},C=function(e,t){var a,n=e.prefixCls,r=e.children,c=e.actions,o=e.extra,s=e.className,m=e.colStyle,p=b(e,["prefixCls","children","actions","extra","className","colStyle"]),g=(0,d.useContext)(O),v=g.grid,h=g.itemLayout,y=(0,d.useContext)(f.E_).getPrefixCls,E=y("list",n),C=c&&c.length>0&&d.createElement("ul",{className:"".concat(E,"-item-action"),key:"actions"},c.map((function(e,t){return d.createElement("li",{key:"".concat(E,"-item-action-").concat(t)},e,t!==c.length-1&&d.createElement("em",{className:"".concat(E,"-item-action-split")}))}))),N=v?"div":"li",S=d.createElement(N,(0,i.Z)({},p,v?{}:{ref:t},{className:u()("".concat(E,"-item"),(0,l.Z)({},"".concat(E,"-item-no-flex"),!("vertical"===h?o:(d.Children.forEach(r,(function(e){"string"==typeof e&&(a=!0)})),!(a&&d.Children.count(r)>1)))),s)}),"vertical"===h&&o?[d.createElement("div",{className:"".concat(E,"-item-main"),key:"content"},r,C),d.createElement("div",{className:"".concat(E,"-item-extra"),key:"extra"},o)]:[r,C,(0,Z.Tm)(o,{key:"extra"})]);return v?d.createElement(x.Z,{ref:t,flex:1,style:m},S):S},N=(0,d.forwardRef)(C);N.Meta=function(e){var t=e.prefixCls,a=e.className,n=e.avatar,r=e.title,c=e.description,l=b(e,["prefixCls","className","avatar","title","description"]),o=(0,(0,d.useContext)(f.E_).getPrefixCls)("list",t),s=u()("".concat(o,"-item-meta"),a),m=d.createElement("div",{className:"".concat(o,"-item-meta-content")},r&&d.createElement("h4",{className:"".concat(o,"-item-meta-title")},r),c&&d.createElement("div",{className:"".concat(o,"-item-meta-description")},c));return d.createElement("div",(0,i.Z)({},l,{className:s}),n&&d.createElement("div",{className:"".concat(o,"-item-meta-avatar")},n),(r||c)&&m)};const S=N;var w=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},O=d.createContext({});O.Consumer;function k(e){var t,a=e.pagination,n=void 0!==a&&a,r=e.prefixCls,m=e.bordered,x=void 0!==m&&m,Z=e.split,b=void 0===Z||Z,C=e.className,N=e.children,S=e.itemLayout,k=e.loadMore,j=e.grid,P=e.dataSource,z=void 0===P?[]:P,_=e.size,M=e.header,I=e.footer,L=e.loading,T=void 0!==L&&L,H=e.rowKey,K=e.renderItem,A=e.locale,D=w(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),J=n&&"object"===(0,s.Z)(n)?n:{},R=d.useState(J.defaultCurrent||1),W=(0,o.Z)(R,2),q=W[0],B=W[1],F=d.useState(J.defaultPageSize||10),G=(0,o.Z)(F,2),Q=G[0],U=G[1],V=d.useContext(f.E_),X=V.getPrefixCls,Y=V.renderEmpty,$=V.direction,ee={},te=function(e){return function(t,a){B(t),U(a),n&&n[e]&&n[e](t,a)}},ae=te("onChange"),ne=te("onShowSizeChange"),re=X("list",r),ce=T;"boolean"==typeof ce&&(ce={spinning:ce});var ie=ce&&ce.spinning,le="";switch(_){case"large":le="lg";break;case"small":le="sm"}var oe=u()(re,(t={},(0,l.Z)(t,"".concat(re,"-vertical"),"vertical"===S),(0,l.Z)(t,"".concat(re,"-").concat(le),le),(0,l.Z)(t,"".concat(re,"-split"),b),(0,l.Z)(t,"".concat(re,"-bordered"),x),(0,l.Z)(t,"".concat(re,"-loading"),ie),(0,l.Z)(t,"".concat(re,"-grid"),!!j),(0,l.Z)(t,"".concat(re,"-something-after-last-item"),!!(k||n||I)),(0,l.Z)(t,"".concat(re,"-rtl"),"rtl"===$),t),C),se=(0,i.Z)((0,i.Z)((0,i.Z)({},{current:1,total:0}),{total:z.length,current:q,pageSize:Q}),n||{}),me=Math.ceil(se.total/se.pageSize);se.current>me&&(se.current=me);var ue=n?d.createElement("div",{className:"".concat(re,"-pagination")},d.createElement(h.Z,(0,i.Z)({},se,{onChange:ae,onShowSizeChange:ne}))):null,de=(0,c.Z)(z);n&&z.length>(se.current-1)*se.pageSize&&(de=(0,c.Z)(z).splice((se.current-1)*se.pageSize,se.pageSize));var fe=Object.keys(j||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),pe=(0,v.Z)(fe),ge=d.useMemo((function(){for(var e=0;e<E.c4.length;e+=1){var t=E.c4[e];if(pe[t])return t}}),[pe]),ve=d.useMemo((function(){if(j){var e=ge&&j[ge]?j[ge]:j.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null==j?void 0:j.column,ge]),he=ie&&d.createElement("div",{style:{minHeight:53}});if(de.length>0){var ye=de.map((function(e,t){return function(e,t){return K?((a="function"==typeof H?H(e):H?e[H]:e.key)||(a="list-item-".concat(t)),ee[t]=a,K(e,t)):null;var a}(e,t)})),Ee=d.Children.map(ye,(function(e,t){return d.createElement("div",{key:ee[t],style:ve},e)}));he=j?d.createElement(g.Z,{gutter:j.gutter},Ee):d.createElement("ul",{className:"".concat(re,"-items")},ye)}else N||ie||(he=function(e,t){return d.createElement("div",{className:"".concat(e,"-empty-text")},A&&A.emptyText||t("List"))}(re,Y||p.Z));var xe=se.position||"bottom",Ze=d.useMemo((function(){return{grid:j,itemLayout:S}}),[JSON.stringify(j),S]);return d.createElement(O.Provider,{value:Ze},d.createElement("div",(0,i.Z)({className:oe},D),("top"===xe||"both"===xe)&&ue,M&&d.createElement("div",{className:"".concat(re,"-header")},M),d.createElement(y.Z,(0,i.Z)({},ce),he,N),I&&d.createElement("div",{className:"".concat(re,"-footer")},I),k||("bottom"===xe||"both"===xe)&&ue))}k.Item=S;const j=k;var P=a(84573),z=a(86871),_=a(73453);a(11207);const M=()=>{const[e,t]=(0,d.useState)([]),a=()=>{fetch("https://news.hjkl01.cn/api/news/reload/").then((async e=>e.json())).then((a=>{t(e.concat(a)),P.ZP.success(a.length+" more items loaded!")}))};(0,d.useEffect)((()=>{a()}),[]);return d.createElement("div",{style:{width:"100%",textAlign:"center"}},d.createElement(j,{grid:{gutter:30,column:10},size:"large"},d.createElement(_.Z,{data:e,height:1e3,itemHeight:100,itemKey:"email",onScroll:e=>{e.currentTarget.scrollHeight-e.currentTarget.scrollTop==1e3&&a()}},(e=>d.createElement(j.Item,{extra:d.createElement(z.C,{src:e.website})},d.createElement(j.Item.Meta,{avatar:d.createElement(z.C,{src:e.img_url}),title:d.createElement("a",{href:e.url},e.title),description:e.website}),d.createElement("div",null,e.hot_score))))))};function I(){const{siteConfig:e}=(0,r.Z)();return d.createElement(n.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},d.createElement(M,null))}},11207:()=>{}}]);