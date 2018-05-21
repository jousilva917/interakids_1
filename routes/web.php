<?php


/*Route::group(['namespace' => 'Home'], function () {
    // Controllers Within The "App\Http\Controllers\Home" Namespace
        return redirect()->action('HomeController@index');
});*/

Route::get('/', function(){
    return redirect()->action('HomeController@index');
});
Route::get('/home', 'HomeController@index');
Route::get('/aprenda', 'LearnController@aprenda');
Route::get('/explore', 'HomeController@explore');
Route::get('/sobre', 'HomeController@sobre');
Route::get('/contato', 'HomeController@contato');
Route::post('/task', 'LearnController@task');
Route::get('/create', 'LearnController@form');
//Sistema de cadastro
Auth::routes();

Route::get('/perfil', 'LearnController@perfil')->name('perfil');

