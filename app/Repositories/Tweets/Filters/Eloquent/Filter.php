<?php

namespace App\Repositories\Tweets\Eloquent\Filters;

use Czim\Filter\Filter as Base;
use Czim\Filter\ParameterFilters\SimpleString;
use App\Repositories\Tweets\Filters\Eloquent\Strategies\Hashtag;

class Filter extends Base
{
    protected $filterDataClass = FilterData::class;

    protected function strategies() {
        return [
            'keyword' => SimpleString::class,
            'text' => SimpleString::class,
            'hashtag' => Hashtag::class,
        ];
    }
}