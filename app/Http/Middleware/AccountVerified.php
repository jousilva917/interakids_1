<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AccountVerified
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {   
        if(!auth()->user()->verified)
        {
            return redirect('/error')->with('status', 'Você precisa verficar sua conta.');
        }
            
            return $next($request); 
    }
}
