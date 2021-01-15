<?php

use Illuminate\Support\Facades\Route;

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
Route::get('/link/{type}/{uniqueId}/{referral}','PageController@handelLink');
Route::get('/beta', 'PageController@showBeta');



// subsidiary routes
Route::get('/run-panel/{panelId}','PanelController@runPanel');
Route::get('/page-loader/{panelId}/{pageName}','PanelController@pageLoader');
Route::get('/download-file-{messageId}','PanelController@downloadFile');