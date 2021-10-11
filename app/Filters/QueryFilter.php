<?php

namespace App\Filters;



use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

abstract class QueryFilter
{
    protected $request;

    protected $builder;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function apply(Builder $builder)
    {
        $this->builder = $builder;

        foreach ($this->fields() as $field => $value) {
            $method = Str::camel($field);
            if (method_exists($this, $method)) {
                call_user_func_array([$this, $method], (array)$value);
            }
        }

    }

    protected function fields(): array
    {

        $arr = array_map('trim', $this->request->all());
        $newArr = [];
        foreach ($arr as $key => $elem){
            if($elem || $elem === '0'){
                $newArr[$key] = $elem;
            }
        }
        return $newArr;
    }
}
