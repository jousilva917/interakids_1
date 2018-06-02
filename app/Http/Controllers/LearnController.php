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
        return view('learn.perfil');
    }
    public function taskLearn(TaskRequest $request)
    {
        $task = new TaskLog;
        $task->user_id = auth()->user()->id;
        $task->task_id = $request->input('task_id');
        $task->completed = 0;
        $task->save();

        return redirect()->action('LearnController@task');
    }
    public function isleOne( ){
        $task = Task::orderBy('id', 'ASC')->paginate(5);
        return view('learn.isleOne')->with('task',$task);
    }
    public function task($id)
    {
        $task = Task::find($id);
        return view('learn.task')->with('task',$task);
    }
}