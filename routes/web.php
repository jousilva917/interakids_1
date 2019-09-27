<?php

//HomeController
Route::get('/', function(){
    return redirect()->action('HomeController@index');
});
Route::get('/home', 'HomeController@index');
Route::get('/sobre', 'HomeController@sobre');
Route::get('/explore', 'HomeController@explore');
Route::get('/contato', 'HomeController@contact');

//ProfileController
Route::get('/perfil', 'ProfileController@perfil')->name('perfil');
Route::post('/perfil/update', 'ProfileController@updateProfile')->name('updateProfile');
Route::post('/perfil/picture', 'ProfileController@updatePicture')->name('updatePic');
Route::get('/picture/remove', 'ProfileController@removePicture');
Route::get('/historico', 'ProfileController@history');
Route::post('/report', 'ProfileController@report');
//GameController
Route::get('/isle', 'GameController@taskIndex');
Route::get('/ilhas', 'GameController@isles')->middleware('verified');
Route::get('Ilha', 'GameController@task');
Route::post('/task/learn', 'GameController@taskComplete');
Route::get('/markAsRead', function(){
        auth()->user()->unreadnotifications->markAsRead();
});
//ContactController
Route::post('/submit', 'ContactController@contact');
//Sistema de cadastro
Auth::routes();
//Sistema de login com google
Route::get('login/google', 'Auth\LoginController@redirectToProvider');
Route::get('login/google/callback', 'Auth\LoginController@handleProviderCallback');
//Verifica o usuário
Route::get('user/verify/{token}', 'GameController@verifyUser');

//mensagens de erro
Route::get('/error', function(){
    return view('error');
});