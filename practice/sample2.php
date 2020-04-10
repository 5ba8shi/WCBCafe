@for($i = 0; $i < 10; $i++)
  現在の値は: {{ $i }}
@endfor

@foreach($users as $user)
  <p>これは{{ $user->id }}ユーザーです。</p>
@endforeach

@forelse ($users as $user)
  <li>{{ $user->name }}</li>
@empty
  <p>ユーザーなし</p>
@endforelse

@while (true)
  <p>無限ループ中</p>
@endwhile

@for ($i = 0; $i < 10; $i++)
  現在の値は: {{ $i }}
@endfor

@foreach($users as $user)
  @if ($user->type == 1)
    @continue
  @endif

  <li>{{ $user->name }}</li>

  @if ($user->number === 5)
    @break
  @endif
@endforeach

@foreach($users as $user)
  @continue($user->type == 1)
  
  <li>{{ $user->name }}</li>

  @break($user->number == 5)
@endforeach


@foreach($users as $user)
  @foreach($user->posts as $post)
    @if($loop->parent->first)
      これは親のループの最初の繰り返しだ
    @endif
  @endforeach
@endforeach

@loop ->xml_get_current_byte_index

@push('scripts')
  ここは2番め
@endpush

@prepend('scripts')
 ここは最初
@endprepend


<?php echo ($var)->format('m/d/Y H:i'); ?>

@componentFirst(['custom.alert', 'alert'])
  <strong>Whoops! </strong> Something went wrong!
@endcomponent


<div class="alert alert-danger">
  <div class="alert-title">{{ $title }}</div>

  {{ $slot }}
</div>


@component('alert')
  @slot('title')
    Forbidden
  @endslot

  You

@alert(['type' => 'danger'])
  You are not allowed to access this resource!
@endalert


Route::get('greeting', function(){
  return view('welcome', ['name' => 'Samantha']);
});

Hello, {{ $name }}.


Hello, {{!! $name !!}}.


<script>
  var app = <?php echo json_encode($array); ?>;
</script>

<script>
  let app = @json($array);

  let app = @json($array, JSON_PRETTY_PRINT);
</script>

@verbatim
  <div class="container">
    Hello, {{ name }}.
  </div>
@endverbatim

@if (count($records) === 1)
  1レコードある！
@elseif (count($records) > 1)
  複数レコードある!
@else
  レコードがない！
@endif


@unless (Auth::check())
  あなたはログインしていません
@endunless

@isset($records)

@endisset

@empty($records)

@endempty


@auth

@endauth

@guest

@endguest

@auth('admin')

@endauth

@guest('admin')

@endguest

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
  現在の値は : {{ $i }}
@endfor

@forearch ($users as $user)
  <p>これは {{ $user->id }} ユーザーです。</p>
@endforeach

@forelse ($users as $user)
  <li>{{ $user->name }}</li>
@empty
  <p>ユーザーなし</p>
@endforelse

@while (true)
  <p>無限ループ中</p>
@endwhile

@switch($i)
  @case(1)
    最初のケース
    @break
  @case(2)
    2番目のケース
    @break
  
  @default
    デフォルトのケース
@endswitch


@for ($i = 0; $i < 10; $i ++)
  現在の値は: {{ $i }}
@endfor

@foreach ($user as $user)
  <p>これは{{ $user->id }}ユーザーです。</p>
@endforeach

@forelse ($users as $user)
  <li>{{ $user->name }}</li>
@empty
  <p>ユーザーなし</p>
@endforelse


@while(true)
  <p>無限ループ中</p>
@endwhile

@foreach($user as $user)
  @if($user->type == 1)
    @continue
  @endif

  @foreach($user as $user)
    @if ($user->type == 1)
      @continue
    @endif

    <li>{{ $user->name }}</li>

    @if ($user->number == 5)
      @break
    @endif
  @endforeach


  foreach ($user as $user)

  @foreach($user as $user)
    @if ($loop->first)
      これは最初の繰り返し
    @endif

    @if($loop->last)
      これは最後の繰り返し
    @endif

    <p>これは{{ $user->id }}ユーザーです。</p>]
  @endforearch

  @if (count($records) === 1)

  @elseif (count($records) > 1 )

  @else
   
  @endif

  @unless (Auth::check())
    あなたはログインしていません。
  @endunless


  @isset($records)

  @endisset

  @empty($records)

  @endempty


