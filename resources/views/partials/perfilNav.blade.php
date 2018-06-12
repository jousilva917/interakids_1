<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
  <a class="navbar-brand" href="{{url ('home')}}">{{config('app.name' , 'InteraKids')}}</a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#dashboard" aria-controls="dashboard"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="dashboard">
    <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
        <a class="nav-link" href="{{url('perfil')}}">
          <i class="fas fa-user"></i>
          <span class="nav-link-text">Perfil</span>
        </a>
      </li>

      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
        <a class="nav-link" href="charts.html">
          <i class="fas fa-gamepad"></i>
          <span class="nav-link-text">Jogar</span>
        </a>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
        <a class="nav-link" href="charts.html">
          <i class="fas fa-gamepad"></i>
          <span class="nav-link-text">algo</span>
        </a>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
        <a class="nav-link" href="charts.html">
          <i class="fas fa-gamepad"></i>
          <span class="nav-link-text">algo</span>
        </a>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
        <a class="nav-link" href="charts.html">
          <i class="fas fa-gamepad"></i>
          <span class="nav-link-text">algo</span>
        </a>
      </li>

    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
          <i class="fa fa-fw fa-sign-out"></i>Logout</a>
      </li>
    </ul>
  </div>
</nav>