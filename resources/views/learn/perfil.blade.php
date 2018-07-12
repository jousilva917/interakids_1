@extends('layouts.perfil') @section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
{!! Minify::stylesheet(['/css/learn/sb-admin.css', '/css/learn/font-awesome.min.css', '/css/site/navbar.css'])->withFullUrl()!!} 
{!! Minify::javascript(['/js/site/app.js'])->withFullUrl()!!} 
@include('partials.picture') 
@endsection 
@section('perfil')


@endsection