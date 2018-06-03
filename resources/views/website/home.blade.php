@extends('layouts.website') @section('content')

<div id="loader" class="loader"></div>
<div style="display:none;" id="page-secundaria">
  <!--HEADER-->
<header id="home-section">
            <div class="dark-overlay">
              <div class="Container">
                  <div class="row">
                      <div class="col text-center"  style="position: absolute; bottom: 100px;" >
                    <button type="button" class="btn btn-outline-light ">Primary</button>
                </div>
                </div>
            </div>
            </div>
          </header>
          <section id="section-head" class="bg-secondary">
        <div class="container">
            <div class="row ">
                <div class="col text-center">
                    <div class="p-5">
                            <h1 class="display-4">InteraKids</h1>
                            <p class="lead">Lorem ipsum in phasellus urna hac diam ligula purus sapien, ac ultricies eu netus convallis lacinia etiam hac tellus, tempus eros luctus placerat vulputate diam malesuada nullam. imperdiet porta scelerisque himenaeos vestibulum </p>
                            <a href="#" class="btn btn-outline-light">lets play a game</a>
                        </div>
                    
                </div>

            </div>
        </div>
    </section>

<div class="container-fluid" id="row-video">
    <div class="row text-center justify-content" id="row-col" >
        <div class="col-sm-6 col-md-6">
            <h2 class="display-4">If you programing</h2>
           <p class="lead">Lorem ipsum in phasellus urna hac diam ligula purus sapien, ac ultricies eu netus convallis lacinia etiam hac tellus, tempus eros luctus placerat vulputate diam malesuada nullam. imperdiet porta scelerisque himenaeos vestibulum </p>
        <a href="#" class="btn btn-outline-light">Lets play</a>
        </div>
        <div class="col-sm-6 col-md-6">
                <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="//www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                      </div>
        </div>
   
    </div>  
  </div>
  @endsection