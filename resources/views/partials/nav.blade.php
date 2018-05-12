    <!-- Navegação -->
   @include('partials.head')
    <nav>
    <div class="wrapper">
           <nav>
           <div class="menu-icon">
            <i class="fa fa-bars fa-2x"</i>
           </div>
           <div class="logo">  {{ config('app.name', 'InteraKids') }}</div>
               <div class="menu">
               <ul>
                    <li "{{Request::is('home') ? 'active': ''}}">
                        <a href="{{ action('HomeController@index') }}">Home
                        </a>
                    </li>
                    <li "{{Request::is('aprenda') ? 'active': ''}}">
                        <a href="{{ action('LearnController@aprenda') }}">Aprenda</a>
                    </li>
                    <li>
                        <a href="{{ url('explore') }}">Explore</a>
                    </li>
                    <li "{{Request::is('sobre') ? 'active': ''}}">
                        <a href="{{ action('HomeController@sobre') }}">Sobre</a>
                    </li>
                    <li>
                        <a href="{{ url('contact') }}">Contato</a>
                    </li>  
                    <!-- Authentication Links -->
                    @guest
                    <li><a  href="{{ route('login') }}">{{ __('Login') }}</a></li>
                    <li><a  href="{{ route('register') }}">{{ __('Registrar') }}</a></li>
                    @else
                    <li>
                        <a id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }} <span "caret"></span>
                        </a>

                        <div >
                        <a href="{{route('perfil')}}">Perfil</a>
                            <a  href="{{ route('logout') }}"
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
        </div>
    
