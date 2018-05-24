@extends('layouts.perfil')
@section('perfil')

<ul>
{{$tasks->nome}}
{{$tasks->texto}}
</ul>
@endsection