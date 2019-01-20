<?php

namespace App\Repositories\Tweets\Eloquent\Filters;

use Czim\Filter\FilterData as Base;

class FilterData extends Base
{
    protected $rules = [
        'keyword'   => 'string',
        'text'   => 'string',
        'hashtag'   => 'string',
    ];

    protected $defaults = [
        'keyword' => null,
        'text' => null,
        'hashtag' => null,
    ];
}