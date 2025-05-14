<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'color',
    ];

    // many-to-many
    public function tasks()
    {
        return $this->belongsToMany(Task::class, 'task_category');
    }
}
