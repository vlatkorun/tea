<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class EntitiesServiceProvider extends ServiceProvider
{
    public function register() {
        $this->app->bind(\App\Contracts\Repositories\Entities\EntityRepositoryInterface::class, function ($app) {
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            return $app->make(\App\Repositories\Entities\EntitiesEloquentRepository::class);
        });
    }
}