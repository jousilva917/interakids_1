<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index']]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('website.home');
    }
    public function perfil()
    {
<<<<<<< HEAD
        return view('learn.perfil');
=======
        return view('perfil');
>>>>>>> d41c6177bf0e06020866d54c15ec8231dc2dbe3a
    }
}
