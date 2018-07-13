<div class="side-nav fixed">
  <div class="logo text-center">
    <span>{{config('app.name' , 'InteraKids')}}</span>
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
          <p class="display-5">Estrelas: {{Auth()->user()->stars}}</p>
          <a class="btn btn-success nav-link text-white" href="#">Conquistas</a>
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