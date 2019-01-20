<?php

namespace App\Contracts\Http\Requests;

use App\Contracts\Http\Requests\Bags\BagInterface;

interface SupportsFilteringInterface
{
    public function extractFilters() : array;

    public function setFiltersBag(BagInterface $bag) : self;

    public function getFiltersBag() : BagInterface;
}