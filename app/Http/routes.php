<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/', function () {
    return view('index');
});
            
Route::get('/home', function () {
    return view('index');
});
Route::get('/products', function () {
    return view('index');
});
Route::get('/cart', function () {
    return view('index');
});

     
            
Route::get('/products/{product}', function () {
    return view('index');
});
      
            
Route::get('/errors/{error}', function () {
    return view('index');
});
      

            
Route::post('oauth/access_token', function() {
    return Response::json(Authorizer::issueAccessToken());
});

Route::post('register', 'UserHandler\UserController@registerUser');
Route::post('login', 'UserHandler\UserController@loginUser');
