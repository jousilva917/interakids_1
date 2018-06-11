@extends('layouts.perfil')
@section('perfil')
<h1>Tarefas</h1>
<div class="container">
<table class="table">
    <tr>
        <th>Nome</th>
    </tr>
    <tr>
        @foreach($task as $t)
    <td>{{$t->name}}</td>
    </tr>
    @endforeach
</table>
</div>
@endsection