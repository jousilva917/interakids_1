<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
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
    public function submit(Request $request)
    {
        $sent = $request->all();
        Contact::create($sent);
        return redirect()->action('HomeController@contact')->with('success','Enviado com sucesso');
    }
}