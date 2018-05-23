@extends('layouts.perfil')
@section('perfil')
<a href="{{ action('LearnController@form') }}" class="btn btn-primary"> Adicionar </a>
<div class="container mt-4">
    <table class="table table-striped table-dark">
        <tr>
            <th>Título</th>
            <th>Texto</th>
        </tr>
        @foreach($tasks as $t)
        <tr>
        <td>{{$t->titulo}}</td>
        <td>{{$t->texto}}</td>
        </tr>
        @endforeach
    </table>
</div>
@endsection
