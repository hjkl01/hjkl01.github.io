"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8326],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||p;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=t(83117),o=(t(67294),t(3905));const p={},a="jupyter",i={unversionedId:"jupyter",id:"jupyter",title:"jupyter",description:"install",source:"@site/notes/python/jupyter.md",sourceDirName:".",slug:"/jupyter",permalink:"/notes/python/jupyter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"send mail",permalink:"/notes/python/fastapi_mail"},next:{title:"mitmproxy",permalink:"/notes/python/mitmproxy"}},s={},l=[{value:"install",id:"install",level:2},{value:"generate passwd",id:"generate-passwd",level:2},{value:"generate multi ports",id:"generate-multi-ports",level:2}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jupyter"},"jupyter"),(0,o.kt)("h2",{id:"install"},"install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# jupyter config\npip install jupyter\njupyter notebook --generate-config\n")),(0,o.kt)("h2",{id:"generate-passwd"},"generate passwd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# ipython\nfrom notebook.auth import passwd\npasswd()\n# or\njupyter notebook password\n\nvim ~/.jupyter/jupyter_notebook_config.py \n\nc.NotebookApp.ip='*'\nc.NotebookApp.password = u''\nc.NotebookApp.open_browser = False\nc.NotebookApp.port = 8000\n\njupyter notebook\n")),(0,o.kt)("h2",{id:"generate-multi-ports"},"generate multi ports"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport re\nimport secrets\n\nimport yaml\nfrom rich import print\n\n\nclass ConfigMeta:\n    def __init__(self, _file="config.yaml"):\n        self.file = _file\n\n    def __getattr__(self, key):\n        with open(self.file, "r") as file:\n            self.con = yaml.safe_load(file)\n        result = self.con.get(key)\n        return result\n\n\nConfig = ConfigMeta()\n\n\ndef generate_password():\n    result = []\n    for i in range(1, 9):\n        temp = {}\n        temp["port"] = 9120 + i\n        temp["dirname"] = f"njrd_venv_{9120+i}"\n        temp["password"] = secrets.token_urlsafe(32)\n        result.append(temp)\n\n    with open("config.yaml", "w") as file:\n        yaml.dump({"config": result}, file, allow_unicode=True)\n\n\ndef stop_old_jupyter():\n    cmd = "ps aux | grep jupyter"\n    temp = os.popen(cmd)\n    for t in temp:\n        print(t)\n        ppid = re.findall("\\d+", t)[0]\n        cmd = f"kill -9 {ppid}"\n        print(cmd)\n        os.system(cmd)\n\n\ndef main():\n\n    print(Config.config)\n    for con in Config.config:\n        dirname = con["dirname"]\n        port = con["port"]\n        password = con["password"]\n\n        if os.path.exists(f"./{dirname}"):\n            print(f"exists {dirname}")\n        else:\n            cmds = [\n                f"/usr/bin/python3.6 -m venv {dirname}/.venv",\n                f"{dirname}/.venv/bin/pip install --upgrade pip",\n                f"{dirname}/.venv/bin/pip install jupyter ",\n            ]\n            for cmd in cmds:\n                print(cmd)\n                os.system(cmd)\n\n        cmd = f"source {dirname}/.venv/bin/activate && nohup {dirname}/.venv/bin/jupyter notebook --ip=\'*\' --port=\'{port}\' --notebook-dir=\'{dirname}\' --NotebookApp.token=\'{password}\' --NotebookApp.password=\'{password}\' >> /dev/null 2>&1 & "\n        print(cmd)\n        os.system(cmd)\n    return\n\n\nif __name__ == "__main__":\n    # generate_password()\n    stop_old_jupyter()\n    main()\n')))}u.isMDXComponent=!0}}]);