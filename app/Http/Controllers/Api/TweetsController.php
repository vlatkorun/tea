<?php

namespace App\Http\Controllers\Api;

use App\Events\Tweets\GetNewTweets;
use App\Events\Tweets\AnalyzeTweet;
use App\Http\Requests\Tweets\Run\Request as Run;
use App\Http\Controllers\Controller;
use App\Contracts\Repositories\Tweets\TweetsRepositoryInterface;
use App\Http\Requests\Tweets\Index\Request as Index;
use App\Http\Requests\Tweets\View\Request as View;
use App\Http\Requests\Tweets\Analyze\Request as Analyze;
use App\Http\Resources\TweetResource;

class TweetsController extends Controller
{
    protected $tweetsRepository;

    public function __construct(TweetsRepositoryInterface $tweetsRepository) {
        $this->tweetsRepository = $tweetsRepository;
    }

    public function index(Index $request) {
        return TweetResource::collection($this->tweetsRepository->getTweets($this->parseRequestOptions($request)));
    }

    public function view($id, View $request) {
        return new TweetResource($request->getResource());
    }

    public function run(Run $request) {

        $params = $request->extractParams();

        event(new GetNewTweets($params['keyword'], $request->session()->get('client_id')));

        return response()->json(['message' => 'Fetching started']);
    }

    public function analyze($id, Analyze $request) {
        event(new AnalyzeTweet($request->getResource(), $request->session()->get('client_id')));
        return response()->json(['message' => 'Analyze started']);
    }
}