"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9514,4608],{9068:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(7294),l=n(4608),o=n(8277),c=n(6010),r=n(5999),i=n(2466),s=n(5936);var d=n(5281);const m="backToTopButton_RiI4",u="backToTopButtonShow_ssHd";function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:c,cancelScroll:r}=(0,i.Ct)();return(0,i.RF)(((e,n)=>{let{scrollY:a}=e;const c=null==n?void 0:n.scrollY;c&&(o.current?o.current=!1:a>=c?(r(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,s.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>c(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",d.k.common.backToTopButton,m,e&&u),type:"button",onClick:t})}var p=n(7524),h=n(6668),E=n(5537),f=n(7462);function _(e){return a.createElement("svg",(0,f.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const g="collapseSidebarButton_FykI",v="collapseSidebarButtonIcon_DTRl";function k(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,r.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",g),onClick:t},a.createElement(_,{className:v}))}var C=n(9689),I=n(902),N=n(2802),S=n(8596),Z=n(6043);const y=Symbol("EmptyContext"),T=a.createContext(y);function x(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(T.Provider,{value:o},t)}var L=n(9960),w=n(2389);function A(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,r.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:l,level:o,index:r,...i}=e;const{items:s,label:m,collapsible:u,className:b,href:p}=t,E=function(e){const t=(0,w.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,N.Wl)(e):void 0),[e,t])}(t),_=(0,N._F)(t,l),g=(0,S.Mg)(p,l),{collapsed:v,setCollapsed:k}=(0,Z.u)({initialState:()=>!!u&&(!_&&t.collapsed)});!function(e){let{isActive:t,collapsed:n,setCollapsed:l}=e;const o=(0,I.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:_,collapsed:v,setCollapsed:k});const{expandedItem:C,setExpandedItem:x}=function(){const e=(0,a.useContext)(T);if(e===y)throw new I.i6("DocSidebarItemsExpandedStateProvider");return e}();function F(e){void 0===e&&(e=!v),x(e?null:r),k(e)}const{docs:{sidebar:{autoCollapseCategories:M}}}=(0,h.L)();return(0,a.useEffect)((()=>{u&&C&&C!==r&&M&&k(!0)}),[u,C,r,k,M]),a.createElement("li",{className:(0,c.Z)(d.k.docs.docSidebarItemCategory,d.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":v},b)},a.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(L.Z,(0,f.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!p&&u,"menu__link--active":_}),onClick:u?e=>{null==n||n(t),p?F(!1):(e.preventDefault(),F())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":u?!v:void 0,href:u?null!=E?E:"#":E},i),m),p&&u&&a.createElement(A,{categoryLabel:m,onClick:e=>{e.preventDefault(),F()}})),a.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},a.createElement(U,{items:s,tabIndex:v?-1:0,onItemClick:n,activePath:l,level:o+1})))}var M=n(3919),H=n(541);const B="menuExternalLink_KU1_";function P(e){let{item:t,onItemClick:n,activePath:l,level:o,index:r,...i}=e;const{href:s,label:m,className:u}=t,b=(0,N._F)(t,l),p=(0,M.Z)(s);return a.createElement("li",{className:(0,c.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),key:m},a.createElement(L.Z,(0,f.Z)({className:(0,c.Z)("menu__link",!p&&B,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},p&&{onClick:n?()=>n(t):void 0},i),m,!p&&a.createElement(H.Z,null)))}const R="menuHtmlItem_hP_2";function D(e){let{item:t,level:n,index:l}=e;const{value:o,defaultStyle:r,className:i}=t;return a.createElement("li",{className:(0,c.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(n),r&&R+" menu__list-item",i),key:l,dangerouslySetInnerHTML:{__html:o}})}function W(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,f.Z)({item:t},n));case"html":return a.createElement(D,(0,f.Z)({item:t},n));default:return a.createElement(P,(0,f.Z)({item:t},n))}}function z(e){let{items:t,...n}=e;return a.createElement(x,null,t.map(((e,t)=>a.createElement(W,(0,f.Z)({key:t,item:e,index:t},n)))))}const U=(0,a.memo)(z),V="menu_izAj",Y="menuWithAnnouncementBar_l2a_";function K(e){let{path:t,sidebar:n,className:l}=e;const o=function(){const{isActive:e}=(0,C.nT)(),[t,n]=(0,a.useState)(e);return(0,i.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",V,o&&Y,l)},a.createElement("ul",{className:(0,c.Z)(d.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:n,activePath:t,level:1})))}const Q="sidebar_RiAD",j="sidebarWithHideableNavbar_d0QC",q="sidebarHidden_Lg_2",X="sidebarLogo_YUvz";function G(e){let{path:t,sidebar:n,onCollapse:l,isHidden:o}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:i}}}=(0,h.L)();return a.createElement("div",{className:(0,c.Z)(Q,r&&j,o&&q)},r&&a.createElement(E.Z,{tabIndex:-1,className:X}),a.createElement(K,{path:t,sidebar:n}),i&&a.createElement(k,{onClick:l}))}const J=a.memo(G);var O=n(2961),$=n(3102);const ee=e=>{let{sidebar:t,path:n}=e;const l=(0,O.e)();return a.createElement("ul",{className:(0,c.Z)(d.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function te(e){return a.createElement($.Zo,{component:ee,props:e})}const ne=a.memo(te);function ae(e){const t=(0,p.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(J,e),l&&a.createElement(ne,e))}var le=n(6775);const oe="expandButton__5cy",ce="expandButtonIcon_FlNX";function re(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:oe,title:(0,r.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(_,{className:ce}))}const ie="docSidebarContainer_UQUJ",se="docSidebarContainerHidden_f7XD";var de=n(1116);function me(e){var t;let{children:n}=e;const l=(0,de.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function ue(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:o}=(0,le.TH)(),[r,i]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{r&&i(!1),l((e=>!e))}),[l,r]);return a.createElement("aside",{className:(0,c.Z)(d.k.docs.docSidebarContainer,ie,n&&se),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie)&&n&&i(!0)}},a.createElement(me,null,a.createElement(ae,{sidebar:t,path:o,onCollapse:s,isHidden:r})),r&&a.createElement(re,{toggleSidebar:s}))}const be={docMainContainer:"docMainContainer_uL0j",docMainContainerEnhanced:"docMainContainerEnhanced_oQfM",docItemWrapperEnhanced:"docItemWrapperEnhanced_HFwV"};function pe(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,de.V)();return a.createElement("main",{className:(0,c.Z)(be.docMainContainer,(t||!l)&&be.docMainContainerEnhanced)},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced)},n))}const he="docPage_ualW",Ee="docsWrapper_mKqt";function fe(e){let{children:t}=e;const n=(0,de.V)(),[l,c]=(0,a.useState)(!1);return a.createElement(o.Z,{wrapperClassName:Ee},a.createElement(b,null),a.createElement("div",{className:he},n&&a.createElement(ue,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:c}),a.createElement(pe,{hiddenSidebarContainer:l},t)))}var _e=n(3320),ge=n(1944),ve=n(4477),ke=n(4739);function Ce(e){const{versionMetadata:t}=e,n=(0,N.hI)(e);if(!n)return a.createElement(l.default,null);const{docElement:o,sidebarName:r,sidebarItems:i}=n;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,_e.os)(t.pluginId,t.version)}),a.createElement(ge.FG,{className:(0,c.Z)(d.k.wrapper.docsPages,d.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(ve.q,{version:t},a.createElement(de.b,{name:r,items:i},a.createElement(fe,null,o)))))}},4608:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(7294),l=n(8277),o=n(5999),c=n(1944);function r(){return a.createElement(a.Fragment,null,a.createElement(c.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);