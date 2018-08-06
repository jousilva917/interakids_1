<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{config('app.name', 'InteraKids')}}</title>
    {!!Minify::stylesheet(['/css/site/app.css'])->withfullUrl()!!} 
    {!!Minify::javascript(['/js/site/app.js'])->withfullUrl()!!}
</head>

<body>
    @if(session('error'))
    <div class="alert alert-danger mt-4">
        {{session('error')}}
    </div>
    @endif @foreach($task as $t)
    <form action="{{action('LearnController@task')}}" method="get">
        <input type="hidden" name="id" value="{{$t->id}}">
        <button class="{{auth()->user()->stars >= $t->stars_required ? 'btn btn-primary':'btn btn-danger'}}" type="submit">{{$t->name}}</button>
    </form>
    @endforeach
</body>
</html>