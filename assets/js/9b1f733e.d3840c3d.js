"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[399],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),u=s,y=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(7462),s=(t(7294),t(3905));const r={},o="database",i={unversionedId:"python/databases",id:"python/databases",title:"database",description:"install psycopg2-binary",source:"@site/docs/python/databases.md",sourceDirName:"python",slug:"/python/databases",permalink:"/docs/python/databases",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/databases.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"celery",permalink:"/docs/python/celery"},next:{title:"django",permalink:"/docs/python/django"}},l={},d=[{value:"install psycopg2-binary",id:"install-psycopg2-binary",level:2},{value:"sqlalchemy",id:"sqlalchemy",level:2},{value:"use session",id:"use-session",level:3},{value:"databasesaiomysql",id:"databasesaiomysql",level:2}],c={toc:d};function m(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"database"},"database"),(0,s.kt)("h2",{id:"install-psycopg2-binary"},"install psycopg2-binary"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pip install psycopg2-binary\n\nsqlacodegen postgres://user:passwd@host:ip/database --outfile model.py\n")),(0,s.kt)("h2",{id:"sqlalchemy"},"sqlalchemy"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from sqlalchemy import create_engine\nfrom sqlalchemy import Column, String\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy.orm import sessionmaker\n\ndb_string = "postgres://admin:donotusethispassword@aws-us-east-1-portal.19.dblayer.com:15813/compose"\n\ndb = create_engine(db_string)\nbase = declarative_base()\n\n\nclass Film(base):\n    __tablename__ = "films"\n\n    title = Column(String, primary_key=True)\n    director = Column(String)\n    year = Column(String)\n\n\nSession = sessionmaker(db)\nsession = Session()\n\nbase.metadata.create_all(db)\n\n# Create\ndoctor_strange = Film(title="Doctor Strange", director="Scott Derrickson", year="2016")\nsession.add(doctor_strange)\nsession.commit()\n\n# Read\nfilms = session.query(Film)\nfor film in films:\n    print(film.title)\n\n# Update\ndoctor_strange.title = "Some2016Film"\nsession.commit()\n\n# Delete\nsession.delete(doctor_strange)\nsession.commit()\n\ndelete_obj = Shop.__table__.delete().where(Shop.shop_cate.contains("m"))\nsession.execute(delete_obj)\nsession.commit()\n')),(0,s.kt)("h3",{id:"use-session"},"use session"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'#  from .base_model import Base\nfrom sqlalchemy.orm import sessionmaker, scoped_session\nfrom contextlib import contextmanager\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy import Column, Integer, String, TIMESTAMP, text, JSON\n\nfrom sqlalchemy import create_engine\n\n\nBase = declarative_base()\n\n\nclass PyOrmModel(Base):\n    __tablename__ = "py_orm"\n\n    id = Column(Integer, autoincrement=True, primary_key=True, comment="\u552f\u4e00id")\n    name = Column(String(255), nullable=False, default="", comment="\u540d\u79f0")\n    attr = Column(JSON, nullable=False, comment="\u5c5e\u6027")\n    ct = Column(TIMESTAMP, nullable=False, server_default=text("CURRENT_TIMESTAMP"), comment="\u521b\u5efa\u65f6\u95f4")\n    ut = Column(TIMESTAMP, nullable=False, server_default=text("CURRENT_TIMESTAMP"), comment="\u66f4\u65b0\u65f6\u95f4")\n\n    @staticmethod\n    def fields():\n        return ["id", "name", "attr"]\n\n    @staticmethod\n    def to_json(model):\n        fields = PyOrmModel.fields()\n        json_data = {}\n        for field in fields:\n            json_data[field] = model.__getattribute__(field)\n        return json_data\n\n    @staticmethod\n    def from_json(data: dict):\n        fields = PyOrmModel.fields()\n\n        model = PyOrmModel()\n        for field in fields:\n            if field in data:\n                model.__setattr__(field, data[field])\n        return model\n\ndb_url = "postgresql://user:password@ip:5432/db"\nengine = create_engine(db_url, echo=False)\nBase.metadata.create_all(engine)\n\n\ndef _get_session():\n    """\u83b7\u53d6session"""\n    return scoped_session(sessionmaker(bind=engine, expire_on_commit=False))()\n\n\n# \u5728\u8fd9\u91cc\u5bf9session\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u5305\u62ec\u83b7\u53d6\uff0c\u63d0\u4ea4\uff0c\u56de\u6eda\u548c\u5173\u95ed\n@contextmanager\ndef db_session(commit=True):\n    session = _get_session()\n    try:\n        yield session\n        if commit:\n            session.commit()\n    except Exception as e:\n        session.rollback()\n        raise e\n    finally:\n        if session:\n            session.close()\n\n\nclass PyOrmModelOp:\n    def __init__(self):\n        pass\n\n    @staticmethod\n    def save_data(data: dict):\n        with db_session() as session:\n            model = PyOrmModel.from_json(data)\n            session.add(model)\n\n    # \u67e5\u8be2\u64cd\u4f5c\uff0c\u4e0d\u9700\u8981commit\n    @staticmethod\n    def query_data(pid: int):\n        data_list = []\n        with db_session(commit=False) as session:\n            data = session.query(PyOrmModel).filter(PyOrmModel.id == pid)\n            for d in data:\n                data_list.append(PyOrmModel.to_json(d))\n\n            return data_list\n\n\nfor i in range(9):\n    #  PyOrmModelOp.save_data({"id": i, "name": "test", "attr": {}})\n    PyOrmModelOp.save_data({"name": "test", "attr": {}})\n    result = PyOrmModelOp.query_data(i)\n    print(result)\n')),(0,s.kt)("h2",{id:"databasesaiomysql"},"databases","[aiomysql]"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# pip install \'databases[aiomysql]\' aiomysq\nimport asyncio\n\n# Create a database instance, and connect to it.\nfrom databases import Database\n\n\nasync def run():\n    db_url = "mysql://user:passwd@host:port/db"\n    database = Database(db_url)\n    #  database = Database("sqlite+aiosqlite:///example.db")\n    await database.connect()\n\n    # Create a table.\n    #  query = """CREATE TABLE HighScores (id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), score INTEGER)"""\n    #  await database.execute(query=query)\n\n    # Insert some data.\n    query = "INSERT INTO HighScores(name, score) VALUES (:name, :score)"\n    values = [\n        {"name": "Daisy", "score": 92},\n        {"name": "Neil", "score": 87},\n        {"name": "Carol", "score": 43},\n    ]\n    await database.execute_many(query=query, values=values)\n\n    # Run a database query.\n    query = "SELECT * FROM HighScores"\n    rows = await database.fetch_all(query=query)\n    print("High Scores:", rows)\n    for r in rows:\n        print(r)\n    return rows\n\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(run())\n')))}m.isMDXComponent=!0}}]);