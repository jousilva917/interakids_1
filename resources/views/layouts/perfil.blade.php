<html>
    <head>
        @include('partials.perfilHead')
    </head>
    <body  class="fixed-nav bg-dark" id="page-top">
                <!-- Navigation-->
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                        <a class="navbar-brand" href="{{url ('home')}}">{{config('app.name' , 'InteraKids')}}</a>
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                          <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
                            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                              <a class="nav-link" href="index.html">
                                <i class="fa fa-fw fa-dashboard"></i>
                                <span class="nav-link-text">Dashboard</span>
                              </a>
                            </li>
                            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                              <a class="nav-link" href="charts.html">
                                <i class="fa fa-fw fa-area-chart"></i>
                                <span class="nav-link-text">Charts</span>
                              </a>
                            </li>
                            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                              <a class="nav-link" href="tables.html">
                                <i class="fa fa-fw fa-table"></i>
                                <span class="nav-link-text">Tables</span>
                              </a>
                            </li>
                            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
                              <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
                                <i class="fa fa-fw fa-wrench"></i>
                                <span class="nav-link-text">Components</span>
                              </a>
                              <ul class="sidenav-second-level collapse" id="collapseComponents">
                                <li>
                                  <a href="navbar.html">Navbar</a>
                                </li>
                                <li>
                                  <a href="cards.html">Cards</a>
                                </li>
                              </ul>
                            </li>
                            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
                              <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion">
                                <i class="fa fa-fw fa-file"></i>
                                <span class="nav-link-text">Example Pages</span>
                              </a>
                              <ul class="sidenav-second-level collapse" id="collapseExamplePages">
                                <li>
                                  <a href="login.html">Login Page</a>
                                </li>
                                <li>
                                  <a href="register.html">Registration Page</a>
                                </li>
                                <li>
                                  <a href="forgot-password.html">Forgot Password Page</a>
                                </li>
                                <li>
                                  <a href="blank.html">Blank Page</a>
                                </li>
                              </ul>
                            </li>
                            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
                              <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
                                <i class="fa fa-fw fa-sitemap"></i>
                                <span class="nav-link-text">Menu Levels</span>
                              </a>
                              <ul class="sidenav-second-level collapse" id="collapseMulti">
                                <li>
                                  <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                  <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                  <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                  <a class="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2">Third Level</a>
                                  <ul class="sidenav-third-level collapse" id="collapseMulti2">
                                    <li>
                                      <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                      <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                      <a href="#">Third Level Item</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
                              <a class="nav-link" href="#">
                                <i class="fa fa-fw fa-link"></i>
                                <span class="nav-link-text">Link</span>
                              </a>
                            </li>
                          </ul>
                          <ul class="navbar-nav sidenav-toggler">
                            <li class="nav-item">
                              <a class="nav-link text-center" id="sidenavToggler">
                                <i class="fa fa-fw fa-angle-left"></i>
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
                      <div class="content-wrapper">
                        <div class="container-fluid">
                        
                            @yield('perfil')
                            
                              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                      <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                                    <div class="modal-footer">
                                      <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                      <a class="btn btn-primary" href="{{ route('logout') }}"  onclick="event.preventDefault();
                                      document.getElementById('logout-form').submit();">Logout</a>
                                      <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                          @csrf
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
        @include('partials.perfilScripts')
    </body>
</html>