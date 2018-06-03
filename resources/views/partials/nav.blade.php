<!-- Navegação -->

<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">
<div class="container" >
    <a class="navbar-brand" href="{{ url('/home') }}">
        {{ config('app.name', 'InteraKids') }}
    </a>
    <div class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </div>
    <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item {{Request::is('home') ? 'active': ''}}">
                <a class="nav-link" href="{{ action('HomeController@index') }}"> Inicio </a>
            </li>
            <li class="nav-item {{Request::is('aprenda') ? 'active': ''}}">
                <a class="nav-link" href="{{ action('LearnController@aprenda') }}">Explore</a>
            </li>
            <li class="nav-item {{Request::is('contact') ? 'active': ''}}">
                <a class="nav-link" href="{{ action('HomeController@contact') }}">Contato</a>
            </li>
            <li class="nav-item {{Request::is('sobre') ? 'active': ''}}">
                <a class="nav-link" href="{{ action('HomeController@sobre') }}">Sobre</a>
            </li>
            <!-- Authentication Links -->
            @guest
            <li class="nav-item {{Request::is('login') ? 'active': ''}}">
                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
            </li>
            <li class="nav-item {{Request::is('register') ? 'active': ''}}">
                <a class="nav-link" href="{{ route('register') }}">{{ __('Registrar') }}</a>
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

