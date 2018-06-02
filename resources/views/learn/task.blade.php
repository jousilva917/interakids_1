@extends('layouts.perfil')
@section('perfil')
<h1>{{$task->name}}</h1>
@php
$nextID = $task->id + 1;
@endphp
<a class="btn btn-primary" href="/task/{{$nextID}}">Next</a>
@endsection