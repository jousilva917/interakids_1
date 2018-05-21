@extends('layouts.perfil')
@include('partials.perfilHead')
@section('perfil')
<a href="{{ action('LearnController@form') }}" class="btn btn-primary"> Adicionar </a>
<div class="container mt-4">
    @foreach($tasks as $t)
    <table class="table">
        <tr>
        <td>{{$t->titulo}}</td>
        </tr>
    </table>
    @endforeach
</div>
@endsection
