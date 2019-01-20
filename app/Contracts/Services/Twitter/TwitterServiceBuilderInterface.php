<?php

namespace App\Contracts\Services\Twitter;

interface TwitterServiceBuilderInterface
{
    public function buildSearchService() : TwitterSearchServiceInterface;

    public function setOAuth(array $params) : TwitterServiceBuilderInterface;

    public function setBaseUrl(string $baseUrl) : TwitterServiceBuilderInterface;
}