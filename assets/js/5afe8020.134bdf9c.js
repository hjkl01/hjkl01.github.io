"use strict";(self.webpackChunknotes_3_5_2=self.webpackChunknotes_3_5_2||[]).push([[5772],{5508:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=s(4848),t=s(8453);const o={},i="database",r={id:"databases",title:"database",description:"install psycopg2-binary",source:"@site/notes/python/databases.md",sourceDirName:".",slug:"/databases",permalink:"/notes/python/databases",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"chrome",permalink:"/notes/python/chrome"},next:{title:"django",permalink:"/notes/python/django"}},l={},d=[{value:"install psycopg2-binary",id:"install-psycopg2-binary",level:2},{value:"sqlalchemy",id:"sqlalchemy",level:2},{value:"use session",id:"use-session",level:3},{value:"databases[aiomysql]",id:"databasesaiomysql",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"database",children:"database"})}),"\n",(0,a.jsx)(n.h2,{id:"install-psycopg2-binary",children:"install psycopg2-binary"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"pip install psycopg2-binary\n\nsqlacodegen postgres://user:passwd@host:ip/database --outfile model.py\n"})}),"\n",(0,a.jsx)(n.h2,{id:"sqlalchemy",children:"sqlalchemy"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from sqlalchemy import create_engine\nfrom sqlalchemy import Column, String\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy.orm import sessionmaker\n\ndb_string = "postgres://admin:donotusethispassword@aws-us-east-1-portal.19.dblayer.com:15813/compose"\n\ndb = create_engine(db_string)\nbase = declarative_base()\n\n\nclass Film(base):\n    __tablename__ = "films"\n\n    title = Column(String, primary_key=True)\n    director = Column(String)\n    year = Column(String)\n\n\nSession = sessionmaker(db)\nsession = Session()\n\nbase.metadata.create_all(db)\n\n# Create\ndoctor_strange = Film(title="Doctor Strange", director="Scott Derrickson", year="2016")\nsession.add(doctor_strange)\nsession.commit()\n\n# Read\nfilms = session.query(Film)\nfor film in films:\n    print(film.title)\n\n# Update\ndoctor_strange.title = "Some2016Film"\nsession.commit()\n\n# Delete\nsession.delete(doctor_strange)\nsession.commit()\n\ndelete_obj = Shop.__table__.delete().where(Shop.shop_cate.contains("m"))\nsession.execute(delete_obj)\nsession.commit()\n'})}),"\n",(0,a.jsx)(n.h3,{id:"use-session",children:"use session"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'#  from .base_model import Base\nfrom sqlalchemy.orm import sessionmaker, scoped_session\nfrom contextlib import contextmanager\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy import Column, Integer, String, TIMESTAMP, text, JSON\n\nfrom sqlalchemy import create_engine\n\n\nBase = declarative_base()\n\n\nclass PyOrmModel(Base):\n    __tablename__ = "py_orm"\n\n    id = Column(Integer, autoincrement=True, primary_key=True, comment="\u552f\u4e00id")\n    name = Column(String(255), nullable=False, default="", comment="\u540d\u79f0")\n    attr = Column(JSON, nullable=False, comment="\u5c5e\u6027")\n    ct = Column(TIMESTAMP, nullable=False, server_default=text("CURRENT_TIMESTAMP"), comment="\u521b\u5efa\u65f6\u95f4")\n    ut = Column(TIMESTAMP, nullable=False, server_default=text("CURRENT_TIMESTAMP"), comment="\u66f4\u65b0\u65f6\u95f4")\n\n    @staticmethod\n    def fields():\n        return PyOrmModel.__table__.columns.keys()\n        # return ["id", "name", "attr"]\n\n    @staticmethod\n    def to_json(model):\n        fields = PyOrmModel.fields()\n        json_data = {}\n        for field in fields:\n            json_data[field] = model.__getattribute__(field)\n        return json_data\n\n    @staticmethod\n    def from_json(data: dict):\n        fields = PyOrmModel.fields()\n\n        model = PyOrmModel()\n        for field in fields:\n            if field in data:\n                model.__setattr__(field, data[field])\n        return model\n\ndb_url = "postgresql://user:password@ip:5432/db"\nengine = create_engine(db_url, echo=False)\nBase.metadata.create_all(engine)\n\n\ndef _get_session():\n    """\u83b7\u53d6session"""\n    return scoped_session(sessionmaker(bind=engine, expire_on_commit=False))()\n\n\n# \u5728\u8fd9\u91cc\u5bf9session\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u5305\u62ec\u83b7\u53d6\uff0c\u63d0\u4ea4\uff0c\u56de\u6eda\u548c\u5173\u95ed\n@contextmanager\ndef db_session(commit=True):\n    session = _get_session()\n    try:\n        yield session\n        if commit:\n            session.commit()\n    except Exception as e:\n        session.rollback()\n        raise e\n    finally:\n        if session:\n            session.close()\n\n\nclass PyOrmModelOp:\n    def __init__(self):\n        pass\n\n    @staticmethod\n    def save_data(data: dict):\n        with db_session() as session:\n            model = PyOrmModel.from_json(data)\n            session.add(model)\n\n    # \u67e5\u8be2\u64cd\u4f5c\uff0c\u4e0d\u9700\u8981commit\n    @staticmethod\n    def query_data(pid: int):\n        data_list = []\n        with db_session(commit=False) as session:\n            data = session.query(PyOrmModel).filter(PyOrmModel.id == pid)\n            for d in data:\n                data_list.append(PyOrmModel.to_json(d))\n\n            return data_list\n\n\nfor i in range(9):\n    #  PyOrmModelOp.save_data({"id": i, "name": "test", "attr": {}})\n    PyOrmModelOp.save_data({"name": "test", "attr": {}})\n    result = PyOrmModelOp.query_data(i)\n    print(result)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"databasesaiomysql",children:"databases[aiomysql]"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# pip install \'databases[aiomysql]\' aiomysq\n# pip install \'databases[asyncpg]\'\n# pip install \'databases[aiopg]\'\n# pip install \'databases[aiomysql]\'\n# pip install \'databases[asyncmy]\'\n# pip install \'databases[aiosqlite]\'\nimport asyncio\n\n# Create a database instance, and connect to it.\nfrom databases import Database\n\n\nasync def run():\n    db_url = "mysql+aiomysql://user:passwd@host:port/db"\n    # sqlite:///test.db,\n    # sqlite+aiosqlite:///test.db,\n    # mysql+aiomysql://username:password@localhost:3306/testsuite,\n    # mysql+asyncmy://username:password@localhost:3306/testsuite,\n    # postgresql+aiopg://username:password@127.0.0.1:5432/testsuite,\n    # postgresql+asyncpg://username:password@localhost:5432/testsuite\n    database = Database(db_url)\n    #  database = Database("sqlite+aiosqlite:///example.db")\n    await database.connect()\n\n    # Create a table.\n    query = """CREATE TABLE HighScores (id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), score INTEGER)"""\n    await database.execute(query=query)\n\n    # Insert some data.\n    query = "INSERT INTO HighScores(name, score) VALUES (:name, :score)"\n    values = [\n        {"name": "Daisy", "score": 92},\n        {"name": "Neil", "score": 87},\n        {"name": "Carol", "score": 43},\n    ]\n    await database.execute_many(query=query, values=values)\n\n    # Run a database query.\n    query = "SELECT * FROM HighScores"\n    rows = await database.fetch_all(query=query)\n    print("High Scores:", rows)\n    for r in rows:\n        print(r)\n    return rows\n    return [r.id for r in rows]\n\nresult = asyncio.run(run())\n'})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var a=s(6540);const t={},o=a.createContext(t);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);