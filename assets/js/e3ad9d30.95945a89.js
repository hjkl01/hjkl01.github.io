"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[876],{99134:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(67294).createContext)({})},21584:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(4942),a=r(87462),c=r(71002),o=r(94184),l=r.n(o),i=r(67294),s=r(53124),u=r(99134),f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var m=["xs","sm","md","lg","xl","xxl"];const p=i.forwardRef((function(e,t){var r,o=i.useContext(s.E_),p=o.getPrefixCls,d=o.direction,v=i.useContext(u.Z),g=v.gutter,y=v.wrap,h=v.supportFlexGap,Z=e.prefixCls,x=e.span,b=e.order,E=e.offset,O=e.push,C=e.pull,w=e.className,N=e.children,S=e.flex,j=e.style,P=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),z=p("col",Z),k={};m.forEach((function(t){var r,o={},l=e[t];"number"==typeof l?o.span=l:"object"===(0,c.Z)(l)&&(o=l||{}),delete P[t],k=(0,a.Z)((0,a.Z)({},k),(r={},(0,n.Z)(r,"".concat(z,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,n.Z)(r,"".concat(z,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,n.Z)(r,"".concat(z,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,n.Z)(r,"".concat(z,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,n.Z)(r,"".concat(z,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,n.Z)(r,"".concat(z,"-rtl"),"rtl"===d),r))}));var _=l()(z,(r={},(0,n.Z)(r,"".concat(z,"-").concat(x),void 0!==x),(0,n.Z)(r,"".concat(z,"-order-").concat(b),b),(0,n.Z)(r,"".concat(z,"-offset-").concat(E),E),(0,n.Z)(r,"".concat(z,"-push-").concat(O),O),(0,n.Z)(r,"".concat(z,"-pull-").concat(C),C),r),w,k),I={};if(g&&g[0]>0){var R=g[0]/2;I.paddingLeft=R,I.paddingRight=R}if(g&&g[1]>0&&!h){var T=g[1]/2;I.paddingTop=T,I.paddingBottom=T}return S&&(I.flex=function(e){return"number"==typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(S),!1!==y||I.minWidth||(I.minWidth=0)),i.createElement("div",(0,a.Z)({},P,{style:(0,a.Z)((0,a.Z)({},I),j),className:_,ref:t}),N)}))},92820:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(87462),a=r(4942),c=r(71002),o=r(97685),l=r(94184),i=r.n(l),s=r(67294),u=r(53124),f=r(37193),m=r(24308),p=r(93355),d=r(99134),v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");const g=s.forwardRef((function(e,t){var r,l=e.prefixCls,p=e.justify,g=e.align,y=e.className,h=e.style,Z=e.children,x=e.gutter,b=void 0===x?0:x,E=e.wrap,O=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=s.useContext(u.E_),w=C.getPrefixCls,N=C.direction,S=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),j=(0,o.Z)(S,2),P=j[0],z=j[1],k=(0,f.Z)(),_=s.useRef(b);s.useEffect((function(){var e=m.ZP.subscribe((function(e){var t=_.current||0;(!Array.isArray(t)&&"object"===(0,c.Z)(t)||Array.isArray(t)&&("object"===(0,c.Z)(t[0])||"object"===(0,c.Z)(t[1])))&&z(e)}));return function(){return m.ZP.unsubscribe(e)}}),[]);var I,R=w("row",l),T=(I=[void 0,void 0],(Array.isArray(b)?b:[b,void 0]).forEach((function(e,t){if("object"===(0,c.Z)(e))for(var r=0;r<m.c4.length;r++){var n=m.c4[r];if(P[n]&&void 0!==e[n]){I[t]=e[n];break}}else I[t]=e})),I),M=i()(R,(r={},(0,a.Z)(r,"".concat(R,"-no-wrap"),!1===E),(0,a.Z)(r,"".concat(R,"-").concat(p),p),(0,a.Z)(r,"".concat(R,"-").concat(g),g),(0,a.Z)(r,"".concat(R,"-rtl"),"rtl"===N),r),y),L={},A=null!=T[0]&&T[0]>0?T[0]/-2:void 0,H=null!=T[1]&&T[1]>0?T[1]/-2:void 0;if(A&&(L.marginLeft=A,L.marginRight=A),k){var W=(0,o.Z)(T,2);L.rowGap=W[1]}else H&&(L.marginTop=H,L.marginBottom=H);var G=(0,o.Z)(T,2),D=G[0],F=G[1],K=s.useMemo((function(){return{gutter:[D,F],wrap:E,supportFlexGap:k}}),[D,F,E,k]);return s.createElement(d.Z.Provider,{value:K},s.createElement("div",(0,n.Z)({},O,{className:M,style:(0,n.Z)((0,n.Z)({},L),h),ref:t}),Z))}))},68703:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var n=r(44730),a=r(52263),c=r(74902),o=r(87462),l=r(4942),i=r(97685),s=r(71002),u=r(94184),f=r.n(u),m=r(67294),p=r(53124),d=r(88258),v=r(92820),g=r(25378),y=r(99532),h=r(11382),Z=r(24308),x=r(21584),b=r(96159),E=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},O=function(e,t){var r,n=e.prefixCls,a=e.children,c=e.actions,i=e.extra,s=e.className,u=e.colStyle,d=E(e,["prefixCls","children","actions","extra","className","colStyle"]),v=(0,m.useContext)(S),g=v.grid,y=v.itemLayout,h=(0,m.useContext)(p.E_).getPrefixCls,Z=h("list",n),O=c&&c.length>0&&m.createElement("ul",{className:"".concat(Z,"-item-action"),key:"actions"},c.map((function(e,t){return m.createElement("li",{key:"".concat(Z,"-item-action-").concat(t)},e,t!==c.length-1&&m.createElement("em",{className:"".concat(Z,"-item-action-split")}))}))),C=g?"div":"li",w=m.createElement(C,(0,o.Z)({},d,g?{}:{ref:t},{className:f()("".concat(Z,"-item"),(0,l.Z)({},"".concat(Z,"-item-no-flex"),!("vertical"===y?i:(m.Children.forEach(a,(function(e){"string"==typeof e&&(r=!0)})),!(r&&m.Children.count(a)>1)))),s)}),"vertical"===y&&i?[m.createElement("div",{className:"".concat(Z,"-item-main"),key:"content"},a,O),m.createElement("div",{className:"".concat(Z,"-item-extra"),key:"extra"},i)]:[a,O,(0,b.Tm)(i,{key:"extra"})]);return g?m.createElement(x.Z,{ref:t,flex:1,style:u},w):w},C=(0,m.forwardRef)(O);C.Meta=function(e){var t=e.prefixCls,r=e.className,n=e.avatar,a=e.title,c=e.description,l=E(e,["prefixCls","className","avatar","title","description"]),i=(0,(0,m.useContext)(p.E_).getPrefixCls)("list",t),s=f()("".concat(i,"-item-meta"),r),u=m.createElement("div",{className:"".concat(i,"-item-meta-content")},a&&m.createElement("h4",{className:"".concat(i,"-item-meta-title")},a),c&&m.createElement("div",{className:"".concat(i,"-item-meta-description")},c));return m.createElement("div",(0,o.Z)({},l,{className:s}),n&&m.createElement("div",{className:"".concat(i,"-item-meta-avatar")},n),(a||c)&&u)};const w=C;var N=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},S=m.createContext({});S.Consumer;function j(e){var t,r=e.pagination,n=void 0!==r&&r,a=e.prefixCls,u=e.bordered,x=void 0!==u&&u,b=e.split,E=void 0===b||b,O=e.className,C=e.children,w=e.itemLayout,j=e.loadMore,P=e.grid,z=e.dataSource,k=void 0===z?[]:z,_=e.size,I=e.header,R=e.footer,T=e.loading,M=void 0!==T&&T,L=e.rowKey,A=e.renderItem,H=e.locale,W=N(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),G=n&&"object"===(0,s.Z)(n)?n:{},D=m.useState(G.defaultCurrent||1),F=(0,i.Z)(D,2),K=F[0],B=F[1],J=m.useState(G.defaultPageSize||10),Q=(0,i.Z)(J,2),V=Q[0],X=Q[1],$=m.useContext(p.E_),q=$.getPrefixCls,U=$.renderEmpty,Y=$.direction,ee={},te=function(e){return function(t,r){B(t),X(r),n&&n[e]&&n[e](t,r)}},re=te("onChange"),ne=te("onShowSizeChange"),ae=q("list",a),ce=M;"boolean"==typeof ce&&(ce={spinning:ce});var oe=ce&&ce.spinning,le="";switch(_){case"large":le="lg";break;case"small":le="sm"}var ie=f()(ae,(t={},(0,l.Z)(t,"".concat(ae,"-vertical"),"vertical"===w),(0,l.Z)(t,"".concat(ae,"-").concat(le),le),(0,l.Z)(t,"".concat(ae,"-split"),E),(0,l.Z)(t,"".concat(ae,"-bordered"),x),(0,l.Z)(t,"".concat(ae,"-loading"),oe),(0,l.Z)(t,"".concat(ae,"-grid"),!!P),(0,l.Z)(t,"".concat(ae,"-something-after-last-item"),!!(j||n||R)),(0,l.Z)(t,"".concat(ae,"-rtl"),"rtl"===Y),t),O),se=(0,o.Z)((0,o.Z)((0,o.Z)({},{current:1,total:0}),{total:k.length,current:K,pageSize:V}),n||{}),ue=Math.ceil(se.total/se.pageSize);se.current>ue&&(se.current=ue);var fe=n?m.createElement("div",{className:"".concat(ae,"-pagination")},m.createElement(y.Z,(0,o.Z)({},se,{onChange:re,onShowSizeChange:ne}))):null,me=(0,c.Z)(k);n&&k.length>(se.current-1)*se.pageSize&&(me=(0,c.Z)(k).splice((se.current-1)*se.pageSize,se.pageSize));var pe=Object.keys(P||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),de=(0,g.Z)(pe),ve=m.useMemo((function(){for(var e=0;e<Z.c4.length;e+=1){var t=Z.c4[e];if(de[t])return t}}),[de]),ge=m.useMemo((function(){if(P){var e=ve&&P[ve]?P[ve]:P.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null==P?void 0:P.column,ve]),ye=oe&&m.createElement("div",{style:{minHeight:53}});if(me.length>0){var he=me.map((function(e,t){return function(e,t){return A?((r="function"==typeof L?L(e):L?e[L]:e.key)||(r="list-item-".concat(t)),ee[t]=r,A(e,t)):null;var r}(e,t)})),Ze=m.Children.map(he,(function(e,t){return m.createElement("div",{key:ee[t],style:ge},e)}));ye=P?m.createElement(v.Z,{gutter:P.gutter},Ze):m.createElement("ul",{className:"".concat(ae,"-items")},he)}else C||oe||(ye=function(e,t){return m.createElement("div",{className:"".concat(e,"-empty-text")},H&&H.emptyText||t("List"))}(ae,U||d.Z));var xe=se.position||"bottom",be=m.useMemo((function(){return{grid:P,itemLayout:w}}),[JSON.stringify(P),w]);return m.createElement(S.Provider,{value:be},m.createElement("div",(0,o.Z)({className:ie},W),("top"===xe||"both"===xe)&&fe,I&&m.createElement("div",{className:"".concat(ae,"-header")},I),m.createElement(h.Z,(0,o.Z)({},ce),ye,C),R&&m.createElement("div",{className:"".concat(ae,"-footer")},R),j||("bottom"===xe||"both"===xe)&&fe))}j.Item=w;const P=j;var z=r(48555),k=r(42550),_=m.createContext("default"),I=function(e){var t=e.children,r=e.size;return m.createElement(_.Consumer,null,(function(e){return m.createElement(_.Provider,{value:r||e},t)}))};const R=_;var T=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},M=function(e,t){var r,n,a=m.useContext(R),c=m.useState(1),u=(0,i.Z)(c,2),d=u[0],v=u[1],y=m.useState(!1),h=(0,i.Z)(y,2),x=h[0],b=h[1],E=m.useState(!0),O=(0,i.Z)(E,2),C=O[0],w=O[1],N=m.useRef(),S=m.useRef(),j=(0,k.sQ)(t,N),P=m.useContext(p.E_).getPrefixCls,_=function(){if(S.current&&N.current){var t=S.current.offsetWidth,r=N.current.offsetWidth;if(0!==t&&0!==r){var n=e.gap,a=void 0===n?4:n;2*a<r&&v(r-2*a<t?(r-2*a)/t:1)}}};m.useEffect((function(){b(!0)}),[]),m.useEffect((function(){w(!0),v(1)}),[e.src]),m.useEffect((function(){_()}),[e.gap]);var I,M=e.prefixCls,L=e.shape,A=e.size,H=e.src,W=e.srcSet,G=e.icon,D=e.className,F=e.alt,K=e.draggable,B=e.children,J=e.crossOrigin,Q=T(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),V="default"===A?a:A,X=Object.keys("object"===(0,s.Z)(V)&&V||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),$=(0,g.Z)(X),q=m.useMemo((function(){if("object"!==(0,s.Z)(V))return{};var e=Z.c4.find((function(e){return $[e]})),t=V[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:G?t/2:18}:{}}),[$,V]),U=P("avatar",M),Y=f()((r={},(0,l.Z)(r,"".concat(U,"-lg"),"large"===V),(0,l.Z)(r,"".concat(U,"-sm"),"small"===V),r)),ee=m.isValidElement(H),te=f()(U,Y,(n={},(0,l.Z)(n,"".concat(U,"-").concat(L),!!L),(0,l.Z)(n,"".concat(U,"-image"),ee||H&&C),(0,l.Z)(n,"".concat(U,"-icon"),!!G),n),D),re="number"==typeof V?{width:V,height:V,lineHeight:"".concat(V,"px"),fontSize:G?V/2:18}:{};if("string"==typeof H&&C)I=m.createElement("img",{src:H,draggable:K,srcSet:W,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&w(!1)},alt:F,crossOrigin:J});else if(ee)I=H;else if(G)I=G;else if(x||1!==d){var ne="scale(".concat(d,") translateX(-50%)"),ae={msTransform:ne,WebkitTransform:ne,transform:ne},ce="number"==typeof V?{lineHeight:"".concat(V,"px")}:{};I=m.createElement(z.Z,{onResize:_},m.createElement("span",{className:"".concat(U,"-string"),ref:function(e){S.current=e},style:(0,o.Z)((0,o.Z)({},ce),ae)},B))}else I=m.createElement("span",{className:"".concat(U,"-string"),style:{opacity:0},ref:function(e){S.current=e}},B);return delete Q.onError,delete Q.gap,m.createElement("span",(0,o.Z)({},Q,{style:(0,o.Z)((0,o.Z)((0,o.Z)({},re),q),Q.style),className:te,ref:j}),I)},L=m.forwardRef(M);L.defaultProps={shape:"circle",size:"default"};const A=L;var H=r(50344),W=r(77939),G=function(e){return e?"function"==typeof e?e():e:null},D=r(33603),F=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},K=m.forwardRef((function(e,t){var r=e.prefixCls,n=e.title,a=e.content,c=e._overlay,l=F(e,["prefixCls","title","content","_overlay"]),i=m.useContext(p.E_).getPrefixCls,s=i("popover",r),u=i();return m.createElement(W.Z,(0,o.Z)({},l,{prefixCls:s,ref:t,overlay:c||function(e){if(n||a)return m.createElement(m.Fragment,null,n&&m.createElement("div",{className:"".concat(e,"-title")},G(n)),m.createElement("div",{className:"".concat(e,"-inner-content")},G(a)))}(s),transitionName:(0,D.mL)(u,"zoom-big",l.transitionName)}))}));K.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};const B=K;const J=function(e){var t=m.useContext(p.E_),r=t.getPrefixCls,n=t.direction,a=e.prefixCls,c=e.className,o=void 0===c?"":c,i=e.maxCount,s=e.maxStyle,u=e.size,d=r("avatar-group",a),v=f()(d,(0,l.Z)({},"".concat(d,"-rtl"),"rtl"===n),o),g=e.children,y=e.maxPopoverPlacement,h=void 0===y?"top":y,Z=e.maxPopoverTrigger,x=void 0===Z?"hover":Z,E=(0,H.Z)(g).map((function(e,t){return(0,b.Tm)(e,{key:"avatar-key-".concat(t)})})),O=E.length;if(i&&i<O){var C=E.slice(0,i),w=E.slice(i,O);return C.push(m.createElement(B,{key:"avatar-popover-key",content:w,trigger:x,placement:h,overlayClassName:"".concat(d,"-popover")},m.createElement(A,{style:s},"+".concat(O-i)))),m.createElement(I,{size:u},m.createElement("div",{className:v,style:e.style},C))}return m.createElement(I,{size:u},m.createElement("div",{className:v,style:e.style},E))};var Q=A;Q.Group=J;const V=Q;var X=r(84573),$=r(73453);r(11207);const q=()=>{const[e,t]=(0,m.useState)([]),r=()=>{fetch("https://news.hjkl01.cn/api/news/reload/").then((async e=>e.json())).then((r=>{t(e.concat(r)),X.ZP.success(r.length+" more items loaded!")}))};(0,m.useEffect)((()=>{r()}),[]);return m.createElement("div",{style:{width:"100%",textAlign:"center"}},m.createElement(P,{grid:{gutter:30,column:10},size:"large"},m.createElement($.Z,{data:e,height:1e3,itemHeight:100,itemKey:"email",onScroll:e=>{e.currentTarget.scrollHeight-e.currentTarget.scrollTop==1e3&&r()}},(e=>m.createElement(P.Item,{extra:m.createElement(V,{src:e.website})},m.createElement(P.Item.Meta,{avatar:m.createElement(V,{src:e.img_url}),title:m.createElement("a",{href:e.url},e.title),description:e.website}),m.createElement("div",null,e.hot_score))))))};function U(){const{siteConfig:e}=(0,a.Z)();return m.createElement(n.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},m.createElement(q,null))}},11207:()=>{}}]);