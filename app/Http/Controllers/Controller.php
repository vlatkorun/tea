<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Contracts\Http\Requests\SupportsFilteringInterface;
use App\Contracts\Http\Requests\SupportsIncludesInterface;
use App\Contracts\Http\Requests\SupportsPaginationInterface;
use App\Contracts\Http\Requests\SupportsSortingInterface;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $defaultRequestOptions = [
        'includes' => [],
        'sort' => [],
        'limit' => null,
        'page' => null,
        'filters' => []
    ];

    protected function parseRequestOptions(Request $request)
    {
        $includes = $request instanceof SupportsIncludesInterface ? $request->extractIncludes() : $this->defaultRequestOptions['includes'];
        $sort = $request instanceof SupportsSortingInterface ? $request->extractSorting() : $this->defaultRequestOptions['sort'];
        $filters = $request instanceof SupportsFilteringInterface ? $request->extractFilters() : $this->defaultRequestOptions['filters'];

        $limit = $this->defaultRequestOptions['limit'];
        $page = $this->defaultRequestOptions['page'];

        if($request instanceof SupportsPaginationInterface && $paginationParams = $request->extractPagination()) {
            $page = $paginationParams['page'];
            $limit = $paginationParams['limit'];
        }

        return [
            'includes' => $includes,
            'sort' => $sort,
            'limit' => $limit,
            'page' => $page,
            'filters' => $filters
        ];
    }
}
