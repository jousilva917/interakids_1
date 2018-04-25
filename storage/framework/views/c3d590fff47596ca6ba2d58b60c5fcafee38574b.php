<!DOCTYPE html>
<html>
    <?php echo $__env->make('partials.head', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<body>
    <!-- Navegação -->
    <?php echo $__env->make('partials.nav', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

		<?php echo $__env->yieldContent('content'); ?>
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
			<?php echo $__env->make('partials.footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
	</body>
</html>
