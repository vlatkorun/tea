<?php

namespace App\Models;

use App\Contracts\Models\ModelInterface;
use Illuminate\Database\Eloquent\Model;
use App\Contracts\Models\HashTagModelInterface;
use App\Contracts\Models\TweetModelInterface;

class HashTag extends Model implements HashTagModelInterface, ModelInterface
{
    protected $table = 'hashtags';

    protected $fillable = [
        'tweet_id',
        'value',
    ];

    public function getId() : int {
        return (int) $this->id;
    }

    public function getValue() : string {
        return $this->value;
    }

    public function getTweet() : TweetModelInterface {
        return $this->tweet;
    }

    public function tweet() {
        return $this->belongsTo(Tweet::class);
    }
}