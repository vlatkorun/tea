<?php


namespace App\Contracts\Models;

interface HashTagModelInterface
{
    public function getTweet() : TweetModelInterface;

    public function getId() : int;

    public function getValue() : string;
}