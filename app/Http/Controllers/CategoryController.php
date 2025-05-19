<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();

        return Inertia::render('Categories/Index', [
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'color' => 'required|string|size:7', // Örn: #FF0000
        ]);

        Category::create($validated);

        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::findOrFail($id);

        return Inertia::render('Categories/Show', [
            'category' => $category,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Category::findOrFail($id);

        return Inertia::render('Categories/Edit', [
            'category' => $category,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'color' => 'required|string|size:7',
        ]);

        $category = Category::findOrFail($id);
        $category->update($validated);

        return redirect()->route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return redirect()->route('categories.index');
    }

    public function list(Request $request, Category $category)
    {
        $query = $category->tasks()->with('categories')->where('user_id', auth()->id());

        if ($request->status) {
            $query->where('status', $request->status);
        }

        if ($request->priority) {
            $query->where('priority', $request->priority);
        }

        // Sorting
        $sort = $request->sort ?: 'created_at';
        $direction = $request->direction ?: 'desc';
        $query->orderBy($sort, $direction);

        // Pagination
        $perPage = $request->per_page ?: 10;
        $tasks = $query->paginate($perPage)->withQueryString();

        return Inertia::render('Categories/TaskList', [
            'category' => $category,
            'tasks' => $tasks,
            'filters' => [
                'status' => $request->get('status') ?? '',
                'priority' => $request->get('priority') ?? '',
                'sort' => $request->get('sort') ?? 'created_at',
                'direction' => $request->get('direction') ?? 'desc',
                'per_page' => $request->get('per_page') ?? 10,
            ],
        ]);
    }
}
