<?php

namespace App\Listeners\Tweets;

use App\Listeners\Listener;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Events\Tweets\TweetsFetchedFromTwitterApi;
use App\Events\Tweets\AnalyzeTweet;
use App\Contracts\Repositories\Tweets\TweetsRepositoryInterface;
use App\Contracts\Repositories\HashTags\HashTagsRepositoryInterface;
use App\Contracts\Models\TweetModelInterface;
use Carbon\Carbon;

class SaveNewTweetsFromApiToDatabase extends Listener implements ShouldQueue
{
    protected $tweetsRepository;

    protected $hashTagsRepository;

    public function __construct(TweetsRepositoryInterface $tweetsRepository, HashTagsRepositoryInterface $hashTagsRepository) {
        $this->tweetsRepository = $tweetsRepository;
        $this->hashTagsRepository = $hashTagsRepository;
    }

    public function handle(TweetsFetchedFromTwitterApi $event) {

        if(!empty($event->tweets)) {

            /* @var TweetModelInterface $latestSavedTweetForKeyword */
            $latestSavedTweetForKeyword = $this->tweetsRepository->getTweets([
                'filters' => [
                    'keyword' => $event->keyword
                ],
                'sort' => [
                    [
                        'key' => 'twitter_created_at',
                        'direction' => 'desc'
                    ]
                ],
                'limit' => 1
            ])->first();

            foreach($event->tweets as $tweetFromApi) {

                $tweetFromApi->created_at = Carbon::parse($tweetFromApi->created_at);

                if($latestSavedTweetForKeyword && $latestSavedTweetForKeyword->getTwitterCreatedAt()->gte($tweetFromApi->created_at)) {
                    continue;
                }

                $tweet = $this->tweetsRepository->createTweet([
                    'text' => $tweetFromApi->text,
                    'twitter_id' => $tweetFromApi->id_str,
                    'twitter_created_at' => date_create($tweetFromApi->created_at)->format('Y-m-d H:i:s'),
                    'keyword' => $event->keyword,
                ]);

                if(!empty($tweetFromApi->entities->hashtags)) {
                    foreach($tweetFromApi->entities->hashtags as $hashTag) {
                        $this->hashTagsRepository->createHashTag([
                            'tweet_id' => $tweet->getId(),
                            'value' => $hashTag->text,
                        ]);
                    }
                }

                event(new AnalyzeTweet($tweet, $event->clientId));
            }
        }
    }
}