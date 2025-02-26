import Authenticated from "@/Layouts/Authenticated/index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1"
    };

    return (
        <Authenticated>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-gray-200 mb-4">Featured Movies</div>
                <Flickity options={flickityOptions} className="gap-[30px] __scroll-selector">
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie key={i} slug={"batman-movie"} name={"Batman Fall In Love"} category={"Comedy"} thumbnail={"/images/browse-1.png"} rating={2} />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[40px]">
                <div className="font-semibold text-[22px] text-gray-200 mb-4">Browse</div>
                <Flickity options={flickityOptions} className="__scroll-selector">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <MovieCard key={i} slug={"batman-movie"} name={"Batman Fall In Love"} category={"Comedy"} thumbnail={"/images/browse-1.png"} />
                    ))}

                </Flickity>
            </div>
        </Authenticated>
    );
};