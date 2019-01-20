<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class TweetsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register() {

        $this->app->bind(\App\Contracts\Services\Twitter\TwitterServiceBuilderInterface::class, function ($app) {
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            return $app->make(\App\Services\Twitter\TwitterServiceBuilder::class);
        });

        $this->app->bind(\App\Contracts\Repositories\Tweets\TweetsRepositoryInterface::class, function ($app) {
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            return $this->app->make(\App\Repositories\Tweets\TweetsEloquentRepository::class);
        });

        $this->app->resolving(\App\Contracts\Services\Twitter\TwitterServiceBuilderInterface::class, function($builder, $app) {

            /* @var \App\Contracts\Services\Twitter\TwitterServiceBuilderInterface $builder */
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            $builder->setOAuth([
                'consumer_key' => config('services.twitter.consumer_key'),
                'consumer_secret' => config('services.twitter.consumer_secret'),
                'token' => config('services.twitter.token'),
                'token_secret' => config('services.twitter.token_secret'),
            ])
            ->setBaseUrl(config('services.twitter.api_url'));
        });

        $this->app->bind(\App\Contracts\Services\Twitter\TwitterSearchServiceInterface::class, function ($app) {

            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            /* @var \App\Contracts\Services\Twitter\TwitterServiceBuilderInterface $builder */
            $builder = $app->make(\App\Contracts\Services\Twitter\TwitterServiceBuilderInterface::class);

            return $builder->buildSearchService()
                ->setUrl(config('services.twitter.search_endpoint_url'))
                ->setResultType('recent')
                ->setCount(50)
                ->setLanguage('en')
                ->setIncludeEntities(true);
        });

        $this->app->resolving(\App\Http\Requests\Tweets\Run\Request::class, function($request, $app) {
            /* @var \App\Http\Requests\Tweets\Run\Request $request */
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            $request->setBag($app->make(\App\Http\Requests\Tweets\Run\ParamsBag::class, ['request' => $request]));
        });

        $this->app->when(\App\Listeners\Tweets\SaveNewTweetsFromApiToDatabase::class)
            ->needs(\App\Contracts\Repositories\Tweets\TweetsRepositoryInterface::class)
            ->give(function () {
                return $this->app->make(\App\Repositories\Tweets\TweetsEloquentRepository::class);
            });

        $this->app->resolving(\App\Http\Requests\Tweets\Index\Request::class, function($request, $app) {

            /* @var \App\Http\Requests\Tweets\Index\Request $request */
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            $request->setIncludesBag($app->make(\App\Http\Requests\Tweets\Index\IncludesBag::class, ['request' => $request]));
            $request->setSortingBag($app->make(\App\Http\Requests\Tweets\Index\SortingBag::class, ['request' => $request]));
            $request->setPaginationBag($app->make(\App\Http\Requests\Tweets\Index\PaginationBag::class, ['request' => $request]));
            $request->setFiltersBag($app->make(\App\Http\Requests\Tweets\Index\FiltersBag::class, ['request' => $request]));
        });

        $this->app->resolving(\App\Http\Requests\Tweets\View\Request::class, function($request, $app) {

            /* @var \App\Http\Requests\Tweets\View\Request $request */
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            $request->setIncludesBag($app->make(\App\Http\Requests\Tweets\View\IncludesBag::class, ['request' => $request]));
        });

        $this->app->resolving(\App\Http\Requests\Tweets\Analyze\Request::class, function($request, $app) {

            /* @var \App\Http\Requests\Tweets\Analyze\Request $request */
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            $request->setIncludesBag($app->make(\App\Http\Requests\Tweets\Analyze\IncludesBag::class, ['request' => $request]));
        });

        $this->app->bind(\App\Contracts\Models\TweetModelInterface::class, function ($app) {
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            return $app->make(\App\Models\Tweet::class);
        });
    }
}