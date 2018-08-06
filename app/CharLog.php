<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CharLog extends Model
{
    protected $table = 'charlog';

    public function char()
    {
        return $this->belongsTo('App\Char');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
