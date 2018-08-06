<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TaskRequest;
use App\User;
use App\Task;
use App\Char;
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
        return view('tasks.isle')->with('task',$task);
    }
    public function task(TaskRequest $request)
    {
        $task_id = $request->id;
        $task_level = $request->level;
        $task = new TaskLog();
        $task->user_id = auth()->user()->id;
        $task->task_id = $task_id;
        $task = Task::find($task_id);
        $check = TaskLog::where('task_id', '=', $task_id)->where('user_id', auth()->user()->id)->get();
        if(auth()->user()->stars >= $task->stars_required){
            return view('tasks.task')->with('task',$task)->with('check',$check);
        }
            return redirect('/isle')->with('error','Acesso negado');
    }
    public function taskComplete(Request $request)
    {
        $task_id = $request->id;
        $task = new TaskLog();
        $task->user_id = auth()->user()->id;
        $task->task_id = $task_id;
        $task->completed = true;
        $task->save();
        $this->reward($task, auth()->user());
        return redirect("/isle");
    }   
    public function reward(TaskLog $rw, User $user){
        $user->gain_stars($rw->task_info->stars_reward);
    }
}