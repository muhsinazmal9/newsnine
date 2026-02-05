<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function singleCategory()
    {
        return Inertia::render('SingleCategory');
    }

    public function searchResult()
    {
        return Inertia::render('SearchResult');
    }
}
