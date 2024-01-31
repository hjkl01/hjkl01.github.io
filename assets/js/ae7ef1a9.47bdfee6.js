"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[5582],{42428:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(85893),o=s(11151);const r={},i="multiprocessing",c={id:"multiprocessing",title:"multiprocessing",description:"example",source:"@site/notes/python/multiprocessing.md",sourceDirName:".",slug:"/multiprocessing",permalink:"/notes/python/multiprocessing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mongo",permalink:"/notes/python/mongo"},next:{title:"ocr",permalink:"/notes/python/ocr"}},p={},l=[{value:"example",id:"example",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"multiprocessing",children:"multiprocessing"}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import multiprocessing\n\n\ndef f(msg):\n    print(msg)\n    return multiprocessing.current_process().name + \'-\' + msg\n\n\ndef func1():\n    pool = multiprocessing.Pool(processes=multiprocessing.cpu_count())\n    results = []\n    for i in range(10):\n        msg = "hello %d" % (i)\n        results.append(pool.apply_async(f, (msg, )))\n    pool.close()\n    pool.join()\n    print("Sub-process(es) done.")\n\n    for res in results:\n        print(res.get())\n\n\ndef func2():\n    from multiprocessing import Pool\n    # with Pool(5) as p:\n    with Pool(processes=multiprocessing.cpu_count()) as p:\n        print(p.map(f, [str(i) for i in range(9)]))\n\n\nif __name__ == "__main__":\n    # func1()\n    func2()\n'})})]})}function a(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>i});var t=s(67294);const o={},r=t.createContext(o);function i(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);