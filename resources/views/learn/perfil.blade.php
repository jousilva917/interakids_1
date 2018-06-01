@extends('layouts.perfil')
@section('perfil')
<div class="container mt-4">
    <h1 class="text-center">Tarefas</h1>
    <table class="table table-striped table-dark">
        <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ação</th>
        </tr>
        <tr>
            @foreach($task as $t)
            <td>{{$t->name}}</td>
            <td>{{$t->description}}</td>
            <td><a class="btn btn-success">Aprender</a></td>
        </tr>
        @endforeach
    </table>
</div>
@endsection