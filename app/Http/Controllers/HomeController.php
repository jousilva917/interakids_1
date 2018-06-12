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
    public function picture(Request $request, $id){

        if($request->hasFile('picture')){
        $filenameWithExt = $request->file('picture')->getClientOriginalName();
        //Get just file name
        $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        //Get just Ext
        $extension = $request->file('picture')->getClientOriginalExtension();
        // Filename to store
        $fileNameToStore = $filename.'_'.time().'.'.$extension;
        // Upload image
        $path = $request->file('picture')->storeAS('public/profile_image' , $fileNameToStore);

    } else {
      $fileNameToStore = 'noimage.png';  
    }
        $user = Auth::user();
        if($request->hasFile('picture')){
            $user->profile_image = $fileNameToStore;
        }
        $user->save();

        return redirect('/perfil');
    }
}