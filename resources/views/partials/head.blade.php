<!-- Required meta tags -->
<title>{{ config('app.name', 'InteraKids') }}</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->

<link href="{{ asset('css/app.css') }}" rel="stylesheet">

<link rel="stylesheet" href="{{ asset('css/temp.css') }}">
<link rel="stylesheet" href="{{ asset('css/parallax.css') }}">
<link href="{{asset('css/learn/dataTables.bootstrap4.css')}}" rel="stylesheet">

<!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="{{ asset('js/app.js') }}" defer></script>

 <script type="text/javascript">

// Parallax

function parallax(){
			// Declarando as var.
			var layer_1 = document.getElementById('layer_1');
			var layer_2 = document.getElementById('layer_2');
			var layer_3 = document.getElementById('layer_3');
			var layer_4 = document.getElementById('layer_4');
			// Aplicando a posição
			layer_1.style.top = -(window.pageYOffset / 3) + 'px';
			layer_2.style.top = -(window.pageYOffset / 6) + 'px';
			layer_3.style.top = -(window.pageYOffset / 7) + 'px';
			layer_4.style.top = -(window.pageYOffset / 7) + 'px';
		}
		window.addEventListener("scroll", parallax, false);


</script>