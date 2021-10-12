<?php

namespace App\Models;

use App\Filters\QueryFilter;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory, Sluggable;

    public function posts(){
        return $this->hasMany(Post::class);
    }

    public function getDateCreatedAttribute(){
        return $this->created_at->format('d.m.Y');
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'category_name'
            ]
        ];
    }

    public function scopeFilter(Builder $builder, QueryFilter $filter)
    {
        $filter->apply($builder);
    }
}
