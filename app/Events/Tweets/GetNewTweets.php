<?php

namespace App\Events\Tweets;

use App\Events\Event;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Broadcasting\Channel;

class GetNewTweets extends Event implements ShouldBroadcast
{
    public $keyword;

    public $clientId;

    public function __construct(string $keyword, string $clientId) {
        $this->keyword = $keyword;
        $this->clientId = $clientId;
    }

    public function broadcastOn() {
        return new Channel('tweets');
    }

    public function broadcastWith() {
        return [
            'keyword' => $this->keyword,
            'timestamp' => time(),
            'client_id' => $this->clientId,
        ];
    }

    public function broadcastAs() {
        return 'FETCH_FROM_TWITTER_API_START';
    }
}