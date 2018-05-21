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
    public function task(TaskRequest $request)
    {
        $tasks = $request->all();
        Task::Create($tasks);
        return redirect()->action('LearnController@perfil');
    }
    public function form()
    {
        return view('learn.create');
    }
    public function perfil()
    {
        $tasks = Task::all();
        return view('learn.perfil')->with('tasks', $tasks);
    }
}
