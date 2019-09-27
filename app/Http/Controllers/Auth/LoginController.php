<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Socialite;
use App\User;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/perfil';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function redirectToProvider()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    /**
     * Obtain the user information from Google.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback()
    {
        $user = Socialite::driver('google')->stateless()->user();
        $check_user = User::where('email', $user->getEmail())->first();
        if($check_user)
        {
            auth()->login($check_user);
            return redirect('/perfil');
        }
        $user_db = new User();
        $user_db->name = $user->getName();
        $user_db->email = $user->getEmail();
        $user_db->password = bcrypt('temp'.rand(1, 100000).env('APP_KEY').'temp');
        $user_db->token = str_random(40);
        $user_db->verified = true;
        $user_db->socialLogin = true;
        $user_db->save();
        auth()->login($user_db);
        return redirect('/perfil');
    }
}