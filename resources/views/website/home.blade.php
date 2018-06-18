@extends('layouts.website') @section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
{!! Minify::stylesheet([ '/css/site/app.css', '/scss/style.scss', '/css/site/intro.css', '/css/site/temp.css'])->withFullUrl()!!} 
{!! Minify::javascript(['/js/site/app.js', '/js/site/intro.js'])->withFullUrl() !!} 
@endsection 
@section('content')
<div id="loader" class="loader"></div>
<div class="container-fluid" style="display:none;" id="page-secundaria">
    <!--HEADER-->
    <header id="home-section">
        <div class="dark-overlay">
            <div class="container-fluid">
                <div class="row">
                    <div class="col text-center" style="position: absolute; bottom: 100px;">
                        <button type="button" class="btn btn-outline-light ">Primary</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section id="section-head" class="bg-secondary">
        <div class="container-fluid">
            <div class="row ">
                <div class="col text-center">
                    <div class="p-5">
                        <h1 class="display-4">InteraKids</h1>
                        <p class="lead">Lorem ipsum in phasellus urna hac diam ligula purus sapien, ac ultricies eu netus convallis lacinia
                            etiam hac tellus, tempus eros luctus placerat vulputate diam malesuada nullam. imperdiet porta
                            scelerisque himenaeos vestibulum </p>
                        <a href="#" class="btn btn-outline-light">lets play a game</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container-fluid" id="row-video">
        <div class="row text-center justify-content" id="row-col">
            <div class="col-sm-6 col-md-6">
                <h2 class="display-4">If you programing</h2>
                <p class="lead">Lorem ipsum in phasellus urna hac diam ligula purus sapien, ac ultricies eu netus convallis lacinia etiam
                    hac tellus, tempus eros luctus placerat vulputate diam malesuada nullam. imperdiet porta scelerisque
                    himenaeos vestibulum </p>
                <a href="#" class="btn btn-outline-light">Lets play</a>
            </div>
            <div class="col-sm-6 col-md-6">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="//www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
    <section class="gallery-block grid-gallery">
        <div class="container">
            <div class="heading">
                <h2 class="display-3">Grid InteraKids</h2>
            </div>
            <div class="row">
                <div class="col-sm-3 col-md-3 item">
                    <a class="lightbox" href="#">
                        <img class="img-fluid image scale-on-hover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2e_HLzSvESoaytGygSCyr90lU6FS0jE1JHrWD5CoeTsNI1iZD">
                    </a>
                </div>
                <div class="col-sm-3 col-md-3 item">
                    <a class="lightbox" href="#">
                        <img class="img-fluid image scale-on-hover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2e_HLzSvESoaytGygSCyr90lU6FS0jE1JHrWD5CoeTsNI1iZD">
                    </a>
                </div>
                <div class="col-sm-3 col-md-3 item">
                    <a class="lightbox" href="#">
                        <img class="img-fluid image scale-on-hover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2e_HLzSvESoaytGygSCyr90lU6FS0jE1JHrWD5CoeTsNI1iZD">
                    </a>
                </div>
                <div class="col-sm-3 col-md-3 item">
                    <a class="lightbox" href="#">
                        <img class="img-fluid image scale-on-hover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2e_HLzSvESoaytGygSCyr90lU6FS0jE1JHrWD5CoeTsNI1iZD">
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!--About-us-->
    <div class="services-container section-container">
        <div class="container-fluid">
        </div>
    </div>
</div>
@endsection