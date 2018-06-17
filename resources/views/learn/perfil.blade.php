@extends('layouts.perfil') 

@section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{!! Minify::stylesheet(['/css/site/app.css', '/css/learn/sb-admin.css', '/css/learn/font-awesome.min.css'])->withFullUrl() !!}
{!! Minify::javascript(['/js/site/app.js'])!!}
@include('learn.picture')
@endsection

@section('perfil')
<div class="container mt-4">
    <div class="card mb-3 col-sm-3">
        <img class="img-fluid rounded-circle" src="/storage/profile_image/{{Auth()->user()->profile_image}}" alt="noImage" id="image_preview" name="image_preview">
        <!-- Modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#profile_pic">
            Mudar foto
        </button>
        <div class="modal fade" id="profile_pic" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Escolher foto</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="submit_form" method="post"> 
                            @csrf
                            <input type="file" name="image_file" id="image_file" />  
                    </div>  
                     <div class="modal-footer"></div>
                     <input type="submit" name="upload_button" class="btn btn-info" value="Salvar" />  
                </div>
                </form>
            </div>
        </div>
        <!-- Informações do usuário -->
        <h2>{{Auth()->user()->name}}</h2>
        <h3>Estrelas: {{Auth()->user()->stars}}</h3>
        <a href="{{action('LearnController@isle')}}" class="btn btn-primary">Começar</a>
    </div>
    <!-- Caso a imagem esteja em um formato não suportado -->
    @if(session('error'))
    <div class="alert alert-danger mt-4">
        {{session('error')}}
    </div>
    @endif
</div>
</div>
<!-- Notificação -->
<div class="container mt-4">
    <div class="card border-dark mb-3 col-sm-3">
        <div class="card-header">
            Notificação
        </div>
        <div class="card-body">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
</div>
@endsection