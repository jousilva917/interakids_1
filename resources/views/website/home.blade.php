@extends('layouts.website') @section('content')
<link href="{{ asset('css/temp.css') }}" rel="stylesheet">
<div id="loader" class="loader"></div>
<div style="display:none;" id="tudo_page">

  <!-- Header -->
  <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>
  <!--Video/Text-->
  <div class="container-fluid text-center" id="video-text">
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
    <div class="container-fluid gallery-container">
      <h1>Grid</h1>
      <p class="page-description text-center">Grid Layout </p>
      <div class="tz-gallery">
        <div class="row">
          <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://lh3.googleusercontent.com/S18QgrA0SPyFWupMb8zyF04eFYPh6fhJMVl8wp4JtvXTdzcxexgebVb_WbYxZBMkduYGZxc0AlmmlkqhM_hc=w1240-h887"
                alt="Park">
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://lh3.googleusercontent.com/S18QgrA0SPyFWupMb8zyF04eFYPh6fhJMVl8wp4JtvXTdzcxexgebVb_WbYxZBMkduYGZxc0AlmmlkqhM_hc=w1240-h887"
                alt="Bridge">
            </a>
          </div>
          <div class="col-sm-12 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://lh3.googleusercontent.com/S18QgrA0SPyFWupMb8zyF04eFYPh6fhJMVl8wp4JtvXTdzcxexgebVb_WbYxZBMkduYGZxc0AlmmlkqhM_hc=w1240-h887"
                alt="Tunnel">
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://lh3.googleusercontent.com/S18QgrA0SPyFWupMb8zyF04eFYPh6fhJMVl8wp4JtvXTdzcxexgebVb_WbYxZBMkduYGZxc0AlmmlkqhM_hc=w1240-h887"
                alt="Coast">
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://lh3.googleusercontent.com/S18QgrA0SPyFWupMb8zyF04eFYPh6fhJMVl8wp4JtvXTdzcxexgebVb_WbYxZBMkduYGZxc0AlmmlkqhM_hc=w1240-h887"
                alt="Rails">
            </a>
          </div>
          <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="#">
              <img src="https://lh3.googleusercontent.com/S18QgrA0SPyFWupMb8zyF04eFYPh6fhJMVl8wp4JtvXTdzcxexgebVb_WbYxZBMkduYGZxc0AlmmlkqhM_hc=w1240-h887"
                alt="Traffic">
            </a>
          </div>
        </div>
      </div>
    </div>
<!--about us-->
<div class="container-fluid" id="about-us">
  <div class="row">
    <div class="col-sm-12">
      <h1>About us</h1>
    </div>
  </div>
</div>

<!--Footer-->
<footer class="page-footer font-small cyan darken-3 mt-4" id="footer">

  <div class="container">
    <div class="row">
      <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

          <!-- Facebook -->
          <a class="fb-ic">
            <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <!-- Twitter -->
          <a class="tw-ic">
            <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <!-- Google +-->
          <a class="gplus-ic">
            <i class="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <!--Linkedin -->
          <a class="li-ic">
            <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <!--Instagram-->
          <a class="ins-ic">
            <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <!--Pinterest-->
          <a class="pin-ic">
            <i class="fa fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>
        </div>
  </div>
  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">InteraKids
    <p> Feito com Café e Amor</p>
  </div>
</footer>







</div>
@endsection