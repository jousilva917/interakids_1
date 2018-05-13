@extends('layouts.perfil')
@section('perfil')
<h1>Blockly</h1>
@php
$username = Auth::user()->name; 
$lvl = 1;
$count = 12800;
@endphp
@if($count >= 12800 )   @php $lvl = 10; @endphp
@elseif($count >= 6400) @php $lvl = 9; @endphp
@elseif($count >= 3200) @php $lvl = 8; @endphp
@elseif($count >= 1600) @php $lvl = 7; @endphp
@elseif($count >= 800)  @php $lvl = 6; @endphp
@elseif($count >= 400)  @php $lvl = 5; @endphp
@elseif($count >= 200)  @php $lvl = 4; @endphp
@elseif($count >= 100)  @php $lvl = 3; @endphp
@elseif($count >= 50)   @php $lvl = 2; @endphp
@endif
@php 
$stars = "";
$i = 1;
@endphp
@while($i <= $lvl)
    @php $stars .= "&#9733;";
         $i++;
    @endphp
@endwhile 
{!! html_entity_decode("$stars <br>  $username  is level $lvl with $count experience points") !!}
@endsection