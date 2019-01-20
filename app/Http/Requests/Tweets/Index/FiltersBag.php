<?php

namespace App\Http\Requests\Tweets\Index;

use App\Http\Requests\AbstractBag;
use App\Http\Requests\FiltersTrait;

class FiltersBag extends AbstractBag
{
    use FiltersTrait;

    protected function prepareAttributes() : array
    {
        $params = $this->request->only([
            'text',
            'keyword',
            'twitter_created_at',
            'created_at',
            'hashtag',
        ]);

        foreach($params as $param => $value) {
            if(in_array($param, ['created_at', 'twitter_created_at']) && !is_array($value)) {
                $params[$param] = explode(',', $value);
            }
        }

        return $this->parseFilters(
            $params,
            [
                'text',
                'keyword',
                'twitter_created_at',
                'created_at',
                'hashtag',
            ]
        );
    }
}