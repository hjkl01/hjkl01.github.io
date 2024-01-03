"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[3065],{3265:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=i(5893),t=i(1151);const s={},o="selenium",a={id:"selenium",title:"selenium",description:"selenium",source:"@site/notes/python/selenium.md",sourceDirName:".",slug:"/selenium",permalink:"/notes/python/selenium",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pip",permalink:"/notes/python/pip"},next:{title:"settings.py",permalink:"/notes/python/settings"}},p={},u=[{value:"selenium",id:"selenium-1",level:3},{value:"selenium-wire",id:"selenium-wire",level:3}];function m(e){const n={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"selenium",children:"selenium"}),"\n",(0,r.jsx)(n.h3,{id:"selenium-1",children:"selenium"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import random\nfrom selenium import webdriver\nfrom time import sleep\nfrom bs4 import BeautifulSoup as BS\n\n\noptions = webdriver.ChromeOptions()\nUA = \'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36\'\noptions.add_argument(f\'user-agent={UA}\')\n\noptions.add_experimental_option("excludeSwitches", ["enable-automation"])\noptions.add_experimental_option(\'useAutomationExtension\', False)\n\n# \u6ca1\u6709\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u7684\u8bdd\u9700\u8981\u586b\u5199Chromedriver\u7684\u8def\u5f84\uff1awebdriver.Chrome(executable_path="***")\ndriver = webdriver.Chrome(options=options)\ndriver.maximize_window()\n\n# \u53bb\u6389window.navigator.webdriver\u5b57\u6bb5\uff0c\u9632\u6b62\u88ab\u68c0\u6d4b\u51fa\u662f\u4f7f\u7528selenium\ndriver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {\n  "source": """\n    Object.defineProperty(navigator, \'webdriver\', {\n      get: () => undefined\n    })\n  """\n})\n'})}),"\n",(0,r.jsx)(n.h3,{id:"selenium-wire",children:"selenium-wire"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import os\nimport time\nimport random\nfrom urllib.parse import quote\n\nfrom seleniumwire.utils import decode\nfrom seleniumwire import webdriver\nfrom user_agent import generate_user_agent\n\n\nfrom loguru import logger\n\n\ndef selenium_wire_search(shopname, city):\n    if os.path.exists(f"logs/{city}/{shopname}.json"):\n        print(f"crawled {shopname} {city}")\n        return False\n\n    cities = {"beijing": "2", "shanghai": "1", "guangzhou": "4", "shenzhen": "7"}\n\n    # driver = webdriver.Chrome()\n\n    options = webdriver.ChromeOptions()\n    UA = generate_user_agent(device_type="smartphone")\n    options.add_argument(f"user-agent={UA}")\n    driver = webdriver.Chrome(chrome_options=options)\n\n    # Go to the Google home page\n    shopname_url = quote(shopname, "utf-8")\n    url = f"https://m.dianping.com/shoplist/{cities[city]}/search?from=m_search&keyword={shopname_url}"\n    driver.get(url)\n\n    # Access requests via the `requests` attribute\n    for request in driver.requests:\n        if request.response:\n            if "module" in request.url:\n                print(request.response.status_code)\n                print(request.params, request.body)\n                print(request.response.headers)\n                # print(request.ws_messages)\n                # print(request.body)\n                data = request.response.body\n                try:\n                    if "Content-Encoding" not in request.response.headers.keys():\n                        logger.warning("this request is error")\n                        continue\n                    body = decode(data, request.response.headers.get("Content-Encoding", "gzip"))\n                    print(len(body))\n                    if not os.path.exists(f"logs/{city}"):\n                        os.mkdir(f"logs/{city}")\n\n                    with open(f"logs/{city}/{shopname}.json", "w") as file:\n                        file.write(body.decode("utf-8"))\n                    logger.info(f"save success {shopname} {city}")\n                    break\n                except Exception as err:\n                    logger.error(err)\n\n    driver.quit()\n    return True\n\n\ndef main():\n    with open("logs/dianping_shops.txt", "r", encoding="utf-8") as file:\n        shops = [s.strip() for s in file.readlines()]\n\n    cities = {"beijing": "2", "shanghai": "1", "guangzhou": "4", "shenzhen": "7"}\n    for shopname in shops:\n        print(shopname)\n        for city in list(cities.keys()):\n            temp = selenium_wire_search(shopname, city)\n            if temp:\n                time_sleep = random.randint(5, 10)\n            else:\n                time_sleep = 0\n            print(time_sleep)\n            time.sleep(time_sleep)\n\n\nif __name__ == "__main__":\n    main()\n'})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var r=i(7294);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);