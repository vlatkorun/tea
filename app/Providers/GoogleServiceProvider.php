<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class GoogleServiceProvider extends ServiceProvider
{
    public function register() {
        $this->app->bind(\App\Contracts\Services\Google\NaturalLanguageApi\NaturalLanguageServiceBuilderInterface::class, function ($app) {
            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */
            return $app->make(\App\Services\Google\NaturalLanguageApi\NaturalLanguageServiceBuilder::class);
        });

        $this->app->bind(\App\Contracts\Services\Google\NaturalLanguageApi\NaturalLanguageServiceInterface::class, function ($app) {

            /* @var \Illuminate\Contracts\Foundation\Application|\Illuminate\Foundation\Application $app */

            /* @var \App\Contracts\Services\Google\NaturalLanguageApi\NaturalLanguageServiceBuilderInterface $builder */
            $builder = $app->make(\App\Contracts\Services\Google\NaturalLanguageApi\NaturalLanguageServiceBuilderInterface::class);

            return $builder->build([
                'projectId' => config('services.google.natural_language_api.project_id'),
                'language' => 'en',
            ]);
        });
    }
}