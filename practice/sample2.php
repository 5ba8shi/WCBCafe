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


@switch($i)
  @case(1)
    最初のケース
    @break

  @case(2)
    ２番めのケース
    @break

  @default
    デフォルトのケース
@endswitch



@for ($i = 0; $i < 10; $i++)
  現在の値は: {{ $i }}
@endfor

@foreach ($users as $user)
  <p>これは {{ $user->id}} ユーザーです。</p>
@endforeach

@forelse ($user as $user)
  <li>{{ $user-> name }}</li>
@empty
  <p>ユーザーなし</p>
@endforelse


@while (true)
  <p>無限ループ</p>
@endwhile


@foreach ($users as $user)
  @if ($user->type == 1)
    @continue
  @endif

  <li>{{ $user->name }}</li>

  @if ($user->number == 5)
    @break
  @endif
@endforeach


@foreach($users as $user)
  @continue($user->type == 1)
    <li>{{ $user->name }}</li>
  @break
@endforeach

@foreach ($users as $user)
  @if ($loop->first)
    これは最初の繰り返し
  @endif


echo $_POST['name'];
echo $_POST['email'];

array(
  'name' => 'にんじゃわんこ',
  'email' => 'wanko@prog-8.com'
)

@foreach ($users as $user)
  @if ($loop->first)
    これは最初の繰り返し
  @endif

  @if ($loop->last)
    これは最後の繰り返し
  @endif

  <p>これは{{ $user->id}} ユーザーです。</p>
@endforeach

@foreach ($users as $user)
  @foreach($user->posts as $post)
    @if ($loop->parent->first)
      これは親のループの最初の繰り返しだ
    @endif
  @endforeach
@endforeach


@php
  //
@endphp
?>

<?php

<html>
  <head>
    <title>アプリ名 - @yield('title')</title>
  </head>
  <body>
    @section('sidebar')
      ここがメインのサイドバー
    @show

    <div class="container">
      @yield('content')
    </div>
  </body>
</html>

@extends('layouts.app')

@section('title','Page Title')

@section('sidebar')
  @@parent

  <p>ここはメインのサイドバーに追加される</p>
@endsection


@section('content')
  <p>ここが本文のコンテンツ</p>
@endsection

@component('alert',['foo' => 'bar'])

use Illuminate\Support\Facades\Blade;

Blade::component('')


let fr