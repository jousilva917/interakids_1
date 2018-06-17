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
<div class="container" id="register">
    <form method="post" action="{{ route('register') }}">
        @csrf
        <div class="form-register-with-email">
            <div class="form-white-background">

                <div class="form-title-row">
                    <h1>Criar Nova Conta</h1>
                </div>
                <div class="form-row">
                    <label>
                        <span>{{ __('Nome') }}</span>
                    </label>
                    <input type="text" name="name" class="{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}"
                        required autofocus> @if ($errors->has('name'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('name') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="form-row">
                    <label>
                        <span>{{ __('Endereço de Email') }}</span>
                    </label>
                    <input type="email" name="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}"
                        required> @if ($errors->has('email'))
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

                <div class="form-row">
                    <label>
                    <span>{{ __('Confirmar senha') }}</span></label>
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                    
                </div>


                <div class="form-row">
                    <label class="form-checkbox">
                        <input type="checkbox" name="checkbox" checked>
                        <span>Eu Concordo com
                            <a href="#">Os Termos e Condicões</a>
                        </span>
                    </label>
                </div>

                <div class="form-row">
                    <button type="submit">{{ __('Registrar') }}</button>
                </div>

            </div>

            <a href="#" class="form-log-in-with-existing">Você ja tem conta? Entra aqui &rarr;</a>

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