@extends('layouts.website')
@section('content')
<div class="container-fluid mt-4" id="contact1">         
    <div class="col-md-5">
        <div class="form-area">  
        <form action="{{action('HomeController@submit')}}" method="post">
                @csrf
        <br style="clear:both">
            <h3 style="margin-bottom: 25px; text-align: center;">Entre em contato</h3>
        <div class="form-group">
            <input type="text" class="form-control" id="name" name="name" placeholder="Nome" required>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="email" name="email" placeholder="Email" required>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="subject" name="subject" placeholder="Assunto" required>
        </div>
        <div class="form-group">
            <textarea class="form-control" type="textarea" id="message" placeholder="Menssagem" maxlength="140" rows="7"></textarea>
            <span class="help-block"><p id="characterLeft" class="help-block ">Você alcançou o limite</p></span>                    
        </div>   
        <button type="button" id="submit" name="submit" class="btn btn-primary pull-right">Enviar</button>
            </form> 
        </div>
    </div>
</div>     
@endsection