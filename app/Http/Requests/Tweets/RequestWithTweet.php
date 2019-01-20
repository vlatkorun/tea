<?php


namespace App\Http\Requests\Tweets;

use Illuminate\Foundation\Http\FormRequest;
use App\Contracts\Http\Requests\ContainsResourceInterface;
use App\Contracts\Http\Requests\SupportsIncludesInterface;
use App\Contracts\Models\TweetModelInterface;
use App\Contracts\Repositories\Tweets\TweetsRepositoryInterface;
use App\Contracts\Http\Requests\Bags\BagInterface;
use Illuminate\Database\Eloquent\ModelNotFoundException;

abstract class RequestWithTweet extends FormRequest implements ContainsResourceInterface, SupportsIncludesInterface
{
    /* @var BagInterface $includesBag */
    protected $includesBag;

    /** @var TweetModelInterface $tweet */
    protected $tweet;

    /** @var TweetsRepositoryInterface $orderRepository */
    protected $tweetsRepository;

    public function extractIncludes() : array {
        return $this->includesBag->attributes();
    }

    public function setIncludesBag(BagInterface $bag) : SupportsIncludesInterface {
        $this->includesBag = $bag;
        return $this;
    }

    public function getIncludesBag() : BagInterface {
        return $this->includesBag;
    }

    public function rules() : array {
        return [];
    }

    public function setResource($resource) : ContainsResourceInterface {
        $this->order = $resource;
        return $this;
    }

    public function getResourceFromRequest() {

        if(is_null($this->tweetsRepository)) {
            $this->tweetsRepository = $this->container->make(TweetsRepositoryInterface::class);
        }

        $tweet = $this->tweetsRepository->getTweetById($this->route('tweet') ?: $this->get('tweet'), ['includes' => $this->extractIncludes()]);

        if(!$tweet instanceof TweetModelInterface) {
            throw (new ModelNotFoundException)->setModel(
                get_class($this->container->make(TweetModelInterface::class)), $this->route('tweet')
            );
        }

        return $tweet;
    }

    public function getResource() {

        if($this->tweet instanceof TweetModelInterface) {
            return $this->tweet;
        }

        $tweet = $this->getResourceFromRequest();

        $this->setResource($tweet);

        return $tweet;
    }
}