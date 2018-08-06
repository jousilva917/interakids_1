<div class="header">
  <nav class="navbar default-layout col-md-12 col-sm-12 p-0 fixed justify-content-end">
    <div class="navbar-menu-wrapper d-flex align-items-center">
      <ul class="navbar-nav navbar-nav-right">
        <li class="nav-item dropdown">
          <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
            <i class="fa fa-bell fa-2x"></i>
            <span class="count">{{count(Auth()->user()->unreadnotifications)}}</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
            <a class="dropdown-item">
              <p class="mb-0 font-weight-normal float-left">Você tem {{count(Auth()->user()->notifications)}} novas notificações</p>
              <span class="badge badge-pill badge-warning float-right">Ver Todos</span>
            </a>
            @foreach(Auth()->user()->unreadnotifications as $notification)
            <div class="dropdown-divider"></div>
            <a class="dropdown-item preview-item" href="#" onclick="markNotificationAsRead()">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-success">
                  <i class="mdi mdi-alert-circle-outline mx-0"></i>
                </div>
              </div>
              <div class="preview-item-content">
                <h6 class="preview-subject font-weight-medium text-dark">{{($notification->data['name'])}}</h6>
                <p class="font-weight-light small-text">
                  Entre Agora
                </p>
              </div>
            </a>
            @endforeach
          </div>
        </li>
        <li class="nav-item dropdown mx-auto ">
          <a class="nav-link " id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <span class="profile-text">Bom Dia, {{Auth()->user()->name}}!</span>
            <img class="img-xs  img-fluid rounded-circle" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
              alt="Profile image">
            <i class="fa fa-angle-down fa-2x"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
            <a class="dropdown-item mt-2" data-toggle="modal" data-target="#Modal-configel">
              Configuração gerais
            </a>
            <a class="dropdown-item" data-toggle="modal" data-target="#Modal-configaudio">
              Configuração de audio
            </a>
            <a class="dropdown-item" data-toggle="modal" data-target="#Modal-contact">
              Sobre/Contato
            </a>
            <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal">
              <i class="fa fa-fw fa-sign-out"></i>Sair
            </a>
          </div>
        </li>
      </ul>
      <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span class="icon-menu"></span>
      </button>
    </div>
  </nav>