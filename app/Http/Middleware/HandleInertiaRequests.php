<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */

     private function activePlan()
     {
        $activePlan = Auth::user() ? Auth::user()->lastActiveUserSubscription : null;

        if(!$activePlan) {
            return null;
        }

        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subscriptionPlan->active_period_in_months);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        // $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());
        $elapsedDays = Carbon::parse($activePlan->updated_at)->diffInDays(Carbon::now());
        $remainingActiveDays = max(floor($activeDays - $elapsedDays), 0);

        return [
            'name' => $activePlan->subscriptionPlan->name,
            'remainingActiveDays' => $remainingActiveDays,
            'activeDays' => $activeDays,
        ];
     }


     public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                ] : null,
            ],
            'activePlan' => $this->activePlan(), // Kirim activePlan ke frontend
        ]);
    }
}
