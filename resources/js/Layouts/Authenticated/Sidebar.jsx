import { usePage } from "@inertiajs/react";
import SubscriptionDetail from "./SubscriptionDetail";
import MenuItem from "./MenuItem";
import { UserMenu, UserOthers } from "./MenuList";
import "../../../css/sidebar.css";
import { route } from "ziggy-js";

export default function Sidebar({ activePlan }) {
    
    const { url } = usePage();

    return (
        <aside className="fixed z-50 w-[300px] h-full">

            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-400 overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton-white.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">

                    {/* <!-- Menu --> */}
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        
                        {UserMenu.map((menu, index) => (
                            <MenuItem
                                key={index}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={menu.link && route().current(menu.link)}
                            />
                        ))}
                        
                    </div>
                    {/* <!-- ./Menu --> */}

                    {/* <!-- Others --> */}
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Others</div>
                       
                        {UserOthers.map((menu, index) => (
                            <MenuItem
                                key={index}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={menu.link && route().current(menu.link)}
                                method={menu.method}
                            />
                        ))}
                        
                    </div>
                    {/* <!-- ./Others --> */}

                    {activePlan && (
                        <SubscriptionDetail
                            name={activePlan.name}
                            isPremium={activePlan.name === 'Premium'}
                            remainingActiveDays={activePlan.remainingActiveDays}
                            activeDays={activePlan.activeDays}
                        />
                    )}
                   
                </div>
            </div>
        </aside>
    );
}