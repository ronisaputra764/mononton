import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { usePage } from '@inertiajs/react';

export default function Authenticated({ children }) {
    const { activePlan, auth } = usePage().props; // Ambil activePlan dari props

    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Start Sidebar */}
                <Sidebar activePlan={activePlan}/>
                {/* End Sidebar */}

                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        <Topbar user={auth.user?.name}/>
                        <main>{children}</main>
                    </div>
                </div>
            </div>

            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}