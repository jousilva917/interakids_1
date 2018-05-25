<!-- Navegação -->
<div class="container">
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">

        <a class="navbar-brand" href="{{ url('/home') }}">
            {{ config('app.name', 'InteraKids') }}
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Navbar -->
        <div id="navbarNavDropdown" class="navbar-collapse collapse" style="justify-content: flex-end;">
        <ul class="navbar-nav">
            <li class="{{Request::is('home') ? 'active': ''}} nav-item">
                <a class="nav-link" href="{{ action('HomeController@index') }}">Home</a>
            </li>
            <li class="{{Request::is('aprenda') ? 'active': ''}} nav-item">
                <a class="nav-link" href="{{ action('LearnController@aprenda') }}">Aprenda</a>
            </li>
            <li class="{{Request::is('contato') ? 'active': ''}} nav-item">
                <a class="nav-link" href="{{ action('HomeController@contato') }}">Contato</a>
            </li>
            <li class="{{Request::is('sobre') ? 'active': ''}} nav-item">
                <a class="nav-link" href="{{ action('HomeController@sobre') }}">Sobre</a>
            </li>
            <!-- Authentication Links -->
            @guest
            <li class="{{Request::is('login') ? 'active': ''}} nav-item">
                <a class="nav-link " href="{{ route('login') }}">{{ __('Login') }}</a>
            </li>
            <li class="{{Request::is('register') ? 'active': ''}} nav-item">
                <a class="nav-link" href="{{ route('register') }}">{{ __('Registrar') }}</a>
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
</div>