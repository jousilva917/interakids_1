<?php

namespace InteraKids\Http\Controllers;

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
        $this->middleware('auth', ['except' => ['index', 'sobre', 'contato']]);
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
    public function sobre()
    {
        return view('website.about');
    }
    public function perfil()
    {
        return view('learn.perfil');
    }
    public function contato()
    {
        return view('website.contato');
    }
}
