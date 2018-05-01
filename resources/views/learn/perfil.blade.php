@extends('layouts.perfil')

@include('partials.perfilHead')

@section('perfil')
<ul>
    <li>
    <a href="{{action('LearnController@task')}}"> Lição 1 </a>
      </li>
    <li>
      <a  href=""> Lição 2 </a>
    </li>
  </ul>
@endsection
