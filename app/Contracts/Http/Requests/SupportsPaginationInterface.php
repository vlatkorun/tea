<?php

namespace App\Contracts\Http\Requests;

use App\Contracts\Http\Requests\Bags\BagInterface;

interface SupportsPaginationInterface
{
    public function extractPagination() : array;

    public function setPaginationBag(BagInterface $bag) : self;

    public function getPaginationBag() : BagInterface;
}