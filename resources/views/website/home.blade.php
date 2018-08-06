@extends('layouts.website') @section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
{!! Minify::stylesheet([ '/css/site/app.css', '/css/site/parallax.css','/css/site/temp.css','/css/site/intro.css'])->withFullUrl()!!}
{!! Minify::javascript(['/js/site/app.js', '/js/site/parallax.js', '/js/site/intro.js'])->withFullUrl() !!} 
@endsection 
 @section('content')
<div id="loader" class="loader"></div>
<div class="" style="display:none;" id="page-secundaria">
    <!--HEADER-->

    <div id='hero'>
        <div class='layer-bg layer' data-depth='0.70' data-type='parallax'></div>
        <div class='layer-1 layer' data-depth='0.25' data-type='parallax'></div>
        <div class='layer-2 layer' data-depth='0.63' data-type='parallax'></div>
        <div class='layer-3 layer' data-depth='0.90' data-type='parallax'></div>
        <div class='layer-overlay layer' data-depth='0.85' data-type='parallax'></div>
        <div class='layer-4 layer' data-depth='1.00' data-type='parallax'></div>
    </div>
    <div id='content'>
        <div class='container'>
            <section class='first-section'>
                <div class='row'>
                    <div class='col-sm-12'>
                        <h1 class="display-3 text-center font-weight-bold">InteraKids</h1>
                    </div>
                </div>
            </section>
                <div class='row'>
                    <div class='col-sm-6'>
                        <p class="text-justify">O projeto INTERAKIDS tem como objetivo ensinar de forma interativa a programação e a lógica para
                            os que vão formar nosso futuro, as crianças. Com um sistema de níveis que incentiva a retornarem
                            para desbloquearem mais conquistas e lições novas, o projeto pretende mostrar que programação
                            não é tarefa para nenhum herói lendário, muito menos um monstro de sete cabeças. Pra que se esgotar
                            lendo extensos matérias e aulas que poderiam exaurir as crianças quando elas podem jogar e aprender
                            conceitos básicos da programação? </p>
                    </div>
                    <div class='col-sm-6'>
                        <p class="text-justify">Com o futuro não se brinca, por isso não tem época melhor para ensina-los do que a infância quando
                            seu desenvolvimento está em uma fase decisiva. Com a expansão tecnologia as crianças têm cada
                            vez mais acesso à internet, então por que não gastar uma parte deste tempo com algo que possa
                            ajudar no futuro? Uma vez que acostumados a lógica, programação fica fácil e pode ajudar em áreas
                            diversas como matemática e até resolver problemas na vida real. Está preparado para embarcar
                            neste projeto?
                        </p>

                    </div>
                </div>
                  
            


    
        <!--<h5 class="section-title h1">Nossas metas</h5><br>-->
    <div class-"container">
        <div class="row">
            <div class=" col-sm-4 col-md-4">
                <div class="mage-flip">
                    <p><img class=" img-fluid" src="../../images/jogos d.png" alt="card image"></p>
                        <h4 class="card-title">Jogos</h4>
                        <p class="card-text">This is basic card with image on top, title, description and button.</p>
                </div>
            </div>
                        
       
           
        
            <div class=" col-sm-4 col-md-4">
                <div class="mage-flip">
                    <p><img class=" img-fluid" src="../../images/metd.png"  alt="card image"></p>
                        <h4 class="card-title">Linguagens</h4>
                        <p class="card-text">This is basic card with image on top, title, description and button.</p>
                </div>
            </div>
            <div class=" col-sm-4 col-md-4">
                <div class="mage-flip">
                    <p><img class=" img-fluid" src="../../images/trofeu e.png" width="" alt="card image"></p>
                        <h4 class="card-title">Missões</h4>
                        <p class="card-text">This is basic card with image on top, title, description and button.</p>
                </div>
            </div>
            
        </div>
    </div>

                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <section class="border-btn">
                                <a class="btn4"  href="#">Jogar</a>
                                </section>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD



        </section>
=======
>>>>>>> eb6f73d8db58a13e579cde7fcb0edc6d11c60bdb
    </div>
<section id="section-layer" class="meio">
    <div class="container">
        <div class="row ">
            <div class="col-sm-12">
                <div class="p-5">
                    <h1 class="display-4 letra font-serif">As Ilhas flutuantes</h1>
                    <p class="">Resolva os problemas que estão sobre as pacíficas ilhas flutuantes<!--Resolva os problemas que estão sobre as pacíficas ilhas flutuantes, aprenda lógica, complete missões, desbloqueie novos conteúdos conforme avança e salve a todos...tudo isso em somente um jogo! Jogue gratuitamente e a primeira ilha é completamente sem cadastro! --> </p>
                    <a href="#" class="btn btn-success">ESTOU DENTRO</a>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="container-fluid">
    <div class="row text-center justify-content" id="row-col">
        <div class="col-sm-6 col-md-6">
            <h2 class="display-4">Mas e se?</h2>
            <p class="lead">Para qualquer duvida que possa surgir, fizemos esse pequeno vídeo que explica um pouco sobre a nossa didática e faz um pequeno tour pelo nosso site, mostrando desde as diferenças de ter e não ter uma conta até algumas fases do site; sinta-se livre para explorar todo o site! As ilhas precisam de vocês. </p>
<<<<<<< HEAD
            
                            <section class="border-btn">
                                <a class="btn4"  href="#">Jogar</a>
                                </section>
                        
                    
        </div>

         

        <div class=" col-sm-6 col-md-6">
                <div class="mage-flip">
                    <p><img class=" img-fluid" src="../../images/robo3.png" alt="card image"></p>
                        
                        </div>
=======
        </div>
        <div class="col-sm-6 col-md-6">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/_Mbxe33BYW8" allowfullscreen></iframe>
>>>>>>> eb6f73d8db58a13e579cde7fcb0edc6d11c60bdb
            </div>
</div></div>

<section class="gallery-block grid-gallery">
    <div class="container">
        <div class="heading">
            <h2 class="display-3">Grid InteraKids</h2>
        </div>
        <div class="row">

            <div class="col-sm-4 col-md-4 col-lg-4 item">
                <a class="lightbox" href="#">
                    <div class="img-fluid image scale-on-hover ilha1"></div>
                </a>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 item">
                <a class="lightbox" href="#">
                    <div class="img-fluid image scale-on-hover ilha2"></div>
                </a>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 item">
                <a class="lightbox" href="#">
                    <div class="img-fluid image scale-on-hover ilha3"></div>
                </a>
            </div>
        </div>
    </div>
</section>
<!--About-us-->
<div class="services-container section-container">
    <div class="container-fluid"></div>
</div>
</div>
@endsection