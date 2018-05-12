<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LearnController extends Controller
{
    public function aprenda()
    {
        return view('learn.index');
    }
    public function task(){
        return view('learn.task');
    }
}
