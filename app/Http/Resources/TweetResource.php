<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Http\Resources\MissingValue;

class TweetResource extends Resource
{
    public function toArray($request) {
        return [
            'id' => $this->getId(),
            'twitter_id' => $this->getTwitterId(),
            'text' => $this->getText(),
            'keyword' => $this->getKeyword(),
            'twitter_created_at' => $this->getTwitterCreatedAt()->format('d.m.Y H:i:s'),
            'created_at' => $this->created_at->format('d.m.Y H:i:s'),
            'hashtags' => HashTagResource::collection($this->whenLoaded('hashtags')),
            'entities' => EntityResource::collection($this->whenLoaded('entities')),
        ];
    }
}