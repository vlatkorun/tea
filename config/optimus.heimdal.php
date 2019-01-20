<?php

use Symfony\Component\HttpKernel\Exception as SymfonyException;
use Optimus\Heimdal\Formatters;

return [
    'add_cors_headers' => false,

    // Has to be in prioritized order, e.g. highest priority first.
    'formatters' => [
        Illuminate\Auth\AuthenticationException::class => App\Exceptions\Formatters\Api\Access\AuthenticationExceptionFormatter::class,
        Illuminate\Database\Eloquent\ModelNotFoundException::class => App\Exceptions\Formatters\Api\Database\ModelNotFoundExceptionFormatter::class,
        Illuminate\Auth\Access\AuthorizationException::class => App\Exceptions\Formatters\Api\Access\AuthorizationExceptionFormatter::class,
        App\Exceptions\Resources\ResourceNotFoundException::class => App\Exceptions\Formatters\Api\Resources\ResourceNotFoundExceptionFormatter::class,
        Illuminate\Validation\ValidationException::class => App\Exceptions\Formatters\Api\Validation\ValidationExceptionFormatter::class,
        SymfonyException\UnprocessableEntityHttpException::class => Formatters\UnprocessableEntityHttpExceptionFormatter::class,
        SymfonyException\HttpException::class => Formatters\HttpExceptionFormatter::class,
        Exception::class => Formatters\ExceptionFormatter::class,
    ],

    'response_factory' => \Optimus\Heimdal\ResponseFactory::class,

    'reporters' => [
//        'sentry' => [
//            'class'  => \Optimus\Heimdal\Reporters\SentryReporter::class,
//            'config' => [
//                'dsn' => env('SENTRY_DSN', 'https://5a367010546c4dd1965825117a879a18:f259fc1e831a455990891781aaffb3a4@sentry.io/1019676'),
//                // For extra options see https://docs.sentry.io/clients/php/config/
//                // php version and environment are automatically added.
//                'sentry_options' => []
//            ]
//        ]
    ],

    'server_error_production' => 'An error occurred.'
];
