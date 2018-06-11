@extends('layouts.perfil') @section('perfil')
<div class="container mt-4">
    <div class="card mb-3 col-sm-3">   
    <h2>{{Auth()->user()->name}}</h2>
<h3>Estrelas: {{Auth()->user()->stars}}</h3>
    
    <a href="{{action('LearnController@isle')}}" class="btn btn-primary">Começar</a>

</div>
</div>
@endsection