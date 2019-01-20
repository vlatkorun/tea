<?php

namespace App\Contracts\Http\Requests;

use App\Contracts\Http\Requests\Bags\BagInterface;

interface SupportsCreateOrUpdateInterface
{
    public function setBag(BagInterface $bag) : self;

    public function getBag() : BagInterface;

    public function extractParams() : array;
}