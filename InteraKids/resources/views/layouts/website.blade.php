<!DOCTYPE html>
<html>
	<head>
		<title>InteraKids</title>
    @include('partials.head')
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<link rel="stylesheet" href="{{ asset('css/temp.css') }}">
	</head>
	<body>
    <!-- Navegação -->
    @include('partials.nav')

    @yield('content')
    <header class="masthead">
    		    <div class="container">
    		      <div class="row">
    		        <div class="col-md-12">
    		          <h1>Slider principal</h1>
    		        </div>
    		      </div>
    		    </div>
    		  </header>

    		  <section id="video">
    		    <div class="container">
    		      <h1>Video</h1>
    		      <div class="row">
    		        <div class="col-md-12">

    		        </div>
    		      </div>
    		    </div>
    		  </section>

    		  <section id="grid-app">
    		    <div class="container">
    		      <h1>Grid</h1>
    		      <div class="row">
    		        <div class="col-md-12">

    		        </div>
    		      </div>
    		    </div>
    		  </section>

    		  <section id="sobre">
    		    <div class="container">
    		      <h1>sobre</h1>
    		      <div class="row">
    		        <div class="col-md-12">

    		        </div>
    		      </div>
    		    </div>
    		  </section>

    @include('partials.footer')
    @include('partials.scripts')
	</body>
</html>
