@extends('layouts.perfil')
@section('perfil')
<form action="{{action('LearnController@task')}}" method="post">
    @csrf
    <p>Titulo</p>
    <input type="text" name="titulo">
    <p>Texto</p>
    <textarea name="texto" id="" cols="30" rows="10"></textarea>
<input type="hidden" name="user_id" value="{{auth()->user()->id}}">
    <input type="submit" value="Enviar">
</form>
@stop