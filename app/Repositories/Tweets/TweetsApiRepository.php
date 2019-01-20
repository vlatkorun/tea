<?php

namespace App\Repositories\Tweets;

use App\Contracts\Repositories\Tweets\TweetsRepositoryInterface;
use App\Contracts\Services\Twitter\TwitterSearchServiceInterface;

class TweetsApiRepository implements TweetsRepositoryInterface
{
    protected $twitterSearch;

    public function __construct(TwitterSearchServiceInterface $twitterSearch) {
        $this->twitterSearch = $twitterSearch;
    }
}