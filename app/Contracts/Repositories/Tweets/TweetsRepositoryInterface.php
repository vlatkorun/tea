<?php

namespace App\Contracts\Repositories\Tweets;

use Illuminate\Support\Collection;
use App\Contracts\Models\TweetModelInterface;

interface TweetsRepositoryInterface
{
    public function getTweets(array $options = []) : Collection;
    public function getTweetById($id, array $options = []) : ?TweetModelInterface;
    public function createTweet(array $params) : TweetModelInterface;
    public function updateTweet(TweetModelInterface $tweet, array $params) : TweetModelInterface;
    public function deleteTweet(TweetModelInterface $tweet, array $params = []) : bool;
}