"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[6693],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return n?t.createElement(y,o(o({ref:r},c),{},{components:n})):t.createElement(y,o({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2803:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=n(7462),a=(n(7294),n(3905));const s={},o="celery",i={unversionedId:"python/celery",id:"python/celery",title:"celery",description:"celery \u7528\u6cd5",source:"@site/docs/python/celery.md",sourceDirName:"python",slug:"/python/celery",permalink:"/docs/python/celery",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/celery.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"python",permalink:"/docs/python/"},next:{title:"database",permalink:"/docs/python/databases"}},p={},l=[{value:"celery \u7528\u6cd5",id:"celery-\u7528\u6cd5",level:2}],c={toc:l};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celery"},"celery"),(0,a.kt)("h2",{id:"celery-\u7528\u6cd5"},"celery \u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# test.py\nimport time\nfrom datetime import datetime\n\nfrom celery import Celery\n \n# result_address = \'elasticsearch://user:passwd@ip:port/index\'\n\nbroker = \'redis://:passwd@ip:port/db\'\nresult_address = "mongodb://user:password@ip:port/db"\n\napp = Celery("tasks", broker=broker, backend=result_address)\n\n\ndef my_on_failure(exc, task_id, args, kwargs, einfo):\n    print("task failed")\n    for argv in [exc, task_id, args, kwargs, einfo]:\n        print(argv)\n\n\napp.conf.update(\n    task_serializer="json",\n    accept_content=["json"],  # Ignore other content\n    result_serializer="json",\n    timezone="Asia/Shanghai",\n    enable_utc=True,\n    #  \u4e0b\u9762\u8fd9\u4e2a\u5c31\u662f\u9650\u5236tasks\u6a21\u5757\u4e0b\u7684add\u51fd\u6570\uff0c\u6bcf\u79d2\u949f\u53ea\u80fd\u6267\u884c10\u6b21\n    #  CELERY_ANNOTATIONS = {\'tasks.add\':{\'rate_limit\':\'10/s\'}}\n    #  \u6216\u8005\u9650\u5236\u6240\u6709\u7684\u4efb\u52a1\u7684\u5237\u65b0\u9891\u7387\n    task_annotations={"tasks.add": {"rate_limit": "2/m"}},\n    #  annotations={"tasks.add": {"rate_limit": "5/m", "on_failure": my_on_failure}},\n    #  annotations={"*": {"rate_limit": "10/s", "on_failure": my_on_failure}},\n    #  celery worker\u7684\u5e76\u53d1\u6570\uff0c\u9ed8\u8ba4\u662f\u670d\u52a1\u5668\u7684\u5185\u6838\u6570\u76ee,\u4e5f\u662f\u547d\u4ee4\u884c-c\u53c2\u6570\u6307\u5b9a\u7684\u6570\u76ee\n    worker_concurrency=10,\n    #  celery worker \u6bcf\u6b21\u53bbBROKER\u4e2d\u9884\u53d6\u4efb\u52a1\u7684\u6570\u91cf\n    prefetch_multiplier=1,\n    #  \u5355\u4e2a\u4efb\u52a1\u7684\u8fd0\u884c\u65f6\u95f4\u9650\u5236\uff0c\u5426\u5219\u4f1a\u88ab\u6740\u6b7b\n    task_time_limit=60,\n    #  \u538b\u7f29\u65b9\u6848\u9009\u62e9\uff0c\u53ef\u4ee5\u662fzlib, bzip2\uff0c\u9ed8\u8ba4\u662f\u53d1\u9001\u6ca1\u6709\u538b\u7f29\u7684\u6570\u636e\n    message_compression="zlib",\n)\n\n\n@app.task(default_retry_delay=30, max_retries=2, retry_kwargs={"max_retries": 3})\ndef add(x, y):\n    print(x, y)\n    #  time.sleep(3)\n    return x + y\n\n\n@app.task\ndef sleep(seconds):\n    time.sleep(seconds)\n\n\n@app.task\ndef echo(msg, timestamp=False):\n    time.sleep(3)\n    return "%s: %s" % (datetime.now(), msg) if timestamp else msg\n\n\n@app.task\ndef error(msg):\n    raise Exception(msg)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# generate.py\n# https://github.com/mher/flower/blob/master/docs/api.ipynb\nimport requests\nimport json\n\ndef main():\n    api_root = "http://localhost:5566/api"\n    task_api = "{}/task".format(api_root)\n\n    url = "{}/queues/length".format(api_root)\n    print(url)\n    resp = requests.get(url)\n    print(resp.json())\n\n    for i in range(20):\n        args = {"args": [i, i**i]}\n        url = "{}/async-apply/tasks.add".format(task_api)\n        #  url = "{}/apply/tasks.add".format(task_api)\n        print(url)\n        resp = requests.post(url, data=json.dumps(args))\n        reply = resp.json()\n        print(reply)\n\n        args = {"args": [i, True]}\n        url = "{}/async-apply/tasks.echo".format(task_api)\n        print(url)\n        resp = requests.post(url, data=json.dumps(args))\n        reply = resp.json()\n        print(reply)\n        \n    #  url = "{}/result/{}".format(task_api, reply["task-id"])\n    #  print(url)\n    #  resp = requests.get(url)\n    #  print(resp.json())\nmain()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"celery -A tasks worker --loglevel=info >> logs/celery_worker.log 2>&1 &\n\ncelery -A tasks flower --loglevel=info --address=127.0.0.1 --port=5566 >> logs/celery_flower.log 2>&1 &\n")))}u.isMDXComponent=!0}}]);