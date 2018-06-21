@extends('layouts.perfil')
@section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
{!! Minify::stylesheet(['/css/site/app.css', '/css/learn/sb-admin.css', '/css/learn/font-awesome.min.css'])->withFullUrl()!!} 
{!! Minify::javascript(['/js/site/app.js'])->withFullUrl()!!} 
@endsection

@section('perfil')
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
@endsection