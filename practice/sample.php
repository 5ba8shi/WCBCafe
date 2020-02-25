<!-- PAIZA -->
<?php
$input_line = trim(fgets(STDIN));
for ($i = 0; $i < $input_line; $i++) {
  $s = trim(fgets(STDIN));
  $s = str_replace(array("\r\n","\r","\n"), '', $s);
  $s = explode(" ", $s);
  echo "hello = ".$s[0]." , world = ".$s[1]."\n";
}
?>


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
   echo $i.'<br>';
 }
?>


<?php
$i = 1;
while($i <= 100) {
  echo $i;
  $i++;
}

?>


<?php
$i = 1;
while($i <= 100 && $i % 2 == 0){
  echo $i;
}

?>

<?php
for($i = 1; $i <= 10; $i++){
  if($i > 5){
  break;
  }
  echo $i;
}
?>

<?php
for($i = 1; $i <= 10;$i++){
  if ($i > 5){
  break;
  }
}
?>

<?php
for ($i = 1; $i <= 10; $i++){
  if($i % 3 ==0){
    continue;
  }
  echo $i;
}
?>

continue  スルーする。

break     if条件に該当すると終了。

<?php
  $data = array('東京','大阪','京都');
  foreach($data as $value){
    echo $value;
  }
?>

<?php
foreach($data as $value){
  echo $value;
}
?>

<?php
  $colors = array(
              'Apple' => 'Red',
              'Banana' => 'Yellow',
              'Grape' => 'Purple',
              );
  foreach($colors as $key => $value){
    echo $key.':'.$value;
  }
?>


<?php
  for
?>


<?php
  $scores = array('数学' => 70,'英語' => 90,'国語' => 80);

  foreach ($scores as $key => $value) {
    echo $key.'は'.$value.'点です。';
  }

?>

<?php
 echo strlen('Progage');
?>

<?php
 $language = 'PHP';
 echo strlen($language);
 ?>



<?php
  $data = array('東京','大阪','京都');

  echo count($data);
 ?>

 <?php
  echo rand(1,4);

?>

<?php
  $radius1 = 3;
  echo $radius1 * $radius1 * 3;

  $radius2 = 5;
  echo $radius2 * $radius2 * 3;
?>

<?php
function printCircleArea($radius){
  echo $radius * $radius * 3;

  printCircleArea(3);

  printCircleArea(5);
}
?>

<?php
funtion hello(){
  echo 'Hello, world'
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
  function getSum($num1, $num2){
    return $num1 + $num2;
  }

  $sum = getSum(1,3);
  echo $sum;

?>

<?php
function square($length){
 return $length ** 2;
}

$side_length = 5;

echo "１辺が{$side_length}センチの正方形は{square($length)}㎡です";

?>

<?php
function($side_length){
 return $length ** 2;
}
?>


<form actio="url" method="post">

</form>

<form action="sent.php" method="post">
  Emailを入力してください。
  <input type="text" name="email">
  <textarea name="content"></textara>
</form>

<?php
echo $_POST['name'];
echo $_POST['email'];

array(
  'name' => 'にんじゃわんこ',

  email => 'wanko@prog-8.com'
)

?>


+<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});












<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');

Route::get('hello/{msg}',function($msg){
$html = <<<EOF
<html>
<head>
<title>Hello</title>
<style>
body {font-size:16pt; color:#999; }
h1  { font-size:100pt; text-align:right; color:#eee;
    margin:-40px 0px -50px 0px; }
</style>
</head>
<body>
    <h1>Hello</h1>
    <p>{$msg}</p>
    <p>これはサンプルで作ったページです。</p>
</body>
</html>
EOF;


    return $html;    
});
});

@if(lala)

@endif



@if(lala)

@else

@endif

@if (条件)

@elseif(条件)

@else

@endif

@unless (jyo ==0)

@endunless

@unless(jyo == 0)

@else

@endunless

@empty (変数)

@else

@endempty

@isset(henn)

@endisset

@for(;;)

@endfor

@foreach($rere as $re)

@endforeach

@forelse ($配列 as $変数)

@empty

@endforelse

@while (条件)
繰り返す処理
@endwhile

$loop->index

$loop->date_interval_create_from_date_string

$loop->remaining

$loop->count

$loop->first

$loop->libxml_get_last_error

$loop->depth

$loop->parent

@foreach ($users as $user)
  @if ($loop->first)
    これは最初の繰り返し
  @endif

  @if ($loop->last)
    これは最後の繰り返し
  @endif

  <p>これは{{ $user->id }} ユーザーです。</p>
@endforeach


@foreach($user as $user)
  @foreach($user->posts as $post)
    @if ($loop->parent->first)
      これは親のループの最初の繰り返しだ
    @endif
  @endforeach
@endforeach

$loop->index

$loop->iteration

$loop->count

$loop->array_key_first

$loop->last

$loop->even

$loop->PHP_ROUND_HALF_ODD


<div>
  @include('shared.errors')

  <form>
    フォームの内容
  </form>
</div>

html:5
↓
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>

@push('script')
  <script src="/example.js"></script>
@endpush

@push('script')
  ここは２番め
@endpush

@prepend('scripts')
  ここは最初
@

@inject('metrics', 'APP\Services\MetricsService')

<div>
  Monthly Revenue: {{ $metrics->monthlyRevenue() }}.
</div>

@yield ('content', View::make('view.name'))

Route::get('blade', function(){
  return view('child');
});

<div class="alert alert-danger">
  {{ $slot }}
</div>

@component('alert')
  <strong>Whoops!</strong> Something went wrong!
@endcomponent

<html>
  <head>
    <title>アプリ名 - @yield('title')</title>
  </head>
  <body>
    @section('sidebar')
      ここがメインのサイドバー
    @show

    <div class="cotainer">
      @yield('content')
    </div>
  <body>
</html>

@