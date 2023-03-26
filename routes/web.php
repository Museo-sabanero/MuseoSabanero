<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DeliveryController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/login', [LoginController::class, 'login'])->name("login");
Route::post('login/authenticate', [LoginController::class, 'authenticate']);

Route::group([
    'prefix' => '{subject?}',
    'as' => 'subject.',
    'namespace' => 'subject',
    'middleware' => ['auth:sanctum'],
    'where' => ['subject' => 'home|donor|event|eventRegister|eventUpdate']
], function () {
    Route::view('/{any?}', 'app')->name('subject')->where('any', '.*');
});
