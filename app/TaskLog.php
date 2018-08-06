<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaskLog extends Model
{
    protected $table = 'tasklog';

    private function user_task_exists()
    {
        return self::where('task_id', $this->task_id)->where('user_id', $this->user_id)->limit(1)->first();
    }
    public function complete_tasks()
    {
        $task = $this->user_task_exists();
        if($task && $task->completed == false){
            $task->completed = true;
            return $task->save();
        }else{
            return false;
        }

    } 

    public function task_info()
    {
        return $this->belongsTo('App\Task', 'task_id');
    }
    public static function is_completed_task($task_id, User $user)
    {
        if(self::select('user_id')->where('task_id',$task_id)->where('user_id', $user_id)->where('completed',
        true)->first()){
            return true;
        }else{
            return false;
        }
    }

}