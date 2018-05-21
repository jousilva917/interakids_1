    <!-- Navegação -->
    <script src="{{asset('/js/navbar.js')}}" defer></script>
    <link href="{{ asset('css/navbar.css') }}" rel="stylesheet">
    <nav class="" id="navbar">
            <div class="nav-wrapper">
                <a class="navbar-brand" href="{{ url('/home') }}">
                    {{ config('app.name', 'InteraKids') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <!-- Navbar -->
                    
                    <ul id="menu">
                        <li class="{{Request::is('home') ? 'active': ''}}">
                        <img id="imagem"src="https://image.flaticon.com/icons/svg/263/263115.svg" alt="home" >
                            <a class="nav-link" href="{{ action('HomeController@index') }}">Home
                            </a>
                            
                        </li>
                        <li class="{{Request::is('aprenda') ? 'active': ''}}">
                        <img  id="imagem" src="https://image.flaticon.com/icons/svg/263/263062.svg" alt="aprenda" >
                            <a class="nav-link" href="{{ action('LearnController@aprenda') }}">Aprenda</a>
                        </li>
                        
                        <li class="{{Request::is('sobre') ? 'active': ''}}">
                        <img  id="imagem" src="https://image.flaticon.com/icons/svg/263/263058.svg" alt="sobre" >
                            <a class="nav-link" href="{{ action('HomeController@sobre') }}">Sobre</a>
                        </li>
                        <li   class="{{Request::is('contato') ? 'active': ''}}">
                        <img id="imagem" src="https://image.flaticon.com/icons/svg/263/263094.svg" alt="contato" >
                            <a class="nav-link" href="{{ action('HomeController@contato') }}">Contato</a>
                        </li>
                        
                        <!-- Authentication Links -->
                        @guest
                        <li>
                        <img id="imagem" src="https://image.flaticon.com/icons/svg/184/184307.svg" alt="login" >
                            <a class="nav-link " href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                        <li>
                        <img id="imagem" src="https://image.flaticon.com/icons/svg/184/184304.svg" alt="registrar" >
                            <a class="nav-link" href="{{ route('register') }}">{{ __('Registrar') }}</a>
                        </li>
                        @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>
    
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{route('perfil')}}">Perfil</a>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                                    {{ __('Sair') }}
                                </a>
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
    
