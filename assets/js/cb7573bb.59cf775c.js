"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[8669],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:0},a="python",s={unversionedId:"index",id:"index",title:"python",description:"basic",source:"@site/notes/python/index.md",sourceDirName:".",slug:"/",permalink:"/notes/python/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"chrome",permalink:"/notes/python/chrome"}},l={},c=[{value:"basic",id:"basic",level:3},{value:"decorator try",id:"decorator-try",level:3},{value:"datetime",id:"datetime",level:3},{value:"read big file",id:"read-big-file",level:3},{value:"csv",id:"csv",level:3},{value:"asyncio",id:"asyncio",level:3},{value:"xmljson",id:"xmljson",level:3},{value:"mysql",id:"mysql",level:3},{value:"\u8f6c\u7801",id:"\u8f6c\u7801",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python"},"python"),(0,o.kt)("h3",{id:"basic"},"basic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"json.dumps(item, ensure_ascii=False, indent=4)\n\n# \u5bf9\u5b57\u5178\u6392\u5e8f\nsorted(_dict.items(), key=lambda d: d[1], reverse=False)\n\n# unicode replace\nrepr()\n\n### http server\npy2 python -m SimpleHTTPServer 8000\npy3 python -m http.server 8000\n\n# \u683c\u5f0f\u5316\u8f93\u51fa\nprint(\"{:02d}\".format(1))\nprint(f\"{1:02d}\")\n\n# \u4e58\u6cd5\u8868 \nprint ('\\n'.join([' '.join(['%s*%s=%-2s' % (y,x,x*y) for y in range(1,x+1)]) for x in range(1,10)]))\n")),(0,o.kt)("h3",{id:"decorator-try"},"decorator try"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import functools\n\ndef decorator_try(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except Exception as err:\n            print(err)\n            return err\n\n    return wrapper\n")),(0,o.kt)("h3",{id:"datetime"},"datetime"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install python-dateutil\n\n# yestoday\nfrom datetime import datetime, timedelta\n\n# days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0\nyestoday = datetime.today() - timedelta(days=1)\nprint(yestoday)\n\nfrom datetime import datetime\nfrom dateutil import parser\n\nformat_time = datetime.now().strftime(\"%m/%d/%Y, %H:%M:%S\")\n\nt = \"Thu, 9 Sep 2021 00:17:59\"\nresult = parser.parse(t)\nprint(result)\nprint(type(result))\n\nnow = datetime.now()\nprint((now - result).days)\n\n>>> import arrow\n>>> arrow.get('2013-05-11T21:23:58.970460+07:00')\n<Arrow [2013-05-11T21:23:58.970460+07:00]>\n\n>>> utc = arrow.utcnow()\n>>> utc\n<Arrow [2013-05-11T21:23:58.970460+00:00]>\n\n>>> utc = utc.shift(hours=-1)\n>>> utc\n<Arrow [2013-05-11T20:23:58.970460+00:00]>\n\n>>> local = utc.to('US/Pacific')\n>>> local\n<Arrow [2013-05-11T13:23:58.970460-07:00]>\n\n>>> local.timestamp()\n1368303838.970460\n\n>>> local.format()\n'2013-05-11 13:23:58 -07:00'\n\n>>> local.format('YYYY-MM-DD HH:mm:ss ZZ')\n'2013-05-11 13:23:58 -07:00'\n\n>>> local.humanize()\n'an hour ago'\n\n>>> local.humanize(locale='ko-kr')\n'\ud55c\uc2dc\uac04 \uc804'\n")),(0,o.kt)("h3",{id:"read-big-file"},"read big file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with open("log.txt") as infile:\n    for line in infile:\n        do_something_with(line)\n')),(0,o.kt)("h3",{id:"csv"},"csv"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import csv\n\n# read\nresult = []\ninput_file = csv.DictReader(open("result.csv"))\nfor row in input_file:\n    result.append(row)\nprint(result)\n\n\n# write dict\nmy_dict = {"test": 1, "testing": 2}\nwith open(\'mycsvfile.csv\', \'w\', encoding="utf-8-sig") as f:  # You will need \'wb\' mode in Python 2.x\n    w = csv.DictWriter(f, my_dict.keys())\n    w.writeheader()\n    w.writerow(my_dict)\n\n# write list\nresult = [{"test": 1, "testing": 2}, {"test": 1, "testing": 2}]\nwith open(\'mycsvfile.csv\', \'w\', encoding="utf-8-sig") as f:  # You will need \'wb\' mode in Python 2.x\n    w = csv.DictWriter(f, result[0].keys())\n    w.writeheader()\n    w.writerows(result)\n')),(0,o.kt)("h3",{id:"asyncio"},"asyncio"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\nimport time\n\ndef now(): return time.time()\n\nasync def do_some_work(x):\n    print('Waiting: ', x)\n\n    await asyncio.sleep(x)\n    return 'Done after {}s'.format(x)\n\nstart = now()\n\ncoroutine1 = do_some_work(1)\ncoroutine2 = do_some_work(2)\ncoroutine3 = do_some_work(4)\n\ntasks = [\n    asyncio.ensure_future(coroutine1),\n    asyncio.ensure_future(coroutine2),\n    asyncio.ensure_future(coroutine3)\n]\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(asyncio.wait(tasks))\n\nfor task in tasks:\n    print('Task ret: ', task.result())\n\nprint('TIME: ', now() - start)\n\n\n# yield \ndef create_generator(_range):\n    for i in range(_range):\n        yield i\n\nresult = create_generator(5)\nfor i in result:\n    print(i)\n")),(0,o.kt)("h3",{id:"xmljson"},"xmljson"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import xmljson\nfrom lxml.etree import  fromstring,tostring\n\njson.loads(json.dumps(xmljson.badgerfish.data(fromstring(con.encode()))))\n")),(0,o.kt)("h3",{id:"mysql"},"mysql"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# mysql-clients\nyay -S --noconfirm mysql-clients gcc\npip install mysqlclient\n")),(0,o.kt)("h3",{id:"\u8f6c\u7801"},"\u8f6c\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport chardet\n\n\ndef trans(filename):\n    print("file=====", filename)\n    with open(f"txt/{filename}", "rb") as file:\n        con = file.read()\n    _char = chardet.detect(con)["encoding"]\n    print("char is ", _char)\n\n    if "utf-8" in _char or "UTF-8" in _char:\n        cmd = f"mv txt/{filename} result/{filename}"\n    else:\n        cmd = f"iconv -c -f {_char} -t UTF-8 txt/{filename} > result/{filename}"\n    print(cmd)\n    os.system(cmd)\n\n\ndef main():\n    txts = os.listdir("txt")\n    for txt in txts:\n        if ".txt" not in txt:\n            print(txt)\n            continue\n        try:\n            trans(txt)\n        except Exception as err:\n            print(err)\n        continue\n\n\nif __name__ == "__main__":\n    main()\n')))}u.isMDXComponent=!0}}]);