<?php

namespace App\Filters;


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
}
