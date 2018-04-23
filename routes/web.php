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
Route::get('/' , function () {
    return '(/layouts/website)';
});
Route::resource('home', 'homeController');
Route::get('/about', 'homeController@getAbout')->name('about');
Route::get('/contact', 'homeController@getContact')->name('contact');
Route::get('/explore', 'exploreController@getExplore')->name('explore');
Route::get('/learn', 'learnControllerr@getLearn')->name('learn');

