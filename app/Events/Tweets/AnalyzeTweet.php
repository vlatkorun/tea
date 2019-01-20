<?php

namespace App\Events\Tweets;

use App\Events\Event;
use App\Contracts\Models\TweetModelInterface;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Broadcasting\Channel;

class AnalyzeTweet extends Event implements ShouldBroadcast
{
    public $tweet;

    public $clientId;

    public function __construct(TweetModelInterface $tweet, string $clientId) {
        $this->tweet = $tweet;
        $this->clientId = $clientId;
    }

    public function broadcastOn() {
        return new Channel('tweets');
    }

    public function broadcastWith() {
        return [
            'tweet' => $this->tweet,
            'timestamp' => time(),
            'client_id' => $this->clientId,
        ];
    }
}