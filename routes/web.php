<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/tasks', [TaskController::class, 'index'])->middleware('auth')->name('tasks.index');
Route::get('/tasks/create', [TaskController::class, 'create'])->middleware('auth')->name('tasks.create');
Route::post('/tasks', [TaskController::class, 'store'])->middleware('auth')->name('tasks.store');
Route::get('/tasks/{task}', [TaskController::class, 'show'])->middleware('auth')->name('tasks.show');
Route::get('/tasks/{task}/edit', [TaskController::class, 'edit'])->middleware('auth')->name('tasks.edit');
Route::put('/tasks/{task}', [TaskController::class, 'update'])->middleware('auth')->name('tasks.update');
Route::patch('/tasks/{task}', [TaskController::class, 'status'])->middleware('auth')->name('tasks.status');
Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->middleware('auth')->name('tasks.destroy');

Route::get('/categories', [CategoryController::class, 'index'])->middleware('auth')->name('categories.index');
Route::get('/categories/create', [CategoryController::class, 'create'])->middleware('auth')->name('categories.create');
Route::post('/categories', [CategoryController::class, 'store'])->middleware('auth')->name('categories.store');
Route::get('/categories/{category}', [CategoryController::class, 'show'])->middleware('auth')->name('categories.show');
Route::get('/categories/{category}/edit', [CategoryController::class, 'edit'])->middleware('auth')->name('categories.edit');
Route::put('/categories/{category}', [CategoryController::class, 'update'])->middleware('auth')->name('categories.update');
Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->middleware('auth')->name('categories.destroy');

require __DIR__.'/auth.php';
