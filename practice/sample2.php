<?php
$radiusq1 = 3;
echo $radius1 * $radius *3
?>

function printCircleArea($radius){
  echo $radius * $radius * 3;
}

printCircleArea(3);
printCircleArea(5);

<?php
$radius1 = 3;
echo $radius1 * $radius1 * 3;

echo $radius2 * $radius2 * 3;
?>

<?php
function hello(){
  echo 'Hello,world';
}

hello();
?>


<?php
function printSum($num1, $num2){
  echo $num1 + $num2;
}

printSum(1,3);
?>

<?php
function getSum($num1, $num2) {
  return $num1 + $num2;
}

$sum = getSum(1,3);
echo $sum;

?>

<?php
function getSum($num1, $num2){
  return $num1 + $num2;
}

$sum = getSum(4,4):
echo $sum;