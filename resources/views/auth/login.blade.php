@extends('layouts.app') 

@section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{!! Minify::stylesheet([ '/css/app.css','/css/site/login.css'])->withFullUrl()!!}
{!! Minify::javascript(['/js/app.js','/js/site/wow.js'])->withFullUrl() !!}
@endsection
@section('conteudo')
<body id="hidden">
<div class="wrapper fadeInDown bd ">
<div class="wrapper fadeInDown" id="formContent login ">
    <form method="POST" action="{{ route('login') }}">
        @csrf
        <div class="auth-log-in-with-email">
            <div class="auth-white-background">
                <div class="auth-title-row">
                    <h1>Entre Na Sua Conta</h1>
                </div>           
                <div class="auth-row">
                    <label>
                        <span>{{ __('Email:') }}</span>
                    <input type="email" name="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }} auth-control" name="email" value="{{ old('email') }}"
                        required autofocus>
                         @if ($errors->has('email'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                </label>
                    @endif
                </div>

                <div class="auth-row">
                    <label>
                        <span>{{ __('Senha:') }}</span>
                    
                    <input type="password" name="password" class="{{ $errors->has('password') ? ' is-invalid' : '' }} auth-control"  name="password" required> @if ($errors->has('password'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                </label>
                    @endif
                </div>
                <div class="auth-group row">
                        <div class="col-md-6 offset-md-2">
                            <div class="checkbox">
                                    <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Lembrar senha') }}                       
                            </div>
                        </div>
                    </div>
                <div class="auth-row botao">
                    <button type="submit">{{ __('Entrar') }}</button>
                </div>
                <a href="{{ route('password.request') }}" class="auth-forgotten-password">{{ __('Esqueceu a senha?') }}&middot;</a>
            </div>
            
        </div>
        <div class="auth-sign-in-with-social">
                    <div class="auth-row auth-title-row">
                        <span class="auth-title">Entre com</span>
                    </div>
                    <a href="{{url('login/google')}}" class="auth-google-button"><i class="fa fa-google pr-2"></i>Google</a>
                </div>
        
    </form>

@endsection
</body>
