<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'status',
        'priority',
        'due_date',
    ];

    // many-to-many
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'task_category');
    }
}
