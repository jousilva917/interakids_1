<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TaskRequest;
use App\Notifications\RepliedtoThread;
use App\User;
use App\Task;
use App\TaskLog;

class GameController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified')->except('verifyUser');
    }
    public function taskIndex()
    {
        $task = Task::all();
        return view('game.isle')->with('task',$task);
    }
    
    public function task(TaskRequest $request)
    {
        $task_id = $request->id;
        $user = auth()->user();
        $task = Task::find($task_id);
        $check = TaskLog::where('task_id', '=', $task_id)->where('user_id', $user->id)->get();
        
        if($user->tasksCompleted >= $task->requirement){
            return view('game.game')->with('task',$task)->with('check',$check);
        }else
            
        return redirect('/ilhas')->with('error','Acesso negado');
    }


    public function isles(){
        $isleOne = Task::where('level','<=', 5)->get();
        $isleTwo = Task::whereBetween('level',[6,10])->get();
        $isleThree = Task::where('level','>', 10)->get();
        return view('game.isles')->with('isleOne',$isleOne)
        ->with('isleTwo',$isleTwo)->with('isleThree',$isleThree);
    }

    public function taskComplete(Request $request)
    {
            $task_id = $request->id;
            $task = new TaskLog();
            $task->user_id = auth()->user()->id;
            $task->task_id = $task_id;
            $task->nameLevel = $request->nameLevel;

            if($task->check_if_exists()){

            $taskUpdate = TaskLog::where('user_id','=' , auth()->user()->id)
            ->where('task_id', '=', $task_id)->first();
            $taskUpdate->moves = $request->moves;
            $taskUpdate->save();
            }else{

            $task->moves = $request->moves;
            $task->completed = true;
            $task->save();  
            auth()->user()->notify(new RepliedtoThread($request->nameLevel));  
            auth()->user()->completed_tasks();
        }
    }
    public function verifyUser($token)
    {

        $user = User::where('token', '=', $token)->first();
        
        if(!$user->verified){
            $user->verified = true;
            $user->save();
            return redirect('/perfil')->with('success', "Seu email foi verificado com sucesso"); 
        }else{
            return redirect('/perfil')->with('error', "Seu email jรก foi verificado");
        }
    }
}