<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubscriptionPlanController extends Controller
{
    public function index() 
    {
        $subscriptionPlans = SubscriptionPlan::all();
        return inertia('User/Dashboard/SubscriptionPlan/index', ['subscriptionPlans' => $subscriptionPlans]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan) 
    {
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->avtive_period_in_months),
            'payment_status' => 'paid'
        ];

        UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }
}
