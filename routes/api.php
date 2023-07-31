<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\ImageController;
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\RestauracionController;
use App\Http\Controllers\Api\DonanteController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\HistoryController;
use App\Http\Controllers\Api\FileController;
use App\Http\Controllers\Api\RestaurationController;
use App\Http\Controllers\Api\BitacoraController;
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
    Route::get('/showUser', [UserController::class, 'showUser']);
    Route::get('/detailsUserById', [UserController::class, 'detailsUserById']);
});

Route::group(['prefix' => 'donores', 'as' => 'donores', 'middleware' => ['auth:sanctum']], function () {
    Route::get('showDonor', [DonanteController::class, 'showDonor']);
    Route::get('/{id}/detailsDonor', [DonanteController::class, 'detailsDonor']);
    Route::get('/{cedula}/detailsDonorByCedula', [DonanteController::class, 'detailsDonorByCedula']);
    Route::put('/{id}/changeStatus', [DonanteController::class, 'changeStatus']);
    Route::put('/update', [DonanteController::class, 'update']);
    Route::post('/register', [DonanteController::class, 'register']);
});

Route::group(['prefix' => 'events', 'as' => 'events', 'middleware' => ['auth:sanctum']], function () {
    Route::get('getEvents', [EventController::class, 'getEvents']);
    Route::get('getEvent', [EventController::class, 'getEvent']);
    Route::post('store', [EventController::class, 'store']);
    Route::post('update', [EventController::class, 'update']);
    Route::post('delete', [EventController::class, 'delete']);
});

Route::group(['prefix' => 'restaurations', 'as' => 'restaurations', 'middleware' => ['auth:sanctum']], function () {
    Route::get('getRestauration', [RestaurationController::class, 'getRestauration']);
    Route::get('getRestaurationsByArticle', [RestaurationController::class, 'getRestaurationsByArticle']);
    Route::get('getRestaurations', [RestaurationController::class, 'getRestaurations']);
    Route::post('store', [RestaurationController::class, 'store']);
    Route::post('update', [RestaurationController::class, 'update']);
    Route::post('approve', [RestaurationController::class, 'approve']);
});


Route::group(['prefix' => 'articles', 'as' => 'articles', 'middleware' => ['auth:sanctum']], function () {
    Route::get('getArticles', [ArticleController::class, 'getArticles']);
    Route::get('getTypeObjects', [ArticleController::class, 'getTypeObjects']);
    Route::get('getArticle', [ArticleController::class, 'getArticle']);
    Route::get('getArticleById', [ArticleController::class, 'getArticleById']);
    Route::get('getTypeObject', [ArticleController::class, 'getTypeObject']);
    Route::post('store', [ArticleController::class, 'store']);
    Route::post('update', [ArticleController::class, 'update']);
    Route::post('delete', [ArticleController::class, 'delete']);
});


Route::group(['prefix' => 'histories', 'as' => 'histories', 'middleware' => ['auth:sanctum']], function () {
    Route::get('getHistories', [HistoryController::class, 'getHistories']);
    Route::get('getHistory', [HistoryController::class, 'getHistory']);
    Route::get('getHistoryByArticle', [HistoryController::class, 'getHistoryByArticle']);
    Route::post('store', [HistoryController::class, 'store']);
    Route::post('update', [HistoryController::class, 'update']);
    Route::post('delete', [HistoryController::class, 'delete']);
});

Route::group(['prefix' => 'bitacora', 'as' => 'bitacora', 'middleware' => ['auth:sanctum']], function () {
    Route::get('/showBitacora', [BitacoraController::class, 'showBitacora']);
    Route::get('/{id}/detailsBitacora', [BitacoraController::class, 'detailsBitacora']);
    Route::get('/{id_articulo}/bitacoraByIdArticulo', [BitacoraController::class, 'bitacoraByIdArticulo']);
    Route::post('/store', [BitacoraController::class, 'store']);
});

Route::group(['prefix' => 'files', 'as' => 'files', 'middleware' => ['auth:sanctum']], function () {
    Route::post('store', [FileController::class, 'store']);
    Route::post('update', [FileController::class, 'update']);
    Route::get('getImageByIdArticle', [FileController::class, 'getImageByIdArticle']);
});


