<?php

namespace App\Filters;



use Illuminate\Support\Carbon;

class PostFilter extends QueryFilter
{
    public function categoryId($value){
        $this->builder->where('category_id', $value);
    }

    public function isPublish($value){
        $this->builder->where('is_publish', $value);
    }

    public function isVerify($value){
        $this->builder->where('is_verify', $value);
    }

    public function more($value){
        $this->builder->where('created_at', '>', Carbon::parse($value)->toDateString());
    }
    public function less($value){
        $this->builder->where('created_at', '<', Carbon::parse($value)->toDateString());
    }
}
