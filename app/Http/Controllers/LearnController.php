<?php

namespace InteraKids\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Task;
use App\TaskLog;

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
    public function task(){
        return view('learn.task');
    }
    public function perfil()
    {

        return view('learn.perfil');
    }
}
