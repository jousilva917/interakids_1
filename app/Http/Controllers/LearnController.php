<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TaskRequest;
use App\User;
use App\IsleOne;
use App\IsleTwo;
use App\IsleThree;


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
        
        return view('learn.perfil');
    }
    public function stars(){
        $star = auth()->user()->stars;
        return $star;
    }
}