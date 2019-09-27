<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\UpdateProfileRequest;
use App\Http\Requests\ContactRequest; 
use App\User;
use App\Task;
use App\TaskLog;
use App\Notifications;
use App\Mail\VerifyMail;
use App\Mail\Contact;
use Mail;
use Hash;

class ProfileController extends Controller
{
    const email = 'raphaelcoelho46@gmail.com';

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function perfil(){
    $user_id = auth()->user()->id;
        $user = User::find($user_id);
        return view('profile.perfil')->with('tasks', $user->taskLog);
    }

    public function updateProfile(Request $request)
    {
        
        $messages = [];
        $extensions = ['png', 'jpg', 'jpeg'];

        $name = $request->name;
        $email = $request->email;
        $old_password = $request->old_password;
        $new_password = $request->new_password;

        if($name != '' && $name != auth()->user()->name){
            auth()->user()->name = $name;
            auth()->user()->save();
            $messages[] = ['status' => true, 'name' => 'Nome alterado com sucesso'];
        }

        if($email != '' && $email != auth()->user()->email){
            if(User::select('id')->where('email', $email)->limit(1)->first()){
                $messages[] = ['status' => false, 'email' => 'Email já existe'];
            }else{
            auth()->user()->email = $email;
            auth()->user()->save();
            $messages[] = ['status' => true, 'email' => 'Email alterado com sucesso'];
            }
        }   

        if($old_password != '' && $new_password != ''){
            if($old_password === $new_password && Hash::check($old_password, auth()->user()->password)){
                $messages[] = ['status' => false, 'password' => 'A senha nova precisa ser diferente da antiga'];
            }elseif(strlen($new_password) < 6 &&  Hash::check($old_password, auth()->user()->password)){
                $messages[] = ['status' => false, 'password' => 'A senha nova precisa ter pelo menos 6 caracteres'];
            }else if($old_password !== $new_password && Hash::check($old_password, auth()->user()->password)){
                auth()->user()->password = Hash::make($new_password);
                auth()->user()->save();
                $messages[] = ['status' => true, 'password' => 'Senha alterada com sucesso'];
            }else{
                $messages[] = ['status' => false, 'password' => 'Senha antiga inválida'];
            }
        }

        if($request->hasFile('profile_image')){
            if(in_array(strtolower($request->file('profile_image')->getClientOriginalExtension()), $extensions)) {
            $profile_pic = $request->file('profile_image')->getClientOriginalName();
            $path = $request->file('profile_image')->storeAS('public/profile_image' , $profile_pic);
            auth()->user()->profile_image = $profile_pic;
            auth()->user()->save();
            $messages[] = ['status' => true, 'message' => 'Imagem de perfil alterada' ,'profile_image' => $profile_pic];
            }else{
            $messages[] = ['status' => false, 'message' => 'A imagem precisa ter o formato png, jpeg ou jpg'];
            }
        }
        
        return response()->json($messages);
    }

    public function removePicture()
    {
        $user = auth()->user();
            if($user->profile_image != 'noimage.png'){
                Storage::delete('public/profile_image/'. $user->profile_image);
            }
        $user->profile_image = 'noimage.png';
        $user->save();
    }

    public function notifications($id)
    {
        $not = Notifications::find($id);
        $not->markAsRead();
        $not->save();
    }

    public function report(ContactRequest $request)
    {
    $data = ['email' => $request->email, 'subject' => $request->subject, 'message' => $request->message];

    $email = Mail::to(ProfileController::email)->send(new Contact($data));

        return response()->json(['status' => 'Enviado com sucesso']);
    }

}