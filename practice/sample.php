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