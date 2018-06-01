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
        $isleOne = IsleOne::all();
        $isleTwo = IsleTwo::all();
        $isleThree = IsleThree::all();
        return view('learn.perfil')->with('isleone', $isleOne)->with('isletwo', $isleTwo)->with('islethree', $isleThree);
    }
    public function stars(){
        $star = auth()->user()->stars;
        return $star;
    }
}