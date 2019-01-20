<?php

namespace App\Repositories\Tweets;

use Illuminate\Support\Collection;
use App\Contracts\Models\TweetModelInterface;
use App\Contracts\Repositories\Tweets\TweetsRepositoryInterface;
use App\Repositories\AbstractEloquentRepository;
use App\Models\Tweet;
use Illuminate\Support\Facades\DB;
use Exception;
use App\Repositories\Tweets\Eloquent\Filters\Filter;

class TweetsEloquentRepository extends AbstractEloquentRepository implements TweetsRepositoryInterface
{
    protected $allowedInput = [
        'text',
        'twitter_id',
        'twitter_created_at',
        'keyword',
    ];

    protected $filter = Filter::class;

    protected function getModel() {
        return new Tweet;
    }

    public function getTweets(array $options = []) : Collection {
        return $this->get($options);
    }

    public function getTweetById($id, array $options = []) : ?TweetModelInterface {
        return $this->getById($id, $options);
    }

    public function createTweet(array $params) : TweetModelInterface {

        DB::beginTransaction();

        try {

            $tweet = $this->getModel();

            $tweet->fill($this->filterAllowedInput($params));
            $tweet->save();

        } catch(Exception $e) {

            DB::rollBack();

            throw $e;
        }

        DB::commit();

        return $tweet;
    }

    public function updateTweet(TweetModelInterface $tweet, array $params) : TweetModelInterface {

    }

    public function deleteTweet(TweetModelInterface $tweet, array $params = []) : bool {

    }
}