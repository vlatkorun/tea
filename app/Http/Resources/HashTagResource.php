<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Http\Resources\MissingValue;

class HashTagResource extends Resource
{
    public function toArray($request) {
        return [
            'id' => $this->getId(),
            'value' => $this->getValue(),
        ];
    }
}