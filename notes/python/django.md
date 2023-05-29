# django

### cors

```python
pip install django-cors-headers

INSTALLED_APPS = (
    ...
    'corsheaders',
    ...
)

MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]

CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True
# CORS_ORIGIN_WHITELIST = ('*')
CORS_ALLOW_METHODS = (
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
    'VIEW',
)

CORS_ALLOW_HEADERS = (
    'XMLHttpRequest',
    'X_FILENAME',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
    'Pragma',
)
```

```python
import os
import django
from proxyip.models import ProxyIP

os.environ['DJANGO_SETTINGS_MODULE'] = 'dj_project.settings'
django.setup()

p = ProxyIP(ip='192.168.50.1')
p.save()
print(ProxyIP.objects.all())

python manage.py shell < main.py
```

```shell
python manage.py dumpdata (myapp) > myapp.json

python manage.py loaddata myapp.json
```
