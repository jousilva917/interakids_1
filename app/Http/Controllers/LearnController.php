<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TaskRequest;
use App\User;
use App\Task;


class LearnController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function aprenda()
    {
        return view('learn.index');
    }
    public function perfil()
    {
        $user = User::all();
        return view('learn.perfil')->with('user', $user);
    }
    public function stars(){
        $star = auth()->user()->stars;
        return $star;
    }
}