<?php

namespace App\Http\Requests\Tweets\Index;

use App\Http\Requests\AbstractBag;
use App\Http\Requests\PaginationTrait;

class PaginationBag extends AbstractBag
{
    use PaginationTrait;

    protected function prepareAttributes() : array {
        return $this->parsePagination(
            $this->request->get('page'),
            $this->request->get('limit')
        );
    }
}