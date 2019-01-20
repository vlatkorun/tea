<?php

namespace App\Http\Requests;

trait SortingTrait
{
    protected function parseSorting($sort, array $allowed = []) {

        if(is_string($sort)) {
            $sort = explode(',', $sort);
        }

        if(!is_array($sort)) {
            return [];
        }

        $return = [];

        foreach($sort as $value) {

            $parts = explode(':', $value);

            if(is_array($parts) && count($parts) === 2 && in_array($parts[0], $allowed) && in_array($parts[1], ['asc', 'desc']))  {
                $return[] = ['key' => $parts[0], 'direction' => $parts[1]];
            }
        }

        return $return;
    }
}