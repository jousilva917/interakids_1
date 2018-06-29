<html>
    <body>
   @include('partials.nav')
  @extends('layouts.website') 
@section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
{!! Minify::stylesheet(['/css/site/app.css', '/css/site/team.css', '/css/site/temp.css'])->withFullUrl() !!} 
{!! Minify::javascript(['/js/site/app.js','/js/site/intro.js'])->withFullUrl() !!} 
@endsection 
@section('content')


<!-- About -->
    
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://i.ytimg.com/vi/PO0sv6QzoBo/maxresdefault.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://www.indiegame.com.br/wp-content/uploads/2016/05/thumbnainJolt-588x330.png" alt="Second slide">
    </div>
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




<section class="bg-light" id="team">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-heading text-uppercase">Nosso time</h2>
        <h3 class="section-subheading text-muted">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <div class="team-member">
          <img class="mx-auto rounded-circle" src="https://interakids1.files.wordpress.com/2018/03/pp.jpg" alt="">
            <h4>Bruno Gabriel</h4>
              <p class="text-muted">#</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                    <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
              </ul>
        </div>
            </div>
          
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="https://interakids1.files.wordpress.com/2018/03/pp-1.jpg?w=700&h=" alt="Card image cap" alt="">
              <h4>João Victor</h4>
              <p class="text-muted">Lead Marketer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="https://interakids1.files.wordpress.com/2018/03/pp-4.jpg?w=700&h=" alt="">
              <h4>Jonathan</h4>
              <p class="text-muted">Lead Developer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="team-member">
          <img class="mx-auto rounded-circle" src="https://interakids1.files.wordpress.com/2018/03/pp-2.jpg?w=700&h=" alt="">
            <h4>Mikaela</h4>
              <p class="text-muted">#</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                    <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
              </ul>
        </div>
            </div>
          
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="https://interakids1.files.wordpress.com/2018/03/whatsapp-image-2018-03-21-at-14-04-39.jpeg?w=700&h=" alt="">
              <h4>Sílvio</h4>
              <p class="text-muted">Lead Marketer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="https://interakids1.files.wordpress.com/2018/03/pp-3.jpg?w=700&h=" alt="">
              <h4>Vinícius Tavares</h4>
              <p class="text-muted">Lead Developer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fa fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
 
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
        </div>
    </div>
    </section>

       
        <!--<div class="album py-5 bg-light">
          <div class="container">

            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top " src="https://interakids1.files.wordpress.com/2018/03/pp.jpg" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">Bruno Gabriel</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-primary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-primary">Edit</button>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="https://interakids1.files.wordpress.com/2018/03/pp-1.jpg?w=700&h=" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">João Vitor Coutinho</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-primary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-primary">Edit</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="https://interakids1.files.wordpress.com/2018/03/pp-4.jpg?w=700&h=" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">Jonathan Micael</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-primary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-primary">Edit</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="https://interakids1.files.wordpress.com/2018/03/pp-2.jpg?w=700&h=" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">Mikaela Teodoro</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-primary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-primary">Edit</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="https://interakids1.files.wordpress.com/2018/03/whatsapp-image-2018-03-21-at-14-04-39.jpeg?w=700&h=" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">Silvio Raphael</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-primary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-primary">Edit</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="https://interakids1.files.wordpress.com/2018/03/pp-3.jpg?w=700&h=" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Vinícius Tavares</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-primary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-primary">Edit</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>              
          </div>
        </div>
        </div>
-->
    </body>
</html>