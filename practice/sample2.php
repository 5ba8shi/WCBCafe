<?php echo'<h2>初級</h2>'; ?>


<?php
  echo 'こんにちは';
  echo 'PHPを学ぼう';
?>

<?php echo 'Hello, World';?>

<?php
echo 7+3;
echo 10-5;
echo 3*5;
echo 4%4;
?>

<?php
$name = 'Bob';

echo $name;
?>

<?php
$length = 7;
$area = $length * $length;

echo $area;
?>

<?php
$area = 7*7;
echo $area;
?>

<?php
$num = 3;
echo $num;
$num = 5;
echo $num;
?>

<?php $num =3;
echo $num;
$num = 5;
echo $num;
?>

<?php
$x = 1;
$x += 10;

echo $x;
?>

$x += 10;

<?php
$x +=1
?>

<?php
$lesson = 'PHP';
echo $lesson.'入門';

$level = '入門';
echo $lesson.$level;

?>

<?php
$name = 'にんじゃ';
$name .= 'わんこ';

echo $name;
?>

<?php
$name = 'にんじゃわんこ';
echo "こんにちは、{$name}さん";

echo 'こんにちは、{$name}さん';
?>

<?php
$name ='にんじゃわんこ';
echo "こんにちは、{$name}さん";
?>

<?php
$name = 'にんじゃわんこ';
echo "こんにちは！{$name}";
?>

<?php
$x = 20;
if($x > 10){
  echo '$xは10より大きい';
}

$x = 20;
if($x > 30){
  echo '$xは30より大きい';
}

$i++
$i--
?>

<?php
if(true){
  echo '条件はtrueです';
}
?>

<?php
$x=20;
if($x > 30){
  echo '$xは30より大きい';
} else if($x > 10){
  echo '$xは10より大きい';
} else {
  echo 'いずれも当てはまらない';
}
?>