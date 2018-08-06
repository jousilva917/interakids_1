<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table = 'task';
    
    public $timestamps = false;

    public function tasklog()
    {
        return $this->belongsTo('App\TaskLog');
    }
    public static function post()
    {
        $user_id = auth()->user()->id;
        $task = self::join('tasklog','task.id', '=', 'tasklog.task_id')
        ->select(['task.id','name','description','level','isle','stars_reward','stars_required'])
        ->where('tasklog.user_id',$user_id)
        ->where('tasklog.completed',false)->get();

        return $task;
    }
}