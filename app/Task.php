<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
        protected $table = 'task';
        public $primarykey = 'id';
        public $timestamps = true;
        protected $fillable = ['titulo', 'texto','user_id'];
        public function user()
        {
        return $this->belongsTo('App\User');
        }    
}
