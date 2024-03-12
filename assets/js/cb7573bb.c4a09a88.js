"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8669],{47029:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(85893),r=t(11151);const s={sidebar_position:0},o="python",a={id:"index",title:"python",description:"pip",source:"@site/notes/python/index.md",sourceDirName:".",slug:"/",permalink:"/notes/python/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"celery",permalink:"/notes/python/celery"}},l={},c=[{value:"pip",id:"pip",level:3},{value:"basic",id:"basic",level:3},{value:"decorator try",id:"decorator-try",level:3},{value:"datetime",id:"datetime",level:3},{value:"read big file",id:"read-big-file",level:3},{value:"csv",id:"csv",level:3},{value:"execl",id:"execl",level:3},{value:"iterator",id:"iterator",level:3},{value:"asyncio",id:"asyncio",level:3},{value:"xmljson",id:"xmljson",level:3},{value:"mysql",id:"mysql",level:3},{value:"\u8f6c\u7801",id:"\u8f6c\u7801",level:3},{value:"\u7701\u5e02\u5206\u5272",id:"\u7701\u5e02\u5206\u5272",level:3},{value:"spider \u7f16\u7801",id:"spider-\u7f16\u7801",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"python",children:"python"}),"\n",(0,i.jsx)(e.h3,{id:"pip",children:"pip"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"# pip with pyproject.toml\npip install pip-tools\npython -m piptools compile -o requirements.txt pyproject.toml\npip install -r requirements.txt\n\n# pip mirror\npip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package\npip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple\n"})}),"\n",(0,i.jsx)(e.h3,{id:"basic",children:"basic"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"# json\njson.dumps(item, ensure_ascii=False, indent=4)\n\n# jmespath\nhttps://jmespath.org/tutorial.html\n\n# random\nrandom.shuffle(_list)\n\n# \u5bf9\u5b57\u5178\u6392\u5e8f\nsorted(_dict.items(), key=lambda d: d[1], reverse=False)\n\n# unicode replace\nrepr()\n\n### http server\npy2 python -m SimpleHTTPServer 8000\npy3 python -m http.server 8000\n\n# \u683c\u5f0f\u5316\u8f93\u51fa\nprint(\"{:02d}\".format(1))\nprint(f\"{1:02d}\")\n\n# \u4e58\u6cd5\u8868\nprint ('\\n'.join([' '.join(['%s*%s=%-2s' % (y,x,x*y) for y in range(1,x+1)]) for x in range(1,10)]))\n"})}),"\n",(0,i.jsx)(e.h3,{id:"decorator-try",children:"decorator try"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import functools\n\ndef decorator_try(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except Exception as err:\n            print(err)\n            return err\n\n    return wrapper\n"})}),"\n",(0,i.jsx)(e.h3,{id:"datetime",children:(0,i.jsx)(e.a,{href:"https://docs.python.org/zh-cn/3/library/datetime.html#datetime.timezone",children:"datetime"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"pip install python-dateutil\n\n# datetime to timestamp\nimport datetime\nd = datetime.date(2023, 1, 1)\nprint(d)\nprint(d.strftime(\"%s\"))\n\n# timestamp to datetime\nfrom datetime import datetime\ntimestamp = 1694691579999\ndt_object = datetime.fromtimestamp(timestamp/1000)\nprint(\"dt_object =\", dt_object)\n\n# str to datetime\nfrom datetime import datetime\ns = \"20240110111532\"\ndatetime_object = datetime.strptime(s, \"%Y%m%d%H%M%S\")\nprint(datetime_object)\n\n# yestoday\nfrom datetime import datetime, timedelta\n\n# days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0\nyestoday = datetime.today() - timedelta(days=1)\nprint(yestoday)\n\nfrom datetime import datetime\nfrom dateutil import parser\n\nformat_time = datetime.now().strftime(\"%m/%d/%Y, %H:%M:%S\")\n\nt = \"Thu, 9 Sep 2021 00:17:59\"\nresult = parser.parse(t)\nprint(result)\nprint(type(result))\n\nnow = datetime.now()\nprint((now - result).days)\n\n>>> import arrow\n>>> arrow.get('2013-05-11T21:23:58.970460+07:00')\n<Arrow [2013-05-11T21:23:58.970460+07:00]>\n\n>>> utc = arrow.utcnow()\n>>> utc\n<Arrow [2013-05-11T21:23:58.970460+00:00]>\n\n>>> utc = utc.shift(hours=-1)\n>>> utc\n<Arrow [2013-05-11T20:23:58.970460+00:00]>\n\n>>> local = utc.to('US/Pacific')\n>>> local\n<Arrow [2013-05-11T13:23:58.970460-07:00]>\n\n>>> local.timestamp()\n1368303838.970460\n\n>>> local.format()\n'2013-05-11 13:23:58 -07:00'\n\n>>> local.format('YYYY-MM-DD HH:mm:ss ZZ')\n'2013-05-11 13:23:58 -07:00'\n\n>>> local.humanize()\n'an hour ago'\n\n>>> local.humanize(locale='ko-kr')\n'\ud55c\uc2dc\uac04 \uc804'\n"})}),"\n",(0,i.jsx)(e.h3,{id:"read-big-file",children:"read big file"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'with open("log.txt") as infile:\n    for line in infile:\n        do_something_with(line)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"csv",children:"csv"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import csv\n\n# read\nresult = []\ninput_file = csv.DictReader(open("result.csv"))\nfor row in input_file:\n    result.append(row)\nprint(result)\n\n\n# write dict\nmy_dict = {"test": 1, "testing": 2}\nwith open(\'mycsvfile.csv\', \'w\', encoding="utf-8-sig") as f:  # You will need \'wb\' mode in Python 2.x\n    w = csv.DictWriter(f, my_dict.keys())\n    w.writeheader()\n    w.writerow(my_dict)\n\n# write list\nresult = [{"test": 1, "testing": 2}, {"test": 1, "testing": 2}]\nwith open(\'mycsvfile.csv\', \'w\', encoding="utf-8-sig") as f:  # You will need \'wb\' mode in Python 2.x\n    w = csv.DictWriter(f, result[0].keys())\n    w.writeheader()\n    w.writerows(result)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"execl",children:"execl"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"# write\npip install pandas openpyxl\n\n# dict\nimport pandas as pd\ndf = pd.DataFrame.from_dict({'Column1':[1,2,3,4],'Column2':[5,6,7,8]})\ndf.to_excel('test.xlsx', header=True, index=False)\n\n# list\nimport pandas as pd\nColumn1 = [1,2,3,4]\nColumn2 = [5,6,7,8]\ndf = pd.DataFrame.from_dict({'Column1':Column1,'Column2':Column2})\ndf.to_excel('test.xlsx', header=True, index=False)\n\n# read\nimport pandas as pd\n\ndf = pd.read_excel(\"example.xlsx\", index_col=0)\ndata_dict = df.to_dict(\"records\")\nprint(data_dict)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"iterator",children:"iterator"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def generate_iterator():\n    for i in range(10):\n        yield i\n\n\nfor i in generate_iterator():\n    print(i)\n\nnum = generate_iterator()\nwhile True:\n    try:\n        print(next(num))\n    except StopIteration:\n        print('stop')\n        break\n"})}),"\n",(0,i.jsx)(e.h3,{id:"asyncio",children:"asyncio"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import asyncio\nimport time\n\ndef now(): return time.time()\n\nasync def do_some_work(x):\n    print('Waiting: ', x)\n\n    await asyncio.sleep(x)\n    return 'Done after {}s'.format(x)\n\nstart = now()\n\ncoroutine1 = do_some_work(1)\ncoroutine2 = do_some_work(2)\ncoroutine3 = do_some_work(4)\n\ntasks = [\n    asyncio.ensure_future(coroutine1),\n    asyncio.ensure_future(coroutine2),\n    asyncio.ensure_future(coroutine3)\n]\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(asyncio.wait(tasks))\n\nfor task in tasks:\n    print('Task ret: ', task.result())\n\nprint('TIME: ', now() - start)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"xmljson",children:"xmljson"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import xmljson\nfrom lxml.etree import  fromstring,tostring\n\njson.loads(json.dumps(xmljson.badgerfish.data(fromstring(con.encode()))))\n"})}),"\n",(0,i.jsx)(e.h3,{id:"mysql",children:"mysql"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'# install mysql-clients\n\n# in archlinux\nsudo pacman --noconfirm -S mysql-clients gcc\npip install mysqlclient\n\n# mac\nbrew install mysql-client\necho \'export PATH="/usr/local/opt/mysql-client/bin:$PATH"\' >> ~/.bash_profile\nexport PATH="/usr/local/opt/mysql-client/bin:$PATH"\npip install mysqlclient\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u8f6c\u7801",children:"\u8f6c\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import os\nimport chardet\n\n\ndef trans(filename):\n    print("file=====", filename)\n    with open(f"txt/{filename}", "rb") as file:\n        con = file.read()\n    _char = chardet.detect(con)["encoding"]\n    print("char is ", _char)\n\n    if "utf-8" in _char or "UTF-8" in _char:\n        cmd = f"mv txt/{filename} result/{filename}"\n    else:\n        cmd = f"iconv -c -f {_char} -t UTF-8 txt/{filename} > result/{filename}"\n    print(cmd)\n    os.system(cmd)\n\n\ndef main():\n    txts = os.listdir("txt")\n    for txt in txts:\n        if ".txt" not in txt:\n            print(txt)\n            continue\n        try:\n            trans(txt)\n        except Exception as err:\n            print(err)\n        continue\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u7701\u5e02\u5206\u5272",children:"\u7701\u5e02\u5206\u5272"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'pip install cpca\nresult = cpca.transform("xx\u7701xx\u5e02xx\u533a", pos_sensitive=True).to_dict("list")\n'})}),"\n",(0,i.jsx)(e.h3,{id:"spider-\u7f16\u7801",children:"spider \u7f16\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'# response.encoding \u4ece\u7f51\u9875\u54cd\u5e94\u7684header\u4e2d\uff0c\u63d0\u53d6charset\u5b57\u6bb5\u4e2d\u7684\u7f16\u7801\u3002\u82e5header\u4e2d\u6ca1\u6709charset\u5b57\u6bb5\uff0c\u5219\u9ed8\u8ba4\u4e3aISO-8859-1\u7f16\u7801\u6a21\u5f0f\uff0cISO-8859-1\u7f16\u7801\u65e0\u6cd5\u89e3\u6790\u4e2d\u6587\uff0c\u8fd9\u4e5f\u662f\u4e2d\u6587\u4e71\u7801\u7684\u539f\u56e0\u3002\n# response.apparent_encoding  \u4ece\u7f51\u9875\u7684\u5185\u5bb9\u4e2d\uff08html\u6e90\u7801\uff09\u4e2d\u5206\u6790\u7f51\u9875\u7f16\u7801\u7684\u65b9\u5f0f\u3002\u6240\u4ee5apparent_encoding\u6bd4encoding\u66f4\u52a0\u51c6\u786e\uff0c\u83b7\u53d6\u5230\u7684\u624d\u662f\u539f\u7f51\u9875\u7684\u5b9e\u9645\u7f16\u7801\u3002\n\nresponse.encoding = response.apparent_encoding\nprint(response.encoding)\nprint(response.apparent_encoding)\n\nhtml = etree.HTML(text)\nnames = html.xpath("//tr//td//text()")\nnames = [i.encode("iso-8859-1", "ignore").decode("gb2312", "ignore") for i in names]\n'})})]})}function p(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);