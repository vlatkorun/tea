<?php

namespace App\Http\Requests\Tweets\Index;

use Illuminate\Foundation\Http\FormRequest;
use App\Contracts\Http\Requests\SupportsIncludesInterface;
use App\Contracts\Http\Requests\SupportsSortingInterface;
use App\Contracts\Http\Requests\SupportsFilteringInterface;
use App\Contracts\Http\Requests\SupportsPaginationInterface;
use App\Contracts\Http\Requests\Bags\BagInterface;

class Request extends FormRequest implements SupportsIncludesInterface, SupportsSortingInterface, SupportsFilteringInterface, SupportsPaginationInterface
{
    /* @var BagInterface $includesBag */
    protected $includesBag;

    /* @var BagInterface $sortingBag */
    protected $sortingBag;

    /* @var BagInterface $filtersBag */
    protected $filtersBag;

    /* @var BagInterface $paginationBag */
    protected $paginationBag;

    public function extractIncludes() : array {
        return $this->includesBag->attributes();
    }

    public function setIncludesBag(BagInterface $bag) : SupportsIncludesInterface {
        $this->includesBag = $bag;
        return $this;
    }

    public function getIncludesBag() : BagInterface {
        return $this->includesBag;
    }

    public function rules() : array {
        return [];
    }

    public function extractSorting() : array {
        return $this->sortingBag->attributes();
    }

    public function setSortingBag(BagInterface $bag) : SupportsSortingInterface {
        $this->sortingBag = $bag;
        return $this;
    }

    public function getSortingBag() : BagInterface {
        return $this->sortingBag;
    }

    public function extractFilters() : array {
        return $this->filtersBag->attributes();
    }

    public function setFiltersBag(BagInterface $bag) : SupportsFilteringInterface {
        $this->filtersBag = $bag;
        return $this;
    }

    public function getFiltersBag() : BagInterface {
        return $this->filtersBag;
    }

    public function extractPagination() : array {
        return $this->paginationBag->attributes();
    }

    public function setPaginationBag(BagInterface $bag) : SupportsPaginationInterface {
        $this->paginationBag = $bag;
        return $this;
    }

    public function getPaginationBag() : BagInterface {
        return $this->paginationBag;
    }
}