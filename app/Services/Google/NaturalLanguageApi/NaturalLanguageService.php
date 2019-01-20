<?php

namespace App\Services\Google\NaturalLanguageApi;

use Google\Cloud\Language\LanguageClient;
use App\Contracts\Services\Google\NaturalLanguageApi\NaturalLanguageServiceInterface;

class NaturalLanguageService implements NaturalLanguageServiceInterface
{
    protected $languageClient;

    protected $language;

    public function __construct(LanguageClient $languageClient) {
        $this->languageClient = $languageClient;
    }

    public function analyzeEntities($text, array $options = []) : array {

        if(!empty($options['language'])) {
            $this->setLanguage($options['language']);
        }

        $annotation = $this->languageClient->analyzeEntities($text, ['language' => $this->language]);

        return $annotation->entities();
    }

    public function setLanguage(string $language) : NaturalLanguageServiceInterface {

        if(!in_array($language, ['en'])) {
            throw new \InvalidArgumentException('Language not recognized');
        }

        $this->language = $language;

        return $this;
    }
}