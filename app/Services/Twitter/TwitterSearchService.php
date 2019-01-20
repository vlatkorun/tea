<?php

namespace App\Services\Twitter;

use App\Contracts\Services\Twitter\TwitterSearchServiceInterface;
use GuzzleHttp\Client;

class TwitterSearchService implements TwitterSearchServiceInterface
{
    /* @var \GuzzleHttp\Client $httpClient */
    protected $httpClient;

    protected $resultType;

    protected $count;

    protected $language;

    protected $includeEntities;

    protected $url = '/search/tweets.json';

    public function __construct(Client $client) {
        $this->httpClient = $client;
    }

    public function setResultType(string $type) : TwitterSearchServiceInterface {

        if(!in_array($type, ['mixed', 'recent', 'popular'])) {
            throw new \InvalidArgumentException('Type not recognized');
        }

        $this->resultType = $type;

        return $this;
    }

    public function setCount(int $count) : TwitterSearchServiceInterface {

        if(!$count > 0) {
            throw new \InvalidArgumentException('Count value must be greater then 0');
        }

        $this->count = $count;

        return $this;
    }

    public function setIncludeEntities(bool $include) : TwitterSearchServiceInterface {
        $this->includeEntities = $include;
        return $this;
    }

    public function setUrl(string $url) : TwitterSearchServiceInterface {
        $this->url = $url;
        return $this;
    }

    public function search(array $query) : array {

        $response = $this->httpClient->request('GET', $this->url, ['query' => array_merge($this->buildQueryParams(), ['q' => urlencode(implode(" ", $query))])]);

        $result = json_decode($response->getBody()->getContents());

        return !empty($result->statuses) && is_array($result->statuses) ? $result->statuses : [];
    }

    public function buildQueryParams() : array {
        return [
            'result_type' => $this->resultType,
            'count' => $this->count,
            'include_entities' => $this->includeEntities,
            'lang' => $this->language,
        ];
    }

    public function setLanguage(string $language) : TwitterSearchServiceInterface {

        if(!in_array($language, ['en'])) {
            throw new \InvalidArgumentException('Language not recognized');
        }

        $this->language = $language;

        return $this;
    }
}