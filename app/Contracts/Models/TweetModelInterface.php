<?php

namespace App\Contracts\Models;

use Illuminate\Support\Collection;
use Carbon\Carbon;

interface TweetModelInterface
{
    public function getHashTags() : Collection;
    public function getEntities() : Collection;
    public function getId() : int;
    public function getText() : string;
    public function getKeyword() : string;
    public function getTwitterId() : string;
    public function getTwitterCreatedAt() : Carbon;
}