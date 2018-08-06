<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use App\Task;
use Illuminate\Support\Facades\Auth;
use App\Notifications\RepliedtoThread;
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
    public function tasks(){
        $tasks = Task::all();
        return response()->json($tasks);
    }
    public function submit(Request $request)
    {
        $sent = $request->all();
        Contact::create($sent);
        auth()->user()->notify(new RepliedtoThread());
        return redirect('/contato');
    }
    public function picture(Request $request)
    {
        $fileExt = ['png', 'jpeg','jpg'];
        // Filename to store
        if(in_array(strtolower($request->file('image_file')->getClientOriginalExtension()),$fileExt)){
            // Upload image
            $fileNameToStore = $request->file('image_file')->getClientOriginalName();
            $path = $request->file('image_file')->storeAS('public/profile_image' , $fileNameToStore);
        }else{
            return reponse()->json(['error' => 'Formato não suportado']);
        }
        $user = Auth::user();
        $user->profile_image = $fileNameToStore;
        $user->save();
        return response()->json($fileNameToStore);
    }
}