<?php

namespace App\Events\Tweets;

use App\Events\Event;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Broadcasting\Channel;

class TweetsFetchedFromTwitterApi extends Event implements ShouldBroadcast
{
    public $tweets = [];

    public $keyword;

    public $clientId;

    public function __construct(array $tweets, string $keyword, string $clientId) {
        $this->tweets = $tweets;
        $this->keyword = $keyword;
        $this->clientId = $clientId;
    }

    public function broadcastOn() {
        return new Channel('tweets');
    }

    public function broadcastWith() {
        return [
            'keyword' => $this->keyword,
//            'tweets' => $this->tweets,
            'timestamp' => time(),
            'client_id' => $this->clientId,
        ];
    }

    public function broadcastAs() {
        return 'FETCH_FROM_TWITTER_API_FINISH';
    }
}