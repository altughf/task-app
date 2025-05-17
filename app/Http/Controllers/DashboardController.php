<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Category;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $userId = auth()->id();
        
        return Inertia::render('Dashboard', [
            'taskCount'         => Task::where('user_id', $userId)->count(),
            'pendingCount'      => Task::where('user_id', $userId)->where('status', 'pending')->count(),
            'inProgressCount'   => Task::where('user_id', $userId)->where('status', 'in_progress')->count(),
            'completedCount'    => Task::where('user_id', $userId)->where('status', 'completed')->count(),
            'cancelledCount'    => Task::where('user_id', $userId)->where('status', 'cancelled')->count(),
            'categoryCount'     => Category::count(),
        ]);
    }
}
