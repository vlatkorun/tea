<?php

namespace App\Services\Twitter;

use App\Contracts\Services\Twitter\TwitterServiceBuilderInterface;
use App\Contracts\Services\Twitter\TwitterSearchServiceInterface;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Subscriber\Oauth\Oauth1;

class TwitterServiceBuilder implements TwitterServiceBuilderInterface
{
    protected $oauth = [
        'consumer_key' => null,
        'consumer_secret' => null,
        'token' => null,
        'token_secret' => null,
    ];

    protected $baseUrl;

    public function buildSearchService() : TwitterSearchServiceInterface  {

        $stack = HandlerStack::create();

        $stack->push(new Oauth1($this->oauth));

        return new TwitterSearchService(new Client([
            'base_uri' => $this->baseUrl,
            'handler' => $stack,
            'auth' => 'oauth'
        ]));
    }

    public function setOAuth(array $params) : TwitterServiceBuilderInterface {

        if(count(array_intersect_key($this->oauth, $params)) !== 4) {
            throw new \InvalidArgumentException('Invalid OAuth arguments supplied');
        }

        $this->oauth = $params;

        return $this;
    }

    public function setBaseUrl(string $baseUrl) : TwitterServiceBuilderInterface {
        $this->baseUrl = $baseUrl;
        return $this;
    }
}