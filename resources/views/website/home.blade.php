@extends('layouts.website') @section('content')
<link href="{{ asset('css/parallax.css') }}" rel="stylesheet">
<div id="loader" class="loader"></div>
<div style="display:none;" id="tudo_page">

  <!-- Header -->
  <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#">Aprenda</a>
      </div>
    </div>
  </header>

  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-center">
          <h2 class="section-heading text-uppercase">InteraKids</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          <a class="btn btn-primary btn-xl" href="#" style="position:flex; right:200px;">Aprenda</a>
        </div>
        <div class="col-lg-6">
          <iframe width="500" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
      </div>
    </div>
</div>
</section>
<section class="grid">
  <div class="container">
  
    <div class="row">
     <div class="col-lg-12">
     <h1>Grid</h1>     
    </div>
      <div class="col-sm-4 text-center"><h1>ola</h1>
      </div>
      <div class="col-sm-4 text-center"><h1>ola</h1>
      </div>
      <div class="col-sm-4 text-center"><h1>ola</h1>
      </div>
      <div class="col-sm-4 text-center"><h1>ola</h1>
      </div>
      <div class="col-sm-4 text-center"><h1>ola</h1>
      </div>
      <div class="col-sm-4 text-center"><h1>ola</h1>
      </div>
    </div>
  </div>

  </div>
  </div>
  @endsection