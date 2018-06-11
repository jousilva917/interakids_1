<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TaskRequest;
use App\User;
use App\Task;
use App\TaskLog;


class LearnController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function perfil()
    {
        
        return view('learn.perfil');
    }
    public function isle()
    {
        $task = Task::all();
        return view('learn.isle')->with('task',$task);
    }
    public function taskLearn(TaskRequest $request)
    {
        $task_id = $request->id;  
        $task = new TaskLog();
        $task->user_id = auth()->user()->id;
        $task->task_id = $task_id;
        $task->completed = 0;

        return view('learn.task');
    }
    public function task($id)
    {
       $task = Task::find($id); 
       return view('learn.task')->with('task',$task);
           
    }   
}