import { Head, Link } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function Show({ movies }) {
    return (
        <>
            <Head>
                <title>{movies.name}</title>
            </Head>
            <section className="mx-auto w-screen h-screen relative watching-page font-poppins bg-form-bg" id="stream">

                <div className="pt-[100px]">
                    <video
                        width={"100%"}
                        height={"850px"}
                        controls
                        src={movies.video_url}
                        type="video/mp4">
                    </video>
                </div>

                {/* <!-- Button back to dashboard --> */}
                <div className="absolute top-5 left-5 z-20">
                    <Link href={route('user.dashboard.index')}>
                        <img src="/icons/ic_arrow-left.svg" className="transition-all btn-back w-[46px]" alt="stream" />
                    </Link>
                </div>

                {/* <!-- Video Title --> */}
                <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                    <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                        {movies.name}
                    </span>
                </div>
            </section>
        </> 
    );
}