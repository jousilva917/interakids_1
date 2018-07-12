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
            <img class="img-xs  img-fluid rounded-circle" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="Profile image"><i class="fa fa-angle-down fa-2x"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right navbar-dropdown"  aria-labelledby="UserDropdown">
            <a class="dropdown-item p-0 " >
              <div class="d-flex border-bottom">
                <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                  <i class="mdi mdi-account-outline mr-0 text-gray"></i>
                </div>
                <div class="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                  <i class="mdi mdi-account-outline mr-0 text-gray"></i>
                </div>
                <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                  <i class="mdi mdi-alarm-check mr-0 text-gray"></i>
                </div>
              </div>
            </a>
            <a class="dropdown-item mt-2">
              ola
            </a>
            <a class="dropdown-item">
              ola
            </a>
            <a class="dropdown-item">
              ola
            </a>
            <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-fw fa-sign-out"></i>Logout
            </a>
          </div>
        </li>
      </ul>
      <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span class="icon-menu"></span>
      </button>
    </div>
  </nav>







    <div class="panel-body">
      <div class="main-content">
        <div class=" tab-pane fade show active" id="jogar">
          <div class="text-center" >
            <div class="row">
              <div class="col-sm-12">
                <h1>INTERAKIDS</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <h3>ALGUMAS COISAS</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
              <a class="btn-floating btn-lg purple-gradient"  href="#"><i class="fa fa-bolt">Jogar</i></a>          
              </div>
            </div>
          </div>




        </div>

        <div class=" tab-pane fade" id="algo1" style="  background-color: aqua;">Default 2</div>
        <div class=" tab-pane fade" id="algo2" style="  background-color: darkcyan;">Default 3</div>
        <div class=" tab-pane fade" id="algo3" style="  background-color: clay;">Default 4</div>
      </div>
    </div>
