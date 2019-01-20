<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        \App\Events\Tweets\GetNewTweets::class => [
            \App\Listeners\Tweets\GetNewTweetsFromApi::class,
        ],
        \App\Events\Tweets\TweetsFetchedFromTwitterApi::class => [
            \App\Listeners\Tweets\SaveNewTweetsFromApiToDatabase::class,
        ],
        \App\Events\Tweets\AnalyzeTweet::class => [
            \App\Listeners\Tweets\AnalyzeTweet::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
