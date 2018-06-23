<!-- Sidebar-->
<div class="container-fluid page-body-wrapper">
    <nav class="sidebar sidebar-offcanvas">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="user-wrapper">
              <div class="profile-image">
                <img id="image_preview" src="/storage/profile_image/{{Auth()->user()->profile_image}}" alt="profile image">
              </div>
            </div>
            <div class="text-wrapper">
              <p class="display-5 text-center">{{Auth()->user()->name}}</p>
              <p class="display-5">Profissional em TI</p>
            </div>
            <p class="display-5">Estrelas: {{Auth()->user()->stars}}</p>
            <a class="btn btn-success nav-link" href="#">Conquistas</a>
          </div>
        </li>
  
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="menu-icon mdi mdi-television"></i>
            <span class="menu-title">Jogar</span>
          </a>
        </li>
  
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="menu-icon mdi mdi-content-copy"></i>
            <span class="menu-title">algo</span>
            <i class="menu-title"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="menu-icon mdi mdi-backup-restore"></i>
            <span class="menu-title">algo</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="menu-icon mdi mdi-chart-line"></i>
            <span class="menu-title">algo</span>
          </a>
        </li>
        </li>
      </ul>
      
    </nav>
     <!--Navbar-top-->
    <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        <a class="navbar-brand" href="{{url ('home')}}">{{config('app.name' , 'InteraKids')}}</a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center">
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item dropdown d-none d-xl-inline-block ">
            <a class="nav-link " id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
              <span class="profile-text">Bom Dia, {{Auth()->user()->name}}!</span>
              <img class="img-xs  img-fluid rounded-circle" src="/storage/profile_image/{{Auth()->user()->profile_image}}" alt="Profile image"><i class="fa fa-angle-down fa-2x"></i></img>
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
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#profile_pic">
          Mudar foto
      </button>
      <div class="modal fade" id="profile_pic" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Escolher foto</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <h3>Image preview</h3>
                      <img src="" alt="" id="test" name="test" height="100px" width="100px">
                      <form id="submit_form" method="post">
                          @csrf
                          <input type="file" name="image_file" id="image_file" />
                          <input type="submit" name="upload_button" class="btn btn-primary" value="Upload" />
                      </form>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>