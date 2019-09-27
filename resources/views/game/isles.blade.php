<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{config('app.name', 'InteraKids')}}</title>
    {!!Minify::stylesheet(['/css/app.css','/css/site/perfil.css'])->withfullUrl()!!}
    {!!Minify::javascript(['/js/app.js','/js/site/temp.js','/js/site/intro.js'])->withfullUrl()!!}
</head>

<body>
        <div id="loader2" class="loader2"></div>
    <div class="background-wrap">
        <div class="x1">
            <div class="cloud"></div>
        </div>

        <div class="x2">
            <div class="cloud"></div>
        </div>

        <div class="x3">
            <div class="cloud"></div>
        </div>

        <div class="x4">
            <div class="cloud"></div>
        </div>

        <div class="x5">
            <div class="cloud"></div>
        </div>
        <div class="x6">
            <div class='cloud-bottom'></div>
        </div>
    </div>
    <div class="container-fluid isles">
        <div class="container-fluid isles">
            <div class="row justify-content-center">
                <div class="col-sm-6 col-md-3 col-lg-3">
                    <a class="text-white" href="/perfil">
                        <i class="fa fa-home fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3">
                    <label class="dayNight">
                        <input type="checkbox">
                        <div></div>
                    </label>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-3 col-md-3 col-lg-3 floating">
                    <a class="" data-toggle="modal" data-target="#ilha1">
                        <img src="/images/ilhas/ilha1.png" class="img-fluid">
                    </a>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3 floating">
                    @if (Auth::user()->stars < 15) <img src="/images/ilhas/ilhablock3.png" class="img-fluid">
                        @else
                        <a class="" data-toggle="modal" data-target="#ilha2">
                            <img src="/images/ilhas/ilha2.png" class="img-fluid">
                        </a>
                        @endif
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3 floating">
                    @if (Auth::user()->stars < 30) <img src="/images/ilhas/ilhablock2.png" class="img-fluid">
                        @else
                        <a class="" data-toggle="modal" data-target="#ilha3">
                            <img src="/images/ilhas/ilha3.png" class="img-fluid">
                        </a>
                        @endif
                </div>
            </div>
        </div>
    </div>
    <div id="sky-j" class="sky display">
            <div class="stars"></div>
            <div class="stars1"></div>
            <div class="stars2"></div>
            <div class="shooting-stars"></div>
        </div>


    <!-- Modal das Ilhas-->
    <div class="modal fade bd-example-modal-lg" id="ilha1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h4 class="modal-title text-white" id="exampleModalLabel">A floresta</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="text-white" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table table-borderless">
                        <tbody>
                            @foreach ($isleOne as $t)
                            <tr>
                                <td>
                                    <form action="{{action('GameController@task')}}" method="get">
                                        <input type="hidden" name="id" value="{{$t->id}}">
                                        <input type="hidden" name="level" value="{{$t->level}}">
                                        @if(auth()->user()->tasksCompleted >= $t->requirement)
                                        <button class="btn btn-primary" type="submit">{{$t->name}}</button>
                                            @else
                                        <a class="btn btn-danger text-light">{{$t->name}} <i class="fa fa-lock" aria-hidden="true"></i></a>       
                                        @endif
                                    </form>
                                </td>
                                @endforeach
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade bd-example-modal-lg" id="ilha2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h4 class="modal-title text-white" id="exampleModalLabel">A cidade</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table table-borderless">
                        <tbody>
                            @foreach ($isleTwo as $t)
                            <tr>
                                <td>
                                    <form action="{{action('GameController@task')}}" method="get">
                                        <input type="hidden" name="id" value="{{$t->id}}">
                                        <input type="hidden" name="level" value="{{$t->level}}">
                                    @if (auth()->user()->tasksCompleted >= $t->requirement)   
                                        <button class="btn btn-primary" type="submit">
                                            {{$t->name}}</button>
                                    @else
                                    <a class="btn btn-danger text-light">{{$t->name}} <i class="fa fa-lock" aria-hidden="true"></i></a>
                                    @endif 
                                    </form>
                                </td>
                                @endforeach
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade bd-example-modal-lg" id="ilha3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h4 class="modal-title text-white" id="exampleModalLabel">O espaço</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table table-borderless">
                        <tbody>
                            @foreach ($isleThree as $t)
                            <tr>
                                <td>
                                    <form action="{{action('GameController@task')}}" method="get">
                                        <input type="hidden" name="id" value="{{$t->id}}">
                                        <input type="hidden" name="level" value="{{$t->level}}">
                                        @if(auth()->user()->tasksCompleted >= $t->requirement)
                                        <button class="btn btn-primary"
                                            type="submit">{{$t->name}}</button>
                                        @else
                                        <a class="btn btn-danger text-light">{{$t->name}} <i class="fa fa-lock" aria-hidden="true"></i></a>
                                        @endif
                                    </form>
                                </td>
                                @endforeach
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>