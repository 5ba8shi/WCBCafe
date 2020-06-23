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

