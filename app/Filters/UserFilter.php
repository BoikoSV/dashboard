<?php

namespace App\Filters;

class UserFilter extends QueryFilter
{
    public function roleName($value){
        $this->builder->where('role_id', $value);
    }
}
