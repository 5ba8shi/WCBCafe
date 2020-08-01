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
FROM prolab_sql_task1.colortable
GROUP BY id

SELECT uid,
max(CASE WHEN key = `c1` THEN value END) AS c1,
max(CASE WHEN key = `c2` THEN value END) AS c2,
max(CASE WHEN key = `c3` THEN value END) AS c3
FROM test03
GROUP BY uid;


SELECT uid,
max (CASE WHEN key= c1 THEN value END) AS c1,
max (CASE WHEN key= c2 THEN value END) AS c2,
max (CASE WHEN key= c3 THEN value END) AS c3
FROM test03
GROUP BY uid




-- MySQLの準備

--テーブルの準備
CREATE TABLE 成績
(
     名前   varchar(50)
    ,科目   varchar(20)
    ,得点   int
);
  
--データの準備
INSERT INTO 成績 VALUES ('システムトラスト３号', '英語',  20 ) ;
INSERT INTO 成績 VALUES ('システムトラスト３号', '国語',  30 ) ;
INSERT INTO 成績 VALUES ('システムトラスト３号', '数学',  40 ) ;
INSERT INTO 成績 VALUES ('システムトラスト３号', '理科',  50 ) ;
INSERT INTO 成績 VALUES ('システムトラスト３号', '社会',  60 ) ;
INSERT INTO 成績 VALUES ('システムトラスト１号', '英語', 100 ) ;
INSERT INTO 成績 VALUES ('システムトラスト１号', '国語',  90 ) ;
INSERT INTO 成績 VALUES ('システムトラスト１号', '数学',  80 ) ;
INSERT INTO 成績 VALUES ('システムトラスト１号', '理科',  70 ) ;
INSERT INTO 成績 VALUES ('システムトラスト１号', '社会',  60 ) ;
INSERT INTO 成績 VALUES ('システムトラスト２号', '英語',  50 ) ;
INSERT INTO 成績 VALUES ('システムトラスト２号', '国語',  40 ) ;
INSERT INTO 成績 VALUES ('システムトラスト２号', '数学',  30 ) ;
INSERT INTO 成績 VALUES ('システムトラスト２号', '理科',  20 ) ;
INSERT INTO 成績 VALUES ('システムトラスト２号', '社会',  10 ) ;
  
--PIVOT句を使って縦に並ぶデータを縦横変換を行う
SELECT
     名前
    ,英語
    ,国語
    ,数学
    ,理科
    ,社会
FROM
    成績
PIVOT ( SUM( 得点 ) FOR 科目 IN ( 英語, 国語, 数学, 理科, 社会)) AS ピボットテーブル
ORDER BY 名前;
 
--テーブルを削除
DROP TABLE 成績


WITH 必要列のみ AS (SELECT 種別,味,金額 FROM フルーツ)
SELECT * FROM 必要列のみ PIVOT(AVG(金額) FOR 種別 IN (いちご,バナナ)) T
ORDER BY 味;