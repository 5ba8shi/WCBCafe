SELECT 商品名,
  COUNT(CASE WHEN 色 = '001' THEN 1 ELSE null END) AS 赤,
  FROM(
    SELECT toys.id, name AS 商品名, colortable.colorcode AS 色, price AS 値段 FROM prolab_sql_task.toys
    INNER JOIN prolab_sql_task.colortable
    ON prolab_sql_task.toys.colorcode = prolab_sql_task.colorbale.colorcode
  ) AS account

GRANT BY 商品名;