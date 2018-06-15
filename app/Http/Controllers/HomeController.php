<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use Illuminate\Support\Facades\Auth;
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
    public function explore()
    {
        return view('website.explore');
    }
    public function submit(Request $request)
    {
        $sent = $request->all();
        Contact::create($sent);
        return redirect()->action('HomeController@contact')->with('success','Enviado com sucesso');
    }
    public function picture(Request $request)
    {
        $fileExt = ['png', 'jpeg','jpg'];
        // Filename to store
        if(in_array(strtolower($request->file('picture')->getClientOriginalExtension()),$fileExt)){
            // Upload image
            $fileNameToStore = $request->file('picture')->getClientOriginalName();
            $path = $request->file('picture')->storeAS('public/profile_image' , $fileNameToStore);
        }else{
            return redirect()->action('LearnController@perfil')->with('Insira uma imagem com os seguintes formatos', 'error');
        }
        $user = Auth::user();
        $user->profile_image = $fileNameToStore;
        $user->save();
        return redirect()->action('LearnController@perfil');
    }
}