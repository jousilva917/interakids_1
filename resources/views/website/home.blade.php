@extends('layouts.website') @section('content')

<div id="loader" class="loader"></div>
<div style="display:none;" id="tudo_page">

  <!-- Header -->
  <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <!--Modal-->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
         Lets-play
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <!--/modal-->
      </div>
    </div>
  </header>
  <!--Video/Text-->
  <div class="container text-center" id="video-text">
    <div class="row" id="row-video">
      <div class="col-sm-6">
        <iframe width="460" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>
    </div>
    <div class="row" id="row-text">
      <div class="col-sm-12">
        <h1>InteraKids</h1>
      </div>
      <div class="col-sm-12">
        <p>Lorem ipsum conubia pellentesque maecenas lorem lobortis etiam vulputate ullamcorper, aliquet fringilla ante condimentum
          nibh aenean risus vivamus cursus, est vel sapien pretium eros tristique mattis amet.</p>
      </div>
      <div class="col-sm-12">
        <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
      </div>
    </div>
    <!--Grid-->
    <div class="container gallery-container">
      <h1>Grid</h1>
      <p class="page-description text-center">Grid Layout </p>
      <div class="tz-gallery">
        <div class="row">
          <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://res.cloudinary.com/teepublic/image/private/s--c8poegeA--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1507272397/production/designs/1952565_1.jpg"
                alt="Park">
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://res.cloudinary.com/teepublic/image/private/s--c8poegeA--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1507272397/production/designs/1952565_1.jpg"
                alt="Bridge">
            </a>
          </div>
          <div class="col-sm-12 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://res.cloudinary.com/teepublic/image/private/s--c8poegeA--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1507272397/production/designs/1952565_1.jpg"
                alt="Tunnel">
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://res.cloudinary.com/teepublic/image/private/s--c8poegeA--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1507272397/production/designs/1952565_1.jpg"
                alt="Coast">
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://res.cloudinary.com/teepublic/image/private/s--c8poegeA--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1507272397/production/designs/1952565_1.jpg"
                alt="Rails">
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://res.cloudinary.com/teepublic/image/private/s--c8poegeA--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1507272397/production/designs/1952565_1.jpg"
                alt="Traffic">
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--about us-->
    <div class="container" id="about-us">
      <div class="row">
        <div class="col-sm-12">
          <h1>About us</h1>
        </div>
      </div>
    </div>
    @endsection
  </div>