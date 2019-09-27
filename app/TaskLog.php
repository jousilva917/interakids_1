<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TaskLog extends Model
{
    protected $table = 'tasklog';

    public function check_if_exists()
    {
        try {
            self::where('user_id','=' , auth()->user()->id)
            ->where('task_id', '=', $this->task_id)->firstOrFail();
        } catch (ModelNotFoundException $e) {
            return false;
        }
       return true;
    }
     
    public function task_table()
    {
        return $this->belongsTo('App\Task', 'task_id');
    }
}