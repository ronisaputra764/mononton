<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movies;

class DashboardController extends Controller
{
    public function index() {

        $featuredMovies = Movies::whereIsFeatured(true)->get();
        $movies = Movies::all();

        return inertia('User/Dashboard/index', [
            'featuredMovies' => $featuredMovies,
            'movies' => $movies,
        ]);
    }
}
