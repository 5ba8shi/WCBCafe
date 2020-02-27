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