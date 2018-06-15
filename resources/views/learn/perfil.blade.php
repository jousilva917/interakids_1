@extends('layouts.perfil') @section('perfil')
<div class="container mt-4">
    <div class="card mb-3 col-sm-3">
        <img class="img-fluid rounded-circle" src="/storage/profile_image/{{Auth()->user()->profile_image}}" alt="noImage" id="pic">
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
                    <form action="{{action('HomeController@picture',[auth()->user()->id])}}" method="post" enctype="multipart/form-data">
                            @csrf
                            <input type="file" name="picture" id="picture">
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3 col-md-3 item">
                                <a class="lightbox" href="#">
                                    <img class="img-fluid image scale-on-hover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2e_HLzSvESoaytGygSCyr90lU6FS0jE1JHrWD5CoeTsNI1iZD">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer"></div>
                    <input type="submit" class="btn btn-primary" value="Salvar">
                </div>
                </form>
            </div>

        </div>
        <h2>{{Auth()->user()->name}}</h2>
        <h3>Estrelas: {{Auth()->user()->stars}}</h3>
        <a href="{{action('LearnController@isle')}}" class="btn btn-primary">Começar</a>
    </div>
</div>
</div>
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