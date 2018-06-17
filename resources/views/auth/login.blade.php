@extends('layouts.app') 

@section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{!! Minify::stylesheet(['/css/site/app.css', '/scss/style.scss', 
'/css/site/temp.css', '/css/site/login.css'])->withFullUrl() !!}

{!! Minify::javascript(['/js/site/app.js',])->withFullUrl() !!}
@endsection
@section('conteudo')
<div class="container" id="login">
    <form method="POST" action="{{ route('login') }}">
        @csrf

        <div class="form-log-in-with-email">

            <div class="form-white-background">

                <div class="form-title-row">
                    <h1>Entrar</h1>
                </div>

                <div class="form-row">
                    <label>
                        <span>{{ __('Endereço de Email') }}</span </label>
                        <input type="email" name="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}"
                            required autofocus> @if ($errors->has('email'))
                        <span class="invalid-feedback">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                        @endif
                </div>
                <div class="form-row">
                    <label>
                        <span>{{ __('Senha') }}</span>
                    </label>
                    <input type="password" name="password" class="{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required> @if ($errors->has('password'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="form-group row">
                    <div class="col-md-6 offset-md-4">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Manter conectado') }}
                            </label>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <button type="submit">{{ __('Login') }}</button>
                </div>

            </div>

            <a href="{{ route('password.request') }}" class="form-forgotten-password">{{ __('Esqueceu a senha?') }}&middot;</a>
            <a href="#" class="form-create-an-account">Criar nova conta &rarr;</a>

        </div>

        <div class="form-sign-in-with-social">

            <div class="form-row form-title-row">
                <span class="form-title">Entre com</span>
            </div>

            <a href="#" class="form-google-button">Google</a>
            <a href="#" class="form-facebook-button">Facebook</a>
            <a href="#" class="form-twitter-button">Twitter</a>

        </div>

    </form>

</div>
@endsection