<?php

namespace App\Contracts\Services\Google\NaturalLanguageApi;

interface NaturalLanguageServiceBuilderInterface
{
    public function build(array $options) : NaturalLanguageServiceInterface;
}