<?php echo'<h2>初級</h2>'; ?>

<?php
  echo'こんにちは';
  echo'PHPを学ぼう';
  ?>

<?php
  echo 'Hello, World!';
  ?>

<?php echo "Hello, World"; ?>

<?php echo'Hello, PHP!'; ?>

<?php
echo 7 + 3;
echo "10 - 4";
?>

<?php 
  echo 5+2;
  echo'5+2';
?>

<?php
 $name = 'Bob';
 echo $name;
 ?>

 <?php
 $length = 7;
 $area = $length * $length;

 echo $area;

 $area = 7 * 7;
 
 echo $area;
 ?>

 <?php
  $num = 3;
  echo $num;

  $num = 5;

  echo $num;
 ?>

<?php
  $x = 1;
  $x += 10;

  echo $x;
 ?>

 <?php
  $x += 10;
  $x -= 10;
  $x %= 10;
  ?>

  <?php
    $x = 3;
    $x++;
    $x--;
    echo ++$x;
    echo $y++;
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
  echo 'こんにちは、{$naem}さん';
 ?>

 <?php
 $x = 20;
 if($x > 10) {
   echo '$xは10より大きい';
 }

?>

<?php
  $x = 20;
  if ($x > 30){
    echo '$xは30より大きい';
  }
?>

<?php
  if(true){
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
  }
  else{
    echo '$xは30ではありません';
  }
?>

<?php
  $x = 20;
  if($x > 30){
    echo '$xは30より大きい';
  }
  elseif($x >= 20){
    echo '$xは30以下20以上';
  }
  else{
    echo '$xは20より小さい';
  }
?>

<?php
 $x = 20;
 if($x > 10 && $x < 30) {
   echo '$xは10より大きい、かつ30より小さい';
 }
 if($x < 10||$x > 30){
    echo '$xは10より小さい、または30より大きい';
 }
?>
 <?php
 $x = 20;
 if (!($x == 30)) {
   echo '$xは30ではない';
 }
 ?>

<?php
$x = 20;
if(!($x == 30)) {
  echo '$xは30ではない';
}
?>

<?php
if($coin == 0){
  echo '表';
}
elseif($coin == 1){
  echo '裏';
}
else{
  echo 'エラー';
}
?>

<?php
switch ($coin){
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
switch($coin){
  case 0:
    echo '表';
    break;
  case 1:
    echo '裏';
    break
  default:
    echo 'エラー';
    break;
}

?>

<?php
  $names = array('john','Kate','Bob');

  echo $names[0];

  echo $names[1];

?>

<?php
$names = array('john','Kate','Bob');

$names[] = 'Mary';
echo $names[3];

$names[1] = 'jane';
echo $names[1];

?>

<?php
  $user = array(
    'name' => 'わんこ',

    'age' => 14,

    'gender' => 'male'
  );
?>

<?php
  $user = array(
    'name' => 'わんこ',
    'age'  =>  14
  );

  echo $user['わんこ'];

  $user['level'] = 'beginner';
?>

echo 1;
echo 2;

<?php
for ($i = 1; $i<=100; $i++) {
  echo $i;
}
?>

<?php
 for ($i = 1; $i <= 100; $i++) {
   echo $i;
 }
?>

