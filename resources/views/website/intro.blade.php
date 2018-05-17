<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{config('app.name', 'InteraKids')}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('css/intro.css') }}">
    <link rel="stylesheet" href="{{ asset('js/intro.js') }}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript">

$(function(){
var welcomeSection = $('.welcome-section'),
enterButton = welcomeSection.find('.enter-button');

setTimeout(function(){
    welcomeSection.removeClass('content-hidden');

},800);

enterButton.on('click', function(e){
e.preventDefault();
welcomeSection.addClass('content-hidden').fadeOut();
)};
});

</script>
</head>
<body>
<div class="wrapper"><h1>Programming</h1></div>
<div class="welcome-section content-hidden">
<div class="content-wrap" >
<ul class="fly-in-text">
<li>I</li>
<li>N</li>
<li>T</li>
<li>E</li>
<li>R</li>
<li>A</li>
<li>K</li>
<li>I</li>
<li>D</li>
<li>S</li>
</ul>
<a href="{{action('HomeController@index')}}" class="enter-button">Entrar</a>
</div>
</div>   

</body>
</html>
