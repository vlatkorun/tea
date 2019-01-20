<?php

namespace App\Contracts\Services\Google\NaturalLanguageApi;

interface NaturalLanguageServiceInterface
{
    public function analyzeEntities($text, array $options = []) : array;

    public function setLanguage(string $language) : NaturalLanguageServiceInterface;
}