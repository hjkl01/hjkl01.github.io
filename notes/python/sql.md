# sql

```shell
select distinct
  column1,
  column2
from
  some_table;


SELECT
  name,
  CASE
    WHEN (age > 60) THEN '老同学'
    WHEN (age > 20) THEN '年轻'
    ELSE '小同学'
  END AS age_level
FROM
  student

# 统计学生表中的班级编号（class_id）和每个班级的平均成绩（avg_score）
SELECT
  class_id,
  AVG(score) AS avg_score
FROM
  student
GROUP BY
  class_id;


# 统计学生表中班级的总成绩超过 150 分的班级编号（class_id）和总成绩（total_score）
SELECT
  class_id,
  SUM(score) AS total_score
FROM
  student
GROUP BY
  class_id
HAVING
  SUM(score) > 150;



select
  s.name student_name,
  s.age student_age,
  s.class_id class_id,
  c.name class_name,
  c.level class_level
from
  student s
  join class c on s.class_id = c.id;

```
