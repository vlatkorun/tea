<?php

namespace App\Http\Middleware;

use Closure;

class AddClientIdToSession
{
    public function handle($request, Closure $next, $guard = null)
    {
        if(!$request->session()->has('client_id')) {
            $request->session()->put('client_id', uniqid());
        }

        return $next($request);
    }
}