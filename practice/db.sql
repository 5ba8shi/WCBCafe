-- sql応用課題２

-- OK toysとcolortableの結合
SELECT toys.id, name, colortable.color, price FROM prolab_sql_task2.toys
 INNER JOIN prolab_sql_task2.colortable
 ON prolab_sql_task2.toys.colorcode = prolab_sql_task2.colortable.colorcode;

ALTER TABLE `toys` 
    CHANGE COLUMN `name` `商品名` VARCHAR(255) NOT NULL,
    CHANGE COLUMN `price` `値段` VARCHAR(255) NOT NULL;

ALTER TABLE `colortable` 
    CHANGE COLUMN `color` `色` VARCHAR(255) NOT NULL;
-- 


-- 二回目
SELECT toys.id, 名前, colortable.色, お金 FROM prolab_sql_task2.toys
 INNER JOIN prolab_sql_task2.colortable
 ON prolab_sql_task2.toys.colorcode = prolab_sql_task2.colortable.colorcode;


-- 3回目
ALTER TABLE `toys` 
    CHANGE COLUMN `名前` `商品名` VARCHAR(255) NOT NULL,
    CHANGE COLUMN `お金` `値段` VARCHAR(255) NOT NULL;

-- ④回目
SELECT toys.id, 商品名, colortable.色, 値段 FROM prolab_sql_task2.toys
 INNER JOIN prolab_sql_task2.colortable
 ON prolab_sql_task2.toys.colorcode = prolab_sql_task2.colortable.colorcode;



-- sql応用課題３--------------------------------

-- ✗ 動かない
SELECT COUNT(*) AS 商品名, 赤,青,黄,白,黒
FROM prolab_sql_task2.toys, prolab_sql_task2.colortable
GROUP BY 商品名


SELECT id,
    max(CASE WHEN key = '赤' THEN 1 END) AS 赤,
    max(CASE WHEN key = '青' THEN 1 END) AS 青,
    max(CASE WHEN key = '黄' THEN 1 END) AS 黄,
    max(CASE WHEN key = '白' THEN 1 END) AS 白,
    max(CASE WHEN key = '黒' THEN 1 END) AS 黒
FROM prolab_sql_task3.colortable
GROUP BY id

SELECT uid,
    max(CASE WHEN key = 'c1' THEN value END) AS c1,
    max(CASE WHEN key = 'c2' THEN value END) AS c2,
    max(CASE WHEN key = 'c3' THEN value END) AS c3
FROM vtable
GROUP BY uid