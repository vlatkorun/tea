<?php

namespace App\Models;

use App\Contracts\Models\TweetModelInterface;
use App\Contracts\Models\ModelInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Carbon\Carbon;

class Tweet extends Model implements TweetModelInterface, ModelInterface
{
    protected $table = 'tweets';

    protected $fillable = [
        'text',
        'twitter_id',
        'twitter_created_at',
        'keyword',
    ];

    protected $dates = ['twitter_created_at'];

    public function getHashTags() : Collection{
        return $this->hasMany(HashTag::class, 'tweet_id')->get();
    }

    public function getEntities() : Collection{
        return $this->hasMany(Entity::class, 'tweet_id')->get();
    }

    public function getId() : int {
        return (int) $this->id;
    }

    public function getTwitterId() : string {
        return (int) $this->twitter_id;
    }

    public function getText() : string {
        return $this->text;
    }

    public function getTwitterCreatedAt() : Carbon {
        return $this->twitter_created_at;
    }

    public function getKeyword() : string {
        return $this->keyword;
    }

    public function hashtags() {
        return $this->hasMany(HashTag::class, 'tweet_id');
    }

    public function entities() {
        return $this->hasMany(Entity::class, 'tweet_id');
    }
}