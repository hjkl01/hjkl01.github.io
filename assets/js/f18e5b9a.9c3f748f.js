"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[9467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,c=m["".concat(o,".").concat(d)]||m[d]||k[d]||r;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(83117),l=(n(67294),n(3905));const r={},i="\u6587\u672c\u5904\u7406",p={unversionedId:"bash-tutorial/archives/text",id:"bash-tutorial/archives/text",title:"\u6587\u672c\u5904\u7406",description:"cat",source:"@site/docs/bash-tutorial/archives/text.md",sourceDirName:"bash-tutorial/archives",slug:"/bash-tutorial/archives/text",permalink:"/docs/bash-tutorial/archives/text",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash-tutorial/archives/text.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7cfb\u7edf\u4fe1\u606f",permalink:"/docs/bash-tutorial/archives/system"},next:{title:"\u65f6\u95f4\u7ba1\u7406",permalink:"/docs/bash-tutorial/archives/time"}},o={},u=[{value:"cat",id:"cat",level:2},{value:"nl",id:"nl",level:2},{value:"sort",id:"sort",level:2},{value:"uniq",id:"uniq",level:2},{value:"cut",id:"cut",level:2},{value:"paste",id:"paste",level:2},{value:"wc",id:"wc",level:2},{value:"head",id:"head",level:2},{value:"tail",id:"tail",level:2},{value:"grep",id:"grep",level:2},{value:"sed",id:"sed",level:2}],s={toc:u};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6587\u672c\u5904\u7406"},"\u6587\u672c\u5904\u7406"),(0,l.kt)("h2",{id:"cat"},"cat"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cat"),"\u53ef\u4ee5\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u663e\u793a\u5728\u6807\u51c6\u8f93\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat text1\n1 apple\n2 pear\n3 banana\n")),(0,l.kt)("p",null,"\u5b83\u4e5f\u53ef\u4ee5\u540c\u65f6\u8f93\u51fa\u591a\u4e2a\u6587\u4ef6\u5185\u5bb9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat text1 text2\n")),(0,l.kt)("p",null,"\u5b83\u4e0e\u91cd\u5b9a\u5411\u7ed3\u5408\uff0c\u5c31\u53ef\u4ee5\u5408\u5e76\u591a\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5408\u5e76\u6587\u672c\u6587\u4ef6\n$ cat text* > text.all\n\n# \u5408\u5e76\u4e8c\u8fdb\u5236\u6587\u4ef6\n$ cat movie.mpeg.0* > movie.mpeg\n")),(0,l.kt)("p",null,"\u5982\u679c\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"cat"),"\u547d\u4ee4\u65f6\u6ca1\u6709\u4efb\u4f55\u53c2\u6570\uff0c\u5b83\u5c06\u8bfb\u53d6\u6807\u51c6\u8f93\u5165\uff0c\u7136\u540e\u663e\u793a\u5230\u6807\u51c6\u8f93\u51fa\u3002\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl + d"),"\uff0c\u5c06\u4f1a\u7ed3\u675f",(0,l.kt)("inlineCode",{parentName:"p"},"cat"),"\u8bfb\u53d6\u6807\u51c6\u8f93\u5165\u3002\u5229\u7528\u8fd9\u4e00\u70b9\uff0c\u53ef\u4ee5\u5c06\u952e\u76d8\u8f93\u5165\u5199\u5165\u6307\u5b9a\u6587\u4ef6\uff0c\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl + d"),"\u7ed3\u675f\u8f93\u5165\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat > lazy_dog.txt\n")),(0,l.kt)("p",null,"\u5b83\u7684\u53c2\u6570\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-n")," \u8f93\u51fa\u7ed3\u679c\u663e\u793a\u884c\u53f7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-s")," \u5c06\u591a\u4e2a\u8fde\u7eed\u7684\u7a7a\u767d\u884c\uff0c\u8f93\u51fa\u4e3a\u4e00\u884c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-A")," \u8f93\u51fa\u7ed3\u679c\u4e2d\u663e\u793a\u63a7\u5236\u7b26\uff0c\u6bd4\u5982Tab\u952e\u663e\u793a\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"^I"),"\uff0c\u884c\u5c3e\u663e\u793a",(0,l.kt)("inlineCode",{parentName:"li"},"$"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cat"),"\u652f\u6301Here document\uff0c\u663e\u793a\u591a\u884c\u6587\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat << _EOF_\n<HTML>\n         <HEAD>\n                <TITLE>$TITLE</TITLE>\n         </HEAD>\n         <BODY>\n                <H1>$TITLE</H1>\n                <P>$TIME_STAMP</P>\n         </BODY>\n</HTML>\n_EOF_\n")),(0,l.kt)("p",null,"Here document \u5e38\u5728\u811a\u672c\u5f53\u4e2d\u4f5c\u4e3a\u8f93\u5165\u7684\u624b\u6bb5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sort -k2 <<END\n> 1 apple\n> 2 pear\n> 3 banana\n> END\n1 apple\n3 banana\n2 pear\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"<<-"),"\u4ee3\u66ff",(0,l.kt)("inlineCode",{parentName:"p"},"<<"),"\uff0c\u884c\u9996\u7684tab\u952e\u5c06\u88ab\u5265\u79bb\u3002"),(0,l.kt)("h2",{id:"nl"},"nl"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nl"),"\u547d\u4ee4\u4e3a\u6587\u672c\u6587\u4ef6\u6dfb\u52a0\u884c\u53f7\uff0c\u663e\u793a\u5728\u6807\u51c6\u8f93\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ nl example.txt\n")),(0,l.kt)("h2",{id:"sort"},"sort"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sort"),"\u547d\u4ee4\u5c06\u6587\u672c\u6587\u4ef6\u7684\u6240\u6709\u884c\u6392\u5e8f\u540e\u8f93\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sort file1.txt file2.txt file3.txt > final_sorted_list.txt\n")),(0,l.kt)("p",null,"\u5b83\u7684\u53c2\u6570\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-b")," ",(0,l.kt)("inlineCode",{parentName:"li"},"--ignore-leading-blanks")," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6392\u5e8f\u7528\u7684\u662f\u6bcf\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u3002\u8fd9\u4e2a\u53c2\u6570\u5ffd\u7565\u6bcf\u884c\u5f00\u5934\u7684\u7a7a\u683c\uff0c\u4ece\u7b2c\u4e00\u4e2a\u975e\u7a7a\u767d\u5b57\u7b26\u5f00\u59cb\u6392\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-f")," ",(0,l.kt)("inlineCode",{parentName:"li"},"--ignore-case")," \u8ba9\u6392\u5e8f\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-n")," ",(0,l.kt)("inlineCode",{parentName:"li"},"--numeric-sort")," \u6309\u7167\u6570\u503c\u6392\u5e8f\uff0c\u800c\u4e0d\u662f\u5b57\u7b26\u503c\uff0c\u7528\u4e8e\u884c\u9996\u662f\u6570\u503c\u7684\u60c5\u51b5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-r")," ",(0,l.kt)("inlineCode",{parentName:"li"},"--reverse")," \u6309\u76f8\u53cd\u987a\u5e8f\u6392\u5e8f\u3002\u7ed3\u679c\u6309\u7167\u964d\u5e8f\u6392\u5217\uff0c\u800c\u4e0d\u662f\u5347\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-k")," ",(0,l.kt)("inlineCode",{parentName:"li"},"--key=field1[,field2]")," \u6307\u5b9a\u6309\u7167\u6bcf\u884c\u7684\u7b2c\u51e0\u4e2a\u5b57\u6bb5\uff08\u4ece1\u5f00\u59cb\uff09\u6392\u5e8f\uff0c\u800c\u4e0d\u662f\u6309\u7167\u884c\u9996\u5b57\u7b26\u6392\u5e8f\u3002\u8be5\u5c5e\u6027\u53ef\u4ee5\u591a\u4e2a\u8fde\u7528\uff0c\u7528\u4e8e\u6307\u5b9a\u591a\u91cd\u6392\u5e8f\u6807\u51c6\uff0c\u8fd8\u53ef\u4ee5\u6307\u5b9a\u6bcf\u4e2a\u5b57\u6bb5\u6307\u5b9a\u6392\u5e8f\u6807\u51c6\uff0c\u8fd9\u4e9b\u503c\u4e0e\u5168\u5c40\u5c5e\u6027\u4e00\u81f4\uff0c\u6bd4\u5982b\uff08\u5ffd\u7565\u5f00\u5934\u7684\u7a7a\u683c\uff09\uff0cn\uff08\u6570\u503c\u6392\u5e8f\uff09\uff0cr\uff08\u9006\u5411\u6392\u5e8f\uff09\u7b49\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-m")," ",(0,l.kt)("inlineCode",{parentName:"li"},"--merge")," \u628a\u6bcf\u4e2a\u53c2\u6570\u770b\u4f5c\u662f\u4e00\u4e2a\u9884\u5148\u6392\u597d\u5e8f\u7684\u6587\u4ef6\u3002\u628a\u591a\u4e2a\u6587\u4ef6\u5408\u5e76\u6210\u4e00\u4e2a\u6392\u597d\u5e8f\u7684\u6587\u4ef6\uff0c\u800c\u6ca1\u6709\u6267\u884c\u989d\u5916\u7684\u6392\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-o")," ",(0,l.kt)("inlineCode",{parentName:"li"},"--output=file")," \u628a\u6392\u597d\u5e8f\u7684\u8f93\u51fa\u7ed3\u679c\u53d1\u9001\u5230\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u6807\u51c6\u8f93\u51fa\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-t")," ",(0,l.kt)("inlineCode",{parentName:"li"},"--field-separator=char")," \u5b9a\u4e49\u5b57\u6bb5\u5206\u9694\u5b57\u7b26\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b57\u6bb5\u7531\u7a7a\u683c\u6216\u5236\u8868\u7b26\u5206\u9694\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-u")," \u8f93\u51fa\u7ed3\u679c\u4e2d\u5220\u9664\u91cd\u590d\u884c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sort --key=1,1 --key=2n distros.txt\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c\u7b2c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"--key"),"\u6307\u5b9a\u7b2c\u4e00\u6392\u5e8f\u6807\u51c6\u662f\u53ea\u7528\u7b2c\u4e00\u5b57\u6bb5\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"1,1"),"\uff09\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4f7f\u7528\u7b2c\u4e00\u5b57\u6bb5\u7b2c\u4e00\u4e2a\u5b57\u7b26\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"1.1"),"\uff09\uff1b\u7b2c\u4e8c\u6392\u5e8f\u6807\u51c6\u662f\u7b2c\u4e8c\u5b57\u6bb5\uff0c\u6309\u6570\u503c\u6392\u5e8f\u3002"),(0,l.kt)("h2",{id:"uniq"},"uniq"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"uniq"),"\u547d\u4ee4\u5728\u6392\u5e8f\u540e\u7684\u884c\u4e2d\uff0c\u5220\u9664\u6240\u6709\u91cd\u590d\u7684\u884c\uff0c\u4fdd\u8bc1\u6240\u6709\u8f93\u51fa\u6ca1\u6709\u91cd\u590d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls /bin /usr/bin | sort | uniq\n")),(0,l.kt)("p",null,"\u5b83\u7684\u53c2\u6570\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-c"),"\t\u8f93\u51fa\u6240\u6709\u7684\u91cd\u590d\u884c\uff0c\u5e76\u4e14\u6bcf\u884c\u5f00\u5934\u663e\u793a\u91cd\u590d\u7684\u6b21\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-d"),"\t\u53ea\u8f93\u51fa\u91cd\u590d\u884c\uff0c\u800c\u4e0d\u662f\u4e0d\u91cd\u590d\u7684\u6587\u672c\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-f n"),"\t\u5ffd\u7565\u6bcf\u884c\u5f00\u5934\u7684 n \u4e2a\u5b57\u6bb5\uff0c\u5b57\u6bb5\u4e4b\u95f4\u7531\u7a7a\u683c\u5206\u9694\uff0c\u6b63\u5982 sort \u7a0b\u5e8f\u4e2d\u7684\u7a7a\u683c\u5206\u9694\u7b26\uff1b\u7136\u800c\uff0c \u4e0d\u540c\u4e8e sort \u7a0b\u5e8f\uff0cuniq \u6ca1\u6709\u9009\u9879\u6765\u8bbe\u7f6e\u5907\u7528\u7684\u5b57\u6bb5\u5206\u9694\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-i"),"\t\u5728\u6bd4\u8f83\u6587\u672c\u884c\u7684\u65f6\u5019\u5ffd\u7565\u5927\u5c0f\u5199\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-s n"),"\t\u8df3\u8fc7\uff08\u5ffd\u7565\uff09\u6bcf\u884c\u5f00\u5934\u7684 n \u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-u"),"\t\u53ea\u662f\u8f93\u51fa\u72ec\u6709\u7684\u6587\u672c\u884c\u3002\u8fd9\u662f\u9ed8\u8ba4\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-V")," \u6309\u7167\u7248\u672c\u53f7\u6392\u5e8f\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-V"),"\u53c2\u6570\u53ef\u4ee5\u6309\u7248\u672c\u53f7\u6392\u5217\uff08\u4ece\u5c0f\u5230\u5927\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sort -V input.txt\n1.0.15\n1.3.0\n2.1.2\n3.0.0\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-rV"),"\u53c2\u6570\u53ef\u4ee5\u6309\u7248\u672c\u53f7\u9006\u5e8f\u6392\u5217\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sort -rV input.txt\n3.0.0\n2.1.2\n1.3.0\n1.0.15\n")),(0,l.kt)("h2",{id:"cut"},"cut"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cut"),"\u7a0b\u5e8f\u7528\u6765\u4ece\u6587\u672c\u884c\u4e2d\u62bd\u53d6\u6587\u672c\uff0c\u5e76\u628a\u5176\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u3002\u5b83\u80fd\u591f\u63a5\u53d7\u591a\u4e2a\u6587\u4ef6\u53c2\u6570\u6216\u8005\u6807\u51c6\u8f93\u5165\u3002"),(0,l.kt)("p",null,"\u5b83\u7684\u53c2\u6570\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-c char_list")," \u62bd\u53d6\u6307\u5b9a\u8303\u56f4\u7684\u6587\u672c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-f field_list")," \u62bd\u53d6\u6307\u5b9a\u5b57\u6bb5\uff0c\u5b57\u6bb5\u4e4b\u95f4\u53ef\u4ee5tab\u5206\u9694\u4e5f\u53ef\u4ee5\u9017\u53f7\u5206\u9694"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-d delim_char")," \u6307\u5b9a\u5b57\u6bb5\u5206\u9694\u7b26\uff0c\u9ed8\u8ba4\u662ftab\u952e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--complement"),"\t\u62bd\u53d6\u6574\u4e2a\u6587\u672c\u884c\uff0c\u9664\u4e86\u90a3\u4e9b\u7531-c \u548c\uff0f\u6216-f \u9009\u9879\u6307\u5b9a\u7684\u6587\u672c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u62bd\u53d6\u6bcf\u884c\u7684\u7b2c\u4e09\u4e2a\u5b57\u6bb5\n$ cut -f 3 distros.txt\n\n# \u62bd\u53d6\u6bcf\u884c\u7684\u7b2c7\u5230\u7b2c10\u4e2a\u5b57\u7b26\n$ cut -c 7-10 distros.txt\n\n# \u62bd\u53d6\u6bcf\u884c\u7684\u7b2c23\u4e2a\u5230\u7ed3\u5c3e\u7684\u5b57\u7b261\n$ cut -c 23- distros.txt\n\n# \u6307\u5b9a\u5b57\u6bb5\u5206\u9694\u7b26\u4e3a\u5192\u53f7\n$ cut -d ':' -f 1 /etc/passwd\n")),(0,l.kt)("h2",{id:"paste"},"paste"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"paste"),"\u7a0b\u5e8f\u5c06\u591a\u4e2a\u6587\u672c\u6587\u4ef6\u6309\u884c\u5408\u5e76\uff0c\u5373\u6bcf\u4e00\u884c\u90fd\u7531\u539f\u6765\u6587\u672c\u6587\u4ef6\u7684\u6bcf\u4e00\u884c\u7ec4\u6210\uff0c\u663e\u793a\u5728\u6807\u51c6\u8f93\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ paste distros-dates.txt distros-versions.txt\n")),(0,l.kt)("h2",{id:"wc"},"wc"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wc"),"\u547d\u4ee4\u8f93\u51fa\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\u7684\u7edf\u8ba1\u4fe1\u606f\uff08word count\uff09\uff0c\u4e00\u5171\u6709\u4e09\u4e2a\u503c\uff0c\u5206\u522b\u4e3a\u884c\u6570\u3001\u8bcd\u6570\u548c\u5b57\u8282\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ wc ls-output.txt\n 7902 64566 503634 ls-output.txt\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"-l"),"\u53c2\u6570\uff0c\u5219\u53ea\u8f93\u51fa\u884c\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls /bin /usr/bin | sort | uniq | wc -l\n 2728\n")),(0,l.kt)("h2",{id:"head"},"head"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"head"),"\u547d\u4ee4\u8fd4\u56de\u6587\u672c\u6587\u4ef6\u7684\u5934\u90e8\uff0c\u9ed8\u8ba4\u663e\u793a10\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-n"),"\u53c2\u6570\u6307\u5b9a\u663e\u793a\u7684\u884c\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ head -n 5 ls-output.txt\n")),(0,l.kt)("h2",{id:"tail"},"tail"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tail"),"\u547d\u4ee4\u8fd4\u56de\u6587\u672c\u6587\u4ef6\u7684\u5c3e\u90e8\uff0c\u9ed8\u8ba4\u663e\u793a10\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-n"),"\u53c2\u6570\u6307\u5b9a\u663e\u793a\u7684\u884c\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ tail -n 5 ls-output.txt\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-f"),"\u4f1a\u5b9e\u65f6\u8ffd\u52a0\u663e\u793a\u65b0\u589e\u7684\u5185\u5bb9\uff0c\u5e38\u7528\u4e8e\u5b9e\u65f6\u76d1\u63a7\u65e5\u5fd7\uff0c\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl + c"),"\u505c\u6b62\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ tail -f /var/log/messages\n")),(0,l.kt)("h2",{id:"grep"},"grep"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"grep"),"\u7a0b\u5e8f\u7528\u4e8e\u5728\u6307\u5b9a\u6587\u4ef6\u4e4b\u4e2d\uff0c\u641c\u7d22\u7b26\u5408\u67d0\u4e2a\u6a21\u5f0f\u7684\u884c\uff0c\u5e76\u628a\u641c\u7d22\u7ed3\u679c\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ grep keyword foo.txt\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u8f93\u51fa",(0,l.kt)("inlineCode",{parentName:"p"},"foo.txt"),"\u4e4b\u4e2d\u5339\u914d",(0,l.kt)("inlineCode",{parentName:"p"},"keyword"),"\u7684\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"grep"),"\u7a0b\u5e8f\u53ef\u4ee5\u540c\u65f6\u641c\u7d22\u591a\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ grep keyword f*.txt\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u8f93\u51fa\u591a\u4e2a\u6587\u4ef6\u4e2d\u5339\u914d",(0,l.kt)("inlineCode",{parentName:"p"},"keyword"),"\u7684\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-l"),"\u53c2\u6570\u8f93\u51fa\u5339\u914d\u7684\u6587\u4ef6\u540d\uff0c\u800c\u4e0d\u662f\u6587\u4ef6\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ grep -l bzip dirlist*.txt\n")),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u641c\u7d22\u6587\u4ef6\u540d\uff0c\u800c\u4e0d\u662f\u6587\u4ef6\u5185\u5bb9\uff0c\u53ef\u4ee5\u4f7f\u7528\u91cd\u5b9a\u5411\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls /usr/bin | grep zip\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4f1a\u8f93\u51fa",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/bin"),"\u76ee\u5f55\u4e2d\uff0c\u6587\u4ef6\u540d\u4e2d\u5305\u542b\u5b50\u5b57\u7b26\u4e32",(0,l.kt)("inlineCode",{parentName:"p"},"zip"),"\u7684\u6240\u6709\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u53c2\u6570\u7684\u542b\u4e49\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-c"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"--count")," \u8f93\u51fa\u5339\u914d\u7684\u6570\u91cf\uff0c\u800c\u4e0d\u662f\u5339\u914d\u7684\u6587\u672c\u884c\u3002\u5982\u679c\u4f7f\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"li"},"-v"),"\uff0c\u5219\u8f93\u51fa\u4e0d\u5339\u914d\u7684\u6570\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-h"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"--no-filename")," \u5e94\u7528\u4e8e\u591a\u6587\u4ef6\u641c\u7d22\uff0c\u4e0d\u5728\u6bcf\u884c\u5339\u914d\u7684\u6587\u672c\u524d\uff0c\u8f93\u51fa\u6587\u4ef6\u540d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-i"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"--ignore-case")," \u5ffd\u7565\u5927\u5c0f\u5199"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"--files-with-matches")," \u8f93\u51fa\u5305\u542b\u5339\u914d\u9879\u7684\u6587\u4ef6\u540d\uff0c\u800c\u4e0d\u662f\u6587\u672c\u884c\u672c\u8eab"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-L"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"--files-without-match")," \u7c7b\u4f3c\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"-l"),"\uff0c\u4f46\u8f93\u51fa\u4e0d\u5305\u542b\u5339\u914d\u9879\u7684\u6587\u4ef6\u540d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-n"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"--line-number")," \u6bcf\u4e2a\u5339\u914d\u884c\u4e4b\u524d\u8f93\u51fa\u5176\u5bf9\u5e94\u7684\u884c\u53f7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-v"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"--invert-match")," \u53ea\u8fd4\u56de\u4e0d\u7b26\u5408\u6a21\u5f0f\u7684\u884c")),(0,l.kt)("h2",{id:"sed"},"sed"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sed"),"\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u6587\u672c\u7f16\u8f91\u5de5\u5177\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8f93\u51fa\u524d5\u884c\n$ sed -n '1,5p' distros.txt\n\n# \u8f93\u51fa\u5305\u542b\u6307\u5b9a\u5185\u5bb9\u7684\u884c\n$ sed -n '/SUSE/p' distros.txt\n\n# \u8f93\u51fa\u4e0d\u5305\u542b\u6307\u5b9a\u5185\u5bb9\u7684\u884c\n$ sed -n '/SUSE/!p' distros.txt\n\n# \u66ff\u6362\u5185\u5bb9\uff08\u53ea\u66ff\u6362\u7b2c\u4e00\u4e2a\uff09\n$ sed 's/regexp/replacement/' distros.txt\n\n# \u66ff\u6362\u5185\u5bb9\uff08\u5168\u5c40\u66ff\u6362\uff09\n$ sed 's/regexp/replacement/g' distros.txt\n")))}k.isMDXComponent=!0}}]);