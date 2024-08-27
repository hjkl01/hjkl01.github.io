"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[6553],{2200:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var s=a(4848),t=a(8453);const i={},o="send mail",m={id:"fastapi_mail",title:"send mail",description:"fastapi send mail API",source:"@site/notes/python/fastapi_mail.md",sourceDirName:".",slug:"/fastapi_mail",permalink:"/notes/python/fastapi_mail",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fastapi",permalink:"/notes/python/fastapi"},next:{title:"jupyter",permalink:"/notes/python/jupyter"}},r={},l=[{value:"fastapi send mail API",id:"fastapi-send-mail-api",level:2},{value:"yagmail",id:"yagmail",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"send-mail",children:"send mail"})}),"\n",(0,s.jsx)(e.h2,{id:"fastapi-send-mail-api",children:"fastapi send mail API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'import uvicorn\nfrom fastapi import FastAPI, BackgroundTasks, UploadFile, File, Form\nfrom starlette.responses import JSONResponse\nfrom fastapi_mail import FastMail, MessageSchema, ConnectionConfig\nfrom pydantic import BaseModel, EmailStr\nfrom typing import List, Text\n\n\nclass EmailSchema(BaseModel):\n    email: List[EmailStr]\n    html: Text\n\nconf = ConnectionConfig(\n\t# update username, password, from\n    # example qq mail\n    # https://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=1001256\n    MAIL_USERNAME="qq123456",\n    MAIL_PASSWORD="password",\n    MAIL_FROM="qq123456@qq.com",\n    MAIL_PORT=587,\n    MAIL_SERVER="smtp.qq.com",\n\n    MAIL_TLS=True,\n    MAIL_SSL=False,\n    USE_CREDENTIALS=True,\n    VALIDATE_CERTS=True,\n)\n\napp = FastAPI()\n\n\nhtml = """\n<p>Thanks for using Fastapi-mail</p>\n"""\n\n\n@app.post("/email")\nasync def simple_send(email: EmailSchema) -> JSONResponse:\n\n    message = MessageSchema(\n        subject="Fastapi-Mail module",\n        recipients=email.dict().get(\n            "email"\n        ),  # List of recipients, as many as you can pass\n        body=email.dict().get("html", html),\n        subtype="html",\n    )\n\n    fm = FastMail(conf)\n    await fm.send_message(message)\n    return JSONResponse(status_code=200, content={"message": "email has been sent"})\n\n\n@app.post("/file")\nasync def send_file(\n    background_tasks: BackgroundTasks,\n    file: UploadFile = File(...),\n    email: EmailStr = Form(...),\n) -> JSONResponse:\n\n    message = MessageSchema(\n        subject="Fastapi mail module",\n        recipients=[email],\n        body="Simple background task ",\n        attachments=[file],\n    )\n\n    fm = FastMail(conf)\n\n    background_tasks.add_task(fm.send_message, message)\n\n    return JSONResponse(status_code=200, content={"message": "email has been sent"})\n\nif __name__ == \'__main__\':\n    uvicorn.run(\'main:app\', reload=True, host=\'127.0.0.1\', port=8000)\n    # https://sabuhish.github.io/fastapi-mail/example/\n'})}),"\n",(0,s.jsx)(e.h2,{id:"yagmail",children:"yagmail"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'import yagmail\n\nusername = "xxx@qq.com"\npassword = "xxx"\nhost = "smtp.qq.com"\n\nmail = yagmail.SMTP(user=username, password=password, host=host)\n\nmail.send(to=username, subject="\u8fd9\u662f\u4e3b\u9898", contents=["\u8fd9\u662f\u5185\u5bb9", r"./logs/1695814_1.png"])\nprint("finish !")\n'})})]})}function c(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>o,x:()=>m});var s=a(6540);const t={},i=s.createContext(t);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function m(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);