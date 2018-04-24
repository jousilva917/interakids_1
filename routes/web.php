<?php

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

/*Route::namespace('Home')->group(function () {
    // Controllers Within The "App\Http\Controllers\Home" Namespace*/
    Route::group(['namespace' => 'Home'], function()
    {
    Route::get('/', function()
    {
        return redirect()->action('Home\HomeController@index');
    });
    Route::resource('home', 'HomeController');
});
Route::resource('explore', 'ExploreController');
Route::resource('learn', 'LearnController');
