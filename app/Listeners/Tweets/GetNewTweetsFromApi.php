<?php


namespace App\Listeners\Tweets;

use App\Listeners\Listener;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Events\Tweets\GetNewTweets;
use App\Events\Tweets\TweetsFetchedFromTwitterApi;
use App\Contracts\Services\Twitter\TwitterSearchServiceInterface;

class GetNewTweetsFromApi extends Listener implements ShouldQueue
{
    protected $twitterSearch;

    public function __construct(TwitterSearchServiceInterface $twitterSearch) {
        $this->twitterSearch = $twitterSearch;
    }

    public function handle(GetNewTweets $event) {
        event(new TweetsFetchedFromTwitterApi($this->twitterSearch->search([$event->keyword]), $event->keyword, $event->clientId));
    }
}