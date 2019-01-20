<?php


namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Http\Resources\MissingValue;

class EntityResource extends Resource
{
    public function toArray($request) {
        return [
            'id' => $this->getId(),
            'name' => $this->getName(),
            'type' => $this->getType(),
        ];
    }
}