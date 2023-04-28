@extends('layouts.public')

@section('content')
<main class="main-wrap login-page mt-2">
    <img class="logo" src="/images/logo/logo.png" alt="logo" />
    <img class="logo logo-w" src="/images/logo/logo-w.png" alt="logo" />
    <header class="header">
        <div class="logo-wrap">
            <a href="login"><i class="iconly-Arrow-Left-Square icli"></i></a>
            <h1 class="title-color font-md">Iniciar sesión</h1>
        </div>
    </header>
    @error('email')
    <div class="alert alert-danger" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>{{ $message }}
    </div>
    @enderror
    <!-- Main Start -->
    <div class="main-wrap login-page mb-xxl">
        <p class="font-sm content-color">Para poder recuperar la contraseña necesitas tener el correo eléctronico con el que creo la cuenta.</p>
        <p class="font-sm content-color text-success">Recibiras la contraseña por medio de este correo.</p>

        <!-- Login Section Start -->
        <section class="login-section p-0">
            <!-- Login Form Start -->
            <form action="forgot" class="custom-form">
                @csrf
                <h1 class="font-md title-color fw-600">Olvidado contraseña</h1>

                <!-- Email Input start -->
                <div class="input-box">
                    <input name="email" id="email" type="email" placeholder="Ingrese su correo eléctronico" required class="form-control" />
                    <i data-feather="at-sign"></i>
                </div>
                <!-- Email Input End -->

                <button type="submit" class="btn-solid">Enviar</button>
            </form>
            <!-- Login Form End -->
        </section>
        <!-- Login Section End -->
    </div>
    <!-- Main End -->
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