<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>MS</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <meta name="app-locale" content="<?php echo e(App::getLocale()); ?>" />

    <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
    <script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script>
    <script src="https://kit.fontawesome.com/2f42bfd308.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

    <link rel="stylesheet" href="<?php echo e(mix('css/app.css')); ?>">
    <link rel="stylesheet" href="" class="dark-mode-styles" >


    <!-- PWA assets -->
    <?php $config = (new \LaravelPWA\Services\ManifestService)->generate(); echo $__env->make( 'laravelpwa::meta' , ['config' => $config])->render(); ?>
</head>

<body class="antialiased" id="app">
    <input type="hidden" value="<?php echo e(Auth::user() ? Auth::user()->id : null); ?>" id="userIdSGM" name="userIdSGM">
    <?php echo $__env->yieldContent('body'); ?>
</body>

</html>
<?php /**PATH D:\Museo el sabanero\git-Jeank-DV\MuseoSabanero\resources\views/layouts/app.blade.php ENDPATH**/ ?>