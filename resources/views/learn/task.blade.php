@extends('layouts.perfil')
@section('perfil')
<h1>Blockly</h1>
@php
$username = Auth::user()->name; 
$lvl = Auth::user()->lvl;
@endphp
@php 
$stars = "";
$i = 1;
@endphp
@while($i <= $lvl)
    @php $stars .= "&#9733;";
         $i++;
    @endphp
@endwhile 
{!! html_entity_decode("$stars <br>  <b>$username</b>  está no nível $lvl") !!}
@endsection