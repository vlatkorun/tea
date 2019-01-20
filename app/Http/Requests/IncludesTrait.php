<?php

namespace App\Http\Requests;

trait IncludesTrait
{
    protected function parseIncludes($includes, array $allowed = []) : array {

        if(is_string($includes)) {
            $includes = explode(',', $includes);
        }

        if(!is_array($includes)) {
            return [];
        }

        return array_filter($includes, function($value, $key) use ($allowed) {
            return in_array($value, $allowed);
        }, ARRAY_FILTER_USE_BOTH);
    }
}