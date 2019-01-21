<?php

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

Route::post('/tweets/run', 'TweetsController@run')->name('tweets.run');
Route::get('/tweets', 'TweetsController@index')->name('tweets.index');
Route::get('/tweets/{tweet}', 'TweetsController@view')->name('tweets.view');
Route::post('/tweets/{tweet}/analyze', 'TweetsController@analyze')->name('tweets.analyze');
Route::post('/app/reset', 'AppController@reset')->name('app.reset');
