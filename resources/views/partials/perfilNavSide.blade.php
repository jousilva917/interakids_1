<!-- Sidebar-->

    <nav class="sidebar sidebar-offcanvas">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="user-wrapper">
              <div class="profile-image">
                <img id="image_preview" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="profile image">
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
    </ul>
    <ul class="nav nav-pills">
        <li class="nav-item ">
          <a class="nav-link active" data-toggle="tab" href="#jogar">
            <span class="menu-title">Jogar</span>
          </a>
        </li>
  
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#algo1">
            <span class="menu-title">algo1</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#algo2">
            <span class="menu-title">algo2</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#algo3">
            <span class="menu-title">algo3</span>
          </a>
        </li>
      </ul>
    </nav>