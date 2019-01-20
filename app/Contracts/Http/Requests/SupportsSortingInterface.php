<?php

namespace App\Contracts\Http\Requests;

use App\Contracts\Http\Requests\Bags\BagInterface;

interface SupportsSortingInterface
{
    public function extractSorting() : array;

    public function setSortingBag(BagInterface $bag) : self;

    public function getSortingBag() : BagInterface;
}