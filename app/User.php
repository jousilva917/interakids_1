<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use App\Mail\ResetPassword as ResetPasswordNotification;
use Mail;
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
        'name', 'email', 'password', 'token'
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

    public function completed_tasks()
    {
        $this->tasksCompleted += 1;
        $this->stars += 3;
        $this->save();
    }

    public function sendPasswordResetNotification($token)
    {        
        //$this->notify(new ResetPasswordNotification($token));
        Mail::to($this->email)->send(new ResetPasswordNotification($token)); 
    }

}