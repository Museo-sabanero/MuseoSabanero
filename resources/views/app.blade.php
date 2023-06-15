@extends('layouts.app')

@section('body')
<!-- <div id="app"></div> -->

{{-- Signature Pad --}}
<script src="https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js"></script>

{{-- jquery 3.6.0 --}}
<script src="{{asset('public/js/lib/jquery-3.6.0.min.js')}}"></script>

{{-- Bootstrap Js --}}
<script src="{{asset('public/js/lib/bootstrap.bundle.min.js')}}"></script>

{{-- Lord Icon --}}
<script src="{{asset('public/js/lib/lord-icon-2.1.0.js')}}"></script>

{{-- Feather Icon --}}
<script src="{{asset('public/js/lib/feather.min.js')}}"></script>

{{-- Slick Slider js --}}
<script src="{{asset('public/js/lib/slick.js')}}"></script>
<script src="{{asset('public/js/lib/slick.min.js')}}"></script>
<script src="{{asset('public/js/lib/slick-custom.js')}}"></script>

{{-- Add To Home  js --}}
<!-- <script src="{{url('/js/lib/homescreen-popup.js')}}"></script> -->

{{-- Theme Setting js --}}
<script src="{{asset('public/js/lib/theme-setting.js')}}"></script>

{{-- Script js --}}
<script src="{{asset('public/js/lib/script.js')}}"></script>
<script src="{{asset('public/js/app.js') }}" type="text/javascript" charset="utf-8"></script>
@endsection
