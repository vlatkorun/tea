<?php

namespace App\Contracts\Http\Requests\Bags;

interface BagInterface
{
    public function attributes() : array;
}