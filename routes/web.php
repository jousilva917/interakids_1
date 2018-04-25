<?php


/*Route::namespace('Home')->group(function () {
    // Controllers Within The "App\Http\Controllers\Home" Namespace*/

Route::get('/', function()
{
    return redirect()->action('HomeController@index');
});
Route::get('/home', 'HomeController@index');

Route::resource('explore', 'ExploreController');

Route::resource('learn', 'LearnController');


//Sistema de cadastro
Auth::routes();

Route::get('/perfil', 'HomeController@perfil')->name('perfil');
