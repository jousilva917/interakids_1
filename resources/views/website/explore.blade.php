@extends('layouts.website') @section('head')
<title>{{config('app.name' , 'InteraKids')}}</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{!!Minify::stylesheet(['/css/app.css'])->withFullUrl()!!}
{!!Minify::javascript(['/js/app.js','/js/site/temp.js','/js/site/wow.js'])->withFullUrl()!!}
<body id="document">
@endsection
@section('content')

<section class="secintro2">
</section>
<div class="container-fluid" id="pathex">
      <div class="col-sm-12 col-md-12 col-lg-4 mx-auto margin">
        <a data-toggle="modal" data-target="#modal_video">
          <svg id="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.5 536.9">
            <title>floating computer</title>
            <g id="computer">
              <rect x="67.7" width="348" height="217" rx="17.5" ry="17.5" fill="#c5d5d7" />
              <path d="M803.4,378.2H490.7c-9.7,0-17.5-6.3-17.5-14.2v7.7c0,7.8,7.8,14.2,17.5,14.2H803.4c9.7,0,17.5-6.3,17.5-14.2V364C820.9,371.8,813,378.2,803.4,378.2Z"
                transform="translate(-405.5 -167)" fill="#b6babd" />
              <rect x="203.8" y="218" width="75" height="55" fill="#c5d5d7" />
              <rect x="203.8" y="267.3" width="75" height="5.75" fill="#636b6c" />
              <rect x="203.8" y="261.9" width="75" height="5.75" fill="#94a0a1" />
              <rect x="203.8" y="256.1" width="75" height="5.75" fill="#bfbfbf" />
              <rect x="124.8" y="273" width="233" height="19" rx="2.4" ry="2.4" fill="#c5d5d7" />
              <path d="M760.9,453.5H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,452.8,762.3,453.5,760.9,453.5Z"
                transform="translate(-405.5 -167)" fill="#6f7879" />
              <path d="M760.9,447.3H532.8c-1.3,0-2.4-.7-2.4-1.5v6c0,.8,1.1,1.5,2.4,1.5H760.9c1.3,0,2.4-.7,2.4-1.5v-6C763.4,446.6,762.3,447.3,760.9,447.3Z"
                transform="translate(-405.5 -167)" fill="#bfc6c7" />
              <circle cx="241.7" cy="197.2" r="9.1" fill="#6f7879" />
            </g>
            <g id="screen">
              <rect x="79.8" y="17.5" width="323" height="164.5" fill="url(#g300)" />
            </g>
            <g id="triMain">
              <g>
                <polygon points="162.3 429.3 144.8 450.1 4.4 290 479.1 290 349.7 403.6 278.8 497.7 264.4 478.5 241.3 498.7 162.3 429.3"
                  fill="#0b3953" />
                <path d="M879.4,459,753.8,569.2l-69.4,92.1-14.2-18.8L646.9,663l-79.2-69.5L550.3,614l-136-155h465m10.6-4H405.5l5.8,6.6,136,155,3.1,3.5,3-3.6,14.7-17.4L644.2,666l2.6,2.3,2.6-2.3,20.1-17.6,11.6,15.4,3.2,4.2,3.2-4.2L756.7,572,882,462l8-7Z"
                  transform="translate(-405.5 -167)" fill="#2c3e50" />
              </g>
              <polygon points="436.1 292 327.1 387.6 266.9 467.6 254.6 451.2 234.3 469 165.6 408.7 150.6 426.5 32.6 292 8.8 292 144.8 447 162.1 426.5 241.3 496 264.7 475.5 278.8 494.3 348.2 402.2 473.8 292 436.1 292"
                fill="#072936" />
            </g>
            <g id="triMid">
              <g>
                <polygon points="160.2 456.7 237.6 456.7 199.2 503.3 160.2 456.7" fill="#093648" />
                <path d="M640,625.2,604.7,668,569,625.2h71m6.4-3H562.6l4.1,4.9,35.7,42.8,2.3,2.8,2.3-2.8,35.3-42.8,4.1-4.9Z"
                  transform="translate(-405.5 -167)" fill="#2c3e50" />
              </g>
              <polygon points="217.7 458.2 190.7 490.9 199.1 501 234.5 458.2 217.7 458.2" fill="#072936" />
            </g>
            <g id="triLeftSmall">
              <g>
                <polygon points="29.4 444.1 66.2 444.1 47.9 466.2 29.4 444.1" fill="#093648" />
                <path d="M467.5,613.1l-14,17-14.2-17h28.2m8.5-4H430.7l5.5,6.6,14.2,17,3.1,3.7,3.1-3.7,14-17,5.4-6.5Z"
                  transform="translate(-405.5 -167)" fill="#2c3e50" />
              </g>
              <polygon points="55.3 446.1 44.5 459.1 47.9 463.1 61.9 446.1 55.3 446.1" fill="#072936" />
            </g>
            <g id="triRightSmall">
              <g>
                <polygon points="335.3 487.7 369.9 487.7 352.7 508.5 335.3 487.7" fill="#093648" />
                <path d="M772.3,656.2l-14,17-14.2-17h28.2m6.4-3h-41l4.1,4.9,14.2,17,2.3,2.8,2.3-2.8,14-17,4.1-4.9Z"
                  transform="translate(-405.5 -167)" fill="#2c3e50" />
              </g>
              <polygon points="360.1 489.2 349.4 502.2 352.7 506.2 366.7 489.2 360.1 489.2" fill="#072936" />
            </g>
            <g id="triLeft">
              <g>
                <polygon points="16.7 359 173.3 359 95.4 438.2 16.7 359" fill="#093648" />
                <path d="M575.2,527.5,501,603.1l-75.1-75.6H575.2m7.2-3H418.7l5.1,5.1,75.1,75.6,2.1,2.2,2.1-2.2,74.3-75.6,5-5.1Z"
                  transform="translate(-405.5 -167)" fill="#2c3e50" />
              </g>
              <polygon points="147.8 360.5 84.2 425.2 95 436.1 169.3 360.5 147.8 360.5" fill="#072936" />
            </g>
            <g id="triRight">
              <g>
                <polygon points="197.2 314.2 479.6 314.2 395.4 407.5 392.1 403.5 339.3 457.2 197.2 314.2" fill="#093648" />
                <path d="M881.8,482.7,801,572.2l-3.3-4-52.9,53.8L606.3,482.7H881.8m6.7-3H599.1l5.1,5.1L742.7,624.2l2.1,2.2,2.1-2.2,50.6-51.5,1.2,1.4,2.2,2.7,2.3-2.6L884,484.7l4.5-5Z"
                  transform="translate(-405.5 -167)" fill="#0b3953" />
              </g>
              <polygon points="224.8 315.7 200.8 315.7 339.3 455.1 351.2 442.9 224.8 315.7" fill="#072936" />
            </g>
            <linearGradient id="g300" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stop-color="#67B26F" offset="0" />
              <stop stop-color="#4CA2CD" offset="1" />
            </linearGradient>
          </svg>
        </a>
      </div>
    <section>
      <div class='row justify-content-center'>
        <div class='col-sm-12 col-md-12 col-lg-12 '>
          <h1 class="text-white">Introdução</h1>
        </div>
      <div class='col-sm-12 col-md-12 col-lg-9'>
        <p class="text-white"> Para o desenvolvimento deste projeto, se utilizou de diversas tecnologias. As mesmas auxiliam na composição dos códigos de programação e design, como as linguagens de programação e frameworks; softwares de elaboração do design de imagens e gerenciadores de bancos de dados. </p>
      </div>
     </div>
    </section>
    <div class='container'>
        <div id="accordion">
            <div class="card bg-transparent">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <a class="btn btn-primary btn4 text-white" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Efetuar um Novo Cadastro?
                  </a>
                </h5>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body text-white">
                  <div class="container">
                      <div class="row">
                        <div class="col-sm-12  col-md-12 col-lg-12 pt-2"><img class="w-50"src="/images/document/registrar.jpeg" alt=""></div>
                        <div class="col-sm-12 col-md-12 col-lg-12 pt-5">
                          <p class="h3">1.	No menu superior, clique em Registrar.</p>
                          <p class="h3">2.	Insira os dados, e clique em Registrar, ou conecte-se com o Google.</p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-transparent">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <a class="btn btn-primary btn4 text-white" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Efetuar um Login?
                  </a>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body text-white">
                    <div class="container">
                        <div class="row">
                          <div class="col-sm-12  col-md-12 col-lg-12 pt-2"><img class="w-50"src="/images/document/login.jpeg" alt=""></div>
                          <div class="col-sm-12 col-md-12 col-lg-12 pt-5">
                            <p class="h3">1. No menu superior, clique em Login.</p>
                            <p class="h3">2. Insira os dados, e clique em Entrar, ou conecte-se com o Google.</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="card bg-transparent">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <a class="btn btn-primary btn4 text-white" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Restaurar Senha?
                  </a>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body text-white">
                    <div class="container">
                        <div class="row">
                          <div class="col-sm-12  col-md-12 col-lg-12 pt-2"><img class="w-50"src="/images/document/senha.jpeg" alt=""></div>
                          <div class="col-sm-12 col-md-12 col-lg-12 pt-5">
                              <p class="h3"><p class="h3">1. No menu superior, clique em Login</p>
                              <p class="h3">2. Clique em Esqueceu a senha?</p></p>
                              <p class="h3">3. Digite o e-mail que a conta foi cadastrada e clique em Enviar link de redefinição de senha.</p>
                          </div>
                          </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="card bg-transparent">
                <div class="card-header" id="headingFor">
                  <h5 class="mb-0">
                    <a class="btn btn-primary btn4 text-white" data-toggle="collapse" data-target="#collapseFor" aria-expanded="false" aria-controls="collapseFor">
                      Entrar em Contato?
                    </a>
                  </h5>
                </div>
                <div id="collapseFor" class="collapse" aria-labelledby="headingFor" data-parent="#accordion">
                  <div class="card-body text-white">
                      <div class="container">
                          <div class="row">
                            <div class="col-sm-12  col-md-12 col-lg-12 pt-2"><img class="w-50"src="/images/document/contact.jpeg" alt=""></div>
                            <div class="col-sm-12 col-md-12 col-lg-12 pt-5">
                                <p class="h3">1. No menu superior, clique em Contato.</p>
                                <p class="h3">2. Digite seu nome, assunto, mensagem e clique em Enviar.</p>
                            </div>
                            </div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="card bg-transparent">
                  <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                      <a class="btn btn-primary btn4 text-white" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Como Jogar?
                      </a>
                    </h5>
                  </div>
                  <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div class="card-body text-white">
                        <div class="container">
                            <div class="row">
                              <div class="col-sm-12  col-md-12 col-lg-12 pt-2"><img class="w-50"src="/images/document/play.jpeg" alt=""></div>
                              <div class="col-sm-12 col-md-12 col-lg-12 pt-5">
                                <p class="h3">1.	Após fazer Login, a página inicial do jogador se abrirá. Clique no botão vermelho "PHP".</p>
                                 <p class="h3">2. Selecione uma ilha </p>
                                  <p class="h3">3. Selecione um nível </p>
                                   <p class="h3"> 4. Siga o passo a passo do jogo. </p>
                                </p>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card bg-transparent">
                    <div class="card-header" id="headingSix">
                      <h5 class="mb-0">
                        <a class="btn btn-primary btn4 text-white" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          Alterar Seus Dados?
                        </a>
                      </h5>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                      <div class="card-body text-white">
                          <div class="container">
                              <div class="row">
                                <div class="col-sm-12  col-md-12 col-lg-12 pt-2"><img class="w-50"src="/images/document/config.jpeg" alt=""></div>
                                <div class="col-sm-12 col-md-12 col-lg-12 pt-5">
                                  <p class="h3">1.	Após fazer Login, a página inicial do jogador se abrirá.</p>
                                  <p class="h3">2.	Clique no ícone de menu à direita.</p>
                                  <p class="h3">3.	Clique no ícone de configurações</p>
                                  <p class="h3">4.	Após efetuar as mudanças, clique em Salvar.</p>
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="card bg-transparent">
                      <div class="card-header" id="headingSeven">
                        <h5 class="mb-0">
                          <a class="btn btn-primary btn4 text-white" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            Reportar um Bug?
                          </a>
                        </h5>
                      </div>
                      <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                        <div class="card-body text-white">
                            <div class="container">
                                <div class="row">
                                  <div class="col-sm-12  col-md-12 col-lg-12 pt-2"><img class="w-50"src="/images/document/bug.jpeg" alt=""></div>
                                  <div class="col-sm-12 col-md-12 col-lg-12 pt-5">
                                  <p class="h3">1. Na página do jogador, clique no ícone de menu à direita </p>
                                  <p class="h3">2. Clique no ícone de configurações </p>
                                  <p class="h3">3. Digite seu nome, assunto, mensagem e clique em Enviar.</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
          </div>
    </div>
</div>
  
<!-- Modal -->
<div class="modal fade" id="modal_video" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Documentação <i class="fa fa-youtube"></i></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="text-dark" aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="embed-responsive embed-responsive-4by3">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=x3bfa3DZ8JM"></iframe>
                  </div>
            </div>
        </div>
    </div>
</div>
@endsection
</body>
