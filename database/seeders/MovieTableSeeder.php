<?php

namespace Database\Seeders;

use App\Models\Movies;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $movies = [
            [
                'name' => 'Batman Fall In Love',
                'slug' => 'the-dark-knight',
                'category' => 'Action, Crime, Drama',
                'video_url' => 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
                'thumbnail' => 'https://fordhamobserver.com/wp-content/uploads/2022/03/the-batman-movie-robert-pattinson-zoe-kravitz-catwoman-500x500-1.jpg',
                'rating' => 9.0,
                'is_featured' => true
            ],
            [
                'name' => 'Coco',
                'slug' => 'coco-movie',
                'category' => 'Sci-Fi, Thriller',
                'video_url' => 'https://www.youtube.com/watch?v=YoHD9XEInc0',
                'thumbnail' => 'https://lumiere-a.akamaihd.net/v1/images/image_57ecff16.jpeg?region=0,0,640,480',
                'rating' => 8.8,
                'is_featured' => false
            ],
            [
                'name' => 'Deadpool',
                'slug' => 'deadpool',
                'category' => 'Adventure, Drama, Sci-Fi',
                'video_url' => 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png',
                'rating' => 8.6,
                'is_featured' => false
            ]
        ];
        Movies::insert($movies);
    }
}
