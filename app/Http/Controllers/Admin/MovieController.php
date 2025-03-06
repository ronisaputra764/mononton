<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;
use App\Http\Requests\Admin\Movie\Store;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/Movie/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validate();

        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['name']);
        Movies::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Movie inserted successfully',
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Movies $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movies $movie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movies $movies)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movies $movies)
    {
        //
    }
}
