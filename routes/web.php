<?php


/*Route::group(['namespace' => 'Home'], function () {
    // Controllers Within The "App\Http\Controllers\Home" Namespace
        return redirect()->action('HomeController@index');
});*/
//HomeController
Route::get('/', function(){
    return redirect()->action('HomeController@index');
});
Route::get('/home', 'HomeController@index');
Route::get('/sobre', 'HomeController@sobre');
Route::get('/contato', 'HomeController@contact');
Route::post('/submit', 'HomeController@submit');
Route::post('/picture','HomeController@picture');
Route::get('/task', 'HomeController@tasks');
//LearnController
Route::get('/explore', 'HomeController@explore');
Route::get('/isle', 'LearnController@isle');
Route::get('task', 'LearnController@task');
Route::post('/task/learn', 'LearnController@taskComplete');
Route::get('/pegs', 'LearnController@pegs');
Route::get('/markAsRead', function(){
        auth()->user()->unreadnotifications->markAsRead();
});
//Sistema de cadastro
Auth::routes();
Route::get('/perfil', 'LearnController@perfil')->name('perfil');
//Sistema de login com google,facebook...
Route::get('login/google', 'Auth\LoginController@redirectToProvider');
Route::get('login/google/callback', 'Auth\LoginController@handleProviderCallback');
