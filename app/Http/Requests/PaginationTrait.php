<?php

namespace App\Http\Requests;

trait PaginationTrait
{
    protected function parsePagination($page = null, $limit = null)
    {
        $pagination = [
            'page' => $page,
            'limit' => $limit,
        ];

        return $pagination;
    }
}