"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8986],{2040:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var o=t(86070),r=t(25710);const s={},i="jupyter",p={id:"jupyter",title:"jupyter",description:"install",source:"@site/notes/python/jupyter.md",sourceDirName:".",slug:"/jupyter",permalink:"/notes/python/jupyter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"send mail",permalink:"/notes/python/fastapi_mail"},next:{title:"mitmproxy",permalink:"/notes/python/mitmproxy"}},a={},l=[{value:"install",id:"install",level:2},{value:"generate passwd",id:"generate-passwd",level:2},{value:"generate multi ports",id:"generate-multi-ports",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"jupyter",children:"jupyter"}),"\n",(0,o.jsx)(e.h2,{id:"install",children:"install"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"# jupyter config\npip install jupyter\njupyter notebook --generate-config\n"})}),"\n",(0,o.jsx)(e.h2,{id:"generate-passwd",children:"generate passwd"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"# ipython\nfrom notebook.auth import passwd\npasswd()\n# or\njupyter notebook password\n\nvim ~/.jupyter/jupyter_notebook_config.py\n\nc.NotebookApp.ip='*'\nc.NotebookApp.password = u''\nc.NotebookApp.open_browser = False\nc.NotebookApp.port = 8000\n\njupyter notebook\n"})}),"\n",(0,o.jsx)(e.h2,{id:"generate-multi-ports",children:"generate multi ports"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'import os\nimport re\nimport secrets\n\nimport yaml\nfrom rich import print\n\n\nclass ConfigMeta:\n    def __init__(self, _file="config.yaml"):\n        self.file = _file\n\n    def __getattr__(self, key):\n        with open(self.file, "r") as file:\n            self.con = yaml.safe_load(file)\n        result = self.con.get(key)\n        return result\n\n\nConfig = ConfigMeta()\n\n\ndef generate_password():\n    result = []\n    for i in range(1, 9):\n        temp = {}\n        temp["port"] = 9120 + i\n        temp["dirname"] = f"njrd_venv_{9120+i}"\n        temp["password"] = secrets.token_urlsafe(32)\n        result.append(temp)\n\n    with open("config.yaml", "w") as file:\n        yaml.dump({"config": result}, file, allow_unicode=True)\n\n\ndef stop_old_jupyter():\n    cmd = "ps aux | grep jupyter"\n    temp = os.popen(cmd)\n    for t in temp:\n        print(t)\n        ppid = re.findall("\\d+", t)[0]\n        cmd = f"kill -9 {ppid}"\n        print(cmd)\n        os.system(cmd)\n\n\ndef main():\n\n    print(Config.config)\n    for con in Config.config:\n        dirname = con["dirname"]\n        port = con["port"]\n        password = con["password"]\n\n        if os.path.exists(f"./{dirname}"):\n            print(f"exists {dirname}")\n        else:\n            cmds = [\n                f"/usr/bin/python3.6 -m venv {dirname}/.venv",\n                f"{dirname}/.venv/bin/pip install --upgrade pip",\n                f"{dirname}/.venv/bin/pip install jupyter ",\n            ]\n            for cmd in cmds:\n                print(cmd)\n                os.system(cmd)\n\n        cmd = f"source {dirname}/.venv/bin/activate && nohup {dirname}/.venv/bin/jupyter notebook --ip=\'*\' --port=\'{port}\' --notebook-dir=\'{dirname}\' --NotebookApp.token=\'{password}\' --NotebookApp.password=\'{password}\' >> /dev/null 2>&1 & "\n        print(cmd)\n        os.system(cmd)\n    return\n\n\nif __name__ == "__main__":\n    # generate_password()\n    stop_old_jupyter()\n    main()\n'})})]})}function c(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>p});var o=t(30758);const r={},s=o.createContext(r);function i(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);