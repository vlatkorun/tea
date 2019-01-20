<?php

namespace App\Contracts\Models;

interface EntityModelInterface
{
    public function getTweet() : TweetModelInterface;

    public function getId() : int;

    public function getName() : string;

    public function getType() : string;
}