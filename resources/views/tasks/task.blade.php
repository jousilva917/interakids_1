@extends('layouts.task') 
@section('content') 
@if(count($check) > 0 )
<a href="/isle">Próximo</a>
@else
<form action="{{action('LearnController@taskComplete')}}" method="post">
    @csrf
    <input type="hidden" name="id" value="{{$task->id}}">
    <input type="submit" value="Próximo">
</form>
@endif
<div id="blockly" style="height:480px; width:600px;"></div>
<xml id="toolbox" style="display:none;">
<block type=""></block>

</xml>
@endsection