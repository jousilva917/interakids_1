<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaskLog extends Model
{
    protected $table = 'tasklog';
    public function task()
    {
        $this->belongsTo('App\Task');
    }
}
