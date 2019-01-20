<?php

namespace App\Repositories\HashTags;

use Illuminate\Support\Collection;
use App\Contracts\Models\HashTagModelInterface;
use App\Contracts\Repositories\HashTags\HashTagsRepositoryInterface;
use App\Repositories\AbstractEloquentRepository;
use App\Models\HashTag;
use Illuminate\Support\Facades\DB;
use Exception;

class HashTagsEloquentRepository extends AbstractEloquentRepository implements HashTagsRepositoryInterface
{
    protected $allowedInput = [
        'tweet_id',
        'value',
    ];

    protected function getModel() {
        return new HashTag;
    }

    public function getHashTags(array $options = []) : Collection {

    }

    public function getHashTagById($id, array $options = []) : ?HashTagModelInterface {

    }

    public function createHashTag(array $params) : HashTagModelInterface {

        DB::beginTransaction();

        try {

            $hashTag = $this->getModel();

            $hashTag->fill($this->filterAllowedInput($params));
            $hashTag->save();

        } catch(Exception $e) {

            DB::rollBack();

            throw $e;
        }

        DB::commit();

        return $hashTag;
    }

    public function updateHashTag(HashTagModelInterface $hashTag, array $params) : HashTagModelInterface {

        DB::beginTransaction();

        try {
            $hashTag->update($this->filterAllowedInput($params));
        } catch(Exception $e) {

            DB::rollBack();

            throw $e;
        }

        DB::commit();

        return $hashTag;
    }

    public function deleteHashTag(HashTagModelInterface $hashTag, array $params = []) : bool {

    }
}