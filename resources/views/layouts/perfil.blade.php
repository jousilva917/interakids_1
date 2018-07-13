<!DOCTYPE html>
<html>

<head>
  @yield('head')
</head>

<body>
  @include('partials.perfilNavSide') @include('partials.perfilNav') @yield('perfil')
  <!--Modal-->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout</a>
          <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--/.Modal-->
  <div class="panel-body">
    <div class="main-content">
      <!--TabPane1-->
      <div class=" tab-pane fade show active" id="jogar">
        <div class="text-center">
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
              <a class="btn btn-lg btn-primary" data-toggle="modal" data-target="#largeModal">
                <i class="fa fa-bolt">Jogar</i>
              </a>
            </div>
          </div>
        </div>
        <!-- large modal -->
        <div class="modal fade" id="largeModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Large Modal</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              
              <div class="modal-body">
                <!-- Card group -->
                <div class="card-group">
                  <!-- Card -->
                  <div class="card mb-4">
                    <!-- Card image -->
                    <div class="view overlay">
                      <img class="card-img-top " src="../../images/ilha1.png" alt="Card image cap">
                      <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <!-- Card content -->
                    <div class="card-body">
                      <!-- Title -->

                      <!-- Text -->
                     
                      <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                    
                    </div>
                    <!-- Card content -->
                  </div>
                  <!-- Card -->
                  <!-- Card -->
                  <div class="card mb-4">
                    <!-- Card image -->
                    <div class="view overlay">
                      <img class="card-img-top" src="../../images/ilha1.png" alt="Card image cap">
                      <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <!-- Card content -->
                    <div class="card-body">
                      <!-- Title -->
                      <!-- Text -->
                     
                      <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                    
                    </div>
                    <!-- Card content -->
                  </div>
                  <!-- Card -->
                  <!-- Card -->
                  <div class="card mb-4">
                    <!-- Card image -->
                    <div class="view overlay">
                      <img class="card-img-top" src="../../images/ilha1.png" alt="Card image cap">
                      <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <!-- Card content -->
                    <div class="card-body">
                      <!-- Title -->
                      <!-- Text -->
                     
                      <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                    
                    </div>
                    <!-- Card content -->
                  </div>
                  <!-- Card -->
                </div>
                <!-- Card group -->
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <!--/.large modal-->
      </div>
      <!-- /.tab-pane1 -->
      <!--TabPane1-->
      <div class=" tab-pane fade" id="algo1">
      <div class="container-fluid">
    <div class="row">
    <div class="col-md-3 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">90%</div>
            </div>
        </div>
    </div>
</div>


      </div>
      <!--/.TabPane1-->
      <div class=" tab-pane fade" id="algo2" style="  background-color: darkcyan;">Default 3</div>
      <div class=" tab-pane fade" id="algo3" style="  background-color: clay;">Default 4</div>
    </div>
  </div>

</body>

</html>