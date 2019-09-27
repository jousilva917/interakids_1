<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="menu-open-button text-white" href="/home" style="text-decoration:none;margin-left:170px;margin-top:20px;">
      <img src="/images/background/logo.png" width="30" height="30" class="img-fluid">
      <h6>InteraKids</h6>
    </a>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar navbar-nav">
        <li class="nav-item">
        </li>
        <li class="nav-item">
        </li>
        <li class="nav-item">
        </li>
      </ul>
    </div>
    <div style="width:150px; height:50px; margin-right: 80px;"><img id="profile_pic" class="w-100 img-fluid img-thumbnail rounded-circle" src="/storage/profile_image/{{Auth::user()->profile_image}}"></div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="menu">
        <input type="checkbox" class="menu-open" name="menu-open" id="menu-open" />
        <label class="menu-open-button" for="menu-open">
          <span class="hamburger hamburger-1"></span>
          <span class="hamburger hamburger-2"></span>
          <span class="hamburger hamburger-3"></span>
        </label>
        <a href="#" class="menu-item" data-toggle="modal" data-target="#modal_logout"><i class="fa fa-sign-out"></i></a>
        <a href="#" class="menu-item" data-toggle="modal" data-target="#modal_report"><i class="fa fa-bug"></i></a>
        <a href="#" class="menu-item" data-toggle="modal" data-target="#modal_historic"><i class="fa fa-star-o"></i> </a>
        <a href="#" class="menu-item" data-toggle="modal" data-target="#modal_notify"> <i class="fa fa-bell" id="NotificationI">{{count(Auth()->user()->unreadnotifications)}}</i></a>
        <a href="#" class="menu-item" data-toggle="modal" data-target=".bd-profileEdit-modal-lg"> <i class="fa fa-cog"></i> </a>
      </ul>
    </div>
  </div>
</nav>
<header>
  <div class="container">
    <div class="row" style="margin-top:90px;">
        <div class="col-sm-1 col-md-1 col-lg-1">
            <img class="w-100 img-fluid" src="/images/sun.png" alt="">
        </div>
        <div class="col-sm-11 col-md-12 col-lg-10">
            <img class="w-25 img-fluid" src="/images/playinterakids2.png" alt="">
        </div>
    </div>
      <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <a href="/ilhas">
              <img class="w-1" src="/images/bunitim.png" alt="">
            </a>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12">
            <img class="w-75" src="/images/ilhafim3.png" alt="">
          </div>
      </div>
  </div>
</header>