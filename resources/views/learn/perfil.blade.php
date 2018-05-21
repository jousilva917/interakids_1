@extends('layouts.perfil')
@include('partials.perfilHead')
@section('perfil')
<a href="{{ action('LearnController@form') }}" class="btn btn-primary"> Adicionar </a>
<div class="container mt-4">
    <table class="table">
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
