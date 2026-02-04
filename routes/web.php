<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;

Route::get('/', [HomeController::class, 'index']);
Route::get('/news-detail', [NewsController::class, 'show'])->name('news.detail');
Route::get('/single-category', [HomeController::class, 'singleCategory'])->name('single.category');

