@extends('layouts.public')

@section('content')
<main class="main-wrap login-page mt-2">
    <!-- <div class="brand login__brand">
        <img class="brand__img" src="/assets/icon-package.png" alt="icon">
        <span class="brand__name">SGM</span>
    </div> -->

    <img class="logo" src="/images/logo/logo.png" alt="logo" />
    <img class="logo logo-w" src="/images/logo/logo-w.png" alt="logo" />
    <p class="font-sm content-color">Bienvenido al sistema administrativo del museo el sabanero.</p>

    @error('login')
    <div class="alert alert-danger" role="alert">
        {{ $message }}
    </div>
    @enderror

    <!-- Login Section Start -->
    <section class="login-section p-0">
        <form id="signin-form" class="custom-form" method="POST" action="login/authenticate" autocomplete="off">
            <h1 class="font-md title-color fw-600">Iniciar sesión</h1>

            @csrf
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

            <a href="forgot-password.html" class="content-color font-sm forgot mb-3">{{ __('Olvido su contraseña?') }}</a>
            <button type="submit" class="btn-solid">Iniciar sesión</button>
        </form>
    </section>
    <!-- Login Section End -->
</main>

{{-- jquery 3.6.0 --}}
<script src="{{url('/js/lib/jquery-3.6.0.min.js')}}"></script>

{{-- Bootstrap Js --}}
<script src="{{url('/js/lib/bootstrap.bundle.min.js')}}"></script>

{{-- Lord Icon --}}
<script src="{{url('/js/lib/lord-icon-2.1.0.js')}}"></script>

{{-- Feather Icon --}}
<script src="{{url('/js/lib/feather.min.js')}}"></script>

{{-- Theme Setting js --}}
<script src="{{url('/js/lib/theme-setting.js')}}"></script>

{{-- Script js --}}
<script src="{{url('/js/lib/script.js')}}"></script>
@endsection