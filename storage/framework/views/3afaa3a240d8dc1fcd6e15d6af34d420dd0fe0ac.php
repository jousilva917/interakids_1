<!-- Bootstrap CSS -->
<title><?php echo e(config('app.name', 'Laravel')); ?></title>

<link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">

<link rel="stylesheet" href="<?php echo e(asset('css/temp.css')); ?>">


<?php echo $__env->make('partials.scripts', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

