<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
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
    public function contact()
    {
        return view('website.contact');
    }
    public function submit()
    {
        return redirect()->action('HomeController@contact');
    }
}