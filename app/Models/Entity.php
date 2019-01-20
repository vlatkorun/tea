<?php

namespace App\Models;

use App\Contracts\Models\EntityModelInterface;
use App\Contracts\Models\ModelInterface;
use Illuminate\Database\Eloquent\Model;
use App\Contracts\Models\TweetModelInterface;

class Entity extends Model implements EntityModelInterface, ModelInterface
{
    protected $table = 'entities';

    protected $fillable = [
        'tweet_id',
        'type',
        'name',
        'json_result',
    ];

    public function getId() : int {
        return (int) $this->id;
    }

    public function getName() : string {
        return $this->name;
    }

    public function getType() : string {
        return $this->type;
    }

    public function getTweet() : TweetModelInterface {
        return $this->tweet;
    }

    public function tweet() {
        return $this->belongsTo(Tweet::class);
    }
}