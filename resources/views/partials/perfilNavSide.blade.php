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
    </div>
    <!-- /.tab-pane1 -->
    <!--TabPane1-->
    <div class=" tab-pane fade" id="algo1" style="  background-color: darkcyan;">Default 2</div>
    <div class=" tab-pane fade" id="algo2" style="  background-color: darkcyan;">Default 3</div>
    <div class=" tab-pane fade" id="algo3" style="  background-color: clay;">Default 4</div>
  </div>
</div>
<div class="side-nav fixed">
  <div class="logo text-center">
    <a>{{config('app.name' , 'InteraKids')}}</a>
  </div>
  <nav class="sidebar side-nav fixed">
    <ul class="nav flex-column">
      <li class="nav-item nav-profile">
        <div class="nav-link text-white">
          <div class="user-wrapper">
            <div class="profile-image">
              <img class="image-preview" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="profile image">
            </div>
          </div>
          <div class="text-wrapper">
            <p class="display-5 text-center">{{Auth()->user()->name}}</p>
            <p class="display-5">Profissional em TI</p>
          </div>
          <p class="display-5">Estrelas:{{Auth()->user()->stars}}</p>
          <a class="btn btn-success nav-link text-white" href="#" data-toggle="modal" data-target="#Modal-configaudio">Conquistas</a>
        </div>
      </li>
    </ul>
    <ul class="nav nav-tabs">
      <li class="nav-item  p-3 mb-3 ">
        <a class=" nav-link shadow" data-toggle="tab" href="#jogar">
          Jogar
        </a>
      </li>

      <li class="nav-item  p-3 mb-3">
        <a class=" nav-link shadow" data-toggle="tab" href="#algo1">
          Progresso
        </a>
      </li>
      <li class="nav-item  p-3 mb-3">
        <a class=" nav-link shadow " data-toggle="tab" href="#algo2">
          Personagens
        </a>
      </li>
      <li class="nav-item  p-3 mb-3">
        <a class=" nav-link shadow" data-toggle="tab" href="#algo3">estatísticas</a>
      </li>
    </ul>
  </nav>
</div>