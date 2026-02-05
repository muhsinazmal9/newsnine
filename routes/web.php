<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::get('/news-detail', [NewsController::class, 'show'])->name('news.detail');
Route::get('/single-category', [HomeController::class, 'singleCategory'])->name('single.category');
Route::get('/search-result', [HomeController::class, 'searchResult'])->name('search.result');
