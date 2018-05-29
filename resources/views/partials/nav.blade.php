<!-- Navegação -->

<nav class="navbar navbar-expand-lg bg-dark fixed-top " id="mainNav">
<div class="container" >
    <a class="navbar-brand" href="{{ url('/home') }}">
        {{ config('app.name', 'InteraKids') }}
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse justify-content-between " id="navbarSite">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item {{Request::is('home') ? 'active': ''}}">
                <a id="btn" class="nav-link" href="{{ action('HomeController@index') }}"> Inicio </a>
            </li>
            <li class="nav-item {{Request::is('aprenda') ? 'active': ''}}">
                <a id="btn" class="nav-link" href="{{ action('LearnController@aprenda') }}">Explore</a>
            </li>
            <li class="nav-item {{Request::is('contact') ? 'active': ''}}">
                <a id="btn" class="nav-link" href="{{ action('HomeController@contact') }}">Contato</a>
            </li>
            <li class="nav-item {{Request::is('sobre') ? 'active': ''}}">
                <a id="btn" class="nav-link" href="{{ action('HomeController@sobre') }}">Sobre</a>
            </li>
            <!-- Authentication Links -->
            @guest
            <li class="nav-item {{Request::is('login') ? 'active': ''}}">
                <a id="btn" class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
            </li>
            <li class="nav-item {{Request::is('register') ? 'active': ''}}">
                <a id="btn" class="nav-link" href="{{ route('register') }}">{{ __('Registrar') }}</a>
            </li>
        </ul>
        @else
        <li class= "dropdown">
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
    </div>
    </div>
</nav>

