<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

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


// pages routes
Route::get('/','PageController@home');
Route::get('/dashboard','PageController@dashboard');
Route::get('/privacy-policy','PageController@privacy');
Route::get('/terms-of-use','PageController@terms');
Route::get('/contact-us','PageController@contact');
Route::get('/link/{type}/{uniqueId}','PageController@handelLink');
Route::get('/beta', 'PageController@showBeta');



// subsidiary routes
Route::get('/run-panel/{panelId}','PanelController@runPanel');
Route::get('/page-loader/{panelId}/{pageName}','PanelController@pageLoader');
Route::get('/download-file-{messageId}','PanelController@downloadFile');

// handle github
Route::get('/auth/redirect', function () {
    return Socialite::driver('github')->redirect();
});

Route::get('/auth/callback','Auth\RegisterController@handleGitHubAuth');

