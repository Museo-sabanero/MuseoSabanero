<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>MS</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta name="app-locale" content="{{ App::getLocale() }}" />

    <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
    <script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script>
    <script src="https://kit.fontawesome.com/2f42bfd308.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="" class="dark-mode-styles" >


    <!-- PWA assets -->
    @laravelPWA
</head>

<body class="antialiased" id="app">
    <input type="hidden" value="{{Auth::user() ? Auth::user()->id : null}}" id="userIdSGM" name="userIdSGM">
    @yield('body')
</body>

</html>
