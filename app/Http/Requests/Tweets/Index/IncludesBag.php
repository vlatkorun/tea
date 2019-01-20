<?php

namespace App\Http\Requests\Tweets\Index;

use App\Http\Requests\AbstractBag;
use App\Http\Requests\IncludesTrait;

class IncludesBag extends AbstractBag
{
    use IncludesTrait;

    protected function prepareAttributes() : array {
        return $this->parseIncludes(
            $this->request->get('include'),
            ['hashtags', 'entities']
        );
    }
}