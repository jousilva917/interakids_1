<?php

namespace InteraKids;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
        protected $table = 'tasks';

        public $primarykey = 'idAula';
        
        public $timestamps = true;

    public function user()
    {
        return $this->belongsTo('App\User');
    }    
}
