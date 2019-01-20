<?php

namespace App\Contracts\Services\Twitter;

interface TwitterSearchServiceInterface
{
    public function setResultType(string $type) : TwitterSearchServiceInterface;

    public function setCount(int $count) : TwitterSearchServiceInterface;

    public function setIncludeEntities(bool $include) : TwitterSearchServiceInterface;

    public function setUrl(string $url) : TwitterSearchServiceInterface;

    public function setLanguage(string $language) : TwitterSearchServiceInterface;

    public function search(array $query) : array;

    public function buildQueryParams() : array;
}