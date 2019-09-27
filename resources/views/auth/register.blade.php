@extends('layouts.app')
@section('head')
<head>
    <title>{{config('app.name' , 'InteraKids')}}</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    {!! Minify::stylesheet(['/css/app.css','/css/site/login.css'])->withFullUrl()!!}
    {!! Minify::javascript(['/js/app.js','/js/site/wow.js'])->withFullUrl() !!}
    @endsection
    @section('conteudo')
</head>
<body id="hidden">
    <div class="wrapper fadeInDown register ">
        <div class="containercontainer wrapper fadeInDown" id="formContent ">
            <form method="post" action="{{ route('register') }}">
                @csrf
                <div class="auth-register-with-email">
                    <div class="auth-white-background">

                        <div class="auth-title-row">
                            <h1>Criar Nova Conta</h1>
                        </div>
                        <div class="auth-row">
                            <label>
                                <span>{{ __('Nome:') }}</span>
                            </label>
                            <input type="name" name="name" class="{{ $errors->has('name') ? ' is-invalid' : '' }} auth-control"
                                name="name" value="{{ old('name') }}" required> @if ($errors->has('name'))
                            <span class="invalid-feedback">
                                <strong>{{ $errors->first('numfmt_parse') }}</strong>
                            </span>
                            @endif
                        </div>
                        <div class="auth-row">
                            <label>
                                <span>{{ __('Email:') }}</span>
                            </label>
                            <input type="email" name="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }} auth-control"
                                name="email" value="{{ old('email') }}" required> @if ($errors->has('email'))
                            <span class="invalid-feedback">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                            @endif
                        </div>
                        <div class="auth-row">
                            <label>
                                <span>{{ __('Senha:') }}</span>
                            </label>
                            <input type="password" name="password" class="{{ $errors->has('password') ? ' is-invalid' : '' }} auth-control"
                                name="password" required> @if ($errors->has('password'))
                            <span class="invalid-feedback">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                            @endif
                        </div>
                        <div class="auth-row">
                            <label>
                                <span>{{ __('Confirmar senha:') }}</span></label>
                            <input id="password-confirm" type="password" class="auth-control" name="password_confirmation"
                                required>

                        </div>
                        <div class="auth-row botao">
                            <button type="submit">{{ __('Registrar') }}</button>
                        </div>
                    </div>
                    <!--<a href="#" class="auth-log-in-with-existing">Você ja tem conta? Entra aqui &rarr;</a>-->
                </div>
                <div class="auth-sign-in-with-social">
                    <div class="auth-row auth-title-row">
                        <span class="auth-title">Entre com</span>
                    </div>
                    <a href="{{url('login/google')}}" class="auth-google-button"><i class="fa fa-google pr-2"></i>Google</a>
                </div>
            </form>
        </div>
        @endsection