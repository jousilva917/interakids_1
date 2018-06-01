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
            @for($i = 1; $i<=3;$i++)
            @if($i == 1)
            <td>Ilha 1</td>
            <td>Aprenda variáveis</td>
            <td><a class="btn btn-success">Aprender</a></td>
            @elseif($i == 2)
                <td>Ilha 2</td>
                <td>Aprenda funções</td>
                <td><a class="btn btn-success">Aprender</a></td>
            @else
                <td>Ilha 3</td>
                <td>Aprenda repetições</td>
                <td><a class="btn btn-success">Aprender</a></td>
            @endif
        </tr>
        @endfor
    </table>
</div>
@endsection