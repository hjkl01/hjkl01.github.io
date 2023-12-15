"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8669],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:0},o="python",s={unversionedId:"index",id:"index",title:"python",description:"basic",source:"@site/notes/python/index.md",sourceDirName:".",slug:"/",permalink:"/notes/python/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"celery",permalink:"/notes/python/celery"}},l={},p=[{value:"basic",id:"basic",level:3},{value:"decorator try",id:"decorator-try",level:3},{value:"datetime",id:"datetime",level:3},{value:"read big file",id:"read-big-file",level:3},{value:"iterator",id:"iterator",level:3},{value:"csv",id:"csv",level:3},{value:"execl",id:"execl",level:3},{value:"asyncio",id:"asyncio",level:3},{value:"xmljson",id:"xmljson",level:3},{value:"mysql",id:"mysql",level:3},{value:"\u8f6c\u7801",id:"\u8f6c\u7801",level:3},{value:"\u7701\u5e02\u5206\u5272",id:"\u7701\u5e02\u5206\u5272",level:3},{value:"spider \u7f16\u7801",id:"spider-\u7f16\u7801",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python"},"python"),(0,a.kt)("h3",{id:"basic"},"basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# json\njson.dumps(item, ensure_ascii=False, indent=4)\n\n# jmespath\nhttps://jmespath.org/tutorial.html\n\n# random\nrandom.shuffle(_list)\n\n# \u5bf9\u5b57\u5178\u6392\u5e8f\nsorted(_dict.items(), key=lambda d: d[1], reverse=False)\n\n# unicode replace\nrepr()\n\n### http server\npy2 python -m SimpleHTTPServer 8000\npy3 python -m http.server 8000\n\n# \u683c\u5f0f\u5316\u8f93\u51fa\nprint(\"{:02d}\".format(1))\nprint(f\"{1:02d}\")\n\n# \u4e58\u6cd5\u8868\nprint ('\\n'.join([' '.join(['%s*%s=%-2s' % (y,x,x*y) for y in range(1,x+1)]) for x in range(1,10)]))\n")),(0,a.kt)("h3",{id:"decorator-try"},"decorator try"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import functools\n\ndef decorator_try(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except Exception as err:\n            print(err)\n            return err\n\n    return wrapper\n")),(0,a.kt)("h3",{id:"datetime"},(0,a.kt)("a",{parentName:"h3",href:"https://docs.python.org/zh-cn/3/library/datetime.html#datetime.timezone"},"datetime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"pip install python-dateutil\n\n# datetime to timestamp\nimport datetime\nd = datetime.date(2023, 1, 1)\nprint(d)\nprint(d.strftime(\"%s\"))\n\n# timestamp to datetime\nfrom datetime import datetime\ntimestamp = 1694691579999\ndt_object = datetime.fromtimestamp(timestamp/1000)\nprint(\"dt_object =\", dt_object)\n\n# yestoday\nfrom datetime import datetime, timedelta\n\n# days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0\nyestoday = datetime.today() - timedelta(days=1)\nprint(yestoday)\n\nfrom datetime import datetime\nfrom dateutil import parser\n\nformat_time = datetime.now().strftime(\"%m/%d/%Y, %H:%M:%S\")\n\nt = \"Thu, 9 Sep 2021 00:17:59\"\nresult = parser.parse(t)\nprint(result)\nprint(type(result))\n\nnow = datetime.now()\nprint((now - result).days)\n\n>>> import arrow\n>>> arrow.get('2013-05-11T21:23:58.970460+07:00')\n<Arrow [2013-05-11T21:23:58.970460+07:00]>\n\n>>> utc = arrow.utcnow()\n>>> utc\n<Arrow [2013-05-11T21:23:58.970460+00:00]>\n\n>>> utc = utc.shift(hours=-1)\n>>> utc\n<Arrow [2013-05-11T20:23:58.970460+00:00]>\n\n>>> local = utc.to('US/Pacific')\n>>> local\n<Arrow [2013-05-11T13:23:58.970460-07:00]>\n\n>>> local.timestamp()\n1368303838.970460\n\n>>> local.format()\n'2013-05-11 13:23:58 -07:00'\n\n>>> local.format('YYYY-MM-DD HH:mm:ss ZZ')\n'2013-05-11 13:23:58 -07:00'\n\n>>> local.humanize()\n'an hour ago'\n\n>>> local.humanize(locale='ko-kr')\n'\ud55c\uc2dc\uac04 \uc804'\n")),(0,a.kt)("h3",{id:"read-big-file"},"read big file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'with open("log.txt") as infile:\n    for line in infile:\n        do_something_with(line)\n')),(0,a.kt)("h3",{id:"iterator"},"iterator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def generate_iterator():\n    for i in range(10):\n        yield i\n\n\nfor i in generate_iterator():\n    print(i)\n\n# num = generate_iterator()\n# while True:\n#     try:\n#         print(next(num))\n#     except StopIteration:\n#         print('stop')\n#         break\n")),(0,a.kt)("h3",{id:"csv"},"csv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import csv\n\n# read\nresult = []\ninput_file = csv.DictReader(open("result.csv"))\nfor row in input_file:\n    result.append(row)\nprint(result)\n\n\n# write dict\nmy_dict = {"test": 1, "testing": 2}\nwith open(\'mycsvfile.csv\', \'w\', encoding="utf-8-sig") as f:  # You will need \'wb\' mode in Python 2.x\n    w = csv.DictWriter(f, my_dict.keys())\n    w.writeheader()\n    w.writerow(my_dict)\n\n# write list\nresult = [{"test": 1, "testing": 2}, {"test": 1, "testing": 2}]\nwith open(\'mycsvfile.csv\', \'w\', encoding="utf-8-sig") as f:  # You will need \'wb\' mode in Python 2.x\n    w = csv.DictWriter(f, result[0].keys())\n    w.writeheader()\n    w.writerows(result)\n')),(0,a.kt)("h3",{id:"execl"},"execl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# write\npip install pandas openpyxl\n\n# dict\nimport pandas as pd\ndf = pd.DataFrame.from_dict({'Column1':[1,2,3,4],'Column2':[5,6,7,8]})\ndf.to_excel('test.xlsx', header=True, index=False)\n\n# list\nimport pandas as pd\nColumn1 = [1,2,3,4]\nColumn2 = [5,6,7,8]\ndf = pd.DataFrame.from_dict({'Column1':Column1,'Column2':Column2})\ndf.to_excel('test.xlsx', header=True, index=False)\n\n# read\nimport pandas as pd\n\ndf = pd.read_excel(\"example.xlsx\", index_col=0)\ndata_dict = df.to_dict(\"records\")\nprint(data_dict)\n")),(0,a.kt)("h3",{id:"asyncio"},"asyncio"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\nimport time\n\ndef now(): return time.time()\n\nasync def do_some_work(x):\n    print('Waiting: ', x)\n\n    await asyncio.sleep(x)\n    return 'Done after {}s'.format(x)\n\nstart = now()\n\ncoroutine1 = do_some_work(1)\ncoroutine2 = do_some_work(2)\ncoroutine3 = do_some_work(4)\n\ntasks = [\n    asyncio.ensure_future(coroutine1),\n    asyncio.ensure_future(coroutine2),\n    asyncio.ensure_future(coroutine3)\n]\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(asyncio.wait(tasks))\n\nfor task in tasks:\n    print('Task ret: ', task.result())\n\nprint('TIME: ', now() - start)\n\n\n# yield\ndef create_generator(_range):\n    for i in range(_range):\n        yield i\n\nresult = create_generator(5)\nfor i in result:\n    print(i)\n")),(0,a.kt)("h3",{id:"xmljson"},"xmljson"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import xmljson\nfrom lxml.etree import  fromstring,tostring\n\njson.loads(json.dumps(xmljson.badgerfish.data(fromstring(con.encode()))))\n")),(0,a.kt)("h3",{id:"mysql"},"mysql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# install mysql-clients\n\n# in archlinux\nsudo pacman --noconfirm -S mysql-clients gcc\npip install mysqlclient\n\n# mac\nbrew install mysql-client\necho \'export PATH="/usr/local/opt/mysql-client/bin:$PATH"\' >> ~/.bash_profile\nexport PATH="/usr/local/opt/mysql-client/bin:$PATH"\npip install mysqlclient\n')),(0,a.kt)("h3",{id:"\u8f6c\u7801"},"\u8f6c\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport chardet\n\n\ndef trans(filename):\n    print("file=====", filename)\n    with open(f"txt/{filename}", "rb") as file:\n        con = file.read()\n    _char = chardet.detect(con)["encoding"]\n    print("char is ", _char)\n\n    if "utf-8" in _char or "UTF-8" in _char:\n        cmd = f"mv txt/{filename} result/{filename}"\n    else:\n        cmd = f"iconv -c -f {_char} -t UTF-8 txt/{filename} > result/{filename}"\n    print(cmd)\n    os.system(cmd)\n\n\ndef main():\n    txts = os.listdir("txt")\n    for txt in txts:\n        if ".txt" not in txt:\n            print(txt)\n            continue\n        try:\n            trans(txt)\n        except Exception as err:\n            print(err)\n        continue\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h3",{id:"\u7701\u5e02\u5206\u5272"},"\u7701\u5e02\u5206\u5272"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'pip install cpca\nresult = cpca.transform("xx\u7701xx\u5e02xx\u533a", pos_sensitive=True).to_dict("list")\n')),(0,a.kt)("h3",{id:"spider-\u7f16\u7801"},"spider \u7f16\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# response.encoding \u4ece\u7f51\u9875\u54cd\u5e94\u7684header\u4e2d\uff0c\u63d0\u53d6charset\u5b57\u6bb5\u4e2d\u7684\u7f16\u7801\u3002\u82e5header\u4e2d\u6ca1\u6709charset\u5b57\u6bb5\uff0c\u5219\u9ed8\u8ba4\u4e3aISO-8859-1\u7f16\u7801\u6a21\u5f0f\uff0cISO-8859-1\u7f16\u7801\u65e0\u6cd5\u89e3\u6790\u4e2d\u6587\uff0c\u8fd9\u4e5f\u662f\u4e2d\u6587\u4e71\u7801\u7684\u539f\u56e0\u3002\n# response.apparent_encoding  \u4ece\u7f51\u9875\u7684\u5185\u5bb9\u4e2d\uff08html\u6e90\u7801\uff09\u4e2d\u5206\u6790\u7f51\u9875\u7f16\u7801\u7684\u65b9\u5f0f\u3002\u6240\u4ee5apparent_encoding\u6bd4encoding\u66f4\u52a0\u51c6\u786e\uff0c\u83b7\u53d6\u5230\u7684\u624d\u662f\u539f\u7f51\u9875\u7684\u5b9e\u9645\u7f16\u7801\u3002\n\nresponse.encoding = response.apparent_encoding\nprint(response.encoding)\nprint(response.apparent_encoding)\n\nhtml = etree.HTML(text)\nnames = html.xpath("//tr//td//text()")\nnames = [i.encode("iso-8859-1", "ignore").decode("gb2312", "ignore") for i in names]\n')))}d.isMDXComponent=!0}}]);