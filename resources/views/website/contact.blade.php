@extends('layouts.website2')
@section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{!! Minify::stylesheet(['/css/app.css'])->withFullUrl()!!}
{!! Minify::javascript(['/js/app.js','/js/site/wow.js'])->withFullUrl() !!}
@endsection
@section('content')
<body  id="hidden">
<div class="top-content form-top bg-ctp">
    <div class="inner-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-5 col-sm-offset-3 form-box">
                    <div class="">
                        <div class="form-top-left">
                            <div class="form-top-right">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <h3 class="align-center">
                                Entre em contato
                            </h3>
                                <p>Deixe suas mensagens ou sugestões:</p>
                        </div>
                    </div>
                    <div class="form-bottom contact-form">
                        <form role="form" action="{{action('ContactController@contact')}}" method="post">
                            @csrf
                            <div class="form-group">
                                <label class="sr-only" for="contact-email">Email:</label>
                                <input type="email" name="email" placeholder="Email*" class="contact-email form-control"
                                    id="contact-email">
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="contact-subject">Assunto:</label>
                                <input type="text" name="subject" placeholder="Assunto*" class="contact-subject form-control"
                                    id="contact-subject">
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="contact-message">Mensagem:</label>
                                <textarea name="message" placeholder="Mensagem*" class="contact-message form-control" id="contact-message"></textarea>
                            </div>
                            <button type="submit" class="btn">Enviar</button>
                        </form>
                    </div>
                </div>
                <div class="col-sm-4 col-md-5 pt-5 ml-4 wow slideInDown " data-wow-duration="2s" data-wow-delay="0.1s">
                    <img class="img-fluid" src="/images/background/contact.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
@foreach($errors->all() as $error)
<div class="alert alert-danger alert-dismissible fade show flash" role="alert">{{$error}}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
@endforeach
@if (session('success'))
    <div class="alert alert-success alert-dismissible fade show flash">
        {{session('success')}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
    </div>
@endif
@endsection
</body>