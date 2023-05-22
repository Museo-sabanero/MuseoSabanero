

<?php $__env->startSection('content'); ?>
<main class="main-wrap login-page mt-2">
    <img class="logo" src="/images/logo/logo.png" alt="logo" />
    <img class="logo logo-w" src="/images/logo/logo-w.png" alt="logo" /> 
    <img src="/images/museo/frontPage.png" class="d-block mx-auto rounded-circle my-3" style="width: 250px; height: 250px; object-fit: cover;" alt="Portada">

    <?php $__errorArgs = ['login'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
    <div class="alert alert-danger" role="alert">
        <?php echo e($message); ?>

    </div>
    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>

    <!-- Login Section Start -->
    <section class="login-section p-0">
    <h2 class="fw-bold font-md title-color text-center">Bienvenidos al Museo el Sabanero</h2> 
        <form id="signin-form" class="custom-form" method="POST" action="login/authenticate" autocomplete="off">
            <?php echo csrf_field(); ?>
            <!-- Email Input start -->
            <div class="input-box">
                <input type="text" id="login" placeholder="Usuario" name="login" required class="form-control" />
                <i data-feather="at-sign"></i>
            </div>
            <!-- Email Input End -->

            <!-- Password Input start -->
            <div class="input-box">
                <input type="password" id="password" placeholder="Contraseña" name="password" required class="form-control" />
                <i class="iconly-Hide icli showHidePassword"></i>
            </div>
            <!-- Password Input End -->

            <a href="forgot" class="content-color font-sm forgot mb-3"><?php echo e(__('¿Olvido su contraseña?')); ?></a>
            <button type="submit" class="btn-solid">Iniciar sesión</button>
        </form>
    </section>
    <!-- Login Section End -->
</main>


<script src="<?php echo e(url('/js/lib/jquery-3.6.0.min.js')); ?>"></script>


<script src="<?php echo e(url('/js/lib/bootstrap.bundle.min.js')); ?>"></script>


<script src="<?php echo e(url('/js/lib/lord-icon-2.1.0.js')); ?>"></script>


<script src="<?php echo e(url('/js/lib/feather.min.js')); ?>"></script>


<script src="<?php echo e(url('/js/lib/theme-setting.js')); ?>"></script>


<script src="<?php echo e(url('/js/lib/script.js')); ?>"></script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.public', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\User\Documents\Museo\MuseoTesting\MuseoSabanero\resources\views/auth/login.blade.php ENDPATH**/ ?>