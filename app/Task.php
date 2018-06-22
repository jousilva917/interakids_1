<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table = 'task';
    
    public function tasklog()
    {
        $this->belongsTo('App\TaskLog');
    }
    public static function post()
    {
        $task = self::where('stars_required', '>', 0)->get();

        return $task;
    }
}