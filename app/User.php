<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function taskLog()
    {
        return $this->hasMany('App\TaskLog');
    }
    public function charlog()
    {
        return $this->hasMany('App\Charlog');
    }
    public function gain_stars($stars)
    {
        $this->stars += $stars;
        $this->save();
    }
}