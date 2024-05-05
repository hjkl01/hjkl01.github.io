"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[3964],{51688:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var t=a(85893),o=a(11151);const s={},i="django",r={id:"django",title:"django",description:"load environment",source:"@site/notes/python/django.md",sourceDirName:".",slug:"/django",permalink:"/notes/python/django",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"database",permalink:"/notes/python/databases"},next:{title:"fastapi",permalink:"/notes/python/fastapi"}},d={},p=[{value:"load environment",id:"load-environment",level:3},{value:"auto load app",id:"auto-load-app",level:3},{value:"cors",id:"cors",level:3},{value:"static in debug mode",id:"static-in-debug-mode",level:3},{value:"dump and load data",id:"dump-and-load-data",level:3},{value:"save data with scripts",id:"save-data-with-scripts",level:3},{value:"download drf_yasg yaml",id:"download-drf_yasg-yaml",level:3}];function l(n){const e={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"django",children:"django"}),"\n",(0,t.jsx)(e.h3,{id:"load-environment",children:"load environment"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'# load environment\nimport os\nenvs = os.environ\nfor k, v in envs.items():\n    print(k, v)\n\n# load .env\n# pip install django-environ\n\nimport environ\nimport os\n\nenv = environ.Env(\n    # set casting, default value\n    DEBUG=(bool, False)\n)\n\n# Set the project base directory\nBASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))\n\n# Take environment variables from .env file\nenviron.Env.read_env(os.path.join(BASE_DIR, \'.env\'))\n\n# SECURITY WARNING: don\'t run with debug turned on in production!\nDEBUG = env("DEBUG", default=True)\n\nfrom django.core.management.utils import get_random_secret_key\nSECRET_KEY = env("SECRET_KEY", default=get_random_secret_key())\n\n# database url https://pypi.org/project/dj-database-url/\n# pip install dj_database_url\n\nimport dj_database_url\n# write .env and set DATABASE_URL\nDATABASES = {\n    "default": dj_database_url.config(\n        default=env("DATABASE_URL", default="sqlite:///db.sqlite3"), conn_max_age=600, conn_health_checks=True\n    )\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"auto-load-app",children:"auto load app"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'# mkdir -p apps/appname\n# django-admin startapp appname apps/appname\n# update apps/appname/apps.py\nname = "apps.appname"\n\n# settings.py\nAPPS_FLODER = os.path.join(BASE_DIR, "apps")\nAPPS = [_ for _ in os.listdir(APPS_FLODER) if os.path.isdir(os.path.join(APPS_FLODER, _)) and "pycache" not in _]\nINSTALLED_APPS += ["apps." + _ for _ in APPS]\n'})}),"\n",(0,t.jsx)(e.h3,{id:"cors",children:"cors"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"# pip install django-cors-headers\n\nINSTALLED_APPS = (\n    ...\n    'corsheaders',\n    ...\n)\n\nMIDDLEWARE = [\n    ...\n    'corsheaders.middleware.CorsMiddleware',\n    'django.middleware.common.CommonMiddleware',\n    ...\n]\n\nCORS_ALLOW_ALL_ORIGINS=True\n\n# Load the default ones\nCORS_ALLOWED_ORIGINS = [\"http://localhost:3000\", \"http://127.0.0.1:3000\"]\n"})}),"\n",(0,t.jsx)(e.h3,{id:"static-in-debug-mode",children:"static in debug mode"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"python manage.py runserver 0.0.0.0:8000 --insecure\n"})}),"\n",(0,t.jsx)(e.h3,{id:"dump-and-load-data",children:"dump and load data"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"python manage.py dumpdata (myapp) > myapp.json\n\npython manage.py loaddata myapp.json\n"})}),"\n",(0,t.jsx)(e.h3,{id:"save-data-with-scripts",children:"save data with scripts"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import os\nimport django\nfrom proxyip.models import ProxyIP\n\nos.environ['DJANGO_SETTINGS_MODULE'] = 'dj_project.settings'\ndjango.setup()\n\np = ProxyIP(ip='192.168.50.1')\np.save()\nprint(ProxyIP.objects.all())\n\npython manage.py shell < main.py\n"})}),"\n",(0,t.jsx)(e.h3,{id:"download-drf_yasg-yaml",children:"download drf_yasg yaml"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'# setting.py\nSWAGGER_SETTINGS = {\n\t\'DEFAULT_INFO\': \'$server.urls.openapi_info\'\n}\n\n# urls.py\n\nopenapi_info = openapi.Info(\n    title="Snippets API",\n    default_version="v1",\n    description="Test description",\n    terms_of_service="https://www.google.com/policies/terms/",\n    contact=openapi.Contact(email="contact@snippets.local"),\n    license=openapi.License(name="BSD License"),\n)\nschema_view = get_schema_view(\n    openapi_info,\n    public=True,\n    permission_classes=(permissions.AllowAny,),\n)\n\npython manage.py generate_swagger swagger.yaml or swagger.json\n\n'})})]})}function c(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>r,a:()=>i});var t=a(67294);const o={},s=t.createContext(o);function i(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);