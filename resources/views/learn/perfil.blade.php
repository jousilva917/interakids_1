@extends('layouts.perfil')

@include('partials.perfilHead')

@section('perfil')
@php
$lvl = Auth::user()->lvl;
$username = Auth::user()->name;
$stars = "";
$i = 1;
@endphp
@while($i <= $lvl)
    @php $stars .= "&#9733;";
         $i++;
    @endphp
@endwhile 
{!! html_entity_decode("$stars <br>  <b>$username</b>  está no nível $lvl") !!}
<div class="container mt-4">
<a href="{{ action('LearnController@task') }}" class="btn btn-primary"> Aprender </a>
</div>
@endsection