@for($i = 0; $i < 10 $i++)
  現在の値は：{{ $i }}
@endfor

@for($i = 0; $i < 10 $i++)
  現在の値は：{{ $i }}
@endfor

@foreach($users as $user)
  <p>これは{{ $user->id}}ユーザーです。</p>
@endforeach

@forelse ($users as $user)
  <li>{{ $user->name }}</li>
@empty
  <p>ユーザーなし</p>
@endforelse

@while(true)
  <p>無限ループ中</p>
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

@foreach ($user as $user)
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
      これは親の
    @endif
  @endforeach
@endforeach


<div>
  @inculde('shard.errors')

  <form>

  </form>
</div>

@include('view.name',['some' => 'data'])

@includeIf('view.name', ['some '=>'data'])

@includeWhen($boolean, 'view.name', ['some' => 'data'])

@includeFirst(['custom.admin', 'admin'], ['some'=>'data'])

includeFirst(['custom.admin', 'admin'], ['some' => 'data'])

@input(['type' => 'email'])

@each('view.name')

<head>
  <!-- v-->
  @stream('scripts')
</head>

@push('scripts')
  ここは2番目
@endpush

@prepend('scripts')
  ここは最初
@endprepend

@inject('metrics', 'App\Services\MetricsService')

<div>
  Monthly Revenue: {{ $metrics->monthlyRevenue() }}
</div>

@push('script')
  ここは2番目
@endpush

@prepnend('scriputs')
  ここは最初
@endprepend

@foreach($users as $user)
  @if ($loop->first)
    これは最初の繰り返し
  @endif

  @if ($loop->last)
    これは最後の繰り返し
  @endif

  <p>これは {{ $user->id }} ユーザーです。</p>
@endforeach

@foreach($user as $user)
  @foreach($user->posts as $post)
    @if ($loop->parent->first)
      これは親のループの最初の繰り返しだ
    @endif
  @endforeach
@endforeach

@foreach($users as $user)
  @if ($loop->first)
    これは最初の繰り返し
  @endif

  @if($loop->last)

  @endif

  <p>これは{{ $user->id }} ユーザーです。</p>
@endforeach

@foreach($user as $user)
  @if ($user->type == 1)
      @continue
  @endif

  <li>{{ $user->name }}</li>
  
  @if ($user->number == 5)
    @break
  @endif
@endforeach

@foreach($user as $user)
  @if ($user->type == 1)
    @continue
  @endif

  <li>{{ $user->name }}</li>

  @if ($user->number == 5)
    @break
  @endif
@endforeach


@foreach($user as $user)
  @continue($user->type == 1)
  <li>{{ $user->name }}</li>
  @break($user->number == 5)
@endforeach

@foreach($users as $user)
  @foreach($user->posts as $post)
    @if ($loop->parent->first)
      これは親のルー府の最初の繰り返しだ
    @endif
  @endforeach
@endforeach


$loop->index

$loop->remaining

$loop->depth

@php
//
@endph


<div>
  @include('shared.errors')

  <form>
    <!==
  </form>
</div>

@foreach($user as $user)
  @if($user->type == 1)
    @continue
  @endif

  <li>{{ $user->name }}</li>

  @if ($user->number == 5)
    @break
  @endif
@endforeach

@foreach($user as $user)
  @if ($user->type == 1)
    @continue
  @endif

  <li>{{ $user->name }}</li>

  @if ($user->number == 5)
    @break
  @endif
@endforeach


@foreach ($users as $user)
  @continue($user->type == 1)

  <li>{{ $user->name }}</li>

  @break($user->number == 5)
@endforeach

@foreach ($user as $user)
  @if ($loop->first)
    これは最初の繰り返し
  @endif

  @if ($loop->last)
    これは最後の繰り返し
  @endif

  <p>これは{{ $user->id }} ユーザーです。</p>
@endforeach

@foreach ($users as $user)
  @if ($loop->first)
    これは最初の繰り返し
  @endif

  @if ($loop ->last)
    これは最後の繰り返し
  @endif

  <p>これは {{ $user->id }} ユーザーです</p>
@endforeach

@foreach($users as $user)
  @foreach($user->posts as $post)
    @if ($loop->parent->first)
      これは親のループの最初の繰り返しだ
    @endif
  @endforeach
@endforeach


$loop ->xml_get_current_byte_index

$loop -> interation

$loop->count
$loop->first

@php
 //
