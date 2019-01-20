<?php


namespace App\Http\Requests\Tweets\Index;

use App\Http\Requests\AbstractBag;
use App\Http\Requests\SortingTrait;

class SortingBag extends AbstractBag
{
    use SortingTrait;

    protected function prepareAttributes() : array {
        return $this->parseSorting(
            $this->request->get('sort') ? $this->request->get('sort') : 'created_at:desc',
            ['created_at', 'twitter_created_at']
        );
    }
}