<?php

namespace InteraKids;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
        protected $table = 'tasks';

        public $primarykey = 'id';
        
        public $timestamps = false;

    public function user()
    {
        return $this->belongsTo('App\Task', 'aula_id');
    }    
}
