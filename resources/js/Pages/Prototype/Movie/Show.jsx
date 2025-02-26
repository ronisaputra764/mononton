import { Head } from "@inertiajs/react";
import ReactPlayer from "react-player/youtube";

export default function Show() {
    return (
        <>
            <Head>
                <title>Movie name</title>
            </Head>
            <section className="mx-auto w-screen h-screen relative watching-page font-poppins bg-form-bg" id="stream">

                {/* <div className="pt-[100px]">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=TjPhzgxe3L0"
                        controls
                        width={"100%"}
                        height={"850px"}
                    />
                </div> */}


                <div className="pt-[100px]">
                    <video
                        width={"100%"}
                        height={"850px"}
                        controls
                        src="https://www.youtube.com/watch?v=1ti2YCFgCoI&list=RD1ti2YCFgCoI&start_radio=1"
                        type="video/mp4">
                    </video>
                </div>



                {/* <!-- Button back to dashboard --> */}
                <div className="absolute top-5 left-5 z-20">
                    <a onClick={() => window.history.back()}>
                        <img src="/icons/ic_arrow-left.svg" className="transition-all btn-back w-[46px]" alt="stream" />
                    </a>
                </div>

                {/* <!-- Video Title --> */}
                <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                    <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                        Details Screen Part Final
                    </span>
                </div>
            </section>
        </>
    );
}