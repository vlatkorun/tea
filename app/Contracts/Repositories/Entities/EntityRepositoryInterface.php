<?php

namespace App\Contracts\Repositories\Entities;

use Illuminate\Support\Collection;
use App\Contracts\Models\EntityModelInterface;

interface EntityRepositoryInterface
{
    public function getEntities(array $options = []) : Collection;
    public function getEntityById($id, array $options = []) : ?EntityModelInterface;
    public function createEntity(array $params) : EntityModelInterface;
    public function updateEntity(EntityModelInterface $entity, array $params) : EntityModelInterface;
    public function deleteEntity(EntityModelInterface $entity, array $params = []) : bool;
}