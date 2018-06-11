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
}
