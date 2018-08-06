@extends('layouts.website') 
@section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
{!! Minify::stylesheet(['/css/site/app.css', '/css/site/temp.css'])->withFullUrl() !!} 
{!! Minify::javascript(['/js/site/app.js','/js/site/intro.js'])->withFullUrl()!!} 
@endsection 
@section('content')

<div class="top-content form-top">
    <div class="inner-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3 form-box">
                    <div class="">
                        <div class="form-top-left">
                            <h3>
                                <center>Entre em contato</center>
                            </h3>
                            <center>
                                <p>Deixe suas mensagens ou sugestões:</p>
                            </center>
                        </div>
                        <div class="form-top-right">
                            <i class="fa fa-envelope"></i>
                        </div>

                         <div class=" col-sm-6 col-md-6">
                <div class="mage-flip">
                    <p><img class=" img-fluid" src="../../images/correio2.png" alt="card image"></p>
                        
                        </div>
            </div>


                    </div>
                    <div class="form-bottom contact-form">
                        <form role="form" action="{{action('HomeController@submit')}}" method="post">
                            @csrf
                            <div class="form-group">
                                <label class="sr-only" for="contact-email">Email:</label>
                                <input type="text" name="email" placeholder="Email" class="contact-email form-control" id="contact-email">
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="contact-subject">Assunto:</label>
                                <input type="text" name="subject" placeholder="Assunto" class="contact-subject form-control" id="contact-subject">
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="contact-message">Mensagem:</label>
                                <textarea name="message" placeholder="Mensagem" class="contact-message form-control" id="contact-message"></textarea>
                            </div>
                            <button type="submit" class="btn">Enviar</button>

<<<<<<< HEAD
        

<!--<div class="container">
    <div class="row">
        <div class="col-md-5">
            <div class="form-area">
                <form id="contato_submit" method="post">
                    @csrf
                    <br style="clear:both">
                    <h3 style="margin-bottom: 25px; text-align: center;">Entre em contato</h3>
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" name="name" placeholder="Nome (opcional)">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
=======
                        </form>
>>>>>>> eb6f73d8db58a13e579cde7fcb0edc6d11c60bdb
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection