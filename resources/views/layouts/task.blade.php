<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{config('appName', 'InteraKids')}}</title>
    {!!Minify::stylesheet(['/css/site/app.css','/common/common.css', '/maze/style.css'])->withfullUrl()!!} 
    {!!Minify::javascript(['/js/site/app.js'])->withfullUrl()!!}
</head>

<body>
    <table width="100%">
        <tr>
            <td>
                <h1>
                    <span id="title">
                        <a href="/home">Home</a> : {{$task->name}}
                </span>
              @if($task->level == 1)
            <span class="level_number" id="level{{$task->level}}">{{$task->level}}</span>
              @elseif($task->level < 10)
            <a class="level_dot" id="level{{$task->level}}" href="/isle/level/{{$task->id}}/skin/pegman"></a>
            @else 
            <a class="level_number" id="level{{$task->level}}" href="/isle/level/{{$task->id}}/skin/pegman">{{$task->level}}</a>
            @endif
            </h1>
            </td>
            <td class="farSide">
                <button id="pegmanButton">
                    <img src="{{asset('common/1x1.gif')}}">
                    <span id="pegmanButtonArrow"></span>
                </button>
            </td>
        </tr>
    </table>
    @yield('content')
</body>
</html>