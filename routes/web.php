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
Route::get('/','PageController@space');
Route::get('/home','PageController@space');
Route::get('/hub','PageController@hub');
Route::get('/space','PageController@space');
Route::get('/duels','PageController@duels');
Route::get('/profile','PageController@profile');
