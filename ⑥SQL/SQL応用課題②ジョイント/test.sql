ALTER TABLE `toys` 
    CHANGE COLUMN `name` `商品名` VARCHAR(255) NOT NULL,
    CHANGE COLUMN `price` `値段` VARCHAR(255) NOT NULL;

ALTER TABLE `colortable` 
    CHANGE COLUMN `color` `色` VARCHAR(255) NOT NULL;

SELECT toys.id, 商品名, colortable.色, 値段 FROM prolab_sql_task.toys
 INNER JOIN prolab_sql_task.colortable
 ON prolab_sql_task.toys.colorcode = prolab_sql_task.colortable.colorcode;