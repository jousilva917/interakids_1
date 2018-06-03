@extends('layouts.website') @section('content')
<div class="container">
    <div class="row">
        <div class="col-md-5">
            <div class="form-area">
                <form action="{{action('HomeController@submit')}}" method="post">
                    @csrf
                    <br style="clear:both">
                    <h3 style="margin-bottom: 25px; text-align: center;">Entre em contato</h3>
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" name="name" placeholder="Nome (opcional)">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Assunto" required>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" type="textarea" id="message" name="message" placeholder="Menssagem" maxlength="140" rows="7"></textarea>
                        <span class="help-block">
                            <p id="characterLeft" class="help-block ">You have reached the limit</p>
                        </span>
                    </div>
                    <input type="submit" id="submit" name="submit" class="btn btn-primary float-right" value="Enviar">
                </form>
            </div>
        </div>
        @if(session('success'))
        <div class="alert alert-success mt-4">
            {{session('success')}}
        </div>
        @endif
    </div>
</div>
</div>
@endsection