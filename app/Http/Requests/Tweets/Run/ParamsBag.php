<?php

namespace App\Http\Requests\Tweets\Run;

use App\Http\Requests\AbstractBag;

class ParamsBag extends AbstractBag {
    protected function prepareAttributes() : array {
        return $this->request->validated();
    }
}