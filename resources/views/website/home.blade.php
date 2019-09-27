@extends('layouts.website')
@section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{!!Minify::stylesheet(['/css/app.css'])->withFullUrl()!!}
{!!Minify::javascript(['/js/app.js','/js/site/parallax.js','/js/site/navbar.js','/js/site/intro.js','/js/site/wow.js','/js/site/temp.js'])->withFullUrl()!!}
@endsection
@section('content')
<!--LOADER-->
<div id="loader" class="loader"></div>
<!--/LOADER-->
<!--BODY-->
<!--HERO.PARALLAX-->
<div id='hero'>
    <div class='layer-bg layer' data-depth='0.89' data-type='parallax'></div>
    <div class='layer-1 layer' data-depth='0.15' data-type='parallax'></div>
    <div class='layer-2 layer' data-depth='0.73' data-type='parallax'></div>
    <div class='layer-3 layer' data-depth='0.90' data-type='parallax'></div>
    <div class='layer-overlay layer' data-depth='0.85' data-type='parallax'></div>
    <div class='layer-4 layer' data-depth='0.99' data-type='parallax'></div>
</div>
<!--/HERO.PARALLAX-->
<!--HEADER-->
<!--START-->
<div class="container-fluid bg-w">
    <!--DIV.ANIMATION-->
    <div class='wow bounceInLeft' data-wow-offset="300">
        <section>
            <!--INTRODUCTION-->
            <div class='row justify-content-center justify'>
                <div class='col-sm-12 col-md-12 col-lg-12'>
                    <h1>InteraKids</h1>
                </div>
                <div class="col-sm-3 col-md-4 col-lg-4">
                    <p class="text-justify">O projeto INTERAKIDS tem como objetivo ensinar de forma interativa a lógica de programação para
                        os que vão formar nosso futuro: as crianças! O projeto pretende mostrar que programação não é
                        tarefa para nenhum herói lendário, e muito menos um bicho de sete cabeças. </p>
                </div>
                <div class="col-sm-3 col-md-4 col-lg-4">
                    <p class="text-justify">Não há época melhor para ensiná-los do que a infância, quando estão no começo de seu
                        desenvolvimento, e já que gastam tanto tempo na internet, por que não gastar com algo que ajude
                        no futuro? Está preparado para embarcar conosco?</p>
                </div>
            </div>
            <!--/INTRODUCTION-->
        </section>
        <!--METHODOLOGY-->
        <div class='container-fluid'>
            <div class="row justify-content-center">
                <div class="col-sm-3 col-md-3 col-lg-3 wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                    <p><img class="img-fluid" src="images/background/jogosnovo.png" alt="card image"></p>
                    <h4 class="card-title">Jogos</h4>
                    <p class="card-text">Feitos por 3 ilhas diferentes, resolva problemas e ajude os Personagem em sua
                        aventura. </p>
                </div>
                <div class=" col-sm-3 col-md-3 col-lg-3 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.1s">
                    <p><img class="img-fluid" src="../../images/metd.png" alt="card image"></p>
                    <h4 class="card-title">Linguagens</h4>
                    <p class="card-text">Usando a biblioteca do Google chamada Blockly, aprenda javascript de uma forma
                        interativa.</p>
                </div>
                <div class=" col-sm-3 col-md-3 col-lg-3 wow slideInRight " data-wow-duration="2s" data-wow-delay="0.1s">
                    <p><img class="img-fluid" src="../../images/trofeu e.png" alt="card image"></p>
                    <h4 class="card-title">Missões</h4>
                    <p class="card-text">Cumpra missões e ganhe estrelas, que podem trocadas por prêmios! </p>
                </div>
            </div>
        </div>
        <!--/METHODOLOGY-->
        <!--BUTTOM.PLAY-->
        <div class="col-sm-12 col-md-12 col-lg-12 wow fadeInDown" data-wow-duration="2s" data-wow-delay="2s">
            <a class=" btn btn-primary btn4 m-5" href="/perfil">Jogar</a>
        </div>
        <!--/BUOTTOM.PLAY-->
    </div>
    <!--/DIV.ANIMATION-->
