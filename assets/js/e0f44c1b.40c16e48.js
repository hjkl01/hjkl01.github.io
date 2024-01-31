"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[4592],{15920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(85893),r=n(11151);const i={},o="fastapi",s={id:"fastapi",title:"fastapi",description:"",source:"@site/notes/python/fastapi.md",sourceDirName:".",slug:"/fastapi",permalink:"/notes/python/fastapi",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"django",permalink:"/notes/python/django"},next:{title:"send mail",permalink:"/notes/python/fastapi_mail"}},p={},c=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"fastapi",children:"fastapi"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\n\n# @app.get("/")\nasync def read_root():\n    return {"Hello": "World"}\n\n\n# @app.get("/items/{item_id}")\nasync def read_item(item_id: int, q: str = None):\n    return {"item_id": item_id, "q": q}\n\n\nclass Item(BaseModel):\n    name: str\n    description: str = None\n    price: float\n    tax: float = None\n\n\n# @app.post("/items/")\nasync def create_item(item: Item):\n    return item\n\n\napp.add_api_route("/", read_root)\napp.add_api_route("/item/{item_id}", read_item)\napp.add_api_route("/items/", create_item, methods=[\'POST\'])\n\nif __name__ == \'__main__\':\n    uvicorn.run(\'main:app\', reload=True)\n# gunicorn test:app -w 4 -k uvicorn.workers.UvicornWorker\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(67294);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);