@extends('layouts.perfil')
@include('partials.perfilHead')
@section('perfil')
<a href="{{ action('LearnController@form') }}" class="btn btn-primary"> Aprender </a>
<div class="container mt-4">
    @foreach($tasks as $task)
    <table class="table">
        <tr>
        <td>{{$task->titulo}}</td>
        </tr>
    </table>
    @endforeach
</div>
@endsection
