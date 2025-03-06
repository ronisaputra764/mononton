import Authenticated from "@/Layouts/Authenticated/index";
import Flickity from "react-flickity-component";
import { Head, usePage } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({ featuredMovies, movies }) {


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
                    {featuredMovies.map(($featuredMovie) => (
                        <FeaturedMovie
                            key={$featuredMovie.id}
                            slug={$featuredMovie.slug}
                            name={$featuredMovie.name}
                            category={$featuredMovie.category}
                            thumbnail={$featuredMovie.thumbnail}
                            rating={$featuredMovie.rating}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[40px]">
                <div className="font-semibold text-[22px] text-gray-200 mb-4">Browse</div>
                <Flickity options={flickityOptions} className="__scroll-selector">
                    {movies.map(($movie) => (
                        <MovieCard
                            key={$movie.id}
                            slug={$movie.slug}
                            name={$movie.name}
                            category={$movie.category}
                            thumbnail={$movie.thumbnail}
                        />
                    ))}

                </Flickity>
            </div>
        </Authenticated>
    );
};  