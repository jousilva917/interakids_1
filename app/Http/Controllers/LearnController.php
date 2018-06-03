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
    public function aprenda()
    {
        return view('learn.index');
    }
    public function perfil()
    {
        $task = Task::orderBy('id', 'ASC')->paginate(5);
        return view('learn.perfil')->with('task',$task);
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