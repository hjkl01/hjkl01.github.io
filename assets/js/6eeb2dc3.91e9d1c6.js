"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[4297],{8206:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var t=s(4848),c=s(8453);const o={},r="sql",a={id:"sql",title:"sql",description:"",source:"@site/notes/python/sql.md",sourceDirName:".",slug:"/sql",permalink:"/notes/python/sql",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"settings.py",permalink:"/notes/python/settings"}},l={},i=[];function d(n){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"sql",children:"sql"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"select distinct\n  column1,\n  column2\nfrom\n  some_table;\n\n\nSELECT\n  name,\n  CASE\n    WHEN (age > 60) THEN '\u8001\u540c\u5b66'\n    WHEN (age > 20) THEN '\u5e74\u8f7b'\n    ELSE '\u5c0f\u540c\u5b66'\n  END AS age_level\nFROM\n  student\n\n# \u7edf\u8ba1\u5b66\u751f\u8868\u4e2d\u7684\u73ed\u7ea7\u7f16\u53f7\uff08class_id\uff09\u548c\u6bcf\u4e2a\u73ed\u7ea7\u7684\u5e73\u5747\u6210\u7ee9\uff08avg_score\uff09\nSELECT\n  class_id,\n  AVG(score) AS avg_score\nFROM\n  student\nGROUP BY\n  class_id;\n\n\n# \u7edf\u8ba1\u5b66\u751f\u8868\u4e2d\u73ed\u7ea7\u7684\u603b\u6210\u7ee9\u8d85\u8fc7 150 \u5206\u7684\u73ed\u7ea7\u7f16\u53f7\uff08class_id\uff09\u548c\u603b\u6210\u7ee9\uff08total_score\uff09\nSELECT\n  class_id,\n  SUM(score) AS total_score\nFROM\n  student\nGROUP BY\n  class_id\nHAVING\n  SUM(score) > 150;\n\n\nselect\n  s.name student_name,\n  s.age student_age,\n  s.class_id class_id,\n  c.name class_name,\n  c.level class_level\nfrom\n  student s\n  join class c on s.class_id = c.id;\n\n\n# \u6839\u636e\u5b57\u6bb5name \u9009\u62e9\u91cd\u590d\u6570\u636e\nWITH ranked_scores AS (\n    SELECT\n        name,\n        score,\n        ROW_NUMBER() OVER (PARTITION BY name ) AS rn\n    FROM public.score\n)\nSELECT\n    name,\n    score\nFROM ranked_scores\nWHERE rn = 1;\n"})})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>a});var t=s(6540);const c={},o=t.createContext(c);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);