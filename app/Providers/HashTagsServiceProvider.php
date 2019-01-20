<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class HashTagsServiceProvider extends ServiceProvider
{
    public function register() {
        $this->app->bind(\App\Contracts\Repositories\HashTags\HashTagsRepositoryInterface::class, function ($app) {
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            return $app->make(\App\Repositories\HashTags\HashTagsEloquentRepository::class);
        });
    }
}