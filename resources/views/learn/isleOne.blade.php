@extends('layouts.perfil')
@section('perfil')
<h1 class="text-center">Tarefas</h1>
   <table class="table table-striped table-dark">
        <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ação</th>
        </tr>
        @foreach($task as $t)
        <tr>
            <td>{{$t->name}}</td>
            <td>{{$t->description}}</td>
            <td><a class="btn btn-success" href="/task/{{$t->id}}">Aprenda</a></td>
        </tr>
        @endforeach
    </table>
    {{$task->links()}}
@endsection