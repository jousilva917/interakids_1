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
//LearnController
Route::get('/explore', 'HomeController@explore');
Route::get('/isle', 'LearnController@isle');
Route::get('/task/Learn', 'LearnController@taskLearn');
Route::get('/task/{id}','LearnController@task');
//Sistema de cadastro
Auth::routes();
Route::get('/perfil', 'LearnController@perfil')->name('perfil');
//Sistema de login com google,facebook...
//Route::get('auth/{provider}', 'Auth\LoginController@redirectToProvider');
//Route::get('auth/{provider}/callback', 'Auth\LoginController@handleProviderCallback');