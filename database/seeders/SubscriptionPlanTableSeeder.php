<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'featured' => json_encode(['Feature 1', 'Feature 2']),  
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_months' => 6,
                'featured' => json_encode(['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']),  
            ]
        ];

        SubscriptionPlan::insert($subscriptionPlans);      
    }
}
