<?php

namespace App\Filters;

class CommentFilter extends QueryFilter
{
    public function isPublish($value)
    {
        $this->builder->where('is_publish', '=', $value);
    }
}
