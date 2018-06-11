@extends('layouts.perfil')
@section('perfil')
<h1>Tarefas</h1>
<div class="container">
<table class="table">
    <tr>
        <th>Nome</th>
        <th>Ação</th>
    </tr>
    <tr>
        @foreach($task as $t)
    <td>{{$t->name}}</td>
    <td><a class="btn btn-primary" href="/task/{{$t->id}}">Entrar</a></td>
    </tr>
    @endforeach
</table>
</div>
@endsection