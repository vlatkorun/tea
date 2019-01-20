<?php

namespace App\Contracts\Repositories\HashTags;

use Illuminate\Support\Collection;
use App\Contracts\Models\HashTagModelInterface;

interface HashTagsRepositoryInterface
{
    public function getHashTags(array $options = []) : Collection;
    public function getHashTagById($id, array $options = []) : ?HashTagModelInterface;
    public function createHashTag(array $params) : HashTagModelInterface;
    public function updateHashTag(HashTagModelInterface $hashTag, array $params) : HashTagModelInterface;
    public function deleteHashTag(HashTagModelInterface $hashTag, array $params = []) : bool;
}