<?php

namespace App\Services\Google\NaturalLanguageApi;

use Google\Cloud\Language\LanguageClient;
use App\Contracts\Services\Google\NaturalLanguageApi\NaturalLanguageServiceBuilderInterface;
use App\Contracts\Services\Google\NaturalLanguageApi\NaturalLanguageServiceInterface;

class NaturalLanguageServiceBuilder implements NaturalLanguageServiceBuilderInterface
{
    public function build(array $options) : NaturalLanguageServiceInterface {

        if(empty($options['projectId'])) {
            throw new \InvalidArgumentException('Missing projectId param');
        }

        $languageService = new NaturalLanguageService(new LanguageClient([
            'projectId' => $options['projectId']
        ]));

        if(!empty($options['language'])) {
            $languageService->setLanguage($options['language']);
        }

        return $languageService;
    }
}