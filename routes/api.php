<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LogoutController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'logouts', 'as' => 'logouts', 'middleware' => ['auth:sanctum']], function () {
    Route::get('userSession', [LogoutController::class, 'userSession']);
});

Route::delete('/logout', [LogoutController::class, 'logout']);


