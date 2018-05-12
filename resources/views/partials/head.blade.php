<!-- Required meta tags -->
<title>{{ config('app.name', 'InteraKids') }}</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->

<link href="{{ asset('css/app.css') }}" rel="stylesheet">

<link rel="stylesheet" href="{{ asset('css/temp.css') }}">
<link href="{{asset('css/learn/dataTables.bootstrap4.css')}}" rel="stylesheet">

<!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="{{ asset('js/app.js') }}" defer></script>

 <script type="text/javascript">

// Menu-toggle button

$(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('nav').addClass('black');
      }

      else {
            $('nav').removeClass('black');
      }
})


</script>