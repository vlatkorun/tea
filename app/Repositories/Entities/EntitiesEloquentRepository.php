<?php

namespace App\Repositories\Entities;

use Illuminate\Support\Collection;
use App\Contracts\Models\EntityModelInterface;
use App\Contracts\Repositories\Entities\EntityRepositoryInterface;
use App\Repositories\AbstractEloquentRepository;
use App\Models\Entity;
use Illuminate\Support\Facades\DB;
use Exception;

class EntitiesEloquentRepository extends AbstractEloquentRepository implements EntityRepositoryInterface
{
    protected $allowedInput = [
        'tweet_id',
        'name',
        'type',
        'json_result',
    ];

    protected function getModel() {
        return new Entity;
    }

    public function getEntities(array $options = []) : Collection {

    }

    public function getEntityById($id, array $options = []) : ?EntityModelInterface {
        return $this->getById($id, $options);
    }

    public function createEntity(array $params) : EntityModelInterface {

        DB::beginTransaction();

        try {

            $entity = $this->getModel();

            $entity->fill($this->filterAllowedInput($params));
            $entity->save();

        } catch(Exception $e) {

            DB::rollBack();

            throw $e;
        }

        DB::commit();

        return $entity;
    }

    public function updateEntity(EntityModelInterface $entity, array $params) : EntityModelInterface {

    }

    public function deleteEntity(EntityModelInterface $entity, array $params = []) : bool {
        $this->delete($entity->getId());
        return true;
    }
}