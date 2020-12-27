SELECT 商品名,
  COUNT(CASE WHEN 色 = '001' THEN 1 ELSE null END) AS 赤,
  COUNT(CASE WHEN 色 = '002' THEN 1 ELSE null END) AS 青,
  COUNT(CASE WHEN 色 = '003' THEN 1 ELSE null END) AS 黄,
  COUNT(CASE WHEN 色 = '004' THEN 1 ELSE null END) AS 白,
  COUNT(CASE WHEN 色 = '005' THEN 1 ELSE null END) AS 黒
  FROM(
    SELECT toys.id, name AS 商品名, colortable.colorcode AS 色, price AS 値段 FROM prolab_sql_task.toys
    INNER JOIN prolab_sql_task.colortable
    ON prolab_sql_task.toys.colorcode = prolab_sql_task.colorbale.colorcode
  ) AS account

GROUP BY 商品名;