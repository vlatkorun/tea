<?php

namespace App\Repositories\Tweets\Filters\Eloquent\Strategies;

use Czim\Filter\Contracts\ParameterFilterInterface;
use Czim\Filter\Contracts\FilterInterface;

class Hashtag implements ParameterFilterInterface
{
    public function apply($name, $value, $query, FilterInterface $filter) {
        return $query->whereHas('hashtags', function($query) use ($value) {
            $query->where('value', $value);
        });
    }
}