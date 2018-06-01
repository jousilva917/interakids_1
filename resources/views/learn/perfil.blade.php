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
        <td>Nome</td>
            <td>{{$isleone->}}</td>
            <td>{{$isletwo}}</td>
            <td>{{$islethree}}</td>
            <td><a class="btn btn-success">Aprender</a></td>
        </tr>
    </table>
</div>
@endsection