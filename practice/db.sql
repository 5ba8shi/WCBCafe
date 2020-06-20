CREATE TABLE db_test.test02 (
  id INT NOT NULL PRIMARY KEY AUTO INCREMENT,
  code VARCHARA(255),
  occupation VARCHARA(255)
);
INSERT INTO db_test.test02 (id, code, occupation) VALUES(1, "001", "会社員");

SELECT name, age FROM db_test.test01;

SELECT * FROM db_test.test01;

SELECT * FROM db_test.test01 WHERE age = 19;

INSERT INTO db_test.01 VALUES (6,"シバタ",40,null);