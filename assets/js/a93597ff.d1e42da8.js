"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[4483],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={},s="postgresql",p={unversionedId:"postgresql",id:"postgresql",title:"postgresql",description:"postgres adminer pgadmin4",source:"@site/notes/docker/postgresql.md",sourceDirName:".",slug:"/postgresql",permalink:"/notes/docker/postgresql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"openwrt",permalink:"/notes/docker/openwrt"},next:{title:"prest",permalink:"/notes/docker/prest"}},l={},i=[{value:"postgres adminer pgadmin4",id:"postgres-adminer-pgadmin4",level:3},{value:"other config",id:"other-config",level:3},{value:"python example",id:"python-example",level:3}],c={toc:i};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postgresql"},"postgresql"),(0,o.kt)("h3",{id:"postgres-adminer-pgadmin4"},"postgres adminer pgadmin4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  db:\n    image: postgres:15-alpine\n    restart: always\n    ports:\n      - 5432:5432\n    environment:\n      POSTGRES_PASSWORD: "password"\n      POSTGRES_USER: "user"\n      POSTGRES_DB: "postgres"\n      PGDATA: "/var/lib/postgresql/data"\n    volumes:\n      - ./postgres:/var/lib/postgresql/data\n\n  admin:\n    image: adminer\n    restart: always\n    depends_on:\n      - db\n    ports:\n      - 8080:8080\n\n  pgadmin:\n    container_name: pgadmin4_container\n    image: dpage/pgadmin4\n    restart: always\n    environment:\n      PGADMIN_DEFAULT_EMAIL: xx@xx.com\n      PGADMIN_DEFAULT_PASSWORD: password\n    ports:\n      - "80:80"\n\nnetworks:\n  default:\n    external:\n      name: nginx-proxy\n')),(0,o.kt)("h3",{id:"other-config"},"other config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u53ef\u89c6\u5316\u5de5\u5177\u63a8\u8350\ndocker run -d -e SESSIONS=true -p 8081:8081 sosedoff/pgweb\n\n# mac\ntableplus\n\n# \u5728linux \u4e2d\u5b89\u88c5\nsudo apt-get install postgresql-client\nsudo apt-get install postgresql\n# sudo apt-get install pgadmin3\n# pgcli\n\nsudo adduser dbuser\nsudo su - postgres\n# sudo -u postgres psql\npsql\n\\password postgres\nCREATE USER dbuser WITH PASSWORD 'password';\nCREATE DATABASE exampledb OWNER dbuser;\nGRANT ALL PRIVILEGES ON DATABASE exampledb to dbuser;\n\npsql -U dbuser -d exampledb -h 127.0.0.1 -p 5432\npsql exampledb\n# psql exampledb < exampledb.sql  #\u6062\u590d\u5916\u90e8\u6570\u636e\npg_dump -U username -h localhost databasename >> sqlfile.sql\n\nsudo vi /etc/postgresql/9.5/main/postgresql.conf\nsudo gedit /etc/postgresql/9.5/main/pg_hba.conf     host all all 0.0.0.0/0 md5\nsudo /etc/init.d/postgresql restart\n\n# \u67e5\u8be2\u6709\u5916\u952e\u7684\u6570\u636e\nselect count(*) from \"case\" where court_id in (select id from court where province ='');\n\n# update existed data\nupdate sometable set somekey = concat('new value', somekey) where prod_code = '12345'\n\n# \u5bfc\u51fa\u6570\u636e\u7ed3\u6784\npython -m pwiz -e postgresql -u user -P db > model.py\npython -m pwiz -e mysql -H 192.168.1.x -u root -P dbname > model.py\n")),(0,o.kt)("h3",{id:"python-example"},"python example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# pip install psycopg2-binary pandas\n\nimport sys\n\nimport psycopg2\nimport pandas as pd\n\nHOST = ""\nPORT = "5432"\nDATABASE = "postgres"\nUSER = ""\nPASSWORD = ""\nTABLENAME = "sometablename"\n\nSERIALIZE_DICT = {\n    "create_date": "\u65e5\u671f",\n    "sales_channel_level_1": "\u9500\u552e\u6e20\u9053\u4e00\u7ea7",\n    "sales_channel_level_1_code": "\u9500\u552e\u6e20\u9053\u4e8c\u7ea7\u7f16\u7801",\n    "sales_channel_level_2": "\u9500\u552e\u6e20\u9053\u4e8c\u7ea7\u540d\u79f0",\n    "product_name": "\u5546\u54c1\u540d\u79f0",\n    "category_level_1": "\u4e00\u7ea7\u5206\u7c7b\u54c1\u540d",\n    "category_level_2": "\u4e8c\u7ea7\u5206\u7c7b\u54c1\u540d",\n    "category_level_3": "\u4e09\u7ea7\u5206\u7c7b\u54c1\u540d",\n    "import_area": "\u8fdb\u53e3\u5730\u533a",\n    "brand": "\u54c1\u724c",\n    "sales_unit": "\u9500\u552e\u5355\u4f4d",\n    "weight": "\u516c\u65a4\u91cd\u91cf",\n    "price": "\u5355\u4ef7/\u516c\u65a4",\n    "if_import": "\u662f\u5426\u8fdb\u53e3",\n    "variety": "\u54c1\u79cd",\n    "category": "\u7c7b\u522b",\n}\nKEYS = None\nVALUES = ",".join([f"%({v})s" for v in SERIALIZE_DICT.values()])\n\n\ndef main(filename):\n    if not KEYS:\n        print(",".join(SERIALIZE_DICT.keys()))\n        return\n\n    conn = psycopg2.connect(\n        host=HOST,\n        port=PORT,\n        database=DATABASE,\n        user=USER,\n        password=PASSWORD,\n    )\n    cur = conn.cursor()\n\n    temp = ",".join([f"{k} varchar " for k, _ in SERIALIZE_DICT.items()])\n\n    sql = f\'CREATE TABLE IF NOT EXISTS "{TABLENAME}" ( id serial PRIMARY KEY, {temp}); \'\n    print(sql)\n    cur.execute(sql)\n    conn.commit()\n\n    df = pd.read_excel(filename)\n    data_dict = df.to_dict("records")\n\n    for d in data_dict:\n        try:\n            print(d)\n            sql = f"INSERT INTO {TABLENAME} ({KEYS}) VALUES ({VALUES})"\n            cur.execute(sql, d)\n\n            conn.commit()\n        except Exception as err:\n            print(err)\n\n    cur.close()\n    conn.close()\n\n\nif __name__ == "__main__":\n    argv = sys.argv[:]\n    main(argv[1])\n')))}d.isMDXComponent=!0}}]);