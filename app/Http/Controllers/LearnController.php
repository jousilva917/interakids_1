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
        $task = Task::whereIn('id', [1,12,23])->get();
        return view('learn.perfil')->with('task',$task);
    }
    public function stars(){
        $star = auth()->user()->stars;
        return $star;
    }
}