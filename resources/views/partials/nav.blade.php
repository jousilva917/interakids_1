
<nav class="navbar navbar-expand-lg navbar-dark fixed-top ">
    <div class="container">
        <a class="navbar-brand" href="{{ url('/home') }}">
            <img class="img-fluid " id="logo" src="/images/background/logo.png"/>
            
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class=" nav navbar navbar-nav ml-auto">
                <li class="nav-item {{Request::is('home') ? 'active': '' ? 'current' : ''}} ">
                    <a class="nav-link text-white" href="{{ action('HomeController@index') }}"> Início </a>
                </li>
                <li class="nav-item {{Request::is('explore') ? 'active': '' ? 'current' : ''}}">
                    <a class="nav-link text-white" href="{{ action('HomeController@explore') }}">Explore</a>
                </li>
                <li class="nav-item {{Request::is('contato') ? 'active': '' ? 'current' : ''}}">
                    <a class="nav-link text-white" href="{{ action('HomeController@contact') }}">Contato</a>
                </li>
                <li class="nav-item {{Request::is('sobre') ? 'active': '' ? 'current' : ''}}">
                    <a class="nav-link text-white" href="{{ action('HomeController@sobre') }}">Sobre</a>
                </li>
                <!-- Authentication Links -->
                @guest
                <li class="nav-item {{Request::is('login') ? 'active': '' ? 'current' : ''}}">
                    <a class="nav-link text-white" href="{{ route('login') }}">{{ __('Login') }}</a>
                </li>
                <li class="nav-item {{Request::is('register')? 'active': '' ? 'current' : ''}}">
                    <a class="nav-link text-white" href="{{ route('register') }}">{{ __('Registrar') }}</a>
                </li>
                
            </ul>
            @else
            <li class="nav-item {{Request::is('register')? 'active': '' ? 'current' : ''}}">
                    <a class="nav-link text-white" href="{{ route('perfil') }}">{{ __('Perfil') }}</a>
            </li>
            @endguest
        </div>
    </div>
</nav>

