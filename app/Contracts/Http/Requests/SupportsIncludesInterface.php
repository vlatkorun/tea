<?php

namespace App\Contracts\Http\Requests;

use App\Contracts\Http\Requests\Bags\BagInterface;

interface SupportsIncludesInterface
{
    public function extractIncludes() : array;

    public function setIncludesBag(BagInterface $bag) : SupportsIncludesInterface;

    public function getIncludesBag() : BagInterface;
}