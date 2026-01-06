# postgresql

### postgres adminer pgadmin4

```yaml
version: "3"
services:
  db:
    image: postgres:15-alpine
    container_name: postgres
    restart: always
    ports:
      - 5432:5432
    environment:
      POSTGRES_PASSWORD: "password"
      POSTGRES_USER: "user"
      POSTGRES_DB: "postgres"
      PGDATA: "/var/lib/postgresql/data"
    volumes:
      - ./data/postgres:/var/lib/postgresql/data

  cloudbeaver-server:
    image: dbeaver/cloudbeaver:latest
    ports:
      - "8978:8978"
    volumes:
      - ./data/cloudbeaver:/opt/cloudbeaver/workspace
    restart: unless-stopped

  dbgate:
    image: dbgate/dbgate
    restart: always
    ports:
      - 80:3000
    depends_on:
      - db
    volumes:
      - ./data/dbgate-data:/root/.dbgate

  adminer:
    image: adminer
    restart: always
    depends_on:
      - db
    ports:
      - 8080:8080

  pgadmin:
    container_name: pgadmin4_container
    image: dpage/pgadmin4
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: xx@xx.com
      PGADMIN_DEFAULT_PASSWORD: password
    ports:
      - "80:80"

networks:
  default:
    external:
      name: nginx-proxy
```

### other config

```shell
# 可视化工具推荐
docker run -d -e SESSIONS=true -p 8081:8081 sosedoff/pgweb

# mac
tableplus

psql -U dbuser -d exampledb -h 127.0.0.1 -p 5432

# 导入导出
pg_dump -h hostname -U username -d database_name -f backup.sql
psql -h hostname -U username -d database_name -f backup.sql

# docker 导入导出
docker exec -t postgres pg_dump -U postgres mydb > mydb_backup_$(date +%Y%m%d).sql

docker exec -it postgres psql -U postgres -c "CREATE DATABASE mydb;"

docker exec -i postgres psql -U postgres -d mydb < mydb_backup.sql

# 配置
sudo vi /etc/postgresql/9.5/main/postgresql.conf
sudo gedit /etc/postgresql/9.5/main/pg_hba.conf		host all all 0.0.0.0/0 md5
sudo /etc/init.d/postgresql restart

# 查询有外键的数据
select count(*) from "case" where court_id in (select id from court where province ='');

# 查询重复数据
select uuid
from case
group by uuid
having count(uuid) > 1

# 查询同一列所有值出现的次数
SELECT country ,COUNT(*) FROM tablename GROUP BY country

# update existed data
update sometable set somekey = concat('new value', somekey) where prod_code = '12345'

# 导出数据结构
python -m pwiz -e postgresql -u user -P db > model.py
python -m pwiz -e mysql -H 192.168.1.x -u root -P dbname > model.py
```

### python example

```python
# pip install psycopg2-binary pandas

import sys

import psycopg2
import pandas as pd

HOST = ""
PORT = "5432"
DATABASE = "postgres"
USER = ""
PASSWORD = ""
TABLENAME = "sometablename"

SERIALIZE_DICT = {
    "create_date": "日期",
    "sales_channel_level_1": "销售渠道一级",
    "sales_channel_level_1_code": "销售渠道二级编码",
    "sales_channel_level_2": "销售渠道二级名称",
    "product_name": "商品名称",
    "category_level_1": "一级分类品名",
    "category_level_2": "二级分类品名",
    "category_level_3": "三级分类品名",
    "import_area": "进口地区",
    "brand": "品牌",
    "sales_unit": "销售单位",
    "weight": "公斤重量",
    "price": "单价/公斤",
    "if_import": "是否进口",
    "variety": "品种",
    "category": "类别",
}
KEYS = None
VALUES = ",".join([f"%({v})s" for v in SERIALIZE_DICT.values()])


def main(filename):
    if not KEYS:
        print(",".join(SERIALIZE_DICT.keys()))
        return

    conn = psycopg2.connect(
        host=HOST,
        port=PORT,
        database=DATABASE,
        user=USER,
        password=PASSWORD,
    )
    cur = conn.cursor()

    temp = ",".join([f"{k} varchar " for k, _ in SERIALIZE_DICT.items()])

    sql = f'CREATE TABLE IF NOT EXISTS "{TABLENAME}" ( id serial PRIMARY KEY, {temp}); '
    print(sql)
    cur.execute(sql)
    conn.commit()

    df = pd.read_excel(filename)
    data_dict = df.to_dict("records")

    for d in data_dict:
        try:
            print(d)
            sql = f"INSERT INTO {TABLENAME} ({KEYS}) VALUES ({VALUES})"
            cur.execute(sql, d)

            conn.commit()
        except Exception as err:
            print(err)

    cur.close()
    conn.close()


if __name__ == "__main__":
    argv = sys.argv[:]
    main(argv[1])
```
