<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Contracts\Http\Requests\Bags\BagInterface;

abstract class AbstractBag implements BagInterface
{
    protected $attributes = [];

    protected $request;

    public function __construct(FormRequest $request, array $attributes = [])
    {
        $this->attributes = $attributes;
        $this->request = $request;
    }

    public function attributes() : array
    {
        return array_filter($this->prepareAttributes(), function($value, $key) {
            return !is_null($value);
        }, ARRAY_FILTER_USE_BOTH);
    }

    abstract protected function prepareAttributes() : array;
}