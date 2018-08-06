<<<<<<< HEAD
@extends('layouts.website') @section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> {!! Minify::stylesheet([ '/css/site/app.css', '/css/site/parallax.css', '/css/site/intro.css', '/css/site/temp.css'])->withFullUrl()!!}
{!! Minify::javascript(['/js/site/app.js', '/js/site/parallax.js', '/js/site/intro.js'])->withFullUrl() !!} @endsection @section('content')



<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../../images/montanha2.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="" alt="Second slide">
    </div>
 
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


<div class=" col-sm-4 col-md-4">
                <div class="mage-flip">
                    <p><img class=" img-fluid" src="../../images/home.png"  alt="card image"></p>
                        <h4 class="card-title">Linguagens</h4>
                        <p class="card-text">This is basic card with image on top, title, description and button.</p>
                </div></div>


                



@endsection
=======
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="google" value="notranslate">
  <meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Blockly Games : Maze</title>
  {!!Minify::stylesheet(['/common/common.css','/maze/style.css'])!!}
  {!!Minify::javascript(['/js/site/app.js','/common/boot.js','/common/storage.js'])!!}

</head>
<body>
</body>
</html>
>>>>>>> eb6f73d8db58a13e579cde7fcb0edc6d11c60bdb
