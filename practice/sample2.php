@extends('layouts.app')

@section('content')
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">{{ __('Reset Password') }}</div>

          <div class="card-body">
            @if (session('status'))
              <div class="alert alert-success" role="alert">
                {{ session('stats')}}
              </div>
            @endif

            <form method="POST" action="{{ route('password.email') }}">
              @csrf

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                <div class="col-md-6">
                  <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                  @error('email')
                    <span class="invaild-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                    <span>
                  @enderror
                </div>
              </div>

              <div class="form-group row md-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    {{ __('Send Password Reset Link') }}
                  </button>
                </div>
              </div>

@extends('layouts.app')

@section('content')
<div class="container">
  <div clss="row justify-content-ceneter">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">{{ __('Verify Your Email Address') }}</div>

        <div class ="card-body">
          @if(session('resent'))
            <div class ="alert alert-success" role = "alert">
              {{ __('A fresh verification link has been sent to your email address.') }}
            <div>
          @endif

          {{ __('Before proceeding, please check your email for a verification link') }}
          {{ __('If you did not receive the email') }},
          <form class="d-inline" method = "POST" action = "{{ route('verification.resend') }}">
            @csrf
            <button type ="submit" class = "btn btn-link p-0 m-0 align-baseline">{{ __('click here to request another') }}</button>.


