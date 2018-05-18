<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{config('app.name', 'InteraKids')}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('css/intro.css') }}">
    <link rel="stylesheet" href="{{ asset('js/intro.js') }}">
    <script src="https://code.jquery.com/jquery-3.2.1.js"></script>


</head>
<body>
<div class="preloader">
  <div class="lines">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
  </div>
  
  <div class="loading-text">LOADING</div>
</div>

<div class="btn">
<a href="{{action('HomeController@index')}}" class="enter-button">Entrar</a>
</div>
   


</body>
</html>
