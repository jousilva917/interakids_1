<?php

namespace InteraKids\Http\Controllers;

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
    public function task(TaskRequest $request)
    {
        $task_id = $request->id;

        $task_user = new TaskLog;
        $task_user->task_id = $task_id;
        $task_user->user_id = auth()->user()->id;
        $task = Task::select('level')->where('id', $request->id)->limit(1)->first();
        return $this->display_quest($task->level);
    }
    public function perfil()
    {

        return view('learn.perfil');
    }
}
