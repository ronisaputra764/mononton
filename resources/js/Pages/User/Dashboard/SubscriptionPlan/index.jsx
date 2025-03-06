import Sidebar from "@/Layouts/Authenticated/Sidebar";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head, router } from "@inertiajs/react";
import { route } from "ziggy-js";
import Authenticated from "@/Layouts/Authenticated";

export default function SubscriptionPlan({ subscriptionPlans }) {

    const onSelectSubscription = (id) => {
        router.post(route('user.dashboard.subscriptionPlan.userSubscribe', {
            id 
        }))
    }

    return (
        <>
            <Authenticated>
            <Head>
                <title>Subscription</title>
            </Head>
            
            <div className="ml-[300px] px-[50px]">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-white font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>

                    <div className="flex justify-center gap-10 mt-[70px]">
                        {subscriptionPlans.map((subscriptionPlan) => (
                            <SubscriptionCard
                            name={subscriptionPlan.name}
                            price={subscriptionPlan.price}
                            durationInMonth={subscriptionPlan.active_period_in_months}
                            features={JSON.parse(subscriptionPlan.featured)}
                            isPremium={subscriptionPlan.name === 'Premium'}
                            key={subscriptionPlan.id}
                            onSelectSubscription={() => onSelectSubscription(subscriptionPlan.id)}
                        />
                        ))}
                        
                    </div>
                </div>
            </div>  
            </Authenticated>
        </>
    );
}