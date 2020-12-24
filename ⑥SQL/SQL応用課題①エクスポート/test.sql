-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost:3306
-- 生成日時: 2020 年 6 月 28 日 23:09
-- サーバのバージョン： 5.7.26
-- PHP のバージョン: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- データベース: `prolab_sql_task`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `colortable`
--

CREATE TABLE `colortable` (
  `id` int(11) NOT NULL,
  `colorcode` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `colortable`
--

INSERT INTO `colortable` (`id`, `colorcode`, `color`) VALUES
(1, '001', '赤'),
(2, '002', '青'),
(3, '003', '黄'),
(4, '004', '白'),
(5, '005', '黒');

-- --------------------------------------------------------

--
-- テーブルの構造 `toys`
--

CREATE TABLE `toys` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `colorcode` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `remarks` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `toys`
--

INSERT INTO `toys` (`id`, `name`, `colorcode`, `price`, `remarks`) VALUES
(1, 'パーティ衣装', '002', 1680, NULL),
(2, 'ブリキのおもちゃ', '001', 412, NULL),
(3, 'ゾンビのマスク', '005', 568, NULL),
(4, 'ブリキのおもちゃ', '004', 412, NULL),
(5, 'ゾンビのマスク', '002', 568, NULL),
(6, 'ブリキのおもちゃ', '005', 412, NULL),
(7, 'ゾンビのマスク', '001', 568, NULL),
(8, 'ゾンビのマスク', '004', 568, NULL),
(9, 'パーティ衣装', '004', 1680, NULL),
(10, 'パーティ衣装', '004', 1680, NULL),
(11, 'パーティ衣装', '005', 1680, NULL),
(12, 'ブリキのおもちゃ', '001', 412, NULL),
(13, 'パーティ衣装', '001', 1680, NULL),
(14, 'ゾンビのマスク', '004', 568, NULL),
(15, 'パーティ衣装', '003', 1680, NULL),
(16, 'ブリキのおもちゃ', '003', 412, NULL),
(17, 'ブリキのおもちゃ', '003', 412, NULL),
(18, 'パーティ衣装', '003', 1680, NULL),
(19, 'ブリキのおもちゃ', '002', 412, NULL),
(20, 'ゾンビのマスク', '001', 568, NULL);

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `colortable`
--
ALTER TABLE `colortable`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `toys`
--
ALTER TABLE `toys`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルのAUTO_INCREMENT
--

--
-- テーブルのAUTO_INCREMENT `colortable`
--
ALTER TABLE `colortable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- テーブルのAUTO_INCREMENT `toys`
--
ALTER TABLE `toys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
