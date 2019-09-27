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

    public static function available_tasks()
    {
        $task = self::join('tasklog', 'task.id', '=', 'tasklog.task_id')
        ->where('completed', false)->get();
        return $task;
    }
}