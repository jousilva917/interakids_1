<?php


<<<<<<< HEAD
/*Route::group(['namespace' => 'Home'], function () {
    // Controllers Within The "App\Http\Controllers\Home" Namespace
        return redirect()->action('HomeController@index');
});*/
=======
/*Route::namespace('Home')->group(function () {
    // Controllers Within The "App\Http\Controllers\Home" Namespace*/
>>>>>>> d41c6177bf0e06020866d54c15ec8231dc2dbe3a

Route::get('/', function()
{
    return redirect()->action('HomeController@index');
});
Route::get('/home', 'HomeController@index');

<<<<<<< HEAD
Route::get('/aprenda', 'LearnController@aprenda');

Route::get('/task', 'LearnController@task');
=======
Route::resource('explore', 'ExploreController');

Route::resource('learn', 'LearnController');

>>>>>>> d41c6177bf0e06020866d54c15ec8231dc2dbe3a

//Sistema de cadastro
Auth::routes();

Route::get('/perfil', 'HomeController@perfil')->name('perfil');
