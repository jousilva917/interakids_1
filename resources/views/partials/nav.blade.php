<!-- Navegação -->
<body id="page-top">
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
<div class="container">
        <a class="navbar-brand" href="{{ url('/home') }}">
            {{ config('app.name', 'InteraKids') }}
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
        </button>
        <!-- Navbar -->
        <div class="navbar-collapse collapse nav-item dropdown " id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
            <li class="{{Request::is('home') ? 'active': ''}} nav-item">
                <a id="btn-1" class="nav-link" href="{{ action('HomeController@index') }}"> inicial </a>
            </li>
            <li class="{{Request::is('aprenda') ? 'active': ''}} nav-item">
                <a id="btn-2" class="nav-link" href="{{ action('LearnController@aprenda') }}">Explore</a>
            </li>
            <li class="{{Request::is('contato') ? 'active': ''}} nav-item">
                <a id="btn-3" class="nav-link" href="{{ action('HomeController@contato') }}">Contato</a>
            </li>
            <li class="{{Request::is('sobre') ? 'active': ''}} nav-item">
                <a id="btn-4" class="nav-link" href="{{ action('HomeController@sobre') }}">Sobre</a>
            </li>
            <!-- Authentication Links -->
            @guest
            <li class="{{Request::is('login') ? 'active': ''}} nav-item">
                <a id="btn-5" class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
            </li>
            <li class="{{Request::is('register') ? 'active': ''}} nav-item">
                <a id="btn-6" class="nav-link" href="{{ route('register') }}">{{ __('Registrar') }}</a>
            </li>
            @else
            <li class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false" v-pre>
                    {{ Auth::user()->name }}
                    <span class="caret"></span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="{{route('perfil')}}">Perfil</a>
                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                        {{ __('Sair') }}</a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </div>
            </li>
            @endguest
        </ul>
        </div>
    </div>
</nav>
</body>