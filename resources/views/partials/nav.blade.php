<!-- Navegação -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
      <a class="navbar-brand" href="{{ url('/') }}">
          {{ config('app.name', 'InteraKids') }}
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav mr-auto">

          </ul>

          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
          <li class="{{Request::is('home') ? 'active': ''}}">
                  <a class="nav-link" href="{{ action('HomeController@index') }}">Home
                  </a>
                </li>
                <li class="{{Request::is('aprenda') ? 'active': ''}}">
                  <a class="nav-link" href="{{ action('LearnController@aprenda') }}">Aprenda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ url('explore') }}">Explore</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ url('about') }}">Sobre</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ url('contact') }}">Contato</a>
                </li>
              <!-- Authentication Links -->
              @guest
                  <li><a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a></li>
                  <li><a class="nav-link" href="{{ route('register') }}">{{ __('Registrar') }}</a></li>
              @else
                  <li class="nav-item dropdown">
                      <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                          {{ Auth::user()->name }} <span class="caret"></span>
                      </a>

                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="{{ route('logout') }}"
                             onclick="event.preventDefault();
                                           document.getElementById('logout-form').submit();">
                              {{ __('Logout') }}
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