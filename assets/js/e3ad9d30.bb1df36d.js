"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[876],{74134:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ae});var n=r(44730),a=r(52263),c=r(52405),o=r(83117),l=r(91189),i=r(19267),s=r(95815),u=r(94184),f=r.n(u),m=r(67294),p=r(53124),d=r(88258),v=r(37193),g=r(24308),y=r(93355);const h=(0,m.createContext)({});var x=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};(0,y.b)("top","middle","bottom","stretch"),(0,y.b)("start","end","center","space-around","space-between","space-evenly");const Z=m.forwardRef((function(e,t){var r,n=e.prefixCls,a=e.justify,c=e.align,u=e.className,d=e.style,y=e.children,Z=e.gutter,b=void 0===Z?0:Z,E=e.wrap,O=x(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=m.useContext(p.E_),w=C.getPrefixCls,N=C.direction,S=m.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),j=(0,i.Z)(S,2),P=j[0],z=j[1],k=(0,v.Z)(),_=m.useRef(b);m.useEffect((function(){var e=g.ZP.subscribe((function(e){var t=_.current||0;(!Array.isArray(t)&&"object"===(0,s.Z)(t)||Array.isArray(t)&&("object"===(0,s.Z)(t[0])||"object"===(0,s.Z)(t[1])))&&z(e)}));return function(){return g.ZP.unsubscribe(e)}}),[]);var I,R=w("row",n),T=(I=[void 0,void 0],(Array.isArray(b)?b:[b,void 0]).forEach((function(e,t){if("object"===(0,s.Z)(e))for(var r=0;r<g.c4.length;r++){var n=g.c4[r];if(P[n]&&void 0!==e[n]){I[t]=e[n];break}}else I[t]=e})),I),M=f()(R,(r={},(0,l.Z)(r,"".concat(R,"-no-wrap"),!1===E),(0,l.Z)(r,"".concat(R,"-").concat(a),a),(0,l.Z)(r,"".concat(R,"-").concat(c),c),(0,l.Z)(r,"".concat(R,"-rtl"),"rtl"===N),r),u),L={},A=null!=T[0]&&T[0]>0?T[0]/-2:void 0,H=null!=T[1]&&T[1]>0?T[1]/-2:void 0;if(A&&(L.marginLeft=A,L.marginRight=A),k){var W=(0,i.Z)(T,2);L.rowGap=W[1]}else H&&(L.marginTop=H,L.marginBottom=H);var B=(0,i.Z)(T,2),F=B[0],G=B[1],D=m.useMemo((function(){return{gutter:[F,G],wrap:E,supportFlexGap:k}}),[F,G,E,k]);return m.createElement(h.Provider,{value:D},m.createElement("div",(0,o.Z)({},O,{className:M,style:(0,o.Z)((0,o.Z)({},L),d),ref:t}),y))}));var b=r(25378),E=r(99532),O=r(11382),C=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var w=["xs","sm","md","lg","xl","xxl"];const N=m.forwardRef((function(e,t){var r,n=m.useContext(p.E_),a=n.getPrefixCls,c=n.direction,i=m.useContext(h),u=i.gutter,d=i.wrap,v=i.supportFlexGap,g=e.prefixCls,y=e.span,x=e.order,Z=e.offset,b=e.push,E=e.pull,O=e.className,N=e.children,S=e.flex,j=e.style,P=C(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),z=a("col",g),k={};w.forEach((function(t){var r,n={},a=e[t];"number"==typeof a?n.span=a:"object"===(0,s.Z)(a)&&(n=a||{}),delete P[t],k=(0,o.Z)((0,o.Z)({},k),(r={},(0,l.Z)(r,"".concat(z,"-").concat(t,"-").concat(n.span),void 0!==n.span),(0,l.Z)(r,"".concat(z,"-").concat(t,"-order-").concat(n.order),n.order||0===n.order),(0,l.Z)(r,"".concat(z,"-").concat(t,"-offset-").concat(n.offset),n.offset||0===n.offset),(0,l.Z)(r,"".concat(z,"-").concat(t,"-push-").concat(n.push),n.push||0===n.push),(0,l.Z)(r,"".concat(z,"-").concat(t,"-pull-").concat(n.pull),n.pull||0===n.pull),(0,l.Z)(r,"".concat(z,"-rtl"),"rtl"===c),r))}));var _=f()(z,(r={},(0,l.Z)(r,"".concat(z,"-").concat(y),void 0!==y),(0,l.Z)(r,"".concat(z,"-order-").concat(x),x),(0,l.Z)(r,"".concat(z,"-offset-").concat(Z),Z),(0,l.Z)(r,"".concat(z,"-push-").concat(b),b),(0,l.Z)(r,"".concat(z,"-pull-").concat(E),E),r),O,k),I={};if(u&&u[0]>0){var R=u[0]/2;I.paddingLeft=R,I.paddingRight=R}if(u&&u[1]>0&&!v){var T=u[1]/2;I.paddingTop=T,I.paddingBottom=T}return S&&(I.flex=function(e){return"number"==typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(S),!1!==d||I.minWidth||(I.minWidth=0)),m.createElement("div",(0,o.Z)({},P,{style:(0,o.Z)((0,o.Z)({},I),j),className:_,ref:t}),N)}));var S=r(96159),j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},P=function(e,t){var r,n=e.prefixCls,a=e.children,c=e.actions,i=e.extra,s=e.className,u=e.colStyle,d=j(e,["prefixCls","children","actions","extra","className","colStyle"]),v=(0,m.useContext)(I),g=v.grid,y=v.itemLayout,h=(0,m.useContext)(p.E_).getPrefixCls,x=h("list",n),Z=c&&c.length>0&&m.createElement("ul",{className:"".concat(x,"-item-action"),key:"actions"},c.map((function(e,t){return m.createElement("li",{key:"".concat(x,"-item-action-").concat(t)},e,t!==c.length-1&&m.createElement("em",{className:"".concat(x,"-item-action-split")}))}))),b=g?"div":"li",E=m.createElement(b,(0,o.Z)({},d,g?{}:{ref:t},{className:f()("".concat(x,"-item"),(0,l.Z)({},"".concat(x,"-item-no-flex"),!("vertical"===y?i:(m.Children.forEach(a,(function(e){"string"==typeof e&&(r=!0)})),!(r&&m.Children.count(a)>1)))),s)}),"vertical"===y&&i?[m.createElement("div",{className:"".concat(x,"-item-main"),key:"content"},a,Z),m.createElement("div",{className:"".concat(x,"-item-extra"),key:"extra"},i)]:[a,Z,(0,S.Tm)(i,{key:"extra"})]);return g?m.createElement(N,{ref:t,flex:1,style:u},E):E},z=(0,m.forwardRef)(P);z.Meta=function(e){var t=e.prefixCls,r=e.className,n=e.avatar,a=e.title,c=e.description,l=j(e,["prefixCls","className","avatar","title","description"]),i=(0,(0,m.useContext)(p.E_).getPrefixCls)("list",t),s=f()("".concat(i,"-item-meta"),r),u=m.createElement("div",{className:"".concat(i,"-item-meta-content")},a&&m.createElement("h4",{className:"".concat(i,"-item-meta-title")},a),c&&m.createElement("div",{className:"".concat(i,"-item-meta-description")},c));return m.createElement("div",(0,o.Z)({},l,{className:s}),n&&m.createElement("div",{className:"".concat(i,"-item-meta-avatar")},n),(a||c)&&u)};const k=z;var _=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},I=m.createContext({});I.Consumer;function R(e){var t,r=e.pagination,n=void 0!==r&&r,a=e.prefixCls,u=e.bordered,v=void 0!==u&&u,y=e.split,h=void 0===y||y,x=e.className,C=e.children,w=e.itemLayout,N=e.loadMore,S=e.grid,j=e.dataSource,P=void 0===j?[]:j,z=e.size,k=e.header,R=e.footer,T=e.loading,M=void 0!==T&&T,L=e.rowKey,A=e.renderItem,H=e.locale,W=_(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),B=n&&"object"===(0,s.Z)(n)?n:{},F=m.useState(B.defaultCurrent||1),G=(0,i.Z)(F,2),D=G[0],K=G[1],q=m.useState(B.defaultPageSize||10),J=(0,i.Z)(q,2),Q=J[0],V=J[1],X=m.useContext(p.E_),$=X.getPrefixCls,U=X.renderEmpty,Y=X.direction,ee={},te=function(e){return function(t,r){K(t),V(r),n&&n[e]&&n[e](t,r)}},re=te("onChange"),ne=te("onShowSizeChange"),ae=$("list",a),ce=M;"boolean"==typeof ce&&(ce={spinning:ce});var oe=ce&&ce.spinning,le="";switch(z){case"large":le="lg";break;case"small":le="sm"}var ie=f()(ae,(t={},(0,l.Z)(t,"".concat(ae,"-vertical"),"vertical"===w),(0,l.Z)(t,"".concat(ae,"-").concat(le),le),(0,l.Z)(t,"".concat(ae,"-split"),h),(0,l.Z)(t,"".concat(ae,"-bordered"),v),(0,l.Z)(t,"".concat(ae,"-loading"),oe),(0,l.Z)(t,"".concat(ae,"-grid"),!!S),(0,l.Z)(t,"".concat(ae,"-something-after-last-item"),!!(N||n||R)),(0,l.Z)(t,"".concat(ae,"-rtl"),"rtl"===Y),t),x),se=(0,o.Z)((0,o.Z)((0,o.Z)({},{current:1,total:0}),{total:P.length,current:D,pageSize:Q}),n||{}),ue=Math.ceil(se.total/se.pageSize);se.current>ue&&(se.current=ue);var fe=n?m.createElement("div",{className:"".concat(ae,"-pagination")},m.createElement(E.Z,(0,o.Z)({},se,{onChange:re,onShowSizeChange:ne}))):null,me=(0,c.Z)(P);n&&P.length>(se.current-1)*se.pageSize&&(me=(0,c.Z)(P).splice((se.current-1)*se.pageSize,se.pageSize));var pe=Object.keys(S||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),de=(0,b.Z)(pe),ve=m.useMemo((function(){for(var e=0;e<g.c4.length;e+=1){var t=g.c4[e];if(de[t])return t}}),[de]),ge=m.useMemo((function(){if(S){var e=ve&&S[ve]?S[ve]:S.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null==S?void 0:S.column,ve]),ye=oe&&m.createElement("div",{style:{minHeight:53}});if(me.length>0){var he=me.map((function(e,t){return function(e,t){return A?((r="function"==typeof L?L(e):L?e[L]:e.key)||(r="list-item-".concat(t)),ee[t]=r,A(e,t)):null;var r}(e,t)})),xe=m.Children.map(he,(function(e,t){return m.createElement("div",{key:ee[t],style:ge},e)}));ye=S?m.createElement(Z,{gutter:S.gutter},xe):m.createElement("ul",{className:"".concat(ae,"-items")},he)}else C||oe||(ye=function(e,t){return m.createElement("div",{className:"".concat(e,"-empty-text")},H&&H.emptyText||t("List"))}(ae,U||d.Z));var Ze=se.position||"bottom",be=m.useMemo((function(){return{grid:S,itemLayout:w}}),[JSON.stringify(S),w]);return m.createElement(I.Provider,{value:be},m.createElement("div",(0,o.Z)({className:ie},W),("top"===Ze||"both"===Ze)&&fe,k&&m.createElement("div",{className:"".concat(ae,"-header")},k),m.createElement(O.Z,(0,o.Z)({},ce),ye,C),R&&m.createElement("div",{className:"".concat(ae,"-footer")},R),N||("bottom"===Ze||"both"===Ze)&&fe))}R.Item=k;const T=R;var M=r(48555),L=r(42550),A=m.createContext("default"),H=function(e){var t=e.children,r=e.size;return m.createElement(A.Consumer,null,(function(e){return m.createElement(A.Provider,{value:r||e},t)}))};const W=A;var B=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},F=function(e,t){var r,n,a=m.useContext(W),c=m.useState(1),u=(0,i.Z)(c,2),d=u[0],v=u[1],y=m.useState(!1),h=(0,i.Z)(y,2),x=h[0],Z=h[1],E=m.useState(!0),O=(0,i.Z)(E,2),C=O[0],w=O[1],N=m.useRef(),S=m.useRef(),j=(0,L.sQ)(t,N),P=m.useContext(p.E_).getPrefixCls,z=function(){if(S.current&&N.current){var t=S.current.offsetWidth,r=N.current.offsetWidth;if(0!==t&&0!==r){var n=e.gap,a=void 0===n?4:n;2*a<r&&v(r-2*a<t?(r-2*a)/t:1)}}};m.useEffect((function(){Z(!0)}),[]),m.useEffect((function(){w(!0),v(1)}),[e.src]),m.useEffect((function(){z()}),[e.gap]);var k,_=e.prefixCls,I=e.shape,R=e.size,T=e.src,A=e.srcSet,H=e.icon,F=e.className,G=e.alt,D=e.draggable,K=e.children,q=e.crossOrigin,J=B(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),Q="default"===R?a:R,V=Object.keys("object"===(0,s.Z)(Q)&&Q||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),X=(0,b.Z)(V),$=m.useMemo((function(){if("object"!==(0,s.Z)(Q))return{};var e=g.c4.find((function(e){return X[e]})),t=Q[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:H?t/2:18}:{}}),[X,Q]),U=P("avatar",_),Y=f()((r={},(0,l.Z)(r,"".concat(U,"-lg"),"large"===Q),(0,l.Z)(r,"".concat(U,"-sm"),"small"===Q),r)),ee=m.isValidElement(T),te=f()(U,Y,(n={},(0,l.Z)(n,"".concat(U,"-").concat(I),!!I),(0,l.Z)(n,"".concat(U,"-image"),ee||T&&C),(0,l.Z)(n,"".concat(U,"-icon"),!!H),n),F),re="number"==typeof Q?{width:Q,height:Q,lineHeight:"".concat(Q,"px"),fontSize:H?Q/2:18}:{};if("string"==typeof T&&C)k=m.createElement("img",{src:T,draggable:D,srcSet:A,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&w(!1)},alt:G,crossOrigin:q});else if(ee)k=T;else if(H)k=H;else if(x||1!==d){var ne="scale(".concat(d,") translateX(-50%)"),ae={msTransform:ne,WebkitTransform:ne,transform:ne},ce="number"==typeof Q?{lineHeight:"".concat(Q,"px")}:{};k=m.createElement(M.Z,{onResize:z},m.createElement("span",{className:"".concat(U,"-string"),ref:function(e){S.current=e},style:(0,o.Z)((0,o.Z)({},ce),ae)},K))}else k=m.createElement("span",{className:"".concat(U,"-string"),style:{opacity:0},ref:function(e){S.current=e}},K);return delete J.onError,delete J.gap,m.createElement("span",(0,o.Z)({},J,{style:(0,o.Z)((0,o.Z)((0,o.Z)({},re),$),J.style),className:te,ref:j}),k)},G=m.forwardRef(F);G.defaultProps={shape:"circle",size:"default"};const D=G;var K=r(50344),q=r(77939),J=function(e){return e?"function"==typeof e?e():e:null},Q=r(33603),V=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},X=m.forwardRef((function(e,t){var r=e.prefixCls,n=e.title,a=e.content,c=e._overlay,l=V(e,["prefixCls","title","content","_overlay"]),i=m.useContext(p.E_).getPrefixCls,s=i("popover",r),u=i();return m.createElement(q.Z,(0,o.Z)({},l,{prefixCls:s,ref:t,overlay:c||function(e){if(n||a)return m.createElement(m.Fragment,null,n&&m.createElement("div",{className:"".concat(e,"-title")},J(n)),m.createElement("div",{className:"".concat(e,"-inner-content")},J(a)))}(s),transitionName:(0,Q.mL)(u,"zoom-big",l.transitionName)}))}));X.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};const $=X;const U=function(e){var t=m.useContext(p.E_),r=t.getPrefixCls,n=t.direction,a=e.prefixCls,c=e.className,o=void 0===c?"":c,i=e.maxCount,s=e.maxStyle,u=e.size,d=r("avatar-group",a),v=f()(d,(0,l.Z)({},"".concat(d,"-rtl"),"rtl"===n),o),g=e.children,y=e.maxPopoverPlacement,h=void 0===y?"top":y,x=e.maxPopoverTrigger,Z=void 0===x?"hover":x,b=(0,K.Z)(g).map((function(e,t){return(0,S.Tm)(e,{key:"avatar-key-".concat(t)})})),E=b.length;if(i&&i<E){var O=b.slice(0,i),C=b.slice(i,E);return O.push(m.createElement($,{key:"avatar-popover-key",content:C,trigger:Z,placement:h,overlayClassName:"".concat(d,"-popover")},m.createElement(D,{style:s},"+".concat(E-i)))),m.createElement(H,{size:u},m.createElement("div",{className:v,style:e.style},O))}return m.createElement(H,{size:u},m.createElement("div",{className:v,style:e.style},b))};var Y=D;Y.Group=U;const ee=Y;var te=r(84573),re=r(73453);r(11207);const ne=()=>{const[e,t]=(0,m.useState)([]),r=()=>{fetch("https://news.hjkl01.cn/api/news/reload/").then((async e=>e.json())).then((r=>{t(e.concat(r)),te.ZP.success(r.length+" more items loaded!")}))};(0,m.useEffect)((()=>{r()}),[]);return m.createElement("div",{style:{width:"100%",textAlign:"center"}},m.createElement(T,{grid:{gutter:30,column:10},size:"large"},m.createElement(re.Z,{data:e,height:1e3,itemHeight:100,itemKey:"email",onScroll:e=>{e.currentTarget.scrollHeight-e.currentTarget.scrollTop==1e3&&r()}},(e=>m.createElement(T.Item,{extra:m.createElement(ee,{src:e.website})},m.createElement(T.Item.Meta,{avatar:m.createElement(ee,{src:e.img_url}),title:m.createElement("a",{href:e.url}," ",e.title," "),description:e.website}),m.createElement("div",null," ",e.hot_score," "))))))};function ae(){const{siteConfig:e}=(0,a.Z)();return m.createElement(n.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},m.createElement(ne,null))}},11207:(e,t,r)=>{r.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);