<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\UserController;
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


Route::group(['prefix' => 'users', 'as' => 'users', 'middleware' => ['auth:sanctum']], function () {
    Route::post('/register', [UserController::class, 'register']);
    Route::put('/update', [UserController::class, 'update']);
    Route::get('/detailsUser', [UserController::class, 'detailsUser']);
});


