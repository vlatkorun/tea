<?php

namespace App\Repositories;

use Optimus\Genie\Repository;
use Illuminate\Database\Eloquent\Builder;
use InvalidArgumentException;

abstract class AbstractEloquentRepository extends Repository
{
    protected $filter;

    public function filterAllowedInput(array $input = [], array $allowed = []) {

        if(empty($allowed) && isset($this->allowedInput) && is_array($this->allowedInput)) {
            $allowed = $this->allowedInput;
        }

        foreach($input as $key => $value)  {

            if(!in_array($key, $allowed)) {
                unset($input[$key]);
                continue;
            }

            if(is_numeric($value) && (int) $value === 0) {
                continue;
            }

            if(empty($value)) {
                unset($input[$key]);
            }
        }

        return $input;
    }

    protected function applyResourceOptions(Builder $queryBuilder, array $options = [])
    {
        if(empty($options)) {
            return $queryBuilder;
        }

        extract($options);

        if(isset($includes)) {

            if(!is_array($includes)) {
                throw new InvalidArgumentException('Includes should be an array.');
            }

            $queryBuilder = $this->applyIncludesToQuery($queryBuilder, $includes);
        }

        if(class_exists($this->filter) && !empty($filters)) {

            if(!is_array($filters)) {
                throw new InvalidArgumentException('Filters should be an array.');
            }

            $queryBuilder = $this->applyFiltersToQuery($queryBuilder, $filters);
        }

        if(!empty($sort)) {

            if(!is_array($sort)) {
                throw new InvalidArgumentException('Sort should be an array.');
            }

            if(!isset($filterJoins)) {
                $filterJoins = [];
            }

            $this->applySorting($queryBuilder, $sort, $filterJoins);
        }

        if(isset($distinct)) {
            $queryBuilder->distinct();
        }

        return $queryBuilder;
    }

    public function get(array $options = []) {

        $query = $this->createBaseBuilder($options);

        extract($options);

        if(isset($page) && isset($limit)) {
            return $query->paginate($limit);
        }

        if(!isset($page) && isset($limit)) {
            $query->limit($limit)->offset(0);
        }

        return $query->get();
    }

    protected function applyIncludesToQuery(Builder $query, array $includes) {
        return $query->with($includes);
    }

    public function applyFiltersToQuery(Builder $query, array $filters = []) {
        return with(new $this->filter($filters))->apply($query);
    }

    public function getByIdOrFail($id, array $options = []) {
        $query = $this->createBaseBuilder($options);
        return $query->findOrFail($id);
    }

    protected function applyWhereArray(Builder $query, array $clauses) {

        foreach($clauses as $key => $value) {

            if(is_null($value)) {
                $query->whereNull($key);
                continue;
            }

            if(!is_array($value)) {
                $query->where($key, $value);
                continue;
            }

            if(array_key_exists('operator', $value) && array_key_exists('value', $value)) {
                $query->where($key, $value['operator'], $value['value']);
                continue;
            }

            $query->whereIn($key, $value);
        }
    }
}