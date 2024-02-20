<?php

use App\Models\Event;
use App\Models\Bitacora;
use App\Models\Restauration;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\DonanteController;
use App\Http\Controllers\Api\BitacoraController;
use App\Http\Controllers\Api\RestaurationController;

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
    'where' => ['subject' => '/|/home|home|donor/index|donor/details|donor/register|event/index|event/register|event/update|article/register|article/update|article/index|restauration/register|restauration/update|restauration/index|restauration/aprrove|restauration/details|user/register|user/setting|resources/index|bitacora/index|bitacora/register|bitacora/details|resource/update|updateapp/index']
], function () {
    Route::view('/{any?}', 'app')->name('subject')->where('any', '.*');
});

// Route::group([
//     'prefix' => '{subjectpublic?}',
//     'as' => 'subjectpublic.',
//     'namespace' => 'subjectpublic',
    
//     'where' => ['subjectpublic' => 'article/details']
// ], function () {
//     Route::view('/article/details/{id}', 'app')->name('subjectpublic');
// });
Route::get('/article/details/{id}', function () {
    return view('app');
});
Route::get('/home', function () {
    return view('app');
})->middleware(['auth:sanctum']);
Route::get('/', function () {
    return view('app');
})->middleware(['auth:sanctum']);

Route::get('article/exportPDFArticles', [ArticleController::class, 'exportPDFArticles'])->middleware(['auth:sanctum'])->name('.downloadPDFArticles');
Route::get('donor/exportPDFdonors', [DonanteController::class, 'exportPDFdonors'])->middleware(['auth:sanctum'])->name('.downloadPDFDonors');
Route::get('event/exportPDFEvents', [EventController::class, 'exportPDFEvents'])->middleware(['auth:sanctum'])->name('.downloadPDFEvents');
Route::get('restauration/exportPDFRestaurations', [RestaurationController::class, 'exportPDFRestaurations'])->middleware(['auth:sanctum'])->name('.downloadPDFRestaurations');
Route::get('bitacora/exportPDFBitacora', [BitacoraController::class, 'exportPDFBitacora'])->middleware(['auth:sanctum'])->name('.downloadPDFBitacora');