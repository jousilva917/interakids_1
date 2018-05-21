@extends('layouts.perfil')
@include('partials.perfilHead')
@section('perfil')
<a href="{{ action('LearnController@form') }}" class="btn btn-primary"> Aprender </a>
<div class="container">
    @foreach($tasks as $t)
    <table>
        <tr>
        <td>{{$t->titulo}}</td>
        </tr>
    </table>
    @endforeach
</div>
@endsection
