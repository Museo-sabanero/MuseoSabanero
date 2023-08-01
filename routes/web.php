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
Route::get('/forgot', [LoginController::class, 'forgot'])->name("forgot");
Route::post('login/authenticate', [LoginController::class, 'authenticate']);

Route::group([
    'prefix' => '{subject?}',
    'as' => 'subject.',
    'namespace' => 'subject',
    'middleware' => ['auth:sanctum'],
    'where' => ['subject' => 'home|donor/index|donor/details|donor/register|event/index|event/register|event/update|article/register|article/update|article/index|article/details|restauration/register|restauration/update|restauration/index|restauration/aprrove|restauration/details|user/register|user/setting|resources/index|bitacora/index|bitacora/register|bitacora/details']
], function () {
    Route::view('/{any?}', 'app')->name('subject')->where('any', '.*');
});


