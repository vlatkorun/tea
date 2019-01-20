<?php

namespace App\Listeners\Tweets;

use App\Listeners\Listener;
use Illuminate\Contracts\Queue\ShouldQueue;
use Exception;
use App\Contracts\Services\Google\NaturalLanguageApi\NaturalLanguageServiceInterface;
use App\Contracts\Repositories\Entities\EntityRepositoryInterface;

class AnalyzeTweet extends Listener implements ShouldQueue
{
    protected $languageService;

    protected $entityRepository;

    public function __construct(NaturalLanguageServiceInterface $languageService, EntityRepositoryInterface $entityRepository) {
        $this->languageService = $languageService;
        $this->entityRepository = $entityRepository;
    }

    public function handle($event) {

        /* @var \App\Events\Tweets\TweetSavedInDatabase|\App\Events\Tweets\AnalyzeTweet $event */

        try {

            $entitiesFromApi = $this->languageService->analyzeEntities($event->tweet->getText());

            if(!empty($entitiesFromApi)) {

                foreach($event->tweet->getEntities() as $entity) {
                    $this->entityRepository->deleteEntity($entity);
                }

                foreach($entitiesFromApi as $item) {
                    $this->entityRepository->createEntity([
                        'tweet_id' => $event->tweet->getId(),
                        'name' => $item['name'],
                        'type' => $item['type'],
                        'json_result' => json_encode($item),
                    ]);
                }
            }
        } catch(Exception $exception) {
            //log error
        }
    }
}