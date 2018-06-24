<!DOCTYPE html>
<html>

<head>
  @yield('head')
</head>

<body class="fixed-nav bg-dark">
  <div class="container-fluid page-body-wrapper">
    @include('partials.perfilNavSide') 
    @include('partials.perfilNav')
  @yield('perfil')
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
        <div class="tab-content">
            <div class="tab-pane fade in active" id="jogar" style="  background-color: #ffffff; width: 1025px; height: 825px;">Default 1</div>
            <div class="tab-pane fade" id="algo1" style="  background-color: aqua; width: 1025px; height: 825px;">Default 2</div>
            <div class="tab-pane fade" id="algo2" style="  background-color: darkcyan; width: 1025px; height: 825px;">Default 3</div>
            <div class="tab-pane fade" id="algo3"style="  background-color: clay; width: 1025px; height: 825px;" >Default 4</div>
        </div>
    </div>
</div>

</body>

</html>