</div>
<!--/START-->
<!--SECTION-->
<div class="container-fluid meio">
    <div class="row justify-content-center wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s">
        <div class="col-sm-12 col-md-12 col-lg-12 p-5">
            <h1 class="display-4 text-white">AS ILHAS FLUTUANTES</h1>
            <p class="text-white">Ajude as pacificas ilhas em ordem de cumprir sua difícil jornada de chegar até a lua!</p>
        </div>
    </div>
</div>
<!--/SECTION-->
<!--EARTH/MOON-->
<div class="container-fluid earth">
    <!--LINE-->
    <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.1s">
            <img class=" img-fluid" src="/images/background/earth.png" alt="earth">
        </div>
        <!--ROBOT-->
        <div class="col-sm-12 col-md-6 col-lg-5 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.1s">
            <!--MACHINE-->
            <div class="content">
                <div class="content__container">
                    <p class="content__container__text">
                        Hello
                    </p>
                    <ul class="content__container__list">
                        <li class="content__container__list__item">world </li>
                        <li class="content__container__list__item">machine </li>
                        <li class="content__container__list__item">users </li>
                        <li class="content__container__list__item">everybody </li>
                    </ul>
                </div>
            </div>
            <!--/MACHINE-->
            <!--HISTORY-->
            <div class="col-sm-12 col-md-12 col-lg-12 ">
                <p class="text-white">Em um mundo feito a base de códigos, você é um jovem programador que tem como
                    tarefa cuidar de um pequeno mundo digital, enquanto o observa de longe, em sua lua.
                </p>
                <p class="text-white">Um dia, um bug terrível no sistema apagou quase tudo daquele mundo e
                    derrubando você de sua lua... Mas a esperança não estava perdida, três ilhas ainda restavam,
                    flutuando por cima das nuvens do mundo, intocadas pelo defeito.
                    Você acorda em uma das ilhas.
                </p>
                <p class="text-white">
                    Sua missão é ajudar os habitantes das ilhas a coletarem estrelas suficientes para alimentar o
                    foguete para viajar até a lua e restaurar os códigos do mundo.
                    Boa sorte, jovem programador.
                </p>
            </div>
            <!--SVG.SATELLITE-->
            <div class="col-sm-2 col-md-2 col-lg-6 ml-auto">
                <svg class="x" version="1.1" id="el_S1R9QhQz67" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve"
                    height="128" width="128">
                    <g id="el_ByJxcQhQzTX">
                        <path d="M90,38.9c-4.6,4.6-12,4.6-16.6,0c-4.6-4.6-4.6-12,0-16.6L90,38.9z" id="el_Hk-ecQnQfa7" />
                        <path d="M73.4,34.9c-1.8-1.8-2.9-4-3.3-6.3c-0.6,3.6,0.5,7.5,3.3,10.3c4.6,4.6,12,4.6,16.6,0l-2.3-2.3&#10;&#9;&#9;C83.2,39.4,77.3,38.8,73.4,34.9z"
                            id="el_SkGg9QnQM6Q" />
                        <ellipse cx="87.2" cy="25.1" rx="2.7" ry="2.7" id="el_SJQxqm2XzpX" />
                        <path d="M36.9,77.2c0.8,0.8,0.8,2.1,0,2.8l-2.3,2.3c-0.8,0.8-2.1,0.8-2.8,0l-1.9-1.9c-0.8-0.8-0.8-2.1,0-2.8l2.3-2.3&#10;&#9;&#9;c0.8-0.8,2.1-0.8,2.8,0L36.9,77.2z"
                            id="el_HyEgqQ3Qz6X" />
                        <path d="M33,83.9c-0.8,0-1.6-0.3-2.2-0.9l-1.9-1.9C28.3,80.6,28,79.8,28,79c0-0.8,0.3-1.6,0.9-2.1l2.4-2.3&#10;&#9;&#9;c1.2-1.1,3.2-1.1,4.4,0l1.9,1.9c0.6,0.6,0.9,1.3,0.9,2.1c0,0.8-0.3,1.6-0.9,2.1L35.2,83C34.6,83.6,33.9,83.9,33,83.9z M33.5,75.8&#10;&#9;&#9;c-0.3,0-0.5,0.1-0.7,0.3l-2.4,2.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l1.9,1.9c0.4,0.4,1.1,0.4,1.5,0l2.4-2.3&#10;&#9;&#9;c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L34.2,76C34,75.9,33.7,75.8,33.5,75.8z"
                            id="el_ryre57nQGT7" />
                        <path d="M71,42.4c3.1,3.1,3.1,8.2,0,11.3L45.6,79.1c-3.1,3.1-8.2,3.1-11.3,0l-1.2-1.2c-3.1-3.1-3.1-8.2,0-11.3&#10;&#9;&#9;l25.3-25.3c3.1-3.1,8.2-3.1,11.3,0L71,42.4z"
                            id="el_S1Ug9mn7zTX" />
                        <path d="M28.8,14.4c-3.1-3.1-8.2-3.1-11.3,0L12,19.9c-3.1,3.1-3.1,8.2,0,11.3l17.5,17.5c3.1,3.1,8.2,3.1,11.3,0&#10;&#9;&#9;l5.5-5.5c3.1-3.1,3.1-8.2,0-11.3L28.8,14.4z"
                            id="el_r1DlcXhQGam" />
                        <path d="M48.1,51.5c-0.3,0-0.5-0.1-0.7-0.3L14.9,18.7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l32.5,32.5&#10;&#9;&#9;c0.4,0.4,0.4,1,0,1.4C48.6,51.4,48.4,51.5,48.1,51.5z"
                            id="el_rkuec72Qz6m" />
                        <path d="M25.9,45c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l15.6-15.6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L26.6,44.7&#10;&#9;&#9;C26.5,44.9,26.2,45,25.9,45z"
                            id="el_H1Keqm37zpm" />
                        <path d="M17.1,36.1c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4L32,18.7c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4&#10;&#9;&#9;L17.8,35.8C17.6,36,17.3,36.1,17.1,36.1z"
                            id="el_Hycg97n7fp7" />
                        <path d="M97.6,83.2c3.1,3.1,3.1,8.2,0,11.3l-5.5,5.5c-3.1,3.1-8.2,3.1-11.3,0L63.3,82.6c-3.1-3.1-3.1-8.2,0-11.3&#10;&#9;&#9;l5.5-5.5c3.1-3.1,8.2-3.1,11.3,0L97.6,83.2z"
                            id="el_B1ix5Xn7z67" />
                        <path d="M94,97.4c-0.3,0-0.5-0.1-0.7-0.3L60.8,64.6c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l32.5,32.5&#10;&#9;&#9;c0.4,0.4,0.4,1,0,1.4C94.5,97.3,94.3,97.4,94,97.4z"
                            id="el_Sknlcm37f6X" />
                        <path d="M68,87.1c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4L83,69.7c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4&#10;&#9;&#9;L68.7,86.8C68.5,87,68.3,87.1,68,87.1z"
                            id="el_r1alcQnQf6m" />
                        <path d="M76.9,96c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l15.6-15.6c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4&#10;&#9;&#9;L77.6,95.7C77.4,95.9,77.2,96,76.9,96z"
                            id="el_rkRl5Qn7zam" />
                        <path d="M81.7,43.3c-3.4,0-6.6-1.3-9-3.7c-5-5-5-13.1,0-18c0.4-0.4,1-0.4,1.4,0l16.6,16.6c0.4,0.4,0.4,1,0,1.4&#10;&#9;&#9;C88.3,42,85.1,43.3,81.7,43.3z M73.5,23.7c-3.5,4.2-3.3,10.5,0.7,14.5c2,2,4.7,3.2,7.6,3.2c2.5,0,4.9-0.9,6.8-2.5L73.5,23.7z"
                            id="el_BkJbcmhmz67" />
                        <path d="M70.9,42.3c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l2.1-2.1c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4&#10;&#9;&#9;L71.6,42C71.4,42.2,71.2,42.3,70.9,42.3z"
                            id="el_HkgW9XhmMaX" />
                        <path d="M71,48.8L45.6,74.1c-3.1,3.1-8.2,3.1-11.3,0l-1.2-1.2c-0.9-0.9-1.6-2-1.9-3.2c-0.9,2.8-0.3,6,1.9,8.2l1.2,1.2&#10;&#9;&#9;c3.1,3.1,8.2,3.1,11.3,0L71,53.8c2.2-2.2,2.8-5.4,1.9-8.2C72.5,46.8,71.9,47.8,71,48.8z"
                            id="el_ByZW9mn7f6X" />
                        <path d="M46.6,79c-0.3,0-0.5-0.1-0.7-0.3L33.6,66.3c-0.4-0.4-0.4-1,0-1.4l4.5-4.5c0.4-0.4,1-0.4,1.4,0l12.4,12.4&#10;&#9;&#9;c0.4,0.4,0.4,1,0,1.4l-4.5,4.5C47.2,78.9,46.9,79,46.6,79z M35.7,65.6l10.9,10.9l3.1-3.1L38.8,62.5L35.7,65.6z"
                            id="el_Skz-97hQz6Q" />
                        <path d="M81.8,31.4c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l3-3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-3,3&#10;&#9;&#9;C82.3,31.3,82.1,31.4,81.8,31.4z"
                            id="el_rJmb9Q2QGp7" />
                        <path d="M87,29c-1.1,0-2.1-0.4-2.8-1.2c-1.6-1.6-1.6-4.1,0-5.7c1.5-1.5,4.1-1.5,5.7,0c1.6,1.6,1.6,4.1,0,5.7&#10;&#9;&#9;C89.1,28.6,88.1,29,87,29z M87,23.1c-0.5,0-1,0.2-1.3,0.5c-0.7,0.7-0.7,1.9,0,2.6c0.7,0.7,1.9,0.7,2.6,0c0.7-0.7,0.7-1.9,0-2.6&#10;&#9;&#9;C88,23.3,87.5,23.1,87,23.1z"
                            id="el_ryEZqQh7fTm" />
                        <path d="M45.2,68c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l25-25c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-25,25&#10;&#9;&#9;C45.7,67.9,45.5,68,45.2,68z"
                            id="el_rJBbqXh7zaX" />
                        <path d="M40,82.4c-2.4,0-4.7-0.9-6.4-2.6l-1.2-1.2c-3.5-3.5-3.5-9.2,0-12.7l25.3-25.3c1.7-1.7,4-2.6,6.4-2.6&#10;&#9;&#9;c2.4,0,4.7,0.9,6.4,2.6l1.2,1.2c3.5,3.5,3.5,9.2,0,12.7L46.3,79.8C44.6,81.5,42.4,82.4,40,82.4z M64.2,40c-1.9,0-3.6,0.7-5,2&#10;&#9;&#9;L33.9,67.3c-2.7,2.7-2.7,7.2,0,9.9l1.2,1.2c1.3,1.3,3.1,2,4.9,2c1.9,0,3.6-0.7,5-2L70.3,53c2.7-2.7,2.7-7.2,0-9.9L69.1,42&#10;&#9;&#9;C67.8,40.7,66,40,64.2,40z"
                            id="el_B1L-5mnXzpX" />
                        <path d="M35.5,52c-2.4,0-4.7-0.9-6.4-2.6L11.6,31.9C9.9,30.2,9,28,9,25.6c0-2.4,0.9-4.7,2.6-6.4l5.5-5.5&#10;&#9;&#9;c1.7-1.7,4-2.6,6.4-2.6c2.4,0,4.7,0.9,6.4,2.6l17.5,17.5c1.7,1.7,2.6,4,2.6,6.4c0,2.4-0.9,4.7-2.6,6.4l-5.5,5.5&#10;&#9;&#9;C40.1,51.1,37.9,52,35.5,52z M23.5,13c-1.9,0-3.6,0.7-5,2L13,20.6c-1.3,1.3-2,3.1-2,5c0,1.9,0.7,3.6,2,5L30.5,48c1.3,1.3,3.1,2,5,2&#10;&#9;&#9;c1.9,0,3.6-0.7,5-2l5.5-5.5c1.3-1.3,2-3.1,2-5c0-1.9-0.7-3.6-2-5L28.5,15.1C27.2,13.8,25.4,13,23.5,13z"
                            id="el_rkwW97hXMa7" />
                        <path d="M29,20.2c-0.3,0-0.5-0.1-0.7-0.3L25,16.5c-1.3-1.3-3.8,0.6-4.6,1.3c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4&#10;&#9;&#9;c1.5-1.5,5-3.7,7.4-1.3l3.3,3.3c0.4,0.4,0.4,1,0,1.4C29.5,20.1,29.3,20.2,29,20.2z"
                            id="el_rJOW5QnQzT7" />
                        <path d="M37.4,28.4c-0.3,0-0.5-0.1-0.7-0.3l-4-4c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.4,0.4,0.4,1,0,1.4&#10;&#9;&#9;C38,28.3,37.7,28.4,37.4,28.4z"
                            id="el_HyFWcXnXzaX" />
                        <path d="M25.1,40.6c-0.3,0-0.5-0.1-0.7-0.3l-3.8-3.8c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l3.8,3.8&#10;&#9;&#9;c0.4,0.4,0.4,1,0,1.4C25.6,40.5,25.3,40.6,25.1,40.6z"
                            id="el_r1qWcmhXMTQ" />
                        <path d="M16,31.7c-0.3,0-0.5-0.1-0.7-0.3l-2.5-2.5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.5,2.5&#10;&#9;&#9;c0.4,0.4,0.4,1,0,1.4C16.5,31.6,16.3,31.7,16,31.7z"
                            id="el_Bks-cX3mMa7" />
                        <path d="M86.5,103c-2.4,0-4.7-0.9-6.4-2.6L62.6,82.9c-3.5-3.5-3.5-9.2,0-12.7l5.5-5.5c1.7-1.7,4-2.6,6.4-2.6&#10;&#9;&#9;s4.7,0.9,6.4,2.6l17.5,17.5c3.5,3.5,3.5,9.2,0,12.7l-5.5,5.5C91.1,102.1,88.9,103,86.5,103z M74.5,64c-1.9,0-3.6,0.7-5,2L64,71.6&#10;&#9;&#9;c-2.7,2.7-2.7,7.2,0,9.9L81.5,99c1.3,1.3,3.1,2,5,2s3.6-0.7,5-2l5.5-5.5c2.7-2.7,2.7-7.2,0-9.9L79.5,66C78.2,64.7,76.4,64,74.5,64z&#10;&#9;&#9;"
                            id="el_B12W5Q2QzT7" />
                        <path d="M96.3,91.7c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4c0.7-0.7-0.9-3.5-2.7-5.3c-0.4-0.4-0.4-1,0-1.4&#10;&#9;&#9;c0.4-0.4,1-0.4,1.4,0c0.2,0.2,5.3,5.4,2.7,8.1C96.8,91.6,96.6,91.7,96.3,91.7z"
                            id="el_HyT-q7hXGpQ" />
                        <path d="M88.4,80.1c-0.3,0-0.5-0.1-0.7-0.3l-4.2-4.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4.2,4.2&#10;&#9;&#9;c0.4,0.4,0.4,1,0,1.4C88.9,80,88.7,80.1,88.4,80.1z"
                            id="el_rJRbcm2mf67" />
                        <path d="M79.2,70.6c-0.3,0-0.5-0.1-0.7-0.3l-2.2-2.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.2,2.2&#10;&#9;&#9;c0.4,0.4,0.4,1,0,1.4C79.7,70.5,79.5,70.6,79.2,70.6z"
                            id="el_ryyf5X2XG6Q" />
                        <line x1="57.4" y1="47.5" x2="61.4" y2="43.5" id="el_HJef9QhXz6Q" />
                        <path d="M57.4,48.5c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.1-4c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4&#10;&#9;&#9;l-4.1,4C57.9,48.4,57.6,48.5,57.4,48.5z"
                            id="el_H1WfcQnmfTm" />
                        <line x1="44.1" y1="60.7" x2="54.6" y2="50.3" id="el_ryMGcQ3QMam" />
                        <path d="M44.1,61.7c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l10.5-10.4c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4&#10;&#9;&#9;L44.8,61.4C44.6,61.6,44.4,61.7,44.1,61.7z"
                            id="el_rJXf9m37f6Q" />
                        <ellipse cx="111.3" cy="71.1" rx="11.2" ry="10.8" id="el_BJVzcQ27fp7" />
                        <ellipse cx="49" cy="109.2" rx="7.5" ry="7.8" id="el_HkSM5Xh7zTQ" />
                        <path d="M111.3,83C104.6,83,99,77.4,99,70.8c0-6.5,5.5-11.8,12.3-11.8c6.6,0,11.7,5.2,11.7,11.8&#10;&#9;&#9;C123,77.5,117.7,83,111.3,83z M111.3,61c-5.6,0-10.2,4.4-10.2,9.8c0,5.6,4.7,10.2,10.2,10.2c5.3,0,9.7-4.6,9.7-10.2&#10;&#9;&#9;C120.9,65.2,116.8,61,111.3,61z"
                            id="el_r1LM9m27f6Q" />
                        <path d="M49,118c-4.8,0-9-4.2-9-9s4.2-9,9-9s9,4.2,9,9S53.8,118,49,118z M49,102.1c-3.7,0-7,3.2-7,6.9s3.3,6.9,7,6.9&#10;&#9;&#9;s7-3.2,7-6.9S52.7,102.1,49,102.1z"
                            id="el_SkDG9QnXG6m" />
                        <path d="M59,31c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4C63,29.2,61.2,31,59,31z M59,24.9&#10;&#9;&#9;c-1.2,0-2.1,1-2.1,2.1c0,1.2,1,2.1,2.1,2.1c1.2,0,2.1-1,2.1-2.1C61.1,25.8,60.2,24.9,59,24.9z"
                            id="el_HyOz5m3Xza7" />
                        <path d="M74,119c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4C78,117.2,76.2,119,74,119z M74,112.9&#10;&#9;&#9;c-1.2,0-2.1,1-2.1,2.1c0,1.2,1,2.1,2.1,2.1c1.2,0,2.1-1,2.1-2.1C76.1,113.8,75.2,112.9,74,112.9z"
                            id="el_HkKz5Q2mzaQ" />
                        <path d="M105,37c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4C109,35.2,107.2,37,105,37z M105,30.9&#10;&#9;&#9;c-1.2,0-2.1,1-2.1,2.1c0,1.2,1,2.1,2.1,2.1c1.2,0,2.1-1,2.1-2.1C107.1,31.8,106.2,30.9,105,30.9z"
                            id="el_r19M572mfT7" />
                        <path d="M102,51c0-0.4-0.4-0.8-1-0.9l-1.9-0.3c-0.5-0.1-1.1-0.6-1.1-1.1l-0.3-1.9c-0.1-0.5-0.5-1-0.9-1&#10;&#9;&#9;c-0.4,0-0.8,0.4-0.9,1l-0.3,1.9c-0.1,0.5-0.6,1.1-1.1,1.1l-1.9,0.3c-0.5,0.1-1,0.5-1,0.9c0,0.4,0.4,0.8,1,0.9l1.9,0.3&#10;&#9;&#9;c0.5,0.1,1.1,0.6,1.1,1.1l0.3,1.9c0.1,0.5,0.5,1,0.9,1c0.4,0,0.8-0.4,0.8-1L98,53c0.1-0.5,0.6-1,1.1-1.1l1.8-0.1&#10;&#9;&#9;C101.6,51.8,102,51.4,102,51z"
                            id="el_H1sfqQ37GTm" />
                        <path d="M37.4,100.6c0-0.4-0.4-0.8-1-0.9l-1.9-0.3c-0.5-0.1-1.1-0.6-1.1-1.1l-0.3-1.9c-0.1-0.5-0.5-1-0.9-1&#10;&#9;&#9;c-0.4,0-0.8,0.4-0.9,1l-0.3,1.9c-0.1,0.5-0.6,1.1-1.1,1.1l-1.9,0.3c-0.5,0.1-1,0.5-1,0.9c0,0.4,0.4,0.8,1,0.9l1.9,0.3&#10;&#9;&#9;c0.5,0.1,1.1,0.6,1.1,1.1l0.3,1.9c0.1,0.5,0.5,1,0.9,1c0.4,0,0.8-0.4,0.8-1l0.3-2.1c0.1-0.5,0.6-1,1.1-1.1l1.8-0.1&#10;&#9;&#9;C37,101.4,37.4,101,37.4,100.6z"
                            id="el_ryhG9mnmfpQ" />
                        <path d="M20.4,62.1c0-0.4-0.4-0.8-1-0.9L17.6,61c-0.5-0.1-1.1-0.6-1.1-1.1L16.2,58c-0.1-0.5-0.5-1-0.9-1&#10;&#9;&#9;c-0.4,0-0.8,0.4-0.9,1l-0.3,1.9c-0.1,0.5-0.6,1.1-1.1,1.1l-1.9,0.3c-0.5,0.1-1,0.5-1,0.9c0,0.4,0.4,0.8,1,0.9l1.9,0.3&#10;&#9;&#9;c0.5,0.1,1.1,0.6,1.1,1.1l0.3,1.9c0.1,0.5,0.5,1,0.9,1c0.4,0,0.8-0.4,0.8-1l0.3-2.1c0.1-0.5,0.6-1,1.1-1.1l1.8-0.1&#10;&#9;&#9;C20,62.9,20.4,62.5,20.4,62.1z"
                            id="el_Skpf5XhQGT7" />
                    </g>
                </svg>
            </div>
            <!--/SVG.SATELLITE-->
            <!--/HISTORY-->
        </div>
        <!--/ROBOT-->
        <!--PART.ROBOT-->
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <!--  <img class=" img-fluid slideInLeft " data-wow-duration="2s" data-wow-delay="0.5s" src="../../images/.png"
                        alt="robo1">-->
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 floating">
                <img class=" img-fluid slideInLeft " data-wow-duration="2s" data-wow-delay="0.5s" src="/images/background/robot.png"
                    alt="robo1">
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
                <!--  <img class=" img-fluid slideInLeft " data-wow-duration="2s" data-wow-delay="0.5s" src="../../images/.png"
                          alt="robo1">-->
            </div>
        </div>
        <!--/PART.ROBOT-->
    </div>
    <!--/LINE-->
    <!--LINE.MOON-->
    <div class="row justify-content-center margin">
        <!--GRID-->
        <div class="col-sm-3 col-md-3 col-lg-3 wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
            <p><img class="img-fluid w-50 rounded-circle img-thumbnail" src="/images/ilhas/map1.png" alt="card image"></p>
        </div>
        <div class=" col-sm-3 col-md-3 col-lg-3 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.1s">
            <p><img class="img-fluid w-50 rounded-circle img-thumbnail" src="/images/ilhas/map3.png" alt="card image"></p>
        </div>
        <div class=" col-sm-3 col-md-3 col-lg-3 wow slideInRight " data-wow-duration="2s" data-wow-delay="0.1s">
            <p><img class="img-fluid w-50 rounded-circle img-thumbnail" src="/images/ilhas/map2.png" alt="card image"></p>
        </div>
        <!--/GRID-->
        <!--MOON-->
        <div class="col-sm-12 col-md-6 col-lg-12 margin">
            <div class="col-sm-3 col-md-3 col-lg-6 wow slideInDown " data-wow-duration="2s" data-wow-delay="0.1s">
                <div id="bubble">
                    <div class="bubble">
                        <p>Equipe InteraKIDS (Obrigado!)...</p>
                        <div class="tick">
                        </div>
                    </div>
                    <div class="bubble">
                        <p>Equipe InteraKIDS (Obrigado!)...</p>
                        <div class="tick">
                        </div>
                    </div>
                </div>
            </div>
            <!--SKY-->
            <div class="sky">
                <div class="stars"></div>
                <div class="stars1"></div>
                <div class="stars2"></div>
                <div class="shooting-stars"></div>
                <img class="img-fluid" src="/images/background/moon.png" id="moon" alt="moon">
            </div>
            <!--/SKY-->
        </div>
        <!--/MOON-->
    </div>
    <!--/LINE.MOON-->
</div>
<!--/EARTH/MOON-->
<!--/HEADER-->
<!--/BODY-->
@endsection