
<!-- Navegação -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">InteraKids</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="{{ url('home') }}">Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{ url('learn') }}">Aprenda</a>
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
  <form class="form-inline">
    <button class="btn btn-outline-success" type="button" >Login/Cadastro</button>
  </form>

      </ul>
    </div>
  </div>
</nav>
