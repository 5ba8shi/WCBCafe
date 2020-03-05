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