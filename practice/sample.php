<?php
  echo'こんにちは';
  echo'PHPを学ぼう';
?>

<?php echo 'Hello, World!'; ?>

<?php echo"Hello, World!"; ?>

<?php echo 'Hello, PHP!!'; ?>

<?php
echo 5 + 2;
?>

<?php
  echo '5 + 2'; 
?>

<?php
  $name = 'Bob';

  echo$name;
?>

<?php
 $length = 7;
 $area = $length * $length;
 
 echo $area;
?>

<?php $num = 3;
echo $num;
$num = 5;
echo $num;
?>

<?php
$x = 1;
$x = $x + 10;
echo $x;
?>

<?php
$x += 10;
$x -= 10;
$x *= 10;
$x %= 10;
?>

<?php
  $x += 1;  =  $x++;
  $x -= 1;  =  $x--;
?>

<?php
  $x = 3;
  $y = 3;
  echo ++$x;
  echo $y++;
?>

<?php
  $lesson ='PHP';
  echo $lesson.'入門';
?>

<?php
  $level ='入門';
  echo $lesson.$level;
?>  

<?php
  $lesson = 'PHP';
  $level = '入門';
  echo $lesson.$level;
?>

<?php
  $name = 'にんじゃ';
  $name .= 'わんこ';
  echo $name;
?>


<?php
 $name = 'にんじゃ';
 $name .= 'わんこ';

 echo $name;

 $name = 'にんじゃわんこ';
 echo "こんにちは、{$name}さん";

 echo 'こんにちは、{$name}さん';
 ?>

<?php
 $x = 20;
 if($x > 10){
   echo '$xは10より大きい';
 }
 ?>

 <?php
 $x = 20;
 if($x > 30) {
   echo '$xは30より大きい';
 }
 ?>

 <
<=
>=
==
!= 等しくない時

<?php
if(true) {
  echo '条件はtrueです';
}
?>

<?php
$x = 20;
if($x > 30){
  echo '$xは30より大きい';
}
if($x > 10){
  echo '$xは10より大きい';
}
?>

<?php
$x = 20;
if($x == 30){
  echo '$xは30です';
} else {
  echo '$xは30ではありません';
}
?>

<?php
$x = 20;
if($x > 30){
  echo '$xは30より大きい';
}elseif ($x >= 20){
  echo '$xは20より小さい';
}else{
  echo '$xは20より小さい';
}
?>

<?php
$x = 20;
if($x > 10 && $x < 30) {
  echo '$xは10より大きい,かつ30より小さい';
}
if($x < 10 || $x > 30){
  echo '$xは10より小さい、または30より大きい';
}
?>

<?php
$x = 20;
if(!($x == 30)){
  echo'$xは30ではない';
}
?>

<?php
 if ($x % 3 == 0 && $x % 7 == 0){
   echo'3の倍数かつ7の倍数です';
 }
 ?>

<?php
  if($coin == 0) {
    echo '表';
  } elseif($coin == 1){
    echo '裏';
  } else {
    echo 'エラー';
  }
?>

<?php
  switch ($coin) {
    case 0:
      echo '表';
      break;
    case 1:
      echo '裏';
      break;
    default:
      echo 'エラー';
      break;
  }
?>

<?php
  $names = array('John','Kate', 'Bob');

  echo $names[0];

  echo $names[1];
  ?>

<?php
  $names = array('John','Kate','Bob');
  $names[] ='Mary';
  echo $names[3];

  $names[1] = 'jane';

  echo $names[1];
?>

<?php
  $user = array(
    'name'   => 'わんこ',
    'age'    =>  14,
    'gender' => 'male'
  );
?>

<?php
 $user = array(
  'name' => 'わんこ',
  'age'  =>  14
 );
 echo $user['name'];
?>

<?php
$user['level'] = 'beginner';
?>

<?php
 echo 1;
 echo 2;
 :
 :
 echo 100;
?>

<?php
for ($i = 1; $i <= 100; $i++) {
  echo $i;
}

for ($i = 1; $i <= 100; $i++) {
  echo $i;
}

?>

<?php
  $i =1;
  while($i <= 100) {
    echo $i;
    $i++;
  }

?>

<?php
  if ($i % 2 == 0) {
    echo $i;
  }
  $i ++;
?>

<?php
  for($i =1; $i <= 10; $i++){
  if ($i > 5){
  break;
  }
  echo $i;
  echo '<br>';
}
?>

<?php
  for ($i =  1; $i <= 10; $i++){
    if($i% 3 == 0 ) {
      continue;
    }
    echo $i;
  }
?>


<?php
for ($i = 1; $i <= 10; $i++){
  if($i % 3 == 0 ){
    continue;
  }
}
?>

<?php
for($i=1; $i <= 10; $i++){
  if($i % 3 == 0) {
    continue;
  }
  echo $i;
}
?>
<?php
$data = array('東京','大阪','京都');

foreach ($data as $value) {
  echo $value;
}

?>

<?php
foreach($data as $value) {
  echo $value;
}

foreach ($data as $key => $price) {
  echo $price;
}
?>

<?
$colors = array(
  'Apple' => 'Red',
  'Banana' => 'Yellow',
  'Grape' => 'Purple'
);

foreach($colors as $key => $value) {
  echo $key.':'.$value;
}
?>

<?php
  echo strlen('Progate');
?>

<?php
  $language = 'PHP';
  echo strlen($language);
?>

<?php
$data = array('東京', '大阪', '京都');
echo conunt($data);

echo rand(1,4);
?>

<?php
  $radius1 = 3;
  echo $radius1*$radius1*3;

  $radius2 = 5;
  echo $radius2*$radius2*3;
?>

<?php
  function printCircleArea($radius){
    echo $radius * $radius * 3;
  }

  printCircleArea(3);
  printCircleArea(5);
?>

<?php
  function hello(){
    echo 'Hello, World!';
  }

  hello();

?>

<?php
  $radius1 = 3;
  echo $radius1 * $radius1 * 3;

  $radius2 = 5;
  echo $radius2 * $radius * 3;
?>

<?php
  function printCircleArea($radius) {
    echo $radius * $radius * 3;
  }

  printCircleArea(3);
  printCircleArea(5);

?>

<?php
  function hello() {
    echo 'Hello, world!';
  }

  hello();
?>

<?php

  function printSum($num1,$num2) {
    echo $num1 + $num2;
  }
?>

printSum(1,3);

<?php
function getSum($num1,$num2) {
  return $num1 + $num2;
}

$sum = getSum(1,3);
echo $sum;

?>

<?php
<form action="url" method="post">

</form>
?>

<?php
<from action="sent.php" method="post">
  Emailを入力して下さい
  <input type="text" name="email">
  </form>
?>

<?php
  <form action="sent.php" method ="post">
   内容
   <textarea name="content"></textarea>

  </form>
?>