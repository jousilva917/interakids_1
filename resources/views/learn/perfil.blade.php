@extends('layouts.perfil')
@section('perfil')
<div class="container mt-4">
    <table>
        <tr>
            @foreach($task as $t)
        <td>{{$t->name}}</td>
        <td><form action="{{action('LearnController@taskLearn')}}" method="get">
        <input type="submit" value="Aprender">    
        </form></td>
        </tr>
        @endforeach
    </table>
</div>
@endsection