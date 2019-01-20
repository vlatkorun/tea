<?php

namespace App\Http\Requests;

trait FiltersTrait
{
    protected function parseFilters($filters, array $allowed = []) {

        if(is_string($filters)) {
            $filters = explode(',', $filters);
        }

        if(!is_array($filters)) {
            return [];
        }

        return array_filter($filters, function($value, $key) use ($allowed) {
            return in_array($key, $allowed);
        }, ARRAY_FILTER_USE_BOTH);
    }
}