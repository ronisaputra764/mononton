<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $status): Response
    {
        if($status == 'false' && !Auth::user()->isActive) {
            return redirect(route('user.dashboard.subscriptionPlan.index'));
        }

        if($status == 'true' && Auth::user()->isActive) {
            return redirect(route('user.dashboard.index'));
        }

        return $next($request);

        // $user = Auth::user();

        // // Jika user belum login, redirect ke halaman login
        // if (!$user) {
        //     return redirect(route('login'));
        // }

        // // Cek apakah user memiliki subscription yang masih aktif
        // if (!$user->isActive) {
        //     return redirect(route('user.dashboard.subscriptionPlan.index'));
        // }

        // // Jika user masih aktif, arahkan ke dashboard
        // return redirect(route('user.dashboard.index'));
    }
}