@endphp



@swich($i)
  @case(1)
    最初のケース
    @break
  
  @case(2)
    2番目のケース
    @break

  @default
    デフォルトのケース
@endswitch


@for ($i = 0; $i < 10; $i++)
  現在の値は:{{ $i }}
@endfor

@foreach ($users as $user)
  <p>これは {{ $user->id }} ユーザーです。</p>
@endforeach

@forelse ($users as $user)
  <li>{{ $user->name }}</li>
@empty
  <p>ユーザーなし</p>
@endforelse


@while (true)
  <p>無限ループ</p>
@endwhile

@foreach ($user as $user)
  @if ($loop->first)
    これは最初の繰り返し
  @endif

  @if($loop->last)
    これは最後の繰り返し
  @endif

  <p>これは{{ $user->id }} ユーザーです。</p>
@endforeach

@foreach ($user as $user)
  @if ($loop->first)
    これは最初の繰り返し
  @endif

  @if ($loop->last)
    これは最後の繰り返し
  @endif

  <p>これは {{ $user->id }} ユーザーです。</p>
@endforeach


@foreach($user as $user)
  @foreach($user->posts as $post)
    @if($loop->parent->first)
      これは親のループの最初の繰り返しだ
    @endif
  @endforeach
@endforeach

@include('view.name', ['some' => 'data'])

@extends('layouts.app')

@section('title', 'Page Title')

@section('sidebar')
  @@parent

  <p>ここはメインのサイドバーに追加される</p>
@endsection

@section('content')
  <p>ここが本文のコンテンツ</p>
@endsection

@yield('content', View::make('view.name'))

Route::get('blade', function(){
  return view('child');
});


<div class="alert alert-danger">
  {{ $slot }}
</div>


@component('alert')
  <strong>Whoops!</strong>Something went wrong!
@endcomponent


@componentFirst(['custom.alert', 'alert'])
  <strong>Whoops!</strong> Something Went Wrong!
@endcomponent


<div class="alert alert-danger">
  <div class="alert-title">{{ $title }}</div>
  {{ $slot }}
</div>

@component('alert')
  @slot('title')
    Forbidden
  @endslot

  You are not allowed to access this resource!
@endcomponent


@component('alert',['foo' => 'bar'])

@endcomponent

@switch($i)
  @case(1)
    最初のケース
    @break

  @case(2)
    ２番めのケース
    @break
  
  @default



@extends('layouts.app')

@section('title', 'Page Title')

@section('sidebar')
  @@parent

  <p>ここはメインのサイドバーに追加される</p>
@endsection

@section('content')
  <p>ここが本文のコンテンツ</p>
@endsection

@yield('content', View::make('view.name'))

Route::get('blade', function(){
  return view('child');
});

@switch($i)
  @case(1)
    最初のケース
    @break
  
  @case(2)
    2番目のケース
    @break
  

  @default 
    デフォルトのケース
@endswitch

@for($i = 0; $i < 10; $i++)
  現在の値は: {{ $i }}
@endfor

@foreach($users as $user)
  <p>これは{{ $userr->id }}ユーザーです。</p>
@endforeach

@forelse($users as $user)
  <li>{{ $user->name }}</li>
@empty
  <p>ユーザーなし</p>
@endforelse


@foreach($users as $user)
  @if ($user->type == 1)
    @continue
  @endif

  <li>{{ $user->name }}</li>

  @if ($user->number == 5)
    @break
  @endif
@endforeach

@foreach ($users as $user)
  @continue($user->type == 1)

  <li>{{ $user->name }}</li>

  @break($user->number == 5)
@endforeach


@if (count($records) === 1)
  1レコードある！
@elseif (count($records) > 1)
  複数レコードがある
@else
  レコードがない
@endif

@unless (Auth::check())
  あなたはログインしていません。
@endunless


@isset($records)

@endisset

@empty($records)

@endempty

@while (true)
  <p>無限ループ</p>
@endwhile
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

@section('title', 'Page Title')

@section('sidebar')
  @@parent

  <p>ここはメインのサイドバーに追加される</p>
@endsection

@section('content')
  <p>ここが本文のコンテンツ</p>
@endsection

@component('alert', ['foo' => 'bar'])

@endcomponent

use Illuminate\Support\\\\

Blade::component('components.alert', 'alert');

@alert(['type' => 'danger'])
  You are not allowed to access this resource!
@endalert