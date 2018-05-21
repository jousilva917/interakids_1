<!-- Required meta tags -->
<title>{{ config('app.name', 'InteraKids') }}</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->

<link href="{{ asset('css/app.css') }}" rel="stylesheet">
<link href="{{ asset('css/temp.css') }}" rel="stylesheet">
<link href="{{ asset('css/parallax.css') }}" rel="stylesheet">

<link href="{{asset('css/learn/dataTables.bootstrap4.css')}}" rel="stylesheet">

<!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="{{ asset('js/app.js') }}" defer></script>
 
 <script type="text/javascript">
$(document).ready(function(){
	$("textarea").addClass("materialize-textarea")
	$("input[type='submit']").addClass("btn waves-effect waves-light")
})
// Parallax

(function() {
  
  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

}).call(this);

</script>
  <script src="{{asset('/js/intro.js')}}" defer></script>
  <link href="{{ asset('css/intro.css') }}" rel="stylesheet">
