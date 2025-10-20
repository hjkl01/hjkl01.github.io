# rustfs

## docker-compose.yaml配置

```yaml
services:
  rustfs:
    image: rustfs/rustfs:latest
    container_name: rustfs
    ports:
      - 9000:9000
      # - 9001:9001
    environment:
       - RUSTFS_ACCESS_KEY=rustfsadmin
       - RUSTFS_SECRET_KEY=passwod
    volumes:
      - ./data/rustfs:/data
    restart: unless-stopped
```

## 代码示例

```python
# pip install boto3

import boto3
from botocore.client import Config

config = Config(signature_version="s3v4")

s3 = boto3.client(
    "s3",
    endpoint_url="https://rustfs.example.com:port",
    aws_access_key_id="access_key",
    aws_secret_access_key="secret_key",
    config=config,
)

print(s3)
bucket_name = "bucket"

try:
    s3.create_bucket(Bucket=bucket_name)
    print("Bucket '%s' created" % bucket_name)
except Exception as e:
    print("Error creating bucket '%s': %s" % (bucket_name, e))
    print("Bucket '%s' already exists" % bucket_name)

s3.upload_file('./README.md', bucket_name, 'README.md')
print('File uploaded.')

s3.download_file(bucket_name, 'README.md', 'README.md')
print('File downloaded.')

response = s3.list_objects_v2(Bucket=bucket_name)
for obj in response.get('Contents', []):
    print(obj.get('Key'), obj.get('Size'), obj.get('LastModified'))

url = s3.generate_presigned_url('get_object', Params={'Bucket': bucket_name, 'Key': 'README.md'}, ExpiresIn=3600)
print(url)

url = s3.generate_presigned_url('put_object', Params={'Bucket': bucket_name, 'Key': 'README.md'}, ExpiresIn=3600)
print(url)

s3.delete_object(Bucket=bucket_name, Key='README.md')
print('File deleted.')

s3.delete_bucket(Bucket=bucket_name)
print('Bucket deleted.')
```
