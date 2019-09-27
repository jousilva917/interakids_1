@extends('layouts.app')
@section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
    crossorigin="anonymous">
{!!Minify::stylesheet(['/css/app.css','/css/site/parallax.css','/css/site/navbar.css','/css/site/temp.css','/css/site/intro.css','/css/site/animate.css'])->withFullUrl()!!}
{!!Minify::javascript(['/js/app.js','/js/site/parallax.js','/js/site/navbar.js','/js/site/intro.js','/js/site/wow.js'])->withFullUrl()!!}
@stop
@section('conteudo')
<div class="container-fluid">
    <div class="row justify-content-center p-5 m-5">
        <div class="col-md-12">
            <p>InteraKids</p>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-4">
                    <p>Não há época melhor para ensina-los do que a infância, quando estão no começo de seu
                        desenvolvimento, e já que gastam tanto tempo na internet, por que não gastar com algo que ajude
                        no futuro?Está preparado para embarcar conosco?</p>
                </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Redefinir a senha') }}</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success">
                        {{ session('status') }}
                    </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Endereço de email')
                                }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                    name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                <span class="invalid-feedback">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Enviar link de redefinição de senha') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection