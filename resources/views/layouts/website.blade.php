<!DOCTYPE html>
<html>
    @include('partials.head')
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
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
	</body>
</html>
