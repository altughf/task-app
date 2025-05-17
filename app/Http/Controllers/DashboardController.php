<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Category;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'taskCount' => Task::where('user_id', auth()->id())->count(),
            'categoryCount' => Category::count(),
        ]);
    }
}
