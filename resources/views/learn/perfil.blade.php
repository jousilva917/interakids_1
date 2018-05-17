@extends('layouts.perfil')

@include('partials.perfilHead')

@section('perfil')
@extends('layouts.perfil')
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
<ul>
    <li>
    <a href="{{action('LearnController@task')}}"> Lição 1 </a>
      </li>
    <li>
      <a  href=""> Lição 2 </a>
    </li>
  </ul>
@endsection
